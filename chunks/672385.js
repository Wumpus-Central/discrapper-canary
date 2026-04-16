"use strict";
n.d(t, {
    R9: () => O,
    Tu: () => R,
    UI: () => y,
    Wn: () => N,
    am: () => D,
    nR: () => M,
    pT: () => w,
    sQ: () => b,
    un: () => L,
    wd: () => C,
}),
    n(321073);
var r = n(58149),
    i = n(21119),
    s = n(616356),
    a = n(546183),
    o = n(696451),
    l = n(290863),
    u = n(994500),
    c = n(287809),
    d = n(954571),
    _ = n(486020),
    f = n(622543),
    p = n(36596),
    h = n(950191),
    m = n(518477),
    E = n(652215),
    g = n(818348);
let A = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            s = n ?? i,
            a = [];
        if ((r?.nick && a.push(m.d6.NICKNAME), s?.pronouns && a.push(m.d6.PRONOUNS), t?.avatar)) {
            let e = (0, _.VI)(t?.avatar);
            a.push(e ? m.d6.ANIMATED_AVATAR : m.d6.AVATAR);
        }
        if (s?.banner) {
            let e = (0, _.VI)(s?.banner);
            a.push(e ? m.d6.ANIMATED_BANNER : m.d6.BANNER);
        }
        return (
            s?.bio && a.push(m.d6.BIO),
            s?.themeColors != null && void 0 !== s.themeColors.find((e) => null !== e) && a.push(m.d6.THEME),
            t?.avatarDecoration != null && a.push(m.d6.AVATAR_DECORATION),
            s?.profileEffect != null && a.push(m.d6.PROFILE_EFFECT),
            a
        );
    },
    I = (e) => {
        let t = l.A.getStatus(e),
            n = l.A.isMobileOnline(e);
        return t === g.cl.ONLINE && n ? `${t}-mobile` : t === g.cl.ONLINE ? `${t}-desktop` : t;
    },
    T = (e) => (null == e ? e : "VOICE" === e ? "VOICE" : Object.keys(E.$pd)[Object.values(E.$pd).indexOf(e)]),
    S = (e) => {
        let { layout: t, userId: n, guildId: r, sessionId: i, sourceSessionId: s, showGuildProfile: a = !0 } = e,
            u = c.default.getUser(n);
        if (null == u) return {};
        let d = (0, h.AP)(u?.id, a ? r : void 0),
            _ = a && null != r ? o.Ay.getMember(r, u?.id) : null;
        return {
            profile_layout: t,
            profile_session_id: i,
            source_profile_session_id: s,
            profile_properties: A({ user: u, userProfile: d?._userProfile }),
            guild_profile_properties: A({ guildMember: _, guildMemberProfile: d?._guildMemberProfile }),
            profile_activity_types: l.A.getActivities(u.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                d
                    ?.getBadges()
                    ?.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                    .filter((e) => "string" == typeof e) ?? [],
            avatar_decoration_sku_id: u.avatarDecoration?.skuId,
            profile_effect_sku_id: d?.profileEffect?.skuId,
            user_status: I(u.id),
            is_guild_profile: d?.guildId != null,
            is_bot_profile: u.bot,
            is_private_to_viewer: d?.private ?? !1,
        };
    },
    y = (e) => {
        let { userId: t } = e;
        if (null == t) return {};
        let n = i.A.getUserAffinity(t);
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
    v = (e) => ({
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
            messageId: i,
            roleId: s,
            widgetType: a,
            analyticsLocations: o,
            action: l,
            section: u,
            applicationId: c,
        } = e;
        d.default.track(E.HAw.USER_PROFILE_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...S(e),
            ...y(e),
            ...v(c),
            location_stack: o,
            profile_action: l,
            profile_section: u,
            source_message_id: i,
            source_role_id: s,
            widget_type: a,
        });
    },
    C = (e) => {
        if (!(0, p.i)("UserProfileAnalyticsUtils")) return;
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
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
            d.default.track(E.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...S(e),
                ...y(e),
                location_stack: i,
                profile_ui: s,
                view_started_at: a,
                fetch_started_at: o,
                time_to_interactive_ms: l,
                time_to_load_ms: u,
                time_to_fetch_ms: c,
            });
    },
    R = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: s,
            display: a,
            activity: o,
            stream: l,
            entry: u,
            outbox: c,
            voiceChannelId: _,
        } = e;
        d.default.track(E.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...S(e),
            ...y(e),
            location_stack: i,
            activity_action: s,
            activity_display: a,
            activity_type: T(null != l ? E.$pd.STREAMING : o?.type),
            activity_name: o?.name,
            activity_platform: o?.platform,
            activity_session_id: o?.session_id,
            activity_application_id: o?.application_id,
            item_id: u?.id,
            author_id_v2: u?.author_id,
            item_ids: c?.entries.map((e) => {
                let { id: t } = e;
                return t;
            }),
            author_ids_v2: c?.entries.map((e) => {
                let { author_id: t } = e;
                return t;
            }),
            voice_channel_id: _,
        });
    },
    O = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: s } = e;
        d.default.track(E.HAw.USER_PROFILE_BADGE_PRESSED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...S(e),
            ...y(e),
            location_stack: i,
            badge: s,
        });
    },
    b = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: s } = e;
        d.default.track(E.HAw.USER_PROFILE_BADGE_HOVERED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...S(e),
            ...y(e),
            location_stack: i,
            badge: s,
        });
    },
    D = (e) => {
        let { displayProfile: t, isProfileOpen: n } = e,
            r = t?.userId,
            i =
                null != r
                    ? l.A.findActivity(r, (e) => {
                          let { type: t } = e;
                          return null != s.A.getAnyStreamForUser(r) ? t === E.$pd.PLAYING : t !== E.$pd.CUSTOM_STATUS;
                      })
                    : null;
        d.default.track(E.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: n,
            has_images: !!(i?.assets?.large_image ?? i?.assets?.small_image),
            is_friend: u.A.isFriend(r),
            viewed_profile_user_id: r,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    L = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: s,
            widgetEdited: a,
            gameId: o,
            numResults: l,
            numCharacters: u,
            applicationId: c,
        } = e;
        N({ ...e, action: s }),
            d.default.track(E.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...S(e),
                ...v(c),
                location_stack: i,
                edit_action: s,
                widget_edited: a,
                game_id: o,
                num_results: l,
                num_characters: u,
                application_id: c,
            });
    },
    w = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            widgetEdited: s,
            gameIds: a,
            tags: o,
            numCharactersCommentary: l,
            isWidgetRemoved: u,
        } = e;
        N({ ...e, action: "EDIT_SAVED" }),
            d.default.track(E.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...S(e),
                location_stack: i,
                widget_edited: s,
                game_ids: a,
                tags: o,
                num_characters_commentary: l,
                is_widget_removed: u,
            });
    },
    M = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: s,
            wishlistId: a,
            skuId: o,
            productLines: l,
        } = e;
        N({ ...e, action: s }),
            d.default.track(E.HAw.USER_PROFILE_WISHLIST_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...S(e),
                location_stack: i,
                action_type: s,
                wishlist_id: a,
                sku_id: o,
                product_lines: null != l ? Array.from(l) : [],
            });
    };
