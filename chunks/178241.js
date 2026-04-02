n.d(t, { _: () => d });
var i = n(397927),
    s = n(252452),
    l = n(628965),
    a = n(115063),
    r = n(858897),
    o = n(175665);
function d(e) {
    if (!(0, i.kBI)(r.USER_SETTINGS_MODAL_KEY)) return;
    let t = l.A.getAnalyticsLocation(),
        n = l.A.getAnalyticsLocations();
    (0, a.iY)({ destinationPane: e, originPane: o.A.getField("previousPanelKey"), source: t, locationStack: n }),
        o.A.setState({ previousPanelKey: e }),
        (null != t || n.length > 0) && s.A.clearLocation();
}
