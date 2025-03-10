n.d(t, {
    O: () => O,
    U: () => _.Un
}),
    n(653041),
    n(571269),
    n(298267),
    n(266796);
var r = n(200651),
    i = n(192379),
    a = n(373793),
    o = n(442837),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(783097),
    u = n(606192),
    p = n(812236),
    m = n(706454),
    f = n(768581),
    h = n(135431),
    g = n(758199),
    _ = n(914498),
    b = n(172109),
    v = n(880251),
    y = n(208444),
    x = n(388032),
    E = n(390101);
function O(e) {
    let { app: t, embedUrl: n, linkType: a, activityCustomId: o, activityReferrerId: l } = e,
        { name: m, bot: h } = (t = (0, b.O)(t)),
        E = null == h ? void 0 : h.id,
        O = (0, d.ye)(t),
        C = f.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: h
        }),
        { staticBannerSrc: I, videoBannerSrc: S, bannerAspectRatio: T } = (0, v.E)(t),
        { analyticsLocations: P } = (0, c.ZP)(s.Z.APP_MESSAGE_EMBED),
        A = i.useCallback(
            (e) => {
                (0, _.KX)(t.id, a, e, l, o);
            },
            [o, l, t.id, a]
        ),
        w = i.useCallback(() => {
            (0, _.GF)(t.id, a, l, o);
        }, [o, l, t.id, a]),
        Z = i.useCallback(() => {
            (0, _.Yu)(t.id, a);
        }, [t.id, a]),
        k = (0, p.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == h ? void 0 : h.id
        }),
        R = null != E && O && k,
        D = (0, y.z)(t, A),
        L = i.useMemo(() => {
            let e = [];
            return (
                R &&
                    e.push({
                        label: x.NW.string(x.t.RscU7O),
                        onClick() {
                            (0, u.W)({
                                appId: t.id,
                                botId: E,
                                analyticsLocations: P,
                                customId: o,
                                referrerId: l
                            }),
                                A(_.j_.PLAY);
                        }
                    }),
                null != D && e.push(D),
                e
            );
        }, [o, l, P, t.id, E, R, A, D]),
        M = O ? (0, r.jsx)(N, { app: t }) : (0, r.jsx)(j, { app: t });
    return (0, r.jsx)(g.W, {
        title: m,
        staticBannerSrc: I,
        videoBannerSrc: S,
        bannerAspectRatio: T,
        iconSrc: C,
        embedUrl: n,
        info: M,
        actions: L,
        onView: w,
        onLinkCopied: Z
    });
}
function j(e) {
    var t, n, s;
    let { app: c } = e,
        d =
            (0, h.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig
            }) &&
            null != c.integrationTypesConfig &&
            a.Y.GUILD_INSTALL in c.integrationTypesConfig,
        u = (0, o.e7)([m.default], () => m.default.locale, []),
        p = i.useMemo(() => {
            var e, t;
            if (!d) return null;
            let n = new Intl.NumberFormat(u, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = c.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 === r ? null : x.NW.format(x.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = c.directoryEntry) || void 0 === t ? void 0 : t.guild_count, d, u]),
        f = null === (s = c.categories) || void 0 === s ? void 0 : null === (n = s.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != f &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: E.description,
                    color: 'none',
                    children: f
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
function N(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i } = t,
        a = null != i ? x.NW.format(x.t.z8EAJS, { count: i }) : x.NW.string(x.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
        children: [
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
                }),
            (0, r.jsxs)(l.Text, {
                variant: 'text-xs/normal',
                className: E.tagline,
                color: 'none',
                lineClamp: 1,
                children: [
                    (0, r.jsx)(l.tBG, {
                        size: 'xxs',
                        color: 'currentColor'
                    }),
                    a
                ]
            })
        ]
    });
}
