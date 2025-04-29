n.d(t, { default: () => j }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    l = n(505266),
    i = n(442837),
    a = n(481060),
    s = n(607070),
    c = n(530618),
    u = n(372654),
    d = n(262212),
    f = n(795338),
    p = n(535396),
    b = n(680278),
    m = n(388032),
    O = n(548197);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: g } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let v = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        x = o.useRef(null),
        _ = o.useRef(new l.qA()),
        [C, h] = o.useState(null),
        w = p.uc.has(g.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.O_, {
                ref: h,
                className: O.confettiCanvas,
                environment: _.current
            }),
            (0, r.jsxs)(
                a.Y0X,
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
                        className: O.modal,
                        size: a.CgR.DYNAMIC
                    },
                    y
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(a.hzk, {
                                className: O.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: O.container,
                                    ref: x,
                                    children: [
                                        (0, r.jsx)(f.m, {
                                            className: O.image,
                                            powerup: g
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: O.contentContainer,
                                            children: [
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: m.intl.formatToPlainString(b.default.lFuOFB, { perkName: g.title })
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    className: O.description,
                                                    variant: 'text-sm/normal',
                                                    children: m.intl.formatToPlainString(b.default.y3wHoq, { perkName: g.title })
                                                }),
                                                w
                                                    ? (0, r.jsx)(d.ms, {
                                                          className: O.button,
                                                          guildId: j,
                                                          powerup: g,
                                                          onClick: y.onClose
                                                      })
                                                    : (0, r.jsx)(a.zxk, {
                                                          className: O.button,
                                                          onClick: y.onClose,
                                                          children: m.intl.string(m.t.cpT0Cg)
                                                      })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(a.olH, {
                                className: O.close,
                                onClick: y.onClose
                            }),
                            !v &&
                                (0, r.jsx)(c.Z, {
                                    confettiTarget: x.current,
                                    confettiCanvas: C,
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
