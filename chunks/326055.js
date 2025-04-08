t.d(n, { default: () => d }), t(388685), t(953529);
var r = t(200651),
    o = t(192379),
    a = t(481060),
    i = t(262212),
    s = t(795338),
    c = t(845602),
    l = t(535396),
    u = t(384732);
function d(e) {
    var n,
        t,
        { guildId: d, powerup: p } = e,
        f = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (t = a[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [_, m] = o.useState(void 0),
        g = o.useMemo(() => (p.skuId === l.IN ? (0, r.jsx)(c.Z, { guildId: d }) : void 0), [p, d]);
    return (0, r.jsxs)(
        a.Y0X,
        ((n = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = r);
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
        (t = t =
            {
                children: [
                    (0, r.jsxs)(a.hzk, {
                        className: u.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: u.sidebar,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: u.powerupImageContainer,
                                        children: (0, r.jsx)(s.m, { powerup: p })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: u.contentContainer,
                                        children: [
                                            (0, r.jsx)(a.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: p.title
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                className: u.description,
                                                variant: 'text-sm/normal',
                                                children: p.description
                                            }),
                                            null != _ &&
                                                (0, r.jsx)(a.Text, {
                                                    className: u.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: _
                                                }),
                                            (0, r.jsx)(i.ZP, {
                                                className: u.footer,
                                                guildId: d,
                                                powerup: p,
                                                onError: m
                                            })
                                        ]
                                    })
                                ]
                            }),
                            null != g &&
                                (0, r.jsx)('div', {
                                    className: u.exampleImage,
                                    children: g
                                })
                        ]
                    }),
                    (0, r.jsx)(a.olH, {
                        className: u.close,
                        onClick: f.onClose
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        n)
    );
}
