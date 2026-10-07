t.d(n, { A: () => u });
var l = t(477900);
t(582128);
var i = t(17928),
    a = t(477782),
    s = t(138134),
    o = t(928658),
    r = t(734057),
    c = t(660183);
function u(e, n) {
    let t = (0, i.bG)([r.A], () => r.A.getChannel(n)),
        u = t?.getGuildId();
    return null == e
        ? null
        : (0, l.jsx)(a.rX, {
              children: (0, l.jsx)(a.Dr, {
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
                  icon: s.FlagIcon,
                  leadingAccessory: { type: "icon", icon: s.FlagIcon },
              }),
          });
}
