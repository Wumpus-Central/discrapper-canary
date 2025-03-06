t.d(o, { default: () => u }), t(47120);
var n = t(200651),
    r = t(192379),
    a = t(481060),
    c = t(27237),
    s = t(17622),
    i = t(790053),
    l = t(942570);
function u(e) {
    var o,
        t,
        { guildId: u, powerup: d } = e,
        b = (function (e, o) {
            if (null == e) return {};
            var t,
                n,
                r = (function (e, o) {
                    if (null == e) return {};
                    var t,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (t = a[n]), o.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, o);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (t = a[n]), !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['guildId', 'powerup']);
    let [m, p] = r.useState(void 0);
    return (0, n.jsxs)(
        a.Y0X,
        ((o = (function (e) {
            for (var o = 1; o < arguments.length; o++) {
                var t = null != arguments[o] ? arguments[o] : {},
                    n = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (o) {
                        var n;
                        (n = t[o]),
                            o in e
                                ? Object.defineProperty(e, o, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[o] = n);
                    });
            }
            return e;
        })(
            {
                className: i.modal,
                size: a.CgR.DYNAMIC
            },
            b
        )),
        (t = t =
            {
                children: [
                    (0, n.jsxs)(a.hzk, {
                        className: i.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsx)('img', {
                                alt: '',
                                src: l,
                                className: i.boostImage
                            }),
                            (0, n.jsxs)('div', {
                                className: i.contentContainer,
                                children: [
                                    (0, n.jsx)(a.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        children: d.title
                                    }),
                                    (0, n.jsx)(s.Z, { powerup: d }),
                                    null != m &&
                                        (0, n.jsx)(a.Text, {
                                            color: 'status-danger',
                                            variant: 'text-sm/semibold',
                                            children: m
                                        }),
                                    (0, n.jsx)(c._R, {
                                        className: i.footer,
                                        guildId: u,
                                        powerup: d,
                                        onError: p
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(a.olH, {
                        className: i.close,
                        onClick: b.onClose,
                        withCircleBackground: !0
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t))
            : (function (e, o) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        o)
    );
}
