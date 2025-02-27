t.d(r, { default: () => i }), t(47120), t(266796);
var n = t(200651),
    o = t(192379),
    a = t(481060),
    s = t(969867),
    c = t(656659);
function i(e) {
    var r,
        t,
        { guildId: i, powerup: l } = e,
        d = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (t = a[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [p, u] = o.useState(void 0);
    return (0, n.jsxs)(
        a.Y0X,
        ((r = (function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = t[r]),
                            r in e
                                ? Object.defineProperty(e, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[r] = n);
                    });
            }
            return e;
        })(
            {
                className: c.modal,
                size: a.CgR.DYNAMIC
            },
            d
        )),
        (t = t =
            {
                children: [
                    (0, n.jsxs)(a.hzk, {
                        className: c.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: c.sidebar,
                                children: [
                                    (0, n.jsx)('img', {
                                        alt: '',
                                        src: '',
                                        className: c.powerupImage
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: c.contentContainer,
                                        children: [
                                            (0, n.jsx)(a.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: l.title
                                            }),
                                            (0, n.jsx)(a.Text, {
                                                className: c.description,
                                                variant: 'text-sm/normal',
                                                children: l.description
                                            }),
                                            null != p &&
                                                (0, n.jsx)(a.Text, {
                                                    className: c.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: p
                                                }),
                                            (0, n.jsx)(s.Z, {
                                                className: c.footer,
                                                guildId: i,
                                                powerup: l,
                                                onError: u
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: c.exampleImage,
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    src: ''
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(a.olH, {
                        className: c.close,
                        onClick: d.onClose
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        r)
    );
}
