n.d(t, {
    AE: () => S,
    D7: () => I,
    DQ: () => _,
    KD: () => T,
    Nb: () => O,
    PC: () => v,
    WV: () => y,
    XT: () => b,
    aC: () => p,
    b3: () => g,
    iG: () => C,
    qt: () => h,
    ux: () => E,
    wJ: () => A,
    z9: () => m,
    zW: () => N,
});
var r = n(562465),
    i = n(198982),
    a = n(652215),
    s = n(818348);

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
let p = async (e, t) => {
        try {
            return (
                await r.Bo.post({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    body: t,
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    _ = async (e, t, n) => {
        let { priceTier: s } = n,
            o = d(n, ["priceTier"]);
        try {
            return (
                await r.Bo.post({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                    body: u(l({}, o), {
                        price_tier: s,
                    }),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    h = async (e, t, n, s) => {
        let { priceTier: o } = s,
            c = d(s, ["priceTier"]);
        try {
            return (
                await r.Bo.patch({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                    body: u(l({}, c), {
                        price_tier: o,
                    }),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    m = async function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          includeSoftDeleted: !1,
                      },
            n = {
                include_soft_deleted: t.includeSoftDeleted,
                country_code: t.countryCode,
            };
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    query: n,
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    g = async (e) =>
        (
            await r.Bo.get({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                rejectWithError: !1,
            })
        ).body,
    E = async (e, t) => {
        try {
            return (
                await r.Bo.patch({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                    body: t,
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    b = async (e) => {
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.PRICE_TIERS,
                    query: {
                        price_tier_type: s.L_.GUILD_ROLE_SUBSCRIPTIONS,
                        guild_id: e,
                    },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    y = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                    query: {
                        include_draft_listings: n.includeDraftListings,
                        include_archived_listings: n.includeArchivedListings,
                    },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    O = async (e) => {
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    A = async (e, t, n) => {
        try {
            await r.Bo.del({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                rejectWithError: !1,
            });
        } catch (e) {
            throw new i.LG(e);
        }
    },
    v = async (e, t, n) => {
        try {
            return (
                await r.Bo.post({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    S = async (e) => {
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIALS(e),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    I = async (e, t, n) => {
        try {
            return (
                await r.Bo.patch({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                    body: n,
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    T = async (e, t, n) => {
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    C = async function (e) {
        let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.CREATOR_MONETIZATION_RESTRICTIONS(e),
                    signal: t,
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    N = async (e) => {
        try {
            var t;
            let n = await r.Bo.get({
                url: a.Rsh.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !1,
            });
            return null != (t = n.body) ? t : JSON.parse(n.text);
        } catch (e) {
            throw new i.LG(e);
        }
    };
