(n.d(t, { default: () => g }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    a = n(494497),
    i = n(304789),
    l = n(481060),
    s = n(870246),
    c = n(639777),
    u = n(262212),
    d = n(795338),
    p = n(845602),
    f = n(606876),
    m = n(535396),
    _ = n(384732);
function g(e) {
    var t,
        n,
        { guildId: g, powerup: b } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [j, x] = o.useState(void 0),
        C = o.useMemo(() => {
            switch (b.skuId) {
                case m.IN:
                    return (0, r.jsx)(p.E, { guildId: g });
                case m.If:
                    return (0, r.jsx)(p.Z, {});
                case a.A:
                    return (0, r.jsx)(f.Z, {});
                default:
                    return;
            }
        }, [b, g]);
    (0, s.$)(g, b, s.w.DETAIL);
    let y = (0, c.Z)(g);
    return (0, r.jsxs)(
        l.Y0X,
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
                className: _.modal,
                size: l.CgR.DYNAMIC
            },
            v
        )),
        (n = n =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, r.jsxs)(l.hzk, {
                        className: _.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: _.sidebar,
                                children: [
                                    (0, r.jsx)(i.$, {
                                        className: _.powerupImage,
                                        children: (0, r.jsx)(d.m, { powerup: b })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: _.contentContainer,
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: b.title
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                className: _.description,
                                                variant: 'text-sm/normal',
                                                children: b.description
                                            }),
                                            null != j &&
                                                (0, r.jsx)(l.Text, {
                                                    className: _.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: j
                                                }),
                                            y &&
                                                (0, r.jsx)(u.ZP, {
                                                    className: _.footer,
                                                    guildId: g,
                                                    powerup: b,
                                                    onError: x
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != C &&
                                (0, r.jsx)('div', {
                                    className: _.exampleImage,
                                    children: C
                                })
                        ]
                    }),
                    (0, r.jsx)(l.olH, {
                        className: _.close,
                        onClick: v.onClose
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
    );
}
