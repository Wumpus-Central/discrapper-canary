"use strict";
n.d(t, {
    nR: () => b,
    Wn: () => C,
    vP: () => L,
    pT: () => v,
    un: () => y,
    wd: () => R,
    Tu: () => O,
    UI: () => S,
    am: () => D,
}),
    n(321073);
var i = n(95561),
    r = n(982240),
    a = n(427358),
    s = n(616356),
    l = n(546183),
    o = n(696451),
    d = n(290863),
    c = n(994500),
    u = n(287809),
    _ = n(174459),
    E = n(486020),
    A = n(321191);
let h = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var I = n(999291),
    f = n(518477),
    p = n(652215),
    T = n(818348);
function m(e) {
    let { user: t, userProfile: n, guildMember: i, guildMemberProfile: r } = e,
        a = n ?? r,
        s = [];
    if ((i?.nick && s.push(f.d6.NICKNAME), a?.pronouns && s.push(f.d6.PRONOUNS), t?.avatar)) {
        let e = (0, E.VI)(t?.avatar);
        s.push(e ? f.d6.ANIMATED_AVATAR : f.d6.AVATAR);
    }
    if (a?.banner) {
        let e = (0, E.VI)(a?.banner);
        s.push(e ? f.d6.ANIMATED_BANNER : f.d6.BANNER);
    }
    return (
        a?.bio && s.push(f.d6.BIO),
        a?.themeColors != null && void 0 !== a.themeColors.find((e) => null !== e) && s.push(f.d6.THEME),
        t?.avatarDecoration != null && s.push(f.d6.AVATAR_DECORATION),
        a?.profileEffect != null && s.push(f.d6.PROFILE_EFFECT),
        s
    );
}
function g(e) {
    var t;
    let n,
        i,
        { layout: r, userId: a, guildId: s, sessionId: l, sourceSessionId: c, showGuildProfile: _ = !0 } = e,
        E = u.default.getUser(a);
    if (null == E) return {};
    let A = (0, I.AP)(E?.id, _ ? s : void 0),
        h = _ && null != s ? o.Ay.getMember(s, E?.id) : null;
    return {
        profile_layout: r,
        profile_session_id: l,
        source_profile_session_id: c,
        profile_properties: m({ user: E, userProfile: A?._userProfile }),
        guild_profile_properties: m({ guildMember: h, guildMemberProfile: A?._guildMemberProfile }),
        profile_activity_types: d.A.getActivities(E.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            A?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: E.avatarDecoration?.skuId,
        profile_effect_sku_id: A?.profileEffect?.skuId,
        profile_frame_sku_id: A?.profileFrame?.skuId,
        user_status:
            ((t = E.id),
            (n = d.A.getStatus(t)),
            (i = d.A.isMobileOnline(t)),
            n === T.cl.ONLINE && i ? `${n}-mobile` : n === T.cl.ONLINE ? `${n}-desktop` : n),
        is_guild_profile: A?.guildId != null,
        is_bot_profile: E.bot,
        is_private_to_viewer: A?.private ?? !1,
    };
}
function S(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let n = a.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: c.A.getRelationshipType(t),
        related_since: c.A.getSince(t),
        num_mutual_friends: A.A.getMutualFriendsCount(t),
        num_mutual_guilds: A.A.getMutualGuilds(t)?.length,
        communication_probability: n?.communicationProbability,
        communication_rank: n?.communicationRank,
    };
}
function N(e) {
    return {
        application_id: e,
        application_linked:
            null != e && l.default.getFetchStateForApplication(e) === l.FetchState.FETCHED
                ? null != l.default.getNewestTokenForApplication(e)
                : null,
    };
}
function C(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: r,
        roleId: a,
        widgetType: s,
        analyticsLocations: l,
        action: o,
        section: d,
        applicationId: c,
    } = e;
    _.default.track(p.HAw.USER_PROFILE_ACTION, {
        ...(0, i.H$)(t),
        ...(0, i.Ou)(n),
        ...g(e),
        ...S(e),
        ...N(c),
        location_stack: l,
        profile_action: o,
        profile_section: d,
        source_message_id: r,
        source_role_id: a,
        widget_type: s,
    });
}
function R(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: t } = h.getConfig({ location: e });
            return t;
        })("UserProfileAnalyticsUtils")
    )
        return;
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: r,
        profileUi: a,
        viewStartedAt: s,
        fetchStartedAt: l,
        timeToInteractiveMs: o,
        timeToLoadMs: d,
        timeToFetchMs: c,
    } = e;
    (o ?? 0) <= 0 ||
        (d ?? 0) <= 0 ||
        (c ?? 0) <= 0 ||
        _.default.track(p.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...g(e),
            ...S(e),
            location_stack: r,
            profile_ui: a,
            view_started_at: s,
            fetch_started_at: l,
            time_to_interactive_ms: o,
            time_to_load_ms: d,
            time_to_fetch_ms: c,
        });
}
function O(e) {
    var t;
    let {
        guildId: n,
        channelId: r,
        analyticsLocations: a,
        action: s,
        display: l,
        activity: o,
        stream: d,
        entry: c,
        outbox: u,
        voiceChannelId: E,
    } = e;
    _.default.track(p.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, i.H$)(n),
        ...(0, i.Ou)(r),
        ...g(e),
        ...S(e),
        location_stack: a,
        activity_action: s,
        activity_display: l,
        activity_type:
            null == (t = null != d ? p.$pd.STREAMING : o?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(p.$pd)[Object.values(p.$pd).indexOf(t)],
        activity_name: o?.name,
        activity_platform: o?.platform,
        activity_session_id: o?.session_id,
        activity_application_id: o?.application_id,
        item_id: c?.id,
        author_id_v2: c?.author_id,
        item_ids: u?.entries.map((e) => {
            let { id: t } = e;
            return t;
        }),
        author_ids_v2: u?.entries.map((e) => {
            let { author_id: t } = e;
            return t;
        }),
        voice_channel_id: E,
    });
}
function L(e) {
    let { guildId: t, channelId: n, analyticsLocations: a, badgeId: s, badgeAction: l, position: o, userId: d } = e,
        c = null != s && null != d ? r.Ay.getBadgeById(s, d)?.current_tier : void 0;
    _.default.track(p.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, i.H$)(t),
        ...(0, i.Ou)(n),
        ...g(e),
        ...S(e),
        location_stack: a,
        badge_action: l,
        badge_id: s,
        badge_tier: c,
        position: o,
    });
}
function D(e) {
    let { displayProfile: t, isProfileOpen: n } = e,
        i = t?.userId,
        r =
            null != i
                ? d.A.findActivity(i, (e) => {
                      let { type: t } = e;
                      return null != s.A.getAnyStreamForUser(i) ? t === p.$pd.PLAYING : t !== p.$pd.CUSTOM_STATUS;
                  })
                : null;
    _.default.track(p.HAw.DM_PROFILE_TOGGLED, {
        ...g({ userId: i }),
        is_profile_open: n,
        has_images: !!(r?.assets?.large_image ?? r?.assets?.small_image),
        is_friend: c.A.isFriend(i),
        viewed_profile_user_id: i,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function y(e) {
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: r,
        action: a,
        widgetEdited: s,
        gameId: l,
        numResults: o,
        numCharacters: d,
        applicationId: c,
    } = e;
    C({ ...e, action: a }),
        _.default.track(p.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...g(e),
            ...N(c),
            location_stack: r,
            edit_action: a,
            widget_edited: s,
            game_id: l,
            num_results: o,
            num_characters: d,
            application_id: c,
        });
}
function v(e) {
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: r,
        widgetEdited: a,
        gameIds: s,
        tags: l,
        numCharactersCommentary: o,
        isWidgetRemoved: d,
    } = e;
    C({ ...e, action: "EDIT_SAVED" }),
        _.default.track(p.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...g(e),
            location_stack: r,
            widget_edited: a,
            game_ids: s,
            tags: l,
            num_characters_commentary: o,
            is_widget_removed: d,
        });
}
function b(e) {
    let { guildId: t, channelId: n, analyticsLocations: r, action: a, wishlistId: s, skuId: l, productLines: o } = e;
    C({ ...e, action: a }),
        _.default.track(p.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...g(e),
            location_stack: r,
            action_type: a,
            wishlist_id: s,
            sku_id: l,
            product_lines: null != o ? Array.from(o) : [],
        });
}
