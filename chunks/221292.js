r.d(n, {
    NE: function () {
        return C;
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
        return N;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(367907),
    o = r(814443),
    l = r(199902),
    u = r(271383),
    c = r(158776),
    d = r(699516),
    f = r(594174),
    _ = r(626135),
    h = r(768581),
    p = r(621853),
    m = r(687158),
    g = r(228168),
    E = r(981631),
    v = r(231338);
let I = (e) => {
        let { user: n, userProfile: r, guildMember: i, guildMemberProfile: a } = e,
            s = null != r ? r : a,
            o = [];
        if (((null == i ? void 0 : i.nick) && o.push(g.cm.NICKNAME), (null == s ? void 0 : s.pronouns) && o.push(g.cm.PRONOUNS), null == n ? void 0 : n.avatar)) {
            let e = (0, h.xR)(null == n ? void 0 : n.avatar);
            o.push(e ? g.cm.ANIMATED_AVATAR : g.cm.AVATAR);
        }
        if (null == s ? void 0 : s.banner) {
            let e = (0, h.xR)(null == s ? void 0 : s.banner);
            o.push(e ? g.cm.ANIMATED_BANNER : g.cm.BANNER);
        }
        return (null == s ? void 0 : s.bio) && o.push(g.cm.BIO), (null == s ? void 0 : s.themeColors) != null && void 0 !== s.themeColors.find((e) => null !== e) && o.push(g.cm.THEME), (null == n ? void 0 : n.avatarDecoration) != null && o.push(g.cm.AVATAR_DECORATION), (null == s ? void 0 : s.profileEffectId) != null && o.push(g.cm.PROFILE_EFFECT), o;
    },
    T = (e) => {
        let n = c.Z.getStatus(e),
            r = c.Z.isMobileOnline(e);
        return n === v.Sk.ONLINE && r ? ''.concat(n, '-mobile') : n === v.Sk.ONLINE ? ''.concat(n, '-desktop') : n;
    },
    b = (e) => (null == e ? e : 'VOICE' === e ? 'VOICE' : Object.keys(E.IIU)[Object.values(E.IIU).indexOf(e)]),
    y = (e) => {
        var n, r;
        let { layout: i, userId: a, guildId: s, sessionId: o, sourceSessionId: l, showGuildProfile: d = !0 } = e,
            _ = f.default.getUser(a);
        if (null == _) return {};
        let h = (0, m.Of)(null == _ ? void 0 : _.id, d ? s : void 0),
            p = d && null != s ? u.ZP.getMember(s, null == _ ? void 0 : _.id) : null;
        return {
            profile_layout: i,
            profile_session_id: o,
            source_profile_session_id: l,
            profile_properties: I({
                user: _,
                userProfile: null == h ? void 0 : h._userProfile
            }),
            guild_profile_properties: I({
                guildMember: p,
                guildMemberProfile: null == h ? void 0 : h._guildMemberProfile
            }),
            profile_activity_types: c.Z.getActivities(_.id)
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
            avatar_decoration_sku_id: null === (r = _.avatarDecoration) || void 0 === r ? void 0 : r.skuId,
            profile_effect_sku_id: null == h ? void 0 : h.profileEffectId,
            user_status: T(_.id),
            is_guild_profile: (null == h ? void 0 : h.guildId) != null,
            is_bot_profile: _.bot
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
                  num_mutual_friends: p.Z.getMutualFriendsCount(i),
                  num_mutual_guilds: null === (n = p.Z.getMutualGuilds(i)) || void 0 === n ? void 0 : n.length,
                  affinity: null === (r = o.Z.getUserAffinity(i)) || void 0 === r ? void 0 : r.affinity
              };
    },
    A = (e) => {
        let { guildId: n, channelId: r, messageId: i, roleId: a, analyticsLocations: o, action: l, section: u } = e;
        _.default.track(E.rMx.USER_PROFILE_ACTION, {
            ...(0, s.hH)(n),
            ...(0, s.JS)(r),
            ...y(e),
            ...S(e),
            location_stack: o,
            profile_action: l,
            profile_section: u,
            source_message_id: i,
            source_role_id: a
        });
    },
    N = (e) => {
        let { guildId: n, channelId: r, analyticsLocations: i, action: a, display: o, activity: l, stream: u, entry: c, outbox: d } = e;
        _.default.track(E.rMx.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, s.hH)(n),
            ...(0, s.JS)(r),
            ...y(e),
            ...S(e),
            location_stack: i,
            activity_action: a,
            activity_display: o,
            activity_type: b(null != u ? E.IIU.STREAMING : null == l ? void 0 : l.type),
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
    C = (e) => {
        let { guildId: n, channelId: r, analyticsLocations: i, badge: a } = e;
        _.default.track(E.rMx.USER_PROFILE_BADGE_PRESSED, {
            ...(0, s.hH)(n),
            ...(0, s.JS)(r),
            ...y(e),
            ...S(e),
            location_stack: i,
            badge: a
        });
    },
    R = (e) => {
        let { guildId: n, channelId: r, analyticsLocations: i, badge: a } = e;
        _.default.track(E.rMx.USER_PROFILE_BADGE_HOVERED, {
            ...(0, s.hH)(n),
            ...(0, s.JS)(r),
            ...y(e),
            ...S(e),
            location_stack: i,
            badge: a
        });
    },
    O = (e) => {
        var n, r, i;
        let { displayProfile: a, isProfileOpen: s } = e,
            o = null == a ? void 0 : a.userId,
            u =
                null != o
                    ? c.Z.findActivity(o, (e) => {
                          let { type: n } = e;
                          return null != l.Z.getAnyStreamForUser(o) ? n === E.IIU.PLAYING : n !== E.IIU.CUSTOM_STATUS;
                      })
                    : null;
        _.default.track(E.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: s,
            has_images: !!(null !== (i = null == u ? void 0 : null === (n = u.assets) || void 0 === n ? void 0 : n.large_image) && void 0 !== i ? i : null == u ? void 0 : null === (r = u.assets) || void 0 === r ? void 0 : r.small_image),
            is_friend: d.Z.isFriend(o),
            viewed_profile_user_id: o,
            profile_has_nitro_customization: null == a ? void 0 : a.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == a ? void 0 : a.hasThemeColors(),
            profile_has_theme_animation: (null == a ? void 0 : a.popoutAnimationParticleType) != null
        });
    };
