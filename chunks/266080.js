n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(367907),
    s = n(434404),
    o = n(138201),
    c = n(430824),
    d = n(981631),
    u = n(388032);
let m = (e) => {
    let { guildId: t, reportId: n } = e,
        [m, p] = i.useState(!1),
        g = c.Z.getGuild(t),
        _ = null != g;
    i.useEffect(() => {
        p(!_);
    }, [_]);
    let h = i.useCallback(() => {
        p(!0),
            a.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n,
            }),
            s.Z.leaveGuild(t);
    }, [t, n]);
    return null == g
        ? null
        : (0, r.jsx)(o.JZ, {
              title: u.intl.string(u.t.cU96ip),
              description: u.intl.formatToPlainString(u.t["26mR6/"], { guildName: null == g ? void 0 : g.name }),
              buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
              buttonDisabled: m,
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
                                  header: u.intl.formatToPlainString(u.t["1GX6P/"], { name: g.name }),
                                  confirmText: u.intl.string(u.t.J2TBi3),
                                  cancelText: u.intl.string(u.t["ETE/oC"]),
                                  onConfirm: h,
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      children: u.intl.format(u.t.ZEXC0r, { name: g.name }),
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
