n.d(t, { Z: () => m }), n(35282);
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    a = n(914620),
    o = n(245315),
    s = n(556041),
    c = n(726033),
    u = n(592125),
    d = n(594174),
    p = n(368859);
function m(e, t) {
    var n, i, m, f;
    if ((0, o.cp)(t)) return (0, r.jsx)(s.Z, {});
    if ((0, p.Z)(t)) {
        let l = (null != (i = null == t || null == (n = t.author) ? void 0 : n.username) ? i : '').split(' ').slice(0, -1).join(' '),
            { guild_id: o } = t.messageReference;
        if (null != o)
            return (0, r.jsx)(a.Z, {
                setPopoutRef: e.setPopoutRef,
                guildId: o,
                name: l
            });
    }
    if (null != t.interaction && 'SENDING' === t.state) return (0, r.jsx)(r.Fragment, {});
    let h = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
    l()(null != h, 'renderUserGuildPopout: user should never be null');
    let g = d.default.getCurrentUser();
    l()(null != g, 'renderUserGuildPopout: currentUser should never be null');
    let _ = u.Z.getChannel(t.channel_id);
    return (
        l()(null != _, 'renderUserGuildPopout: channel should never be null'),
        (0, r.jsx)(
            c.Z,
            ((m = (function (e) {
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
            (f = f =
                {
                    user: h,
                    currentUser: g,
                    guildId: _.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(f))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(f)).forEach(function (e) {
                      Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(f, e));
                  }),
            m)
        )
    );
}
