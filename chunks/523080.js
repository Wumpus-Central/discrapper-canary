r.d(t, { Z: () => i });
var n = r(81825);
function l(e, t, r) {
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
class i extends n.Z {
    static fromServer(e) {
        var t,
            r,
            { sku_id: n, sku_product_line: a } = e;
        return new i(
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
                            l(e, t, r[t]);
                        });
                }
                return e;
            })(
                {},
                (function (e, t) {
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
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                    }
                    return l;
                })(e, ["sku_id", "sku_product_line"]),
            )),
            (r = r =
                {
                    sku_id: n,
                    sku_product_line: a,
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
            l(this, "skuId", void 0),
            l(this, "skuProductLine", void 0),
            (this.skuId = e.sku_id),
            (this.skuProductLine = e.sku_product_line);
    }
}
