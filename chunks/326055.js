r.d(t, { default: () => f }), r(388685), r(953529);
var n = r(255367),
    o = r(73800),
    a = r(481060),
    i = r(870246),
    l = r(639777),
    s = r(262212),
    c = r(795338),
    u = r(845602),
    d = r(535396),
    p = r(384732);
function f(e) {
    var t,
        r,
        { guildId: f, powerup: b } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [_, m] = o.useState(void 0),
        j = o.useMemo(() => {
            switch (b.skuId) {
                case d.IN:
                    return (0, n.jsx)(u.E, { guildId: f });
                case d.If:
                    return (0, n.jsx)(u.Z, {});
                default:
                    return;
            }
        }, [b, f]);
    (0, i.$)(f, b, i.w.DETAIL);
    let y = (0, l.Z)(f);
    return (0, n.jsxs)(
        a.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                className: p.modal,
                size: a.CgR.DYNAMIC
            },
            g
        )),
        (r = r =
            {
                parentComponent: 'GuildPowerupPerkModal',
                children: [
                    (0, n.jsxs)(a.hzk, {
                        className: p.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: p.sidebar,
                                children: [
                                    (0, n.jsx)(c.m, {
                                        className: p.powerupImage,
                                        powerup: b
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: p.contentContainer,
                                        children: [
                                            (0, n.jsx)(a.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: b.title
                                            }),
                                            (0, n.jsx)(a.Text, {
                                                className: p.description,
                                                variant: 'text-sm/normal',
                                                children: b.description
                                            }),
                                            null != _ &&
                                                (0, n.jsx)(a.Text, {
                                                    className: p.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: _
                                                }),
                                            y &&
                                                (0, n.jsx)(s.ZP, {
                                                    className: p.footer,
                                                    guildId: f,
                                                    powerup: b,
                                                    onError: m
                                                })
                                        ]
                                    })
                                ]
                            }),
                            null != j &&
                                (0, n.jsx)('div', {
                                    className: p.exampleImage,
                                    children: j
                                })
                        ]
                    }),
                    (0, n.jsx)(a.olH, {
                        className: p.close,
                        onClick: g.onClose
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
