e.d(t, { default: () => C });
var r = e(200651);
e(192379);
var s = e(990547),
    o = e(442837),
    n = e(481060),
    i = e(37234),
    c = e(100527),
    l = e(906732),
    d = e(213609),
    _ = e(204418),
    u = e(1585),
    m = e(223143),
    v = e(313201),
    x = e(300284),
    p = e(158776),
    T = e(594174),
    f = e(741245),
    I = e(474936),
    k = e(388032),
    h = e(991405);
function j(a) {
    let { user: t, deco: e } = a,
        s = (0, o.e7)([p.Z], () => p.Z.getStatus(t.id));
    return (0, r.jsxs)('div', {
        className: h.avatarBackground,
        children: [
            (0, r.jsx)(_.Z, {
                user: t,
                guildId: void 0,
                avatarDecorationOverride: e,
                status: s,
                className: h.avatar
            }),
            (0, r.jsx)('div', { className: h.rect }),
            (0, r.jsx)('div', { className: h.rect }),
            (0, r.jsx)('div', { className: h.bottomOverlay })
        ]
    });
}
function C(a) {
    var t;
    let { transitionState: e, onClose: _ } = a,
        p = (0, v.Dt)(),
        { theme: C } = (0, n.TCT)(),
        N = (0, o.e7)([T.default], () => T.default.getCurrentUser()),
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
        (0, r.jsxs)(n.Y0X, {
            transitionState: e,
            'aria-labelledby': p,
            className: h.container,
            children: [
                void 0 !== N &&
                    (0, r.jsx)(j, {
                        user: N,
                        deco: M
                    }),
                (0, r.jsxs)(n.hzk, {
                    className: h.content,
                    children: [
                        (0, r.jsx)(f.C, {
                            theme: C,
                            premiumType: I.p9.TIER_2,
                            type: f.C.Types.PREMIUM_ACTIVATED
                        }),
                        (0, r.jsx)(n.Text, {
                            variant: 'text-md/medium',
                            color: 'text-normal',
                            className: h.bodyText,
                            children: k.intl.format(k.t['9juoTE'], {})
                        })
                    ]
                }),
                (0, r.jsx)(n.mzw, {
                    children: (0, r.jsx)(n.zxk, {
                        look: n.zxk.Looks.FILLED,
                        color: n.zxk.Colors.BRAND,
                        onClick: () => {
                            _(),
                                (0, i.xf)(),
                                b(),
                                (0, u.ps)({
                                    initialSelectedDecoration: M,
                                    analyticsLocations: D
                                });
                        },
                        children: k.intl.string(k.t['Tna/TU'])
                    })
                })
            ]
        })
    );
}
