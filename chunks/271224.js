(n.d(t, { default: () => d }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(870246),
    a = n(604857),
    s = n(17622),
    c = n(418630),
    u = n(942570);
function d(e) {
    var t,
        n,
        { guildId: d, powerup: p, onClose: f } = e,
        b = (function (e, t) {
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
        })(e, ['guildId', 'powerup', 'onClose']);
    let [m, v] = o.useState(void 0);
    return (
        (0, l.$)(d, p, l.w.DETAIL),
        (0, r.jsxs)(
            i.Y0X,
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
                    className: c.modal,
                    size: i.CgR.DYNAMIC
                },
                b
            )),
            (n = n =
                {
                    parentComponent: 'GuildPowerupLevelModal',
                    children: [
                        (0, r.jsxs)(i.hzk, {
                            className: c.modalContentContainer,
                            scrollbarType: 'none',
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: u,
                                    className: c.boostImage
                                }),
                                (0, r.jsxs)('div', {
                                    className: c.contentContainer,
                                    children: [
                                        (0, r.jsx)(i.X6q, {
                                            variant: 'heading-xl/extrabold',
                                            children: p.title
                                        }),
                                        (0, r.jsx)(s.Z, { powerup: p }),
                                        null != m &&
                                            (0, r.jsx)(i.Text, {
                                                color: 'status-danger',
                                                variant: 'text-sm/semibold',
                                                children: m
                                            }),
                                        (0, r.jsx)(a.Z, {
                                            className: c.footer,
                                            guildId: d,
                                            powerup: p,
                                            onError: v,
                                            onClose: f
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(i.olH, {
                            className: c.close,
                            onClick: f
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
    );
}
