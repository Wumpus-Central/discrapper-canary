t.d(r, { x: () => x });
var n = t(255367);
t(73800);
var i = t(512722),
    o = t.n(i),
    l = t(780384),
    a = t(755721),
    s = t(410030),
    d = t(807163),
    C = t(74538),
    c = t(987209),
    u = t(563132),
    p = t(409813),
    _ = t(614223),
    f = t(388032),
    m = t(959803);
function x(e) {
    let { handleStepChange: r, handleClose: t } = e,
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
                            E ? (j((0, _.nA)(h, x)), r(p.h8.REVIEW)) : r(p.h8.PLAN_SELECT);
                        },
                        children: f.intl.string(f.t["3PatS0"]),
                    }),
                    (0, n.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        color: (0, l.wj)(i) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                        onClick: t,
                        children: f.intl.string(f.t.h9tkAA),
                    }),
                ],
            }),
            onClose: t,
            isDowngrade: !0,
        })
    );
}
