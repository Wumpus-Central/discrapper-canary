n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(365199),
    a = n(688810),
    r = n(384059),
    o = n(709562),
    s = n(985018);
function c(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: c } = (0, a.Ay)();
    return (0, l.jsx)(o.A, {
        label: s.intl.string(s.t["UKOtz+"]),
        iconComponent: i.j,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, r.X)(c, r.O.MORE), t(e);
        },
        ...n,
    });
}
