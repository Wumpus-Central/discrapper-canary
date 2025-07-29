(n.d(t, { default: () => O }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(505266),
    l = n(442837),
    a = n(481060),
    s = n(607070),
    c = n(530618),
    u = n(372654),
    d = n(262212),
    p = n(795338),
    f = n(535396),
    b = n(93841),
    m = n(388032),
    j = n(548197);
function O(e) {
    var t,
        n,
        { guildId: O, powerup: y } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let x = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        v = o.useRef(null),
        C = o.useRef(new i.qA()),
        [_, P] = o.useState(null),
        h = f.uc.has(y.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.O_, {
                ref: P,
                className: j.confettiCanvas,
                environment: C.current
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
                        className: j.modal,
                        size: a.CgR.DYNAMIC
                    },
                    g
                )),
                (n = n =
                    {
                        parentComponent: 'GuildPowerupActivateModal',
                        children: [
                            (0, r.jsx)(a.hzk, {
                                className: j.modalContentContainer,
                                scrollbarType: 'none',
                                children: (0, r.jsxs)('div', {
                                    className: j.container,
                                    ref: v,
                                    children: [
                                        (0, r.jsx)(p.m, {
                                            className: j.image,
                                            powerup: y
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: j.contentContainer,
                                            children: [
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: m.intl.formatToPlainString(b.default.lFuOFB, { perkName: y.title })
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    tag: 'span',
                                                    className: j.description,
                                                    variant: 'text-sm/normal',
                                                    children: m.intl.formatToPlainString(b.default.y3wHoq, { perkName: y.title })
                                                }),
                                                h
                                                    ? (0, r.jsx)(d.ms, {
                                                          className: j.button,
                                                          guildId: O,
                                                          powerup: y,
                                                          onClick: g.onClose
                                                      })
                                                    : (0, r.jsx)('div', {
                                                          'data-button-hoisted-classname-wrapper': !0,
                                                          className: j.button,
                                                          children: (0, r.jsx)(a.zxk, {
                                                              variant: 'primary',
                                                              text: m.intl.string(m.t.cpT0Cg),
                                                              onClick: g.onClose
                                                          })
                                                      })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)(a.olH, {
                                className: j.close,
                                onClick: g.onClose
                            }),
                            !x &&
                                (0, r.jsx)(c.Z, {
                                    confettiTarget: v.current,
                                    confettiCanvas: _,
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
