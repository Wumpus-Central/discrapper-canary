(r(323874), r(14289), r(35956));
var i = r(620632),
    a = r(73153),
    _ = r(773669),
    o = r(997590),
    s = r(652215);
r.d(
    e,
    {},
    {
        GX: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, primaryCategoryId: e });
        },
        MA: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, reasonsToJoin: e });
        },
        Mu: async function () {
            let t = _.default.locale;
            if (t === o.A.getFetchedLocale()) return;
            let e = await i.Bo.get({
                url: s.Rsh.GUILD_DISCOVERY_CATEGORIES,
                query: { locale: t, primary_only: !1 },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            });
            a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: e.body, locale: t });
        },
        Oh: async function (t) {
            let {
                guildId: e,
                primaryCategoryId: r,
                keywords: _,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: n,
                partnerApplicationTimestamp: c,
                isPublished: E,
                reasonsToJoin: p,
                socialLinks: D,
                about: h,
            } = t;
            try {
                let {
                    primary_category_id: t,
                    category_ids: d,
                    keywords: A,
                    emoji_discoverability_enabled: l,
                    partner_actioned_timestamp: y,
                    partner_application_timestamp: T,
                    is_published: I,
                    reasons_to_join: C,
                    social_links: u,
                    about: R,
                } = (
                    await i.Bo.patch({
                        url: s.Rsh.GUILD_DISCOVERY_METADATA(e),
                        body: {
                            primary_category_id: r,
                            emoji_discoverability_enabled: o,
                            partner_actioned_timestamp: n,
                            partner_application_timestamp: c,
                            keywords: _,
                            is_published: E,
                            reasons_to_join: p,
                            social_links: D,
                            about: h,
                        },
                        oldFormErrors: !0,
                        rejectWithError: (0, i.fT)(),
                    })
                ).body;
                a.h.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
                    guildId: e,
                    metadata: {
                        primaryCategoryId: t,
                        secondaryCategoryIds: d,
                        keywords: A,
                        emojiDiscoverabilityEnabled: l,
                        partnerActionedTimestamp: y,
                        partnerApplicationTimestamp: T,
                        isPublished: I,
                        reasonsToJoin: C,
                        socialLinks: u,
                        about: R,
                    },
                });
            } catch (t) {
                throw (a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: e, errors: t.body }), t);
            }
        },
        Ok: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, isPublished: e });
        },
        Tz: function (t, e) {
            i.Bo.del({
                url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(t, e),
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            })
                .then(() => {
                    a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: t, categoryId: e });
                })
                .catch((e) => {
                    a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: e.body });
                });
        },
        ZH: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, keywords: e });
        },
        ax: async function (t) {
            try {
                let e = await i.Bo.get({ url: s.Rsh.GUILD_WEB_PAGE(t), rejectWithError: !0 }),
                    r = new URL(e.body.seo.canonical_url).pathname.slice(9);
                a.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: r });
            } catch {
                a.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: t });
            }
        },
        mo: async function (t) {
            try {
                let {
                        primary_category_id: e,
                        category_ids: r,
                        keywords: _,
                        emoji_discoverability_enabled: o,
                        partner_actioned_timestamp: n,
                        partner_application_timestamp: c,
                        is_published: E,
                        reasons_to_join: p,
                        social_links: D,
                        about: h,
                    } = (
                        await i.Bo.get({
                            url: s.Rsh.GUILD_DISCOVERY_METADATA(t),
                            oldFormErrors: !0,
                            rejectWithError: !0,
                        })
                    ).body,
                    d = {
                        primaryCategoryId: e,
                        secondaryCategoryIds: r,
                        keywords: _,
                        emojiDiscoverabilityEnabled: o,
                        partnerActionedTimestamp: n,
                        partnerApplicationTimestamp: c,
                        isPublished: E,
                        reasonsToJoin: p,
                        socialLinks: D,
                        about: h,
                    };
                return (
                    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: t, metadata: d }), d
                );
            } catch (t) {
                a.h.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
            }
        },
        nA: function (t, e) {
            i.Bo.put({
                url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(t, e),
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            })
                .then(() => {
                    a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: t, categoryId: e });
                })
                .catch((e) => {
                    a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: e.body });
                });
        },
        r8: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, emojiDiscoverabilityEnabled: e });
        },
        uh: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, socialLinks: e });
        },
        xN: function (t, e) {
            a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, about: e });
        },
    },
);
