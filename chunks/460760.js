r.d(_, {
    GX: () => p,
    MA: () => T,
    Mu: () => E,
    Oh: () => y,
    Ok: () => h,
    Tz: () => R,
    ZH: () => n,
    ax: () => D,
    mo: () => c,
    nA: () => l,
    r8: () => A,
    uh: () => I,
    xN: () => d,
});
var i = r(636537),
    e = r(228366),
    a = r(773669),
    o = r(997590),
    s = r(652215);
async function E() {
    let t = a.default.locale;
    if (t === o.A.getFetchedLocale()) return;
    let _ = await i.Bo.get({
        url: s.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: { locale: t, primary_only: !1 },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    e.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: _.body, locale: t });
}
async function c(t) {
    try {
        let {
                primary_category_id: _,
                category_ids: r,
                keywords: a,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: E,
                partner_application_timestamp: c,
                is_published: D,
                reasons_to_join: p,
                social_links: n,
                about: A,
            } = (await i.Bo.get({ url: s.Rsh.GUILD_DISCOVERY_METADATA(t), oldFormErrors: !0, rejectWithError: !0 }))
                .body,
            h = {
                primaryCategoryId: _,
                secondaryCategoryIds: r,
                keywords: a,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: E,
                partnerApplicationTimestamp: c,
                isPublished: D,
                reasonsToJoin: p,
                socialLinks: n,
                about: A,
            };
        return e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: t, metadata: h }), h;
    } catch (t) {
        e.h.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
    }
}
async function D(t) {
    try {
        let _ = (await i.Bo.get({ url: s.Rsh.GUILD_DISCOVERY_SLUG(t), rejectWithError: !0 })).body.slug;
        e.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: _ });
    } catch {
        e.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: t });
    }
}
function p(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, primaryCategoryId: _ });
}
function n(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, keywords: _ });
}
function A(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, emojiDiscoverabilityEnabled: _ });
}
function h(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, isPublished: _ });
}
function d(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, about: _ });
}
function T(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, reasonsToJoin: _ });
}
function I(t, _) {
    e.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, socialLinks: _ });
}
async function y(t) {
    let {
        guildId: _,
        primaryCategoryId: r,
        keywords: a,
        emojiDiscoverabilityEnabled: o,
        partnerActionedTimestamp: E,
        partnerApplicationTimestamp: c,
        isPublished: D,
        reasonsToJoin: p,
        socialLinks: n,
        about: A,
    } = t;
    try {
        let {
            primary_category_id: t,
            category_ids: h,
            keywords: d,
            emoji_discoverability_enabled: T,
            partner_actioned_timestamp: I,
            partner_application_timestamp: y,
            is_published: l,
            reasons_to_join: R,
            social_links: C,
            about: U,
        } = (
            await i.Bo.patch({
                url: s.Rsh.GUILD_DISCOVERY_METADATA(_),
                body: {
                    primary_category_id: r,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: E,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: D,
                    reasons_to_join: p,
                    social_links: n,
                    about: A,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        e.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: _,
            metadata: {
                primaryCategoryId: t,
                secondaryCategoryIds: h,
                keywords: d,
                emojiDiscoverabilityEnabled: T,
                partnerActionedTimestamp: I,
                partnerApplicationTimestamp: y,
                isPublished: l,
                reasonsToJoin: R,
                socialLinks: C,
                about: U,
            },
        });
    } catch (t) {
        throw (e.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: _, errors: t.body }), t);
    }
}
function l(t, _) {
    i.Bo.put({ url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(t, _), oldFormErrors: !0, rejectWithError: !1 })
        .then(() => {
            e.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: t, categoryId: _ });
        })
        .catch((_) => {
            e.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: _.body });
        });
}
function R(t, _) {
    i.Bo.del({ url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(t, _), oldFormErrors: !0, rejectWithError: !1 })
        .then(() => {
            e.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: t, categoryId: _ });
        })
        .catch((_) => {
            e.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: _.body });
        });
}
