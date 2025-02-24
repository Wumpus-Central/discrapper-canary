r.d(t, { default: () => l }), r(266796);
var n = r(200651),
    o = r(481060),
    a = r(11658),
    s = r(773),
    c = r(535396),
    i = r(217719);
function l(e) {
    var t,
        r,
        { powerup: l } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['powerup']);
    return (0, n.jsxs)(
        o.Y0X,
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
                className: i.modal,
                size: o.CgR.DYNAMIC
            },
            p
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(o.hzk, {
                        className: i.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: i.sidebar,
                                children: [
                                    (0, n.jsx)('img', {
                                        alt: '',
                                        src: '',
                                        className: i.powerupImage
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: i.contentContainer,
                                        children: [
                                            (0, n.jsx)(o.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: l.title
                                            }),
                                            (() => {
                                                switch (l.type) {
                                                    case c.U.LEVEL:
                                                        return (0, n.jsx)(a.KV, { index: 0 });
                                                    case c.U.PERK:
                                                        return (0, n.jsx)(o.Text, {
                                                            className: i.description,
                                                            variant: 'text-sm/normal',
                                                            children: l.description
                                                        });
                                                }
                                            })(),
                                            (0, n.jsx)(s.Z, {
                                                className: i.footer,
                                                skuId: l.skuId,
                                                active: l.active
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: i.exampleImage,
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    src: ''
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.olH, {
                        className: i.close,
                        onClick: p.onClose
                    })
                ]
            }),
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
