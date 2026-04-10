"use strict";
n.d(t, { R: () => A, d: () => m });
var i = n(627968),
    r = n(64700),
    s = n(397927),
    l = n(763754),
    a = n(447215),
    c = n(888675),
    o = n(342296),
    u = n(486020),
    d = n(552691),
    _ = n(652215);
function E(e, t) {
    let n = r.useRef(null);
    return r.useCallback(
        (r) => (l, a) => {
            let c = u.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, bot: r.bot, botIconFirst: !0 }),
                { bot: d } = r;
            return null == d
                ? l
                : (0, i.jsx)(
                      o.A,
                      {
                          targetElementRef: n,
                          userId: d.id,
                          avatarUrl: c,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => (0, i.jsx)(s.MzZ, { ...e, ref: n, children: l }),
                      },
                      a,
                  );
        },
        [e, t.id],
    );
}
function A(e) {
    let { message: t, channel: r, compact: s } = e,
        o = (0, l.Ay)(t),
        u = t.application,
        A = (0, a.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id }),
        m = E(r, t);
    return (0, i.jsx)(c.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: s,
        children: (0, d.eu)({
            application: u,
            username: o.nick,
            usernameHook: A(o),
            applicationNameHook: null != u ? m(u) : _.tEg,
        }),
    });
}
function m(e) {
    let { message: t, channel: r, compact: s } = e,
        o = (0, l.Ay)(t),
        u = t.application,
        A = (0, a.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id }),
        m = E(r, t);
    return (0, i.jsx)(c.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: s,
        children: (0, d.A0)({
            application: u,
            username: o.nick,
            usernameHook: A(o),
            applicationNameHook: null != u ? m(u) : _.tEg,
        }),
    });
}
