n.d(t, { Z: () => p }), n(301563);
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    l = n(83474),
    o = n(245315),
    s = n(556041),
    c = n(347475),
    u = n(592125),
    d = n(368859);
function p(e, t) {
    var n, i, p, m;
    if ((0, o.cp)(t)) return (0, r.jsx)(s.Z, {});
    if ((0, d.Z)(t)) {
        let a = (null != (i = null == t || null == (n = t.author) ? void 0 : n.username) ? i : '').split(' ').slice(0, -1).join(' '),
            { guild_id: o, channel_id: s, message_id: c } = t.messageReference;
        if (null != o)
            return (0, r.jsx)(l.ZP, {
                setPopoutRef: e.setPopoutRef,
                guildId: o,
                channelId: s,
                messageId: c,
                name: a
            });
    }
    if (null != t.interaction && 'SENDING' === t.state) return (0, r.jsx)(r.Fragment, {});
    let f = u.Z.getChannel(t.channel_id);
    return (
        a()(null != f, 'renderUserGuildPopout: channel should never be null'),
        (0, r.jsx)(
            c.Z,
            ((p = (function (e) {
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
            (m = m =
                {
                    channelId: t.channel_id,
                    messageId: t.id,
                    guildId: f.guild_id,
                    userId: t.author.id,
                    user: null != t.webhookId ? t.author : void 0
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(m))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(m)).forEach(function (e) {
                      Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(m, e));
                  }),
            p)
        )
    );
}
