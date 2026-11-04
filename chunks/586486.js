e.d(n, { _: () => A, A: () => g });
var t = e(477900);
e(582128);
var i = e(477782),
    u = e(138134),
    c = e(627363),
    r = e(587895),
    o = e(928658),
    a = e(858899),
    d = e(792996),
    s = e(652215);
let A = "app_channel_context_menu";
function g(l, n) {
    let e = l.type === s.rbe.GUILD_APP ? l.getApplicationId() : null;
    return null == e
        ? null
        : (0, t.jsx)(i.Dr, {
              id: "report-app",
              label: d.intl.string(d.t.NgA5vp),
              action: () =>
                  (async function (l, n, e) {
                      let t = await (async function (l) {
                          let n = r.A.getApplication(l);
                          if (null != n && r.A.isHydrated(l)) return n;
                          try {
                              await c.Ay.fetchApplication(l);
                          } catch {
                              return null;
                          }
                          return r.A.getApplication(l);
                      })(l);
                      null == t
                          ? (0, a.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" })
                          : (0, o.r3)({
                                application: t,
                                entrypoint: e,
                                contextualGuildId: n.getGuildId() ?? void 0,
                                contextualChannelId: n.id,
                            });
                  })(e, l, n),
              icon: u.FlagIcon,
              leadingAccessory: { type: "icon", icon: u.FlagIcon },
              color: "danger",
          });
}
