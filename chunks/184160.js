r.d(t, { x: () => x });
var n = r(255367);
r(73800);
var i = r(512722),
    o = r.n(i),
    l = r(780384),
    a = r(755721),
    s = r(410030),
    d = r(807163),
    C = r(74538),
    c = r(987209),
    u = r(563132),
    p = r(409813),
    _ = r(614223),
    f = r(388032),
    m = r(959803);
function x(e) {
    let { handleStepChange: t, handleClose: r } = e,
        i = (0, s.ZP)(),
        {
            activeSubscription: x,
            selectedSkuId: h,
            setSelectedPlanId: j,
            startedPaymentFlowWithPaymentSourcesRef: L,
        } = (0, u.JL)(),
        { isGift: b } = (0, c.wD)(),
        g = null != x ? (0, C.Af)(x) : null,
        y = null != g ? (0, C.gq)(g.planId) : null,
        S = null != g ? (0, C.Rd)(g.planId) : null,
        E = (0, _.Kp)({
            isTrial: !1,
            isGift: b,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: L.current,
        });
    return (
        o()(null != S, "Expected premium type"),
        (0, n.jsx)(d.Z, {
            premiumType: S,
            titleText: f.intl.string(f.t["7VcWW1"]),
            subtitleText: f.intl.format(f.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, n.jsxs)("div", {
                className: m.whatYouLoseButtonContainer,
                children: [
                    (0, n.jsx)(a.zx, {
                        onClick: () => {
                            E ? (j((0, _.nA)(h, x)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: f.intl.string(f.t["3PatS0"]),
                    }),
                    (0, n.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        color: (0, l.wj)(i) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                        onClick: r,
                        children: f.intl.string(f.t.h9tkAA),
                    }),
                ],
            }),
            onClose: r,
            isDowngrade: !0,
        })
    );
}
