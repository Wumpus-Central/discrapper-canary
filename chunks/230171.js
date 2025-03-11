n.d(t, {
    O: () => j,
    U: () => b.Un
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
    f = n(314897),
    h = n(768581),
    g = n(135431),
    _ = n(758199),
    b = n(914498),
    v = n(172109),
    y = n(880251),
    x = n(208444),
    E = n(388032),
    O = n(390101);
function j(e) {
    let { app: t, embedUrl: n, linkType: a, activityCustomId: l, activityReferrerId: m } = e,
        { name: g, bot: O } = (t = (0, v.O)(t)),
        j = null == O ? void 0 : O.id,
        I = (0, d.ye)(t),
        S = h.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: O
        }),
        { staticBannerSrc: T, videoBannerSrc: P, bannerAspectRatio: A } = (0, y.E)(t),
        w = (0, o.e7)([f.default], () => (null != m ? m : f.default.getId()), [m]),
        { analyticsLocations: Z } = (0, c.ZP)(s.Z.APP_MESSAGE_EMBED),
        k = i.useCallback(
            (e) => {
                (0, b.KX)(t.id, a, e, w, l);
            },
            [l, w, t.id, a]
        ),
        R = i.useCallback(() => {
            (0, b.GF)(t.id, a, w, l);
        }, [l, w, t.id, a]),
        D = i.useCallback(() => {
            (0, b.Yu)(t.id, a);
        }, [t.id, a]),
        L = (0, p.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == O ? void 0 : O.id
        }),
        M = null != j && I && L,
        W = (0, x.z)(t, k),
        F = i.useMemo(() => {
            let e = [];
            return (
                M &&
                    e.push({
                        label: E.NW.string(E.t.RscU7O),
                        onClick() {
                            (0, u.W)({
                                appId: t.id,
                                botId: j,
                                analyticsLocations: Z,
                                customId: l,
                                referrerId: w
                            }),
                                k(b.j_.PLAY);
                        }
                    }),
                null != W && e.push(W),
                e
            );
        }, [l, w, Z, t.id, j, M, k, W]),
        U = I ? (0, r.jsx)(C, { app: t }) : (0, r.jsx)(N, { app: t });
    return (0, r.jsx)(_.W, {
        title: g,
        staticBannerSrc: T,
        videoBannerSrc: P,
        bannerAspectRatio: A,
        iconSrc: S,
        embedUrl: n,
        info: U,
        actions: F,
        onView: R,
        onLinkCopied: D
    });
}
function N(e) {
    var t, n, s;
    let { app: c } = e,
        d =
            (0, g.Eb)({
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
            return 0 === r ? null : E.NW.format(E.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = c.directoryEntry) || void 0 === t ? void 0 : t.guild_count, d, u]),
        f = null === (s = c.categories) || void 0 === s ? void 0 : null === (n = s.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != f &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: O.description,
                    color: 'none',
                    children: f
                }),
            null != p &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: O.tagline,
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
        { tags: n, maxParticipants: i } = t,
        a = null != i ? E.NW.format(E.t.z8EAJS, { count: i }) : E.NW.string(E.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n.length > 0 &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: O.description,
                    color: 'none',
                    lineClamp: 1,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            'span',
                            {
                                className: O.tag,
                                children: e
                            },
                            t
                        )
                    )
                }),
            (0, r.jsxs)(l.Text, {
                variant: 'text-xs/normal',
                className: O.tagline,
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
