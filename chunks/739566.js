n.d(t, {
    JZ: () => g,
    Sw: () => E,
    Uj: () => m,
    ZH: () => h,
    ZP: () => _,
    ij: () => b,
});
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(386725),
    s = n(592125),
    l = n(271383),
    c = n(485386),
    u = n(430824),
    d = n(699516),
    f = n(594174),
    p = n(51144);
function _(e, t) {
    let n = m(e);
    return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n;
}
function m(e) {
    var t;
    let n = (0, a.e7)([s.Z], () => (null == e ? null : s.Z.getChannel(e.channel_id))),
        r = null == e || null == (t = e.author) ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        _ = (0, a.e7)([l.ZP], () => (null == i || null == r ? null : l.ZP.getMember(i, r))),
        m = (0, a.e7)([f.default], () => f.default.getUser(r), [r]),
        h = p.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : m),
        g = (0, a.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        E = null == _ ? void 0 : _.colorRoleId,
        b = (0, a.e7)([c.Z], () => (null != i && null != E ? c.Z.getRole(i, E) : void 0), [i, E]),
        O = (0, a.e7)([d.Z], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? d.Z.getNickname(r) : null)),
        v = (0, o.Z)({
            userId: r,
            guildId: i,
        });
    return null == e
        ? null
        : y({
              user: e.author,
              channel: n,
              guild: g,
              memberColorRole: b,
              userName: h,
              member: _,
              friendNickname: O,
              displayNameStyles: v,
          });
}
function h(e) {
    let t = s.Z.getChannel(e.channel_id);
    return b(e.author, t);
}
function g(e, t) {
    let n = E(e, t);
    return i()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function E(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, a.e7)([l.ZP], () => (null == r || null == n ? null : l.ZP.getMember(r, n))),
        o = (0, a.e7)([u.Z], () => u.Z.getGuild(r), [r]),
        s = null == i ? void 0 : i.colorRoleId,
        f = (0, a.e7)([c.Z], () => (null != r && null != s ? c.Z.getRole(r, s) : void 0), [r, s]),
        _ = (0, a.e7)([d.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? d.Z.getNickname(n) : null)),
        m = p.ZP.useName(e);
    return y({
        user: e,
        channel: t,
        guild: o,
        memberColorRole: f,
        member: i,
        userName: m,
        friendNickname: _,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function b(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = u.Z.getGuild(r),
        a = null == r || null == n ? null : l.ZP.getMember(r, n),
        o = null != r && (null == a ? void 0 : a.colorRoleId) != null ? c.Z.getRole(r, a.colorRoleId) : void 0,
        s = null != n && null != t && t.isPrivate() ? d.Z.getNickname(n) : null;
    return y({
        user: e,
        channel: t,
        guild: i,
        memberColorRole: o,
        member: a,
        friendNickname: s,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function y(e) {
    var t, n;
    let {
            user: r,
            channel: i,
            guild: a,
            memberColorRole: o,
            member: s,
            userName: l,
            friendNickname: c,
            displayNameStyles: u,
        } = e,
        d = null == r ? "???" : null != l ? l : p.ZP.getName(r);
    return (null == r ? void 0 : r.id) == null || null == i
        ? {
              nick: d,
              colorString: null,
              colorStrings: null,
              displayNameStyles: u,
          }
        : (null == a ? void 0 : a.id) == null
          ? {
                nick: null != c ? c : d,
                colorString: null,
                colorStrings: null,
                displayNameStyles: u,
            }
          : null == s
            ? {
                  nick: d,
                  colorString: null,
                  colorStrings: null,
                  displayNameStyles: u,
              }
            : {
                  nick: null != (t = s.nick) ? t : d,
                  colorString: s.colorString,
                  colorStrings: s.colorStrings,
                  colorRoleName: null == o ? void 0 : o.name,
                  colorRoleId: null == o ? void 0 : o.id,
                  iconRoleId: s.iconRoleId,
                  guildMemberAvatar: s.avatar,
                  guildMemberAvatarDecoration: s.avatarDecoration,
                  primaryGuild: null != (n = r.primaryGuild) ? n : void 0,
                  guildId: a.id,
                  authorId: r.id,
                  displayNameStyles: u,
              };
}
