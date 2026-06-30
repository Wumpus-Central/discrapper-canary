"use strict";
n.d(t, {
    nR: () => L,
    Wn: () => C,
    vP: () => R,
    pT: () => D,
    un: () => b,
    wd: () => N,
    Tu: () => v,
    UI: () => S,
    am: () => O,
}),
    n(321073);
var i = n(95561),
    r = n(982240),
    s = n(427358),
    a = n(616356),
    o = n(546183),
    l = n(696451),
    u = n(290863),
    c = n(994500),
    d = n(287809),
    _ = n(174459),
    h = n(486020),
    f = n(841595);
let p = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var E = n(999291),
    m = n(518477),
    g = n(652215),
    A = n(818348);
function I(e) {
    let { user: t, userProfile: n, guildMember: i, guildMemberProfile: r } = e,
        s = n ?? r,
        a = [];
    if ((i?.nick && a.push(m.d6.NICKNAME), s?.pronouns && a.push(m.d6.PRONOUNS), t?.avatar)) {
        let e = (0, h.VI)(t?.avatar);
        a.push(e ? m.d6.ANIMATED_AVATAR : m.d6.AVATAR);
    }
    if (s?.banner) {
        let e = (0, h.VI)(s?.banner);
        a.push(e ? m.d6.ANIMATED_BANNER : m.d6.BANNER);
    }
    return (
        s?.bio && a.push(m.d6.BIO),
        s?.themeColors != null && void 0 !== s.themeColors.find((e) => null !== e) && a.push(m.d6.THEME),
        t?.avatarDecoration != null && a.push(m.d6.AVATAR_DECORATION),
        s?.profileEffect != null && a.push(m.d6.PROFILE_EFFECT),
        a
    );
}
function T(e) {
    var t;
    let n,
        i,
        { layout: r, userId: s, guildId: a, sessionId: o, sourceSessionId: c, showGuildProfile: _ = !0 } = e,
        h = d.default.getUser(s);
    if (null == h) return {};
    let f = (0, E.AP)(h?.id, _ ? a : void 0),
        p = _ && null != a ? l.Ay.getMember(a, h?.id) : null;
    return {
        profile_layout: r,
        profile_session_id: o,
        source_profile_session_id: c,
        profile_properties: I({ user: h, userProfile: f?._userProfile }),
        guild_profile_properties: I({ guildMember: p, guildMemberProfile: f?._guildMemberProfile }),
        profile_activity_types: u.A.getActivities(h.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            f
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: h.avatarDecoration?.skuId,
        profile_effect_sku_id: f?.profileEffect?.skuId,
        profile_frame_sku_id: f?.profileFrame?.skuId,
        user_status:
            ((t = h.id),
            (n = u.A.getStatus(t)),
            (i = u.A.isMobileOnline(t)),
            n === A.cl.ONLINE && i ? `${n}-mobile` : n === A.cl.ONLINE ? `${n}-desktop` : n),
        is_guild_profile: f?.guildId != null,
        is_bot_profile: h.bot,
        is_private_to_viewer: f?.private ?? !1,
    };
}
function S(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let n = s.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: c.A.getRelationshipType(t),
        related_since: c.A.getSince(t),
        num_mutual_friends: f.A.getMutualFriendsCount(t),
        num_mutual_guilds: f.A.getMutualGuilds(t)?.length,
        communication_probability: n?.communicationProbability,
        communication_rank: n?.communicationRank,
    };
}
function y(e) {
    return {
        application_id: e,
        application_linked:
            null != e && o.default.getFetchStateForApplication(e) === o.FetchState.FETCHED
                ? null != o.default.getNewestTokenForApplication(e)
                : null,
    };
}
function C(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: r,
        roleId: s,
        widgetType: a,
        analyticsLocations: o,
        action: l,
        section: u,
        applicationId: c,
    } = e;
    _.default.track(g.HAw.USER_PROFILE_ACTION, {
        ...(0, i.H$)(t),
        ...(0, i.Ou)(n),
        ...T(e),
        ...S(e),
        ...y(c),
        location_stack: o,
        profile_action: l,
        profile_section: u,
        source_message_id: r,
        source_role_id: s,
        widget_type: a,
    });
}
function N(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: t } = p.getConfig({ location: e });
            return t;
        })("UserProfileAnalyticsUtils")
    )
        return;
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: r,
        profileUi: s,
        viewStartedAt: a,
        fetchStartedAt: o,
        timeToInteractiveMs: l,
        timeToLoadMs: u,
        timeToFetchMs: c,
    } = e;
    (l ?? 0) <= 0 ||
        (u ?? 0) <= 0 ||
        (c ?? 0) <= 0 ||
        _.default.track(g.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...T(e),
            ...S(e),
            location_stack: r,
            profile_ui: s,
            view_started_at: a,
            fetch_started_at: o,
            time_to_interactive_ms: l,
            time_to_load_ms: u,
            time_to_fetch_ms: c,
        });
}
function v(e) {
    var t;
    let {
        guildId: n,
        channelId: r,
        analyticsLocations: s,
        action: a,
        display: o,
        activity: l,
        stream: u,
        entry: c,
        outbox: d,
        voiceChannelId: h,
    } = e;
    _.default.track(g.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, i.H$)(n),
        ...(0, i.Ou)(r),
        ...T(e),
        ...S(e),
        location_stack: s,
        activity_action: a,
        activity_display: o,
        activity_type:
            null == (t = null != u ? g.$pd.STREAMING : l?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(g.$pd)[Object.values(g.$pd).indexOf(t)],
        activity_name: l?.name,
        activity_platform: l?.platform,
        activity_session_id: l?.session_id,
        activity_application_id: l?.application_id,
        item_id: c?.id,
        author_id_v2: c?.author_id,
        item_ids: d?.entries.map((e) => {
            let { id: t } = e;
            return t;
        }),
        author_ids_v2: d?.entries.map((e) => {
            let { author_id: t } = e;
            return t;
        }),
        voice_channel_id: h,
    });
}
function R(e) {
    let { guildId: t, channelId: n, analyticsLocations: s, badgeId: a, badgeAction: o, position: l, userId: u } = e,
        c = null != a && null != u ? r.Ay.getBadgeById(a, u)?.current_tier : void 0;
    _.default.track(g.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, i.H$)(t),
        ...(0, i.Ou)(n),
        ...T(e),
        ...S(e),
        location_stack: s,
        badge_action: o,
        badge_id: a,
        badge_tier: c,
        position: l,
    });
}
function O(e) {
    let { displayProfile: t, isProfileOpen: n } = e,
        i = t?.userId,
        r =
            null != i
                ? u.A.findActivity(i, (e) => {
                      let { type: t } = e;
                      return null != a.A.getAnyStreamForUser(i) ? t === g.$pd.PLAYING : t !== g.$pd.CUSTOM_STATUS;
                  })
                : null;
    _.default.track(g.HAw.DM_PROFILE_TOGGLED, {
        ...T({ userId: i }),
        is_profile_open: n,
        has_images: !!(r?.assets?.large_image ?? r?.assets?.small_image),
        is_friend: c.A.isFriend(i),
        viewed_profile_user_id: i,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function b(e) {
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: r,
        action: s,
        widgetEdited: a,
        gameId: o,
        numResults: l,
        numCharacters: u,
        applicationId: c,
    } = e;
    C({ ...e, action: s }),
        _.default.track(g.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...T(e),
            ...y(c),
            location_stack: r,
            edit_action: s,
            widget_edited: a,
            game_id: o,
            num_results: l,
            num_characters: u,
            application_id: c,
        });
}
function D(e) {
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: r,
        widgetEdited: s,
        gameIds: a,
        tags: o,
        numCharactersCommentary: l,
        isWidgetRemoved: u,
    } = e;
    C({ ...e, action: "EDIT_SAVED" }),
        _.default.track(g.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...T(e),
            location_stack: r,
            widget_edited: s,
            game_ids: a,
            tags: o,
            num_characters_commentary: l,
            is_widget_removed: u,
        });
}
function L(e) {
    let { guildId: t, channelId: n, analyticsLocations: r, action: s, wishlistId: a, skuId: o, productLines: l } = e;
    C({ ...e, action: s }),
        _.default.track(g.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...T(e),
            location_stack: r,
            action_type: s,
            wishlist_id: a,
            sku_id: o,
            product_lines: null != l ? Array.from(l) : [],
        });
}
