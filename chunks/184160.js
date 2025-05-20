n.d(t, { x: () => j });
var l = n(255367);
n(73800);
var i = n(512722),
    s = n.n(i),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    u = n(563132),
    p = n(409813),
    x = n(614223),
    h = n(388032),
    f = n(959803);
function j(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, o.ZP)(),
        { activeSubscription: j, selectedSkuId: _, setSelectedPlanId: L, startedPaymentFlowWithPaymentSourcesRef: m } = (0, u.JL)(),
        { isGift: g } = (0, c.wD)(),
        E = null != j ? (0, d.Af)(j) : null,
        S = null != E ? (0, d.gq)(E.planId) : null,
        y = null != E ? (0, d.Rd)(E.planId) : null,
        I = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: m.current
        });
    return (
        s()(null != y, 'Expected premium type'),
        (0, l.jsx)(C.Z, {
            premiumType: y,
            titleText: h.intl.string(h.t['7VcWW1']),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, l.jsxs)('div', {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, l.jsx)(a.zxk, {
                        onClick: () => {
                            I ? (L((0, x.nA)(_, j)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
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
