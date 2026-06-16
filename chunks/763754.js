"use strict";
n.d(t, { Ay: () => f, FT: () => A, X4: () => p, d8: () => g, m2: () => m, p_: () => E });
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(609425),
    o = n(734057),
    l = n(696451),
    u = n(317525),
    c = n(71393),
    d = n(994500),
    _ = n(287809),
    h = n(427262);
function f(e, t) {
    let n = p(e);
    return r()(null != n, "Result cannot be null because the message is not null"), t ?? n;
}
function p(e) {
    let t = (0, s.bG)([o.A], () => (null == e ? null : o.A.getChannel(e.channel_id))),
        n = e?.author?.id,
        i = t?.guild_id,
        r = (0, s.bG)([l.Ay], () => (null == i || null == n ? null : l.Ay.getMember(i, n))),
        f = (0, s.bG)([_.default], () => _.default.getUser(n), [n]),
        p = h.Ay.useName(e?.author.bot ? e?.author : f),
        E = (0, s.bG)([c.A], () => c.A.getGuild(i), [i]),
        m = r?.colorRoleId,
        g = (0, s.bG)([u.A], () => (null != i && null != m ? u.A.getRole(i, m) : void 0), [i, m]),
        A = (0, s.bG)([d.A], () => (null != n && t?.isPrivate() ? d.A.getNickname(n) : null)),
        T = (0, a.A)({ userId: n, guildId: i });
    return null == e
        ? null
        : I({
              user: e.author,
              channel: t,
              guild: E,
              memberColorRole: g,
              userName: p,
              member: r,
              friendNickname: A,
              displayNameStyles: T,
          });
}
function E(e) {
    let t = o.A.getChannel(e.channel_id);
    return A(e.author, t);
}
function m(e, t) {
    let n = g(e, t);
    return r()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function g(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = (0, s.bG)([l.Ay], () => (null == i || null == n ? null : l.Ay.getMember(i, n))),
        a = (0, s.bG)([c.A], () => c.A.getGuild(i), [i]),
        o = r?.colorRoleId,
        _ = (0, s.bG)([u.A], () => (null != i && null != o ? u.A.getRole(i, o) : void 0), [i, o]),
        f = (0, s.bG)([d.A], () => (null != n && t?.isPrivate() ? d.A.getNickname(n) : null)),
        p = h.Ay.useName(e);
    return I({
        user: e,
        channel: t,
        guild: a,
        memberColorRole: _,
        member: r,
        userName: p,
        friendNickname: f,
        displayNameStyles: e?.displayNameStyles,
    });
}
function A(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = c.A.getGuild(i),
        s = null == i || null == n ? null : l.Ay.getMember(i, n),
        a = null != i && s?.colorRoleId != null ? u.A.getRole(i, s.colorRoleId) : void 0,
        o = null != n && null != t && t.isPrivate() ? d.A.getNickname(n) : null;
    return I({
        user: e,
        channel: t,
        guild: r,
        memberColorRole: a,
        member: s,
        friendNickname: o,
        displayNameStyles: e?.displayNameStyles,
    });
}
function I(e) {
    let {
            user: t,
            channel: n,
            guild: i,
            memberColorRole: r,
            member: s,
            userName: a,
            friendNickname: o,
            displayNameStyles: l,
        } = e,
        u = null == t ? "???" : (a ?? h.Ay.getName(t));
    return t?.id == null || null == n
        ? { nick: u, colorString: null, colorStrings: null, displayNameStyles: l }
        : i?.id == null
          ? { nick: o ?? u, colorString: null, colorStrings: null, displayNameStyles: l }
          : null == s
            ? { nick: u, colorString: null, colorStrings: null, displayNameStyles: l }
            : {
                  nick: s.nick ?? u,
                  colorString: s.colorString,
                  colorStrings: s.colorStrings,
                  colorRoleName: r?.name,
                  colorRoleId: r?.id,
                  iconRoleId: s.iconRoleId,
                  guildMemberAvatar: s.avatar,
                  guildMemberAvatarDecoration: s.avatarDecoration,
                  primaryGuild: t.primaryGuild ?? void 0,
                  guildId: i.id,
                  authorId: t.id,
                  displayNameStyles: l,
              };
}
