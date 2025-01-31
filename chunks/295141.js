n.d(t, {
    HT: () => b,
    K5: () => p,
    LB: () => y,
    MI: () => v,
    V_: () => g,
    X: () => _,
    X2: () => d,
    aG: () => l,
    bg: () => o,
    ci: () => f,
    eI: () => E,
    es: () => m,
    iW: () => h,
    j8: () => I,
    nU: () => u,
    rD: () => c
});
var i = n(544891),
    r = n(881052),
    a = n(981631),
    s = n(231338);
let o = async (e, t) => {
        try {
            return (
                await i.tn.post({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    body: t,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    l = async (e, t, n) => {
        let { priceTier: s, ...o } = n;
        try {
            return (
                await i.tn.post({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                    body: {
                        ...o,
                        price_tier: s
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    u = async (e, t, n, s) => {
        let { priceTier: o, ...l } = s;
        try {
            return (
                await i.tn.patch({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                    body: {
                        ...l,
                        price_tier: o
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    c = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
            n = {
                include_soft_deleted: t.includeSoftDeleted,
                country_code: t.countryCode
            };
        try {
            return (
                await i.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                    query: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    d = async (e) =>
        (
            await i.tn.get({
                url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                rejectWithError: !1
            })
        ).body,
    f = async (e, t) => {
        try {
            return (
                await i.tn.patch({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                    body: t,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    _ = async (e) => {
        try {
            return (
                await i.tn.get({
                    url: a.ANM.PRICE_TIERS,
                    query: {
                        price_tier_type: s.RG.GUILD_ROLE_SUBSCRIPTIONS,
                        guild_id: e
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    p = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
            return (
                await i.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                    query: {
                        include_draft_listings: n.includeDraftListings,
                        include_archived_listings: n.includeArchivedListings
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    h = async (e) => {
        try {
            return (
                await i.tn.get({
                    url: a.ANM.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    m = async (e, t, n) => {
        try {
            await i.tn.del({
                url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                rejectWithError: !1
            });
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    g = async (e, t, n) => {
        try {
            return (
                await i.tn.post({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    E = async (e) => {
        try {
            return (
                await i.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIALS(e),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    v = async (e, t, n) => {
        try {
            return (
                await i.tn.patch({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                    body: n,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    y = async (e, t, n) => {
        try {
            return (
                await i.tn.get({
                    url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    I = async function (e) {
        let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            return (
                await i.tn.get({
                    url: a.ANM.CREATOR_MONETIZATION_RESTRICTIONS(e),
                    signal: t,
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    b = async (e) => {
        try {
            var t;
            let n = await i.tn.get({
                url: a.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !1
            });
            return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text);
        } catch (e) {
            throw new r.Hx(e);
        }
    };
