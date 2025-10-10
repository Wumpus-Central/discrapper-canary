n.d(t, { x: () => _ });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    l = n(481060),
    o = n(807163),
    s = n(74538),
    d = n(987209),
    c = n(563132),
    C = n(409813),
    u = n(614223),
    p = n(388032);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            activeSubscription: i,
            selectedSkuId: _,
            setSelectedPlanId: h,
            startedPaymentFlowWithPaymentSourcesRef: f,
        } = (0, c.JL)(),
        { isGift: m } = (0, d.wD)(),
        x = null != i ? (0, s.Af)(i) : null,
        g = null != x ? (0, s.gq)(x.planId) : null,
        j = null != x ? (0, s.Rd)(x.planId) : null,
        b = (0, u.Kp)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: f.current,
        });
    return (
        a()(null != j, "Expected premium type"),
        (0, r.jsx)(o.Z, {
            premiumType: j,
            titleText: p.intl.string(p.t["7VcWW1"]),
            subtitleText: p.intl.format(p.t.Qk34Ii, { subscriptionName: g }),
            footer: (0, r.jsxs)(l.hE2, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(l.zxk, {
                        variant: "primary",
                        text: p.intl.string(p.t["3PatS0"]),
                        onClick: () => {
                            b ? (h((0, u.nA)(_, i)), t(C.h8.REVIEW)) : t(C.h8.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(l.zxk, {
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
