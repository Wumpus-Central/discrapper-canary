(r.d(t, { default: () => b }), r(388685), r(953529));
var n = r(255367),
    o = r(73800),
    a = r(304789),
    i = r(481060),
    l = r(870246),
    s = r(639777),
    c = r(262212),
    u = r(795338),
    d = r(845602),
    p = r(535396),
    f = r(384732);
function b(e) {
    var t,
        r,
        { guildId: b, powerup: g } = e,
        _ = (function (e, t) {
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
    let [m, j] = o.useState(void 0),
        v = o.useMemo(() => {
            switch (g.skuId) {
                case p.IN:
                    return (0, n.jsx)(d.E, { guildId: b });
                case p.If:
                    return (0, n.jsx)(d.Z, {});
                default:
                    return;
            }
        }, [g, b]);
    (0, l.$)(b, g, l.w.DETAIL);
    let O = (0, s.Z)(b);
    return (0, n.jsxs)(
        i.Y0X,
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
                className: f.modal,
                size: i.CgR.DYNAMIC
            },
            _
        )),
        (r = r =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, n.jsxs)(i.hzk, {
                        className: f.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: f.sidebar,
                                children: [
                                    (0, n.jsx)(a.$, {
                                        className: f.powerupImage,
                                        children: (0, n.jsx)(u.m, { powerup: g })
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: f.contentContainer,
                                        children: [
                                            (0, n.jsx)(i.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: g.title
                                            }),
                                            (0, n.jsx)(i.Text, {
                                                className: f.description,
                                                variant: 'text-sm/normal',
                                                children: g.description
                                            }),
                                            null != m &&
                                                (0, n.jsx)(i.Text, {
                                                    className: f.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: m
                                                }),
                                            O &&
                                                (0, n.jsx)(c.ZP, {
                                                    className: f.footer,
                                                    guildId: b,
                                                    powerup: g,
                                                    onError: j
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != v &&
                                (0, n.jsx)('div', {
                                    className: f.exampleImage,
                                    children: v
                                })
                        ]
                    }),
                    (0, n.jsx)(i.olH, {
                        className: f.close,
                        onClick: _.onClose
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
