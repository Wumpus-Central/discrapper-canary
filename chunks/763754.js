"use strict";
n.d(t, { Ay: () => h, FT: () => A, X4: () => m, d8: () => p, m2: () => g, p_: () => f });
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(609425),
    o = n(734057),
    l = n(696451),
    d = n(317525),
    _ = n(71393),
    u = n(994500),
    c = n(287809),
    E = n(427262);
function h(e, t) {
    let n = m(e);
    return r()(null != n, "Result cannot be null because the message is not null"), t ?? n;
}
function m(e) {
    let t = (0, s.bG)([o.A], () => (null == e ? null : o.A.getChannel(e.channel_id))),
        n = e?.author?.id,
        i = t?.guild_id,
        r = (0, s.bG)([l.Ay], () => (null == i || null == n ? null : l.Ay.getMember(i, n))),
        h = (0, s.bG)([c.default], () => c.default.getUser(n), [n]),
        m = E.Ay.useName(e?.author.bot ? e?.author : h),
        f = (0, s.bG)([_.A], () => _.A.getGuild(i), [i]),
        g = r?.colorRoleId,
        p = (0, s.bG)([d.A], () => (null != i && null != g ? d.A.getRole(i, g) : void 0), [i, g]),
        A = (0, s.bG)([u.A], () => (null != n && t?.isPrivate() ? u.A.getNickname(n) : null)),
        T = (0, a.A)({ userId: n, guildId: i });
    return null == e
        ? null
        : I({
              user: e.author,
              channel: t,
              guild: f,
              memberColorRole: p,
              userName: m,
              member: r,
              friendNickname: A,
              displayNameStyles: T,
          });
}
function f(e) {
    let t = o.A.getChannel(e.channel_id);
    return A(e.author, t);
}
function g(e, t) {
    let n = p(e, t);
    return r()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function p(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = (0, s.bG)([l.Ay], () => (null == i || null == n ? null : l.Ay.getMember(i, n))),
        a = (0, s.bG)([_.A], () => _.A.getGuild(i), [i]),
        o = r?.colorRoleId,
        c = (0, s.bG)([d.A], () => (null != i && null != o ? d.A.getRole(i, o) : void 0), [i, o]),
        h = (0, s.bG)([u.A], () => (null != n && t?.isPrivate() ? u.A.getNickname(n) : null)),
        m = E.Ay.useName(e);
    return I({
        user: e,
        channel: t,
        guild: a,
        memberColorRole: c,
        member: r,
        userName: m,
        friendNickname: h,
        displayNameStyles: e?.displayNameStyles,
    });
}
function A(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = _.A.getGuild(i),
        s = null == i || null == n ? null : l.Ay.getMember(i, n),
        a = null != i && s?.colorRoleId != null ? d.A.getRole(i, s.colorRoleId) : void 0,
        o = null != n && null != t && t.isPrivate() ? u.A.getNickname(n) : null;
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
        d = null == t ? "???" : (a ?? E.Ay.getName(t));
    return t?.id == null || null == n
        ? { nick: d, colorString: null, colorStrings: null, displayNameStyles: l }
        : i?.id == null
          ? { nick: o ?? d, colorString: null, colorStrings: null, displayNameStyles: l }
          : null == s
            ? { nick: d, colorString: null, colorStrings: null, displayNameStyles: l }
            : {
                  nick: s.nick ?? d,
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
