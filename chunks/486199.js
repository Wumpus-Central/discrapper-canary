n.d(t, { Z: () => d }), n(953529);
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(600164),
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
    } = e;
    return (0, i.jsxs)(o.Z, {
        justify: o.Z.Justify.CENTER,
        className: c.wrapper,
        children: [
            null != r || null != d
                ? (0, i.jsx)(o.Z.Child, {
                      shrink: 0,
                      grow: 0,
                      children: (function (e, t, n, r, a) {
                          if (null != t)
                              return (0, i.jsx)("img", {
                                  alt: "",
                                  src: t,
                                  className: l()(c.iconWrapper, r),
                              });
                          let s = null;
                          return (
                              null != e &&
                                  (s =
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
                              (0, i.jsx)(o.Z, {
                                  align: o.Z.Align.CENTER,
                                  justify: o.Z.Justify.CENTER,
                                  style: { backgroundColor: n },
                                  className: l()(c.iconWrapper, a),
                                  children: s,
                              })
                          );
                      })(r, d, u, p, m),
                  })
                : null,
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
                                              (0, i.jsx)(a.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "header-secondary",
                                                  className: d,
                                                  children: r,
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              });
                return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    children: [
                        (0, i.jsxs)(a.X6q, {
                            variant: u ? "heading-xl/semibold" : "heading-md/medium",
                            className: u ? c.header : c.secondaryHeader,
                            children: [
                                t,
                                p &&
                                    (0, i.jsx)(a.ua7, {
                                        text: s.intl.string(s.t.VFuFur),
                                        children: (e) => {
                                            var t, n;
                                            return (0, i.jsx)(
                                                a.Prq,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            i = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (i = i.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            i.forEach(function (t) {
                                                                var i;
                                                                (i = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: i,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = i);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    },
                                                    e,
                                                )),
                                                (n = n = { className: c.premiumIcon }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var i = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, i);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(n, e),
                                                          );
                                                      }),
                                                t),
                                            );
                                        },
                                    }),
                            ],
                        }),
                        null != n
                            ? (0, i.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  color: "header-secondary",
                                  children: n,
                              })
                            : null,
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Direction.HORIZONTAL,
                            align: o.Z.Align.CENTER,
                            wrap: o.Z.Wrap.WRAP,
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
        ],
    });
}
