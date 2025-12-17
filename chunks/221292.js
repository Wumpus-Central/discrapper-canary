n.d(t, {
    Er: () => k,
    NE: () => D,
    Of: () => j,
    QN: () => A,
    Qf: () => x,
    RV: () => R,
    TY: () => L,
    V1: () => M,
    pQ: () => P,
    te: () => T,
    z7: () => w,
}),
    n(539854),
    n(388685);
var r = n(367907),
    i = n(752048),
    a = n(199902),
    o = n(881998),
    s = n(271383),
    l = n(158776),
    c = n(699516),
    u = n(594174),
    d = n(626135),
    f = n(768581),
    p = n(621853),
    _ = n(468462),
    m = n(687158),
    h = n(228168),
    g = n(981631),
    E = n(231338);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            a = null != n ? n : i,
            o = [];
        if (
            ((null == r ? void 0 : r.nick) && o.push(h.cm.NICKNAME),
            (null == a ? void 0 : a.pronouns) && o.push(h.cm.PRONOUNS),
            null == t ? void 0 : t.avatar)
        ) {
            let e = (0, f.xR)(null == t ? void 0 : t.avatar);
            o.push(e ? h.cm.ANIMATED_AVATAR : h.cm.AVATAR);
        }
        if (null == a ? void 0 : a.banner) {
            let e = (0, f.xR)(null == a ? void 0 : a.banner);
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
        let t = l.Z.getStatus(e),
            n = l.Z.isMobileOnline(e);
        return t === E.Sk.ONLINE && n ? "".concat(t, "-mobile") : t === E.Sk.ONLINE ? "".concat(t, "-desktop") : t;
    },
    T = (e) => (null == e ? e : "VOICE" === e ? "VOICE" : Object.keys(g.IIU)[Object.values(g.IIU).indexOf(e)]),
    C = (e) => {
        var t, n, r;
        let { layout: i, userId: a, guildId: o, sessionId: c, sourceSessionId: d, showGuildProfile: f = !0 } = e,
            p = u.default.getUser(a);
        if (null == p) return {};
        let _ = (0, m.Of)(null == p ? void 0 : p.id, f ? o : void 0),
            h = f && null != o ? s.ZP.getMember(o, null == p ? void 0 : p.id) : null;
        return {
            profile_layout: i,
            profile_session_id: c,
            source_profile_session_id: d,
            profile_properties: S({
                user: p,
                userProfile: null == _ ? void 0 : _._userProfile,
            }),
            guild_profile_properties: S({
                guildMember: h,
                guildMemberProfile: null == _ ? void 0 : _._guildMemberProfile,
            }),
            profile_activity_types: l.Z.getActivities(p.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                null == _ || null == (t = _.getBadges())
                    ? void 0
                    : t.map((e) => {
                          let { id: t } = e;
                          return t;
                      }),
            avatar_decoration_sku_id: null == (n = p.avatarDecoration) ? void 0 : n.skuId,
            profile_effect_sku_id: null == _ || null == (r = _.profileEffect) ? void 0 : r.skuId,
            user_status: I(p.id),
            is_guild_profile: (null == _ ? void 0 : _.guildId) != null,
            is_bot_profile: p.bot,
        };
    },
    A = (e) => {
        var t;
        let { userId: n } = e;
        if (null == n) return {};
        let r = i.Z.getUserAffinity(n);
        return {
            related_user_id: n,
            relationship_type: c.Z.getRelationshipType(n),
            related_since: c.Z.getSince(n),
            num_mutual_friends: p.Z.getMutualFriendsCount(n),
            num_mutual_guilds: null == (t = p.Z.getMutualGuilds(n)) ? void 0 : t.length,
            communication_probability: null == r ? void 0 : r.communicationProbability,
            communication_rank: null == r ? void 0 : r.communicationRank,
        };
    },
    N = (e) => ({
        application_id: e,
        application_linked:
            null != e && o.default.getFetchStateForApplication(e) === o.FetchState.FETCHED
                ? null != o.default.getNewestTokenForApplication(e)
                : null,
    }),
    P = (e) => {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            roleId: a,
            widgetType: o,
            analyticsLocations: s,
            action: l,
            section: c,
            applicationId: u,
        } = e;
        d.default.track(
            g.rMx.USER_PROFILE_ACTION,
            v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e), A(e), N(u)), {
                location_stack: s,
                profile_action: l,
                profile_section: c,
                source_message_id: i,
                source_role_id: a,
                widget_type: o,
            }),
        );
    },
    R = (e) => {
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
            timeToFetchMs: u,
        } = e;
        (null != l ? l : 0) <= 0 ||
            (null != c ? c : 0) <= 0 ||
            (null != u ? u : 0) <= 0 ||
            d.default.track(
                g.rMx.USER_PROFILE_UI_VIEWED,
                v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e), A(e)), {
                    location_stack: i,
                    profile_ui: a,
                    view_started_at: o,
                    fetch_started_at: s,
                    time_to_interactive_ms: l,
                    time_to_load_ms: c,
                    time_to_fetch_ms: u,
                }),
            );
    },
    w = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            display: o,
            activity: s,
            stream: l,
            entry: c,
            outbox: u,
            voiceChannelId: f,
        } = e;
        d.default.track(
            g.rMx.USER_PROFILE_ACTIVITY_ACTION,
            v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e), A(e)), {
                location_stack: i,
                activity_action: a,
                activity_display: o,
                activity_type: T(null != l ? g.IIU.STREAMING : null == s ? void 0 : s.type),
                activity_name: null == s ? void 0 : s.name,
                activity_platform: null == s ? void 0 : s.platform,
                activity_session_id: null == s ? void 0 : s.session_id,
                activity_application_id: null == s ? void 0 : s.application_id,
                item_id: null == c ? void 0 : c.id,
                author_id_v2: null == c ? void 0 : c.author_id,
                item_ids:
                    null == u
                        ? void 0
                        : u.entries.map((e) => {
                              let { id: t } = e;
                              return t;
                          }),
                author_ids_v2:
                    null == u
                        ? void 0
                        : u.entries.map((e) => {
                              let { author_id: t } = e;
                              return t;
                          }),
                voice_channel_id: f,
            }),
        );
    },
    D = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        d.default.track(
            g.rMx.USER_PROFILE_BADGE_PRESSED,
            v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e), A(e)), {
                location_stack: i,
                badge: a,
            }),
        );
    },
    x = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        d.default.track(
            g.rMx.USER_PROFILE_BADGE_HOVERED,
            v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e), A(e)), {
                location_stack: i,
                badge: a,
            }),
        );
    },
    L = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: o } = e,
            s = null == i ? void 0 : i.userId,
            u =
                null != s
                    ? l.Z.findActivity(s, (e) => {
                          let { type: t } = e;
                          return null != a.Z.getAnyStreamForUser(s) ? t === g.IIU.PLAYING : t !== g.IIU.CUSTOM_STATUS;
                      })
                    : null;
        d.default.track(g.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: o,
            has_images: !!(null != (r = null == u || null == (t = u.assets) ? void 0 : t.large_image)
                ? r
                : null == u || null == (n = u.assets)
                  ? void 0
                  : n.small_image),
            is_friend: c.Z.isFriend(s),
            viewed_profile_user_id: s,
            profile_has_nitro_customization: null == i ? void 0 : i.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == i ? void 0 : i.hasThemeColors(),
            profile_has_theme_animation: (null == i ? void 0 : i.popoutAnimationParticleType) != null,
        });
    },
    j = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            widgetEdited: o,
            gameId: s,
            numResults: l,
            numCharacters: c,
            applicationId: u,
        } = e;
        P(v(y({}, e), { action: a })),
            d.default.track(
                g.rMx.USER_PROFILE_EDIT_ACTION,
                v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e), N(u)), {
                    location_stack: i,
                    edit_action: a,
                    widget_edited: o,
                    game_id: s,
                    num_results: l,
                    num_characters: c,
                    application_id: u,
                }),
            );
    },
    M = (e) => {
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
        P(v(y({}, e), { action: "EDIT_SAVED" })),
            d.default.track(
                g.rMx.USER_PROFILE_EDIT_SAVED,
                v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e)), {
                    location_stack: i,
                    widget_edited: a,
                    game_ids: o,
                    tags: s,
                    num_characters_commentary: l,
                    is_widget_removed: c,
                }),
            );
    },
    k = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            wishlistId: o,
            skuId: s,
            productLines: l,
        } = e;
        P(v(y({}, e), { action: a })),
            d.default.track(
                g.rMx.USER_PROFILE_WISHLIST_ACTION,
                v(y({}, (0, r.hH)(t), (0, r.JS)(n), C(e)), {
                    location_stack: i,
                    action_type: a,
                    wishlist_id: o,
                    sku_id: s,
                    product_lines: null != l ? Array.from(l) : [],
                }),
            );
    };
