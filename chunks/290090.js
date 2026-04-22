l.d(n, { A: () => c });
var t = l(627968);
l(64700);
var i = l(34188),
    r = l(688810),
    s = l(979286),
    a = l(23722),
    o = l(993401),
    d = l(985018);
function c(e) {
    let { onClose: n, ...l } = e,
        { analyticsLocations: c, newestAnalyticsLocation: u } = (0, r.Ay)(),
        g = (0, a.A)(() => {
            (0, s.Cz)({ analyticsLocations: c, analyticsSource: u }), n?.();
        });
    return (0, t.jsx)(o.q3, {
        action: "VISIT_SHOP",
        icon: i.U,
        tooltipText: d.intl.string(d.t.b2d0N0),
        onClick: g,
        ...l,
    });
}
