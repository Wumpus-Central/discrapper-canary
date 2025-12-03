n.d(t, { Z: () => d }), n(953529);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(28664),
    o = n(481060),
    s = n(388032),
    c = n(961174);
function d(e) {
    let {
        name: t,
        description: n,
        icon: r,
        imageSrc: d,
        iconBackgroundColor: u,
        iconClassName: p,
        iconWrapperClassName: m,
        details: b,
        detailsClassName: g,
        isHeader: f,
        isPremium: h,
        children: x,
    } = e;
    return (0, i.jsxs)(o.Kqy, {
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
                              className: l()(c.iconWrapper, r),
                          });
                      let o = null;
                      return (
                          null != e &&
                              (o =
                                  "string" == typeof e
                                      ? (0, i.jsx)("img", {
                                            alt: "",
                                            src: e,
                                            className: l()(c.icon, r),
                                        })
                                      : (0, i.jsx)(e, {
                                            className: l()(c.icon, r),
                                            color: "currentColor",
                                        })),
                          (0, i.jsx)("div", {
                              style: { backgroundColor: n },
                              className: l()(c.iconWrapper, a),
                              children: o,
                          })
                      );
                  })(r, d, u, p, m)
                : null,
            (0, i.jsxs)(o.Kqy, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: r, detailsClassName: d, isHeader: u, isPremium: p } = e,
                            m =
                                null == r
                                    ? void 0
                                    : r.map((e, t) => {
                                          let { icon: n, text: r } = e;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: l()(c.detailsWrapper, u ? c.headerDetailsWrapper : null),
                                                  children: [
                                                      null != n
                                                          ? (0, i.jsx)(n, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: c.detailsIcon,
                                                            })
                                                          : null,
                                                      (0, i.jsx)(o.Text, {
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
                        return (0, i.jsxs)(o.Kqy, {
                            gap: 0,
                            children: [
                                (0, i.jsxs)(o.Heading, {
                                    variant: u ? "heading-xl/semibold" : "heading-md/medium",
                                    className: u ? c.header : c.secondaryHeader,
                                    children: [
                                        t,
                                        p &&
                                            (0, i.jsx)(a.u, {
                                                text: s.intl.string(s.t.VFuFum),
                                                children: (0, i.jsx)(o.Prq, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: c.premiumIcon,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, i.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: n,
                                      })
                                    : null,
                                (0, i.jsx)(o.Kqy, {
                                    direction: "horizontal",
                                    children: m,
                                }),
                            ],
                        });
                    })({
                        name: t,
                        description: n,
                        details: b,
                        detailsClassName: g,
                        isHeader: f,
                        isPremium: h,
                    }),
                    x,
                ],
            }),
        ],
    });
}
