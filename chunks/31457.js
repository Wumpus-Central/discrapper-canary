l.d(t, { ZK: () => u, _H: () => d, cS: () => o, fu: () => c });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(827734),
    r = l(397927),
    C = l(72736);
function o(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("div", {
        className: C.A9,
        children: [
            (0, n.jsx)(r.Text, { className: C.HN, variant: "text-md/normal", color: "text-strong", children: t }),
            l,
        ],
    });
}
function d(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("div", {
        className: C.y,
        children: [
            (0, n.jsx)(r.Text, { className: C.HN, variant: "text-sm/medium", color: "text-muted", children: t }),
            l,
        ],
    });
}
function c(e) {
    let { icon: t, text: l, meetsRequirement: i } = e;
    return (0, n.jsxs)("div", {
        className: C.xP,
        children: [
            (0, n.jsx)(t, { className: C.jt, height: 16, width: 16, size: "custom", color: "currentColor" }),
            (0, n.jsx)(r.Text, { className: C.Pg, variant: "text-sm/medium", children: l }),
            i
                ? (0, n.jsx)(r.yr3, {
                      size: "sm",
                      color: "currentColor",
                      className: C.Fl,
                      secondaryColor: a.A.colors.WHITE.css,
                  })
                : (0, n.jsx)(r.aXh, {
                      size: "sm",
                      color: "currentColor",
                      className: C.Yk,
                      secondaryColor: a.A.colors.WHITE.css,
                  }),
        ],
    });
}
function u(e) {
    let { icon: t, text: l, footnote: i, meetsRequirement: o, children: d, className: c } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: s()(C.xP, c),
                children: [
                    (0, n.jsx)(t, { className: C.jt, height: 20, width: 20, size: "custom", color: "currentColor" }),
                    (0, n.jsx)(r.Text, { className: C.Pg, variant: "text-md/normal", children: l }),
                    o
                        ? (0, n.jsx)(r.yr3, {
                              size: "md",
                              color: "currentColor",
                              className: C.Fl,
                              secondaryColor: a.A.colors.WHITE.css,
                          })
                        : d,
                ],
            }),
            null != i &&
                (0, n.jsx)(r.Text, { color: "text-default", className: C.xA, variant: "text-xs/normal", children: i }),
        ],
    });
}
