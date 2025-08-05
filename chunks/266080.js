(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(755721),
    a = n(481060),
    s = n(367907),
    o = n(434404),
    c = n(138201),
    d = n(430824),
    u = n(981631),
    m = n(388032);
let p = (e) => {
    let { guildId: t, reportId: n } = e,
        [p, g] = l.useState(!1),
        x = d.Z.getGuild(t),
        _ = null != x;
    l.useEffect(() => {
        g(!_);
    }, [_]);
    let b = l.useCallback(() => {
        (g(!0),
            s.ZP.trackWithMetadata(u.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            o.Z.leaveGuild(t));
    }, [t, n]);
    return null == x
        ? null
        : (0, r.jsx)(c.ZP, {
              title: m.intl.string(m.t.cU96io),
              description: m.intl.formatToPlainString(m.t['26mR6+'], { guildName: null == x ? void 0 : x.name }),
              buttonText: p ? m.intl.string(m.t['9Ak99v']) : m.intl.string(m.t.F3qExs),
              buttonDisabled: p,
              buttonColor: i.zx.Colors.RED,
              onButtonPress: () => {
                  (0, a.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          a.ConfirmModal,
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          ((r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r));
                                      }));
                              }
                              return e;
                          })(
                              {
                                  header: m.intl.formatToPlainString(m.t['1GX6Pz'], { name: x.name }),
                                  confirmText: m.intl.string(m.t.J2TBi4),
                                  cancelText: m.intl.string(m.t['ETE/oK']),
                                  onConfirm: b
                              },
                              e
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: m.intl.format(m.t.ZEXC0t, { name: x.name })
                                  })
                              }),
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
                  });
              }
          });
};
