l.d(t, { ZK: () => u, _H: () => d, cS: () => C, fu: () => c });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(827734),
    r = l(397927),
    o = l(230397);
function C(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("div", {
        className: o.A9,
        children: [
            (0, n.jsx)(r.Text, { className: o.HN, variant: "text-md/normal", color: "text-strong", children: t }),
            l,
        ],
    });
}
function d(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("div", {
        className: o.y,
        children: [
            (0, n.jsx)(r.Text, { className: o.HN, variant: "text-sm/medium", color: "text-muted", children: t }),
            l,
        ],
    });
}
function c(e) {
    let { icon: t, text: l, meetsRequirement: i } = e;
    return (0, n.jsxs)("div", {
        className: o.xP,
        children: [
            (0, n.jsx)(t, { className: o.jt, height: 16, width: 16, size: "custom", color: "currentColor" }),
            (0, n.jsx)(r.Text, { className: o.Pg, variant: "text-sm/medium", children: l }),
            i
                ? (0, n.jsx)(r.yr3, {
                      size: "sm",
                      color: "currentColor",
                      className: o.Fl,
                      secondaryColor: a.A.colors.WHITE.css,
                  })
                : (0, n.jsx)(r.aXh, {
                      size: "sm",
                      color: "currentColor",
                      className: o.Yk,
                      secondaryColor: a.A.colors.WHITE.css,
                  }),
        ],
    });
}
function u(e) {
    let { icon: t, text: l, footnote: i, meetsRequirement: C, children: d, className: c } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: s()(o.xP, c),
                children: [
                    (0, n.jsx)(t, { className: o.jt, height: 20, width: 20, size: "custom", color: "currentColor" }),
                    (0, n.jsx)(r.Text, { className: o.Pg, variant: "text-md/normal", children: l }),
                    C
                        ? (0, n.jsx)(r.yr3, {
                              size: "md",
                              color: "currentColor",
                              className: o.Fl,
                              secondaryColor: a.A.colors.WHITE.css,
                          })
                        : d,
                ],
            }),
            null != i &&
                (0, n.jsx)(r.Text, { color: "text-default", className: o.xA, variant: "text-xs/normal", children: i }),
        ],
    });
}
