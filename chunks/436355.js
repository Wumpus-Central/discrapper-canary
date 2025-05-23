n.d(t, { Z: () => s });
var r = n(255367),
    i = n(481060),
    l = n(796263),
    a = n(720068),
    o = n(388032);
function s(e) {
    let { channel: t, user: s, member: c, inline: u = !1 } = e,
        d = () => {
            null != s &&
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('36760').then(n.bind(n, 854360));
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
                                    user: s,
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
        p = null == c ? o.intl.string(a.default.Ux67nZ) : o.intl.string(a.default['snp/lJ']),
        m = null == c,
        f = 'kick-user-'.concat(null == s ? void 0 : s.id);
    return u
        ? (0, r.jsx)(
              l.Z,
              {
                  text: p,
                  icon: i.I9k,
                  onClick: d,
                  disabled: m
              },
              f
          )
        : (0, r.jsx)(
              i.sNh,
              {
                  id: 'kick-user',
                  icon: i.I9k,
                  label: p,
                  action: d,
                  disabled: m
              },
              f
          );
}
