i.d(t, {
    XH: () => v,
    Wn: () => C,
    CD: () => I,
    vP: () => O,
    pT: () => U,
    nR: () => w,
    un: () => F,
    wd: () => T,
    Tu: () => R,
    UI: () => y,
    am: () => S,
}),
    i(321073);
var r = i(95561),
    l = i(982240),
    n = i(733110),
    a = i(427358),
    u = i(616356),
    o = i(696451),
    _ = i(290863),
    s = i(994500),
    d = i(287809),
    c = i(174459),
    f = i(486020),
    p = i(321191);
let m = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var g = i(999291),
    h = i(518477),
    A = i(652215),
    E = i(818348);
function v(e) {
    let { user: t, userProfile: i, guildMember: r, guildMemberProfile: l } = e,
        n = i ?? l,
        a = [];
    if ((r?.nick && a.push(h.d6.NICKNAME), n?.pronouns && a.push(h.d6.PRONOUNS), t?.avatar)) {
        let e = (0, f.VI)(t?.avatar);
        a.push(e ? h.d6.ANIMATED_AVATAR : h.d6.AVATAR);
    }
    if (n?.banner) {
        let e = (0, f.VI)(n?.banner);
        a.push(e ? h.d6.ANIMATED_BANNER : h.d6.BANNER);
    }
    return (
        n?.bio && a.push(h.d6.BIO),
        n?.themeColors != null && void 0 !== n.themeColors.find((e) => null !== e) && a.push(h.d6.THEME),
        t?.avatarDecoration != null && a.push(h.d6.AVATAR_DECORATION),
        n?.profileEffect != null && a.push(h.d6.PROFILE_EFFECT),
        a
    );
}
function I(e) {
    let t = _.A.getStatus(e),
        i = _.A.isMobileOnline(e);
    return t === E.cl.ONLINE && i ? `${t}-mobile` : t === E.cl.ONLINE ? `${t}-desktop` : t;
}
function b(e) {
    let { layout: t, userId: i, guildId: r, sessionId: l, sourceSessionId: n, showGuildProfile: a = !0 } = e,
        u = d.default.getUser(i);
    if (null == u) return {};
    let s = (0, g.AP)(u?.id, a ? r : void 0),
        c = a && null != r ? o.Ay.getMember(r, u?.id) : null;
    return {
        profile_layout: t,
        profile_session_id: l,
        source_profile_session_id: n,
        profile_properties: v({ user: u, userProfile: s?._userProfile }),
        guild_profile_properties: v({ guildMember: c, guildMemberProfile: s?._guildMemberProfile }),
        profile_activity_types: _.A.getActivities(u.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            s
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: u.avatarDecoration?.skuId,
        profile_effect_sku_id: s?.profileEffect?.skuId,
        profile_frame_sku_id: s?.profileFrame?.skuId,
        user_status: I(u.id),
        is_guild_profile: s?.guildId != null,
        is_bot_profile: u.bot,
        is_private_to_viewer: s?.private ?? !1,
    };
}
function y(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let i = a.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: s.A.getRelationshipType(t),
        related_since: s.A.getSince(t),
        num_mutual_friends: p.A.getMutualFriendsCount(t),
        num_mutual_guilds: p.A.getMutualGuilds(t)?.length,
        communication_probability: i?.communicationProbability,
        communication_rank: i?.communicationRank,
    };
}
function k(e) {
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
        widgetType: a,
        analyticsLocations: u,
        action: o,
        section: _,
        applicationId: s,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(i),
        ...b(e),
        ...y(e),
        ...k(s),
        location_stack: u,
        profile_action: o,
        profile_section: _,
        source_message_id: l,
        source_role_id: n,
        widget_type: a,
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
        analyticsLocations: l,
        profileUi: n,
        viewStartedAt: a,
        fetchStartedAt: u,
        timeToInteractiveMs: o,
        timeToLoadMs: _,
        timeToFetchMs: s,
    } = e;
    (o ?? 0) <= 0 ||
        (_ ?? 0) <= 0 ||
        (s ?? 0) <= 0 ||
        c.default.track(A.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...b(e),
            ...y(e),
            location_stack: l,
            profile_ui: n,
            view_started_at: a,
            fetch_started_at: u,
            time_to_interactive_ms: o,
            time_to_load_ms: _,
            time_to_fetch_ms: s,
        });
}
function R(e) {
    var t;
    let {
        guildId: i,
        channelId: l,
        analyticsLocations: n,
        action: a,
        display: u,
        activity: o,
        stream: _,
        entry: s,
        outbox: d,
        voiceChannelId: f,
    } = e;
    c.default.track(A.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, r.H$)(i),
        ...(0, r.Ou)(l),
        ...b(e),
        ...y(e),
        location_stack: n,
        activity_action: a,
        activity_display: u,
        activity_type:
            null == (t = null != _ ? A.$pd.STREAMING : o?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(A.$pd)[Object.values(A.$pd).indexOf(t)],
        activity_name: o?.name,
        activity_platform: o?.platform,
        activity_session_id: o?.session_id,
        activity_application_id: o?.application_id,
        item_id: s?.id,
        author_id_v2: s?.author_id,
        item_ids: d?.entries.map((e) => {
            let { id: t } = e;
            return t;
        }),
        author_ids_v2: d?.entries.map((e) => {
            let { author_id: t } = e;
            return t;
        }),
        voice_channel_id: f,
    });
}
function O(e) {
    let { guildId: t, channelId: i, analyticsLocations: n, badgeId: a, badgeAction: u, position: o, userId: _ } = e,
        s = null != a && null != _ ? l.Ay.getBadgeById(a, _)?.current_tier : void 0;
    c.default.track(A.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(i),
        ...b(e),
        ...y(e),
        location_stack: n,
        badge_action: u,
        badge_id: a,
        badge_tier: s,
        position: o,
    });
}
function S(e) {
    let { displayProfile: t, isProfileOpen: i } = e,
        r = t?.userId,
        l =
            null != r
                ? _.A.findActivity(r, (e) => {
                      let { type: t } = e;
                      return null != u.A.getAnyStreamForUser(r) ? t === A.$pd.PLAYING : t !== A.$pd.CUSTOM_STATUS;
                  })
                : null;
    c.default.track(A.HAw.DM_PROFILE_TOGGLED, {
        ...b({ userId: r }),
        is_profile_open: i,
        has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
        is_friend: s.A.isFriend(r),
        viewed_profile_user_id: r,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function F(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        action: n,
        widgetEdited: a,
        gameId: u,
        numResults: o,
        numCharacters: _,
        applicationId: s,
    } = e;
    C({ ...e, action: n }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...b(e),
            ...k(s),
            location_stack: l,
            edit_action: n,
            widget_edited: a,
            game_id: u,
            num_results: o,
            num_characters: _,
            application_id: s,
        });
}
function U(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        widgetEdited: n,
        gameIds: a,
        tags: u,
        numCharactersCommentary: o,
        isWidgetRemoved: _,
    } = e;
    C({ ...e, action: "EDIT_SAVED" }),
        c.default.track(A.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...b(e),
            location_stack: l,
            widget_edited: n,
            game_ids: a,
            tags: u,
            num_characters_commentary: o,
            is_widget_removed: _,
        });
}
function w(e) {
    let { guildId: t, channelId: i, analyticsLocations: l, action: n, wishlistId: a, skuId: u, productLines: o } = e;
    C({ ...e, action: n }),
        c.default.track(A.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...b(e),
            location_stack: l,
            action_type: n,
            wishlist_id: a,
            sku_id: u,
            product_lines: null != o ? Array.from(o) : [],
        });
}
