r.d(t, {
    R: () => f,
    _: () => s
});
var n = r(200651),
    o = r(192379),
    c = r(512722),
    l = r.n(c),
    i = r(442837),
    u = r(240864);
let a = o.createContext(void 0);
function s() {
    let e = o.useContext(a);
    return l()(null != e, 'GuildProductPurchaseContext not found'), e;
}
function f(e) {
    var { children: t, guildProductListingId: r } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['children', 'guildProductListingId']);
    let c = (0, i.e7)([u.Z], () => u.Z.getGuildProduct(r));
    return (
        l()(null != c, 'guildProductListing cannot be null'),
        (0, n.jsx)(a.Provider, {
            value: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({ guildProductListing: c }, o),
            children: t
        })
    );
}
