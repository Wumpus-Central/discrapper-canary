t.d(n, { default: () => f }), t(47120), t(266796);
var r = t(200651),
    o = t(192379),
    a = t(120356),
    i = t.n(a),
    s = t(481060),
    l = t(156732),
    c = t(262212),
    u = t(845602),
    d = t(535396),
    p = t(384732);
function f(e) {
    var n,
        t,
        { guildId: a, powerup: f } = e,
        _ = (function (e, n) {
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
    let [m, g] = o.useState(void 0),
        b = (0, l.Z)(f),
        C = o.useMemo(() => (f.skuId === d.IN ? (0, r.jsx)(u.Z, { guildId: a }) : void 0), [f, a]);
    return (0, r.jsxs)(
        s.Y0X,
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
                className: p.modal,
                size: s.CgR.DYNAMIC
            },
            _
        )),
        (t = t =
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
