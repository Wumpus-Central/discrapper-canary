n.d(t, { Z: () => u });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(999382),
    o = n(796263),
    s = n(776571),
    c = n(388032);
function u(e) {
    let { channel: t, user: u, inline: d = !1 } = e,
        p = (0, i.e7)([a.Z], () => null != u && a.Z.isUserBanned(u.id)),
        m = () => {
            null != u &&
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('9125').then(n.bind(n, 98746));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (l = l =
                                {
                                    guildId: t.guild_id,
                                    user: u,
                                    modReportId: t.id
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        );
                    };
                });
        },
        f = p ? c.intl.string(s.default.dpfwQ0) : c.intl.string(s.default.ASv23d),
        h = 'ban-user-'.concat(null == u ? void 0 : u.id);
    return d
        ? (0, r.jsx)(
              o.Z,
              {
                  text: f,
                  icon: l.pgN,
                  onClick: m,
                  disabled: p,
                  color: l.zxk.Colors.RED
              },
              h
          )
        : (0, r.jsx)(
              l.sNh,
              {
                  id: 'ban-user',
                  icon: l.pgN,
                  label: f,
                  action: m,
                  disabled: p
              },
              h
          );
}
