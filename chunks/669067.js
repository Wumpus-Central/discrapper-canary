n.d(t, { _: () => a });
var l = n(192308),
    i = n(115063),
    r = n(402651),
    s = n(941933);
function a(e) {
    if (!(0, l.hasModalOpen)(s.y)) return;
    let t = r.A.getField("previousPanelKey"),
        n = r.A.getField("analyticsLocations");
    ((0, i.iY)({ destinationPane: e, originPane: t, locationStack: n }),
        r.A.setState({ previousPanelKey: e }),
        n.length > 0 && r.A.setState({ analyticsLocations: [] }));
}
