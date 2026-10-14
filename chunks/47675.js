(t.d(i, {
    XH: () => b,
    Wn: () => C,
    CD: () => y,
    vP: () => U,
    pT: () => S,
    nR: () => k,
    un: () => M,
    wd: () => T,
    Tu: () => O,
    UI: () => I,
    am: () => N,
}),
    t(321073));
var r = t(666860),
    n = t(982240),
    l = t(733110),
    o = t(427358),
    u = t(616356),
    a = t(696451),
    s = t(290863),
    d = t(994500),
    f = t(287809),
    c = t(174459),
    _ = t(486020),
    p = t(321191);
let m = (0, t(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var g = t(999291),
    h = t(518477),
    A = t(652215),
    P = t(818348);
function b(e) {
    let { user: i, userProfile: t, guildMember: r, guildMemberProfile: n } = e,
        l = t ?? n,
        o = [];
    if ((r?.nick && o.push(h.d6.NICKNAME), l?.pronouns && o.push(h.d6.PRONOUNS), i?.avatar)) {
        let e = (0, _.VI)(i?.avatar);
        o.push(e ? h.d6.ANIMATED_AVATAR : h.d6.AVATAR);
    }
    if (l?.banner) {
        let e = (0, _.VI)(l?.banner);
        o.push(e ? h.d6.ANIMATED_BANNER : h.d6.BANNER);
    }
    return (
        l?.bio && o.push(h.d6.BIO),
        l?.themeColors != null && void 0 !== l.themeColors.find((e) => null !== e) && o.push(h.d6.THEME),
        i?.avatarDecoration != null && o.push(h.d6.AVATAR_DECORATION),
        l?.profileEffect != null && o.push(h.d6.PROFILE_EFFECT),
        o
    );
}
function y(e) {
    let i = s.A.getStatus(e),
        t = s.A.isMobileOnline(e);
    return i === P.cl.ONLINE && t ? `${i}-mobile` : i === P.cl.ONLINE ? `${i}-desktop` : i;
}
function E(e) {
    let { layout: i, userId: t, guildId: r, sessionId: n, sourceSessionId: l, showGuildProfile: o = !0 } = e,
        u = f.default.getUser(t);
    if (null == u) return {};
    let d = (0, g.AP)(u?.id, o ? r : void 0),
        c = o && null != r ? a.Ay.getMember(r, u?.id) : null;
    return {
        profile_layout: i,
        profile_session_id: n,
        source_profile_session_id: l,
        profile_properties: b({ user: u, userProfile: d?._userProfile }),
        guild_profile_properties: b({ guildMember: c, guildMemberProfile: d?._guildMemberProfile }),
        profile_activity_types: s.A.getActivities(u.id)
            .map((e) => {
                let { type: i } = e;
                return i;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            d
                ?.getBadges()
                ?.map((e) => {
                    let { id: i } = e;
                    return i;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: u.avatarDecoration?.skuId,
        profile_effect_sku_id: d?.profileEffect?.skuId,
        profile_frame_sku_id: d?.profileFrame?.skuId,
        user_status: y(u.id),
        is_guild_profile: d?.guildId != null,
        is_bot_profile: u.bot,
        is_private_to_viewer: d?.private ?? !1,
    };
}
function I(e) {
    let { userId: i } = e;
    if (null == i) return {};
    let t = o.A.getUserAffinity(i);
    return {
        related_user_id: i,
        relationship_type: d.A.getRelationshipType(i),
        related_since: d.A.getSince(i),
        num_mutual_friends: p.A.getMutualFriendsCount(i),
        num_mutual_guilds: p.A.getMutualGuilds(i)?.length,
        communication_probability: t?.communicationProbability,
        communication_rank: t?.communicationRank,
    };
}
function v(e) {
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
        guildId: i,
        channelId: t,
        messageId: n,
        roleId: l,
        widgetType: o,
        analyticsLocations: u,
        action: a,
        section: s,
        applicationId: d,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(t),
        ...E(e),
        ...I(e),
        ...v(d),
        location_stack: u,
        profile_action: a,
        profile_section: s,
        source_message_id: n,
        source_role_id: l,
        widget_type: o,
    });
}
function T(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: i } = m.getConfig({ location: e });
            return i;
        })("UserProfileAnalyticsUtils")
    )
        return;
    let {
        guildId: i,
        channelId: t,
        analyticsLocations: n,
        profileUi: l,
        viewStartedAt: o,
        fetchStartedAt: u,
        timeToInteractiveMs: a,
        timeToLoadMs: s,
        timeToFetchMs: d,
    } = e;
    (a ?? 0) <= 0 ||
        (s ?? 0) <= 0 ||
        (d ?? 0) <= 0 ||
        c.default.track(A.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            ...I(e),
            location_stack: n,
            profile_ui: l,
            view_started_at: o,
            fetch_started_at: u,
            time_to_interactive_ms: a,
            time_to_load_ms: s,
            time_to_fetch_ms: d,
        });
}
function O(e) {
    var i;
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: l,
        action: o,
        display: u,
        activity: a,
        stream: s,
        entry: d,
        outbox: f,
        voiceChannelId: _,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(n),
        ...E(e),
        ...I(e),
        location_stack: l,
        activity_action: o,
        activity_display: u,
        activity_type:
            null == (i = null != s ? A.$pd.STREAMING : a?.type)
                ? i
                : "VOICE" === i
                  ? "VOICE"
                  : Object.keys(A.$pd)[Object.values(A.$pd).indexOf(i)],
        activity_name: a?.name,
        activity_platform: a?.platform,
        activity_session_id: a?.session_id,
        activity_application_id: a?.application_id,
        item_id: d?.id,
        author_id_v2: d?.author_id,
        item_ids: f?.entries.map((e) => {
            let { id: i } = e;
            return i;
        }),
        author_ids_v2: f?.entries.map((e) => {
            let { author_id: i } = e;
            return i;
        }),
        voice_channel_id: _,
    });
}
function U(e) {
    let { guildId: i, channelId: t, analyticsLocations: l, badgeId: o, badgeAction: u, position: a, userId: s } = e,
        d = null != o && null != s ? n.Ay.getBadgeById(o, s)?.current_tier : void 0;
    c.default.track(A.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(t),
        ...E(e),
        ...I(e),
        location_stack: l,
        badge_action: u,
        badge_id: o,
        badge_tier: d,
        position: a,
    });
}
function N(e) {
    let { displayProfile: i, isProfileOpen: t } = e,
        r = i?.userId,
        n =
            null != r
                ? s.A.findActivity(r, (e) => {
                      let { type: i } = e;
                      return null != u.A.getAnyStreamForUser(r) ? i === A.$pd.PLAYING : i !== A.$pd.CUSTOM_STATUS;
                  })
                : null;
    c.default.track(A.HAw.DM_PROFILE_TOGGLED, {
        ...E({ userId: r }),
        is_profile_open: t,
        has_images: !!(n?.assets?.large_image ?? n?.assets?.small_image),
        is_friend: d.A.isFriend(r),
        viewed_profile_user_id: r,
        profile_has_nitro_customization: i?.hasPremiumCustomization(),
        profile_has_theme_color_customized: i?.hasThemeColors(),
        profile_has_theme_animation: i?.popoutAnimationParticleType != null,
    });
}
function M(e) {
    let {
        guildId: i,
        channelId: t,
        analyticsLocations: n,
        action: l,
        widgetEdited: o,
        gameId: u,
        numResults: a,
        numCharacters: s,
        applicationId: d,
    } = e;
    (C({ ...e, action: l }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            ...v(d),
            location_stack: n,
            edit_action: l,
            widget_edited: o,
            game_id: u,
            num_results: a,
            num_characters: s,
            application_id: d,
        }));
}
function S(e) {
    let {
        guildId: i,
        channelId: t,
        analyticsLocations: n,
        widgetEdited: l,
        gameIds: o,
        tags: u,
        numCharactersCommentary: a,
        isWidgetRemoved: s,
    } = e;
    (C({ ...e, action: "EDIT_SAVED" }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            location_stack: n,
            widget_edited: l,
            game_ids: o,
            tags: u,
            num_characters_commentary: a,
            is_widget_removed: s,
        }));
}
function k(e) {
    let { guildId: i, channelId: t, analyticsLocations: n, action: l, wishlistId: o, skuId: u, productLines: a } = e;
    (C({ ...e, action: l }),
        c.default.track(A.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            location_stack: n,
            action_type: l,
            wishlist_id: o,
            sku_id: u,
            product_lines: null != a ? Array.from(a) : [],
        }));
}
