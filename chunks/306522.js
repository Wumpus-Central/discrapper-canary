n.d(t, {
    Oo: () => _,
    P0: () => g,
    Qm: () => p,
    bq: () => m,
    oG: () => h,
});
var r = n(562465),
    i = n(198982),
    a = n(371794),
    s = n(652215);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
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

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e, t) {
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
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = async (e, t, n) => {
        let { priceTier: a, imageName: o, createNewRole: c, unlinkRole: f } = n,
            p = d(n, ["priceTier", "imageName", "createNewRole", "unlinkRole"]);
        try {
            return (
                await r.Bo.patch({
                    url: s.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                    body: u(l({}, p), {
                        image_name: o,
                        price_tier: a,
                        create_new_role: c,
                        unlink_role: f,
                    }),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    _ = async (e, t) => {
        try {
            await r.Bo.del({
                url: s.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1,
            });
        } catch (e) {
            throw new i.LG(e);
        }
    },
    h = async (e) => {
        try {
            return (
                await (0, a.aP)({
                    url: s.Rsh.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1,
                })
            ).body.listings;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    m = async (e, t) => {
        try {
            return (
                await (0, a.aP)({
                    url: s.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    g = async (e) => {
        let { guildId: t, productId: n, attachmentId: a } = e;
        try {
            return (
                await r.Bo.post({
                    url: s.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, a),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    };
