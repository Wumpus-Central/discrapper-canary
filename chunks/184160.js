n.d(t, { x: () => h });
var r = n(54381);
n(473749);
var l = n(512722),
    i = n.n(l),
    a = n(481060),
    s = n(807163),
    o = n(74538),
    u = n(987209),
    c = n(563132),
    d = n(409813),
    p = n(614223),
    m = n(388032);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            activeSubscription: l,
            selectedSkuId: h,
            setSelectedPlanId: f,
            startedPaymentFlowWithPaymentSourcesRef: g,
        } = (0, c.JL)(),
        { isGift: y } = (0, u.wD)(),
        j = null != l ? (0, o.Af)(l) : null,
        v = null != j ? (0, o.MF)(j.planId) : null,
        b = null != j ? (0, o.Rd)(j.planId) : null,
        O = (0, p.Kp)({
            isTrial: !1,
            isGift: y,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: g.current,
        });
    return (
        i()(null != b, "Expected premium type"),
        (0, r.jsx)(s.Z, {
            premiumType: b,
            titleText: m.intl.string(m.t["7VcWW0"]),
            subtitleText: m.intl.format(m.t.Qk34Ik, { subscriptionName: v }),
            footer: (0, r.jsxs)(a.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t["3PatSz"]),
                        onClick: () => {
                            O ? (f((0, p.nA)(h, l)), t(d.h8.REVIEW)) : t(d.h8.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        onClick: n,
                        text: m.intl.string(m.t.h9tkAK),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
