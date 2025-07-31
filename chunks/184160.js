t.d(n, { x: () => f });
var i = t(255367);
t(73800);
var r = t(512722),
    l = t.n(r),
    s = t(780384),
    a = t(755721),
    o = t(410030),
    C = t(807163),
    d = t(74538),
    c = t(987209),
    u = t(563132),
    p = t(409813),
    x = t(614223),
    h = t(388032),
    j = t(959803);
function f(e) {
    let { handleStepChange: n, handleClose: t } = e,
        r = (0, o.ZP)(),
        { activeSubscription: f, selectedSkuId: m, setSelectedPlanId: _, startedPaymentFlowWithPaymentSourcesRef: L } = (0, u.JL)(),
        { isGift: g } = (0, c.wD)(),
        y = null != f ? (0, d.Af)(f) : null,
        E = null != y ? (0, d.gq)(y.planId) : null,
        S = null != y ? (0, d.Rd)(y.planId) : null,
        v = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
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
                className: j.whatYouLoseButtonContainer,
                children: [
                    (0, i.jsx)(a.zx, {
                        onClick: () => {
                            v ? (_((0, x.nA)(m, f)), n(p.h8.REVIEW)) : n(p.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t['3PatS0'])
                    }),
                    (0, i.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        color: (0, s.wj)(r) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
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
