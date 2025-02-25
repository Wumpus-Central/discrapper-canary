n.d(t, { Z: () => a }), n(266796);
var r = n(535396);
function i(e, t, n) {
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
function o(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e) {
    var t, n, i;
    let a = null === (t = e.powerup_metadata) || void 0 === t ? void 0 : t.category_type;
    if (null == a) return;
    let s = null === (n = e.sku) || void 0 === n ? void 0 : n.powerup_metadata;
    if (null == s) return;
    let l = {
        title: e.summary,
        skuId: e.sku.id,
        active: !1,
        cost: s.boost_price
    };
    switch (a) {
        case r.U.LEVEL:
            return o({ type: r.U.LEVEL }, l);
        case r.U.PERK:
            return o(
                {
                    type: r.U.PERK,
                    description: null !== (i = e.description) && void 0 !== i ? i : '',
                    bundle: !1
                },
                l
            );
    }
}
