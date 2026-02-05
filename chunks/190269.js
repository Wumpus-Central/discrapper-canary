r.d(t, { B: () => g });
var a = r(627968),
    n = r(64700),
    i = r(397927),
    o = r(639289),
    s = r(203982),
    l = r(573359),
    d = r(28003),
    c = r(659746),
    _ = r(4471),
    p = r(380083),
    u = r(788868),
    m = r(652215),
    b = r(985018),
    C = r(401517);
function x(e) {
    let { onClose: t } = e,
        r = (0, a.jsx)(i.Text, { className: C.h, variant: "text-md/normal", children: b.intl.string(b.t.FCsTCk) });
    return (0, a.jsx)(_.A, {
        type: c.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: b.intl.string(b.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function S(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(p.Ay, { planId: u.gD.PREMIUM_MONTH_TIER_0, onClose: t });
}
let g = (e) => {
    let { transitionState: t, onClose: r, premiumType: c } = e,
        _ = c === u.PremiumTypes.TIER_0,
        p = n.useCallback(() => {
            s._.dispatch(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                l.A.isDisplayingWowMomentConfirmation && l.A.isAnimated
                    ? setTimeout(() => {
                          r();
                      }, o.K)
                    : r();
        }, [r]);
    return (0, a.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: C.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, a.jsx)(d.A, { onClose: p, upgradeToPremiumType: c }),
            (0, a.jsx)(i.$mQ, { "data-migration-pending": !0, children: (0, a.jsx)(_ ? S : x, { onClose: p }) }),
        ],
    });
};
