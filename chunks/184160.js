n.d(t, { x: () => f });
var r = n(951288);
n(647438);
var i = n(512722),
    l = n.n(i),
    s = n(780384),
    a = n(755721),
    o = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    p = n(563132),
    u = n(409813),
    x = n(614223),
    h = n(388032),
    _ = n(172463);
function f(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, o.ZP)(),
        {
            activeSubscription: f,
            selectedSkuId: j,
            setSelectedPlanId: m,
            startedPaymentFlowWithPaymentSourcesRef: L,
        } = (0, p.JL)(),
        { isGift: g } = (0, c.wD)(),
        b = null != f ? (0, d.Af)(f) : null,
        y = null != b ? (0, d.gq)(b.planId) : null,
        S = null != b ? (0, d.Rd)(b.planId) : null,
        E = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current,
        });
    return (
        l()(null != S, "Expected premium type"),
        (0, r.jsx)(C.Z, {
            premiumType: S,
            titleText: h.intl.string(h.t["7VcWW1"]),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, r.jsxs)("div", {
                className: _.whatYouLoseButtonContainer,
                children: [
                    (0, r.jsx)(a.zx, {
                        onClick: () => {
                            E ? (m((0, x.nA)(j, f)), t(u.h8.REVIEW)) : t(u.h8.PLAN_SELECT);
                        },
                        children: h.intl.string(h.t["3PatS0"]),
                    }),
                    (0, r.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        color: (0, s.wj)(i) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                        onClick: n,
                        children: h.intl.string(h.t.h9tkAA),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
