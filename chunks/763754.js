"use strict";
n.d(t, { Ay: () => p, FT: () => A, X4: () => h, d8: () => E, m2: () => g, p_: () => m });
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    s = n(609425),
    o = n(734057),
    l = n(696451),
    u = n(317525),
    c = n(71393),
    d = n(994500),
    _ = n(287809),
    f = n(427262);
function p(e, t) {
    let n = h(e);
    return i()(null != n, "Result cannot be null because the message is not null"), t ?? n;
}
function h(e) {
    let t = (0, a.bG)([o.A], () => (null == e ? null : o.A.getChannel(e.channel_id))),
        n = e?.author?.id,
        r = t?.guild_id,
        i = (0, a.bG)([l.Ay], () => (null == r || null == n ? null : l.Ay.getMember(r, n))),
        p = (0, a.bG)([_.default], () => _.default.getUser(n), [n]),
        h = f.Ay.useName(e?.author.bot ? e?.author : p),
        m = (0, a.bG)([c.A], () => c.A.getGuild(r), [r]),
        g = i?.colorRoleId,
        E = (0, a.bG)([u.A], () => (null != r && null != g ? u.A.getRole(r, g) : void 0), [r, g]),
        A = (0, a.bG)([d.A], () => (null != n && t?.isPrivate() ? d.A.getNickname(n) : null)),
        T = (0, s.A)({ userId: n, guildId: r });
    return null == e
        ? null
        : I({
              user: e.author,
              channel: t,
              guild: m,
              memberColorRole: E,
              userName: h,
              member: i,
              friendNickname: A,
              displayNameStyles: T,
          });
}
function m(e) {
    let t = o.A.getChannel(e.channel_id);
    return A(e.author, t);
}
function g(e, t) {
    let n = E(e, t);
    return i()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function E(e, t) {
    let n = e?.id,
        r = t?.guild_id,
        i = (0, a.bG)([l.Ay], () => (null == r || null == n ? null : l.Ay.getMember(r, n))),
        s = (0, a.bG)([c.A], () => c.A.getGuild(r), [r]),
        o = i?.colorRoleId,
        _ = (0, a.bG)([u.A], () => (null != r && null != o ? u.A.getRole(r, o) : void 0), [r, o]),
        p = (0, a.bG)([d.A], () => (null != n && t?.isPrivate() ? d.A.getNickname(n) : null)),
        h = f.Ay.useName(e);
    return I({
        user: e,
        channel: t,
        guild: s,
        memberColorRole: _,
        member: i,
        userName: h,
        friendNickname: p,
        displayNameStyles: e?.displayNameStyles,
    });
}
function A(e, t) {
    let n = e?.id,
        r = t?.guild_id,
        i = c.A.getGuild(r),
        a = null == r || null == n ? null : l.Ay.getMember(r, n),
        s = null != r && a?.colorRoleId != null ? u.A.getRole(r, a.colorRoleId) : void 0,
        o = null != n && null != t && t.isPrivate() ? d.A.getNickname(n) : null;
    return I({
        user: e,
        channel: t,
        guild: i,
        memberColorRole: s,
        member: a,
        friendNickname: o,
        displayNameStyles: e?.displayNameStyles,
    });
}
function I(e) {
    let {
            user: t,
            channel: n,
            guild: r,
            memberColorRole: i,
            member: a,
            userName: s,
            friendNickname: o,
            displayNameStyles: l,
        } = e,
        u = null == t ? "???" : (s ?? f.Ay.getName(t));
    return t?.id == null || null == n
        ? { nick: u, colorString: null, colorStrings: null, displayNameStyles: l }
        : r?.id == null
          ? { nick: o ?? u, colorString: null, colorStrings: null, displayNameStyles: l }
          : null == a
            ? { nick: u, colorString: null, colorStrings: null, displayNameStyles: l }
            : {
                  nick: a.nick ?? u,
                  colorString: a.colorString,
                  colorStrings: a.colorStrings,
                  colorRoleName: i?.name,
                  colorRoleId: i?.id,
                  iconRoleId: a.iconRoleId,
                  guildMemberAvatar: a.avatar,
                  guildMemberAvatarDecoration: a.avatarDecoration,
                  primaryGuild: t.primaryGuild ?? void 0,
                  guildId: r.id,
                  authorId: t.id,
                  displayNameStyles: l,
              };
}
