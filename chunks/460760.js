n.d(t, {
    GX: () => u,
    MA: () => _,
    Mu: () => o,
    Oh: () => A,
    Ok: () => h,
    Tz: () => f,
    ZH: () => m,
    ax: () => c,
    mo: () => d,
    nA: () => E,
    r8: () => g,
    uh: () => p,
    xN: () => x,
});
var i = n(562465),
    l = n(73153),
    s = n(773669),
    r = n(997590),
    a = n(652215);
async function o() {
    let e = s.default.locale;
    if (e === r.A.getFetchedLocale()) return;
    let t = await i.Bo.get({
        url: a.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: { locale: e, primary_only: !1 },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    l.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: t.body, locale: e });
}
async function d(e) {
    try {
        let {
                primary_category_id: t,
                category_ids: n,
                keywords: s,
                emoji_discoverability_enabled: r,
                partner_actioned_timestamp: o,
                partner_application_timestamp: d,
                is_published: c,
                reasons_to_join: u,
                social_links: m,
                about: g,
            } = (await i.Bo.get({ url: a.Rsh.GUILD_DISCOVERY_METADATA(e), oldFormErrors: !0, rejectWithError: !0 }))
                .body,
            h = {
                primaryCategoryId: t,
                secondaryCategoryIds: n,
                keywords: s,
                emojiDiscoverabilityEnabled: r,
                partnerActionedTimestamp: o,
                partnerApplicationTimestamp: d,
                isPublished: c,
                reasonsToJoin: u,
                socialLinks: m,
                about: g,
            };
        return l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: e, metadata: h }), h;
    } catch (e) {
        l.h.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
    }
}
async function c(e) {
    try {
        let t = (await i.Bo.get({ url: a.Rsh.GUILD_DISCOVERY_SLUG(e), rejectWithError: !0 })).body.slug;
        l.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: t });
    } catch {
        l.h.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: e });
    }
}
function u(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, primaryCategoryId: t });
}
function m(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, keywords: t });
}
function g(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, emojiDiscoverabilityEnabled: t });
}
function h(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, isPublished: t });
}
function x(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, about: t });
}
function _(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, reasonsToJoin: t });
}
function p(e, t) {
    l.h.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId: e, socialLinks: t });
}
async function A(e) {
    let {
        guildId: t,
        primaryCategoryId: n,
        keywords: s,
        emojiDiscoverabilityEnabled: r,
        partnerActionedTimestamp: o,
        partnerApplicationTimestamp: d,
        isPublished: c,
        reasonsToJoin: u,
        socialLinks: m,
        about: g,
    } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: h,
            keywords: x,
            emoji_discoverability_enabled: _,
            partner_actioned_timestamp: p,
            partner_application_timestamp: A,
            is_published: E,
            reasons_to_join: f,
            social_links: j,
            about: N,
        } = (
            await i.Bo.patch({
                url: a.Rsh.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: n,
                    emoji_discoverability_enabled: r,
                    partner_actioned_timestamp: o,
                    partner_application_timestamp: d,
                    keywords: s,
                    is_published: c,
                    reasons_to_join: u,
                    social_links: m,
                    about: g,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        l.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: h,
                keywords: x,
                emojiDiscoverabilityEnabled: _,
                partnerActionedTimestamp: p,
                partnerApplicationTimestamp: A,
                isPublished: E,
                reasonsToJoin: f,
                socialLinks: j,
                about: N,
            },
        });
    } catch (e) {
        throw (l.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: t, errors: e.body }), e);
    }
}
function E(e, t) {
    i.Bo.put({ url: a.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t), oldFormErrors: !0, rejectWithError: !1 })
        .then(() => {
            l.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: e, categoryId: t });
        })
        .catch((t) => {
            l.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: e, errors: t.body });
        });
}
function f(e, t) {
    i.Bo.del({ url: a.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t), oldFormErrors: !0, rejectWithError: !1 })
        .then(() => {
            l.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: e, categoryId: t });
        })
        .catch((t) => {
            l.h.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: e, errors: t.body });
        });
}
