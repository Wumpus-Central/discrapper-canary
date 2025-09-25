n.d(t, { x: () => m });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(780384),
    l = n(755721),
    s = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    u = n(563132),
    p = n(409813),
    _ = n(614223),
    f = n(388032),
    h = n(172463);
function m(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, s.ZP)(),
        {
            activeSubscription: m,
            selectedSkuId: x,
            setSelectedPlanId: j,
            startedPaymentFlowWithPaymentSourcesRef: g,
        } = (0, u.JL)(),
        { isGift: b } = (0, c.wD)(),
        L = null != m ? (0, d.Af)(m) : null,
        y = null != L ? (0, d.gq)(L.planId) : null,
        v = null != L ? (0, d.Rd)(L.planId) : null,
        S = (0, _.Kp)({
            isTrial: !1,
            isGift: b,
            selectedSkuId: x,
            startedPaymentFlowWithPaymentSources: g.current,
        });
    return (
        a()(null != v, "Expected premium type"),
        (0, r.jsx)(C.Z, {
            premiumType: v,
            titleText: f.intl.string(f.t["7VcWW1"]),
            subtitleText: f.intl.format(f.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, r.jsxs)("div", {
                className: h.whatYouLoseButtonContainer,
                children: [
                    (0, r.jsx)(l.zx, {
                        "data-migration-pending": !0,
                        onClick: () => {
                            S ? (j((0, _.nA)(x, m)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: f.intl.string(f.t["3PatS0"]),
                    }),
                    (0, r.jsx)(l.zx, {
                        "data-migration-pending": !0,
                        look: l.zx.Looks.LINK,
                        color: (0, o.wj)(i) ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
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
