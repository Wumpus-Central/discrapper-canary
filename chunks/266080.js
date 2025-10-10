n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(367907),
    o = n(434404),
    s = n(138201),
    c = n(430824),
    d = n(981631),
    u = n(388032);
let _ = (e) => {
    let { guildId: t, reportId: n } = e,
        [_, m] = i.useState(!1),
        p = c.Z.getGuild(t),
        g = null != p;
    i.useEffect(() => {
        m(!g);
    }, [g]);
    let f = i.useCallback(() => {
        m(!0),
            a.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n,
            }),
            o.Z.leaveGuild(t);
    }, [t, n]);
    return null == p
        ? null
        : (0, r.jsx)(s.JZ, {
              title: u.intl.string(u.t.cU96io),
              description: u.intl.formatToPlainString(u.t["26mR6+"], { guildName: null == p ? void 0 : p.name }),
              buttonText: _ ? u.intl.string(u.t["9Ak99v"]) : u.intl.string(u.t.F3qExs),
              buttonDisabled: _,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, l.h7j)((e) => {
                      var t, n;
                      return (0, r.jsx)(
                          l.ConfirmModal,
                          ((t = (function (e) {
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
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  header: u.intl.formatToPlainString(u.t["1GX6Pz"], { name: p.name }),
                                  confirmText: u.intl.string(u.t.J2TBi4),
                                  cancelText: u.intl.string(u.t["ETE/oK"]),
                                  onConfirm: f,
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      children: u.intl.format(u.t.ZEXC0t, { name: p.name }),
                                  }),
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
                          t),
                      );
                  });
              },
          });
};
