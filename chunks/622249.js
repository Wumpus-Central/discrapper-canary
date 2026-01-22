n.d(t, { A: () => s });
var r = n(627968),
    l = n(397927),
    i = n(985018),
    a = n(696778);
function s(e) {
    let { onClick: t, expanded: n } = e;
    return (0, r.jsx)(l.DUT, {
        onClick: t,
        className: a.x,
        "aria-expanded": n,
        children: (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? i.intl.string(i.t["6MwJo/"]) : i.intl.string(i.t.lBeKY2),
        }),
    });
}
