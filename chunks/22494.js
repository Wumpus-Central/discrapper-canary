n.d(t, { Z: () => h }), n(388685);
var r = n(81825),
    i = n(973616),
    a = n(523080),
    o = n(541699),
    s = n(321947),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class h extends r.Z {
    static fromServer(e) {
        var t,
            n,
            { user_id: r, wishlist_items: c } = e,
            d = _(e, ["user_id", "wishlist_items"]);
        let p = c.map((e) => {
            switch (e.sku_product_line) {
                case l.POd.COLLECTIBLES:
                    return o.Z.fromServer(e);
                case l.POd.SOCIAL_LAYER_GAME_ITEM:
                    return s.Z.fromServer(e);
                default:
                    return a.Z.fromServer(e);
            }
        });
        return new h(
            f(u({}, d), {
                userId: r,
                items: p,
                applications:
                    null != (n = null == (t = d.applications) ? void 0 : t.map((e) => i.ZP.createFromServer(e)))
                        ? n
                        : void 0,
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
        var t;
        super(),
            c(this, "id", void 0),
            c(this, "userId", void 0),
            c(this, "items", void 0),
            c(this, "applications", void 0),
            (this.id = e.id),
            (this.userId = e.userId),
            (this.items = e.items),
            (this.applications = null != (t = e.applications) ? t : void 0);
    }
}
