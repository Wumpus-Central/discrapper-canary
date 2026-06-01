i.d(t, {
    nR: () => F,
    Wn: () => C,
    vP: () => R,
    pT: () => b,
    un: () => w,
    wd: () => S,
    Tu: () => O,
    UI: () => v,
    am: () => k,
}),
    i(321073);
var r = i(95561),
    l = i(982240),
    n = i(427358),
    a = i(616356),
    u = i(546183),
    o = i(696451),
    s = i(290863),
    _ = i(994500),
    d = i(287809),
    c = i(174459),
    p = i(486020),
    f = i(841595);
let g = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var A = i(999291),
    m = i(518477),
    E = i(652215),
    h = i(818348);
let I = (e) => {
        let { user: t, userProfile: i, guildMember: r, guildMemberProfile: l } = e,
            n = i ?? l,
            a = [];
        if ((r?.nick && a.push(m.d6.NICKNAME), n?.pronouns && a.push(m.d6.PRONOUNS), t?.avatar)) {
            let e = (0, p.VI)(t?.avatar);
            a.push(e ? m.d6.ANIMATED_AVATAR : m.d6.AVATAR);
        }
        if (n?.banner) {
            let e = (0, p.VI)(n?.banner);
            a.push(e ? m.d6.ANIMATED_BANNER : m.d6.BANNER);
        }
        return (
            n?.bio && a.push(m.d6.BIO),
            n?.themeColors != null && void 0 !== n.themeColors.find((e) => null !== e) && a.push(m.d6.THEME),
            t?.avatarDecoration != null && a.push(m.d6.AVATAR_DECORATION),
            n?.profileEffect != null && a.push(m.d6.PROFILE_EFFECT),
            a
        );
    },
    T = (e) => {
        var t;
        let i,
            r,
            { layout: l, userId: n, guildId: a, sessionId: u, sourceSessionId: _, showGuildProfile: c = !0 } = e,
            p = d.default.getUser(n);
        if (null == p) return {};
        let f = (0, A.AP)(p?.id, c ? a : void 0),
            g = c && null != a ? o.Ay.getMember(a, p?.id) : null;
        return {
            profile_layout: l,
            profile_session_id: u,
            source_profile_session_id: _,
            profile_properties: I({ user: p, userProfile: f?._userProfile }),
            guild_profile_properties: I({ guildMember: g, guildMemberProfile: f?._guildMemberProfile }),
            profile_activity_types: s.A.getActivities(p.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                f
                    ?.getBadges()
                    ?.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                    .filter((e) => "string" == typeof e) ?? [],
            avatar_decoration_sku_id: p.avatarDecoration?.skuId,
            profile_effect_sku_id: f?.profileEffect?.skuId,
            user_status:
                ((t = p.id),
                (i = s.A.getStatus(t)),
                (r = s.A.isMobileOnline(t)),
                i === h.cl.ONLINE && r ? `${i}-mobile` : i === h.cl.ONLINE ? `${i}-desktop` : i),
            is_guild_profile: f?.guildId != null,
            is_bot_profile: p.bot,
            is_private_to_viewer: f?.private ?? !1,
        };
    },
    v = (e) => {
        let { userId: t } = e;
        if (null == t) return {};
        let i = n.A.getUserAffinity(t);
        return {
            related_user_id: t,
            relationship_type: _.A.getRelationshipType(t),
            related_since: _.A.getSince(t),
            num_mutual_friends: f.A.getMutualFriendsCount(t),
            num_mutual_guilds: f.A.getMutualGuilds(t)?.length,
            communication_probability: i?.communicationProbability,
            communication_rank: i?.communicationRank,
        };
    },
    y = (e) => ({
        application_id: e,
        application_linked:
            null != e && u.default.getFetchStateForApplication(e) === u.FetchState.FETCHED
                ? null != u.default.getNewestTokenForApplication(e)
                : null,
    }),
    C = (e) => {
        let {
            guildId: t,
            channelId: i,
            messageId: l,
            roleId: n,
            widgetType: a,
            analyticsLocations: u,
            action: o,
            section: s,
            applicationId: _,
        } = e;
        c.default.track(E.HAw.USER_PROFILE_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...T(e),
            ...v(e),
            ...y(_),
            location_stack: u,
            profile_action: o,
            profile_section: s,
            source_message_id: l,
            source_role_id: n,
            widget_type: a,
        });
    },
    S = (e) => {
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
            viewStartedAt: a,
            fetchStartedAt: u,
            timeToInteractiveMs: o,
            timeToLoadMs: s,
            timeToFetchMs: _,
        } = e;
        (o ?? 0) <= 0 ||
            (s ?? 0) <= 0 ||
            (_ ?? 0) <= 0 ||
            c.default.track(E.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...T(e),
                ...v(e),
                location_stack: l,
                profile_ui: n,
                view_started_at: a,
                fetch_started_at: u,
                time_to_interactive_ms: o,
                time_to_load_ms: s,
                time_to_fetch_ms: _,
            });
    },
    O = (e) => {
        var t;
        let {
            guildId: i,
            channelId: l,
            analyticsLocations: n,
            action: a,
            display: u,
            activity: o,
            stream: s,
            entry: _,
            outbox: d,
            voiceChannelId: p,
        } = e;
        c.default.track(E.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(l),
            ...T(e),
            ...v(e),
            location_stack: n,
            activity_action: a,
            activity_display: u,
            activity_type:
                null == (t = null != s ? E.$pd.STREAMING : o?.type)
                    ? t
                    : "VOICE" === t
                      ? "VOICE"
                      : Object.keys(E.$pd)[Object.values(E.$pd).indexOf(t)],
            activity_name: o?.name,
            activity_platform: o?.platform,
            activity_session_id: o?.session_id,
            activity_application_id: o?.application_id,
            item_id: _?.id,
            author_id_v2: _?.author_id,
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
    },
    R = (e) => {
        let { guildId: t, channelId: i, analyticsLocations: n, badgeId: a, badgeAction: u, position: o, userId: s } = e,
            _ = null != a && null != s ? l.Ay.getBadgeById(a, s)?.current_tier : void 0;
        c.default.track(E.HAw.USER_PROFILE_BADGE_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...T(e),
            ...v(e),
            location_stack: n,
            badge_action: u,
            badge_id: a,
            badge_tier: _,
            position: o,
        });
    },
    k = (e) => {
        let { displayProfile: t, isProfileOpen: i } = e,
            r = t?.userId,
            l =
                null != r
                    ? s.A.findActivity(r, (e) => {
                          let { type: t } = e;
                          return null != a.A.getAnyStreamForUser(r) ? t === E.$pd.PLAYING : t !== E.$pd.CUSTOM_STATUS;
                      })
                    : null;
        c.default.track(E.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: i,
            has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
            is_friend: _.A.isFriend(r),
            viewed_profile_user_id: r,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    w = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            action: n,
            widgetEdited: a,
            gameId: u,
            numResults: o,
            numCharacters: s,
            applicationId: _,
        } = e;
        C({ ...e, action: n }),
            c.default.track(E.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...T(e),
                ...y(_),
                location_stack: l,
                edit_action: n,
                widget_edited: a,
                game_id: u,
                num_results: o,
                num_characters: s,
                application_id: _,
            });
    },
    b = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            widgetEdited: n,
            gameIds: a,
            tags: u,
            numCharactersCommentary: o,
            isWidgetRemoved: s,
        } = e;
        C({ ...e, action: "EDIT_SAVED" }),
            c.default.track(E.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...T(e),
                location_stack: l,
                widget_edited: n,
                game_ids: a,
                tags: u,
                num_characters_commentary: o,
                is_widget_removed: s,
            });
    },
    F = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            action: n,
            wishlistId: a,
            skuId: u,
            productLines: o,
        } = e;
        C({ ...e, action: n }),
            c.default.track(E.HAw.USER_PROFILE_WISHLIST_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...T(e),
                location_stack: l,
                action_type: n,
                wishlist_id: a,
                sku_id: u,
                product_lines: null != o ? Array.from(o) : [],
            });
    };
