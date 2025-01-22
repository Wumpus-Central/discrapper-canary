r.d(n, {
    JZ: function () {
        return m;
    },
    Sw: function () {
        return g;
    },
    Uj: function () {
        return h;
    },
    ZH: function () {
        return _;
    },
    ZP: function () {
        return p;
    },
    ij: function () {
        return E;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(442837),
    s = r(592125),
    l = r(271383),
    u = r(430824),
    c = r(699516),
    d = r(594174),
    f = r(51144);
function p(e) {
    let n = h(e);
    return a()(null != n, 'Result cannot be null because the message is not null'), n;
}
function h(e) {
    var n;
    let r = (0, o.e7)([s.Z], () => (null == e ? null : s.Z.getChannel(e.channel_id))),
        i = null == e ? void 0 : null === (n = e.author) || void 0 === n ? void 0 : n.id,
        a = null == r ? void 0 : r.guild_id,
        p = (0, o.e7)([l.ZP], () => (null == a || null == i ? null : l.ZP.getMember(a, i))),
        h = (0, o.e7)([d.default], () => d.default.getUser(i), [i]),
        _ = f.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : h),
        { guild: m, guildRoles: g } = (0, o.cj)(
            [u.Z],
            () => {
                let e = u.Z.getGuild(a),
                    n = null != e ? u.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: n
                };
            },
            [a]
        ),
        E = (0, o.e7)([c.Z], () => (null != i && (null == r ? void 0 : r.isPrivate()) ? c.Z.getNickname(i) : null));
    return null == e
        ? null
        : v({
              user: e.author,
              channel: r,
              guild: m,
              guildRoles: g,
              userName: _,
              member: p,
              friendNickname: E
          });
}
function _(e) {
    let n = s.Z.getChannel(e.channel_id);
    return E(e.author, n);
}
function m(e, n) {
    let r = g(e, n);
    return a()(null != r, 'Result cannot be null because user and channel are not null'), r;
}
function g(e, n) {
    let r = null == e ? void 0 : e.id,
        i = null == n ? void 0 : n.guild_id,
        a = (0, o.e7)([l.ZP], () => (null == i || null == r ? null : l.ZP.getMember(i, r))),
        { guild: s, guildRoles: d } = (0, o.cj)(
            [u.Z],
            () => {
                let e = u.Z.getGuild(i),
                    n = null != e ? u.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: n
                };
            },
            [i]
        ),
        p = (0, o.e7)([c.Z], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? c.Z.getNickname(r) : null)),
        h = f.ZP.useName(e);
    return v({
        user: e,
        channel: n,
        guild: s,
        guildRoles: d,
        member: a,
        userName: h,
        friendNickname: p
    });
}
function E(e, n) {
    let r = null == e ? void 0 : e.id,
        i = null == n ? void 0 : n.guild_id,
        a = u.Z.getGuild(i),
        o = null != i ? u.Z.getRoles(i) : void 0,
        s = null == i || null == r ? null : l.ZP.getMember(i, r),
        d = null != r && null != n && n.isPrivate() ? c.Z.getNickname(r) : null;
    return v({
        user: e,
        channel: n,
        guild: a,
        guildRoles: o,
        member: s,
        friendNickname: d
    });
}
function v(e) {
    var n, r, i, a;
    let { user: o, channel: s, guild: l, guildRoles: u, member: c, userName: d, friendNickname: p } = e,
        h = null == o ? '???' : null != d ? d : f.ZP.getName(o);
    return (null == o ? void 0 : o.id) == null || null == s
        ? {
              nick: h,
              colorString: void 0
          }
        : (null == l ? void 0 : l.id) == null
          ? {
                nick: null != p ? p : h,
                colorString: void 0
            }
          : null == c
            ? {
                  nick: h,
                  colorString: void 0
              }
            : {
                  nick: null !== (r = c.nick) && void 0 !== r ? r : h,
                  colorString: null !== (i = c.colorString) && void 0 !== i ? i : void 0,
                  colorRoleName: null != c.colorRoleId && null != l ? (null == u ? void 0 : null === (n = u[c.colorRoleId]) || void 0 === n ? void 0 : n.name) : void 0,
                  colorRoleId: c.colorRoleId,
                  iconRoleId: c.iconRoleId,
                  guildMemberAvatar: c.avatar,
                  guildMemberAvatarDecoration: c.avatarDecoration,
                  primaryGuild: null !== (a = o.primaryGuild) && void 0 !== a ? a : void 0
              };
}
