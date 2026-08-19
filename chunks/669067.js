n.d(t, { _: () => a });
var l = n(192308),
    i = n(115063),
    r = n(766075),
    s = n(402651);
function a(e) {
    if (!(0, l.hasModalOpen)(r.USER_SETTINGS_MODAL_KEY)) return;
    let t = s.A.getField("previousPanelKey"),
        n = s.A.getField("analyticsLocations");
    (0, i.iY)({ destinationPane: e, originPane: t, locationStack: n }),
        s.A.setState({ previousPanelKey: e }),
        n.length > 0 && s.A.setState({ analyticsLocations: [] });
}
