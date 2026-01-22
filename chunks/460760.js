r.d(t, {
    GX: () => u,
    MA: () => O,
    Mu: () => l,
    Oh: () => A,
    Ok: () => E,
    Tz: () => y,
    ZH: () => _,
    ax: () => d,
    mo: () => c,
    nA: () => T,
    r8: () => p,
    uh: () => I,
    xN: () => h,
});
var i = r(562465),
    n = r(73153),
    a = r(773669),
    o = r(997590),
    s = r(652215);
async function l() {
    let e = a.default.locale;
    if (e === o.A.getFetchedLocale()) return;
    let t = await i.Bo.get({
        url: s.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    n.h.dispatch({
        type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
        categories: t.body,
        locale: e,
    });
}
async function c(e) {
    try {
        let {
                primary_category_id: t,
                category_ids: r,
                keywords: a,
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: l,
                partner_application_timestamp: c,
                is_published: d,
                reasons_to_join: u,
                social_links: _,
                about: p,
            } = (
                await i.Bo.get({
                    url: s.Rsh.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
            ).body,
            E = {
                primaryCategoryId: t,
                secondaryCategoryIds: r,
                keywords: a,
                emojiDiscoverabilityEnabled: o,
                partnerActionedTimestamp: l,
                partnerApplicationTimestamp: c,
                isPublished: d,
                reasonsToJoin: u,
                socialLinks: _,
                about: p,
            };
        return (
            n.h.dispatch({
                type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
                guildId: e,
                metadata: E,
            }),
            E
        );
    } catch (e) {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL",
        });
    }
}
async function d(e) {
    try {
        let t = (
            await i.Bo.get({
                url: s.Rsh.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !0,
            })
        ).body.slug;
        n.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
            slug: t,
        });
    } catch (t) {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
            guildId: e,
        });
    }
}

function u(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        primaryCategoryId: t,
    });
}

function _(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        keywords: t,
    });
}

function p(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        emojiDiscoverabilityEnabled: t,
    });
}

function E(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        isPublished: t,
    });
}

function h(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        about: t,
    });
}

function O(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        reasonsToJoin: t,
    });
}

function I(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        socialLinks: t,
    });
}
async function A(e) {
    let {
        guildId: t,
        primaryCategoryId: r,
        keywords: a,
        emojiDiscoverabilityEnabled: o,
        partnerActionedTimestamp: l,
        partnerApplicationTimestamp: c,
        isPublished: d,
        reasonsToJoin: u,
        socialLinks: _,
        about: p,
    } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: E,
            keywords: h,
            emoji_discoverability_enabled: O,
            partner_actioned_timestamp: I,
            partner_application_timestamp: A,
            is_published: T,
            reasons_to_join: y,
            social_links: S,
            about: D,
        } = (
            await i.Bo.patch({
                url: s.Rsh.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: r,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: l,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: d,
                    reasons_to_join: u,
                    social_links: _,
                    about: p,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
        n.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: E,
                keywords: h,
                emojiDiscoverabilityEnabled: O,
                partnerActionedTimestamp: I,
                partnerApplicationTimestamp: A,
                isPublished: T,
                reasonsToJoin: y,
                socialLinks: S,
                about: D,
            },
        });
    } catch (e) {
        throw (
            (n.h.dispatch({
                type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
                guildId: t,
                errors: e.body,
            }),
            e)
        );
    }
}

function T(e, t) {
    i.Bo.put({
        url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1,
    })
        .then(() => {
            n.h.dispatch({
                type: "GUILD_DISCOVERY_CATEGORY_ADD",
                guildId: e,
                categoryId: t,
            });
        })
        .catch((t) => {
            n.h.dispatch({
                type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
                guildId: e,
                errors: t.body,
            });
        });
}

function y(e, t) {
    i.Bo.del({
        url: s.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1,
    })
        .then(() => {
            n.h.dispatch({
                type: "GUILD_DISCOVERY_CATEGORY_DELETE",
                guildId: e,
                categoryId: t,
            });
        })
        .catch((t) => {
            n.h.dispatch({
                type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
                guildId: e,
                errors: t.body,
            });
        });
}
