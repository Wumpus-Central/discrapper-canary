n.d(t, {
    R: () => f,
    _: () => s,
});
var r = n(54381),
    o = n(473749),
    c = n(512722),
    l = n.n(c),
    i = n(442837),
    u = n(240864);
let a = o.createContext(void 0);
function s() {
    let e = o.useContext(a);
    return l()(null != e, "GuildProductPurchaseContext not found"), e;
}
function f(e) {
    var { children: t, guildProductListingId: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                    (n = c[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["children", "guildProductListingId"]);
    let c = (0, i.e7)([u.Z], () => u.Z.getGuildProduct(n));
    return (
        l()(null != c, "guildProductListing cannot be null"),
        (0, r.jsx)(a.Provider, {
            value: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({ guildProductListing: c }, o),
            children: t,
        })
    );
}
