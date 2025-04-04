n.d(t, { default: () => y }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    s = n(48026),
    a = n(442837),
    i = n(481060),
    l = n(607070),
    c = n(530618),
    u = n(372654),
    d = n(156732),
    p = n(262212),
    f = n(535396),
    b = n(680278),
    m = n(388032),
    j = n(548197),
    O = n(942570);
function g(e) {
    let { powerup: t } = e,
        n = (0, d.Z)(t);
    switch (t.type) {
        case f.Us.LEVEL:
            return (0, r.jsx)('img', {
                alt: '',
                src: O
            });
        case f.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: n,
                className: j.exampleImage
            });
    }
}
function y(e) {
    var t,
        n,
        { guildId: d, powerup: O } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let x = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        v = o.useRef(null),
        _ = o.useRef(new s.qA()),
        [h, w] = o.useState(null),
        C = f.uc.has(O.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: w,
                className: j.confettiCanvas,
                environment: _.current
            }),
            (0, r.jsxs)(
                i.Y0X,
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
                        className: j.modal,
                        size: i.CgR.DYNAMIC
                    },
                    y
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(i.hzk, {
                                className: j.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: j.container,
                                    ref: v,
                                    children: [
                                        (0, r.jsx)(g, { powerup: O }),
                                        (0, r.jsxs)('div', {
                                            className: j.contentContainer,
                                            children: [
                                                (0, r.jsx)(i.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: m.NW.formatToPlainString(b.Z.lFuOFB, { perkName: O.title })
                                                }),
                                                (0, r.jsx)(i.Text, {
                                                    className: j.description,
                                                    variant: 'text-sm/normal',
                                                    children: m.NW.formatToPlainString(b.Z.y3wHoq, { perkName: O.title })
                                                }),
                                                C
                                                    ? (0, r.jsx)(p.ms, {
                                                          className: j.button,
                                                          guildId: d,
                                                          powerup: O,
                                                          onClick: y.onClose
                                                      })
                                                    : (0, r.jsx)(i.zxk, {
                                                          className: j.button,
                                                          onClick: y.onClose,
                                                          children: m.NW.string(m.t.cpT0Cg)
                                                      })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(i.olH, {
                                className: j.close,
                                onClick: y.onClose
                            }),
                            !x &&
                                (0, r.jsx)(c.Z, {
                                    confettiTarget: v.current,
                                    confettiCanvas: h,
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
