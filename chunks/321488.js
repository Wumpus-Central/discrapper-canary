i.d(t, { Z: () => p });
var n,
    s = i(54381);
i(473749);
var r = i(120356),
    o = i.n(r),
    a = i(28664),
    l = i(481060),
    u = i(216362),
    c = (((n = c || {})[(n.ACCEPT = 0)] = "ACCEPT"), (n[(n.DENY = 1)] = "DENY"), (n[(n.DEFAULT = 2)] = "DEFAULT"), n);
function h(e) {
    let { icon: t, tooltip: i, onClick: n, actionType: r = 2, shouldHighlight: c } = e;
    return (0, s.jsx)(a.u, {
        text: i,
        children: (0, s.jsx)(l.P3F, {
            tag: "div",
            "aria-label": i,
            onClick: n,
            className: o()(u.actionButton, {
                [u.actionAccept]: 0 === r,
                [u.actionDeny]: 1 === r,
                [u.highlight]: c,
            }),
            children: (0, s.jsx)(t, {
                className: u.icon,
                color: "currentColor",
            }),
        }),
    });
}
h.ActionTypes = c;
let p = h;
