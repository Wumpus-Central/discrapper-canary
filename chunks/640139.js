r.d(t, { default: () => l }), r(266796);
var n = r(200651),
    o = r(481060),
    s = r(11658),
    a = r(969867),
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
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
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
                                                        return (0, n.jsx)(s.KV, { index: 0 });
                                                    case c.U.PERK:
                                                        return (0, n.jsx)(o.Text, {
                                                            className: i.description,
                                                            variant: 'text-sm/normal',
                                                            children: l.description
                                                        });
                                                }
                                            })(),
                                            (() => {
                                                switch (l.type) {
                                                    case c.U.LEVEL:
                                                        return (0, n.jsx)(s._R, { powerup: l });
                                                    case c.U.PERK:
                                                        return (0, n.jsx)(a.Z, {
                                                            className: i.footer,
                                                            skuId: l.skuId,
                                                            active: l.active
                                                        });
                                                }
                                            })()
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
