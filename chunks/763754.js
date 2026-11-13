var i = n(284009),
    r = n.n(i),
    a = n(855986),
    s = n(609425),
    l = n(734057),
    o = n(696451),
    d = n(317525),
    c = n(71393),
    u = n(994500),
    _ = n(287809),
    E = n(427262);
function A(e) {
    let t = (0, a.bG)([l.A], () => (null == e ? null : l.A.getChannel(e.channel_id))),
        n = e?.author?.id,
        i = t?.guild_id,
        r = (0, a.bG)([o.Ay], () => (null == i || null == n ? null : o.Ay.getMember(i, n))),
        A = (0, a.bG)([_.default], () => _.default.getUser(n), [n]),
        f = E.Ay.useName(e?.author.bot ? e?.author : A),
        h = (0, a.bG)([c.A], () => c.A.getGuild(i), [i]),
        p = r?.colorRoleId,
        m = (0, a.bG)([d.A], () => (null != i && null != p ? d.A.getRole(i, p) : void 0), [i, p]),
        T = (0, a.bG)([u.A], () => (null != n && t?.isPrivate() ? u.A.getNickname(n) : null)),
        g = (0, s.A)({ userId: n, guildId: i });
    return null == e
        ? null
        : I({
              user: e.author,
              channel: t,
              guild: h,
              memberColorRole: m,
              userName: f,
              member: r,
              friendNickname: T,
              displayNameStyles: g,
          });
}
function f(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = (0, a.bG)([o.Ay], () => (null == i || null == n ? null : o.Ay.getMember(i, n))),
        l = (0, a.bG)([c.A], () => c.A.getGuild(i), [i]),
        _ = r?.colorRoleId,
        A = (0, a.bG)([d.A], () => (null != i && null != _ ? d.A.getRole(i, _) : void 0), [i, _]),
        f = (0, a.bG)([u.A], () => (null != n && t?.isPrivate() ? u.A.getNickname(n) : null)),
        h = E.Ay.useName(e);
    return I({
        user: e,
        channel: t,
        guild: l,
        memberColorRole: A,
        member: r,
        userName: h,
        friendNickname: f,
        displayNameStyles: (0, s.A)({ userId: n, guildId: i }),
    });
}
function h(e, t) {
    let n = e?.id,
        i = t?.guild_id,
        r = c.A.getGuild(i),
        a = null == i || null == n ? null : o.Ay.getMember(i, n),
        s = null != i && a?.colorRoleId != null ? d.A.getRole(i, a.colorRoleId) : void 0,
        l = null != n && null != t && t.isPrivate() ? u.A.getNickname(n) : null;
    return I({
        user: e,
        channel: t,
        guild: r,
        memberColorRole: s,
        member: a,
        friendNickname: l,
        displayNameStyles: e?.displayNameStyles,
    });
}
function I(e) {
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
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            let n = A(e);
            return (r()(null != n, "Result cannot be null because the message is not null"), t ?? n);
        },
        FT: h,
        X4: A,
        d8: f,
        m2: function (e, t) {
            let n = f(e, t);
            return (r()(null != n, "Result cannot be null because user and channel are not null"), n);
        },
        p_: function (e) {
            let t = l.A.getChannel(e.channel_id);
            return h(e.author, t);
        },
    },
);
