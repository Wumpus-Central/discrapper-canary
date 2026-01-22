n.d(t, { A: () => d }), n(228524);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(990078),
    s = n(397927),
    o = n(985018),
    c = n(571316);
function d(e) {
    let {
        name: t,
        description: n,
        icon: r,
        imageSrc: d,
        iconBackgroundColor: u,
        iconClassName: b,
        iconWrapperClassName: f,
        details: p,
        detailsClassName: m,
        isHeader: g,
        isPremium: h,
        children: x,
    } = e;
    return (0, i.jsxs)(s.BJc, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != r || null != d
                ? (function (e, t, n, r, a) {
                      if (null != t)
                          return (0, i.jsx)("img", {
                              alt: "",
                              src: t,
                              className: l()(c.P0, r),
                          });
                      let s = null;
                      return (
                          null != e &&
                              (s =
                                  "string" == typeof e
                                      ? (0, i.jsx)("img", {
                                            alt: "",
                                            src: e,
                                            className: l()(c.Kk, r),
                                        })
                                      : (0, i.jsx)(e, {
                                            className: l()(c.Kk, r),
                                            color: "currentColor",
                                        })),
                          (0, i.jsx)("div", {
                              style: { backgroundColor: n },
                              className: l()(c.P0, a),
                              children: s,
                          })
                      );
                  })(r, d, u, b, f)
                : null,
            (0, i.jsxs)(s.BJc, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: r, detailsClassName: d, isHeader: u, isPremium: b } = e,
                            f =
                                null == r
                                    ? void 0
                                    : r.map((e, t) => {
                                          let { icon: n, text: r } = e;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: l()(c.yM, u ? c.Vw : null),
                                                  children: [
                                                      null != n
                                                          ? (0, i.jsx)(n, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: c.Ul,
                                                            })
                                                          : null,
                                                      (0, i.jsx)(s.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-default",
                                                          className: d,
                                                          children: r,
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      });
                        return (0, i.jsxs)(s.BJc, {
                            gap: 0,
                            children: [
                                (0, i.jsxs)(s.Heading, {
                                    variant: u ? "heading-xl/semibold" : "heading-md/medium",
                                    className: u ? c.wx : c.K8,
                                    children: [
                                        t,
                                        b &&
                                            (0, i.jsx)(a.m, {
                                                text: o.intl.string(o.t.VFuFum),
                                                children: (0, i.jsx)(s.qyI, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: c.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, i.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: n,
                                      })
                                    : null,
                                (0, i.jsx)(s.BJc, {
                                    direction: "horizontal",
                                    children: f,
                                }),
                            ],
                        });
                    })({
                        name: t,
                        description: n,
                        details: p,
                        detailsClassName: m,
                        isHeader: g,
                        isPremium: h,
                    }),
                    x,
                ],
            }),
        ],
    });
}
