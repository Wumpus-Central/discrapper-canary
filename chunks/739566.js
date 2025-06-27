n.d(t, {
    JZ: () => m,
    Sw: () => g,
    Uj: () => p,
    ZH: () => h,
    ZP: () => _,
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
    f = n(51144);
function _(e, t) {
    let n = p(e);
    return i()(null != n, 'Result cannot be null because the message is not null'), null != t ? t : n;
}
function p(e) {
    var t;
    let n = (0, a.e7)([o.Z], () => (null == e ? null : o.Z.getChannel(e.channel_id))),
        r = null == e || null == (t = e.author) ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        _ = (0, a.e7)([s.ZP], () => (null == i || null == r ? null : s.ZP.getMember(i, r))),
        p = (0, a.e7)([d.default], () => d.default.getUser(r), [r]),
        h = f.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : p),
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
              member: _,
              friendNickname: E
          });
}
function h(e) {
    let t = o.Z.getChannel(e.channel_id);
    return E(e.author, t);
}
function m(e, t) {
    let n = g(e, t);
    return i()(null != n, 'Result cannot be null because user and channel are not null'), n;
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
        _ = (0, a.e7)([u.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null)),
        p = f.ZP.useName(e);
    return b({
        user: e,
        channel: t,
        guild: o,
        guildRoles: d,
        member: i,
        userName: p,
        friendNickname: _
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
    var t, n, r, i, a;
    let { user: o, channel: s, guild: l, guildRoles: c, member: u, userName: d, friendNickname: _ } = e,
        p = null == o ? '???' : null != d ? d : f.ZP.getName(o);
    return (null == o ? void 0 : o.id) == null || null == s
        ? {
              nick: p,
              colorString: void 0,
              colorStrings: void 0
          }
        : (null == l ? void 0 : l.id) == null
          ? {
                nick: null != _ ? _ : p,
                colorString: void 0,
                colorStrings: void 0
            }
          : null == u
            ? {
                  nick: p,
                  colorString: void 0,
                  colorStrings: void 0
              }
            : {
                  nick: null != (n = u.nick) ? n : p,
                  colorString: null != (r = u.colorString) ? r : void 0,
                  colorStrings: null != (i = u.colorStrings) ? i : void 0,
                  colorRoleName: null != u.colorRoleId && null != l ? (null == c || null == (t = c[u.colorRoleId]) ? void 0 : t.name) : void 0,
                  colorRoleId: u.colorRoleId,
                  iconRoleId: u.iconRoleId,
                  guildMemberAvatar: u.avatar,
                  guildMemberAvatarDecoration: u.avatarDecoration,
                  primaryGuild: null != (a = o.primaryGuild) ? a : void 0,
                  guildId: l.id,
                  authorId: o.id
              };
}
