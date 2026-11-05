var a,
    o = i(477900);
i(582128);
var c = i(503698),
    e = i.n(c),
    s = i(885574),
    t = i(695366),
    l = i(834730),
    d = i(17227),
    u = (((a = {}).INFO = "info"), (a.WARNING = "warning"), a);
let p = { info: d.pq, warning: d.$e },
    f = { info: s.CircleInformationIcon, warning: t.CircleErrorIcon };
i.d(
    n,
    {},
    {
        A: function (r) {
            let { children: n, className: i, look: a = "info" } = r,
                c = f[a];
            return (0, o.jsxs)("div", {
                className: e()(d.zr, i, p[a]),
                children: [
                    (0, o.jsx)(c, { className: d.Kk, color: "currentColor" }),
                    (0, o.jsx)(l.E, { className: d.Qq, variant: "body-sm/medium", color: "text-default", children: n }),
                ],
            });
        },
        k: u,
    },
);
