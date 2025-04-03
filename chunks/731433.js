t.d(e, { default: () => j });
var r = t(200651);
t(192379);
var s = t(990547),
    o = t(442837),
    n = t(481060),
    i = t(37234),
    c = t(100527),
    d = t(906732),
    l = t(213609),
    _ = t(204418),
    u = t(1585),
    m = t(223143),
    v = t(313201),
    x = t(300284),
    p = t(158776),
    T = t(594174),
    f = t(741245),
    I = t(474936),
    k = t(388032),
    N = t(991405);
function h(a) {
    let { user: e, deco: t } = a,
        s = (0, o.e7)([p.Z], () => p.Z.getStatus(e.id));
    return (0, r.jsxs)('div', {
        className: N.avatarBackground,
        children: [
            (0, r.jsx)(_.Z, {
                user: e,
                guildId: void 0,
                avatarDecorationOverride: t,
                status: s,
                className: N.avatar
            }),
            (0, r.jsx)('div', { className: N.rect }),
            (0, r.jsx)('div', { className: N.rect }),
            (0, r.jsx)('div', { className: N.bottomOverlay })
        ]
    });
}
function j(a) {
    var e;
    let { transitionState: t, onClose: _ } = a,
        p = (0, v.Dt)(),
        { theme: j } = (0, n.TCT)(),
        C = (0, o.e7)([T.default], () => T.default.getCurrentUser()),
        { purchases: y } = (0, m.c7)(),
        A = null == (e = y.get('1225876188074082374')) ? void 0 : e.items,
        M = void 0 !== A ? A[0] : void 0,
        { analyticsLocations: D } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL),
        b = (0, x.Z)({ analyticsLocations: D });
    return (
        (0, l.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
            properties: { location_stack: D }
        }),
        (0, r.jsxs)(n.Y0X, {
            transitionState: t,
            'aria-labelledby': p,
            className: N.container,
            children: [
                void 0 !== C &&
                    (0, r.jsx)(h, {
                        user: C,
                        deco: M
                    }),
                (0, r.jsxs)(n.hzk, {
                    className: N.content,
                    children: [
                        (0, r.jsx)(f.C, {
                            theme: j,
                            premiumType: I.p9.TIER_2,
                            type: f.C.Types.PREMIUM_ACTIVATED
                        }),
                        (0, r.jsx)(n.Text, {
                            variant: 'text-md/medium',
                            color: 'text-normal',
                            className: N.bodyText,
                            children: k.NW.format(k.t['9juoTE'], {})
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
                        children: k.NW.string(k.t['Tna/TU'])
                    })
                })
            ]
        })
    );
}
