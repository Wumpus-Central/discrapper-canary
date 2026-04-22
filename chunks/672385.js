i.d(t, {
    R9: () => O,
    Tu: () => R,
    UI: () => x,
    Wn: () => b,
    am: () => C,
    nR: () => w,
    pT: () => k,
    sQ: () => N,
    un: () => T,
    wd: () => g,
}),
    i(321073);
var r = i(58149),
    l = i(21119),
    a = i(616356),
    n = i(546183),
    s = i(696451),
    o = i(290863),
    d = i(994500),
    c = i(287809),
    u = i(954571),
    _ = i(486020),
    m = i(622543),
    f = i(36596),
    p = i(950191),
    A = i(518477),
    h = i(652215),
    v = i(818348);
let E = (e) => {
        let { user: t, userProfile: i, guildMember: r, guildMemberProfile: l } = e,
            a = i ?? l,
            n = [];
        if ((r?.nick && n.push(A.d6.NICKNAME), a?.pronouns && n.push(A.d6.PRONOUNS), t?.avatar)) {
            let e = (0, _.VI)(t?.avatar);
            n.push(e ? A.d6.ANIMATED_AVATAR : A.d6.AVATAR);
        }
        if (a?.banner) {
            let e = (0, _.VI)(a?.banner);
            n.push(e ? A.d6.ANIMATED_BANNER : A.d6.BANNER);
        }
        return (
            a?.bio && n.push(A.d6.BIO),
            a?.themeColors != null && void 0 !== a.themeColors.find((e) => null !== e) && n.push(A.d6.THEME),
            t?.avatarDecoration != null && n.push(A.d6.AVATAR_DECORATION),
            a?.profileEffect != null && n.push(A.d6.PROFILE_EFFECT),
            n
        );
    },
    I = (e) => {
        var t;
        let i,
            r,
            { layout: l, userId: a, guildId: n, sessionId: d, sourceSessionId: u, showGuildProfile: _ = !0 } = e,
            m = c.default.getUser(a);
        if (null == m) return {};
        let f = (0, p.AP)(m?.id, _ ? n : void 0),
            A = _ && null != n ? s.Ay.getMember(n, m?.id) : null;
        return {
            profile_layout: l,
            profile_session_id: d,
            source_profile_session_id: u,
            profile_properties: E({ user: m, userProfile: f?._userProfile }),
            guild_profile_properties: E({ guildMember: A, guildMemberProfile: f?._guildMemberProfile }),
            profile_activity_types: o.A.getActivities(m.id)
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
            avatar_decoration_sku_id: m.avatarDecoration?.skuId,
            profile_effect_sku_id: f?.profileEffect?.skuId,
            user_status:
                ((t = m.id),
                (i = o.A.getStatus(t)),
                (r = o.A.isMobileOnline(t)),
                i === v.cl.ONLINE && r ? `${i}-mobile` : i === v.cl.ONLINE ? `${i}-desktop` : i),
            is_guild_profile: f?.guildId != null,
            is_bot_profile: m.bot,
            is_private_to_viewer: f?.private ?? !1,
        };
    },
    x = (e) => {
        let { userId: t } = e;
        if (null == t) return {};
        let i = l.A.getUserAffinity(t);
        return {
            related_user_id: t,
            relationship_type: d.A.getRelationshipType(t),
            related_since: d.A.getSince(t),
            num_mutual_friends: m.A.getMutualFriendsCount(t),
            num_mutual_guilds: m.A.getMutualGuilds(t)?.length,
            communication_probability: i?.communicationProbability,
            communication_rank: i?.communicationRank,
        };
    },
    y = (e) => ({
        application_id: e,
        application_linked:
            null != e && n.default.getFetchStateForApplication(e) === n.FetchState.FETCHED
                ? null != n.default.getNewestTokenForApplication(e)
                : null,
    }),
    b = (e) => {
        let {
            guildId: t,
            channelId: i,
            messageId: l,
            roleId: a,
            widgetType: n,
            analyticsLocations: s,
            action: o,
            section: d,
            applicationId: c,
        } = e;
        u.default.track(h.HAw.USER_PROFILE_ACTION, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            ...x(e),
            ...y(c),
            location_stack: s,
            profile_action: o,
            profile_section: d,
            source_message_id: l,
            source_role_id: a,
            widget_type: n,
        });
    },
    g = (e) => {
        if (!(0, f.i)("UserProfileAnalyticsUtils")) return;
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            profileUi: a,
            viewStartedAt: n,
            fetchStartedAt: s,
            timeToInteractiveMs: o,
            timeToLoadMs: d,
            timeToFetchMs: c,
        } = e;
        (o ?? 0) <= 0 ||
            (d ?? 0) <= 0 ||
            (c ?? 0) <= 0 ||
            u.default.track(h.HAw.USER_PROFILE_UI_VIEWED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...I(e),
                ...x(e),
                location_stack: l,
                profile_ui: a,
                view_started_at: n,
                fetch_started_at: s,
                time_to_interactive_ms: o,
                time_to_load_ms: d,
                time_to_fetch_ms: c,
            });
    },
    R = (e) => {
        var t;
        let {
            guildId: i,
            channelId: l,
            analyticsLocations: a,
            action: n,
            display: s,
            activity: o,
            stream: d,
            entry: c,
            outbox: _,
            voiceChannelId: m,
        } = e;
        u.default.track(h.HAw.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, r.H$)(i),
            ...(0, r.Ou)(l),
            ...I(e),
            ...x(e),
            location_stack: a,
            activity_action: n,
            activity_display: s,
            activity_type:
                null == (t = null != d ? h.$pd.STREAMING : o?.type)
                    ? t
                    : "VOICE" === t
                      ? "VOICE"
                      : Object.keys(h.$pd)[Object.values(h.$pd).indexOf(t)],
            activity_name: o?.name,
            activity_platform: o?.platform,
            activity_session_id: o?.session_id,
            activity_application_id: o?.application_id,
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
            voice_channel_id: m,
        });
    },
    O = (e) => {
        let { guildId: t, channelId: i, analyticsLocations: l, badge: a } = e;
        u.default.track(h.HAw.USER_PROFILE_BADGE_PRESSED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            ...x(e),
            location_stack: l,
            badge: a,
        });
    },
    N = (e) => {
        let { guildId: t, channelId: i, analyticsLocations: l, badge: a } = e;
        u.default.track(h.HAw.USER_PROFILE_BADGE_HOVERED, {
            ...(0, r.H$)(t),
            ...(0, r.Ou)(i),
            ...I(e),
            ...x(e),
            location_stack: l,
            badge: a,
        });
    },
    C = (e) => {
        let { displayProfile: t, isProfileOpen: i } = e,
            r = t?.userId,
            l =
                null != r
                    ? o.A.findActivity(r, (e) => {
                          let { type: t } = e;
                          return null != a.A.getAnyStreamForUser(r) ? t === h.$pd.PLAYING : t !== h.$pd.CUSTOM_STATUS;
                      })
                    : null;
        u.default.track(h.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: i,
            has_images: !!(l?.assets?.large_image ?? l?.assets?.small_image),
            is_friend: d.A.isFriend(r),
            viewed_profile_user_id: r,
            profile_has_nitro_customization: t?.hasPremiumCustomization(),
            profile_has_theme_color_customized: t?.hasThemeColors(),
            profile_has_theme_animation: t?.popoutAnimationParticleType != null,
        });
    },
    T = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            action: a,
            widgetEdited: n,
            gameId: s,
            numResults: o,
            numCharacters: d,
            applicationId: c,
        } = e;
        b({ ...e, action: a }),
            u.default.track(h.HAw.USER_PROFILE_EDIT_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...I(e),
                ...y(c),
                location_stack: l,
                edit_action: a,
                widget_edited: n,
                game_id: s,
                num_results: o,
                num_characters: d,
                application_id: c,
            });
    },
    k = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            widgetEdited: a,
            gameIds: n,
            tags: s,
            numCharactersCommentary: o,
            isWidgetRemoved: d,
        } = e;
        b({ ...e, action: "EDIT_SAVED" }),
            u.default.track(h.HAw.USER_PROFILE_EDIT_SAVED, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...I(e),
                location_stack: l,
                widget_edited: a,
                game_ids: n,
                tags: s,
                num_characters_commentary: o,
                is_widget_removed: d,
            });
    },
    w = (e) => {
        let {
            guildId: t,
            channelId: i,
            analyticsLocations: l,
            action: a,
            wishlistId: n,
            skuId: s,
            productLines: o,
        } = e;
        b({ ...e, action: a }),
            u.default.track(h.HAw.USER_PROFILE_WISHLIST_ACTION, {
                ...(0, r.H$)(t),
                ...(0, r.Ou)(i),
                ...I(e),
                location_stack: l,
                action_type: a,
                wishlist_id: n,
                sku_id: s,
                product_lines: null != o ? Array.from(o) : [],
            });
    };
