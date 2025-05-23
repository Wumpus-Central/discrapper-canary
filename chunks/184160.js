n.d(t, { x: () => j });
var i = n(255367);
n(73800);
var l = n(512722),
    s = n.n(l),
    r = n(780384),
    a = n(481060),
    C = n(410030),
    o = n(807163),
    d = n(74538),
    c = n(987209),
    u = n(563132),
    p = n(409813),
    x = n(614223),
    h = n(388032),
    f = n(959803);
function j(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, C.ZP)(),
        { activeSubscription: j, selectedSkuId: m, setSelectedPlanId: L, startedPaymentFlowWithPaymentSourcesRef: _ } = (0, u.JL)(),
        { isGift: g } = (0, c.wD)(),
        E = null != j ? (0, d.Af)(j) : null,
        y = null != E ? (0, d.gq)(E.planId) : null,
        S = null != E ? (0, d.Rd)(E.planId) : null,
        M = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: m,
            startedPaymentFlowWithPaymentSources: _.current
        });
    return (
        s()(null != S, 'Expected premium type'),
        (0, i.jsx)(o.Z, {
            premiumType: S,
            titleText: h.intl.string(h.t['7VcWW1']),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, i.jsxs)('div', {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, i.jsx)(a.zxk, {
                        onClick: () => {
                            M ? (L((0, x.nA)(m, j)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t['3PatS0'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: (0, r.wj)(l) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
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
