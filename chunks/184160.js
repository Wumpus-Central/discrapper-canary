n.d(t, { x: () => h });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    l = n(481060),
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
            setSelectedPlanId: _,
            startedPaymentFlowWithPaymentSourcesRef: m,
        } = (0, c.JL)(),
        { isGift: f } = (0, d.wD)(),
        x = null != i ? (0, o.Af)(i) : null,
        g = null != x ? (0, o.gq)(x.planId) : null,
        j = null != x ? (0, o.Rd)(x.planId) : null,
        b = (0, u.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: m.current,
        });
    return (
        a()(null != j, "Expected premium type"),
        (0, r.jsx)(s.Z, {
            premiumType: j,
            titleText: p.intl.string(p.t["7VcWW1"]),
            subtitleText: p.intl.format(p.t.Qk34Ii, { subscriptionName: g }),
            footer: (0, r.jsxs)(l.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(l.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t["3PatS0"]),
                        onClick: () => {
                            b ? (_((0, u.nA)(h, i)), t(C.h8.REVIEW)) : t(C.h8.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(l.Button, {
                        variant: "secondary",
                        onClick: n,
                        text: p.intl.string(p.t.h9tkAA),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
