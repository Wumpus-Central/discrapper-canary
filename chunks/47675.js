t.d(i, {
    XH: () => b,
    Wn: () => T,
    CD: () => I,
    vP: () => U,
    pT: () => w,
    nR: () => R,
    un: () => M,
    wd: () => C,
    Tu: () => O,
    UI: () => v,
    am: () => k,
}),
    t(321073);
var r = t(95561),
    l = t(982240),
    n = t(733110),
    o = t(427358),
    u = t(616356),
    s = t(696451),
    a = t(290863),
    d = t(994500),
    _ = t(287809),
    c = t(174459),
    f = t(486020),
    p = t(321191);
let m = (0, t(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var h = t(999291),
    g = t(518477),
    A = t(652215),
    P = t(818348);
function b(e) {
    let { user: i, userProfile: t, guildMember: r, guildMemberProfile: l } = e,
        n = t ?? l,
        o = [];
    if ((r?.nick && o.push(g.d6.NICKNAME), n?.pronouns && o.push(g.d6.PRONOUNS), i?.avatar)) {
        let e = (0, f.VI)(i?.avatar);
        o.push(e ? g.d6.ANIMATED_AVATAR : g.d6.AVATAR);
    }
    if (n?.banner) {
        let e = (0, f.VI)(n?.banner);
        o.push(e ? g.d6.ANIMATED_BANNER : g.d6.BANNER);
    }
    return (
        n?.bio && o.push(g.d6.BIO),
        n?.themeColors != null && void 0 !== n.themeColors.find((e) => null !== e) && o.push(g.d6.THEME),
        i?.avatarDecoration != null && o.push(g.d6.AVATAR_DECORATION),
        n?.profileEffect != null && o.push(g.d6.PROFILE_EFFECT),
        o
    );
}
function I(e) {
    let i = a.A.getStatus(e),
        t = a.A.isMobileOnline(e);
    return i === P.cl.ONLINE && t ? `${i}-mobile` : i === P.cl.ONLINE ? `${i}-desktop` : i;
}
function E(e) {
    let { layout: i, userId: t, guildId: r, sessionId: l, sourceSessionId: n, showGuildProfile: o = !0 } = e,
        u = _.default.getUser(t);
    if (null == u) return {};
    let d = (0, h.AP)(u?.id, o ? r : void 0),
        c = o && null != r ? s.Ay.getMember(r, u?.id) : null;
    return {
        profile_layout: i,
        profile_session_id: l,
        source_profile_session_id: n,
        profile_properties: b({ user: u, userProfile: d?._userProfile }),
        guild_profile_properties: b({ guildMember: c, guildMemberProfile: d?._guildMemberProfile }),
        profile_activity_types: a.A.getActivities(u.id)
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
        user_status: I(u.id),
        is_guild_profile: d?.guildId != null,
        is_bot_profile: u.bot,
        is_private_to_viewer: d?.private ?? !1,
    };
}
function v(e) {
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
function y(e) {
    return {
        application_id: e,
        application_linked:
            null != e && n.default.getFetchStateForApplication(e) === n.FetchState.FETCHED
                ? null != n.default.getNewestTokenForApplication(e)
                : null,
    };
}
function T(e) {
    let {
        guildId: i,
        channelId: t,
        messageId: l,
        roleId: n,
        widgetType: o,
        analyticsLocations: u,
        action: s,
        section: a,
        applicationId: d,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(t),
        ...E(e),
        ...v(e),
        ...y(d),
        location_stack: u,
        profile_action: s,
        profile_section: a,
        source_message_id: l,
        source_role_id: n,
        widget_type: o,
    });
}
function C(e) {
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
        analyticsLocations: l,
        profileUi: n,
        viewStartedAt: o,
        fetchStartedAt: u,
        timeToInteractiveMs: s,
        timeToLoadMs: a,
        timeToFetchMs: d,
    } = e;
    (s ?? 0) <= 0 ||
        (a ?? 0) <= 0 ||
        (d ?? 0) <= 0 ||
        c.default.track(A.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            ...v(e),
            location_stack: l,
            profile_ui: n,
            view_started_at: o,
            fetch_started_at: u,
            time_to_interactive_ms: s,
            time_to_load_ms: a,
            time_to_fetch_ms: d,
        });
}
function O(e) {
    var i;
    let {
        guildId: t,
        channelId: l,
        analyticsLocations: n,
        action: o,
        display: u,
        activity: s,
        stream: a,
        entry: d,
        outbox: _,
        voiceChannelId: f,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(l),
        ...E(e),
        ...v(e),
        location_stack: n,
        activity_action: o,
        activity_display: u,
        activity_type:
            null == (i = null != a ? A.$pd.STREAMING : s?.type)
                ? i
                : "VOICE" === i
                  ? "VOICE"
                  : Object.keys(A.$pd)[Object.values(A.$pd).indexOf(i)],
        activity_name: s?.name,
        activity_platform: s?.platform,
        activity_session_id: s?.session_id,
        activity_application_id: s?.application_id,
        item_id: d?.id,
        author_id_v2: d?.author_id,
        item_ids: _?.entries.map((e) => {
            let { id: i } = e;
            return i;
        }),
        author_ids_v2: _?.entries.map((e) => {
            let { author_id: i } = e;
            return i;
        }),
        voice_channel_id: f,
    });
}
function U(e) {
    let { guildId: i, channelId: t, analyticsLocations: n, badgeId: o, badgeAction: u, position: s, userId: a } = e,
        d = null != o && null != a ? l.Ay.getBadgeById(o, a)?.current_tier : void 0;
    c.default.track(A.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(t),
        ...E(e),
        ...v(e),
        location_stack: n,
        badge_action: u,
        badge_id: o,
        badge_tier: d,
        position: s,
    });
}
function k(e) {
    let { displayProfile: i, isProfileOpen: t } = e,
        r = i?.userId,
        l =
            null != r
                ? a.A.findActivity(r, (e) => {
                      let { type: i } = e;
                      return null != u.A.getAnyStreamForUser(r) ? i === A.$pd.PLAYING : i !== A.$pd.CUSTOM_STATUS;
                  })
                : null;
    c.default.track(A.HAw.DM_PROFILE_TOGGLED, {
        ...E({ userId: r }),
        is_profile_open: t,
        has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
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
        analyticsLocations: l,
        action: n,
        widgetEdited: o,
        gameId: u,
        numResults: s,
        numCharacters: a,
        applicationId: d,
    } = e;
    T({ ...e, action: n }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            ...y(d),
            location_stack: l,
            edit_action: n,
            widget_edited: o,
            game_id: u,
            num_results: s,
            num_characters: a,
            application_id: d,
        });
}
function w(e) {
    let {
        guildId: i,
        channelId: t,
        analyticsLocations: l,
        widgetEdited: n,
        gameIds: o,
        tags: u,
        numCharactersCommentary: s,
        isWidgetRemoved: a,
    } = e;
    T({ ...e, action: "EDIT_SAVED" }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            location_stack: l,
            widget_edited: n,
            game_ids: o,
            tags: u,
            num_characters_commentary: s,
            is_widget_removed: a,
        });
}
function R(e) {
    let { guildId: i, channelId: t, analyticsLocations: l, action: n, wishlistId: o, skuId: u, productLines: s } = e;
    T({ ...e, action: n }),
        c.default.track(A.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(t),
            ...E(e),
            location_stack: l,
            action_type: n,
            wishlist_id: o,
            sku_id: u,
            product_lines: null != s ? Array.from(s) : [],
        });
}
