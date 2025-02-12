n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(600164),
    o = n(528144),
    d = n(388032),
    c = n(506119);
function u(e) {
    let { name: t, description: n, icon: l, imageSrc: u, iconBackgroundColor: m, iconClassName: h, iconWrapperClassName: x, details: g, detailsClassName: p, isHeader: b, isPremium: _ } = e;
    return (0, i.jsxs)(s.Z, {
        justify: s.Z.Justify.CENTER,
        className: c.wrapper,
        children: [
            null != l || null != u
                ? (0, i.jsx)(s.Z.Child, {
                      shrink: 0,
                      grow: 0,
                      children: (function (e, t, n, l, r) {
                          if (null != t)
                              return (0, i.jsx)('img', {
                                  alt: '',
                                  src: t,
                                  className: a()(c.iconWrapper, l)
                              });
                          let o = null;
                          return (
                              null != e &&
                                  (o =
                                      'string' == typeof e
                                          ? (0, i.jsx)('img', {
                                                alt: '',
                                                src: e,
                                                className: a()(c.icon, l)
                                            })
                                          : (0, i.jsx)(e, {
                                                className: a()(c.icon, l),
                                                color: 'currentColor'
                                            })),
                              (0, i.jsx)(s.Z, {
                                  align: s.Z.Align.CENTER,
                                  justify: s.Z.Justify.CENTER,
                                  style: { backgroundColor: n },
                                  className: a()(c.iconWrapper, r),
                                  children: o
                              })
                          );
                      })(l, u, m, h, x)
                  })
                : null,
            (function (e) {
                let { name: t, description: n, details: l, detailsClassName: u, isHeader: m, isPremium: h } = e,
                    x =
                        null == l
                            ? void 0
                            : l.map((e, t) => {
                                  let { icon: n, text: l } = e;
                                  return (0, i.jsxs)(
                                      'div',
                                      {
                                          className: a()(c.detailsWrapper, m ? c.headerDetailsWrapper : null),
                                          children: [
                                              null != n
                                                  ? (0, i.jsx)(n, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: c.detailsIcon
                                                    })
                                                  : null,
                                              (0, i.jsx)(r.Text, {
                                                  variant: 'text-xs/normal',
                                                  color: 'header-secondary',
                                                  className: u,
                                                  children: l
                                              })
                                          ]
                                      },
                                      t
                                  );
                              });
                return (0, i.jsxs)(s.Z, {
                    direction: s.Z.Direction.VERTICAL,
                    children: [
                        (0, i.jsxs)(o.Z, {
                            size: m ? o.Z.Sizes.SIZE_24 : o.Z.Sizes.SIZE_16,
                            className: m ? c.header : c.secondaryHeader,
                            children: [
                                t,
                                h &&
                                    (0, i.jsx)(r.ua7, {
                                        text: d.intl.string(d.t.VFuFur),
                                        children: (e) =>
                                            (0, i.jsx)(r.Prq, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                ...e,
                                                className: c.premiumIcon
                                            })
                                    })
                            ]
                        }),
                        null != n
                            ? (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: n
                              })
                            : null,
                        (0, i.jsx)(s.Z, {
                            direction: s.Z.Direction.HORIZONTAL,
                            align: s.Z.Align.CENTER,
                            wrap: s.Z.Wrap.WRAP,
                            children: x
                        })
                    ]
                });
            })({
                name: t,
                description: n,
                details: g,
                detailsClassName: p,
                isHeader: b,
                isPremium: _
            })
        ]
    });
}
