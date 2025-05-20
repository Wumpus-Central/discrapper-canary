n.d(t, { Z: () => j });
var r = n(255367),
    a = n(73800),
    l = n(442837),
    s = n(481060),
    i = n(239091),
    o = n(493773),
    c = n(884338),
    d = n(592125),
    u = n(720202),
    h = n(594174),
    g = n(260483),
    m = n(314208),
    f = n(124368),
    x = n(915298);
let j = a.memo(function (e) {
    let { threadId: t, goToThread: a, showChannelName: o } = e,
        c = (0, l.e7)([d.Z], () => d.Z.getChannel(t)),
        u = (0, l.e7)([d.Z], () => d.Z.getChannel(c.parent_id));
    return (0, r.jsxs)(s.P3F, {
        className: x.container,
        onClick: (e) => a(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('22356'), n.e('48334')]).then(n.bind(n, 422200));
                return (t) => {
                    var n, a;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        })({}, t)),
                        (a = a = { channel: c }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        n)
                    );
                };
            }),
        children: [
            (0, r.jsxs)('div', {
                className: x.left,
                children: [
                    (0, r.jsxs)(s.X6q, {
                        className: x.threadNameLine,
                        variant: 'heading-md/semibold',
                        children: [
                            (0, r.jsx)('span', {
                                className: x.threadName,
                                children: c.name
                            }),
                            o && null != u
                                ? (0, r.jsx)('span', {
                                      className: x.parentName,
                                      children: '#'.concat(u.name)
                                  })
                                : null
                        ]
                    }),
                    (0, m.Z)(c)
                ]
            }),
            (0, r.jsx)(v, { channel: c })
        ]
    });
});
function v(e) {
    let { channel: t } = e,
        n = (0, l.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getMemberIdsPreview(t.id)) ? e : [];
        }),
        a = (0, l.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getMemberCount(t.id)) ? e : 0;
        }),
        s = (0, l.Wu)([h.default], () => n.map((e) => h.default.getUser(e)));
    return ((0, o.ZP)(() => {
        n.filter((e, t) => null == s[t]).forEach((e) => {
            u.Z.requestMember(t.guild_id, e);
        });
    }),
    0 === n.length)
        ? null
        : (0, r.jsx)(c.Z, {
              className: x.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: s,
              count: a,
              max: f.yX
          });
}
