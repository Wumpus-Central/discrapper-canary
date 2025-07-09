e.d(a, { default: () => h });
var r = e(255367);
e(73800);
var s = e(990547),
    i = e(442837),
    n = e(481060),
    o = e(37234),
    c = e(100527),
    d = e(906732),
    l = e(213609),
    u = e(204418),
    m = e(1585),
    _ = e(223143),
    p = e(313201),
    v = e(300284),
    x = e(158776),
    f = e(594174),
    I = e(741245),
    T = e(474936),
    M = e(388032),
    j = e(991405);
function y(t) {
    let { user: a, deco: e } = t,
        s = (0, i.e7)([x.Z], () => x.Z.getStatus(a.id));
    return (0, r.jsxs)('div', {
        className: j.avatarBackground,
        children: [
            (0, r.jsx)(u.Z, {
                user: a,
                guildId: void 0,
                avatarDecorationOverride: e,
                status: s,
                className: j.avatar
            }),
            (0, r.jsx)('div', { className: j.rect }),
            (0, r.jsx)('div', { className: j.rect }),
            (0, r.jsx)('div', { className: j.bottomOverlay })
        ]
    });
}
function h(t) {
    var a;
    let { transitionState: e, onClose: u } = t,
        x = (0, p.Dt)(),
        { theme: h } = (0, n.TCT)(),
        k = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        { purchases: A } = (0, _.c7)(),
        C = null == (a = A.get('1225876188074082374')) ? void 0 : a.items,
        N = void 0 !== C ? C[0] : void 0,
        { analyticsLocations: b } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL),
        P = (0, v.Z)({ analyticsLocations: b });
    return (
        (0, l.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
            properties: { location_stack: b }
        }),
        (0, r.jsxs)(n.Y0X, {
            transitionState: e,
            'aria-labelledby': x,
            className: j.container,
            parentComponent: 'PremiumSubscriptionAprilMarketingDecoModal',
            children: [
                void 0 !== k &&
                    (0, r.jsx)(y, {
                        user: k,
                        deco: N
                    }),
                (0, r.jsxs)(n.hzk, {
                    className: j.content,
                    children: [
                        (0, r.jsx)(I.ZP, {
                            theme: h,
                            premiumType: T.p9.TIER_2,
                            type: I.ZP.Types.PREMIUM_ACTIVATED
                        }),
                        (0, r.jsx)(n.Text, {
                            variant: 'text-md/medium',
                            color: 'text-default',
                            className: j.bodyText,
                            children: M.intl.format(M.t['9juoTE'], {})
                        })
                    ]
                }),
                (0, r.jsx)(n.mzw, {
                    children: (0, r.jsx)(n.zxk, {
                        variant: 'primary',
                        text: M.intl.string(M.t.BVcYCw),
                        onClick: () => {
                            (u(),
                                (0, o.xf)(),
                                P(),
                                (0, m.ps)({
                                    initialSelectedDecoration: N,
                                    analyticsLocations: b
                                }));
                        }
                    })
                })
            ]
        })
    );
}
