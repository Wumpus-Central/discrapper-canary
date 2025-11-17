n.d(t, { Z: () => p });
var r,
    i = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(286389),
    u = (((r = u || {})[(r.ACCEPT = 0)] = "ACCEPT"), (r[(r.DENY = 1)] = "DENY"), (r[(r.DEFAULT = 2)] = "DEFAULT"), r);
function d(e) {
    let { icon: t, tooltip: n, onClick: r, actionType: l = 2, shouldHighlight: u } = e;
    return (0, i.jsx)(s.u, {
        text: n,
        children: (0, i.jsx)(o.P3F, {
            tag: "div",
            "aria-label": n,
            onClick: r,
            className: a()(c.actionButton, {
                [c.actionAccept]: 0 === l,
                [c.actionDeny]: 1 === l,
                [c.highlight]: u,
            }),
            children: (0, i.jsx)(t, {
                className: c.icon,
                color: "currentColor",
            }),
        }),
    });
}
d.ActionTypes = u;
let p = d;
