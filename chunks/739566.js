n.d(t, {
    JZ: () => h,
    Sw: () => m,
    Uj: () => _,
    ZH: () => p,
    ZP: () => f,
    ij: () => g
});
var r = n(512722),
    i = n.n(r),
    o = n(442837),
    a = n(592125),
    s = n(271383),
    l = n(430824),
    c = n(699516),
    u = n(594174),
    d = n(51144);
function f(e) {
    let t = _(e);
    return i()(null != t, 'Result cannot be null because the message is not null'), t;
}
function _(e) {
    var t;
    let n = (0, o.e7)([a.Z], () => (null == e ? null : a.Z.getChannel(e.channel_id))),
        r = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        f = (0, o.e7)([s.ZP], () => (null == i || null == r ? null : s.ZP.getMember(i, r))),
        _ = (0, o.e7)([u.default], () => u.default.getUser(r), [r]),
        p = d.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : _),
        { guild: h, guildRoles: m } = (0, o.cj)(
            [l.Z],
            () => {
                let e = l.Z.getGuild(i),
                    t = null != e ? l.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [i]
        ),
        g = (0, o.e7)([c.Z], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? c.Z.getNickname(r) : null));
    return null == e
        ? null
        : E({
              user: e.author,
              channel: n,
              guild: h,
              guildRoles: m,
              userName: p,
              member: f,
              friendNickname: g
          });
}
function p(e) {
    let t = a.Z.getChannel(e.channel_id);
    return g(e.author, t);
}
function h(e, t) {
    let n = m(e, t);
    return i()(null != n, 'Result cannot be null because user and channel are not null'), n;
}
function m(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, o.e7)([s.ZP], () => (null == r || null == n ? null : s.ZP.getMember(r, n))),
        { guild: a, guildRoles: u } = (0, o.cj)(
            [l.Z],
            () => {
                let e = l.Z.getGuild(r),
                    t = null != e ? l.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [r]
        ),
        f = (0, o.e7)([c.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? c.Z.getNickname(n) : null)),
        _ = d.ZP.useName(e);
    return E({
        user: e,
        channel: t,
        guild: a,
        guildRoles: u,
        member: i,
        userName: _,
        friendNickname: f
    });
}
function g(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = l.Z.getGuild(r),
        o = null != r ? l.Z.getRoles(r) : void 0,
        a = null == r || null == n ? null : s.ZP.getMember(r, n),
        u = null != n && null != t && t.isPrivate() ? c.Z.getNickname(n) : null;
    return E({
        user: e,
        channel: t,
        guild: i,
        guildRoles: o,
        member: a,
        friendNickname: u
    });
}
function E(e) {
    var t, n, r, i, o;
    let { user: a, channel: s, guild: l, guildRoles: c, member: u, userName: f, friendNickname: _ } = e,
        p = null == a ? '???' : null != f ? f : d.ZP.getName(a);
    return (null == a ? void 0 : a.id) == null || null == s
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
                  nick: null !== (n = u.nick) && void 0 !== n ? n : p,
                  colorString: null !== (r = u.colorString) && void 0 !== r ? r : void 0,
                  colorStrings: null !== (i = u.colorStrings) && void 0 !== i ? i : void 0,
                  colorRoleName: null != u.colorRoleId && null != l ? (null == c ? void 0 : null === (t = c[u.colorRoleId]) || void 0 === t ? void 0 : t.name) : void 0,
                  colorRoleId: u.colorRoleId,
                  iconRoleId: u.iconRoleId,
                  guildMemberAvatar: u.avatar,
                  guildMemberAvatarDecoration: u.avatarDecoration,
                  primaryGuild: null !== (o = a.primaryGuild) && void 0 !== o ? o : void 0,
                  guildId: l.id
              };
}
