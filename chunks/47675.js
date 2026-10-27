(n.d(t, {
    XH: () => m,
    Wn: () => O,
    CD: () => g,
    vP: () => y,
    pT: () => b,
    nR: () => P,
    un: () => v,
    wd: () => R,
    Tu: () => L,
    UI: () => N,
    am: () => D,
}),
    n(321073));
var i = n(666860),
    r = n(982240),
    a = n(733110),
    s = n(427358),
    l = n(616356),
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
var f = n(999291),
    I = n(518477),
    p = n(652215),
    T = n(818348);
function m(e) {
    let { user: t, userProfile: n, guildMember: i, guildMemberProfile: r } = e,
        a = n ?? r,
        s = [];
    if ((i?.nick && s.push(I.d6.NICKNAME), a?.pronouns && s.push(I.d6.PRONOUNS), t?.avatar)) {
        let e = (0, E.VI)(t?.avatar);
        s.push(e ? I.d6.ANIMATED_AVATAR : I.d6.AVATAR);
    }
    if (a?.banner) {
        let e = (0, E.VI)(a?.banner);
        s.push(e ? I.d6.ANIMATED_BANNER : I.d6.BANNER);
    }
    return (
        a?.bio && s.push(I.d6.BIO),
        a?.themeColors != null && void 0 !== a.themeColors.find((e) => null !== e) && s.push(I.d6.THEME),
        t?.avatarDecoration != null && s.push(I.d6.AVATAR_DECORATION),
        a?.profileEffect != null && s.push(I.d6.PROFILE_EFFECT),
        s
    );
}
function g(e) {
    let t = d.A.getStatus(e),
        n = d.A.isMobileOnline(e);
    return t === T.cl.ONLINE && n ? `${t}-mobile` : t === T.cl.ONLINE ? `${t}-desktop` : t;
}
function S(e) {
    let { layout: t, userId: n, guildId: i, sessionId: r, sourceSessionId: a, showGuildProfile: s = !0 } = e,
        l = u.default.getUser(n);
    if (null == l) return {};
    let c = (0, f.AP)(l?.id, s ? i : void 0),
        _ = s && null != i ? o.Ay.getMember(i, l?.id) : null;
    return {
        profile_layout: t,
        profile_session_id: r,
        source_profile_session_id: a,
        profile_properties: m({ user: l, userProfile: c?._userProfile }),
        guild_profile_properties: m({ guildMember: _, guildMemberProfile: c?._guildMemberProfile }),
        profile_activity_types: d.A.getActivities(l.id)
            .map((e) => {
                let { type: t } = e;
                return t;
            })
            .filter((e) => void 0 !== e),
        profile_badges:
            c
                ?.getBadges()
                ?.map((e) => {
                    let { id: t } = e;
                    return t;
                })
                .filter((e) => "string" == typeof e) ?? [],
        avatar_decoration_sku_id: l.avatarDecoration?.skuId,
        profile_effect_sku_id: c?.profileEffect?.skuId,
        profile_frame_sku_id: c?.profileFrame?.skuId,
        user_status: g(l.id),
        is_guild_profile: c?.guildId != null,
        is_bot_profile: l.bot,
        is_private_to_viewer: c?.private ?? !1,
    };
}
function N(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let n = s.A.getUserAffinity(t);
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
function C(e) {
    return {
        application_id: e,
        application_linked:
            null != e && a.default.getFetchStateForApplication(e) === a.FetchState.FETCHED
                ? null != a.default.getNewestTokenForApplication(e)
                : null,
    };
}
function O(e) {
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
        ...S(e),
        ...N(e),
        ...C(c),
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
            ...S(e),
            ...N(e),
            location_stack: r,
            profile_ui: a,
            view_started_at: s,
            fetch_started_at: l,
            time_to_interactive_ms: o,
            time_to_load_ms: d,
            time_to_fetch_ms: c,
        });
}
function L(e) {
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
        ...S(e),
        ...N(e),
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
function y(e) {
    let { guildId: t, channelId: n, analyticsLocations: a, badgeId: s, badgeAction: l, position: o, userId: d } = e,
        c = null != s && null != d ? r.Ay.getBadgeById(s, d)?.current_tier : void 0;
    _.default.track(p.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, i.H$)(t),
        ...(0, i.Ou)(n),
        ...S(e),
        ...N(e),
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
                      return null != l.A.getAnyStreamForUser(i) ? t === p.$pd.PLAYING : t !== p.$pd.CUSTOM_STATUS;
                  })
                : null;
    _.default.track(p.HAw.DM_PROFILE_TOGGLED, {
        ...S({ userId: i }),
        is_profile_open: n,
        has_images: !!(r?.assets?.large_image ?? r?.assets?.small_image),
        is_friend: c.A.isFriend(i),
        viewed_profile_user_id: i,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function v(e) {
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
    (O({ ...e, action: a }),
        _.default.track(p.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...S(e),
            ...C(c),
            location_stack: r,
            edit_action: a,
            widget_edited: s,
            game_id: l,
            num_results: o,
            num_characters: d,
            application_id: c,
        }));
}
function b(e) {
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
    (O({ ...e, action: "EDIT_SAVED" }),
        _.default.track(p.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...S(e),
            location_stack: r,
            widget_edited: a,
            game_ids: s,
            tags: l,
            num_characters_commentary: o,
            is_widget_removed: d,
        }));
}
function P(e) {
    let { guildId: t, channelId: n, analyticsLocations: r, action: a, wishlistId: s, skuId: l, productLines: o } = e;
    (O({ ...e, action: a }),
        _.default.track(p.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...S(e),
            location_stack: r,
            action_type: a,
            wishlist_id: s,
            sku_id: l,
            product_lines: null != o ? Array.from(o) : [],
        }));
}
