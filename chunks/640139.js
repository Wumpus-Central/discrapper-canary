t.d(r, { default: () => d }), t(47120), t(266796);
var n = t(200651),
    o = t(192379),
    s = t(481060),
    a = t(27237),
    c = t(969867),
    i = t(535396),
    l = t(217719);
function d(e) {
    var r,
        t,
        { guildId: d, powerup: p } = e,
        u = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (t = s[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let [m, b] = o.useState(void 0);
    return (0, n.jsxs)(
        s.Y0X,
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
                className: l.modal,
                size: s.CgR.DYNAMIC
            },
            u
        )),
        (t = t =
            {
                children: [
                    (0, n.jsxs)(s.hzk, {
                        className: l.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: l.sidebar,
                                children: [
                                    (0, n.jsx)('img', {
                                        alt: '',
                                        src: '',
                                        className: l.powerupImage
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: l.contentContainer,
                                        children: [
                                            (0, n.jsx)(s.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: p.title
                                            }),
                                            (() => {
                                                switch (p.type) {
                                                    case i.U.LEVEL:
                                                        return (0, n.jsx)(a.gm, { index: 0 });
                                                    case i.U.PERK:
                                                        return (0, n.jsx)(s.Text, {
                                                            className: l.description,
                                                            variant: 'text-sm/normal',
                                                            children: p.description
                                                        });
                                                }
                                            })(),
                                            null != m &&
                                                (0, n.jsx)(s.Text, {
                                                    className: l.error,
                                                    color: 'text-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: m
                                                }),
                                            (() => {
                                                switch (p.type) {
                                                    case i.U.LEVEL:
                                                        return (0, n.jsx)(a._R, {
                                                            guildId: d,
                                                            powerup: p,
                                                            onError: b
                                                        });
                                                    case i.U.PERK:
                                                        return (0, n.jsx)(c.Z, {
                                                            className: l.footer,
                                                            guildId: d,
                                                            powerup: p,
                                                            onError: b
                                                        });
                                                }
                                            })()
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: l.exampleImage,
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    src: ''
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(s.olH, {
                        className: l.close,
                        onClick: u.onClose
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
