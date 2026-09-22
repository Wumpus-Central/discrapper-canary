t.d(n, { A: () => u });
var i = t(477900);
t(582128);
var l = t(17928),
    s = t(477782),
    a = t(138134),
    o = t(928658),
    r = t(734057),
    c = t(375708);
function u(e, n) {
    let t = (0, l.bG)([r.A], () => r.A.getChannel(n)),
        u = t?.getGuildId();
    return null == e
        ? null
        : (0, i.jsx)(s.rX, {
              children: (0, i.jsx)(s.Dr, {
                  id: "report-app",
                  color: "danger",
                  label: c.intl.string(c.t.NgA5vp),
                  action: () =>
                      (0, o.r3)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: u ?? void 0,
                          contextualChannelId: t?.id,
                      }),
                  icon: a.FlagIcon,
                  leadingAccessory: { type: "icon", icon: a.FlagIcon },
              }),
          });
}
