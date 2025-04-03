n.d(t, {
    P: () => _,
    e: () => b
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(739566),
    o = n(942951),
    s = n(834129),
    c = n(184301),
    u = n(347475),
    d = n(768581),
    p = n(693912),
    m = n(981631);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    return i.useCallback(
        (n) => (i, l) => {
            let o = d.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    bot: n.bot,
                    botIconFirst: !0
                }),
                { bot: s } = n;
            return null == s
                ? i
                : (0, r.jsx)(
                      a.yRy,
                      {
                          position: 'right',
                          preload: () =>
                              (0, c.Z)(s.id, o, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, r.jsx)(
                                  u.Z,
                                  h(f({}, n), {
                                      userId: s.id,
                                      guildId: e.guild_id,
                                      channelId: e.id,
                                      messageId: t.id
                                  })
                              ),
                          clickTrap: !0,
                          children: (e) => (0, r.jsx)(a.eee, h(f({}, e), { children: i }))
                      },
                      l
                  );
        },
        [e, t.id]
    );
}
function _(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, l.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        }),
        f = g(i, t);
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: a,
        children: (0, p.DS)({
            application: u,
            username: c.nick,
            usernameHook: d(c),
            applicationNameHook: null != u ? f(u) : m.dG4
        })
    });
}
function b(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, l.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        }),
        f = g(i, t);
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: a,
        children: (0, p.nh)({
            application: u,
            username: c.nick,
            usernameHook: d(c),
            applicationNameHook: null != u ? f(u) : m.dG4
        })
    });
}
