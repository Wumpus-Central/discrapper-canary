i.d(t, { A: () => r });
var n = i(627968),
    s = i(397927),
    l = i(985018),
    a = i(673182);
function r(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(s.DUT, {
        onClick: t,
        className: a.x,
        "aria-expanded": i,
        children: (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? l.intl.string(l.t["6MwJo/"]) : l.intl.string(l.t.lBeKY2),
        }),
    });
}
