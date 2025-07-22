n.d(t, {
    JZ: () => m,
    Sw: () => g,
    Uj: () => p,
    ZH: () => h,
    ZP: () => f,
    ij: () => E
});
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(592125),
    s = n(271383),
    l = n(485386),
    c = n(430824),
    u = n(699516),
    d = n(594174),
    _ = n(51144);
function f(e, t) {
    let n = p(e);
    return (i()(null != n, 'Result cannot be null because the message is not null'), null != t ? t : n);
}
function p(e) {
    var t;
    let n = (0, a.e7)([o.Z], () => (null == e ? null : o.Z.getChannel(e.channel_id))),
        r = null == e || null == (t = e.author) ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        f = (0, a.e7)([s.ZP], () => (null == i || null == r ? null : s.ZP.getMember(i, r))),
        p = (0, a.e7)([d.default], () => d.default.getUser(r), [r]),
        h = _.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : p),
        { guild: m, guildRoles: g } = (0, a.cj)(
            [c.Z, l.Z],
            () => {
                let e = c.Z.getGuild(i),
                    t = null != e ? l.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [i]
        ),
        E = (0, a.e7)([u.Z], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? u.Z.getNickname(r) : null));
    return null == e
        ? null
        : b({
              user: e.author,
              channel: n,
              guild: m,
              guildRoles: g,
              userName: h,
              member: f,
              friendNickname: E
          });
}
function h(e) {
    let t = o.Z.getChannel(e.channel_id);
    return E(e.author, t);
}
function m(e, t) {
    let n = g(e, t);
    return (i()(null != n, 'Result cannot be null because user and channel are not null'), n);
}
function g(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, a.e7)([s.ZP], () => (null == r || null == n ? null : s.ZP.getMember(r, n))),
        { guild: o, guildRoles: d } = (0, a.cj)(
            [c.Z, l.Z],
            () => {
                let e = c.Z.getGuild(r),
                    t = null != e ? l.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [r]
        ),
        f = (0, a.e7)([u.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null)),
        p = _.ZP.useName(e);
    return b({
        user: e,
        channel: t,
        guild: o,
        guildRoles: d,
        member: i,
        userName: p,
        friendNickname: f
    });
}
function E(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = c.Z.getGuild(r),
        a = null != r ? l.Z.getRoles(r) : void 0,
        o = null == r || null == n ? null : s.ZP.getMember(r, n),
        d = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
    return b({
        user: e,
        channel: t,
        guild: i,
        guildRoles: a,
        member: o,
        friendNickname: d
    });
}
function b(e) {
    var t, n, r, i, a, o;
    let { user: s, channel: l, guild: c, guildRoles: u, member: d, userName: f, friendNickname: p } = e,
        h = null == s ? '???' : null != f ? f : _.ZP.getName(s),
        m = null != (n = null == s ? void 0 : s.displayNameStyles) ? n : void 0;
    return (null == s ? void 0 : s.id) == null || null == l
        ? {
              nick: h,
              colorString: void 0,
              colorStrings: void 0,
              displayNameStyles: m
          }
        : (null == c ? void 0 : c.id) == null
          ? {
                nick: null != p ? p : h,
                colorString: void 0,
                colorStrings: void 0,
                displayNameStyles: m
            }
          : null == d
            ? {
                  nick: h,
                  colorString: void 0,
                  colorStrings: void 0,
                  displayNameStyles: m
              }
            : {
                  nick: null != (r = d.nick) ? r : h,
                  colorString: null != (i = d.colorString) ? i : void 0,
                  colorStrings: null != (a = d.colorStrings) ? a : void 0,
                  colorRoleName: null != d.colorRoleId && null != c ? (null == u || null == (t = u[d.colorRoleId]) ? void 0 : t.name) : void 0,
                  colorRoleId: d.colorRoleId,
                  iconRoleId: d.iconRoleId,
                  guildMemberAvatar: d.avatar,
                  guildMemberAvatarDecoration: d.avatarDecoration,
                  primaryGuild: null != (o = s.primaryGuild) ? o : void 0,
                  guildId: c.id,
                  authorId: s.id,
                  displayNameStyles: m
              };
}
