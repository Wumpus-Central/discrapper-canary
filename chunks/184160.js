n.d(t, { x: () => _ });
var r = n(951288);
n(647438);
var i = n(512722),
    l = n.n(i),
    a = n(780384),
    s = n(755721),
    o = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    p = n(563132),
    u = n(409813),
    x = n(614223),
    f = n(388032),
    h = n(172463);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, o.ZP)(),
        {
            activeSubscription: _,
            selectedSkuId: j,
            setSelectedPlanId: m,
            startedPaymentFlowWithPaymentSourcesRef: L,
        } = (0, p.JL)(),
        { isGift: b } = (0, c.wD)(),
        g = null != _ ? (0, d.Af)(_) : null,
        y = null != g ? (0, d.gq)(g.planId) : null,
        S = null != g ? (0, d.Rd)(g.planId) : null,
        v = (0, x.Kp)({
            isTrial: !1,
            isGift: b,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current,
        });
    return (
        l()(null != S, "Expected premium type"),
        (0, r.jsx)(C.Z, {
            premiumType: S,
            titleText: f.intl.string(f.t["7VcWW1"]),
            subtitleText: f.intl.format(f.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, r.jsxs)("div", {
                className: h.whatYouLoseButtonContainer,
                children: [
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            v ? (m((0, x.nA)(j, _)), t(u.h8.REVIEW)) : t(u.h8.PLAN_SELECT);
                        },
                        children: f.intl.string(f.t["3PatS0"]),
                    }),
                    (0, r.jsx)(s.zx, {
                        look: s.zx.Looks.LINK,
                        color: (0, a.wj)(i) ? s.zx.Colors.WHITE : s.zx.Colors.PRIMARY,
                        onClick: n,
                        children: f.intl.string(f.t.h9tkAA),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
