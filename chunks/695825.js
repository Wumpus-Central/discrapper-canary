"use strict";
n.d(t, {
    AE: () => E,
    D7: () => A,
    DQ: () => l,
    KD: () => I,
    Nb: () => h,
    PC: () => g,
    WV: () => p,
    XT: () => f,
    aC: () => o,
    b3: () => d,
    iG: () => T,
    qt: () => u,
    ux: () => _,
    wJ: () => m,
    z9: () => c,
    zW: () => y,
});
var r = n(562465),
    i = n(198982),
    a = n(652215),
    s = n(818348);
let o = async (e, t) => {
        try {
            return (
                await r.Bo.post({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e), body: t, rejectWithError: !1 })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    l = async (e, t, n) => {
        let { priceTier: s, ...o } = n;
        try {
            return (
                await r.Bo.post({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                    body: { ...o, price_tier: s },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    u = async (e, t, n, s) => {
        let { priceTier: o, ...l } = s;
        try {
            return (
                await r.Bo.patch({
                    url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                    body: { ...l, price_tier: o },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    c = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
            n = { include_soft_deleted: t.includeSoftDeleted, country_code: t.countryCode };
        try {
            return (
                await r.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e), query: n, rejectWithError: !1 })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    d = async (e) => (await r.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), rejectWithError: !1 })).body,
    _ = async (e, t) => {
        try {
            return (await r.Bo.patch({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), body: t, rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    f = async (e) => {
        try {
            return (
                await r.Bo.get({
                    url: a.Rsh.PRICE_TIERS,
                    query: { price_tier_type: s.L_.GUILD_ROLE_SUBSCRIPTIONS, guild_id: e },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    p = async function (e, t) {
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
    h = async (e) => {
        try {
            return (await r.Bo.get({ url: a.Rsh.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e), rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    m = async (e, t, n) => {
        try {
            await r.Bo.del({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n), rejectWithError: !1 });
        } catch (e) {
            throw new i.LG(e);
        }
    },
    g = async (e, t, n) => {
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
    E = async (e) => {
        try {
            return (await r.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIALS(e), rejectWithError: !1 })).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    A = async (e, t, n) => {
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
    I = async (e, t, n) => {
        try {
            return (
                await r.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n), rejectWithError: !1 })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    T = async function (e) {
        let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (await r.Bo.get({ url: a.Rsh.CREATOR_MONETIZATION_RESTRICTIONS(e), signal: t, rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
    y = async (e) => {
        try {
            let t = await r.Bo.get({ url: a.Rsh.GUILD_DISCOVERY_SLUG(e), rejectWithError: !1 });
            return t.body ?? JSON.parse(t.text);
        } catch (e) {
            throw new i.LG(e);
        }
    };
