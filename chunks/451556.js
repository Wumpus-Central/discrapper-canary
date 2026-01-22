n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(928658),
    s = n(734057),
    o = n(985018);
function c(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getChannel(t)),
        c = null == n ? void 0 : n.getGuildId();
    return null == e
        ? null
        : (0, r.jsx)(i.rXV, {
              children: (0, r.jsx)(i.Drp, {
                  id: "report-app",
                  color: "danger",
                  label: o.intl.string(o.t.NgA5vp),
                  action: () =>
                      (0, a.r3)({
                          application: e,
                          entrypoint: "activity_ui_channel_call",
                          contextualGuildId: null != c ? c : void 0,
                          contextualChannelId: null == n ? void 0 : n.id,
                      }),
                  icon: i.iFK,
              }),
          });
}
