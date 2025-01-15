n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(600164),
    s = n(528144),
    d = n(388032),
    c = n(747536);
function u(e) {
    let { name: t, description: n, icon: l, imageSrc: u, iconBackgroundColor: m, iconClassName: h, iconWrapperClassName: p, details: g, detailsClassName: x, isHeader: f, isPremium: b } = e;
    return (0, i.jsxs)(o.Z, {
        justify: o.Z.Justify.CENTER,
        className: c.wrapper,
        children: [
            null != l || null != u
                ? (0, i.jsx)(o.Z.Child, {
                      shrink: 0,
                      grow: 0,
                      children: (function (e, t, n, l, a) {
                          if (null != t)
                              return (0, i.jsx)('img', {
                                  alt: '',
                                  src: t,
                                  className: r()(c.iconWrapper, l)
                              });
                          let s = null;
                          return (
                              null != e &&
                                  (s =
                                      'string' == typeof e
                                          ? (0, i.jsx)('img', {
                                                alt: '',
                                                src: e,
                                                className: r()(c.icon, l)
                                            })
                                          : (0, i.jsx)(e, {
                                                className: r()(c.icon, l),
                                                color: 'currentColor'
                                            })),
                              (0, i.jsx)(o.Z, {
                                  align: o.Z.Align.CENTER,
                                  justify: o.Z.Justify.CENTER,
                                  style: { backgroundColor: n },
                                  className: r()(c.iconWrapper, a),
                                  children: s
                              })
                          );
                      })(l, u, m, h, p)
                  })
                : null,
            (function (e) {
                let { name: t, description: n, details: l, detailsClassName: u, isHeader: m, isPremium: h } = e,
                    p =
                        null == l
                            ? void 0
                            : l.map((e, t) => {
                                  let { icon: n, text: l } = e;
                                  return (0, i.jsxs)(
                                      'div',
                                      {
                                          className: r()(c.detailsWrapper, m ? c.headerDetailsWrapper : null),
                                          children: [
                                              null != n
                                                  ? (0, i.jsx)(n, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: c.detailsIcon
                                                    })
                                                  : null,
                                              (0, i.jsx)(a.Text, {
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
                return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    children: [
                        (0, i.jsxs)(s.Z, {
                            size: m ? s.Z.Sizes.SIZE_24 : s.Z.Sizes.SIZE_16,
                            className: m ? c.header : c.secondaryHeader,
                            children: [
                                t,
                                h &&
                                    (0, i.jsx)(a.Tooltip, {
                                        text: d.intl.string(d.t.VFuFur),
                                        children: (e) =>
                                            (0, i.jsx)(a.TicketIcon, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                ...e,
                                                className: c.premiumIcon
                                            })
                                    })
                            ]
                        }),
                        null != n
                            ? (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: n
                              })
                            : null,
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Direction.HORIZONTAL,
                            align: o.Z.Align.CENTER,
                            wrap: o.Z.Wrap.WRAP,
                            children: p
                        })
                    ]
                });
            })({
                name: t,
                description: n,
                details: g,
                detailsClassName: x,
                isHeader: f,
                isPremium: b
            })
        ]
    });
}
