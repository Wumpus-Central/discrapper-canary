"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(141628),
    s = n(688810),
    a = n(939496),
    o = n(993401),
    l = n(996988),
    u = n(985018);
function c(e) {
    let { startAuthorization: t, onAction: n } = e,
        { newestAnalyticsLocation: c } = (0, s.Ay)(),
        { themeType: d } = (0, a.E)(),
        _ = d === l.d.MODAL_V2,
        f = (e) => {
            e.stopPropagation(), n?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), t({ analyticsLocations: [c] });
        };
    return (0, r.jsx)(o.FD, {
        icon: () => (0, r.jsx)(i.A, {}),
        text: u.intl.string(u.t.sbdnpw),
        fullWidth: !_,
        onClick: f,
    });
}
