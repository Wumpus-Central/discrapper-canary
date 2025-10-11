r.d(t, { Z: () => s });
var n = r(81825);
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
            { sku_id: n, sku_product_line: i, sku_name: u } = e;
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
            })(
                {},
                (function (e, t) {
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
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (o[r] = e[r]);
                    }
                    return o;
                })(e, ["sku_id", "sku_product_line", "sku_name"]),
            )),
            (r = r =
                {
                    sku_id: n,
                    sku_product_line: i,
                    sku_name: u,
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
    constructor(e) {
        super(),
            o(this, "skuId", void 0),
            o(this, "skuProductLine", void 0),
            o(this, "skuName", void 0),
            (this.skuId = e.sku_id),
            (this.skuProductLine = e.sku_product_line),
            (this.skuName = e.sku_name);
    }
}
