r.d(t, { Z: () => c });
var n = r(81825),
    o = r(523080),
    s = r(541699),
    i = r(981631);
function u(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
class c extends n.Z {
    static fromServer(e) {
        var t,
            r,
            { user_id: n, wishlist_items: l } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                }
                return o;
            })(e, ["user_id", "wishlist_items"]);
        let p = l.map((e) => (e.sku_product_line === i.POd.COLLECTIBLES ? s.Z.fromServer(e) : o.Z.fromServer(e)));
        return new c(
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            u(e, t, r[t]);
                        });
                }
                return e;
            })({}, a)),
            (r = r =
                {
                    userId: n,
                    items: p,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        );
    }
    getSkuIds() {
        return this.items.map((e) => e.skuId);
    }
    hasSkuId(e) {
        return this.items.some((t) => t.skuId === e);
    }
    constructor(e) {
        super(),
            u(this, "id", void 0),
            u(this, "userId", void 0),
            u(this, "items", void 0),
            (this.id = e.id),
            (this.userId = e.userId),
            (this.items = e.items);
    }
}
