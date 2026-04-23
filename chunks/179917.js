n.d(t, { I: () => u });
var l = n(627968);
n(64700);
var i = n(939249),
    r = n(485947),
    s = n(483392),
    a = n(894564);
function u(e) {
    let { title: t, count: n, isCollapsed: u, canCollapse: o, onToggle: d, rightAccessory: c } = e,
        h = u && null != n ? `${t} (${n})` : t,
        g = o ? (0, l.jsx)(s.C, { isCollapsed: u, size: "md", className: a.t4 }) : null;
    return (0, l.jsx)(r.A, {
        className: a.uW,
        children: (0, l.jsxs)("div", {
            className: a.bV,
            children: [
                (0, l.jsxs)(i.D, {
                    onClick: () => o && d(),
                    "aria-hidden": !0,
                    className: o ? a.Ws : void 0,
                    children: [h, g],
                }),
                c,
            ],
        }),
    });
}
