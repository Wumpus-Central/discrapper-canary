i.d(t, {
    nR: () => N,
    Wn: () => O,
    vP: () => b,
    pT: () => S,
    un: () => P,
    wd: () => T,
    Tu: () => R,
    UI: () => k,
    am: () => C,
}),
    i(321073);
var l = i(95561),
    n = i(982240),
    a = i(427358),
    r = i(616356),
    o = i(546183),
    u = i(696451),
    s = i(290863),
    _ = i(994500),
    c = i(287809),
    d = i(174459),
    f = i(486020),
    p = i(841595);
let m = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var A = i(999291),
    E = i(518477),
    I = i(652215),
    v = i(818348);
function g(e) {
    let { user: t, userProfile: i, guildMember: l, guildMemberProfile: n } = e,
        a = i ?? n,
        r = [];
    if ((l?.nick && r.push(E.d6.NICKNAME), a?.pronouns && r.push(E.d6.PRONOUNS), t?.avatar)) {
        let e = (0, f.VI)(t?.avatar);
        r.push(e ? E.d6.ANIMATED_AVATAR : E.d6.AVATAR);
    }
    if (a?.banner) {
        let e = (0, f.VI)(a?.banner);
        r.push(e ? E.d6.ANIMATED_BANNER : E.d6.BANNER);
    }
    return (
        a?.bio && r.push(E.d6.BIO),
        a?.themeColors != null && void 0 !== a.themeColors.find((e) => null !== e) && r.push(E.d6.THEME),
        t?.avatarDecoration != null && r.push(E.d6.AVATAR_DECORATION),
        a?.profileEffect != null && r.push(E.d6.PROFILE_EFFECT),
        r
    );
}
function h(e) {
    var t;
    let i,
        l,
        { layout: n, userId: a, guildId: r, sessionId: o, sourceSessionId: _, showGuildProfile: d = !0 } = e,
        f = c.default.getUser(a);
    if (null == f) return {};
    let p = (0, A.AP)(f?.id, d ? r : void 0),
        m = d && null != r ? u.Ay.getMember(r, f?.id) : null;
    return {
        profile_layout: n,
        profile_session_id: o,
        source_profile_session_id: _,
        profile_properties: g({ user: f, userProfile: p?._userProfile }),
        guild_profile_properties: g({ guildMember: m, guildMemberProfile: p?._guildMemberProfile }),
        profile_activity_types: s.A.getActivities(f.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            p
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: f.avatarDecoration?.skuId,
        profile_effect_sku_id: p?.profileEffect?.skuId,
        user_status:
            ((t = f.id),
            (i = s.A.getStatus(t)),
            (l = s.A.isMobileOnline(t)),
            i === v.cl.ONLINE && l ? `${i}-mobile` : i === v.cl.ONLINE ? `${i}-desktop` : i),
        is_guild_profile: p?.guildId != null,
        is_bot_profile: f.bot,
        is_private_to_viewer: p?.private ?? !1,
    };
}
function k(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let i = a.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: _.A.getRelationshipType(t),
        related_since: _.A.getSince(t),
        num_mutual_friends: p.A.getMutualFriendsCount(t),
        num_mutual_guilds: p.A.getMutualGuilds(t)?.length,
        communication_probability: i?.communicationProbability,
        communication_rank: i?.communicationRank,
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
function O(e) {
    let {
        guildId: t,
        channelId: i,
        messageId: n,
        roleId: a,
        widgetType: r,
        analyticsLocations: o,
        action: u,
        section: s,
        applicationId: _,
    } = e;
    d.default.track(I.HAw.USER_PROFILE_ACTION, {
        ...(0, l.H$)(t),
        ...(0, l.Ou)(i),
        ...h(e),
        ...k(e),
        ...y(_),
        location_stack: o,
        profile_action: u,
        profile_section: s,
        source_message_id: n,
        source_role_id: a,
        widget_type: r,
    });
}
function T(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: t } = m.getConfig({ location: e });
            return t;
        })("UserProfileAnalyticsUtils")
    )
        return;
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: n,
        profileUi: a,
        viewStartedAt: r,
        fetchStartedAt: o,
        timeToInteractiveMs: u,
        timeToLoadMs: s,
        timeToFetchMs: _,
    } = e;
    (u ?? 0) <= 0 ||
        (s ?? 0) <= 0 ||
        (_ ?? 0) <= 0 ||
        d.default.track(I.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...h(e),
            ...k(e),
            location_stack: n,
            profile_ui: a,
            view_started_at: r,
            fetch_started_at: o,
            time_to_interactive_ms: u,
            time_to_load_ms: s,
            time_to_fetch_ms: _,
        });
}
function R(e) {
    var t;
    let {
        guildId: i,
        channelId: n,
        analyticsLocations: a,
        action: r,
        display: o,
        activity: u,
        stream: s,
        entry: _,
        outbox: c,
        voiceChannelId: f,
    } = e;
    d.default.track(I.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, l.H$)(i),
        ...(0, l.Ou)(n),
        ...h(e),
        ...k(e),
        location_stack: a,
        activity_action: r,
        activity_display: o,
        activity_type:
            null == (t = null != s ? I.$pd.STREAMING : u?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(I.$pd)[Object.values(I.$pd).indexOf(t)],
        activity_name: u?.name,
        activity_platform: u?.platform,
        activity_session_id: u?.session_id,
        activity_application_id: u?.application_id,
        item_id: _?.id,
        author_id_v2: _?.author_id,
        item_ids: c?.entries.map((e) => {
            let { id: t } = e;
            return t;
        }),
        author_ids_v2: c?.entries.map((e) => {
            let { author_id: t } = e;
            return t;
        }),
        voice_channel_id: f,
    });
}
function b(e) {
    let { guildId: t, channelId: i, analyticsLocations: a, badgeId: r, badgeAction: o, position: u, userId: s } = e,
        _ = null != r && null != s ? n.Ay.getBadgeById(r, s)?.current_tier : void 0;
    d.default.track(I.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, l.H$)(t),
        ...(0, l.Ou)(i),
        ...h(e),
        ...k(e),
        location_stack: a,
        badge_action: o,
        badge_id: r,
        badge_tier: _,
        position: u,
    });
}
function C(e) {
    let { displayProfile: t, isProfileOpen: i } = e,
        l = t?.userId,
        n =
            null != l
                ? s.A.findActivity(l, (e) => {
                      let { type: t } = e;
                      return null != r.A.getAnyStreamForUser(l) ? t === I.$pd.PLAYING : t !== I.$pd.CUSTOM_STATUS;
                  })
                : null;
    d.default.track(I.HAw.DM_PROFILE_TOGGLED, {
        is_profile_open: i,
        has_images: !!(n?.assets?.large_image ?? n?.assets?.small_image),
        is_friend: _.A.isFriend(l),
        viewed_profile_user_id: l,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function P(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: n,
        action: a,
        widgetEdited: r,
        gameId: o,
        numResults: u,
        numCharacters: s,
        applicationId: _,
    } = e;
    O({ ...e, action: a }),
        d.default.track(I.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...h(e),
            ...y(_),
            location_stack: n,
            edit_action: a,
            widget_edited: r,
            game_id: o,
            num_results: u,
            num_characters: s,
            application_id: _,
        });
}
function S(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: n,
        widgetEdited: a,
        gameIds: r,
        tags: o,
        numCharactersCommentary: u,
        isWidgetRemoved: s,
    } = e;
    O({ ...e, action: "EDIT_SAVED" }),
        d.default.track(I.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...h(e),
            location_stack: n,
            widget_edited: a,
            game_ids: r,
            tags: o,
            num_characters_commentary: u,
            is_widget_removed: s,
        });
}
function N(e) {
    let { guildId: t, channelId: i, analyticsLocations: n, action: a, wishlistId: r, skuId: o, productLines: u } = e;
    O({ ...e, action: a }),
        d.default.track(I.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...h(e),
            location_stack: n,
            action_type: a,
            wishlist_id: r,
            sku_id: o,
            product_lines: null != u ? Array.from(u) : [],
        });
}
