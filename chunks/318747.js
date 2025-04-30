n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(197115),
    d = n(474936),
    u = n(388032),
    m = n(637693);
let p = (e) => {
    var { className: t, forceWhite: n, giftMessage: r, subscriptionTier: p } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['className', 'forceWhite', 'giftMessage', 'subscriptionTier']);
    let h = (0, o.ZP)(),
        f = (0, l.wj)(h) || n,
        b = f ? a.Ttl.WHITE : a.Ttl.BRAND,
        _ = p === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3);
    return (0, i.jsx)(
        c.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                isGift: !0,
                color: b,
                look: a.iLD.OUTLINED,
                buttonText: _,
                giftMessage: r,
                className: s()(t, m.giftButton, f ? m.buttonWhite : m.buttonBrand),
                subscriptionTier: p
            },
            g
        )
    );
};
