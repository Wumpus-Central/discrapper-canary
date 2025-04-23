n.d(t, { default: () => d }), n(388685);
var r = n(200651),
    o = n(192379),
    a = n(481060),
    i = n(870246),
    s = n(604857),
    c = n(17622),
    l = n(418630),
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
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'powerup', 'onClose']);
    let [m, O] = o.useState(void 0);
    return (
        (0, i.$)(d, p, i.w.DETAIL),
        (0, r.jsxs)(
            a.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    className: l.modal,
                    size: a.CgR.DYNAMIC
                },
                b
            )),
            (n = n =
                {
                    children: [
                        (0, r.jsxs)(a.hzk, {
                            className: l.modalContentContainer,
                            scrollbarType: 'none',
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: u,
                                    className: l.boostImage
                                }),
                                (0, r.jsxs)('div', {
                                    className: l.contentContainer,
                                    children: [
                                        (0, r.jsx)(a.X6q, {
                                            variant: 'heading-xl/extrabold',
                                            children: p.title
                                        }),
                                        (0, r.jsx)(c.Z, { powerup: p }),
                                        null != m &&
                                            (0, r.jsx)(a.Text, {
                                                color: 'status-danger',
                                                variant: 'text-sm/semibold',
                                                children: m
                                            }),
                                        (0, r.jsx)(s.Z, {
                                            className: l.footer,
                                            guildId: d,
                                            powerup: p,
                                            onError: O,
                                            onClose: f
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(a.olH, {
                            className: l.close,
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
