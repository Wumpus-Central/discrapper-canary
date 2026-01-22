i.d(t, {
    A: () => p,
});
var n,
    s = i(627968);
i(64700);
var r = i(503698),
    a = i.n(r),
    o = i(990078),
    l = i(397927),
    u = i(573729),
    c = (((n = c || {})[(n.ACCEPT = 0)] = "ACCEPT"), (n[(n.DENY = 1)] = "DENY"), (n[(n.DEFAULT = 2)] = "DEFAULT"), n);

function h(e) {
    let { icon: t, tooltip: i, onClick: n, actionType: r = 2, shouldHighlight: c } = e;
    return (0, s.jsx)(o.m, {
        text: i,
        children: (0, s.jsx)(l.DUT, {
            tag: "div",
            "aria-label": i,
            onClick: n,
            className: a()(u.hP, {
                [u.Jj]: 0 === r,
                [u.Bs]: 1 === r,
                [u.Zt]: c,
            }),
            children: (0, s.jsx)(t, {
                className: u.Kk,
                color: "currentColor",
            }),
        }),
    });
}
h.ActionTypes = c;
let p = h;
