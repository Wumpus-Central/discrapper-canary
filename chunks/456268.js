r.d(t, {
    J9: () => u,
    K0: () => C,
    Kq: () => h,
    P$: () => A,
    TA: () => _,
    Vv: () => D,
    W1: () => p,
    aC: () => c,
    i3: () => d,
    le: () => o,
    mA: () => I,
    t$: () => T,
    zH: () => E
});
var i = r(544891),
    n = r(570140),
    a = r(706454),
    s = r(526429),
    l = r(981631);
async function o() {
    let e = a.default.locale;
    if (e === s.Z.getFetchedLocale()) return;
    let t = await i.tn.get({
        url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    n.Z.dispatch({
        type: 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS',
        categories: t.body,
        locale: e
    });
}
async function c(e) {
    try {
        let {
                primary_category_id: t,
                category_ids: r,
                keywords: a,
                emoji_discoverability_enabled: s,
                partner_actioned_timestamp: o,
                partner_application_timestamp: c,
                is_published: d,
                reasons_to_join: _,
                social_links: E,
                about: u
            } = (
                await i.tn.get({
                    url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
            ).body,
            p = {
                primaryCategoryId: t,
                secondaryCategoryIds: r,
                keywords: a,
                emojiDiscoverabilityEnabled: s,
                partnerActionedTimestamp: o,
                partnerApplicationTimestamp: c,
                isPublished: d,
                reasonsToJoin: _,
                socialLinks: E,
                about: u
            };
        return (
            n.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: p
            }),
            p
        );
    } catch (e) {
        n.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function d(e) {
    try {
        let t = (
            await i.tn.get({
                url: l.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !0
            })
        ).body.slug;
        n.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS',
            slug: t
        });
    } catch {
        n.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_FAIL',
            guildId: e
        });
    }
}
function _(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        primaryCategoryId: t
    });
}
function E(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        keywords: t
    });
}
function u(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: t
    });
}
function p(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: t
    });
}
function I(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: t
    });
}
function A(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function T(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function D(e) {
    let { guildId: t, primaryCategoryId: r, keywords: a, emojiDiscoverabilityEnabled: s, partnerActionedTimestamp: o, partnerApplicationTimestamp: c, isPublished: d, reasonsToJoin: _, socialLinks: E, about: u } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: p,
            keywords: I,
            emoji_discoverability_enabled: A,
            partner_actioned_timestamp: T,
            partner_application_timestamp: D,
            is_published: h,
            reasons_to_join: C,
            social_links: S,
            about: O
        } = (
            await i.tn.patch({
                url: l.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: r,
                    emoji_discoverability_enabled: s,
                    partner_actioned_timestamp: o,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: d,
                    reasons_to_join: _,
                    social_links: E,
                    about: u
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        n.Z.dispatch({
            type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: p,
                keywords: I,
                emojiDiscoverabilityEnabled: A,
                partnerActionedTimestamp: T,
                partnerApplicationTimestamp: D,
                isPublished: h,
                reasonsToJoin: C,
                socialLinks: S,
                about: O
            }
        });
    } catch (e) {
        throw (
            (n.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: t,
                errors: e.body
            }),
            e)
        );
    }
}
function h(e, t) {
    i.tn
        .put({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(() => {
            n.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_ADD',
                guildId: e,
                categoryId: t
            });
        })
        .catch((t) => {
            n.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: t.body
            });
        });
}
function C(e, t) {
    i.tn
        .del({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(() => {
            n.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_DELETE',
                guildId: e,
                categoryId: t
            });
        })
        .catch((t) => {
            n.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: t.body
            });
        });
}
