"use strict";
n.d(t, {
    AE: () => g,
    D7: () => A,
    DQ: () => l,
    KD: () => I,
    Nb: () => p,
    PC: () => m,
    WV: () => f,
    XT: () => h,
    aC: () => o,
    b3: () => d,
    iG: () => T,
    qt: () => u,
    ux: () => _,
    wJ: () => E,
    z9: () => c,
    zW: () => S,
});
var i = n(636537),
    r = n(913122),
    s = n(652215),
    a = n(818348);
let o = async (e, t) => {
        try {
            return (
                await i.Bo.post({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e), body: t, rejectWithError: !1 })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    l = async (e, t, n) => {
        let { priceTier: a, ...o } = n;
        try {
            return (
                await i.Bo.post({
                    url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                    body: { ...o, price_tier: a },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    u = async (e, t, n, a) => {
        let { priceTier: o, ...l } = a;
        try {
            return (
                await i.Bo.patch({
                    url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                    body: { ...l, price_tier: o },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    c = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
            n = { include_soft_deleted: t.includeSoftDeleted, country_code: t.countryCode };
        try {
            return (
                await i.Bo.get({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e), query: n, rejectWithError: !1 })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    d = async (e) => (await i.Bo.get({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), rejectWithError: !1 })).body,
    _ = async (e, t) => {
        try {
            return (await i.Bo.patch({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), body: t, rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    h = async (e) => {
        try {
            return (
                await i.Bo.get({
                    url: s.Rsh.PRICE_TIERS,
                    query: { price_tier_type: a.L_.GUILD_ROLE_SUBSCRIPTIONS, guild_id: e },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    f = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            return (
                await i.Bo.get({
                    url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                    query: {
                        include_draft_listings: n.includeDraftListings,
                        include_archived_listings: n.includeArchivedListings,
                    },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    p = async (e) => {
        try {
            return (await i.Bo.get({ url: s.Rsh.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e), rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    E = async (e, t, n) => {
        try {
            await i.Bo.del({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n), rejectWithError: !1 });
        } catch (e) {
            throw new r.LG(e);
        }
    },
    m = async (e, t, n) => {
        try {
            return (
                await i.Bo.post({
                    url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n),
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    g = async (e) => {
        try {
            return (await i.Bo.get({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIALS(e), rejectWithError: !1 })).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    A = async (e, t, n) => {
        try {
            return (
                await i.Bo.patch({
                    url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                    body: n,
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    I = async (e, t, n) => {
        try {
            return (
                await i.Bo.get({ url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n), rejectWithError: !1 })
            ).body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    T = async function (e) {
        let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (await i.Bo.get({ url: s.Rsh.CREATOR_MONETIZATION_RESTRICTIONS(e), signal: t, rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new r.LG(e);
        }
    },
    S = async (e) => {
        try {
            let t = await i.Bo.get({ url: s.Rsh.GUILD_DISCOVERY_SLUG(e), rejectWithError: !1 });
            return t.body ?? JSON.parse(t.text);
        } catch (e) {
            throw new r.LG(e);
        }
    };
