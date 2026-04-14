"use strict";
n.d(t, { R: () => A, d: () => m });
var i = n(627968),
    r = n(64700),
    s = n(397927),
    a = n(763754),
    l = n(447215),
    o = n(888675),
    c = n(342296),
    u = n(486020),
    d = n(552691),
    _ = n(652215);
function E(e, t) {
    let n = r.useRef(null);
    return r.useCallback(
        (r) => (a, l) => {
            let o = u.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, bot: r.bot, botIconFirst: !0 }),
                { bot: d } = r;
            return null == d
                ? a
                : (0, i.jsx)(
                      c.default,
                      {
                          targetElementRef: n,
                          userId: d.id,
                          avatarUrl: o,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => (0, i.jsx)(s.MzZ, { ...e, ref: n, children: a }),
                      },
                      l,
                  );
        },
        [e, t.id],
    );
}
function A(e) {
    let { message: t, channel: r, compact: s } = e,
        c = (0, a.Ay)(t),
        u = t.application,
        A = (0, l.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id }),
        m = E(r, t);
    return (0, i.jsx)(o.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: s,
        children: (0, d.eu)({
            application: u,
            username: c.nick,
            usernameHook: A(c),
            applicationNameHook: null != u ? m(u) : _.tEg,
        }),
    });
}
function m(e) {
    let { message: t, channel: r, compact: s } = e,
        c = (0, a.Ay)(t),
        u = t.application,
        A = (0, l.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id }),
        m = E(r, t);
    return (0, i.jsx)(o.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: s,
        children: (0, d.A0)({
            application: u,
            username: c.nick,
            usernameHook: A(c),
            applicationNameHook: null != u ? m(u) : _.tEg,
        }),
    });
}
