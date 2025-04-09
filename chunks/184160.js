n.d(t, { x: () => f });
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    s = n(780384),
    o = n(481060),
    a = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    u = n(563132),
    p = n(409813),
    _ = n(614223),
    x = n(388032),
    h = n(959803);
function f(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, a.ZP)(),
        { activeSubscription: f, selectedSkuId: j, setSelectedPlanId: m, startedPaymentFlowWithPaymentSourcesRef: L } = (0, u.JL)(),
        { isGift: g } = (0, c.wD)(),
        S = null != f ? (0, d.Af)(f) : null,
        y = null != S ? (0, d.gq)(S.planId) : null,
        E = null != S ? (0, d.Rd)(S.planId) : null,
        b = (0, _.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        l()(null != E, 'Expected premium type'),
        (0, r.jsx)(C.Z, {
            premiumType: E,
            titleText: x.NW.string(x.t['7VcWW1']),
            subtitleText: x.NW.format(x.t.Qk34Ii, { subscriptionName: y }),
            footer: (0, r.jsxs)('div', {
                className: h.whatYouLoseButtonContainer,
                children: [
                    (0, r.jsx)(o.zxk, {
                        onClick: () => {
                            b ? (m((0, _.nA)(j, f)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: x.NW.string(x.t['3PatS0'])
                    }),
                    (0, r.jsx)(o.zxk, {
                        look: o.zxk.Looks.LINK,
                        color: (0, s.wj)(i) ? o.zxk.Colors.WHITE : o.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: x.NW.string(x.t.h9tkAA)
                    })
                ]
            }),
            onClose: n,
            isDowngrade: !0
        })
    );
}
