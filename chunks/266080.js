n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(367907),
    o = n(434404),
    s = n(138201),
    c = n(430824),
    d = n(981631),
    u = n(388032);
let m = (e) => {
    let { guildId: t, reportId: n } = e,
        [m, x] = l.useState(!1),
        p = c.Z.getGuild(t),
        f = null != p;
    l.useEffect(() => {
        x(!f);
    }, [f]);
    let b = l.useCallback(() => {
        x(!0),
            a.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            o.Z.leaveGuild(t);
    }, [t, n]);
    return null == p
        ? null
        : (0, r.jsx)(s.ZP, {
              title: u.NW.string(u.t.cU96io),
              description: u.NW.formatToPlainString(u.t['26mR6+'], { guildName: null == p ? void 0 : p.name }),
              buttonText: m ? u.NW.string(u.t['9Ak99v']) : u.NW.string(u.t.F3qExs),
              buttonDisabled: m,
              buttonColor: i.zxk.Colors.RED,
              onButtonPress: () => {
                  (0, i.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          i.ConfirmModal,
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
                          })(
                              {
                                  header: u.NW.formatToPlainString(u.t['1GX6Pz'], { name: p.name }),
                                  confirmText: u.NW.string(u.t.J2TBi4),
                                  cancelText: u.NW.string(u.t['ETE/oK']),
                                  onConfirm: b
                              },
                              e
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      children: u.NW.format(u.t.ZEXC0t, { name: p.name })
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
