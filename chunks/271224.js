n.d(t, { default: () => u }), n(47120);
var r = n(200651),
    o = n(192379),
    s = n(481060),
    a = n(604857),
    c = n(17622),
    i = n(418630),
    l = n(942570);
function u(e) {
    var t,
        n,
        { guildId: u, powerup: d, onClose: p } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'powerup', 'onClose']);
    let [b, m] = o.useState(void 0);
    return (0, r.jsxs)(
        s.Y0X,
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
                className: i.modal,
                size: s.CgR.DYNAMIC
            },
            f
        )),
        (n = n =
            {
                children: [
                    (0, r.jsxs)(s.hzk, {
                        className: i.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: l,
                                className: i.boostImage
                            }),
                            (0, r.jsxs)('div', {
                                className: i.contentContainer,
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        children: d.title
                                    }),
                                    (0, r.jsx)(c.Z, { powerup: d }),
                                    null != b &&
                                        (0, r.jsx)(s.Text, {
                                            color: 'status-danger',
                                            variant: 'text-sm/semibold',
                                            children: b
                                        }),
                                    (0, r.jsx)(a.Z, {
                                        className: i.footer,
                                        guildId: u,
                                        powerup: d,
                                        onError: m,
                                        onClose: p
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(s.olH, {
                        className: i.close,
                        onClick: p
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
