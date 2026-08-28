i.d(t, {
    XH: () => E,
    Wn: () => C,
    CD: () => v,
    vP: () => k,
    pT: () => R,
    nR: () => w,
    un: () => O,
    wd: () => T,
    Tu: () => U,
    UI: () => P,
    am: () => S,
}),
    i(321073);
var r = i(95561),
    l = i(982240),
    n = i(733110),
    u = i(427358),
    o = i(616356),
    s = i(696451),
    a = i(290863),
    d = i(994500),
    _ = i(287809),
    f = i(174459),
    c = i(486020),
    m = i(321191);
let g = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var h = i(999291),
    p = i(518477),
    A = i(652215),
    b = i(818348);
function E(e) {
    let { user: t, userProfile: i, guildMember: r, guildMemberProfile: l } = e,
        n = i ?? l,
        u = [];
    if ((r?.nick && u.push(p.d6.NICKNAME), n?.pronouns && u.push(p.d6.PRONOUNS), t?.avatar)) {
        let e = (0, c.VI)(t?.avatar);
        u.push(e ? p.d6.ANIMATED_AVATAR : p.d6.AVATAR);
    }
    if (n?.banner) {
        let e = (0, c.VI)(n?.banner);
        u.push(e ? p.d6.ANIMATED_BANNER : p.d6.BANNER);
    }
    return (
        n?.bio && u.push(p.d6.BIO),
        n?.themeColors != null && void 0 !== n.themeColors.find((e) => null !== e) && u.push(p.d6.THEME),
        t?.avatarDecoration != null && u.push(p.d6.AVATAR_DECORATION),
        n?.profileEffect != null && u.push(p.d6.PROFILE_EFFECT),
        u
    );
}
function v(e) {
    let t = a.A.getStatus(e),
        i = a.A.isMobileOnline(e);
    return t === b.cl.ONLINE && i ? `${t}-mobile` : t === b.cl.ONLINE ? `${t}-desktop` : t;
}
function I(e) {
    let { layout: t, userId: i, guildId: r, sessionId: l, sourceSessionId: n, showGuildProfile: u = !0 } = e,
        o = _.default.getUser(i);
    if (null == o) return {};
    let d = (0, h.AP)(o?.id, u ? r : void 0),
        f = u && null != r ? s.Ay.getMember(r, o?.id) : null;
    return {
        profile_layout: t,
        profile_session_id: l,
        source_profile_session_id: n,
        profile_properties: E({ user: o, userProfile: d?._userProfile }),
        guild_profile_properties: E({ guildMember: f, guildMemberProfile: d?._guildMemberProfile }),
        profile_activity_types: a.A.getActivities(o.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            d
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: o.avatarDecoration?.skuId,
        profile_effect_sku_id: d?.profileEffect?.skuId,
        profile_frame_sku_id: d?.profileFrame?.skuId,
        user_status: v(o.id),
        is_guild_profile: d?.guildId != null,
        is_bot_profile: o.bot,
        is_private_to_viewer: d?.private ?? !1,
    };
}
function P(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let i = u.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: d.A.getRelationshipType(t),
        related_since: d.A.getSince(t),
        num_mutual_friends: m.A.getMutualFriendsCount(t),
        num_mutual_guilds: m.A.getMutualGuilds(t)?.length,
        communication_probability: i?.communicationProbability,
        communication_rank: i?.communicationRank,
    };
}
function y(e) {
    return {
        application_id: e,
        application_linked:
            null != e && n.default.getFetchStateForApplication(e) === n.FetchState.FETCHED
                ? null != n.default.getNewestTokenForApplication(e)
                : null,
    };
}
function C(e) {
    let {
        guildId: t,
        channelId: i,
        messageId: l,
        roleId: n,
        widgetType: u,
        analyticsLocations: o,
        action: s,
        section: a,
        applicationId: d,
    } = e;
    f.default.track(A.HAw.USER_PROFILE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(i),
        ...I(e),
        ...P(e),
        ...y(d),
        location_stack: o,
        profile_action: s,
        profile_section: a,
        source_message_id: l,
        source_role_id: n,
        widget_type: u,
    });
}
function T(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: t } = g.getConfig({ location: e });
            return t;
        })("UserProfileAnalyticsUtils")
    )
        return;
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        profileUi: n,
        viewStartedAt: u,
        fetchStartedAt: o,
        timeToInteractiveMs: s,
        timeToLoadMs: a,
        timeToFetchMs: d,
    } = e;
    (s ?? 0) <= 0 ||
        (a ?? 0) <= 0 ||
        (d ?? 0) <= 0 ||
        f.default.track(A.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            ...P(e),
            location_stack: l,
            profile_ui: n,
            view_started_at: u,
            fetch_started_at: o,
            time_to_interactive_ms: s,
            time_to_load_ms: a,
            time_to_fetch_ms: d,
        });
}
function U(e) {
    var t;
    let {
        guildId: i,
        channelId: l,
        analyticsLocations: n,
        action: u,
        display: o,
        activity: s,
        stream: a,
        entry: d,
        outbox: _,
        voiceChannelId: c,
    } = e;
    f.default.track(A.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(l),
        ...I(e),
        ...P(e),
        location_stack: n,
        activity_action: u,
        activity_display: o,
        activity_type:
            null == (t = null != a ? A.$pd.STREAMING : s?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(A.$pd)[Object.values(A.$pd).indexOf(t)],
        activity_name: s?.name,
        activity_platform: s?.platform,
        activity_session_id: s?.session_id,
        activity_application_id: s?.application_id,
        item_id: d?.id,
        author_id_v2: d?.author_id,
        item_ids: _?.entries.map((e) => {
            let { id: t } = e;
            return t;
        }),
        author_ids_v2: _?.entries.map((e) => {
            let { author_id: t } = e;
            return t;
        }),
        voice_channel_id: c,
    });
}
function k(e) {
    let { guildId: t, channelId: i, analyticsLocations: n, badgeId: u, badgeAction: o, position: s, userId: a } = e,
        d = null != u && null != a ? l.Ay.getBadgeById(u, a)?.current_tier : void 0;
    f.default.track(A.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(i),
        ...I(e),
        ...P(e),
        location_stack: n,
        badge_action: o,
        badge_id: u,
        badge_tier: d,
        position: s,
    });
}
function S(e) {
    let { displayProfile: t, isProfileOpen: i } = e,
        r = t?.userId,
        l =
            null != r
                ? a.A.findActivity(r, (e) => {
                      let { type: t } = e;
                      return null != o.A.getAnyStreamForUser(r) ? t === A.$pd.PLAYING : t !== A.$pd.CUSTOM_STATUS;
                  })
                : null;
    f.default.track(A.HAw.DM_PROFILE_TOGGLED, {
        ...I({ userId: r }),
        is_profile_open: i,
        has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
        is_friend: d.A.isFriend(r),
        viewed_profile_user_id: r,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function O(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        action: n,
        widgetEdited: u,
        gameId: o,
        numResults: s,
        numCharacters: a,
        applicationId: d,
    } = e;
    C({ ...e, action: n }),
        f.default.track(A.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            ...y(d),
            location_stack: l,
            edit_action: n,
            widget_edited: u,
            game_id: o,
            num_results: s,
            num_characters: a,
            application_id: d,
        });
}
function R(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        widgetEdited: n,
        gameIds: u,
        tags: o,
        numCharactersCommentary: s,
        isWidgetRemoved: a,
    } = e;
    C({ ...e, action: "EDIT_SAVED" }),
        f.default.track(A.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            location_stack: l,
            widget_edited: n,
            game_ids: u,
            tags: o,
            num_characters_commentary: s,
            is_widget_removed: a,
        });
}
function w(e) {
    let { guildId: t, channelId: i, analyticsLocations: l, action: n, wishlistId: u, skuId: o, productLines: s } = e;
    C({ ...e, action: n }),
        f.default.track(A.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            location_stack: l,
            action_type: n,
            wishlist_id: u,
            sku_id: o,
            product_lines: null != s ? Array.from(s) : [],
        });
}
