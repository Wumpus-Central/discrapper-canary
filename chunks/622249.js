n.d(t, { A: () => s });
var i = n(627968),
    l = n(397927),
    a = n(985018),
    r = n(696778);
function s(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(l.DUT, {
        onClick: t,
        className: r.x,
        "aria-expanded": n,
        children: (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? a.intl.string(a.t["6MwJo/"]) : a.intl.string(a.t.lBeKY2),
        }),
    });
}
