(n.d(t, { default: () => j }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    l = n(505266),
    i = n(442837),
    a = n(481060),
    u = n(607070),
    s = n(530618),
    c = n(372654),
    d = n(262212),
    p = n(795338),
    f = n(535396),
    b = n(93841),
    m = n(388032),
    v = n(548197);
function j(e) {
    var t,
        n,
        { guildId: j, powerup: g } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let x = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        y = o.useRef(null),
        h = o.useRef(new l.qA()),
        [P, _] = o.useState(null),
        w = f.uc.has(g.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.O_, {
                ref: _,
                className: v.confettiCanvas,
                environment: h.current
            }),
            (0, r.jsxs)(
                a.Y0X,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        className: v.modal,
                        size: a.CgR.DYNAMIC
                    },
                    O
                )),
                (n = n =
                    {
                        parentComponent: 'GuildPowerupActivateModal',
                        children: [
                            (0, r.jsx)(a.hzk, {
                                className: v.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: v.container,
                                    ref: y,
                                    children: [
                                        (0, r.jsx)(p.m, {
                                            className: v.image,
                                            powerup: g
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: v.contentContainer,
                                            children: [
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: m.intl.formatToPlainString(b.default.lFuOFB, { perkName: g.title })
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    className: v.description,
                                                    variant: 'text-sm/normal',
                                                    children: m.intl.formatToPlainString(b.default.y3wHoq, { perkName: g.title })
                                                }),
                                                w
                                                    ? (0, r.jsx)(d.ms, {
                                                          className: v.button,
                                                          guildId: j,
                                                          powerup: g,
                                                          onClick: O.onClose
                                                      })
                                                    : (0, r.jsx)('div', {
                                                          'data-button-hoisted-classname-wrapper': !0,
                                                          className: v.button,
                                                          children: (0, r.jsx)(a.zxk, {
                                                              variant: 'primary',
                                                              text: m.intl.string(m.t.cpT0Cg),
                                                              onClick: O.onClose
                                                          })
                                                      })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(a.olH, {
                                className: v.close,
                                onClick: O.onClose
                            }),
                            !x &&
                                (0, r.jsx)(s.Z, {
                                    confettiTarget: y.current,
                                    confettiCanvas: P,
                                    sprites: (0, c.vK)()
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
