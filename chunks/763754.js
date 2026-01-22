n.d(t, {
    Ay: () => _,
    FT: () => b,
    X4: () => h,
    d8: () => E,
    m2: () => g,
    p_: () => m,
});
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    s = n(609425),
    o = n(734057),
    l = n(696451),
    c = n(317525),
    u = n(71393),
    d = n(994500),
    f = n(287809),
    p = n(427262);
function _(e, t) {
    let n = h(e);
    return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n;
}
function h(e) {
    var t;
    let n = (0, a.bG)([o.A], () => (null == e ? null : o.A.getChannel(e.channel_id))),
        r = null == e || null == (t = e.author) ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        _ = (0, a.bG)([l.Ay], () => (null == i || null == r ? null : l.Ay.getMember(i, r))),
        h = (0, a.bG)([f.default], () => f.default.getUser(r), [r]),
        m = p.Ay.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : h),
        g = (0, a.bG)([u.A], () => u.A.getGuild(i), [i]),
        E = null == _ ? void 0 : _.colorRoleId,
        b = (0, a.bG)([c.A], () => (null != i && null != E ? c.A.getRole(i, E) : void 0), [i, E]),
        O = (0, a.bG)([d.A], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? d.A.getNickname(r) : null)),
        A = (0, s.A)({
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
              userName: m,
              member: _,
              friendNickname: O,
              displayNameStyles: A,
          });
}
function m(e) {
    let t = o.A.getChannel(e.channel_id);
    return b(e.author, t);
}
function g(e, t) {
    let n = E(e, t);
    return i()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function E(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, a.bG)([l.Ay], () => (null == r || null == n ? null : l.Ay.getMember(r, n))),
        s = (0, a.bG)([u.A], () => u.A.getGuild(r), [r]),
        o = null == i ? void 0 : i.colorRoleId,
        f = (0, a.bG)([c.A], () => (null != r && null != o ? c.A.getRole(r, o) : void 0), [r, o]),
        _ = (0, a.bG)([d.A], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? d.A.getNickname(n) : null)),
        h = p.Ay.useName(e);
    return y({
        user: e,
        channel: t,
        guild: s,
        memberColorRole: f,
        member: i,
        userName: h,
        friendNickname: _,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function b(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = u.A.getGuild(r),
        a = null == r || null == n ? null : l.Ay.getMember(r, n),
        s = null != r && (null == a ? void 0 : a.colorRoleId) != null ? c.A.getRole(r, a.colorRoleId) : void 0,
        o = null != n && null != t && t.isPrivate() ? d.A.getNickname(n) : null;
    return y({
        user: e,
        channel: t,
        guild: i,
        memberColorRole: s,
        member: a,
        friendNickname: o,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
    });
}
function y(e) {
    var t, n;
    let {
            user: r,
            channel: i,
            guild: a,
            memberColorRole: s,
            member: o,
            userName: l,
            friendNickname: c,
            displayNameStyles: u,
        } = e,
        d = null == r ? "???" : null != l ? l : p.Ay.getName(r);
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
          : null == o
            ? {
                  nick: d,
                  colorString: null,
                  colorStrings: null,
                  displayNameStyles: u,
              }
            : {
                  nick: null != (t = o.nick) ? t : d,
                  colorString: o.colorString,
                  colorStrings: o.colorStrings,
                  colorRoleName: null == s ? void 0 : s.name,
                  colorRoleId: null == s ? void 0 : s.id,
                  iconRoleId: o.iconRoleId,
                  guildMemberAvatar: o.avatar,
                  guildMemberAvatarDecoration: o.avatarDecoration,
                  primaryGuild: null != (n = r.primaryGuild) ? n : void 0,
                  guildId: a.id,
                  authorId: r.id,
                  displayNameStyles: u,
              };
}
