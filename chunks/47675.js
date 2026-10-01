(i.d(t, {
    XH: () => h,
    Wn: () => T,
    CD: () => O,
    vP: () => C,
    pT: () => S,
    nR: () => w,
    un: () => P,
    wd: () => R,
    Tu: () => b,
    UI: () => y,
    am: () => N,
}),
    i(321073));
var a = i(95561),
    l = i(982240),
    n = i(733110),
    r = i(427358),
    o = i(616356),
    _ = i(696451),
    u = i(290863),
    s = i(994500),
    d = i(287809),
    c = i(174459),
    p = i(486020),
    f = i(321191);
let m = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var A = i(999291),
    E = i(518477),
    g = i(652215),
    I = i(818348);
function h(e) {
    let { user: t, userProfile: i, guildMember: a, guildMemberProfile: l } = e,
        n = i ?? l,
        r = [];
    if ((a?.nick && r.push(E.d6.NICKNAME), n?.pronouns && r.push(E.d6.PRONOUNS), t?.avatar)) {
        let e = (0, p.VI)(t?.avatar);
        r.push(e ? E.d6.ANIMATED_AVATAR : E.d6.AVATAR);
    }
    if (n?.banner) {
        let e = (0, p.VI)(n?.banner);
        r.push(e ? E.d6.ANIMATED_BANNER : E.d6.BANNER);
    }
    return (
        n?.bio && r.push(E.d6.BIO),
        n?.themeColors != null && void 0 !== n.themeColors.find((e) => null !== e) && r.push(E.d6.THEME),
        t?.avatarDecoration != null && r.push(E.d6.AVATAR_DECORATION),
        n?.profileEffect != null && r.push(E.d6.PROFILE_EFFECT),
        r
    );
}
function O(e) {
    let t = u.A.getStatus(e),
        i = u.A.isMobileOnline(e);
    return t === I.cl.ONLINE && i ? `${t}-mobile` : t === I.cl.ONLINE ? `${t}-desktop` : t;
}
function v(e) {
    let { layout: t, userId: i, guildId: a, sessionId: l, sourceSessionId: n, showGuildProfile: r = !0 } = e,
        o = d.default.getUser(i);
    if (null == o) return {};
    let s = (0, A.AP)(o?.id, r ? a : void 0),
        c = r && null != a ? _.Ay.getMember(a, o?.id) : null;
    return {
        profile_layout: t,
        profile_session_id: l,
        source_profile_session_id: n,
        profile_properties: h({ user: o, userProfile: s?._userProfile }),
        guild_profile_properties: h({ guildMember: c, guildMemberProfile: s?._guildMemberProfile }),
        profile_activity_types: u.A.getActivities(o.id)
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
        avatar_decoration_sku_id: o.avatarDecoration?.skuId,
        profile_effect_sku_id: s?.profileEffect?.skuId,
        profile_frame_sku_id: s?.profileFrame?.skuId,
        user_status: O(o.id),
        is_guild_profile: s?.guildId != null,
        is_bot_profile: o.bot,
        is_private_to_viewer: s?.private ?? !1,
    };
}
function y(e) {
    let { userId: t } = e;
    if (null == t) return {};
    let i = r.A.getUserAffinity(t);
    return {
        related_user_id: t,
        relationship_type: s.A.getRelationshipType(t),
        related_since: s.A.getSince(t),
        num_mutual_friends: f.A.getMutualFriendsCount(t),
        num_mutual_guilds: f.A.getMutualGuilds(t)?.length,
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
function T(e) {
    let {
        guildId: t,
        channelId: i,
        messageId: l,
        roleId: n,
        widgetType: r,
        analyticsLocations: o,
        action: _,
        section: u,
        applicationId: s,
    } = e;
    c.default.track(g.HAw.USER_PROFILE_ACTION, {
        ...(0, a.H$)(t),
        ...(0, a.Ou)(i),
        ...v(e),
        ...y(e),
        ...k(s),
        location_stack: o,
        profile_action: _,
        profile_section: u,
        source_message_id: l,
        source_role_id: n,
        widget_type: r,
    });
}
function R(e) {
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
        viewStartedAt: r,
        fetchStartedAt: o,
        timeToInteractiveMs: _,
        timeToLoadMs: u,
        timeToFetchMs: s,
    } = e;
    (_ ?? 0) <= 0 ||
        (u ?? 0) <= 0 ||
        (s ?? 0) <= 0 ||
        c.default.track(g.HAw.USER_PROFILE_UI_VIEWED, {
            ...(0, a.H$)(t),
            ...(0, a.Ou)(i),
            ...v(e),
            ...y(e),
            location_stack: l,
            profile_ui: n,
            view_started_at: r,
            fetch_started_at: o,
            time_to_interactive_ms: _,
            time_to_load_ms: u,
            time_to_fetch_ms: s,
        });
}
function b(e) {
    var t;
    let {
        guildId: i,
        channelId: l,
        analyticsLocations: n,
        action: r,
        display: o,
        activity: _,
        stream: u,
        entry: s,
        outbox: d,
        voiceChannelId: p,
    } = e;
    c.default.track(g.HAw.USER_PROFILE_ACTIVITY_ACTION, {
        ...(0, a.H$)(i),
        ...(0, a.Ou)(l),
        ...v(e),
        ...y(e),
        location_stack: n,
        activity_action: r,
        activity_display: o,
        activity_type:
            null == (t = null != u ? g.$pd.STREAMING : _?.type)
                ? t
                : "VOICE" === t
                  ? "VOICE"
                  : Object.keys(g.$pd)[Object.values(g.$pd).indexOf(t)],
        activity_name: _?.name,
        activity_platform: _?.platform,
        activity_session_id: _?.session_id,
        activity_application_id: _?.application_id,
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
        voice_channel_id: p,
    });
}
function C(e) {
    let { guildId: t, channelId: i, analyticsLocations: n, badgeId: r, badgeAction: o, position: _, userId: u } = e,
        s = null != r && null != u ? l.Ay.getBadgeById(r, u)?.current_tier : void 0;
    c.default.track(g.HAw.USER_PROFILE_BADGE_ACTION, {
        ...(0, a.H$)(t),
        ...(0, a.Ou)(i),
        ...v(e),
        ...y(e),
        location_stack: n,
        badge_action: o,
        badge_id: r,
        badge_tier: s,
        position: _,
    });
}
function N(e) {
    let { displayProfile: t, isProfileOpen: i } = e,
        a = t?.userId,
        l =
            null != a
                ? u.A.findActivity(a, (e) => {
                      let { type: t } = e;
                      return null != o.A.getAnyStreamForUser(a) ? t === g.$pd.PLAYING : t !== g.$pd.CUSTOM_STATUS;
                  })
                : null;
    c.default.track(g.HAw.DM_PROFILE_TOGGLED, {
        ...v({ userId: a }),
        is_profile_open: i,
        has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
        is_friend: s.A.isFriend(a),
        viewed_profile_user_id: a,
        profile_has_nitro_customization: t?.hasPremiumCustomization(),
        profile_has_theme_color_customized: t?.hasThemeColors(),
        profile_has_theme_animation: t?.popoutAnimationParticleType != null,
    });
}
function P(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        action: n,
        widgetEdited: r,
        gameId: o,
        numResults: _,
        numCharacters: u,
        applicationId: s,
    } = e;
    (T({ ...e, action: n }),
        c.default.track(g.HAw.USER_PROFILE_EDIT_ACTION, {
            ...(0, a.H$)(t),
            ...(0, a.Ou)(i),
            ...v(e),
            ...k(s),
            location_stack: l,
            edit_action: n,
            widget_edited: r,
            game_id: o,
            num_results: _,
            num_characters: u,
            application_id: s,
        }));
}
function S(e) {
    let {
        guildId: t,
        channelId: i,
        analyticsLocations: l,
        widgetEdited: n,
        gameIds: r,
        tags: o,
        numCharactersCommentary: _,
        isWidgetRemoved: u,
    } = e;
    (T({ ...e, action: "EDIT_SAVED" }),
        c.default.track(g.HAw.USER_PROFILE_EDIT_SAVED, {
            ...(0, a.H$)(t),
            ...(0, a.Ou)(i),
            ...v(e),
            location_stack: l,
            widget_edited: n,
            game_ids: r,
            tags: o,
            num_characters_commentary: _,
            is_widget_removed: u,
        }));
}
function w(e) {
    let { guildId: t, channelId: i, analyticsLocations: l, action: n, wishlistId: r, skuId: o, productLines: _ } = e;
    (T({ ...e, action: n }),
        c.default.track(g.HAw.USER_PROFILE_WISHLIST_ACTION, {
            ...(0, a.H$)(t),
            ...(0, a.Ou)(i),
            ...v(e),
            location_stack: l,
            action_type: n,
            wishlist_id: r,
            sku_id: o,
            product_lines: null != _ ? Array.from(_) : [],
        }));
}
