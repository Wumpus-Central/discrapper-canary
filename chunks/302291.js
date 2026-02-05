n.d(t, { R: () => h, d: () => p });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(763754),
    s = n(447215),
    o = n(888675),
    d = n(342296),
    c = n(486020),
    u = n(552691),
    m = n(652215);
function _(e, t) {
    let n = l.useRef(null);
    return l.useCallback(
        (l) => (r, s) => {
            let o = c.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, bot: l.bot, botIconFirst: !0 }),
                { bot: u } = l;
            return null == u
                ? r
                : (0, i.jsx)(
                      d.A,
                      {
                          targetElementRef: n,
                          userId: u.id,
                          avatarUrl: o,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => (0, i.jsx)(a.MzZ, { ...e, ref: n, children: r }),
                      },
                      s,
                  );
        },
        [e, t.id],
    );
}
function h(e) {
    let { message: t, channel: l, compact: a } = e,
        d = (0, r.Ay)(t),
        c = t.application,
        h = (0, s.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id }),
        p = _(l, t);
    return (0, i.jsx)(o.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: a,
        children: (0, u.eu)({
            application: c,
            username: d.nick,
            usernameHook: h(d),
            applicationNameHook: null != c ? p(c) : m.tEg,
        }),
    });
}
function p(e) {
    let { message: t, channel: l, compact: a } = e,
        d = (0, r.Ay)(t),
        c = t.application,
        h = (0, s.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id }),
        p = _(l, t);
    return (0, i.jsx)(o.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: (0, u.A0)({
            application: c,
            username: d.nick,
            usernameHook: h(d),
            applicationNameHook: null != c ? p(c) : m.tEg,
        }),
    });
}
