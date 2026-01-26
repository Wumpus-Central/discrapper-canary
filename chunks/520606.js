n.d(t, {
    A: () => d,
});
var r = n(315069),
    i = n(731935);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
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

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class d extends r.A {
    static fromServer(e) {
        let { sku_id: t, sku_product_line: n, sku_name: r, is_owned: a, gifter_user_id: o, sku: u } = e;
        return new d(
            l(s({}, c(e, ["sku_id", "sku_product_line", "sku_name", "is_owned", "gifter_user_id", "sku"])), {
                sku_id: t,
                sku_product_line: n,
                sku_name: r,
                is_owned: a,
                gifter_user_id: o,
                sku: null != u ? i.A.createFromServer(u) : void 0,
            }),
        );
    }
    constructor(e) {
        super(),
            a(this, "skuId", void 0),
            a(this, "skuProductLine", void 0),
            a(this, "skuName", void 0),
            a(this, "isOwned", void 0),
            a(this, "gifterUserId", void 0),
            a(this, "sku", void 0),
            (this.skuId = e.sku_id),
            (this.skuProductLine = e.sku_product_line),
            (this.skuName = e.sku_name),
            (this.isOwned = e.is_owned),
            (this.gifterUserId = e.gifter_user_id),
            (this.sku = e.sku);
    }
}
