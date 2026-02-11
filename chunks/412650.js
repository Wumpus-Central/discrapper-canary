r.d(t, { B: () => m });
var a = r(627968);
r(64700);
var n = r(397927),
    i = r(28003),
    o = r(659746),
    s = r(4471),
    l = r(380083),
    d = r(788868),
    c = r(985018),
    _ = r(811363);
function p(e) {
    let { onClose: t } = e,
        r = (0, a.jsx)(n.Text, { className: _.h, variant: "text-md/normal", children: c.intl.string(c.t.FCsTCk) });
    return (0, a.jsx)(s.A, {
        type: o.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: c.intl.string(c.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function u(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(l.Ay, { planId: d.gD.PREMIUM_MONTH_TIER_0, onClose: t });
}
let m = (e) => {
    let { transitionState: t, onClose: r, premiumType: o } = e,
        s = o === d.PremiumTypes.TIER_0;
    return (0, a.jsxs)(n.EOs, {
        "data-migration-pending": !0,
        className: _.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, a.jsx)(i.A, { onClose: r, upgradeToPremiumType: o }),
            (0, a.jsx)(n.$mQ, { "data-migration-pending": !0, children: (0, a.jsx)(s ? u : p, { onClose: r }) }),
        ],
    });
};
