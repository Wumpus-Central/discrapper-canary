t.d(n, { A: () => u });
var l = t(627968);
t(64700);
var i = t(34188),
    r = t(688810),
    a = t(979286),
    s = t(23722),
    o = t(993401),
    d = t(985018);
function u(e) {
    let { onClose: n, ...t } = e,
        { analyticsLocations: u, newestAnalyticsLocation: c } = (0, r.Ay)(),
        g = (0, s.A)(() => {
            (0, a.Cz)({ analyticsLocations: u, analyticsSource: c }), n?.();
        });
    return (0, l.jsx)(o.q3, {
        action: "VISIT_SHOP",
        icon: i.U,
        tooltipText: d.intl.string(d.t.b2d0N0),
        onClick: g,
        ...t,
    });
}
