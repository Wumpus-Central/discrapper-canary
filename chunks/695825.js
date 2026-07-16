"use strict";
n.d(t, {
    AE: () => p,
    D7: () => T,
    DQ: () => o,
    KD: () => m,
    Nb: () => h,
    PC: () => f,
    WV: () => A,
    XT: () => E,
    aC: () => l,
    b3: () => u,
    iG: () => g,
    qt: () => d,
    ux: () => _,
    wJ: () => I,
    z9: () => c,
    zW: () => S,
});
var i = n(636537),
    r = n(913122),
    a = n(652215),
    s = n(818348);
async function l(e, t) {
    try {
        return (
            await i.Bo.post({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                body: t,
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function o(e, t, n) {
    let { priceTier: s, ...l } = n;
    try {
        return (
            await i.Bo.post({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                body: { ...l, price_tier: s },
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function d(e, t, n, s) {
    let { priceTier: l, ...o } = s;
    try {
        return (
            await i.Bo.patch({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                body: { ...o, price_tier: l },
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
        n = { include_soft_deleted: t.includeSoftDeleted, country_code: t.countryCode };
    try {
        return (
            await i.Bo.get({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                query: n,
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function u(e) {
    return (await i.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), rejectWithError: (0, i.fT)() })).body;
}
async function _(e, t) {
    try {
        return (
            await i.Bo.patch({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), body: t, rejectWithError: (0, i.fT)() })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function E(e) {
    try {
        return (
            await i.Bo.get({
                url: a.Rsh.PRICE_TIERS,
                query: { price_tier_type: s.L_.GUILD_ROLE_SUBSCRIPTIONS, guild_id: e },
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    try {
        return (
            await i.Bo.get({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                query: {
                    include_draft_listings: n.includeDraftListings,
                    include_archived_listings: n.includeArchivedListings,
                },
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function h(e) {
    try {
        return (
            await i.Bo.get({ url: a.Rsh.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e), rejectWithError: (0, i.fT)() })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function I(e, t, n) {
    try {
        await i.Bo.del({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n), rejectWithError: (0, i.fT)() });
    } catch (e) {
        throw new r.LG(e);
    }
}
async function f(e, t, n) {
    try {
        return (
            await i.Bo.post({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n),
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function p(e) {
    try {
        return (await i.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIALS(e), rejectWithError: (0, i.fT)() })).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function T(e, t, n) {
    try {
        return (
            await i.Bo.patch({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                body: n,
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function m(e, t, n) {
    try {
        return (
            await i.Bo.get({
                url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n),
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function g(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (
            await i.Bo.get({ url: a.Rsh.CREATOR_MONETIZATION_RESTRICTIONS(e), signal: t, rejectWithError: (0, i.fT)() })
        ).body;
    } catch (e) {
        throw new r.LG(e);
    }
}
async function S(e) {
    try {
        let t = await i.Bo.get({ url: a.Rsh.GUILD_DISCOVERY_SLUG(e), rejectWithError: (0, i.fT)() });
        return t.body ?? JSON.parse(t.text);
    } catch (e) {
        throw new r.LG(e);
    }
}
