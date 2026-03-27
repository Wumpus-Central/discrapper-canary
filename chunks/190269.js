r.d(t, { B: () => m });
var o = r(627968);
r(64700);
var n = r(397927),
    a = r(28003),
    i = r(659746),
    _ = r(4471),
    s = r(380083),
    l = r(788868),
    c = r(985018),
    d = r(339782);
function p(e) {
    let { onClose: t } = e,
        r = (0, o.jsx)(n.Text, { className: d.h, variant: "text-md/normal", children: c.intl.string(c.t.FCsTCk) });
    return (0, o.jsx)(_.A, {
        type: i.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: c.intl.string(c.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function u(e) {
    let { onClose: t } = e;
    return (0, o.jsx)(s.Ay, { planId: l.gD.PREMIUM_MONTH_TIER_0, onClose: t });
}
let m = (e) => {
    let { transitionState: t, onClose: r, premiumType: i } = e,
        _ = i === l.PremiumTypes.TIER_0;
    return (0, o.jsxs)(n.EOs, {
        "data-migration-pending": !0,
        className: d.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, o.jsx)(a.A, { onClose: r, upgradeToPremiumType: i }),
            (0, o.jsx)(n.$mQ, { "data-migration-pending": !0, children: (0, o.jsx)(_ ? u : p, { onClose: r }) }),
        ],
    });
};
