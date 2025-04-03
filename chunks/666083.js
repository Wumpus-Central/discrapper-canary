n.d(t, { default: () => y }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    c = n(48026),
    a = n(442837),
    s = n(481060),
    i = n(607070),
    l = n(530618),
    u = n(372654),
    f = n(156732),
    p = n(535396),
    b = n(680278),
    d = n(388032),
    m = n(548197),
    j = n(942570);
function O(e) {
    let { powerup: t } = e,
        n = (0, f.Z)(t);
    switch (t.type) {
        case p.Us.LEVEL:
            return (0, r.jsx)('img', {
                alt: '',
                src: j
            });
        case p.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: n,
                className: m.exampleImage
            });
    }
}
function y(e) {
    var t,
        n,
        { powerup: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['powerup']);
    let j = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
        y = o.useRef(null),
        g = o.useRef(new c.qA()),
        [x, h] = o.useState(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.O_, {
                ref: h,
                className: m.confettiCanvas,
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
                        className: m.modal,
                        size: s.CgR.DYNAMIC
                    },
                    p
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(s.hzk, {
                                className: m.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: m.container,
                                    ref: y,
                                    children: [
                                        (0, r.jsx)(O, { powerup: f }),
                                        (0, r.jsxs)('div', {
                                            className: m.contentContainer,
                                            children: [
                                                (0, r.jsx)(s.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: d.NW.formatToPlainString(b.Z.lFuOFB, { perkName: f.title })
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    className: m.description,
                                                    variant: 'text-sm/normal',
                                                    children: d.NW.formatToPlainString(b.Z.y3wHoq, { perkName: f.title })
                                                }),
                                                (0, r.jsx)(s.zxk, {
                                                    className: m.button,
                                                    onClick: p.onClose,
                                                    children: d.NW.string(b.Z['g5Ds6+'])
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(s.olH, {
                                className: m.close,
                                onClick: p.onClose
                            }),
                            !j &&
                                (0, r.jsx)(l.Z, {
                                    confettiTarget: y.current,
                                    confettiCanvas: x,
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
