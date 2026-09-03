n.d(t, { Ay: () => A, FT: () => T, X4: () => h, d8: () => p, m2: () => f, p_: () => I });
var i = n(284009),
    r = n.n(i),
    a = n(17928),
    s = n(609425),
    l = n(734057),
    o = n(696451),
    d = n(317525),
    c = n(71393),
    u = n(994500),
    _ = n(287809),
    E = n(427262);
function A(e, t) {
    let n = h(e);
    return r()(null != n, "Result cannot be null because the message is not null"), t ?? n;
}
function h(e) {
    let t = (0, a.bG)([l.A], () => (null == e ? null : l.A.getChannel(e.channel_id))),
        n = e?.author?.id,
        i = t?.guild_id,
        r = (0, a.bG)([o.Ay], () => (null == i || null == n ? null : o.Ay.getMember(i, n))),
        A = (0, a.bG)([_.default], () => _.default.getUser(n), [n]),
        h = E.Ay.useName(e?.author.bot ? e?.author : A),
        I = (0, a.bG)([c.A], () => c.A.getGuild(i), [i]),
        f = r?.colorRoleId,
        p = (0, a.bG)([d.A], () => (null != i && null != f ? d.A.getRole(i, f) : void 0), [i, f]),
        T = (0, a.bG)([u.A], () => (null != n && t?.isPrivate() ? u.A.getNickname(n) : null)),
        g = (0, s.A)({ userId: n, guildId: i });
    return null == e
        ? null
        : m({
              user: e.author,
              channel: t,
              guild: I,
              memberColorRole: p,
              userName: h,
              member: r,
              friendNickname: T,
              displayNameStyles: g,
          });
}
function I(e) {
    let t = l.A.getChannel(e.channel_id);
    return T(e.author, t);
}
function f(e, t) {
    let n = p(e, t);
    return r()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function p(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = (0, a.bG)([o.Ay], () => (null == i || null == n ? null : o.Ay.getMember(i, n))),
        s = (0, a.bG)([c.A], () => c.A.getGuild(i), [i]),
        l = r?.colorRoleId,
        _ = (0, a.bG)([d.A], () => (null != i && null != l ? d.A.getRole(i, l) : void 0), [i, l]),
        A = (0, a.bG)([u.A], () => (null != n && t?.isPrivate() ? u.A.getNickname(n) : null)),
        h = E.Ay.useName(e);
    return m({
        user: e,
        channel: t,
        guild: s,
        memberColorRole: _,
        member: r,
        userName: h,
        friendNickname: A,
        displayNameStyles: e?.displayNameStyles,
    });
}
function T(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = c.A.getGuild(i),
        a = null == i || null == n ? null : o.Ay.getMember(i, n),
        s = null != i && a?.colorRoleId != null ? d.A.getRole(i, a.colorRoleId) : void 0,
        l = null != n && null != t && t.isPrivate() ? u.A.getNickname(n) : null;
    return m({
        user: e,
        channel: t,
        guild: r,
        memberColorRole: s,
        member: a,
        friendNickname: l,
        displayNameStyles: e?.displayNameStyles,
    });
}
function m(e) {
    let {
            user: t,
            channel: n,
            guild: i,
            memberColorRole: r,
            member: a,
            userName: s,
            friendNickname: l,
            displayNameStyles: o,
        } = e,
        d = null == t ? "???" : (s ?? E.Ay.getName(t));
    return t?.id == null || null == n
        ? { nick: d, colorString: null, colorStrings: null, displayNameStyles: o }
        : i?.id == null
          ? { nick: l ?? d, colorString: null, colorStrings: null, displayNameStyles: o }
          : null == a
            ? { nick: d, colorString: null, colorStrings: null, displayNameStyles: o }
            : {
                  nick: a.nick ?? d,
                  colorString: a.colorString,
                  colorStrings: a.colorStrings,
                  colorRoleName: r?.name,
                  colorRoleId: r?.id,
                  iconRoleId: a.iconRoleId,
                  guildMemberAvatar: a.avatar,
                  guildMemberAvatarDecoration: a.avatarDecoration,
                  primaryGuild: t.primaryGuild ?? void 0,
                  guildId: i.id,
                  authorId: t.id,
                  displayNameStyles: o,
              };
}
