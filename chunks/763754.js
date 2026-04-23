"use strict";
n.d(t, { Ay: () => p, FT: () => A, X4: () => h, d8: () => g, m2: () => m, p_: () => E });
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(609425),
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
    let t = (0, s.bG)([o.A], () => (null == e ? null : o.A.getChannel(e.channel_id))),
        n = e?.author?.id,
        r = t?.guild_id,
        i = (0, s.bG)([l.Ay], () => (null == r || null == n ? null : l.Ay.getMember(r, n))),
        p = (0, s.bG)([_.default], () => _.default.getUser(n), [n]),
        h = f.Ay.useName(e?.author.bot ? e?.author : p),
        E = (0, s.bG)([c.A], () => c.A.getGuild(r), [r]),
        m = i?.colorRoleId,
        g = (0, s.bG)([u.A], () => (null != r && null != m ? u.A.getRole(r, m) : void 0), [r, m]),
        A = (0, s.bG)([d.A], () => (null != n && t?.isPrivate() ? d.A.getNickname(n) : null)),
        T = (0, a.A)({ userId: n, guildId: r });
    return null == e
        ? null
        : I({
              user: e.author,
              channel: t,
              guild: E,
              memberColorRole: g,
              userName: h,
              member: i,
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
    return i()(null != n, "Result cannot be null because user and channel are not null"), n;
}
function g(e, t) {
    let n = e?.id,
        r = t?.guild_id,
        i = (0, s.bG)([l.Ay], () => (null == r || null == n ? null : l.Ay.getMember(r, n))),
        a = (0, s.bG)([c.A], () => c.A.getGuild(r), [r]),
        o = i?.colorRoleId,
        _ = (0, s.bG)([u.A], () => (null != r && null != o ? u.A.getRole(r, o) : void 0), [r, o]),
        p = (0, s.bG)([d.A], () => (null != n && t?.isPrivate() ? d.A.getNickname(n) : null)),
        h = f.Ay.useName(e);
    return I({
        user: e,
        channel: t,
        guild: a,
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
        s = null == r || null == n ? null : l.Ay.getMember(r, n),
        a = null != r && s?.colorRoleId != null ? u.A.getRole(r, s.colorRoleId) : void 0,
        o = null != n && null != t && t.isPrivate() ? d.A.getNickname(n) : null;
    return I({
        user: e,
        channel: t,
        guild: i,
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
            guild: r,
            memberColorRole: i,
            member: s,
            userName: a,
            friendNickname: o,
            displayNameStyles: l,
        } = e,
        u = null == t ? "???" : (a ?? f.Ay.getName(t));
    return t?.id == null || null == n
        ? { nick: u, colorString: null, colorStrings: null, displayNameStyles: l }
        : r?.id == null
          ? { nick: o ?? u, colorString: null, colorStrings: null, displayNameStyles: l }
          : null == s
            ? { nick: u, colorString: null, colorStrings: null, displayNameStyles: l }
            : {
                  nick: s.nick ?? u,
                  colorString: s.colorString,
                  colorStrings: s.colorStrings,
                  colorRoleName: i?.name,
                  colorRoleId: i?.id,
                  iconRoleId: s.iconRoleId,
                  guildMemberAvatar: s.avatar,
                  guildMemberAvatarDecoration: s.avatarDecoration,
                  primaryGuild: t.primaryGuild ?? void 0,
                  guildId: r.id,
                  authorId: t.id,
                  displayNameStyles: l,
              };
}
