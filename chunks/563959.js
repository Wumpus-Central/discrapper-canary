n.d(t, {
    P: () => E,
    e: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(739566),
    s = n(942951),
    l = n(834129),
    c = n(670188),
    u = n(768581),
    d = n(693912),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    let n = i.useRef(null);
    return i.useCallback(
        (i) => (o, s) => {
            let l = u.ZP.getApplicationIconURL({
                    id: i.id,
                    icon: i.icon,
                    bot: i.bot,
                    botIconFirst: !0,
                }),
                { bot: d } = i;
            return null == d
                ? o
                : (0, r.jsx)(
                      c.Z,
                      {
                          targetElementRef: n,
                          userId: d.id,
                          avatarUrl: l,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) =>
                              (0, r.jsx)(
                                  a.Anchor,
                                  h(_({}, e), {
                                      ref: n,
                                      children: o,
                                  }),
                              ),
                      },
                      s,
                  );
        },
        [e, t.id],
    );
}
function E(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, o.ZP)(t),
        u = t.application,
        p = (0, s.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        }),
        _ = g(i, t);
    return (0, r.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: a,
        children: (0, d.DS)({
            application: u,
            username: c.nick,
            usernameHook: p(c),
            applicationNameHook: null != u ? _(u) : f.dG4,
        }),
    });
}
function b(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, o.ZP)(t),
        u = t.application,
        p = (0, s.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        }),
        _ = g(i, t);
    return (0, r.jsx)(l.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: a,
        children: (0, d.nh)({
            application: u,
            username: c.nick,
            usernameHook: p(c),
            applicationNameHook: null != u ? _(u) : f.dG4,
        }),
    });
}
