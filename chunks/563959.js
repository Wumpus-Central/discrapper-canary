n.d(t, {
    P: function () {
        return p;
    },
    e: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(739566),
    o = n(942951),
    s = n(834129),
    c = n(184301),
    u = n(347475),
    d = n(768581),
    m = n(693912),
    h = n(981631);
function f(e, t) {
    return r.useCallback(
        (n) => (r, a) => {
            let o = d.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    bot: n.bot,
                    botIconFirst: !0
                }),
                { bot: s } = n;
            return null == s
                ? r
                : (0, i.jsx)(
                      l.Popout,
                      {
                          position: 'right',
                          preload: () =>
                              (0, c.Z)(s.id, o, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, i.jsx)(u.Z, {
                                  ...n,
                                  userId: s.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, i.jsx)(l.Anchor, {
                                  ...e,
                                  children: r
                              })
                      },
                      a
                  );
        },
        [e, t.id]
    );
}
function p(e) {
    let { message: t, channel: r, compact: l } = e,
        c = (0, a.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        }),
        p = f(r, t);
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: l,
        children: (0, m.DS)({
            application: u,
            username: c.nick,
            usernameHook: d(c),
            applicationNameHook: null != u ? p(u) : h.dG4
        })
    });
}
function _(e) {
    let { message: t, channel: r, compact: l } = e,
        c = (0, a.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t.id
        }),
        p = f(r, t);
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: l,
        children: (0, m.nh)({
            application: u,
            username: c.nick,
            usernameHook: d(c),
            applicationNameHook: null != u ? p(u) : h.dG4
        })
    });
}
