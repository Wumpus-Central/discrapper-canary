n.d(s, { ZK: () => x, _H: () => m, cS: () => u, fu: () => h });
var r = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    t = n(661531),
    o = n(834730),
    c = n(628284);
if (221552 == n.j) var i = n(285796);
var d = n(824051);
function u(e) {
    let { title: s, children: n } = e;
    return (0, r.jsxs)("div", {
        className: d.A9,
        children: [
            (0, r.jsx)(o.E, { className: d.HN, variant: "body-md/normal", color: "text-strong", children: s }),
            n,
        ],
    });
}
function m(e) {
    let { title: s, children: n } = e;
    return (0, r.jsxs)("div", {
        className: d.y,
        children: [
            (0, r.jsx)(o.E, { className: d.HN, variant: "body-sm/medium", color: "text-muted", children: s }),
            n,
        ],
    });
}
function h(e) {
    let { icon: s, text: n, meetsRequirement: l } = e;
    return (0, r.jsxs)("div", {
        className: d.xP,
        children: [
            (0, r.jsx)(s, { className: d.jt, height: 16, width: 16, size: "custom", color: "currentColor" }),
            (0, r.jsx)(o.E, { className: d.Pg, variant: "body-sm/medium", children: n }),
            l
                ? (0, r.jsx)(c.y, {
                      size: "sm",
                      color: "currentColor",
                      className: d.Fl,
                      secondaryColor: t.A.colors.WHITE.css,
                  })
                : (0, r.jsx)(i.a, {
                      size: "sm",
                      color: "currentColor",
                      className: d.Yk,
                      secondaryColor: t.A.colors.WHITE.css,
                  }),
        ],
    });
}
function x(e) {
    let { icon: s, text: n, footnote: l, meetsRequirement: i, children: u, className: m } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(d.xP, m),
                children: [
                    (0, r.jsx)(s, { className: d.jt, height: 20, width: 20, size: "custom", color: "currentColor" }),
                    (0, r.jsx)(o.E, { className: d.Pg, variant: "body-md/normal", children: n }),
                    i
                        ? (0, r.jsx)(c.y, {
                              size: "md",
                              color: "currentColor",
                              className: d.Fl,
                              secondaryColor: t.A.colors.WHITE.css,
                          })
                        : u,
                ],
            }),
            null != l &&
                (0, r.jsx)(o.E, { color: "text-default", className: d.xA, variant: "body-xs/normal", children: l }),
        ],
    });
}
