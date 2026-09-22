e.d(t, { A: () => s, _: () => u });
var l = e(477900);
e(582128);
var c = e(477782),
    i = e(138134),
    a = e(627363),
    p = e(587895),
    o = e(928658),
    r = e(652215),
    d = e(375708);
let u = "app_channel_context_menu";
function s(n, t) {
    let e = n.type === r.rbe.GUILD_APP ? n.getApplicationId() : null;
    return null == e
        ? null
        : (0, l.jsx)(c.Dr, {
              id: "report-app",
              label: d.intl.string(d.t.NgA5vp),
              action: () => {
                  a.Ay.fetchApplication(e)
                      .then(() => {
                          let l = p.A.getApplication(e);
                          null != l &&
                              (0, o.r3)({
                                  application: l,
                                  entrypoint: t,
                                  contextualGuildId: n.getGuildId() ?? void 0,
                                  contextualChannelId: n.id,
                              });
                      })
                      .catch(() => {});
              },
              icon: i.FlagIcon,
              leadingAccessory: { type: "icon", icon: i.FlagIcon },
              color: "danger",
          });
}
