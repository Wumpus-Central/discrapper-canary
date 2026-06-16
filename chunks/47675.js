i.d(t, {
    nR: () => N,
    Wn: () => O,
    vP: () => b,
    pT: () => S,
    un: () => P,
    wd: () => T,
    Tu: () => R,
    UI: () => k,
    am: () => C,
}),
    i(321073);
var l = i(95561),
    a = i(982240),
    r = i(427358),
    n = i(616356),
    o = i(546183),
    s = i(696451),
    u = i(290863),
    _ = i(994500),
    d = i(287809),
    c = i(174459),
    p = i(486020),
    f = i(841595);
let m = (0, i(945810).mj)({
    kind: "user",
    name: "2026-04-user-profile-performance-analytics",
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    variations: { 0: { performanceAnalyticsEnabled: !1 }, 1: { performanceAnalyticsEnabled: !0 } },
});
var A = i(999291),
    E = i(518477),
    I = i(652215),
    v = i(818348);
let g = (e) => {
        let { user: t, userProfile: i, guildMember: l, guildMemberProfile: a } = e,
            r = i ?? a,
            n = [];
        if ((l?.nick && n.push(E.d6.NICKNAME), r?.pronouns && n.push(E.d6.PRONOUNS), t?.avatar)) {
            let e = (0, p.VI)(t?.avatar);
            n.push(e ? E.d6.ANIMATED_AVATAR : E.d6.AVATAR);
        }
        if (r?.banner) {
            let e = (0, p.VI)(r?.banner);
            n.push(e ? E.d6.ANIMATED_BANNER : E.d6.BANNER);
        }
        return (
            r?.bio && n.push(E.d6.BIO),
            r?.themeColors != null && void 0 !== r.themeColors.find((e) => null !== e) && n.push(E.d6.THEME),
            t?.avatarDecoration != null && n.push(E.d6.AVATAR_DECORATION),
            r?.profileEffect != null && n.push(E.d6.PROFILE_EFFECT),
            n
        );
    },
    h = (e) => {
        var t;
        let i,
            l,
            { layout: a, userId: r, guildId: n, sessionId: o, sourceSessionId: _, showGuildProfile: c = !0 } = e,
            p = d.default.getUser(r);
        if (null == p) return {};
        let f = (0, A.AP)(p?.id, c ? n : void 0),
            m = c && null != n ? s.Ay.getMember(n, p?.id) : null;
        return {
            profile_layout: a,
            profile_session_id: o,
            source_profile_session_id: _,
            profile_properties: g({ user: p, userProfile: f?._userProfile }),
            guild_profile_properties: g({ guildMember: m, guildMemberProfile: f?._guildMemberProfile }),
            profile_activity_types: u.A.getActivities(p.id)
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
                (i = u.A.getStatus(t)),
                (l = u.A.isMobileOnline(t)),
                i === v.cl.ONLINE && l ? `${i}-mobile` : i === v.cl.ONLINE ? `${i}-desktop` : i),
            is_guild_profile: f?.guildId != null,
            is_bot_profile: p.bot,
            is_private_to_viewer: f?.private ?? !1,
        };
    },
    k = (e) => {
        let { userId: t } = e;
        if (null == t) return {};
        let i = r.A.getUserAffinity(t);
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
            null != e && o.default.getFetchStateForApplication(e) === o.FetchState.FETCHED
                ? null != o.default.getNewestTokenForApplication(e)
                : null,
    }),
    O = (e) => {
        let {
            guildId: t,
            channelId: i,
            messageId: a,
            roleId: r,
            widgetType: n,
            analyticsLocations: o,
            action: s,
            section: u,
            applicationId: _,
        } = e;
        c.default.track(I.HAw.USER_PROFILE_ACTION, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...h(e),
            ...k(e),
            ...y(_),
            location_stack: o,
            profile_action: s,
            profile_section: u,
            source_message_id: a,
            source_role_id: r,
            widget_type: n,
        });
    },
    T = (e) => {
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
            analyticsLocations: a,
            profileUi: r,
            viewStartedAt: n,
            fetchStartedAt: o,
            timeToInteractiveMs: s,
            timeToLoadMs: u,
            timeToFetchMs: _,
        } = e;
        (s ?? 0) <= 0 ||
            (u ?? 0) <= 0 ||
            (_ ?? 0) <= 0 ||
            c.default.track(I.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, l.H$)(t),
                ...(0, l.Ou)(i),
                ...h(e),
                ...k(e),
                location_stack: a,
                profile_ui: r,
                view_started_at: n,
                fetch_started_at: o,
                time_to_interactive_ms: s,
                time_to_load_ms: u,
                time_to_fetch_ms: _,
            });
    },
    R = (e) => {
        var t;
        let {
            guildId: i,
            channelId: a,
            analyticsLocations: r,
            action: n,
            display: o,
            activity: s,
            stream: u,
            entry: _,
            outbox: d,
            voiceChannelId: p,
        } = e;
        c.default.track(I.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, l.H$)(i),
            ...(0, l.Ou)(a),
            ...h(e),
            ...k(e),
            location_stack: r,
            activity_action: n,
            activity_display: o,
            activity_type:
                null == (t = null != u ? I.$pd.STREAMING : s?.type)
                    ? t
                    : "VOICE" === t
                      ? "VOICE"
                      : Object.keys(I.$pd)[Object.values(I.$pd).indexOf(t)],
            activity_name: s?.name,
            activity_platform: s?.platform,
            activity_session_id: s?.session_id,
            activity_application_id: s?.application_id,
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
    b = (e) => {
        let { guildId: t, channelId: i, analyticsLocations: r, badgeId: n, badgeAction: o, position: s, userId: u } = e,
            _ = null != n && null != u ? a.Ay.getBadgeById(n, u)?.current_tier : void 0;
        c.default.track(I.HAw.USER_PROFILE_BADGE_ACTION, {
            ...(0, l.H$)(t),
            ...(0, l.Ou)(i),
            ...h(e),
            ...k(e),
            location_stack: r,
            badge_action: o,
            badge_id: n,
            badge_tier: _,
            position: s,
        });
    },
    C = (e) => {
        let { displayProfile: t, isProfileOpen: i } = e,
            l = t?.userId,
            a =
                null != l
                    ? u.A.findActivity(l, (e) => {
                          let { type: t } = e;
                          return null != n.A.getAnyStreamForUser(l) ? t === I.$pd.PLAYING : t !== I.$pd.CUSTOM_STATUS;
                      })
                    : null;
        c.default.track(I.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: i,
            has_images: !!(a?.assets?.large_image ?? a?.assets?.small_image),
            is_friend: _.A.isFriend(l),
            viewed_profile_user_id: l,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    P = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            action: r,
            widgetEdited: n,
            gameId: o,
            numResults: s,
            numCharacters: u,
            applicationId: _,
        } = e;
        O({ ...e, action: r }),
            c.default.track(I.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, l.H$)(t),
                ...(0, l.Ou)(i),
                ...h(e),
                ...y(_),
                location_stack: a,
                edit_action: r,
                widget_edited: n,
                game_id: o,
                num_results: s,
                num_characters: u,
                application_id: _,
            });
    },
    S = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            widgetEdited: r,
            gameIds: n,
            tags: o,
            numCharactersCommentary: s,
            isWidgetRemoved: u,
        } = e;
        O({ ...e, action: "EDIT_SAVED" }),
            c.default.track(I.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, l.H$)(t),
                ...(0, l.Ou)(i),
                ...h(e),
                location_stack: a,
                widget_edited: r,
                game_ids: n,
                tags: o,
                num_characters_commentary: s,
                is_widget_removed: u,
            });
    },
    N = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: a,
            action: r,
            wishlistId: n,
            skuId: o,
            productLines: s,
        } = e;
        O({ ...e, action: r }),
            c.default.track(I.HAw.USER_PROFILE_WISHLIST_ACTION, {
                ...(0, l.H$)(t),
                ...(0, l.Ou)(i),
                ...h(e),
                location_stack: a,
                action_type: r,
                wishlist_id: n,
                sku_id: o,
                product_lines: null != s ? Array.from(s) : [],
            });
    };
