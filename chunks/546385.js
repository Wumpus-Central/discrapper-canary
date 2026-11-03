i.d(r, { A: () => h, k: () => u });
var a,
    s = i(477900);
i(582128);
var e = i(503698),
    o = i.n(e),
    c = i(885574),
    t = i(695366),
    l = i(834730),
    d = i(17227),
    u = (((a = {}).INFO = "info"), (a.WARNING = "warning"), a);
let p = { info: d.pq, warning: d.$e },
    f = { info: c.CircleInformationIcon, warning: t.E };
function h(n) {
    let { children: r, className: i, look: a = "info" } = n,
        e = f[a];
    return (0, s.jsxs)("div", {
        className: o()(d.zr, i, p[a]),
        children: [
            (0, s.jsx)(e, { className: d.Kk, color: "currentColor" }),
            (0, s.jsx)(l.E, { className: d.Qq, variant: "body-sm/medium", color: "text-default", children: r }),
        ],
    });
}
