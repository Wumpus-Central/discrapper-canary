n.d(t, {
    R: () => E,
    d: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(763754),
    o = n(447215),
    l = n(888675),
    c = n(342296),
    u = n(486020),
    d = n(552691),
    f = n(652215);

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

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e, t) {
    let n = i.useRef(null);
    return i.useCallback(
        (i) => (s, o) => {
            let l = u.Ay.getApplicationIconURL({
                    id: i.id,
                    icon: i.icon,
                    bot: i.bot,
                    botIconFirst: !0,
                }),
                { bot: d } = i;
            return null == d
                ? s
                : (0, r.jsx)(
                      c.A,
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
                                  a.MzZ,
                                  m(_({}, e), {
                                      ref: n,
                                      children: s,
                                  }),
                              ),
                      },
                      o,
                  );
        },
        [e, t.id],
    );
}

function E(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, s.Ay)(t),
        u = t.application,
        p = (0, o.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        }),
        _ = g(i, t);
    return (0, r.jsx)(l.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: a,
        children: (0, d.eu)({
            application: u,
            username: c.nick,
            usernameHook: p(c),
            applicationNameHook: null != u ? _(u) : f.tEg,
        }),
    });
}

function b(e) {
    let { message: t, channel: i, compact: a } = e,
        c = (0, s.Ay)(t),
        u = t.application,
        p = (0, o.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        }),
        _ = g(i, t);
    return (0, r.jsx)(l.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: (0, d.A0)({
            application: u,
            username: c.nick,
            usernameHook: p(c),
            applicationNameHook: null != u ? _(u) : f.tEg,
        }),
    });
}
