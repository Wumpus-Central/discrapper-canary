n.d(t, {
    P: () => p,
    e: () => g
});
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(739566),
    s = n(942951),
    o = n(834129),
    c = n(184301),
    d = n(347475),
    u = n(768581),
    m = n(693912),
    _ = n(981631);
function h(e, t) {
    return l.useCallback(
        (n) => (l, r) => {
            let s = u.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    bot: n.bot,
                    botIconFirst: !0
                }),
                { bot: o } = n;
            return null == o
                ? l
                : (0, i.jsx)(
                      a.yRy,
                      {
                          position: 'right',
                          preload: () =>
                              (0, c.Z)(o.id, s, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, i.jsx)(d.Z, {
                                  ...n,
                                  userId: o.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, i.jsx)(a.eee, {
                                  ...e,
                                  children: l
                              })
                      },
                      r
                  );
        },
        [e, t.id]
    );
}
function p(e) {
    let { message: t, channel: l, compact: a } = e,
        c = (0, r.ZP)(t),
        d = t.application,
        u = (0, s.l)({
            user: t.author,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t.id
        }),
        p = h(l, t);
    return (0, i.jsx)(o.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: a,
        children: (0, m.DS)({
            application: d,
            username: c.nick,
            usernameHook: u(c),
            applicationNameHook: null != d ? p(d) : _.dG4
        })
    });
}
function g(e) {
    let { message: t, channel: l, compact: a } = e,
        c = (0, r.ZP)(t),
        d = t.application,
        u = (0, s.l)({
            user: t.author,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t.id
        }),
        p = h(l, t);
    return (0, i.jsx)(o.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: a,
        children: (0, m.nh)({
            application: d,
            username: c.nick,
            usernameHook: u(c),
            applicationNameHook: null != d ? p(d) : _.dG4
        })
    });
}
