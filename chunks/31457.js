"use strict";
r.d(t, { ZK: () => m, _H: () => u, cS: () => _, fu: () => p });
var i = r(627968);
r(64700);
var a = r(503698),
    n = r.n(a),
    s = r(827734),
    l = r(834730),
    o = r(628284);
if (21552 == r.j) var c = r(285796);
var d = r(72736);
function _(e) {
    let { title: t, children: r } = e;
    return (0, i.jsxs)("div", {
        className: d.A9,
        children: [
            (0, i.jsx)(l.E, { className: d.HN, variant: "text-md/normal", color: "text-strong", children: t }),
            r,
        ],
    });
}
function u(e) {
    let { title: t, children: r } = e;
    return (0, i.jsxs)("div", {
        className: d.y,
        children: [
            (0, i.jsx)(l.E, { className: d.HN, variant: "text-sm/medium", color: "text-muted", children: t }),
            r,
        ],
    });
}
function p(e) {
    let { icon: t, text: r, meetsRequirement: a } = e;
    return (0, i.jsxs)("div", {
        className: d.xP,
        children: [
            (0, i.jsx)(t, { className: d.jt, height: 16, width: 16, size: "custom", color: "currentColor" }),
            (0, i.jsx)(l.E, { className: d.Pg, variant: "text-sm/medium", children: r }),
            a
                ? (0, i.jsx)(o.y, {
                      size: "sm",
                      color: "currentColor",
                      className: d.Fl,
                      secondaryColor: s.A.colors.WHITE.css,
                  })
                : (0, i.jsx)(c.a, {
                      size: "sm",
                      color: "currentColor",
                      className: d.Yk,
                      secondaryColor: s.A.colors.WHITE.css,
                  }),
        ],
    });
}
function m(e) {
    let { icon: t, text: r, footnote: a, meetsRequirement: c, children: _, className: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: n()(d.xP, u),
                children: [
                    (0, i.jsx)(t, { className: d.jt, height: 20, width: 20, size: "custom", color: "currentColor" }),
                    (0, i.jsx)(l.E, { className: d.Pg, variant: "text-md/normal", children: r }),
                    c
                        ? (0, i.jsx)(o.y, {
                              size: "md",
                              color: "currentColor",
                              className: d.Fl,
                              secondaryColor: s.A.colors.WHITE.css,
                          })
                        : _,
                ],
            }),
            null != a &&
                (0, i.jsx)(l.E, { color: "text-default", className: d.xA, variant: "text-xs/normal", children: a }),
        ],
    });
}
