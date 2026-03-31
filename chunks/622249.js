n.d(t, { A: () => r });
var i = n(627968),
    a = n(397927),
    l = n(985018),
    s = n(62007);
function r(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(a.DUT, {
        onClick: t,
        className: s.x,
        "aria-expanded": n,
        children: (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? l.intl.string(l.t["6MwJo/"]) : l.intl.string(l.t.lBeKY2),
        }),
    });
}
