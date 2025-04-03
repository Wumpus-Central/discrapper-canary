n.d(t, {
    NE: () => C,
    QN: () => T,
    Qf: () => R,
    TY: () => P,
    pQ: () => N,
    z7: () => A
}),
    n(653041),
    n(47120);
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
    _ = n(687158),
    p = n(228168),
    h = n(981631),
    m = n(231338);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            o = null != n ? n : i,
            a = [];
        if (((null == r ? void 0 : r.nick) && a.push(p.cm.NICKNAME), (null == o ? void 0 : o.pronouns) && a.push(p.cm.PRONOUNS), null == t ? void 0 : t.avatar)) {
            let e = (0, d.xR)(null == t ? void 0 : t.avatar);
            a.push(e ? p.cm.ANIMATED_AVATAR : p.cm.AVATAR);
        }
        if (null == o ? void 0 : o.banner) {
            let e = (0, d.xR)(null == o ? void 0 : o.banner);
            a.push(e ? p.cm.ANIMATED_BANNER : p.cm.BANNER);
        }
        return (null == o ? void 0 : o.bio) && a.push(p.cm.BIO), (null == o ? void 0 : o.themeColors) != null && void 0 !== o.themeColors.find((e) => null !== e) && a.push(p.cm.THEME), (null == t ? void 0 : t.avatarDecoration) != null && a.push(p.cm.AVATAR_DECORATION), (null == o ? void 0 : o.profileEffectId) != null && a.push(p.cm.PROFILE_EFFECT), a;
    },
    O = (e) => {
        let t = s.Z.getStatus(e),
            n = s.Z.isMobileOnline(e);
        return t === m.Sk.ONLINE && n ? ''.concat(t, '-mobile') : t === m.Sk.ONLINE ? ''.concat(t, '-desktop') : t;
    },
    I = (e) => (null == e ? e : 'VOICE' === e ? 'VOICE' : Object.keys(h.IIU)[Object.values(h.IIU).indexOf(e)]),
    S = (e) => {
        var t, n;
        let { layout: r, userId: i, guildId: o, sessionId: l, sourceSessionId: u, showGuildProfile: d = !0 } = e,
            f = c.default.getUser(i);
        if (null == f) return {};
        let p = (0, _.Of)(null == f ? void 0 : f.id, d ? o : void 0),
            h = d && null != o ? a.ZP.getMember(o, null == f ? void 0 : f.id) : null;
        return {
            profile_layout: r,
            profile_session_id: l,
            source_profile_session_id: u,
            profile_properties: v({
                user: f,
                userProfile: null == p ? void 0 : p._userProfile
            }),
            guild_profile_properties: v({
                guildMember: h,
                guildMemberProfile: null == p ? void 0 : p._guildMemberProfile
            }),
            profile_activity_types: s.Z.getActivities(f.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                null == p || null == (t = p.getBadges())
                    ? void 0
                    : t.map((e) => {
                          let { id: t } = e;
                          return t;
                      }),
            avatar_decoration_sku_id: null == (n = f.avatarDecoration) ? void 0 : n.skuId,
            profile_effect_sku_id: null == p ? void 0 : p.profileEffectId,
            user_status: O(f.id),
            is_guild_profile: (null == p ? void 0 : p.guildId) != null,
            is_bot_profile: f.bot
        };
    },
    T = (e) => {
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
    N = (e) => {
        let { guildId: t, channelId: n, messageId: i, roleId: o, analyticsLocations: a, action: s, section: l } = e;
        u.default.track(
            h.rMx.USER_PROFILE_ACTION,
            y(E({}, (0, r.hH)(t), (0, r.JS)(n), S(e), T(e)), {
                location_stack: a,
                profile_action: s,
                profile_section: l,
                source_message_id: i,
                source_role_id: o
            })
        );
    },
    A = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, action: o, display: a, activity: s, stream: l, entry: c, outbox: d, voiceChannelId: f } = e;
        u.default.track(
            h.rMx.USER_PROFILE_ACTIVITY_ACTION,
            y(E({}, (0, r.hH)(t), (0, r.JS)(n), S(e), T(e)), {
                location_stack: i,
                activity_action: o,
                activity_display: a,
                activity_type: I(null != l ? h.IIU.STREAMING : null == s ? void 0 : s.type),
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
    C = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: o } = e;
        u.default.track(
            h.rMx.USER_PROFILE_BADGE_PRESSED,
            y(E({}, (0, r.hH)(t), (0, r.JS)(n), S(e), T(e)), {
                location_stack: i,
                badge: o
            })
        );
    },
    R = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: o } = e;
        u.default.track(
            h.rMx.USER_PROFILE_BADGE_HOVERED,
            y(E({}, (0, r.hH)(t), (0, r.JS)(n), S(e), T(e)), {
                location_stack: i,
                badge: o
            })
        );
    },
    P = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: a } = e,
            c = null == i ? void 0 : i.userId,
            d =
                null != c
                    ? s.Z.findActivity(c, (e) => {
                          let { type: t } = e;
                          return null != o.Z.getAnyStreamForUser(c) ? t === h.IIU.PLAYING : t !== h.IIU.CUSTOM_STATUS;
                      })
                    : null;
        u.default.track(h.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: a,
            has_images: !!(null != (r = null == d || null == (t = d.assets) ? void 0 : t.large_image) ? r : null == d || null == (n = d.assets) ? void 0 : n.small_image),
            is_friend: l.Z.isFriend(c),
            viewed_profile_user_id: c,
            profile_has_nitro_customization: null == i ? void 0 : i.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == i ? void 0 : i.hasThemeColors(),
            profile_has_theme_animation: (null == i ? void 0 : i.popoutAnimationParticleType) != null
        });
    };
