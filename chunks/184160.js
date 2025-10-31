n.d(t, { x: () => h });
var r = n(951288);
n(647438);
var i = n(512722),
    l = n.n(i),
    a = n(481060),
    s = n(807163),
    o = n(74538),
    d = n(987209),
    c = n(563132),
    C = n(409813),
    u = n(614223),
    p = n(388032);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            activeSubscription: i,
            selectedSkuId: h,
            setSelectedPlanId: m,
            startedPaymentFlowWithPaymentSourcesRef: _,
        } = (0, c.JL)(),
        { isGift: f } = (0, d.wD)(),
        x = null != i ? (0, o.Af)(i) : null,
        j = null != x ? (0, o.gq)(x.planId) : null,
        g = null != x ? (0, o.Rd)(x.planId) : null,
        b = (0, u.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: _.current,
        });
    return (
        l()(null != g, "Expected premium type"),
        (0, r.jsx)(s.Z, {
            premiumType: g,
            titleText: p.intl.string(p.t["7VcWW0"]),
            subtitleText: p.intl.format(p.t.Qk34Ik, { subscriptionName: j }),
            footer: (0, r.jsxs)(a.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t["3PatSz"]),
                        onClick: () => {
                            b ? (m((0, u.nA)(h, i)), t(C.h8.REVIEW)) : t(C.h8.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(a.Button, {
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
