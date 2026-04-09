t.d(l, { A: () => c });
var n = t(627968);
t(64700);
var i = t(397927),
    s = t(688810),
    a = t(979286),
    r = t(23722),
    o = t(993401),
    d = t(985018);
function c(e) {
    let { onClose: l, ...t } = e,
        { analyticsLocations: c, newestAnalyticsLocation: u } = (0, s.Ay)(),
        m = (0, r.A)(() => {
            (0, a.Cz)({ analyticsLocations: c, analyticsSource: u }), l?.();
        });
    return (0, n.jsx)(o.q3, {
        action: "VISIT_SHOP",
        icon: i.U1X,
        tooltipText: d.intl.string(d.t.b2d0N0),
        onClick: m,
        ...t,
    });
}
