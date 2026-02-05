n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(397927),
    o = n(985018),
    d = n(571316);
function c(e) {
    let {
        name: t,
        description: n,
        icon: l,
        imageSrc: c,
        iconBackgroundColor: u,
        iconClassName: m,
        iconWrapperClassName: g,
        details: x,
        detailsClassName: h,
        isHeader: p,
        isPremium: A,
        children: b,
    } = e;
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != l || null != c
                ? (function (e, t, n, l, a) {
                      if (null != t) return (0, i.jsx)("img", { alt: "", src: t, className: s()(d.P0, l) });
                      let r = null;
                      return (
                          null != e &&
                              (r =
                                  "string" == typeof e
                                      ? (0, i.jsx)("img", { alt: "", src: e, className: s()(d.Kk, l) })
                                      : (0, i.jsx)(e, { className: s()(d.Kk, l), color: "currentColor" })),
                          (0, i.jsx)("div", { style: { backgroundColor: n }, className: s()(d.P0, a), children: r })
                      );
                  })(l, c, u, m, g)
                : null,
            (0, i.jsxs)(r.BJc, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: l, detailsClassName: c, isHeader: u, isPremium: m } = e,
                            g = l?.map((e, t) => {
                                let { icon: n, text: l } = e;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: s()(d.yM, u ? d.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, i.jsx)(n, { size: "xs", color: "currentColor", className: d.Ul })
                                                : null,
                                            (0, i.jsx)(r.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: c,
                                                children: l,
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            });
                        return (0, i.jsxs)(r.BJc, {
                            gap: 0,
                            children: [
                                (0, i.jsxs)(r.Heading, {
                                    variant: u ? "heading-xl/semibold" : "heading-md/medium",
                                    className: u ? d.wx : d.K8,
                                    children: [
                                        t,
                                        m &&
                                            (0, i.jsx)(a.m, {
                                                text: o.intl.string(o.t.VFuFum),
                                                children: (0, i.jsx)(r.qyI, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: d.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, i.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: n,
                                      })
                                    : null,
                                (0, i.jsx)(r.BJc, { direction: "horizontal", children: g }),
                            ],
                        });
                    })({ name: t, description: n, details: x, detailsClassName: h, isHeader: p, isPremium: A }),
                    b,
                ],
            }),
        ],
    });
}
