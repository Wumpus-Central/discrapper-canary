n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(928658),
    a = n(734057),
    o = n(985018);

function c(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getChannel(t)),
        c = null == n ? void 0 : n.getGuildId();
    return null == e
        ? null
        : (0, r.jsx)(i.rXV, {
              children: (0, r.jsx)(i.Drp, {
                  id: "report-app",
                  color: "danger",
                  label: o.intl.string(o.t.NgA5vp),
                  action: () =>
                      (0, s.r3)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: null != c ? c : void 0,
                          contextualChannelId: null == n ? void 0 : n.id,
                      }),
                  icon: i.iFK,
                  leadingAccessory: {
                      type: "icon",
                      icon: i.iFK,
                  },
              }),
          });
}
