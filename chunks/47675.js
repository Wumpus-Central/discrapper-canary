"use strict";
n.d(t, {
    sQ: () => y,
    Wn: () => N,
    nR: () => b,
    pT: () => L,
    un: () => D,
    wd: () => C,
    Tu: () => R,
    R9: () => O,
    UI: () => T,
    am: () => v,
}),
    n(321073);
var i = n(58149),
    r = n(427358),
    s = n(616356),
    a = n(546183),
    o = n(696451),
    l = n(290863),
    d = n(994500),
    _ = n(287809),
    u = n(954571),
    c = n(486020),
    E = n(841595);
let h = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var m = n(999291),
    f = n(518477),
    g = n(652215),
    p = n(818348);
let A = (e) => {
        let { user: t, userProfile: n, guildMember: i, guildMemberProfile: r } = e,
            s = n ?? r,
            a = [];
        if ((i?.nick && a.push(f.d6.NICKNAME), s?.pronouns && a.push(f.d6.PRONOUNS), t?.avatar)) {
            let e = (0, c.VI)(t?.avatar);
            a.push(e ? f.d6.ANIMATED_AVATAR : f.d6.AVATAR);
        }
        if (s?.banner) {
            let e = (0, c.VI)(s?.banner);
            a.push(e ? f.d6.ANIMATED_BANNER : f.d6.BANNER);
        }
        return (
            s?.bio && a.push(f.d6.BIO),
            s?.themeColors != null && void 0 !== s.themeColors.find((e) => null !== e) && a.push(f.d6.THEME),
            t?.avatarDecoration != null && a.push(f.d6.AVATAR_DECORATION),
            s?.profileEffect != null && a.push(f.d6.PROFILE_EFFECT),
            a
        );
    },
    I = (e) => {
        var t;
        let n,
            i,
            { layout: r, userId: s, guildId: a, sessionId: d, sourceSessionId: u, showGuildProfile: c = !0 } = e,
            E = _.default.getUser(s);
        if (null == E) return {};
        let h = (0, m.AP)(E?.id, c ? a : void 0),
            f = c && null != a ? o.Ay.getMember(a, E?.id) : null;
        return {
            profile_layout: r,
            profile_session_id: d,
            source_profile_session_id: u,
            profile_properties: A({ user: E, userProfile: h?._userProfile }),
            guild_profile_properties: A({ guildMember: f, guildMemberProfile: h?._guildMemberProfile }),
            profile_activity_types: l.A.getActivities(E.id)
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
            avatar_decoration_sku_id: E.avatarDecoration?.skuId,
            profile_effect_sku_id: h?.profileEffect?.skuId,
            user_status:
                ((t = E.id),
                (n = l.A.getStatus(t)),
                (i = l.A.isMobileOnline(t)),
                n === p.cl.ONLINE && i ? `${n}-mobile` : n === p.cl.ONLINE ? `${n}-desktop` : n),
            is_guild_profile: h?.guildId != null,
            is_bot_profile: E.bot,
            is_private_to_viewer: h?.private ?? !1,
        };
    },
    T = (e) => {
        let { userId: t } = e;
        if (null == t) return {};
        let n = r.A.getUserAffinity(t);
        return {
            related_user_id: t,
            relationship_type: d.A.getRelationshipType(t),
            related_since: d.A.getSince(t),
            num_mutual_friends: E.A.getMutualFriendsCount(t),
            num_mutual_guilds: E.A.getMutualGuilds(t)?.length,
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
            section: d,
            applicationId: _,
        } = e;
        u.default.track(g.HAw.USER_PROFILE_ACTION, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...I(e),
            ...T(e),
            ...S(_),
            location_stack: o,
            profile_action: l,
            profile_section: d,
            source_message_id: r,
            source_role_id: s,
            widget_type: a,
        });
    },
    C = (e) => {
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
            timeToLoadMs: d,
            timeToFetchMs: _,
        } = e;
        (l ?? 0) <= 0 ||
            (d ?? 0) <= 0 ||
            (_ ?? 0) <= 0 ||
            u.default.track(g.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                ...T(e),
                location_stack: r,
                profile_ui: s,
                view_started_at: a,
                fetch_started_at: o,
                time_to_interactive_ms: l,
                time_to_load_ms: d,
                time_to_fetch_ms: _,
            });
    },
    R = (e) => {
        var t;
        let {
            guildId: n,
            channelId: r,
            analyticsLocations: s,
            action: a,
            display: o,
            activity: l,
            stream: d,
            entry: _,
            outbox: c,
            voiceChannelId: E,
        } = e;
        u.default.track(g.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, i.H$)(n),
            ...(0, i.Ou)(r),
            ...I(e),
            ...T(e),
            location_stack: s,
            activity_action: a,
            activity_display: o,
            activity_type:
                null == (t = null != d ? g.$pd.STREAMING : l?.type)
                    ? t
                    : "VOICE" === t
                      ? "VOICE"
                      : Object.keys(g.$pd)[Object.values(g.$pd).indexOf(t)],
            activity_name: l?.name,
            activity_platform: l?.platform,
            activity_session_id: l?.session_id,
            activity_application_id: l?.application_id,
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
            voice_channel_id: E,
        });
    },
    O = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, badge: s } = e;
        u.default.track(g.HAw.USER_PROFILE_BADGE_PRESSED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...I(e),
            ...T(e),
            location_stack: r,
            badge: s,
        });
    },
    y = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, badge: s } = e;
        u.default.track(g.HAw.USER_PROFILE_BADGE_HOVERED, {
            ...(0, i.H$)(t),
            ...(0, i.Ou)(n),
            ...I(e),
            ...T(e),
            location_stack: r,
            badge: s,
        });
    },
    v = (e) => {
        let { displayProfile: t, isProfileOpen: n } = e,
            i = t?.userId,
            r =
                null != i
                    ? l.A.findActivity(i, (e) => {
                          let { type: t } = e;
                          return null != s.A.getAnyStreamForUser(i) ? t === g.$pd.PLAYING : t !== g.$pd.CUSTOM_STATUS;
                      })
                    : null;
        u.default.track(g.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: n,
            has_images: !!(r?.assets?.large_image ?? r?.assets?.small_image),
            is_friend: d.A.isFriend(i),
            viewed_profile_user_id: i,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    D = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: r,
            action: s,
            widgetEdited: a,
            gameId: o,
            numResults: l,
            numCharacters: d,
            applicationId: _,
        } = e;
        N({ ...e, action: s }),
            u.default.track(g.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                ...S(_),
                location_stack: r,
                edit_action: s,
                widget_edited: a,
                game_id: o,
                num_results: l,
                num_characters: d,
                application_id: _,
            });
    },
    L = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: r,
            widgetEdited: s,
            gameIds: a,
            tags: o,
            numCharactersCommentary: l,
            isWidgetRemoved: d,
        } = e;
        N({ ...e, action: "EDIT_SAVED" }),
            u.default.track(g.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, i.H$)(t),
                ...(0, i.Ou)(n),
                ...I(e),
                location_stack: r,
                widget_edited: s,
                game_ids: a,
                tags: o,
                num_characters_commentary: l,
                is_widget_removed: d,
            });
    },
    b = (e) => {
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
            u.default.track(g.HAw.USER_PROFILE_WISHLIST_ACTION, {
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
