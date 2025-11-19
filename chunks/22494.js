n.d(t, { Z: () => p }), n(388685);
var r = n(81825),
    i = n(523080),
    a = n(541699),
    o = n(321947),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class p extends r.Z {
    static fromServer(e) {
        var { user_id: t, wishlist_items: n } = e,
            r = f(e, ["user_id", "wishlist_items"]);
        let l = n.map((e) => {
            switch (e.sku_product_line) {
                case s.POd.COLLECTIBLES:
                    return a.Z.fromServer(e);
                case s.POd.SOCIAL_LAYER_GAME_ITEM:
                    return o.Z.fromServer(e);
                default:
                    return i.Z.fromServer(e);
            }
        });
        return new p(
            d(c({}, r), {
                userId: t,
                items: l,
            }),
        );
    }
    getSkuIds() {
        return this.items.map((e) => e.skuId);
    }
    hasSkuId(e) {
        return this.items.some((t) => t.skuId === e);
    }
    getProductLines() {
        return new Set(this.items.map((e) => e.skuProductLine));
    }
    constructor(e) {
        super(),
            l(this, "id", void 0),
            l(this, "userId", void 0),
            l(this, "items", void 0),
            (this.id = e.id),
            (this.userId = e.userId),
            (this.items = e.items);
    }
}
