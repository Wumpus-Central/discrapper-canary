n.d(t, { default: () => c }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    s = n(481060),
    i = n(156732),
    a = n(969867),
    l = n(656659);
function c(e) {
    var t,
        n,
        { guildId: c, powerup: d } = e,
        u = (function (e, t) {
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
        })(e, ['guildId', 'powerup']);
    let [p, b] = o.useState(void 0),
        m = (0, i.Z)(d);
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
                className: l.modal,
                size: s.CgR.DYNAMIC
            },
            u
        )),
        (n = n =
            {
                children: [
                    (0, r.jsxs)(s.hzk, {
                        className: l.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: l.sidebar,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: l.powerupImageContainer,
                                        children: (0, r.jsx)('img', {
                                            className: l.powerupImage,
                                            alt: '',
                                            src: m
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: l.contentContainer,
                                        children: [
                                            (0, r.jsx)(s.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: d.title
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                className: l.description,
                                                variant: 'text-sm/normal',
                                                children: d.description
                                            }),
                                            null != p &&
                                                (0, r.jsx)(s.Text, {
                                                    className: l.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: p
                                                }),
                                            (0, r.jsx)(a.Z, {
                                                className: l.footer,
                                                guildId: c,
                                                powerup: d,
                                                onError: b
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: l.exampleImage,
                                children: (0, r.jsx)('img', {
                                    alt: '',
                                    src: ''
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(s.olH, {
                        className: l.close,
                        onClick: u.onClose
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
