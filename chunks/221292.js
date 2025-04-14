n.d(t, {
    NE: () => P,
    QN: () => N,
    Qf: () => w,
    RV: () => C,
    TY: () => D,
    pQ: () => A,
    z7: () => R
}),
    n(539854),
    n(388685);
var r = n(367907),
    i = n(752048),
    o = n(199902),
    a = n(271383),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function v(e, t) {
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
let O = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            o = null != n ? n : i,
            a = [];
        if (((null == r ? void 0 : r.nick) && a.push(h.cm.NICKNAME), (null == o ? void 0 : o.pronouns) && a.push(h.cm.PRONOUNS), null == t ? void 0 : t.avatar)) {
            let e = (0, d.xR)(null == t ? void 0 : t.avatar);
            a.push(e ? h.cm.ANIMATED_AVATAR : h.cm.AVATAR);
        }
        if (null == o ? void 0 : o.banner) {
            let e = (0, d.xR)(null == o ? void 0 : o.banner);
            a.push(e ? h.cm.ANIMATED_BANNER : h.cm.BANNER);
        }
        return (null == o ? void 0 : o.bio) && a.push(h.cm.BIO), (null == o ? void 0 : o.themeColors) != null && void 0 !== o.themeColors.find((e) => null !== e) && a.push(h.cm.THEME), (null == t ? void 0 : t.avatarDecoration) != null && a.push(h.cm.AVATAR_DECORATION), (null == o ? void 0 : o.profileEffectId) != null && a.push(h.cm.PROFILE_EFFECT), a;
    },
    I = (e) => {
        let t = s.Z.getStatus(e),
            n = s.Z.isMobileOnline(e);
        return t === g.Sk.ONLINE && n ? ''.concat(t, '-mobile') : t === g.Sk.ONLINE ? ''.concat(t, '-desktop') : t;
    },
    S = (e) => (null == e ? e : 'VOICE' === e ? 'VOICE' : Object.keys(m.IIU)[Object.values(m.IIU).indexOf(e)]),
    T = (e) => {
        var t, n;
        let { layout: r, userId: i, guildId: o, sessionId: l, sourceSessionId: u, showGuildProfile: d = !0 } = e,
            f = c.default.getUser(i);
        if (null == f) return {};
        let _ = (0, p.Of)(null == f ? void 0 : f.id, d ? o : void 0),
            h = d && null != o ? a.ZP.getMember(o, null == f ? void 0 : f.id) : null;
        return {
            profile_layout: r,
            profile_session_id: l,
            source_profile_session_id: u,
            profile_properties: O({
                user: f,
                userProfile: null == _ ? void 0 : _._userProfile
            }),
            guild_profile_properties: O({
                guildMember: h,
                guildMemberProfile: null == _ ? void 0 : _._guildMemberProfile
            }),
            profile_activity_types: s.Z.getActivities(f.id)
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
            avatar_decoration_sku_id: null == (n = f.avatarDecoration) ? void 0 : n.skuId,
            profile_effect_sku_id: null == _ ? void 0 : _.profileEffectId,
            user_status: I(f.id),
            is_guild_profile: (null == _ ? void 0 : _.guildId) != null,
            is_bot_profile: f.bot
        };
    },
    N = (e) => {
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
            communication_rank: null == r ? void 0 : r.communicationRank
        };
    },
    A = (e) => {
        let { guildId: t, channelId: n, messageId: i, roleId: o, analyticsLocations: a, action: s, section: l } = e;
        u.default.track(
            m.rMx.USER_PROFILE_ACTION,
            v(b({}, (0, r.hH)(t), (0, r.JS)(n), T(e), N(e)), {
                location_stack: a,
                profile_action: s,
                profile_section: l,
                source_message_id: i,
                source_role_id: o
            })
        );
    },
    C = (e) => {
        if (!(0, _.E)({ location: 'UserProfileAnalyticsUtils' })) return;
        let { guildId: t, channelId: n, analyticsLocations: i, profileUi: o, viewStartedAt: a, fetchStartedAt: s, timeToInteractiveMs: l, timeToLoadMs: c, timeToFetchMs: d } = e;
        u.default.track(
            m.rMx.USER_PROFILE_UI_VIEWED,
            v(b({}, (0, r.hH)(t), (0, r.JS)(n), T(e), N(e)), {
                location_stack: i,
                profile_ui: o,
                view_started_at: a,
                fetch_started_at: s,
                time_to_interactive_ms: l,
                time_to_load_ms: c,
                time_to_fetch_ms: d
            })
        );
    },
    R = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, action: o, display: a, activity: s, stream: l, entry: c, outbox: d, voiceChannelId: f } = e;
        u.default.track(
            m.rMx.USER_PROFILE_ACTIVITY_ACTION,
            v(b({}, (0, r.hH)(t), (0, r.JS)(n), T(e), N(e)), {
                location_stack: i,
                activity_action: o,
                activity_display: a,
                activity_type: S(null != l ? m.IIU.STREAMING : null == s ? void 0 : s.type),
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
                voice_channel_id: f
            })
        );
    },
    P = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: o } = e;
        u.default.track(
            m.rMx.USER_PROFILE_BADGE_PRESSED,
            v(b({}, (0, r.hH)(t), (0, r.JS)(n), T(e), N(e)), {
                location_stack: i,
                badge: o
            })
        );
    },
    w = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: o } = e;
        u.default.track(
            m.rMx.USER_PROFILE_BADGE_HOVERED,
            v(b({}, (0, r.hH)(t), (0, r.JS)(n), T(e), N(e)), {
                location_stack: i,
                badge: o
            })
        );
    },
    D = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: a } = e,
            c = null == i ? void 0 : i.userId,
            d =
                null != c
                    ? s.Z.findActivity(c, (e) => {
                          let { type: t } = e;
                          return null != o.Z.getAnyStreamForUser(c) ? t === m.IIU.PLAYING : t !== m.IIU.CUSTOM_STATUS;
                      })
                    : null;
        u.default.track(m.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: a,
            has_images: !!(null != (r = null == d || null == (t = d.assets) ? void 0 : t.large_image) ? r : null == d || null == (n = d.assets) ? void 0 : n.small_image),
            is_friend: l.Z.isFriend(c),
            viewed_profile_user_id: c,
            profile_has_nitro_customization: null == i ? void 0 : i.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == i ? void 0 : i.hasThemeColors(),
            profile_has_theme_animation: (null == i ? void 0 : i.popoutAnimationParticleType) != null
        });
    };
