i.d(t, {
    nR: () => w,
    Wn: () => y,
    vP: () => U,
    pT: () => S,
    un: () => R,
    wd: () => C,
    Tu: () => T,
    UI: () => I,
    am: () => k,
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
    c = i(174459),
    f = i(486020),
    m = i(321191);
let h = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var p = i(999291),
    g = i(518477),
    A = i(652215),
    b = i(818348);
function v(e) {
    let { user: t, userProfile: i, guildMember: r, guildMemberProfile: l } = e,
        n = i ?? l,
        u = [];
    if ((r?.nick && u.push(g.d6.NICKNAME), n?.pronouns && u.push(g.d6.PRONOUNS), t?.avatar)) {
        let e = (0, f.VI)(t?.avatar);
        u.push(e ? g.d6.ANIMATED_AVATAR : g.d6.AVATAR);
    }
    if (n?.banner) {
        let e = (0, f.VI)(n?.banner);
        u.push(e ? g.d6.ANIMATED_BANNER : g.d6.BANNER);
    }
    return (
        n?.bio && u.push(g.d6.BIO),
        n?.themeColors != null && void 0 !== n.themeColors.find((e) => null !== e) && u.push(g.d6.THEME),
        t?.avatarDecoration != null && u.push(g.d6.AVATAR_DECORATION),
        n?.profileEffect != null && u.push(g.d6.PROFILE_EFFECT),
        u
    );
}
function E(e) {
    var t;
    let i,
        r,
        { layout: l, userId: n, guildId: u, sessionId: o, sourceSessionId: d, showGuildProfile: c = !0 } = e,
        f = _.default.getUser(n);
    if (null == f) return {};
    let m = (0, p.AP)(f?.id, c ? u : void 0),
        h = c && null != u ? s.Ay.getMember(u, f?.id) : null;
    return {
        profile_layout: l,
        profile_session_id: o,
        source_profile_session_id: d,
        profile_properties: v({ user: f, userProfile: m?._userProfile }),
        guild_profile_properties: v({ guildMember: h, guildMemberProfile: m?._guildMemberProfile }),
        profile_activity_types: a.A.getActivities(f.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            m
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: f.avatarDecoration?.skuId,
        profile_effect_sku_id: m?.profileEffect?.skuId,
        profile_frame_sku_id: m?.profileFrame?.skuId,
        user_status:
            ((t = f.id),
            (i = a.A.getStatus(t)),
            (r = a.A.isMobileOnline(t)),
            i === b.cl.ONLINE && r ? `${i}-mobile` : i === b.cl.ONLINE ? `${i}-desktop` : i),
        is_guild_profile: m?.guildId != null,
        is_bot_profile: f.bot,
        is_private_to_viewer: m?.private ?? !1,
    };
}
function I(e) {
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
function P(e) {
    return {
        application_id: e,
        application_linked:
            null != e && n.default.getFetchStateForApplication(e) === n.FetchState.FETCHED
                ? null != n.default.getNewestTokenForApplication(e)
                : null,
    };
}
function y(e) {
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
    c.default.track(A.HAw.USER_PROFILE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(i),
        ...E(e),
        ...I(e),
        ...P(d),
        location_stack: o,
        profile_action: s,
        profile_section: a,
        source_message_id: l,
        source_role_id: n,
        widget_type: u,
    });
}
function C(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: t } = h.getConfig({ location: e });
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
        c.default.track(A.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...E(e),
            ...I(e),
            location_stack: l,
            profile_ui: n,
            view_started_at: u,
            fetch_started_at: o,
            time_to_interactive_ms: s,
            time_to_load_ms: a,
            time_to_fetch_ms: d,
        });
}
function T(e) {
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
        voiceChannelId: f,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(l),
        ...E(e),
        ...I(e),
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
        voice_channel_id: f,
    });
}
function U(e) {
    let { guildId: t, channelId: i, analyticsLocations: n, badgeId: u, badgeAction: o, position: s, userId: a } = e,
        d = null != u && null != a ? l.Ay.getBadgeById(u, a)?.current_tier : void 0;
    c.default.track(A.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(i),
        ...E(e),
        ...I(e),
        location_stack: n,
        badge_action: o,
        badge_id: u,
        badge_tier: d,
        position: s,
    });
}
function k(e) {
    let { displayProfile: t, isProfileOpen: i } = e,
        r = t?.userId,
        l =
            null != r
                ? a.A.findActivity(r, (e) => {
                      let { type: t } = e;
                      return null != o.A.getAnyStreamForUser(r) ? t === A.$pd.PLAYING : t !== A.$pd.CUSTOM_STATUS;
                  })
                : null;
    c.default.track(A.HAw.DM_PROFILE_TOGGLED, {
        ...E({ userId: r }),
        is_profile_open: i,
        has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
        is_friend: d.A.isFriend(r),
        viewed_profile_user_id: r,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function R(e) {
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
    y({ ...e, action: n }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...E(e),
            ...P(d),
            location_stack: l,
            edit_action: n,
            widget_edited: u,
            game_id: o,
            num_results: s,
            num_characters: a,
            application_id: d,
        });
}
function S(e) {
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
    y({ ...e, action: "EDIT_SAVED" }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...E(e),
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
    y({ ...e, action: n }),
        c.default.track(A.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...E(e),
            location_stack: l,
            action_type: n,
            wishlist_id: u,
            sku_id: o,
            product_lines: null != s ? Array.from(s) : [],
        });
}
