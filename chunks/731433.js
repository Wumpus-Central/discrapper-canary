a.d(t, { default: () => j });
var r = a(255367);
a(73800);
var s = a(990547),
    o = a(442837),
    i = a(481060),
    n = a(37234),
    c = a(100527),
    l = a(906732),
    d = a(213609),
    u = a(204418),
    _ = a(1585),
    m = a(223143),
    p = a(313201),
    v = a(300284),
    x = a(158776),
    f = a(594174),
    k = a(741245),
    I = a(474936),
    T = a(388032),
    M = a(991405);
function h(e) {
    let { user: t, deco: a } = e,
        s = (0, o.e7)([x.Z], () => x.Z.getStatus(t.id));
    return (0, r.jsxs)('div', {
        className: M.avatarBackground,
        children: [
            (0, r.jsx)(u.Z, {
                user: t,
                guildId: void 0,
                avatarDecorationOverride: a,
                status: s,
                className: M.avatar
            }),
            (0, r.jsx)('div', { className: M.rect }),
            (0, r.jsx)('div', { className: M.rect }),
            (0, r.jsx)('div', { className: M.bottomOverlay })
        ]
    });
}
function j(e) {
    var t;
    let { transitionState: a, onClose: u } = e,
        x = (0, p.Dt)(),
        { theme: j } = (0, i.TCT)(),
        A = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        { purchases: C } = (0, m.c7)(),
        N = null == (t = C.get('1225876188074082374')) ? void 0 : t.items,
        y = void 0 !== N ? N[0] : void 0,
        { analyticsLocations: D } = (0, l.ZP)(c.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL),
        b = (0, v.Z)({ analyticsLocations: D });
    return (
        (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
            properties: { location_stack: D }
        }),
        (0, r.jsxs)(i.Y0X, {
            transitionState: a,
            'aria-labelledby': x,
            className: M.container,
            parentComponent: 'PremiumSubscriptionAprilMarketingDecoModal',
            children: [
                void 0 !== A &&
                    (0, r.jsx)(h, {
                        user: A,
                        deco: y
                    }),
                (0, r.jsxs)(i.hzk, {
                    className: M.content,
                    children: [
                        (0, r.jsx)(k.ZP, {
                            theme: j,
                            premiumType: I.p9.TIER_2,
                            type: k.ZP.Types.PREMIUM_ACTIVATED
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            color: 'text-default',
                            className: M.bodyText,
                            children: T.intl.format(T.t['9juoTE'], {})
                        })
                    ]
                }),
                (0, r.jsx)(i.mzw, {
                    children: (0, r.jsx)(i.zxk, {
                        look: i.zxk.Looks.FILLED,
                        color: i.zxk.Colors.BRAND,
                        onClick: () => {
                            u(),
                                (0, n.xf)(),
                                b(),
                                (0, _.ps)({
                                    initialSelectedDecoration: y,
                                    analyticsLocations: D
                                });
                        },
                        children: T.intl.string(T.t.BVcYCw)
                    })
                })
            ]
        })
    );
}
