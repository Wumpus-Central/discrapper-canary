(n.d(t, {
    XH: () => g,
    Wn: () => R,
    CD: () => S,
    vP: () => D,
    pT: () => P,
    nR: () => M,
    un: () => b,
    wd: () => L,
    Tu: () => y,
    UI: () => C,
    am: () => v,
}),
    n(321073));
var i = n(350835),
    r = n(666860),
    a = n(982240),
    s = n(733110),
    l = n(427358),
    o = n(616356),
    d = n(696451),
    c = n(290863),
    u = n(994500),
    _ = n(287809),
    E = n(174459),
    A = n(486020),
    h = n(321191);
let f = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var I = n(999291),
    p = n(518477),
    T = n(652215),
    m = n(818348);
function g(e) {
    let { user: t, userProfile: n, guildMember: i, guildMemberProfile: r } = e,
        a = n ?? r,
        s = [];
    if ((i?.nick && s.push(p.d6.NICKNAME), a?.pronouns && s.push(p.d6.PRONOUNS), t?.avatar)) {
        let e = (0, A.VI)(t?.avatar);
        s.push(e ? p.d6.ANIMATED_AVATAR : p.d6.AVATAR);
    }
    if (a?.banner) {
        let e = (0, A.VI)(a?.banner);
        s.push(e ? p.d6.ANIMATED_BANNER : p.d6.BANNER);
    }
    return (
        a?.bio && s.push(p.d6.BIO),
        a?.themeColors != null && void 0 !== a.themeColors.find((e) => null !== e) && s.push(p.d6.THEME),
        t?.avatarDecoration != null && s.push(p.d6.AVATAR_DECORATION),
        a?.profileEffect != null && s.push(p.d6.PROFILE_EFFECT),
        s
    );
}
function S(e) {
    let t = c.A.getStatus(e),
        n = c.A.isMobileOnline(e);
    return t === m.cl.ONLINE && n ? `${t}-mobile` : t === m.cl.ONLINE ? `${t}-desktop` : t;
}
function N(e) {
    let { layout: t, userId: n, guildId: i, sessionId: r, sourceSessionId: a, showGuildProfile: s = !0 } = e,
        l = _.default.getUser(n);
    if (null == l) return {};
    let o = (0, I.AP)(l?.id, s ? i : void 0),
        u = s && null != i ? d.Ay.getMember(i, l?.id) : null;
    return {
        profile_layout: t,
        profile_session_id: r,
        source_profile_session_id: a,
        profile_properties: g({ user: l, userProfile: o?._userProfile }),
        guild_profile_properties: g({ guildMember: u, guildMemberProfile: o?._guildMemberProfile }),
        profile_activity_types: c.A.getActivities(l.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            o
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: l.avatarDecoration?.skuId,
        profile_effect_sku_id: o?.profileEffect?.skuId,
        profile_frame_sku_id: o?.profileFrame?.skuId,
        user_status: S(l.id),
        is_guild_profile: o?.guildId != null,
        is_bot_profile: l.bot,
        is_private_to_viewer: o?.private ?? !1,
    };
}
function C(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let n = l.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: u.A.getRelationshipType(t),
        related_since: u.A.getSince(t),
        num_mutual_friends: h.A.getMutualFriendsCount(t),
        num_mutual_guilds: h.A.getMutualGuilds(t)?.length,
        communication_probability: n?.communicationProbability,
        communication_rank: n?.communicationRank,
    };
}
function O(e) {
    return {
        application_id: e,
        application_linked:
            null != e && s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED
                ? null != s.default.getNewestTokenForApplication(e)
                : null,
    };
}
function R(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: i,
        roleId: a,
        widgetType: s,
        analyticsLocations: l,
        action: o,
        section: d,
        applicationId: c,
    } = e;
    E.default.track(T.HAw.USER_PROFILE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(n),
        ...N(e),
        ...C(e),
        ...O(c),
        location_stack: l,
        profile_action: o,
        profile_section: d,
        source_message_id: i,
        source_role_id: a,
        widget_type: s,
    });
}
function L(e) {
    if (
        !(function (e) {
            let { performanceAnalyticsEnabled: t } = f.getConfig({ location: e });
            return t;
        })("UserProfileAnalyticsUtils")
    )
        return;
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: i,
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
        E.default.track(T.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...N(e),
            ...C(e),
            location_stack: i,
            profile_ui: a,
            view_started_at: s,
            fetch_started_at: l,
            time_to_interactive_ms: o,
            time_to_load_ms: d,
            time_to_fetch_ms: c,
        });
}
function y(e) {
    var t;
    let {
        guildId: n,
        channelId: a,
        analyticsLocations: s,
        action: l,
        display: o,
        activity: d,
        stream: c,
        entry: u,
        outbox: _,
        voiceChannelId: A,
    } = e;
    E.default.track(T.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, r.H$)(n),
        ...(0, r.Ou)(a),
        ...N(e),
        ...C(e),
        location_stack: s,
        activity_action: l,
        activity_display: o,
        activity_type:
            null == (t = null != c ? i.$.STREAMING : d?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(i.$)[Object.values(i.$).indexOf(t)],
        activity_name: d?.name,
        activity_platform: d?.platform,
        activity_session_id: d?.session_id,
        activity_application_id: d?.application_id,
        item_id: u?.id,
        author_id_v2: u?.author_id,
        item_ids: _?.entries.map((e) => {
            let { id: t } = e;
            return t;
        }),
        author_ids_v2: _?.entries.map((e) => {
            let { author_id: t } = e;
            return t;
        }),
        voice_channel_id: A,
    });
}
function D(e) {
    let { guildId: t, channelId: n, analyticsLocations: i, badgeId: s, badgeAction: l, position: o, userId: d } = e,
        c = null != s && null != d ? a.Ay.getBadgeById(s, d)?.current_tier : void 0;
    E.default.track(T.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, r.H$)(t),
        ...(0, r.Ou)(n),
        ...N(e),
        ...C(e),
        location_stack: i,
        badge_action: l,
        badge_id: s,
        badge_tier: c,
        position: o,
    });
}
function v(e) {
    let { displayProfile: t, isProfileOpen: n } = e,
        r = t?.userId,
        a =
            null != r
                ? c.A.findActivity(r, (e) => {
                      let { type: t } = e;
                      return null != o.A.getAnyStreamForUser(r) ? t === i.$.PLAYING : t !== i.$.CUSTOM_STATUS;
                  })
                : null;
    E.default.track(T.HAw.DM_PROFILE_TOGGLED, {
        ...N({ userId: r }),
        is_profile_open: n,
        has_images: !!(a?.assets?.large_image ?? a?.assets?.small_image),
        is_friend: u.A.isFriend(r),
        viewed_profile_user_id: r,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function b(e) {
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: i,
        action: a,
        widgetEdited: s,
        gameId: l,
        numResults: o,
        numCharacters: d,
        applicationId: c,
    } = e;
    (R({ ...e, action: a }),
        E.default.track(T.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...N(e),
            ...O(c),
            location_stack: i,
            edit_action: a,
            widget_edited: s,
            game_id: l,
            num_results: o,
            num_characters: d,
            application_id: c,
        }));
}
function P(e) {
    let {
        guildId: t,
        channelId: n,
        analyticsLocations: i,
        widgetEdited: a,
        gameIds: s,
        tags: l,
        numCharactersCommentary: o,
        isWidgetRemoved: d,
    } = e;
    (R({ ...e, action: "EDIT_SAVED" }),
        E.default.track(T.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...N(e),
            location_stack: i,
            widget_edited: a,
            game_ids: s,
            tags: l,
            num_characters_commentary: o,
            is_widget_removed: d,
        }));
}
function M(e) {
    let { guildId: t, channelId: n, analyticsLocations: i, action: a, wishlistId: s, skuId: l, productLines: o } = e;
    (R({ ...e, action: a }),
        E.default.track(T.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...N(e),
            location_stack: i,
            action_type: a,
            wishlist_id: s,
            sku_id: l,
            product_lines: null != o ? Array.from(o) : [],
        }));
}
