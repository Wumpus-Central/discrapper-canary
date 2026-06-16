t.d(n, { A: () => u });
var l = t(627968);
t(64700);
var i = t(17928),
    s = t(477782),
    a = t(138134),
    r = t(928658),
    o = t(734057),
    c = t(375708);
function u(e, n) {
    let t = (0, i.bG)([o.A], () => o.A.getChannel(n)),
        u = t?.getGuildId();
    return null == e
        ? null
        : (0, l.jsx)(s.rX, {
              children: (0, l.jsx)(s.Dr, {
                  id: "report-app",
                  color: "danger",
                  label: c.intl.string(c.t.NgA5vp),
                  action: () =>
                      (0, r.r3)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: u ?? void 0,
                          contextualChannelId: t?.id,
                      }),
                  icon: a.i,
                  leadingAccessory: { type: "icon", icon: a.i },
              }),
          });
}
