(r(323874), r(14289), r(35956));
var i = r(620632),
    a = r(73153),
    o = r(773669),
    _ = r(997590),
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
            let t = o.default.locale;
            if (t === _.A.getFetchedLocale()) return;
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
                keywords: o,
                emojiDiscoverabilityEnabled: _,
                partnerActionedTimestamp: c,
                partnerApplicationTimestamp: n,
                isPublished: E,
                reasonsToJoin: p,
                socialLinks: D,
                about: d,
            } = t;
            try {
                let {
                    primary_category_id: t,
                    category_ids: h,
                    keywords: A,
                    emoji_discoverability_enabled: l,
                    partner_actioned_timestamp: y,
                    partner_application_timestamp: T,
                    is_published: I,
                    automatic_pages: u,
                    reasons_to_join: C,
                    social_links: m,
                    about: R,
                } = (
                    await i.Bo.patch({
                        url: s.Rsh.GUILD_DISCOVERY_METADATA(e),
                        body: {
                            primary_category_id: r,
                            emoji_discoverability_enabled: _,
                            partner_actioned_timestamp: c,
                            partner_application_timestamp: n,
                            keywords: o,
                            ...(void 0 !== E ? { is_published: E } : {}),
                            reasons_to_join: p,
                            social_links: D,
                            about: d,
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
                        secondaryCategoryIds: h,
                        keywords: A,
                        emojiDiscoverabilityEnabled: l,
                        partnerActionedTimestamp: y,
                        partnerApplicationTimestamp: T,
                        isPublished: I,
                        automaticPages: u ?? !1,
                        reasonsToJoin: C,
                        socialLinks: m,
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
                        keywords: o,
                        emoji_discoverability_enabled: _,
                        partner_actioned_timestamp: c,
                        partner_application_timestamp: n,
                        is_published: E,
                        automatic_pages: p,
                        reasons_to_join: D,
                        social_links: d,
                        about: h,
                    } = (
                        await i.Bo.get({
                            url: s.Rsh.GUILD_DISCOVERY_METADATA(t),
                            oldFormErrors: !0,
                            rejectWithError: !0,
                        })
                    ).body,
                    A = {
                        primaryCategoryId: e,
                        secondaryCategoryIds: r,
                        keywords: o,
                        emojiDiscoverabilityEnabled: _,
                        partnerActionedTimestamp: c,
                        partnerApplicationTimestamp: n,
                        isPublished: E,
                        automaticPages: p ?? !1,
                        reasonsToJoin: D,
                        socialLinks: d,
                        about: h,
                    };
                return (
                    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: t, metadata: A }), A
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
