n.d(t, {
    ZK: () => C,
    _H: () => d,
    cS: () => c,
    fu: () => u,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    o = n(827734),
    a = n(397927),
    s = n(230397);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: s.A9,
        children: [
            (0, r.jsx)(a.Text, {
                className: s.HN,
                variant: "text-md/normal",
                color: "text-strong",
                children: t,
            }),
            n,
        ],
    });
}
function d(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: s.y,
        children: [
            (0, r.jsx)(a.Text, {
                className: s.HN,
                variant: "text-sm/medium",
                color: "text-muted",
                children: t,
            }),
            n,
        ],
    });
}
function u(e) {
    let { icon: t, text: n, meetsRequirement: l } = e;
    return (0, r.jsxs)("div", {
        className: s.xP,
        children: [
            (0, r.jsx)(t, {
                className: s.jt,
                height: 16,
                width: 16,
                size: "custom",
                color: "currentColor",
            }),
            (0, r.jsx)(a.Text, {
                className: s.Pg,
                variant: "text-sm/medium",
                children: n,
            }),
            l
                ? (0, r.jsx)(a.yr3, {
                      size: "sm",
                      color: "currentColor",
                      className: s.Fl,
                      secondaryColor: o.A.colors.WHITE.css,
                  })
                : (0, r.jsx)(a.aXh, {
                      size: "sm",
                      color: "currentColor",
                      className: s.Yk,
                      secondaryColor: o.A.colors.WHITE.css,
                  }),
        ],
    });
}
function C(e) {
    let { icon: t, text: n, footnote: l, meetsRequirement: c, children: d, className: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: i()(s.xP, u),
                children: [
                    (0, r.jsx)(t, {
                        className: s.jt,
                        height: 20,
                        width: 20,
                        size: "custom",
                        color: "currentColor",
                    }),
                    (0, r.jsx)(a.Text, {
                        className: s.Pg,
                        variant: "text-md/normal",
                        children: n,
                    }),
                    c
                        ? (0, r.jsx)(a.yr3, {
                              size: "md",
                              color: "currentColor",
                              className: s.Fl,
                              secondaryColor: o.A.colors.WHITE.css,
                          })
                        : d,
                ],
            }),
            null != l &&
                (0, r.jsx)(a.Text, {
                    color: "text-default",
                    className: s.xA,
                    variant: "text-xs/normal",
                    children: l,
                }),
        ],
    });
}
