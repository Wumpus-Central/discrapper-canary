r.d(t, { Z: () => s });
var n = r(81825),
    l = r(523080),
    i = r(541699),
    a = r(981631);
function o(e, t, r) {
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
class s extends n.Z {
    static fromServer(e) {
        var t,
            r,
            { user_id: n, wishlist_items: c } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ["user_id", "wishlist_items"]);
        let d = c.map((e) => (e.sku_product_line === a.POd.COLLECTIBLES ? i.Z.fromServer(e) : l.Z.fromServer(e)));
        return new s(
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
                            o(e, t, r[t]);
                        });
                }
                return e;
            })({}, u)),
            (r = r =
                {
                    userId: n,
                    items: d,
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
            o(this, "id", void 0),
            o(this, "userId", void 0),
            o(this, "items", void 0),
            (this.id = e.id),
            (this.userId = e.userId),
            (this.items = e.items);
    }
}
