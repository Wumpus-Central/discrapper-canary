n.d(t, { default: () => d }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    a = n(481060),
    i = n(156732),
    s = n(262212),
    c = n(845602),
    l = n(535396),
    u = n(384732);
function d(e) {
    var t,
        n,
        { guildId: d, powerup: p } = e,
        f = (function (e, t) {
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
        })(e, ['guildId', 'powerup']);
    let [_, m] = o.useState(void 0),
        g = (0, i.Z)(p),
        b = o.useMemo(() => (p.skuId === l.IN ? (0, r.jsx)(c.Z, { guildId: d }) : void 0), [p, d]);
    return (0, r.jsxs)(
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
                className: u.modal,
                size: a.CgR.DYNAMIC
            },
            f
        )),
        (n = n =
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
                                        children: (0, r.jsx)('img', {
                                            className: u.powerupImage,
                                            alt: '',
                                            src: g
                                        })
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
                                            (0, r.jsx)(s.ZP, {
                                                className: u.footer,
                                                guildId: d,
                                                powerup: p,
                                                onError: m
                                            })
                                        ]
                                    })
                                ]
                            }),
                            null != b &&
                                (0, r.jsx)('div', {
                                    className: u.exampleImage,
                                    children: b
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
