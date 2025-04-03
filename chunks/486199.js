n.d(t, { Z: () => u }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(600164),
    s = n(528144),
    c = n(388032),
    d = n(410322);
function u(e) {
    let { name: t, description: n, icon: i, imageSrc: u, iconBackgroundColor: p, iconClassName: m, iconWrapperClassName: b, details: g, detailsClassName: f, isHeader: h, isPremium: x } = e;
    return (0, r.jsxs)(a.Z, {
        justify: a.Z.Justify.CENTER,
        className: d.wrapper,
        children: [
            null != i || null != u
                ? (0, r.jsx)(a.Z.Child, {
                      shrink: 0,
                      grow: 0,
                      children: (function (e, t, n, i, o) {
                          if (null != t)
                              return (0, r.jsx)('img', {
                                  alt: '',
                                  src: t,
                                  className: l()(d.iconWrapper, i)
                              });
                          let s = null;
                          return (
                              null != e &&
                                  (s =
                                      'string' == typeof e
                                          ? (0, r.jsx)('img', {
                                                alt: '',
                                                src: e,
                                                className: l()(d.icon, i)
                                            })
                                          : (0, r.jsx)(e, {
                                                className: l()(d.icon, i),
                                                color: 'currentColor'
                                            })),
                              (0, r.jsx)(a.Z, {
                                  align: a.Z.Align.CENTER,
                                  justify: a.Z.Justify.CENTER,
                                  style: { backgroundColor: n },
                                  className: l()(d.iconWrapper, o),
                                  children: s
                              })
                          );
                      })(i, u, p, m, b)
                  })
                : null,
            (function (e) {
                let { name: t, description: n, details: i, detailsClassName: u, isHeader: p, isPremium: m } = e,
                    b =
                        null == i
                            ? void 0
                            : i.map((e, t) => {
                                  let { icon: n, text: i } = e;
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: l()(d.detailsWrapper, p ? d.headerDetailsWrapper : null),
                                          children: [
                                              null != n
                                                  ? (0, r.jsx)(n, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: d.detailsIcon
                                                    })
                                                  : null,
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  color: 'header-secondary',
                                                  className: u,
                                                  children: i
                                              })
                                          ]
                                      },
                                      t
                                  );
                              });
                return (0, r.jsxs)(a.Z, {
                    direction: a.Z.Direction.VERTICAL,
                    children: [
                        (0, r.jsxs)(s.Z, {
                            size: p ? s.Z.Sizes.SIZE_24 : s.Z.Sizes.SIZE_16,
                            className: p ? d.header : d.secondaryHeader,
                            children: [
                                t,
                                m &&
                                    (0, r.jsx)(o.ua7, {
                                        text: c.NW.string(c.t.VFuFur),
                                        children: (e) => {
                                            var t, n;
                                            return (0, r.jsx)(
                                                o.Prq,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    },
                                                    e
                                                )),
                                                (n = n = { className: d.premiumIcon }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (e) {
                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                      }),
                                                t)
                                            );
                                        }
                                    })
                            ]
                        }),
                        null != n
                            ? (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: n
                              })
                            : null,
                        (0, r.jsx)(a.Z, {
                            direction: a.Z.Direction.HORIZONTAL,
                            align: a.Z.Align.CENTER,
                            wrap: a.Z.Wrap.WRAP,
                            children: b
                        })
                    ]
                });
            })({
                name: t,
                description: n,
                details: g,
                detailsClassName: f,
                isHeader: h,
                isPremium: x
            })
        ]
    });
}
