r.d(n, {
    NE: function () {
        return N;
    },
    QN: function () {
        return S;
    },
    Qf: function () {
        return R;
    },
    TY: function () {
        return O;
    },
    pQ: function () {
        return A;
    },
    z7: function () {
        return C;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(367907),
    s = r(814443),
    l = r(199902),
    u = r(271383),
    c = r(158776),
    d = r(699516),
    f = r(594174),
    p = r(626135),
    h = r(768581),
    _ = r(621853),
    m = r(687158),
    g = r(228168),
    E = r(981631),
    v = r(231338);
let y = (e) => {
        let { user: n, userProfile: r, guildMember: i, guildMemberProfile: a } = e,
            o = null != r ? r : a,
            s = [];
        if (((null == i ? void 0 : i.nick) && s.push(g.cm.NICKNAME), (null == o ? void 0 : o.pronouns) && s.push(g.cm.PRONOUNS), null == n ? void 0 : n.avatar)) {
            let e = (0, h.xR)(null == n ? void 0 : n.avatar);
            s.push(e ? g.cm.ANIMATED_AVATAR : g.cm.AVATAR);
        }
        if (null == o ? void 0 : o.banner) {
            let e = (0, h.xR)(null == o ? void 0 : o.banner);
            s.push(e ? g.cm.ANIMATED_BANNER : g.cm.BANNER);
        }
        return (null == o ? void 0 : o.bio) && s.push(g.cm.BIO), (null == o ? void 0 : o.themeColors) != null && void 0 !== o.themeColors.find((e) => null !== e) && s.push(g.cm.THEME), (null == n ? void 0 : n.avatarDecoration) != null && s.push(g.cm.AVATAR_DECORATION), (null == o ? void 0 : o.profileEffectId) != null && s.push(g.cm.PROFILE_EFFECT), s;
    },
    b = (e) => {
        let n = c.Z.getStatus(e),
            r = c.Z.isMobileOnline(e);
        return n === v.Sk.ONLINE && r ? ''.concat(n, '-mobile') : n === v.Sk.ONLINE ? ''.concat(n, '-desktop') : n;
    },
    I = (e) => (null == e ? e : 'VOICE' === e ? 'VOICE' : Object.keys(E.IIU)[Object.values(E.IIU).indexOf(e)]),
    T = (e) => {
        var n, r;
        let { layout: i, userId: a, guildId: o, sessionId: s, sourceSessionId: l, showGuildProfile: d = !0 } = e,
            p = f.default.getUser(a);
        if (null == p) return {};
        let h = (0, m.Of)(null == p ? void 0 : p.id, d ? o : void 0),
            _ = d && null != o ? u.ZP.getMember(o, null == p ? void 0 : p.id) : null;
        return {
            profile_layout: i,
            profile_session_id: s,
            source_profile_session_id: l,
            profile_properties: y({
                user: p,
                userProfile: null == h ? void 0 : h._userProfile
            }),
            guild_profile_properties: y({
                guildMember: _,
                guildMemberProfile: null == h ? void 0 : h._guildMemberProfile
            }),
            profile_activity_types: c.Z.getActivities(p.id)
                .map((e) => {
                    let { type: n } = e;
                    return n;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                null == h
                    ? void 0
                    : null === (n = h.getBadges()) || void 0 === n
                      ? void 0
                      : n.map((e) => {
                            let { id: n } = e;
                            return n;
                        }),
            avatar_decoration_sku_id: null === (r = p.avatarDecoration) || void 0 === r ? void 0 : r.skuId,
            profile_effect_sku_id: null == h ? void 0 : h.profileEffectId,
            user_status: b(p.id),
            is_guild_profile: (null == h ? void 0 : h.guildId) != null,
            is_bot_profile: p.bot
        };
    },
    S = (e) => {
        var n, r;
        let { userId: i } = e;
        return null == i
            ? {}
            : {
                  related_user_id: i,
                  relationship_type: d.Z.getRelationshipType(i),
                  related_since: d.Z.getSince(i),
                  num_mutual_friends: _.Z.getMutualFriendsCount(i),
                  num_mutual_guilds: null === (n = _.Z.getMutualGuilds(i)) || void 0 === n ? void 0 : n.length,
                  affinity: null === (r = s.Z.getUserAffinity(i)) || void 0 === r ? void 0 : r.affinity
              };
    },
    A = (e) => {
        let { guildId: n, channelId: r, messageId: i, roleId: a, analyticsLocations: s, action: l, section: u } = e;
        p.default.track(E.rMx.USER_PROFILE_ACTION, {
            ...(0, o.hH)(n),
            ...(0, o.JS)(r),
            ...T(e),
            ...S(e),
            location_stack: s,
            profile_action: l,
            profile_section: u,
            source_message_id: i,
            source_role_id: a
        });
    },
    C = (e) => {
        let { guildId: n, channelId: r, analyticsLocations: i, action: a, display: s, activity: l, stream: u, entry: c, outbox: d } = e;
        p.default.track(E.rMx.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, o.hH)(n),
            ...(0, o.JS)(r),
            ...T(e),
            ...S(e),
            location_stack: i,
            activity_action: a,
            activity_display: s,
            activity_type: I(null != u ? E.IIU.STREAMING : null == l ? void 0 : l.type),
            activity_name: null == l ? void 0 : l.name,
            activity_platform: null == l ? void 0 : l.platform,
            activity_session_id: null == l ? void 0 : l.session_id,
            activity_application_id: null == l ? void 0 : l.application_id,
            item_id: null == c ? void 0 : c.id,
            author_id_v2: null == c ? void 0 : c.author_id,
            item_ids:
                null == d
                    ? void 0
                    : d.entries.map((e) => {
                          let { id: n } = e;
                          return n;
                      }),
            author_ids_v2:
                null == d
                    ? void 0
                    : d.entries.map((e) => {
                          let { author_id: n } = e;
                          return n;
                      })
        });
    },
    N = (e) => {
        let { guildId: n, channelId: r, analyticsLocations: i, badge: a } = e;
        p.default.track(E.rMx.USER_PROFILE_BADGE_PRESSED, {
            ...(0, o.hH)(n),
            ...(0, o.JS)(r),
            ...T(e),
            ...S(e),
            location_stack: i,
            badge: a
        });
    },
    R = (e) => {
        let { guildId: n, channelId: r, analyticsLocations: i, badge: a } = e;
        p.default.track(E.rMx.USER_PROFILE_BADGE_HOVERED, {
            ...(0, o.hH)(n),
            ...(0, o.JS)(r),
            ...T(e),
            ...S(e),
            location_stack: i,
            badge: a
        });
    },
    O = (e) => {
        var n, r, i;
        let { displayProfile: a, isProfileOpen: o } = e,
            s = null == a ? void 0 : a.userId,
            u =
                null != s
                    ? c.Z.findActivity(s, (e) => {
                          let { type: n } = e;
                          return null != l.Z.getAnyStreamForUser(s) ? n === E.IIU.PLAYING : n !== E.IIU.CUSTOM_STATUS;
                      })
                    : null;
        p.default.track(E.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: o,
            has_images: !!(null !== (i = null == u ? void 0 : null === (n = u.assets) || void 0 === n ? void 0 : n.large_image) && void 0 !== i ? i : null == u ? void 0 : null === (r = u.assets) || void 0 === r ? void 0 : r.small_image),
            is_friend: d.Z.isFriend(s),
            viewed_profile_user_id: s,
            profile_has_nitro_customization: null == a ? void 0 : a.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == a ? void 0 : a.hasThemeColors(),
            profile_has_theme_animation: (null == a ? void 0 : a.popoutAnimationParticleType) != null
        });
    };
