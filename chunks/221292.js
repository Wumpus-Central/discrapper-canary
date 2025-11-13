n.d(t, {
    Er: () => M,
    NE: () => P,
    Of: () => x,
    QN: () => A,
    Qf: () => D,
    RV: () => N,
    TY: () => w,
    V1: () => L,
    pQ: () => C,
    te: () => T,
    z7: () => R,
}),
    n(539854),
    n(388685);
var r = n(367907),
    i = n(752048),
    a = n(199902),
    o = n(271383),
    s = n(158776),
    l = n(699516),
    c = n(594174),
    u = n(626135),
    d = n(768581),
    f = n(621853),
    _ = n(468462),
    p = n(687158),
    h = n(228168),
    m = n(981631),
    g = n(231338);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            a = null != n ? n : i,
            o = [];
        if (
            ((null == r ? void 0 : r.nick) && o.push(h.cm.NICKNAME),
            (null == a ? void 0 : a.pronouns) && o.push(h.cm.PRONOUNS),
            null == t ? void 0 : t.avatar)
        ) {
            let e = (0, d.xR)(null == t ? void 0 : t.avatar);
            o.push(e ? h.cm.ANIMATED_AVATAR : h.cm.AVATAR);
        }
        if (null == a ? void 0 : a.banner) {
            let e = (0, d.xR)(null == a ? void 0 : a.banner);
            o.push(e ? h.cm.ANIMATED_BANNER : h.cm.BANNER);
        }
        return (
            (null == a ? void 0 : a.bio) && o.push(h.cm.BIO),
            (null == a ? void 0 : a.themeColors) != null &&
                void 0 !== a.themeColors.find((e) => null !== e) &&
                o.push(h.cm.THEME),
            (null == t ? void 0 : t.avatarDecoration) != null && o.push(h.cm.AVATAR_DECORATION),
            (null == a ? void 0 : a.profileEffect) != null && o.push(h.cm.PROFILE_EFFECT),
            o
        );
    },
    I = (e) => {
        let t = s.Z.getStatus(e),
            n = s.Z.isMobileOnline(e);
        return t === g.Sk.ONLINE && n ? "".concat(t, "-mobile") : t === g.Sk.ONLINE ? "".concat(t, "-desktop") : t;
    },
    T = (e) => (null == e ? e : "VOICE" === e ? "VOICE" : Object.keys(m.IIU)[Object.values(m.IIU).indexOf(e)]),
    S = (e) => {
        var t, n, r;
        let { layout: i, userId: a, guildId: l, sessionId: u, sourceSessionId: d, showGuildProfile: f = !0 } = e,
            _ = c.default.getUser(a);
        if (null == _) return {};
        let h = (0, p.Of)(null == _ ? void 0 : _.id, f ? l : void 0),
            m = f && null != l ? o.ZP.getMember(l, null == _ ? void 0 : _.id) : null;
        return {
            profile_layout: i,
            profile_session_id: u,
            source_profile_session_id: d,
            profile_properties: v({
                user: _,
                userProfile: null == h ? void 0 : h._userProfile,
            }),
            guild_profile_properties: v({
                guildMember: m,
                guildMemberProfile: null == h ? void 0 : h._guildMemberProfile,
            }),
            profile_activity_types: s.Z.getActivities(_.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                null == h || null == (t = h.getBadges())
                    ? void 0
                    : t.map((e) => {
                          let { id: t } = e;
                          return t;
                      }),
            avatar_decoration_sku_id: null == (n = _.avatarDecoration) ? void 0 : n.skuId,
            profile_effect_sku_id: null == h || null == (r = h.profileEffect) ? void 0 : r.skuId,
            user_status: I(_.id),
            is_guild_profile: (null == h ? void 0 : h.guildId) != null,
            is_bot_profile: _.bot,
        };
    },
    A = (e) => {
        var t;
        let { userId: n } = e;
        if (null == n) return {};
        let r = i.Z.getUserAffinity(n);
        return {
            related_user_id: n,
            relationship_type: l.Z.getRelationshipType(n),
            related_since: l.Z.getSince(n),
            num_mutual_friends: f.Z.getMutualFriendsCount(n),
            num_mutual_guilds: null == (t = f.Z.getMutualGuilds(n)) ? void 0 : t.length,
            communication_probability: null == r ? void 0 : r.communicationProbability,
            communication_rank: null == r ? void 0 : r.communicationRank,
        };
    },
    C = (e) => {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            roleId: a,
            widgetType: o,
            analyticsLocations: s,
            action: l,
            section: c,
        } = e;
        u.default.track(
            m.rMx.USER_PROFILE_ACTION,
            O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
                location_stack: s,
                profile_action: l,
                profile_section: c,
                source_message_id: i,
                source_role_id: a,
                widget_type: o,
            }),
        );
    },
    N = (e) => {
        if (!(0, _.E)({ location: "UserProfileAnalyticsUtils" })) return;
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            profileUi: a,
            viewStartedAt: o,
            fetchStartedAt: s,
            timeToInteractiveMs: l,
            timeToLoadMs: c,
            timeToFetchMs: d,
        } = e;
        (null != l ? l : 0) <= 0 ||
            (null != c ? c : 0) <= 0 ||
            (null != d ? d : 0) <= 0 ||
            u.default.track(
                m.rMx.USER_PROFILE_UI_VIEWED,
                O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
                    location_stack: i,
                    profile_ui: a,
                    view_started_at: o,
                    fetch_started_at: s,
                    time_to_interactive_ms: l,
                    time_to_load_ms: c,
                    time_to_fetch_ms: d,
                }),
            );
    },
    R = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            display: o,
            activity: s,
            stream: l,
            entry: c,
            outbox: d,
            voiceChannelId: f,
        } = e;
        u.default.track(
            m.rMx.USER_PROFILE_ACTIVITY_ACTION,
            O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
                location_stack: i,
                activity_action: a,
                activity_display: o,
                activity_type: T(null != l ? m.IIU.STREAMING : null == s ? void 0 : s.type),
                activity_name: null == s ? void 0 : s.name,
                activity_platform: null == s ? void 0 : s.platform,
                activity_session_id: null == s ? void 0 : s.session_id,
                activity_application_id: null == s ? void 0 : s.application_id,
                item_id: null == c ? void 0 : c.id,
                author_id_v2: null == c ? void 0 : c.author_id,
                item_ids:
                    null == d
                        ? void 0
                        : d.entries.map((e) => {
                              let { id: t } = e;
                              return t;
                          }),
                author_ids_v2:
                    null == d
                        ? void 0
                        : d.entries.map((e) => {
                              let { author_id: t } = e;
                              return t;
                          }),
                voice_channel_id: f,
            }),
        );
    },
    P = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        u.default.track(
            m.rMx.USER_PROFILE_BADGE_PRESSED,
            O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
                location_stack: i,
                badge: a,
            }),
        );
    },
    D = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        u.default.track(
            m.rMx.USER_PROFILE_BADGE_HOVERED,
            O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e), A(e)), {
                location_stack: i,
                badge: a,
            }),
        );
    },
    w = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: o } = e,
            c = null == i ? void 0 : i.userId,
            d =
                null != c
                    ? s.Z.findActivity(c, (e) => {
                          let { type: t } = e;
                          return null != a.Z.getAnyStreamForUser(c) ? t === m.IIU.PLAYING : t !== m.IIU.CUSTOM_STATUS;
                      })
                    : null;
        u.default.track(m.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: o,
            has_images: !!(null != (r = null == d || null == (t = d.assets) ? void 0 : t.large_image)
                ? r
                : null == d || null == (n = d.assets)
                  ? void 0
                  : n.small_image),
            is_friend: l.Z.isFriend(c),
            viewed_profile_user_id: c,
            profile_has_nitro_customization: null == i ? void 0 : i.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == i ? void 0 : i.hasThemeColors(),
            profile_has_theme_animation: (null == i ? void 0 : i.popoutAnimationParticleType) != null,
        });
    },
    x = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            widgetEdited: o,
            gameId: s,
            numResults: l,
            numCharacters: c,
        } = e;
        C(O(b({}, e), { action: a })),
            u.default.track(
                m.rMx.USER_PROFILE_EDIT_ACTION,
                O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e)), {
                    location_stack: i,
                    edit_action: a,
                    widget_edited: o,
                    game_id: s,
                    num_results: l,
                    num_characters: c,
                }),
            );
    },
    L = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            widgetEdited: a,
            gameIds: o,
            tags: s,
            numCharactersCommentary: l,
            isWidgetRemoved: c,
        } = e;
        C(O(b({}, e), { action: "EDIT_SAVED" })),
            u.default.track(
                m.rMx.USER_PROFILE_EDIT_SAVED,
                O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e)), {
                    location_stack: i,
                    widget_edited: a,
                    game_ids: o,
                    tags: s,
                    num_characters_commentary: l,
                    is_widget_removed: c,
                }),
            );
    },
    M = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            wishlistId: o,
            skuId: s,
            hasThirdPartySku: l,
        } = e;
        C(O(b({}, e), { action: a })),
            u.default.track(
                m.rMx.USER_PROFILE_WISHLIST_ACTION,
                O(b({}, (0, r.hH)(t), (0, r.JS)(n), S(e)), {
                    location_stack: i,
                    action_type: a,
                    wishlist_id: o,
                    sku_id: s,
                    has_3p_sku: l,
                }),
            );
    };
