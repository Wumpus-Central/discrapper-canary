r.d(t, { ZK: () => h, _H: () => _, cS: () => u, fu: () => m });
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    a = r(827734),
    s = r(834730),
    o = r(628284);
if (21552 == r.j) var d = r(285796);
var c = r(72736);
function u(e) {
    let { title: t, children: r } = e;
    return (0, n.jsxs)("div", {
        className: c.A9,
        children: [
            (0, n.jsx)(s.E, { className: c.HN, variant: "text-md/normal", color: "text-strong", children: t }),
            r,
        ],
    });
}
function _(e) {
    let { title: t, children: r } = e;
    return (0, n.jsxs)("div", {
        className: c.y,
        children: [
            (0, n.jsx)(s.E, { className: c.HN, variant: "text-sm/medium", color: "text-muted", children: t }),
            r,
        ],
    });
}
function m(e) {
    let { icon: t, text: r, meetsRequirement: i } = e;
    return (0, n.jsxs)("div", {
        className: c.xP,
        children: [
            (0, n.jsx)(t, { className: c.jt, height: 16, width: 16, size: "custom", color: "currentColor" }),
            (0, n.jsx)(s.E, { className: c.Pg, variant: "text-sm/medium", children: r }),
            i
                ? (0, n.jsx)(o.y, {
                      size: "sm",
                      color: "currentColor",
                      className: c.Fl,
                      secondaryColor: a.A.colors.WHITE.css,
                  })
                : (0, n.jsx)(d.a, {
                      size: "sm",
                      color: "currentColor",
                      className: c.Yk,
                      secondaryColor: a.A.colors.WHITE.css,
                  }),
        ],
    });
}
function h(e) {
    let { icon: t, text: r, footnote: i, meetsRequirement: d, children: u, className: _ } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: l()(c.xP, _),
                children: [
                    (0, n.jsx)(t, { className: c.jt, height: 20, width: 20, size: "custom", color: "currentColor" }),
                    (0, n.jsx)(s.E, { className: c.Pg, variant: "text-md/normal", children: r }),
                    d
                        ? (0, n.jsx)(o.y, {
                              size: "md",
                              color: "currentColor",
                              className: c.Fl,
                              secondaryColor: a.A.colors.WHITE.css,
                          })
                        : u,
                ],
            }),
            null != i &&
                (0, n.jsx)(s.E, { color: "text-default", className: c.xA, variant: "text-xs/normal", children: i }),
        ],
    });
}
