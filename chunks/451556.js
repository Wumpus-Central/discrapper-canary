t.d(n, { A: () => u });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(477782),
    s = t(138134),
    r = t(928658),
    o = t(734057),
    c = t(985018);
function u(e, n) {
    let t = (0, i.bG)([o.A], () => o.A.getChannel(n)),
        u = t?.getGuildId();
    return null == e
        ? null
        : (0, l.jsx)(a.rX, {
              children: (0, l.jsx)(a.Dr, {
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
                  icon: s.i,
                  leadingAccessory: { type: "icon", icon: s.i },
              }),
          });
}
