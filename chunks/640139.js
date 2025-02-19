r.d(t, { default: () => c }), r(266796);
var n = r(200651),
    o = r(481060),
    a = r(773),
    s = r(217719);
function c(e) {
    var t,
        r,
        { powerup: c } = e,
        i = (function (e, t) {
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
                className: s.modal,
                size: o.CgR.DYNAMIC
            },
            i
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(o.hzk, {
                        className: s.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: s.sidebar,
                                children: [
                                    (0, n.jsx)('img', {
                                        alt: '',
                                        src: '',
                                        className: s.powerupImage
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: s.contentContainer,
                                        children: [
                                            (0, n.jsx)(o.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: c.title
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                className: s.description,
                                                variant: 'text-sm/normal',
                                                children: c.description
                                            }),
                                            (0, n.jsx)(a.Z, {
                                                className: s.footer,
                                                skuId: c.skuId,
                                                active: c.active
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: s.exampleImage,
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    src: ''
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.olH, {
                        className: s.close,
                        onClick: i.onClose
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
