"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(928658),
    a = n(734057),
    o = n(985018);
function c(e, t) {
    let n = (0, s.bG)([a.A], () => a.A.getChannel(t)),
        c = n?.getGuildId();
    return null == e
        ? null
        : (0, i.jsx)(l.rXV, {
              children: (0, i.jsx)(l.Drp, {
                  id: "report-app",
                  color: "danger",
                  label: o.intl.string(o.t.NgA5vp),
                  action: () =>
                      (0, r.r3)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: c ?? void 0,
                          contextualChannelId: n?.id,
                      }),
                  icon: l.iFK,
                  leadingAccessory: { type: "icon", icon: l.iFK },
              }),
          });
}
