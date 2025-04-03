n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(197115),
    d = n(474936),
    u = n(388032),
    m = n(637693);
let g = (e) => {
    var { className: t, forceWhite: n, giftMessage: i, subscriptionTier: g } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['className', 'forceWhite', 'giftMessage', 'subscriptionTier']);
    let h = (0, o.ZP)(),
        f = (0, a.wj)(h) || n,
        b = f ? l.Ttl.WHITE : l.Ttl.BRAND,
        N = g === d.Si.TIER_0 ? u.NW.string(u.t.rk4Uu7) : u.NW.string(u.t.Ve9Ge3);
    return (0, r.jsx)(
        c.Z,
        (function (e) {
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
                isGift: !0,
                color: b,
                look: l.iLD.OUTLINED,
                buttonText: N,
                giftMessage: i,
                className: s()(t, m.giftButton, f ? m.buttonWhite : m.buttonBrand),
                subscriptionTier: g
            },
            p
        )
    );
};
