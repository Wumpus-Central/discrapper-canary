(r.d(t, { default: () => g }), r(388685), r(953529));
var n = r(255367),
    o = r(73800),
    a = r(494497),
    i = r(304789),
    s = r(481060),
    l = r(870246),
    c = r(639777),
    d = r(262212),
    u = r(795338),
    p = r(845602),
    m = r(606876),
    f = r(535396),
    _ = r(384732);
function g(e) {
    var t,
        r,
        { guildId: g, powerup: b } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [x, C] = o.useState(void 0),
        v = o.useMemo(() => {
            switch (b.skuId) {
                case f.IN:
                    return (0, n.jsx)(p.E, { guildId: g });
                case f.If:
                    return (0, n.jsx)(p.Z, {});
                case a.A:
                    return (0, n.jsx)(m.Z, {});
                default:
                    return;
            }
        }, [b, g]);
    (0, l.$)(g, b, l.w.DETAIL);
    let y = (0, c.Z)(g);
    return (0, n.jsxs)(
        s.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })(
            {
                className: _.modal,
                size: s.CgR.DYNAMIC
            },
            j
        )),
        (r = r =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, n.jsxs)(s.hzk, {
                        className: _.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: _.sidebar,
                                children: [
                                    (0, n.jsx)(i.$, {
                                        className: _.powerupImage,
                                        children: (0, n.jsx)(u.m, { powerup: b })
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: _.contentContainer,
                                        children: [
                                            (0, n.jsx)(s.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: b.title
                                            }),
                                            (0, n.jsx)(s.Text, {
                                                className: _.description,
                                                variant: 'text-sm/normal',
                                                children: b.description
                                            }),
                                            null != x &&
                                                (0, n.jsx)(s.Text, {
                                                    className: _.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: x
                                                }),
                                            y &&
                                                (0, n.jsx)(d.ZP, {
                                                    className: _.footer,
                                                    guildId: g,
                                                    powerup: b,
                                                    onError: C
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != v &&
                                (0, n.jsx)('div', {
                                    className: _.exampleImage,
                                    children: v
                                })
                        ]
                    }),
                    (0, n.jsx)(s.olH, {
                        className: _.close,
                        onClick: j.onClose
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
