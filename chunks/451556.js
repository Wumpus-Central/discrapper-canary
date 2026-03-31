n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(928658),
    r = n(734057),
    o = n(985018);
function c(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.getChannel(t)),
        c = n?.getGuildId();
    return null == e
        ? null
        : (0, i.jsx)(s.rXV, {
              children: (0, i.jsx)(s.Drp, {
                  id: "report-app",
                  color: "danger",
                  label: o.intl.string(o.t.NgA5vp),
                  action: () =>
                      (0, a.r3)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: c ?? void 0,
                          contextualChannelId: n?.id,
                      }),
                  icon: s.iFK,
                  leadingAccessory: { type: "icon", icon: s.iFK },
              }),
          });
}
