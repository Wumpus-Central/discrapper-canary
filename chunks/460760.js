(r.d(e, {
    GX: () => p,
    MA: () => l,
    Mu: () => n,
    Oh: () => I,
    Ok: () => d,
    Tz: () => C,
    ZH: () => D,
    ax: () => E,
    mo: () => c,
    nA: () => T,
    r8: () => h,
    uh: () => y,
    xN: () => A,
}),
    r(323874),
    r(14289),
    r(35956));
var i = r(636537),
    a = r(73153),
    _ = r(773669),
    o = r(997590),
    s = r(652215);
async function n() {
    let t = _.default.locale;
    if (t === o.A.getFetchedLocale()) return;
    let e = await i.Bo.get({
        url: s.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: { locale: t, primary_only: !1 },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    });
    a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: e.body, locale: t });
}
async function c(t) {
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
            } = (await i.Bo.get({ url: s.Rsh.GUILD_DISCOVERY_METADATA(t), oldFormErrors: !0, rejectWithError: !0 }))
                .body,
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
        return (a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: t, metadata: d }), d);
    } catch (t) {
        a.h.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
    }
}
async function E(t) {
    try {
        let e = await i.Bo.get({ url: s.Rsh.GUILD_WEB_PAGE(t), rejectWithError: !0 }),
            r = new URL(e.body.seo.canonical_url).pathname.slice(9);
        a.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: r });
    } catch {
        a.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: t });
    }
}
function p(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, primaryCategoryId: e });
}
function D(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, keywords: e });
}
function h(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, emojiDiscoverabilityEnabled: e });
}
function d(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, isPublished: e });
}
function A(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, about: e });
}
function l(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, reasonsToJoin: e });
}
function y(t, e) {
    a.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: t, socialLinks: e });
}
async function I(t) {
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
            partner_application_timestamp: I,
            is_published: T,
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
                partnerApplicationTimestamp: I,
                isPublished: T,
                reasonsToJoin: C,
                socialLinks: u,
                about: R,
            },
        });
    } catch (t) {
        throw (a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: e, errors: t.body }), t);
    }
}
function T(t, e) {
    i.Bo.put({ url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(t, e), oldFormErrors: !0, rejectWithError: (0, i.fT)() })
        .then(() => {
            a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: t, categoryId: e });
        })
        .catch((e) => {
            a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: e.body });
        });
}
function C(t, e) {
    i.Bo.del({ url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(t, e), oldFormErrors: !0, rejectWithError: (0, i.fT)() })
        .then(() => {
            a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: t, categoryId: e });
        })
        .catch((e) => {
            a.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: e.body });
        });
}
