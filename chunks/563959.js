n.d(t, {
    P: () => f,
    e: () => h
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(739566),
    o = n(942951),
    s = n(834129),
    c = n(670188),
    u = n(768581),
    d = n(693912),
    p = n(981631);
function m(e, t) {
    return i.useCallback(
        (n) => (i, l) => {
            let o = u.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    bot: n.bot,
                    botIconFirst: !0
                }),
                { bot: s } = n;
            return null == s
                ? i
                : (0, r.jsx)(
                      c.Z,
                      {
                          userId: s.id,
                          avatarUrl: o,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => {
                              var t, n;
                              return (0, r.jsx)(
                                  a.eee,
                                  ((t = (function (e) {
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
                                  })({}, e)),
                                  (n = n = { children: i }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(n)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                        }),
                                  t)
                              );
                          }
                      },
                      l
                  );
        },
        [e, t.id]
    );
}
function f(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, l.ZP)(t),
        u = t.application,
        f = (0, o.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        }),
        h = m(i, t);
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: a,
        children: (0, d.DS)({
            application: u,
            username: c.nick,
            usernameHook: f(c),
            applicationNameHook: null != u ? h(u) : p.dG4
        })
    });
}
function h(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, l.ZP)(t),
        u = t.application,
        f = (0, o.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        }),
        h = m(i, t);
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: a,
        children: (0, d.nh)({
            application: u,
            username: c.nick,
            usernameHook: f(c),
            applicationNameHook: null != u ? h(u) : p.dG4
        })
    });
}
