n.d(t, { Z: () => o });
var r = n(54381),
    i = n(481060),
    l = n(388032),
    a = n(899963);
function o(e) {
    let { onClick: t, expanded: n } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: t,
        className: a.button,
        "aria-expanded": n,
        children: (0, r.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? l.intl.string(l.t["6MwJo/"]) : l.intl.string(l.t.lBeKY2),
        }),
    });
}
