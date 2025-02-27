n.d(t, {
    O: () => I,
    U: () => O.Un
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
    g = n(81063),
    _ = n(768581),
    b = n(135431),
    v = n(850240),
    y = n(374211),
    x = n(758199),
    O = n(914498),
    E = n(172109),
    j = n(208444),
    N = n(388032),
    C = n(405796);
function I(e) {
    let { app: t, embedUrl: n, linkId: a, linkType: o, activityCustomId: l, activityReferrerId: h } = e,
        { name: b, bot: C } = (t = (0, E.O)(t)),
        I = null == C ? void 0 : C.id,
        P = (0, p.ye)(t),
        A = _.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: C
        }),
        { url: w } = (0, c.Z)({
            applicationId: P ? t.id : void 0,
            size: 600,
            names: ['embedded_cover']
        }),
        {
            staticBannerSrc: Z,
            videoBannerSrc: k,
            bannerAspectRatio: R
        } = i.useMemo(() => {
            let e, n;
            let r = x.u.BOT;
            if (null != C) {
                let { banner: t } = C;
                (e = (0, _.aN)({
                    id: C.id,
                    banner: t,
                    size: 512,
                    canAnimate: !1
                })),
                    (0, _.xR)(t) &&
                        null == w &&
                        (n = (0, _.aN)({
                            id: C.id,
                            banner: t,
                            size: 512,
                            canAnimate: !0
                        }));
            }
            if (P) {
                let i = (0, p.yJ)(t);
                null != w && ((e = w), (r = x.u.ACTIVITY));
                let a = null == i ? void 0 : i.activity_preview_video_asset_id;
                null != a && ((n = (0, s.Z)(t.id, a)), (r = x.u.ACTIVITY));
            }
            return {
                staticBannerSrc: e,
                videoBannerSrc: n,
                bannerAspectRatio: r
            };
        }, [w, C, P, t]),
        { analyticsLocations: L } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        D = i.useCallback(
            (e) => {
                (0, O.KX)(t.id, o, e, h, l);
            },
            [l, h, t.id, o]
        ),
        M = i.useCallback(() => {
            (0, O.GF)(t.id, o, h, l);
        }, [l, h, t.id, o]),
        W = i.useCallback(() => {
            (0, O.Yu)(t.id, o);
        }, [t.id, o]),
        F = (0, f.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == C ? void 0 : C.id
        }),
        U = null != I && P && F,
        B = (0, v._)(a),
        { data: G, error: H } = (0, y.h)(t.id, B),
        V = (0, j.z)(t, D),
        z = i.useMemo(() => {
            let e = [];
            if (U) {
                let n = (null == G ? void 0 : G.primary_cta) != null ? G.primary_cta : N.NW.string(N.t.RscU7O),
                    r = null != l ? l : null == G ? void 0 : G.custom_id,
                    i = null != h ? h : null == G ? void 0 : G.referrer_id;
                e.push({
                    label: n,
                    onClick() {
                        (0, m.W)({
                            appId: t.id,
                            botId: I,
                            analyticsLocations: L,
                            customId: r,
                            referrerId: i
                        }),
                            D(O.j_.PLAY);
                    }
                });
            }
            return null != V && e.push(V), e;
        }, [l, h, L, t.id, I, U, null == G ? void 0 : G.custom_id, null == G ? void 0 : G.primary_cta, null == G ? void 0 : G.referrer_id, D, V]),
        K = P ? (0, r.jsx)(T, { app: t }) : (0, r.jsx)(S, { app: t });
    return null != a && null == H
        ? null == G
            ? null
            : (0, r.jsx)(x.W, {
                  header: G.title,
                  title: b,
                  staticBannerSrc: (0, g.getAssetImage)(t.id, G.asset_id, 512),
                  iconSrc: A,
                  embedUrl: n,
                  info: K,
                  actions: z
              })
        : (0, r.jsx)(x.W, {
              title: b,
              staticBannerSrc: Z,
              videoBannerSrc: k,
              bannerAspectRatio: R,
              iconSrc: A,
              embedUrl: n,
              info: K,
              actions: z,
              onView: M,
              onLinkCopied: W
          });
}
function S(e) {
    var t, n, s;
    let { app: c } = e,
        d =
            (0, b.Eb)({
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
            return 0 === r ? null : N.NW.format(N.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = c.directoryEntry) || void 0 === t ? void 0 : t.guild_count, d, u]),
        m = null === (s = c.categories) || void 0 === s ? void 0 : null === (n = s.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != m &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: C.description,
                    color: 'none',
                    children: m
                }),
            null != p &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: C.tagline,
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
function T(e) {
    let { app: t } = e,
        n = [null != t.maxParticipants ? N.NW.format(N.t.z8EAJS, { count: t.maxParticipants }) : N.NW.string(N.t.RjceQU), ...t.tags];
    return (0, r.jsx)(r.Fragment, {
        children:
            n.length > 0 &&
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: C.description,
                color: 'none',
                lineClamp: 1,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        'span',
                        {
                            className: C.tag,
                            children: e
                        },
                        t
                    )
                )
            })
    });
}
