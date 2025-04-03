r.d(t, { Z: () => d }), r(266796);
var n = r(200651),
    o = r(192379),
    i = r(120356),
    s = r.n(i),
    c = r(481060),
    a = r(378233),
    l = r(388032),
    u = r(717996);
let f = (e) => {
        let { stickerPack: t } = e;
        return (0, n.jsx)('div', {
            className: u.features,
            children: (0, a.X_)(t)
                ? (0, n.jsx)(c.ua7, {
                      tooltipClassName: u.featuresTooltip,
                      position: 'top',
                      text: l.NW.string(l.t.W11rMT),
                      children: (e) => {
                          var t, r;
                          return (0, n.jsx)(
                              c.o1U,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n);
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
                              (r = r = { className: u.featureIcon }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              t)
                          );
                      }
                  })
                : null
        });
    },
    d = o.memo((e) => {
        let { className: t, stickerPack: r, withDescription: o = !1 } = e;
        return (0, n.jsxs)('div', {
            className: s()(u.header, t),
            children: [
                (0, n.jsxs)('div', {
                    className: u.title,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            className: u.heading,
                            variant: 'heading-sm/semibold',
                            children: r.name
                        }),
                        (0, n.jsx)(f, { stickerPack: r })
                    ]
                }),
                o &&
                    null != r.description &&
                    (0, n.jsx)(c.Text, {
                        className: u.description,
                        variant: 'text-sm/normal',
                        children: r.description
                    }),
                (0, n.jsx)('div', {
                    className: u.count,
                    children: l.NW.format(l.t['0S3JpK'], { numStickers: r.stickers.length })
                })
            ]
        });
    });
