var i = n(620632),
    r = n(627784),
    a = n(652215),
    s = n(818348);
n.d(
    t,
    {},
    {
        AE: async function (e) {
            try {
                return (await i.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_TRIALS(e), rejectWithError: (0, i.fT)() }))
                    .body;
            } catch (e) {
                throw new r.LG(e);
            }
        },
        D7: async function (e, t, n) {
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
        },
        DQ: async function (e, t, n) {
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
        },
        KD: async function (e, t, n) {
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
        },
        Nb: async function (e) {
            try {
                return (
                    await i.Bo.get({
                        url: a.Rsh.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e),
                        rejectWithError: (0, i.fT)(),
                    })
                ).body;
            } catch (e) {
                throw new r.LG(e);
            }
        },
        PC: async function (e, t, n) {
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
        },
        WV: async function (e, t) {
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
        },
        XT: async function (e) {
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
        },
        aC: async function (e, t) {
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
        },
        b3: async function (e) {
            return (await i.Bo.get({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e), rejectWithError: (0, i.fT)() }))
                .body;
        },
        iG: async function (e) {
            let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
                return (
                    await i.Bo.get({
                        url: a.Rsh.CREATOR_MONETIZATION_RESTRICTIONS(e),
                        signal: t,
                        rejectWithError: (0, i.fT)(),
                    })
                ).body;
            } catch (e) {
                throw new r.LG(e);
            }
        },
        qt: async function (e, t, n, s) {
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
        },
        ux: async function (e, t) {
            try {
                return (
                    await i.Bo.patch({
                        url: a.Rsh.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                        body: t,
                        rejectWithError: (0, i.fT)(),
                    })
                ).body;
            } catch (e) {
                throw new r.LG(e);
            }
        },
        wJ: async function (e, t, n) {
            try {
                await i.Bo.del({ url: a.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n), rejectWithError: (0, i.fT)() });
            } catch (e) {
                throw new r.LG(e);
            }
        },
        z9: async function (e) {
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
        },
        zW: async function (e) {
            try {
                let t = await i.Bo.get({ url: a.Rsh.GUILD_WEB_PAGE(e), rejectWithError: (0, i.fT)() });
                return (t.body ?? JSON.parse(t.text)).data;
            } catch (e) {
                throw new r.LG(e);
            }
        },
    },
);
