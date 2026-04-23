"use strict";
n.d(t, {
    R9: () => C,
    Tu: () => v,
    UI: () => T,
    Wn: () => y,
    am: () => R,
    nR: () => L,
    pT: () => D,
    sQ: () => O,
    un: () => b,
    wd: () => N,
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
    E = n(518477),
    m = n(652215),
    g = n(818348);
let A = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            s = n ?? i,
            a = [];
        if ((r?.nick && a.push(E.d6.NICKNAME), s?.pronouns && a.push(E.d6.PRONOUNS), t?.avatar)) {
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
            r,
            { layout: i, userId: s, guildId: a, sessionId: u, sourceSessionId: d, showGuildProfile: _ = !0 } = e,
            f = c.default.getUser(s);
        if (null == f) return {};
        let p = (0, h.AP)(f?.id, _ ? a : void 0),
            E = _ && null != a ? o.Ay.getMember(a, f?.id) : null;
        return {
            profile_layout: i,
            profile_session_id: u,
            source_profile_session_id: d,
            profile_properties: A({ user: f, userProfile: p?._userProfile }),
            guild_profile_properties: A({ guildMember: E, guildMemberProfile: p?._guildMemberProfile }),
            profile_activity_types: l.A.getActivities(f.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                p
                    ?.getBadges()
                    ?.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                    .filter((e) => "string" == typeof e) ?? [],
            avatar_decoration_sku_id: f.avatarDecoration?.skuId,
            profile_effect_sku_id: p?.profileEffect?.skuId,
            user_status:
                ((t = f.id),
                (n = l.A.getStatus(t)),
                (r = l.A.isMobileOnline(t)),
                n === g.cl.ONLINE && r ? `${n}-mobile` : n === g.cl.ONLINE ? `${n}-desktop` : n),
            is_guild_profile: p?.guildId != null,
            is_bot_profile: f.bot,
            is_private_to_viewer: p?.private ?? !1,
        };
    },
    T = (e) => {
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
    S = (e) => ({
        application_id: e,
        application_linked:
            null != e && a.default.getFetchStateForApplication(e) === a.FetchState.FETCHED
                ? null != a.default.getNewestTokenForApplication(e)
                : null,
    }),
    y = (e) => {
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
        d.default.track(m.HAw.USER_PROFILE_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...I(e),
            ...T(e),
            ...S(c),
            location_stack: o,
            profile_action: l,
            profile_section: u,
            source_message_id: i,
            source_role_id: s,
            widget_type: a,
        });
    },
    N = (e) => {
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
            d.default.track(m.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...I(e),
                ...T(e),
                location_stack: i,
                profile_ui: s,
                view_started_at: a,
                fetch_started_at: o,
                time_to_interactive_ms: l,
                time_to_load_ms: u,
                time_to_fetch_ms: c,
            });
    },
    v = (e) => {
        var t;
        let {
            guildId: n,
            channelId: i,
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
            ...(0, r.H$)(n),
            ...(0, r.Ou)(i),
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
    C = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: s } = e;
        d.default.track(m.HAw.USER_PROFILE_BADGE_PRESSED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...I(e),
            ...T(e),
            location_stack: i,
            badge: s,
        });
    },
    O = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: s } = e;
        d.default.track(m.HAw.USER_PROFILE_BADGE_HOVERED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(n),
            ...I(e),
            ...T(e),
            location_stack: i,
            badge: s,
        });
    },
    R = (e) => {
        let { displayProfile: t, isProfileOpen: n } = e,
            r = t?.userId,
            i =
                null != r
                    ? l.A.findActivity(r, (e) => {
                          let { type: t } = e;
                          return null != s.A.getAnyStreamForUser(r) ? t === m.$pd.PLAYING : t !== m.$pd.CUSTOM_STATUS;
                      })
                    : null;
        d.default.track(m.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: n,
            has_images: !!(i?.assets?.large_image ?? i?.assets?.small_image),
            is_friend: u.A.isFriend(r),
            viewed_profile_user_id: r,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    b = (e) => {
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
        y({ ...e, action: s }),
            d.default.track(m.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...I(e),
                ...S(c),
                location_stack: i,
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
            analyticsLocations: i,
            widgetEdited: s,
            gameIds: a,
            tags: o,
            numCharactersCommentary: l,
            isWidgetRemoved: u,
        } = e;
        y({ ...e, action: "EDIT_SAVED" }),
            d.default.track(m.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...I(e),
                location_stack: i,
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
            analyticsLocations: i,
            action: s,
            wishlistId: a,
            skuId: o,
            productLines: l,
        } = e;
        y({ ...e, action: s }),
            d.default.track(m.HAw.USER_PROFILE_WISHLIST_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(n),
                ...I(e),
                location_stack: i,
                action_type: s,
                wishlist_id: a,
                sku_id: o,
                product_lines: null != l ? Array.from(l) : [],
            });
    };
