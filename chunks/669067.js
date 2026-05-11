l.d(t, { _: () => r });
var n = l(192308),
    i = l(115063),
    s = l(766075),
    a = l(402651);
function r(e) {
    if (!(0, n.hasModalOpen)(s.USER_SETTINGS_MODAL_KEY)) return;
    let t = a.A.getField("previousPanelKey"),
        l = a.A.getField("analyticsLocations");
    (0, i.iY)({ destinationPane: e, originPane: t, locationStack: l }),
        a.A.setState({ previousPanelKey: e }),
        l.length > 0 && a.A.setState({ analyticsLocations: [] });
}
