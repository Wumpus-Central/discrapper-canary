n.d(t, { default: () => j }), n(388685), n(953529);
var r = n(200651),
    o = n(192379),
    s = n(48026),
    i = n(442837),
    a = n(481060),
    l = n(607070),
    c = n(530618),
    u = n(372654),
    d = n(262212),
    p = n(795338),
    f = n(535396),
    b = n(680278),
    m = n(388032),
    g = n(548197);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: O } = e,
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
    let v = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        x = o.useRef(null),
        _ = o.useRef(new s.qA()),
        [C, h] = o.useState(null),
        w = f.uc.has(O.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: h,
                className: g.confettiCanvas,
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
                        className: g.modal,
                        size: a.CgR.DYNAMIC
                    },
                    y
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(a.hzk, {
                                className: g.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: g.container,
                                    ref: x,
                                    children: [
                                        (0, r.jsx)(p.m, {
                                            className: g.image,
                                            powerup: O
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: g.contentContainer,
                                            children: [
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: m.NW.formatToPlainString(b.Z.lFuOFB, { perkName: O.title })
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    className: g.description,
                                                    variant: 'text-sm/normal',
                                                    children: m.NW.formatToPlainString(b.Z.y3wHoq, { perkName: O.title })
                                                }),
                                                w
                                                    ? (0, r.jsx)(d.ms, {
                                                          className: g.button,
                                                          guildId: j,
                                                          powerup: O,
                                                          onClick: y.onClose
                                                      })
                                                    : (0, r.jsx)(a.zxk, {
                                                          className: g.button,
                                                          onClick: y.onClose,
                                                          children: m.NW.string(m.t.cpT0Cg)
                                                      })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(a.olH, {
                                className: g.close,
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
