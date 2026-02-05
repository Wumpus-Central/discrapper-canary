n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    o = n(384059),
    r = n(709562),
    s = n(985018);
function c(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: c } = (0, a.Ay)();
    return (0, l.jsx)(r.A, {
        label: s.intl.string(s.t["UKOtz+"]),
        iconComponent: i.jNK,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, o.X)(c, o.O.MORE), t(e);
        },
        ...n,
    });
}
