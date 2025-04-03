r.d(t, {
    J9: () => p,
    K0: () => D,
    Kq: () => y,
    P$: () => I,
    TA: () => u,
    Vv: () => T,
    W1: () => E,
    aC: () => c,
    i3: () => d,
    le: () => l,
    mA: () => O,
    t$: () => A,
    zH: () => _
});
var n = r(544891),
    i = r(570140),
    a = r(706454),
    o = r(526429),
    s = r(981631);
async function l() {
    let e = a.default.locale;
    if (e === o.Z.getFetchedLocale()) return;
    let t = await n.tn.get({
        url: s.ANM.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    i.Z.dispatch({
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
                emoji_discoverability_enabled: o,
                partner_actioned_timestamp: l,
                partner_application_timestamp: c,
                is_published: d,
                reasons_to_join: u,
                social_links: _,
                about: p
            } = (
                await n.tn.get({
                    url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
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
                about: p
            };
        return (
            i.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: E
            }),
            E
        );
    } catch (e) {
        i.Z.dispatch({ type: 'GUILD_DISCOVERY_METADATA_FETCH_FAIL' });
    }
}
async function d(e) {
    try {
        let t = (
            await n.tn.get({
                url: s.ANM.GUILD_DISCOVERY_SLUG(e),
                rejectWithError: !0
            })
        ).body.slug;
        i.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS',
            slug: t
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'GUILD_DISCOVERY_SLUG_FETCH_FAIL',
            guildId: e
        });
    }
}
function u(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        primaryCategoryId: t
    });
}
function _(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        keywords: t
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: t
    });
}
function E(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: t
    });
}
function O(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: t
    });
}
function I(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function A(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function T(e) {
    let { guildId: t, primaryCategoryId: r, keywords: a, emojiDiscoverabilityEnabled: o, partnerActionedTimestamp: l, partnerApplicationTimestamp: c, isPublished: d, reasonsToJoin: u, socialLinks: _, about: p } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: E,
            keywords: O,
            emoji_discoverability_enabled: I,
            partner_actioned_timestamp: A,
            partner_application_timestamp: T,
            is_published: y,
            reasons_to_join: D,
            social_links: h,
            about: S
        } = (
            await n.tn.patch({
                url: s.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: r,
                    emoji_discoverability_enabled: o,
                    partner_actioned_timestamp: l,
                    partner_application_timestamp: c,
                    keywords: a,
                    is_published: d,
                    reasons_to_join: u,
                    social_links: _,
                    about: p
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
        i.Z.dispatch({
            type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: E,
                keywords: O,
                emojiDiscoverabilityEnabled: I,
                partnerActionedTimestamp: A,
                partnerApplicationTimestamp: T,
                isPublished: y,
                reasonsToJoin: D,
                socialLinks: h,
                about: S
            }
        });
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: t,
                errors: e.body
            }),
            e)
        );
    }
}
function y(e, t) {
    n.tn
        .put({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(() => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_ADD',
                guildId: e,
                categoryId: t
            });
        })
        .catch((t) => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: t.body
            });
        });
}
function D(e, t) {
    n.tn
        .del({
            url: s.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(() => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_DELETE',
                guildId: e,
                categoryId: t
            });
        })
        .catch((t) => {
            i.Z.dispatch({
                type: 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL',
                guildId: e,
                errors: t.body
            });
        });
}
