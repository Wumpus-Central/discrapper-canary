l.d(t, { _: () => c });
var n = l(192308),
    i = l(252452),
    s = l(628965),
    a = l(115063),
    r = l(858897),
    d = l(175665);
function c(e) {
    if (!(0, n.hasModalOpen)(r.USER_SETTINGS_MODAL_KEY)) return;
    let t = d.A.getField("previousPanelKey"),
        l = s.A.getAnalyticsLocations();
    (0, a.iY)({ destinationPane: e, originPane: t, locationStack: l }),
        d.A.setState({ previousPanelKey: e }),
        l.length > 0 && i.A.clearLocation();
}
