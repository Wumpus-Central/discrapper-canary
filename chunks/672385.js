n.d(t, {
    R9: () => D,
    Tu: () => P,
    UI: () => C,
    Wn: () => R,
    am: () => L,
    nR: () => k,
    pT: () => M,
    sQ: () => x,
    un: () => j,
    wd: () => w,
}),
    n(321073),
    n(896048);
var r = n(58149),
    i = n(21119),
    a = n(616356),
    s = n(546183),
    o = n(696451),
    l = n(290863),
    c = n(994500),
    u = n(287809),
    d = n(954571),
    f = n(486020),
    p = n(622543),
    _ = n(155087),
    h = n(950191),
    m = n(518477),
    g = n(652215),
    E = n(818348);

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

function A(e, t) {
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
let v = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            a = null != n ? n : i,
            s = [];
        if (
            ((null == r ? void 0 : r.nick) && s.push(m.d6.NICKNAME),
            (null == a ? void 0 : a.pronouns) && s.push(m.d6.PRONOUNS),
            null == t ? void 0 : t.avatar)
        ) {
            let e = (0, f.VI)(null == t ? void 0 : t.avatar);
            s.push(e ? m.d6.ANIMATED_AVATAR : m.d6.AVATAR);
        }
        if (null == a ? void 0 : a.banner) {
            let e = (0, f.VI)(null == a ? void 0 : a.banner);
            s.push(e ? m.d6.ANIMATED_BANNER : m.d6.BANNER);
        }
        return (
            (null == a ? void 0 : a.bio) && s.push(m.d6.BIO),
            (null == a ? void 0 : a.themeColors) != null &&
                void 0 !== a.themeColors.find((e) => null !== e) &&
                s.push(m.d6.THEME),
            (null == t ? void 0 : t.avatarDecoration) != null && s.push(m.d6.AVATAR_DECORATION),
            (null == a ? void 0 : a.profileEffect) != null && s.push(m.d6.PROFILE_EFFECT),
            s
        );
    },
    S = (e) => {
        let t = l.A.getStatus(e),
            n = l.A.isMobileOnline(e);
        return t === E.cl.ONLINE && n ? "".concat(t, "-mobile") : t === E.cl.ONLINE ? "".concat(t, "-desktop") : t;
    },
    I = (e) => (null == e ? e : "VOICE" === e ? "VOICE" : Object.keys(g.$pd)[Object.values(g.$pd).indexOf(e)]),
    T = (e) => {
        var t, n, r;
        let { layout: i, userId: a, guildId: s, sessionId: c, sourceSessionId: d, showGuildProfile: f = !0 } = e,
            p = u.default.getUser(a);
        if (null == p) return {};
        let _ = (0, h.AP)(null == p ? void 0 : p.id, f ? s : void 0),
            m = f && null != s ? o.Ay.getMember(s, null == p ? void 0 : p.id) : null;
        return {
            profile_layout: i,
            profile_session_id: c,
            source_profile_session_id: d,
            profile_properties: v({
                user: p,
                userProfile: null == _ ? void 0 : _._userProfile,
            }),
            guild_profile_properties: v({
                guildMember: m,
                guildMemberProfile: null == _ ? void 0 : _._guildMemberProfile,
            }),
            profile_activity_types: l.A.getActivities(p.id)
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
            user_status: S(p.id),
            is_guild_profile: (null == _ ? void 0 : _.guildId) != null,
            is_bot_profile: p.bot,
        };
    },
    C = (e) => {
        var t;
        let { userId: n } = e;
        if (null == n) return {};
        let r = i.A.getUserAffinity(n);
        return {
            related_user_id: n,
            relationship_type: c.A.getRelationshipType(n),
            related_since: c.A.getSince(n),
            num_mutual_friends: p.A.getMutualFriendsCount(n),
            num_mutual_guilds: null == (t = p.A.getMutualGuilds(n)) ? void 0 : t.length,
            communication_probability: null == r ? void 0 : r.communicationProbability,
            communication_rank: null == r ? void 0 : r.communicationRank,
        };
    },
    N = (e) => ({
        application_id: e,
        application_linked:
            null != e && s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED
                ? null != s.default.getNewestTokenForApplication(e)
                : null,
    }),
    R = (e) => {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            roleId: a,
            widgetType: s,
            analyticsLocations: o,
            action: l,
            section: c,
            applicationId: u,
        } = e;
        d.default.track(
            g.HAw.USER_PROFILE_ACTION,
            A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e), C(e), N(u)), {
                location_stack: o,
                profile_action: l,
                profile_section: c,
                source_message_id: i,
                source_role_id: a,
                widget_type: s,
            }),
        );
    },
    w = (e) => {
        if (
            !(0, _.i)({
                location: "UserProfileAnalyticsUtils",
            })
        )
            return;
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            profileUi: a,
            viewStartedAt: s,
            fetchStartedAt: o,
            timeToInteractiveMs: l,
            timeToLoadMs: c,
            timeToFetchMs: u,
        } = e;
        (null != l ? l : 0) <= 0 ||
            (null != c ? c : 0) <= 0 ||
            (null != u ? u : 0) <= 0 ||
            d.default.track(
                g.HAw.USER_PROFILE_UI_VIEWED,
                A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e), C(e)), {
                    location_stack: i,
                    profile_ui: a,
                    view_started_at: s,
                    fetch_started_at: o,
                    time_to_interactive_ms: l,
                    time_to_load_ms: c,
                    time_to_fetch_ms: u,
                }),
            );
    },
    P = (e) => {
        let {
            guildId: t,
            channelId: n,
            analyticsLocations: i,
            action: a,
            display: s,
            activity: o,
            stream: l,
            entry: c,
            outbox: u,
            voiceChannelId: f,
        } = e;
        d.default.track(
            g.HAw.USER_PROFILE_ACTIVITY_ACTION,
            A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e), C(e)), {
                location_stack: i,
                activity_action: a,
                activity_display: s,
                activity_type: I(null != l ? g.$pd.STREAMING : null == o ? void 0 : o.type),
                activity_name: null == o ? void 0 : o.name,
                activity_platform: null == o ? void 0 : o.platform,
                activity_session_id: null == o ? void 0 : o.session_id,
                activity_application_id: null == o ? void 0 : o.application_id,
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
            g.HAw.USER_PROFILE_BADGE_PRESSED,
            A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e), C(e)), {
                location_stack: i,
                badge: a,
            }),
        );
    },
    x = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        d.default.track(
            g.HAw.USER_PROFILE_BADGE_HOVERED,
            A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e), C(e)), {
                location_stack: i,
                badge: a,
            }),
        );
    },
    L = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: s } = e,
            o = null == i ? void 0 : i.userId,
            u =
                null != o
                    ? l.A.findActivity(o, (e) => {
                          let { type: t } = e;
                          return null != a.A.getAnyStreamForUser(o) ? t === g.$pd.PLAYING : t !== g.$pd.CUSTOM_STATUS;
                      })
                    : null;
        d.default.track(g.HAw.DM_PROFILE_TOGGLED, {
            is_profile_open: s,
            has_images: !!(null != (t = null == u || null == (n = u.assets) ? void 0 : n.large_image)
                ? t
                : null == u || null == (r = u.assets)
                  ? void 0
                  : r.small_image),
            is_friend: c.A.isFriend(o),
            viewed_profile_user_id: o,
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
            widgetEdited: s,
            gameId: o,
            numResults: l,
            numCharacters: c,
            applicationId: u,
        } = e;
        R(
            A(y({}, e), {
                action: a,
            }),
        ),
            d.default.track(
                g.HAw.USER_PROFILE_EDIT_ACTION,
                A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e), N(u)), {
                    location_stack: i,
                    edit_action: a,
                    widget_edited: s,
                    game_id: o,
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
            gameIds: s,
            tags: o,
            numCharactersCommentary: l,
            isWidgetRemoved: c,
        } = e;
        R(
            A(y({}, e), {
                action: "EDIT_SAVED",
            }),
        ),
            d.default.track(
                g.HAw.USER_PROFILE_EDIT_SAVED,
                A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e)), {
                    location_stack: i,
                    widget_edited: a,
                    game_ids: s,
                    tags: o,
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
            wishlistId: s,
            skuId: o,
            productLines: l,
        } = e;
        R(
            A(y({}, e), {
                action: a,
            }),
        ),
            d.default.track(
                g.HAw.USER_PROFILE_WISHLIST_ACTION,
                A(y({}, (0, r.H$)(t), (0, r.Ou)(n), T(e)), {
                    location_stack: i,
                    action_type: a,
                    wishlist_id: s,
                    sku_id: o,
                    product_lines: null != l ? Array.from(l) : [],
                }),
            );
    };
