e.d(t, { default: () => j });
var r = e(255367);
e(73800);
var s = e(990547),
    o = e(442837),
    i = e(481060),
    n = e(37234),
    c = e(100527),
    l = e(906732),
    d = e(213609),
    _ = e(204418),
    u = e(1585),
    m = e(223143),
    v = e(313201),
    x = e(300284),
    p = e(158776),
    f = e(594174),
    I = e(741245),
    k = e(474936),
    T = e(388032),
    C = e(991405);
function h(a) {
    let { user: t, deco: e } = a,
        s = (0, o.e7)([p.Z], () => p.Z.getStatus(t.id));
    return (0, r.jsxs)('div', {
        className: C.avatarBackground,
        children: [
            (0, r.jsx)(_.Z, {
                user: t,
                guildId: void 0,
                avatarDecorationOverride: e,
                status: s,
                className: C.avatar
            }),
            (0, r.jsx)('div', { className: C.rect }),
            (0, r.jsx)('div', { className: C.rect }),
            (0, r.jsx)('div', { className: C.bottomOverlay })
        ]
    });
}
function j(a) {
    var t;
    let { transitionState: e, onClose: _ } = a,
        p = (0, v.Dt)(),
        { theme: j } = (0, i.TCT)(),
        N = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        { purchases: y } = (0, m.c7)(),
        A = null == (t = y.get('1225876188074082374')) ? void 0 : t.items,
        M = void 0 !== A ? A[0] : void 0,
        { analyticsLocations: D } = (0, l.ZP)(c.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL),
        b = (0, x.Z)({ analyticsLocations: D });
    return (
        (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
            properties: { location_stack: D }
        }),
        (0, r.jsxs)(i.Y0X, {
            transitionState: e,
            'aria-labelledby': p,
            className: C.container,
            children: [
                void 0 !== N &&
                    (0, r.jsx)(h, {
                        user: N,
                        deco: M
                    }),
                (0, r.jsxs)(i.hzk, {
                    className: C.content,
                    children: [
                        (0, r.jsx)(I.C, {
                            theme: j,
                            premiumType: k.p9.TIER_2,
                            type: I.C.Types.PREMIUM_ACTIVATED
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            color: 'text-normal',
                            className: C.bodyText,
                            children: T.intl.format(T.t['9juoTE'], {})
                        })
                    ]
                }),
                (0, r.jsx)(i.mzw, {
                    children: (0, r.jsx)(i.zxk, {
                        look: i.zxk.Looks.FILLED,
                        color: i.zxk.Colors.BRAND,
                        onClick: () => {
                            _(),
                                (0, n.xf)(),
                                b(),
                                (0, u.ps)({
                                    initialSelectedDecoration: M,
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
