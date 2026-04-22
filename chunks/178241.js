l.d(t, { _: () => c });
var n = l(192308),
    i = l(252452),
    s = l(628965),
    a = l(115063),
    r = l(858897),
    d = l(175665);
function c(e) {
    if (!(0, n.hasModalOpen)(r.USER_SETTINGS_MODAL_KEY)) return;
    let t = s.A.getAnalyticsLocation(),
        l = s.A.getAnalyticsLocations();
    (0, a.iY)({ destinationPane: e, originPane: d.A.getField("previousPanelKey"), source: t, locationStack: l }),
        d.A.setState({ previousPanelKey: e }),
        (null != t || l.length > 0) && i.A.clearLocation();
}
