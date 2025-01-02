n.d(t, {
    x: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    s = n.n(l),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    C = n(807163),
    d = n(74538),
    u = n(987209),
    c = n(563132),
    p = n(409813),
    x = n(614223),
    h = n(388032),
    _ = n(475536);
function f(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, o.ZP)(),
        { activeSubscription: f, selectedSkuId: j, setSelectedPlanId: m, startedPaymentFlowWithPaymentSourcesRef: L } = (0, c.usePaymentContext)(),
        { isGift: S } = (0, u.wD)(),
        g = null != f ? (0, d.Af)(f) : null,
        E = null != g ? (0, d.gq)(g.planId) : null,
        I = null != g ? (0, d.Rd)(g.planId) : null,
        M = (0, x.Kp)({
            isTrial: !1,
            isGift: S,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        s()(null != I, 'Expected premium type'),
        (0, i.jsx)(C.Z, {
            premiumType: I,
            titleText: h.intl.string(h.t['7VcWW1']),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: E }),
            footer: (0, i.jsxs)('div', {
                className: _.whatYouLoseButtonContainer,
                children: [
                    (0, i.jsx)(a.Button, {
                        onClick: () => {
                            M ? (m((0, x.nA)(j, f)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t['3PatS0'])
                    }),
                    (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: (0, r.wj)(l) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
                        onClick: n,
                        children: h.intl.string(h.t.h9tkAA)
                    })
                ]
            }),
            onClose: n,
            isDowngrade: !0
        })
    );
}
