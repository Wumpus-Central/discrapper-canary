t.d(n, { x: () => h });
var r = t(951288);
t(647438);
var i = t(512722),
    l = t.n(i),
    s = t(780384),
    a = t(755721),
    o = t(410030),
    C = t(807163),
    d = t(74538),
    p = t(987209),
    c = t(563132),
    u = t(409813),
    x = t(614223),
    _ = t(388032),
    f = t(172463);
function h(e) {
    let { handleStepChange: n, handleClose: t } = e,
        i = (0, o.ZP)(),
        {
            activeSubscription: h,
            selectedSkuId: j,
            setSelectedPlanId: L,
            startedPaymentFlowWithPaymentSourcesRef: m,
        } = (0, c.JL)(),
        { isGift: g } = (0, p.wD)(),
        S = null != h ? (0, d.Af)(h) : null,
        y = null != S ? (0, d.gq)(S.planId) : null,
        E = null != S ? (0, d.Rd)(S.planId) : null,
        b = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: m.current,
        });
    return (
        l()(null != E, "Expected premium type"),
        (0, r.jsx)(C.Z, {
            premiumType: E,
            titleText: _.intl.string(_.t["7VcWW1"]),
            subtitleText: _.intl.format(_.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, r.jsxs)("div", {
                className: f.whatYouLoseButtonContainer,
                children: [
                    (0, r.jsx)(a.zx, {
                        onClick: () => {
                            b ? (L((0, x.nA)(j, h)), n(u.h8.REVIEW)) : n(u.h8.PLAN_SELECT);
                        },
                        children: _.intl.string(_.t["3PatS0"]),
                    }),
                    (0, r.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        color: (0, s.wj)(i) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
                        onClick: t,
                        children: _.intl.string(_.t.h9tkAA),
                    }),
                ],
            }),
            onClose: t,
            isDowngrade: !0,
        })
    );
}
