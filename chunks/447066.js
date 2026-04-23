n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(834730),
    o = n(331322),
    d = n(534514),
    c = n(638916),
    u = n(985018),
    m = n(866219);
function g(e) {
    let {
        name: t,
        description: n,
        icon: l,
        imageSrc: g,
        iconBackgroundColor: h,
        iconClassName: x,
        iconWrapperClassName: p,
        details: A,
        detailsClassName: b,
        isHeader: f,
        isPremium: _,
        children: j,
    } = e;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != l || null != g
                ? (function (e, t, n, l, a) {
                      if (null != t) return (0, i.jsx)("img", { alt: "", src: t, className: s()(m.P0, l) });
                      let r = null;
                      return (
                          null != e &&
                              (r =
                                  "string" == typeof e
                                      ? (0, i.jsx)("img", { alt: "", src: e, className: s()(m.Kk, l) })
                                      : (0, i.jsx)(e, { className: s()(m.Kk, l), color: "currentColor" })),
                          (0, i.jsx)("div", { style: { backgroundColor: n }, className: s()(m.P0, a), children: r })
                      );
                  })(l, g, h, x, p)
                : null,
            (0, i.jsxs)(o.B, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: l, detailsClassName: g, isHeader: h, isPremium: x } = e,
                            p = l?.map((e, t) => {
                                let { icon: n, text: l } = e;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: s()(m.yM, h ? m.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, i.jsx)(n, { size: "xs", color: "currentColor", className: m.Ul })
                                                : null,
                                            (0, i.jsx)(r.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: g,
                                                children: l,
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            });
                        return (0, i.jsxs)(o.B, {
                            gap: 0,
                            children: [
                                (0, i.jsxs)(d.D, {
                                    variant: h ? "heading-xl/semibold" : "heading-md/medium",
                                    className: h ? m.wx : m.K8,
                                    children: [
                                        t,
                                        x &&
                                            (0, i.jsx)(a.m, {
                                                text: u.intl.string(u.t.VFuFum),
                                                children: (0, i.jsx)(c.q, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: m.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, i.jsx)(o.B, { direction: "horizontal", children: p }),
                            ],
                        });
                    })({ name: t, description: n, details: A, detailsClassName: b, isHeader: f, isPremium: _ }),
                    j,
                ],
            }),
        ],
    });
}
