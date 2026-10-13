e.d(l, { A: () => A, _: () => s });
var t = e(477900);
e(582128);
var i = e(477782),
    c = e(138134),
    o = e(627363),
    u = e(587895),
    r = e(928658),
    d = e(652215),
    a = e(660183);
let s = "app_channel_context_menu";
function A(n, l) {
    let e = n.type === d.rbe.GUILD_APP ? n.getApplicationId() : null;
    return null == e
        ? null
        : (0, t.jsx)(i.Dr, {
              id: "report-app",
              label: a.intl.string(a.t.NgA5vp),
              action: () => {
                  o.Ay.fetchApplication(e)
                      .then(() => {
                          let t = u.A.getApplication(e);
                          null != t &&
                              (0, r.r3)({
                                  application: t,
                                  entrypoint: l,
                                  contextualGuildId: n.getGuildId() ?? void 0,
                                  contextualChannelId: n.id,
                              });
                      })
                      .catch(() => {});
              },
              icon: c.FlagIcon,
              leadingAccessory: { type: "icon", icon: c.FlagIcon },
              color: "danger",
          });
}
