n.d(t, { default: () => m }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    c = n(119617),
    a = n(442837),
    s = n(481060),
    i = n(607070),
    l = n(530618),
    u = n(372654),
    f = n(783684),
    d = n(388032),
    p = n(44291);
function b() {
    return (b =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function m(e) {
    var t,
        n,
        m = b(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    let j = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
        O = o.useRef(null),
        g = o.useRef(new c.qA()),
        [y, h] = o.useState(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.O_, {
                ref: h,
                className: p.confettiCanvas,
                environment: g.current
            }),
            (0, r.jsxs)(
                s.Y0X,
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
                        className: p.modal,
                        size: s.CgR.DYNAMIC
                    },
                    m
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(s.hzk, {
                                className: p.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: p.container,
                                    ref: O,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: '',
                                            className: p.exampleImage
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: p.contentContainer,
                                            children: [
                                                (0, r.jsx)(s.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: d.NW.string(f.Z.lFuOFB)
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    className: p.description,
                                                    variant: 'text-sm/normal',
                                                    children: d.NW.string(f.Z.y3wHoq)
                                                }),
                                                (0, r.jsx)(s.zxk, {
                                                    className: p.button,
                                                    onClick: m.onClose,
                                                    children: d.NW.string(f.Z['g5Ds6+'])
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(s.olH, {
                                className: p.close,
                                onClick: m.onClose
                            }),
                            !j &&
                                (0, r.jsx)(l.Z, {
                                    confettiTarget: O.current,
                                    confettiCanvas: y,
                                    sprites: (0, u.vK)()
                                })
                        ]
                    }),
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
            )
        ]
    });
}
