n.d(t, { x: () => f });
var l = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
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
        i = (0, o.ZP)(),
        { activeSubscription: f, selectedSkuId: j, setSelectedPlanId: m, startedPaymentFlowWithPaymentSourcesRef: L } = (0, c.JL)(),
        { isGift: E } = (0, u.wD)(),
        g = null != f ? (0, d.Af)(f) : null,
        S = null != g ? (0, d.gq)(g.planId) : null,
        I = null != g ? (0, d.Rd)(g.planId) : null,
        N = (0, x.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        s()(null != I, 'Expected premium type'),
        (0, l.jsx)(C.Z, {
            premiumType: I,
            titleText: h.intl.string(h.t['7VcWW1']),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, l.jsxs)('div', {
                className: _.whatYouLoseButtonContainer,
                children: [
                    (0, l.jsx)(a.zxk, {
                        onClick: () => {
                            N ? (m((0, x.nA)(j, f)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t['3PatS0'])
                    }),
                    (0, l.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: (0, r.wj)(i) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
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
