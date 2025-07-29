n.d(t, { x: () => j });
var i = n(255367);
n(73800);
var r = n(512722),
    l = n.n(r),
    s = n(780384),
    a = n(755721),
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
        r = (0, o.ZP)(),
        { activeSubscription: j, selectedSkuId: m, setSelectedPlanId: _, startedPaymentFlowWithPaymentSourcesRef: L } = (0, u.JL)(),
        { isGift: y } = (0, c.wD)(),
        g = null != j ? (0, d.Af)(j) : null,
        E = null != g ? (0, d.gq)(g.planId) : null,
        S = null != g ? (0, d.Rd)(g.planId) : null,
        v = (0, x.Kp)({
            isTrial: !1,
            isGift: y,
            selectedSkuId: m,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        l()(null != S, 'Expected premium type'),
        (0, i.jsx)(C.Z, {
            premiumType: S,
            titleText: h.intl.string(h.t['7VcWW1']),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: E }),
            footer: (0, i.jsxs)('div', {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, i.jsx)(a.zx, {
                        onClick: () => {
                            v ? (_((0, x.nA)(m, j)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t['3PatS0'])
                    }),
                    (0, i.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        color: (0, s.wj)(r) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
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
