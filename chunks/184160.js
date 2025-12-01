n.d(t, { x: () => h });
var r = n(54381);
n(473749);
var l = n(512722),
    a = n.n(l),
    i = n(481060),
    o = n(807163),
    s = n(74538),
    d = n(987209),
    c = n(563132),
    u = n(409813),
    p = n(614223),
    m = n(388032);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            activeSubscription: l,
            selectedSkuId: h,
            setSelectedPlanId: f,
            startedPaymentFlowWithPaymentSourcesRef: b,
        } = (0, c.JL)(),
        { isGift: g } = (0, d.wD)(),
        v = null != l ? (0, s.Af)(l) : null,
        x = null != v ? (0, s.MF)(v.planId) : null,
        P = null != v ? (0, s.Rd)(v.planId) : null,
        y = (0, p.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: b.current,
        });
    return (
        a()(null != P, "Expected premium type"),
        (0, r.jsx)(o.Z, {
            premiumType: P,
            titleText: m.intl.string(m.t["7VcWW0"]),
            subtitleText: m.intl.format(m.t.Qk34Ik, { subscriptionName: x }),
            footer: (0, r.jsxs)(i.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(i.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t["3PatSz"]),
                        onClick: () => {
                            y ? (f((0, p.nA)(h, l)), t(u.h8.REVIEW)) : t(u.h8.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(i.Button, {
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
