n.d(t, { x: () => _ });
var l = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    C = n(807163),
    d = n(74538),
    c = n(987209),
    u = n(563132),
    p = n(409813),
    x = n(614223),
    f = n(388032),
    h = n(680666);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, o.ZP)(),
        { activeSubscription: _, selectedSkuId: j, setSelectedPlanId: m, startedPaymentFlowWithPaymentSourcesRef: L } = (0, u.JL)(),
        { isGift: g } = (0, c.wD)(),
        E = null != _ ? (0, d.Af)(_) : null,
        S = null != E ? (0, d.gq)(E.planId) : null,
        N = null != E ? (0, d.Rd)(E.planId) : null,
        y = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current
        });
    return (
        s()(null != N, 'Expected premium type'),
        (0, l.jsx)(C.Z, {
            premiumType: N,
            titleText: f.NW.string(f.t['7VcWW1']),
            subtitleText: f.NW.format(f.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, l.jsxs)('div', {
                className: h.whatYouLoseButtonContainer,
                children: [
                    (0, l.jsx)(a.zxk, {
                        onClick: () => {
                            y ? (m((0, x.nA)(j, _)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT);
                        },
                        children: f.NW.string(f.t['3PatS0'])
                    }),
                    (0, l.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: (0, r.wj)(i) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: f.NW.string(f.t.h9tkAA)
                    })
                ]
            }),
            onClose: n,
            isDowngrade: !0
        })
    );
}
