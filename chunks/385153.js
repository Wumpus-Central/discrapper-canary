n.d(t, { Z: () => o });
var r = n(951288),
    i = n(481060),
    a = n(388032),
    l = n(899963);
function o(e) {
    let { onClick: t, expanded: n } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: t,
        className: l.button,
        "aria-expanded": n,
        children: (0, r.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? a.intl.string(a.t["6MwJo/"]) : a.intl.string(a.t.lBeKY2),
        }),
    });
}
