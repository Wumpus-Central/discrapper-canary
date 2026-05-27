"use strict";
n.d(t, {
    sQ: () => O,
    Wn: () => N,
    nR: () => L,
    pT: () => D,
    un: () => b,
    wd: () => y,
    Tu: () => C,
    R9: () => v,
    UI: () => T,
    am: () => R,
}),
    n(321073);
var i = n(95561),
    r = n(427358),
    s = n(616356),
    a = n(546183),
    o = n(696451),
    l = n(290863),
    u = n(994500),
    c = n(287809),
    d = n(174459),
    _ = n(486020),
    f = n(841595);
let h = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var p = n(999291),
    E = n(518477),
    m = n(652215),
    g = n(818348);
let A = (e) => {
        let { user: t, userProfile: n, guildMember: i, guildMemberProfile: r } = e,
            s = n ?? r,
            a = [];
        if ((i?.nick && a.push(E.d6.NICKNAME), s?.pronouns && a.push(E.d6.PRONOUNS), t?.avatar)) {
            let e = (0, _.VI)(t?.avatar);
            a.push(e ? E.d6.ANIMATED_AVATAR : E.d6.AVATAR);
        }
        if (s?.banner) {
            let e = (0, _.VI)(s?.banner);
            a.push(e ? E.d6.ANIMATED_BANNER : E.d6.BANNER);
        }
        return (
            s?.bio && a.push(E.d6.BIO),
            s?.themeColors != null && void 0 !== s.themeColors.find((e) => null !== e) && a.push(E.d6.THEME),
            t?.avatarDecoration != null && a.push(E.d6.AVATAR_DECORATION),
            s?.profileEffect != null && a.push(E.d6.PROFILE_EFFECT),
            a
        );
    },
    I = (e) => {
        var t;
        let n,
            i,
            { layout: r, userId: s, guildId: a, sessionId: u, sourceSessionId: d, showGuildProfile: _ = !0 } = e,
            f = c.default.getUser(s);
        if (null == f) return {};
        let h = (0, p.AP)(f?.id, _ ? a : void 0),
            E = _ && null != a ? o.Ay.getMember(a, f?.id) : null;
        return {
            profile_layout: r,
            profile_session_id: u,
            source_profile_session_id: d,
            profile_properties: A({ user: f, userProfile: h?._userProfile }),
            guild_profile_properties: A({ guildMember: E, guildMemberProfile: h?._guildMemberProfile }),
            profile_activity_types: l.A.getActivities(f.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                h
                    ?.getBadges()
                    ?.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                    .filter((e) => "string" == typeof e) ?? [],
            avatar_decoration_sku_id: f.avatarDecoration?.skuId,
            profile_effect_sku_id: h?.profileEffect?.skuId,
            user_status:
                ((t = f.id),
                (n = l.A.getStatus(t)),
                (i = l.A.isMobileOnline(t)),
                n === g.cl.ONLINE && i ? `${n}-mobile` : n === g.cl.ONLINE ? `${n}-desktop` : n),
            is_guild_profile: h?.guildId != null,
            is_bot_profile: f.bot,
            is_private_to_viewer: h?.private ?? !1,
        };
    },
    T = (e) => {
        let { userId: t } = e;
        if (null == t) return {};
        let n = r.A.getUserAffinity(t);
        return {
            related_user_id: t,
            relationship_type: u.A.getRelationshipType(t),
            related_since: u.A.getSince(t),
            num_mutual_friends: f.A.getMutualFriendsCount(t),
            num_mutual_guilds: f.A.getMutualGuilds(t)?.length,
            communication_probability: n?.communicationProbability,
            communication_rank: n?.communicationRank,
        };
    },
    S = (e) => ({
        application_id: e,
        application_linked:
            null != e && a.default.getFetchStateForApplication(e) === a.FetchState.FETCHED
                ? null != a.default.getNewestTokenForApplication(e)
                : null,
    }),
    N = (e) => {
        let {
            guildId: t,
            channelId: n,
            messageId: r,
            roleId: s,
            widgetType: a,
            analyticsLocations: o,
            action: l,
            section: u,
            applicationId: c,
        } = e;
        d.default.track(m.HAw.USER_PROFILE_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...I(e),
            ...T(e),
            ...S(c),
            location_stack: o,
            profile_action: l,
            profile_section: u,
            source_message_id: r,
            source_role_id: s,
            widget_type: a,
        });
    },
    y = (e) => {
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
            profileUi: s,
            viewStartedAt: a,
            fetchStartedAt: o,
            timeToInteractiveMs: l,
            timeToLoadMs: u,
            timeToFetchMs: c,
        } = e;
        (l ?? 0) <= 0 ||
            (u ?? 0) <= 0 ||
            (c ?? 0) <= 0 ||
            d.default.track(m.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                ...T(e),
                location_stack: r,
                profile_ui: s,
                view_started_at: a,
                fetch_started_at: o,
                time_to_interactive_ms: l,
                time_to_load_ms: u,
                time_to_fetch_ms: c,
            });
    },
    C = (e) => {
        var t;
        let {
            guildId: n,
            channelId: r,
            analyticsLocations: s,
            action: a,
            display: o,
            activity: l,
            stream: u,
            entry: c,
            outbox: _,
            voiceChannelId: f,
        } = e;
        d.default.track(m.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, i.H$)(n),
            ...(0, i.Ou)(r),
            ...I(e),
            ...T(e),
            location_stack: s,
            activity_action: a,
            activity_display: o,
            activity_type:
                null == (t = null != u ? m.$pd.STREAMING : l?.type)
                    ? t
                    : "VOICE" === t
                      ? "VOICE"
                      : Object.keys(m.$pd)[Object.values(m.$pd).indexOf(t)],
            activity_name: l?.name,
            activity_platform: l?.platform,
            activity_session_id: l?.session_id,
            activity_application_id: l?.application_id,
            item_id: c?.id,
            author_id_v2: c?.author_id,
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
    },
    v = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, badge: s } = e;
        d.default.track(m.HAw.USER_PROFILE_BADGE_PRESSED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...I(e),
            ...T(e),
            location_stack: r,
            badge: s,
        });
    },
    O = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, badge: s } = e;
        d.default.track(m.HAw.USER_PROFILE_BADGE_HOVERED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...I(e),
            ...T(e),
            location_stack: r,
            badge: s,
        });
    },
    R = (e) => {
        let { displayProfile: t, isProfileOpen: n } = e,
            i = t?.userId,
            r =
                null != i
                    ? l.A.findActivity(i, (e) => {
                          let { type: t } = e;
                          return null != s.A.getAnyStreamForUser(i) ? t === m.$pd.PLAYING : t !== m.$pd.CUSTOM_STATUS;
                      })
                    : null;
        d.default.track(m.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: n,
            has_images: !!(r?.assets?.large_image ?? r?.assets?.small_image),
            is_friend: u.A.isFriend(i),
            viewed_profile_user_id: i,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    b = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: r,
            action: s,
            widgetEdited: a,
            gameId: o,
            numResults: l,
            numCharacters: u,
            applicationId: c,
        } = e;
        N({ ...e, action: s }),
            d.default.track(m.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                ...S(c),
                location_stack: r,
                edit_action: s,
                widget_edited: a,
                game_id: o,
                num_results: l,
                num_characters: u,
                application_id: c,
            });
    },
    D = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: r,
            widgetEdited: s,
            gameIds: a,
            tags: o,
            numCharactersCommentary: l,
            isWidgetRemoved: u,
        } = e;
        N({ ...e, action: "EDIT_SAVED" }),
            d.default.track(m.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                location_stack: r,
                widget_edited: s,
                game_ids: a,
                tags: o,
                num_characters_commentary: l,
                is_widget_removed: u,
            });
    },
    L = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: r,
            action: s,
            wishlistId: a,
            skuId: o,
            productLines: l,
        } = e;
        N({ ...e, action: s }),
            d.default.track(m.HAw.USER_PROFILE_WISHLIST_ACTION, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                location_stack: r,
                action_type: s,
                wishlist_id: a,
                sku_id: o,
                product_lines: null != l ? Array.from(l) : [],
            });
    };
