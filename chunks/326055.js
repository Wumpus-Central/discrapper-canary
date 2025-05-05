r.d(t, { default: () => p }), r(388685), r(953529);
var n = r(255367),
    o = r(73800),
    a = r(481060),
    l = r(870246),
    i = r(262212),
    s = r(795338),
    c = r(845602),
    u = r(535396),
    d = r(384732);
function p(e) {
    var t,
        r,
        { guildId: p, powerup: f } = e,
        b = (function (e, t) {
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
    let [g, m] = o.useState(void 0),
        _ = o.useMemo(() => {
            switch (f.skuId) {
                case u.IN:
                    return (0, n.jsx)(c.E, { guildId: p });
                case u.If:
                    return (0, n.jsx)(c.Z, {});
                default:
                    return;
            }
        }, [f, p]);
    return (
        (0, l.$)(p, f, l.w.DETAIL),
        (0, n.jsxs)(
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
                    className: d.modal,
                    size: a.CgR.DYNAMIC
                },
                b
            )),
            (r = r =
                {
                    children: [
                        (0, n.jsxs)(a.hzk, {
                            className: d.modalContentContainer,
                            scrollbarType: 'none',
                            children: [
                                (0, n.jsxs)('div', {
                                    className: d.sidebar,
                                    children: [
                                        (0, n.jsx)(s.m, {
                                            className: d.powerupImage,
                                            powerup: f
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: d.contentContainer,
                                            children: [
                                                (0, n.jsx)(a.X6q, {
                                                    variant: 'heading-xl/extrabold',
                                                    children: f.title
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    className: d.description,
                                                    variant: 'text-sm/normal',
                                                    children: f.description
                                                }),
                                                null != g &&
                                                    (0, n.jsx)(a.Text, {
                                                        className: d.error,
                                                        color: 'status-danger',
                                                        variant: 'text-sm/semibold',
                                                        children: g
                                                    }),
                                                (0, n.jsx)(i.ZP, {
                                                    className: d.footer,
                                                    guildId: p,
                                                    powerup: f,
                                                    onError: m
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                null != _ &&
                                    (0, n.jsx)('div', {
                                        className: d.exampleImage,
                                        children: _
                                    })
                            ]
                        }),
                        (0, n.jsx)(a.olH, {
                            className: d.close,
                            onClick: b.onClose
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
        )
    );
}
