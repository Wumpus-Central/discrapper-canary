n.d(t, { x: () => h });
var l = n(54381);
n(473749);
var r = n(512722),
    i = n.n(r),
    a = n(481060),
    s = n(807163),
    o = n(74538),
    u = n(987209),
    c = n(563132),
    d = n(409813),
    m = n(614223),
    p = n(388032);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            activeSubscription: r,
            selectedSkuId: h,
            setSelectedPlanId: f,
            startedPaymentFlowWithPaymentSourcesRef: g,
        } = (0, c.JL)(),
        { isGift: v } = (0, u.wD)(),
        j = null != r ? (0, o.Af)(r) : null,
        y = null != j ? (0, o.MF)(j.planId) : null,
        b = null != j ? (0, o.Rd)(j.planId) : null,
        S = (0, m.Kp)({
            isTrial: !1,
            isGift: v,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: g.current,
        });
    return (
        i()(null != b, "Expected premium type"),
        (0, l.jsx)(s.Z, {
            premiumType: b,
            titleText: p.intl.string(p.t["7VcWW0"]),
            subtitleText: p.intl.format(p.t.Qk34Ik, { subscriptionName: y }),
            footer: (0, l.jsxs)(a.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(a.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t["3PatSz"]),
                        onClick: () => {
                            S ? (f((0, m.nA)(h, r)), t(d.h8.REVIEW)) : t(d.h8.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(a.Button, {
                        variant: "secondary",
                        onClick: n,
                        text: p.intl.string(p.t.h9tkAK),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
