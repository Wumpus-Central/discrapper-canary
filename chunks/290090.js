n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(688810),
    r = n(979286),
    d = n(958805),
    o = n(61881),
    c = n(993401),
    u = n(985018);
function A(e) {
    let { onClose: t, ...n } = e,
        { analyticsLocations: A, newestAnalyticsLocation: x } = (0, a.Ay)(),
        m = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges());
    return (0, i.jsx)(c.q3, {
        action: "VISIT_SHOP",
        icon: l.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            m ? d.A.notifyUnsavedWidgets() : ((0, r.Cz)({ analyticsLocations: A, analyticsSource: x }), t?.());
        },
        ...n,
    });
}
