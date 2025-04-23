r.d(t, { default: () => d }), r(388685), r(953529);
var n = r(200651),
    o = r(192379),
    a = r(481060),
    l = r(262212),
    i = r(795338),
    s = r(845602),
    c = r(535396),
    u = r(384732);
function d(e) {
    var t,
        r,
        { guildId: d, powerup: p } = e,
        f = (function (e, t) {
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
    let [b, g] = o.useState(void 0),
        m = o.useMemo(() => {
            switch (p.skuId) {
                case c.IN:
                    return (0, n.jsx)(s.E, { guildId: d });
                case c.If:
                    return (0, n.jsx)(s.Z, {});
                default:
                    return;
            }
        }, [p, d]);
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
                className: u.modal,
                size: a.CgR.DYNAMIC
            },
            f
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(a.hzk, {
                        className: u.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: u.sidebar,
                                children: [
                                    (0, n.jsx)(i.m, {
                                        className: u.powerupImage,
                                        powerup: p
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: u.contentContainer,
                                        children: [
                                            (0, n.jsx)(a.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: p.title
                                            }),
                                            (0, n.jsx)(a.Text, {
                                                className: u.description,
                                                variant: 'text-sm/normal',
                                                children: p.description
                                            }),
                                            null != b &&
                                                (0, n.jsx)(a.Text, {
                                                    className: u.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: b
                                                }),
                                            (0, n.jsx)(l.ZP, {
                                                className: u.footer,
                                                guildId: d,
                                                powerup: p,
                                                onError: g
                                            })
                                        ]
                                    })
                                ]
                            }),
                            null != m &&
                                (0, n.jsx)('div', {
                                    className: u.exampleImage,
                                    children: m
                                })
                        ]
                    }),
                    (0, n.jsx)(a.olH, {
                        className: u.close,
                        onClick: f.onClose
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
