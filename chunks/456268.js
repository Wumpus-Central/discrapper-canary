i.d(t, {
    J9: () => E,
    K0: () => N,
    Kq: () => A,
    P$: () => m,
    TA: () => u,
    Vv: () => T,
    W1: () => p,
    aC: () => c,
    i3: () => d,
    le: () => o,
    mA: () => I,
    t$: () => h,
    zH: () => _
});
var r = i(544891),
    n = i(570140),
    a = i(706454),
    l = i(526429),
    s = i(981631);
async function o() {
    let e = a.default.locale;
    if (e === l.Z.getFetchedLocale()) return;
    let t = await r.tn.get({
        url: s.ANM.GUILD_DISCOVERY_CATEGORIES,
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
                category_ids: i,
                keywords: a,
                emoji_discoverability_enabled: l,
                partner_actioned_timestamp: o,
                partner_application_timestamp: c,
                is_published: d,
                reasons_to_join: u,
                social_links: _,
                about: E
            } = (
                await r.tn.get({
                    url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
            ).body,
            p = {
                primaryCategoryId: t,
                secondaryCategoryIds: i,
                keywords: a,
                emojiDiscoverabilityEnabled: l,
                partnerActionedTimestamp: o,
                partnerApplicationTimestamp: c,
                isPublished: d,
                reasonsToJoin: u,
                socialLinks: _,
                about: E
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
            await r.tn.get({
                url: s.ANM.GUILD_DISCOVERY_SLUG(e),
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
function u(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        primaryCategoryId: t
    });
}
function _(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        keywords: t
    });
}
function E(e, t) {
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
function m(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function h(e, t) {
    n.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function T(e) {
    let { guildId: t, primaryCategoryId: i, keywords: a, emojiDiscoverabilityEnabled: l, partnerActionedTimestamp: o, partnerApplicationTimestamp: c, isPublished: d, reasonsToJoin: u, socialLinks: _, about: E } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: p,
            keywords: I,
            emoji_discoverability_enabled: m,
            partner_actioned_timestamp: h,
            partner_application_timestamp: T,
            is_published: A,
            reasons_to_join: N,
            social_links: S,
            about: C
        } = (
            await r.tn.patch({
                url: s.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: i,
                    emoji_discoverability_enabled: l,
                    partner_actioned_timestamp: o,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: d,
                    reasons_to_join: u,
                    social_links: _,
                    about: E
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
                emojiDiscoverabilityEnabled: m,
                partnerActionedTimestamp: h,
                partnerApplicationTimestamp: T,
                isPublished: A,
                reasonsToJoin: N,
                socialLinks: S,
                about: C
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
function A(e, t) {
    r.tn
        .put({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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
function N(e, t) {
    r.tn
        .del({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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
