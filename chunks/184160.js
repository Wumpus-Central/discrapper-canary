n.d(r, { x: () => m });
var t = n(255367);
n(73800);
var i = n(512722),
    o = n.n(i),
    a = n(780384),
    l = n(755721),
    s = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    p = n(563132),
    u = n(409813),
    _ = n(614223),
    x = n(388032),
    f = n(959803);
function m(e) {
    let { handleStepChange: r, handleClose: n } = e,
        i = (0, s.ZP)(),
        {
            activeSubscription: m,
            selectedSkuId: h,
            setSelectedPlanId: j,
            startedPaymentFlowWithPaymentSourcesRef: L,
        } = (0, p.JL)(),
        { isGift: g } = (0, c.wD)(),
        b = null != m ? (0, d.Af)(m) : null,
        y = null != b ? (0, d.gq)(b.planId) : null,
        S = null != b ? (0, d.Rd)(b.planId) : null,
        v = (0, _.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: L.current,
        });
    return (
        o()(null != S, "Expected premium type"),
        (0, t.jsx)(C.Z, {
            premiumType: S,
            titleText: x.intl.string(x.t["7VcWW1"]),
            subtitleText: x.intl.format(x.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, t.jsxs)("div", {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, t.jsx)(l.zx, {
                        onClick: () => {
                            v ? (j((0, _.nA)(h, m)), r(u.h8.REVIEW)) : r(u.h8.PLAN_SELECT);
                        },
                        children: x.intl.string(x.t["3PatS0"]),
                    }),
                    (0, t.jsx)(l.zx, {
                        look: l.zx.Looks.LINK,
                        color: (0, a.wj)(i) ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
                        onClick: n,
                        children: x.intl.string(x.t.h9tkAA),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
