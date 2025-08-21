n.d(t, {
    JZ: () => m,
    Sw: () => g,
    Uj: () => p,
    ZH: () => h,
    ZP: () => _,
    ij: () => E,
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
    return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n;
}
function p(e) {
    var t;
    let n = (0, a.e7)([o.Z], () => (null == e ? null : o.Z.getChannel(e.channel_id))),
        r = null == e || null == (t = e.author) ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        _ = (0, a.e7)([s.ZP], () => (null == i || null == r ? null : s.ZP.getMember(i, r))),
        p = (0, a.e7)([d.default], () => d.default.getUser(r), [r]),
        h = f.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : p),
        m = (0, a.e7)([c.Z], () => c.Z.getGuild(i), [i]),
        g = null == _ ? void 0 : _.colorRoleId,
        E = (0, a.e7)([l.Z], () => (null != i && null != g ? l.Z.getRole(i, g) : void 0), [i, g]),
        y = (0, a.e7)([u.Z], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? u.Z.getNickname(r) : null));
    return null == e
        ? null
        : b({
              user: e.author,
              channel: n,
              guild: m,
              memberColorRole: E,
              userName: h,
              member: _,
              friendNickname: y,
              displayNameStyles: null != p ? p.displayNameStyles : e.author.displayNameStyles,
          });
}
function h(e) {
    let t = o.Z.getChannel(e.channel_id);
    return E(e.author, t);
}
function m(e, t) {
    let n = g(e, t);
    return i()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function g(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, a.e7)([s.ZP], () => (null == r || null == n ? null : s.ZP.getMember(r, n))),
        o = (0, a.e7)([c.Z], () => c.Z.getGuild(r), [r]),
        d = null == i ? void 0 : i.colorRoleId,
        _ = (0, a.e7)([l.Z], () => (null != r && null != d ? l.Z.getRole(r, d) : void 0), [r, d]),
        p = (0, a.e7)([u.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null)),
        h = f.ZP.useName(e);
    return b({
        user: e,
        channel: t,
        guild: o,
        memberColorRole: _,
        member: i,
        userName: h,
        friendNickname: p,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function E(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = c.Z.getGuild(r),
        a = null == r || null == n ? null : s.ZP.getMember(r, n),
        o = null != r && (null == a ? void 0 : a.colorRoleId) != null ? l.Z.getRole(r, a.colorRoleId) : void 0,
        d = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
    return b({
        user: e,
        channel: t,
        guild: i,
        memberColorRole: o,
        member: a,
        friendNickname: d,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function b(e) {
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
        d = null == r ? "???" : null != l ? l : f.ZP.getName(r);
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
