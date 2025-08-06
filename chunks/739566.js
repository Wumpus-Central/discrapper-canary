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
    o = n(442837),
    a = n(592125),
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
    var t, n;
    let r = (0, o.e7)([a.Z], () => (null == e ? null : a.Z.getChannel(e.channel_id))),
        i = null == e || null == (t = e.author) ? void 0 : t.id,
        _ = null == r ? void 0 : r.guild_id,
        p = (0, o.e7)([s.ZP], () => (null == _ || null == i ? null : s.ZP.getMember(_, i))),
        h = (0, o.e7)([d.default], () => d.default.getUser(i), [i]),
        m = f.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : h),
        g = (0, o.e7)([c.Z], () => c.Z.getGuild(_), [_]),
        E = null == p ? void 0 : p.colorRoleId,
        y = (0, o.e7)([l.Z], () => (null != _ && null != E ? l.Z.getRole(_, E) : void 0), [_, E]),
        O = (0, o.e7)([u.Z], () => (null != i && (null == r ? void 0 : r.isPrivate()) ? u.Z.getNickname(i) : null));
    return null == e
        ? null
        : b({
              user: e.author,
              channel: r,
              guild: g,
              memberColorRole: y,
              userName: m,
              member: p,
              friendNickname: O,
              displayNameStyles:
                  null != (n = null == h ? void 0 : h.displayNameStyles) ? n : e.author.displayNameStyles,
          });
}
function h(e) {
    let t = a.Z.getChannel(e.channel_id);
    return E(e.author, t);
}
function m(e, t) {
    let n = g(e, t);
    return i()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function g(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, o.e7)([s.ZP], () => (null == r || null == n ? null : s.ZP.getMember(r, n))),
        a = (0, o.e7)([c.Z], () => c.Z.getGuild(r), [r]),
        d = null == i ? void 0 : i.colorRoleId,
        _ = (0, o.e7)([l.Z], () => (null != r && null != d ? l.Z.getRole(r, d) : void 0), [r, d]),
        p = (0, o.e7)([u.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null)),
        h = f.ZP.useName(e);
    return b({
        user: e,
        channel: t,
        guild: a,
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
        o = null == r || null == n ? null : s.ZP.getMember(r, n),
        a = null != r && (null == o ? void 0 : o.colorRoleId) != null ? l.Z.getRole(r, o.colorRoleId) : void 0,
        d = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
    return b({
        user: e,
        channel: t,
        guild: i,
        memberColorRole: a,
        member: o,
        friendNickname: d,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function b(e) {
    var t, n;
    let {
            user: r,
            channel: i,
            guild: o,
            memberColorRole: a,
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
        : (null == o ? void 0 : o.id) == null
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
                  colorRoleName: null == a ? void 0 : a.name,
                  colorRoleId: null == a ? void 0 : a.id,
                  iconRoleId: s.iconRoleId,
                  guildMemberAvatar: s.avatar,
                  guildMemberAvatarDecoration: s.avatarDecoration,
                  primaryGuild: null != (n = r.primaryGuild) ? n : void 0,
                  guildId: o.id,
                  authorId: r.id,
                  displayNameStyles: u,
              };
}
