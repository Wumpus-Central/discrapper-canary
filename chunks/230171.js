n.d(t, {
    O: () => j,
    U: () => v.Un
}),
    n(653041),
    n(571269),
    n(298267),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(373793),
    o = n(442837),
    l = n(481060),
    s = n(361213),
    c = n(778569),
    d = n(100527),
    u = n(906732),
    p = n(783097),
    m = n(606192),
    f = n(812236),
    h = n(706454),
    g = n(768581),
    _ = n(135431),
    b = n(758199),
    v = n(914498),
    y = n(172109),
    x = n(208444),
    O = n(388032),
    E = n(390101);
function j(e) {
    let { app: t, embedUrl: n, linkType: a, activityCustomId: o, activityReferrerId: l } = e,
        { name: h, bot: _ } = (t = (0, y.O)(t)),
        E = null == _ ? void 0 : _.id,
        j = (0, p.ye)(t),
        I = g.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: _
        }),
        { url: S } = (0, c.Z)({
            applicationId: j ? t.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: T,
            videoBannerSrc: P,
            bannerAspectRatio: A
        } = i.useMemo(() => {
            let e, n;
            let r = b.u.BOT;
            if (null != _) {
                let { banner: t } = _;
                (e = (0, g.aN)({
                    id: _.id,
                    banner: t,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, g.xR)(t) &&
                        null == S &&
                        (n = (0, g.aN)({
                            id: _.id,
                            banner: t,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (j) {
                let i = (0, p.yJ)(t);
                null != S && ((e = S), (r = b.u.ACTIVITY));
                let a = null == i ? void 0 : i.activity_preview_video_asset_id;
                null != a && ((n = (0, s.Z)(t.id, a)), (r = b.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: n,
                bannerAspectRatio: r
            };
        }, [S, _, j, t]),
        { analyticsLocations: w } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        Z = i.useCallback(
            (e) => {
                (0, v.KX)(t.id, a, e, l, o);
            },
            [o, l, t.id, a]
        ),
        k = i.useCallback(() => {
            (0, v.GF)(t.id, a, l, o);
        }, [o, l, t.id, a]),
        R = i.useCallback(() => {
            (0, v.Yu)(t.id, a);
        }, [t.id, a]),
        L = (0, f.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == _ ? void 0 : _.id
        }),
        D = null != E && j && L,
        M = (0, x.z)(t, Z),
        W = i.useMemo(() => {
            let e = [];
            return (
                D &&
                    e.push({
                        label: O.NW.string(O.t.RscU7O),
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: E,
                                analyticsLocations: w,
                                customId: o,
                                referrerId: l
                            }),
                                Z(v.j_.PLAY);
                        }
                    }),
                null != M && e.push(M),
                e
            );
        }, [o, l, w, t.id, E, D, Z, M]),
        F = j ? (0, r.jsx)(C, { app: t }) : (0, r.jsx)(N, { app: t });
    return (0, r.jsx)(b.W, {
        title: h,
        staticBannerSrc: T,
        videoBannerSrc: P,
        bannerAspectRatio: A,
        iconSrc: I,
        embedUrl: n,
        info: F,
        actions: W,
        onView: k,
        onLinkCopied: R
    });
}
function N(e) {
    var t, n, s;
    let { app: c } = e,
        d =
            (0, _.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig
            }) &&
            null != c.integrationTypesConfig &&
            a.Y.GUILD_INSTALL in c.integrationTypesConfig,
        u = (0, o.e7)([h.default], () => h.default.locale, []),
        p = i.useMemo(() => {
            var e, t;
            if (!d) return null;
            let n = new Intl.NumberFormat(u, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = c.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 === r ? null : O.NW.format(O.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = c.directoryEntry) || void 0 === t ? void 0 : t.guild_count, d, u]),
        m = null === (s = c.categories) || void 0 === s ? void 0 : null === (n = s.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != m &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: E.description,
                    color: 'none',
                    children: m
                }),
            null != p &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: E.tagline,
                    color: 'none',
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.Jmo, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        p
                    ]
                })
        ]
    });
}
function C(e) {
    let { app: t } = e,
        n = [null != t.maxParticipants ? O.NW.format(O.t.z8EAJS, { count: t.maxParticipants }) : O.NW.string(O.t.RjceQU), ...t.tags];
    return (
        n.length > 0 &&
        (0, r.jsx)(l.Text, {
            variant: 'text-xs/medium',
            className: E.description,
            color: 'none',
            lineClamp: 1,
            children: n.map((e, t) =>
                (0, r.jsx)(
                    'span',
                    {
                        className: E.tag,
                        children: e
                    },
                    t
                )
            )
        })
    );
}
