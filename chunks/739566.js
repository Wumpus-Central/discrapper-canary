n.d(t, {
    JZ: () => h,
    Sw: () => m,
    Uj: () => _,
    ZH: () => p,
    ZP: () => f,
    ij: () => g
});
var i = n(512722),
    r = n.n(i),
    a = n(442837),
    s = n(592125),
    o = n(271383),
    l = n(430824),
    u = n(699516),
    c = n(594174),
    d = n(51144);
function f(e) {
    let t = _(e);
    return r()(null != t, 'Result cannot be null because the message is not null'), t;
}
function _(e) {
    var t;
    let n = (0, a.e7)([s.Z], () => (null == e ? null : s.Z.getChannel(e.channel_id))),
        i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
        r = null == n ? void 0 : n.guild_id,
        f = (0, a.e7)([o.ZP], () => (null == r || null == i ? null : o.ZP.getMember(r, i))),
        _ = (0, a.e7)([c.default], () => c.default.getUser(i), [i]),
        p = d.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : _),
        { guild: h, guildRoles: m } = (0, a.cj)(
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
        g = (0, a.e7)([u.Z], () => (null != i && (null == n ? void 0 : n.isPrivate()) ? u.Z.getNickname(i) : null));
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
    let t = s.Z.getChannel(e.channel_id);
    return g(e.author, t);
}
function h(e, t) {
    let n = m(e, t);
    return r()(null != n, 'Result cannot be null because user and channel are not null'), n;
}
function m(e, t) {
    let n = null == e ? void 0 : e.id,
        i = null == t ? void 0 : t.guild_id,
        r = (0, a.e7)([o.ZP], () => (null == i || null == n ? null : o.ZP.getMember(i, n))),
        { guild: s, guildRoles: c } = (0, a.cj)(
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
        f = (0, a.e7)([u.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null)),
        _ = d.ZP.useName(e);
    return E({
        user: e,
        channel: t,
        guild: s,
        guildRoles: c,
        member: r,
        userName: _,
        friendNickname: f
    });
}
function g(e, t) {
    let n = null == e ? void 0 : e.id,
        i = null == t ? void 0 : t.guild_id,
        r = l.Z.getGuild(i),
        a = null != i ? l.Z.getRoles(i) : void 0,
        s = null == i || null == n ? null : o.ZP.getMember(i, n),
        c = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
    return E({
        user: e,
        channel: t,
        guild: r,
        guildRoles: a,
        member: s,
        friendNickname: c
    });
}
function E(e) {
    var t, n, i, r;
    let { user: a, channel: s, guild: o, guildRoles: l, member: u, userName: c, friendNickname: f } = e,
        _ = null == a ? '???' : null != c ? c : d.ZP.getName(a);
    return (null == a ? void 0 : a.id) == null || null == s
        ? {
              nick: _,
              colorString: void 0
          }
        : (null == o ? void 0 : o.id) == null
          ? {
                nick: null != f ? f : _,
                colorString: void 0
            }
          : null == u
            ? {
                  nick: _,
                  colorString: void 0
              }
            : {
                  nick: null !== (n = u.nick) && void 0 !== n ? n : _,
                  colorString: null !== (i = u.colorString) && void 0 !== i ? i : void 0,
                  colorRoleName: null != u.colorRoleId && null != o ? (null == l ? void 0 : null === (t = l[u.colorRoleId]) || void 0 === t ? void 0 : t.name) : void 0,
                  colorRoleId: u.colorRoleId,
                  iconRoleId: u.iconRoleId,
                  guildMemberAvatar: u.avatar,
                  guildMemberAvatarDecoration: u.avatarDecoration,
                  primaryGuild: null !== (r = a.primaryGuild) && void 0 !== r ? r : void 0
              };
}
