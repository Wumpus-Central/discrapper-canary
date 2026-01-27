n.d(t, {
    Oo: () => o,
    P0: () => d,
    Qm: () => s,
    bq: () => u,
    oG: () => c,
});
var r = n(562465),
    i = n(198982),
    l = n(371794),
    a = n(652215);
let s = async (e, t, n) => {
        let { priceTier: l, imageName: s, createNewRole: o, unlinkRole: c } = n,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(n, ["priceTier", "imageName", "createNewRole", "unlinkRole"]);
        try {
            var d, p;
            return (
                await r.Bo.patch({
                    url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                    body:
                        ((d = (function (e) {
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
                        })({}, u)),
                        (p = {
                            image_name: s,
                            price_tier: l,
                            create_new_role: o,
                            unlink_role: c,
                        }),
                        (p = null != p ? p : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(p)).forEach(function (e) {
                                  Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                              }),
                        d),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    o = async (e, t) => {
        try {
            await r.Bo.del({
                url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1,
            });
        } catch (e) {
            throw new i.LG(e);
        }
    },
    c = async (e) => {
        try {
            return (
                await (0, l.aP)({
                    url: a.Rsh.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1,
                })
            ).body.listings;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    u = async (e, t) => {
        try {
            return (
                await (0, l.aP)({
                    url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    d = async (e) => {
        let { guildId: t, productId: n, attachmentId: l } = e;
        try {
            return (
                await r.Bo.post({
                    url: a.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    };
