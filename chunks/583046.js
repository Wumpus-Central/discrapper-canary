n.d(t, { Z: () => f });
var r = n(442837),
    i = n(509545),
    o = n(212895),
    a = n(474936),
    s = n(231338);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    var t, n;
    let { activeSubscription: l, skuIDs: u, paymentSourceId: f, isGift: _ } = e;
    u = u.filter((e) => e !== a.Si.NONE);
    let p = (0, r.e7)([i.Z], () => {
            let e = i.Z.getPlanIdsForSkus(u).filter((e) => !_ || a.dJ.has(e));
            return e.length > 0 ? i.Z.get(e[0]) : null;
        }),
        h = null == p ? [] : (0, o.DE)(p.id, f, _),
        m = null != (n = null != (t = h.find((e) => e === (null == l ? void 0 : l.currency))) ? t : h[0]) ? n : s.pK.USD;
    return d(c({}, (0, o.gr)(m, null == p ? void 0 : p.id, f, _, u)), { currencies: h });
}
