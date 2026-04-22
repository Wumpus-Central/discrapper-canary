e.d(n, { A: () => u });
var i = e(627968);
e(64700);
var l = e(141628),
    r = e(688810),
    a = e(939496),
    s = e(993401),
    o = e(996988),
    c = e(985018);
function u(t) {
    let { startAuthorization: n, onAction: e } = t,
        { newestAnalyticsLocation: u } = (0, r.Ay)(),
        { themeType: d } = (0, a.E)(),
        A = d === o.d.MODAL_V2;
    return (0, i.jsx)(s.FD, {
        icon: () => (0, i.jsx)(l.A, {}),
        text: c.intl.string(c.t.sbdnpw),
        fullWidth: !A,
        onClick: (t) => {
            t.stopPropagation(), e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }), n({ analyticsLocations: [u] });
        },
    });
}
