r.d(t, { B: () => b });
var o = r(627968);
r(64700);
var n = r(834730),
    a = r(935462),
    i = r(763795),
    _ = r(659746),
    s = r(4471),
    l = r(380083),
    c = r(788868),
    d = r(985018),
    p = r(20374);
function u(e) {
    let { onClose: t } = e,
        r = (0, o.jsx)(n.E, { className: p.h, variant: "text-md/normal", children: d.intl.string(d.t.FCsTCk) });
    return (0, o.jsx)(s.A, {
        type: _.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: d.intl.string(d.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function m(e) {
    let { onClose: t } = e;
    return (0, o.jsx)(l.Ay, { planId: c.gD.PREMIUM_MONTH_TIER_0, onClose: t });
}
let b = (e) => {
    let { transitionState: t, onClose: r, premiumType: n } = e,
        _ = n === c.PremiumTypes.TIER_0;
    return (0, o.jsxs)(a.EO, {
        "data-migration-pending": !0,
        className: p.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, o.jsx)(i.A, { onClose: r, upgradeToPremiumType: n }),
            (0, o.jsx)(a.$m, { "data-migration-pending": !0, children: (0, o.jsx)(_ ? m : u, { onClose: r }) }),
        ],
    });
};
