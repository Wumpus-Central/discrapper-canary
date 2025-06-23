t.d(n, { x: () => j });
var l = t(255367);
t(73800);
var i = t(512722),
    r = t.n(i),
    s = t(780384),
    a = t(481060),
    o = t(410030),
    C = t(807163),
    d = t(74538),
    c = t(987209),
    u = t(563132),
    p = t(409813),
    x = t(614223),
    h = t(388032),
    f = t(959803);
function j(e) {
    let { handleStepChange: n, handleClose: t } = e,
        i = (0, o.ZP)(),
        { activeSubscription: j, selectedSkuId: _, setSelectedPlanId: m, startedPaymentFlowWithPaymentSourcesRef: L } = (0, u.JL)(),
        { isGift: g } = (0, c.wD)(),
        y = null != j ? (0, d.Af)(j) : null,
        S = null != y ? (0, d.gq)(y.planId) : null,
        E = null != y ? (0, d.Rd)(y.planId) : null,
        v = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        r()(null != E, 'Expected premium type'),
        (0, l.jsx)(C.Z, {
            premiumType: E,
            titleText: h.intl.string(h.t['7VcWW1']),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, l.jsxs)('div', {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, l.jsx)(a.zxk, {
                        onClick: () => {
                            v ? (m((0, x.nA)(_, j)), n(p.h8.REVIEW)) : n(p.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t['3PatS0'])
                    }),
                    (0, l.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: (0, s.wj)(i) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: h.intl.string(h.t.h9tkAA)
                    })
                ]
            }),
            onClose: t,
            isDowngrade: !0
        })
    );
}
