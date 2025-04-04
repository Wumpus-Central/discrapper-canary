n.d(t, { default: () => f }), n(47120), n(266796);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(156732),
    c = n(262212),
    u = n(845602),
    d = n(535396),
    p = n(384732);
function f(e) {
    var t,
        n,
        { guildId: a, powerup: f } = e,
        _ = (function (e, t) {
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
    let [m, g] = o.useState(void 0),
        b = (0, l.Z)(f),
        C = o.useMemo(() => (f.skuId === d.IN ? (0, r.jsx)(u.Z, { guildId: a }) : void 0), [f, a]);
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
                className: p.modal,
                size: s.CgR.DYNAMIC
            },
            _
        )),
        (n = n =
            {
                children: [
                    (0, r.jsxs)(s.hzk, {
                        className: p.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: p.sidebar,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: p.powerupImageContainer,
                                        children: (0, r.jsx)('img', {
                                            className: i()(p.powerupImage, { [p.gradientRoleColorsImage]: f.skuId === d.If }),
                                            alt: '',
                                            src: b
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: p.contentContainer,
                                        children: [
                                            (0, r.jsx)(s.X6q, {
                                                variant: 'heading-xl/extrabold',
                                                children: f.title
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                className: p.description,
                                                variant: 'text-sm/normal',
                                                children: f.description
                                            }),
                                            null != m &&
                                                (0, r.jsx)(s.Text, {
                                                    className: p.error,
                                                    color: 'status-danger',
                                                    variant: 'text-sm/semibold',
                                                    children: m
                                                }),
                                            (0, r.jsx)(c.ZP, {
                                                className: p.footer,
                                                guildId: a,
                                                powerup: f,
                                                onError: g
                                            })
                                        ]
                                    })
                                ]
                            }),
                            null != C &&
                                (0, r.jsx)('div', {
                                    className: p.exampleImage,
                                    children: C
                                })
                        ]
                    }),
                    (0, r.jsx)(s.olH, {
                        className: p.close,
                        onClick: _.onClose
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
