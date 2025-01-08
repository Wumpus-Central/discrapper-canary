r.d(t, {
    J9: function () {
        return E;
    },
    K0: function () {
        return S;
    },
    Kq: function () {
        return A;
    },
    P$: function () {
        return m;
    },
    TA: function () {
        return u;
    },
    Vv: function () {
        return T;
    },
    W1: function () {
        return p;
    },
    aC: function () {
        return c;
    },
    i3: function () {
        return d;
    },
    le: function () {
        return o;
    },
    mA: function () {
        return I;
    },
    t$: function () {
        return h;
    },
    zH: function () {
        return _;
    }
});
var n = r(544891),
    i = r(570140),
    a = r(706454),
    l = r(526429),
    s = r(981631);
async function o() {
    let e = a.default.locale;
    if (e === l.Z.getFetchedLocale()) return;
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
                emoji_discoverability_enabled: l,
                partner_actioned_timestamp: o,
                partner_application_timestamp: c,
                is_published: d,
                reasons_to_join: u,
                social_links: _,
                about: E
            } = (
                await n.tn.get({
                    url: s.ANM.GUILD_DISCOVERY_METADATA(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
            ).body,
            p = {
                primaryCategoryId: t,
                secondaryCategoryIds: r,
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
            i.Z.dispatch({
                type: 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER',
                guildId: e,
                metadata: p
            }),
            p
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
    } catch {
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
function E(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        emojiDiscoverabilityEnabled: t
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        isPublished: t
    });
}
function I(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        about: t
    });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        reasonsToJoin: t
    });
}
function h(e, t) {
    i.Z.dispatch({
        type: 'GUILD_UPDATE_DISCOVERY_METADATA',
        guildId: e,
        socialLinks: t
    });
}
async function T(e) {
    let { guildId: t, primaryCategoryId: r, keywords: a, emojiDiscoverabilityEnabled: l, partnerActionedTimestamp: o, partnerApplicationTimestamp: c, isPublished: d, reasonsToJoin: u, socialLinks: _, about: E } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: p,
            keywords: I,
            emoji_discoverability_enabled: m,
            partner_actioned_timestamp: h,
            partner_application_timestamp: T,
            is_published: A,
            reasons_to_join: S,
            social_links: N,
            about: C
        } = (
            await n.tn.patch({
                url: s.ANM.GUILD_DISCOVERY_METADATA(t),
                body: {
                    primary_category_id: r,
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
        i.Z.dispatch({
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
                reasonsToJoin: S,
                socialLinks: N,
                about: C
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
function A(e, t) {
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
function S(e, t) {
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
