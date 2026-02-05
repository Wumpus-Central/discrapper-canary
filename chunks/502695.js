"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(956793),
    s = n(688810),
    o = n(806246),
    l = n(378570),
    u = n(734057),
    c = n(383501),
    d = n(977997),
    _ = n(954571),
    f = n(993401),
    p = n(652215),
    h = n(985018);
function m(e) {
    let { user: t, activity: n, onAction: m, onClose: g } = e,
        { newestAnalyticsLocation: E } = (0, s.Ay)(),
        A = (0, i.bG)([d.A, u.A], () => u.A.getChannel(d.A.getVoiceStateForUser(t.id)?.channelId)),
        I = (0, i.bG)([c.A], () => c.A.getChannelId() === A?.id);
    return n?.type !== p.$pd.HANG_STATUS || null == A
        ? null
        : (0, r.jsx)(f.FD, {
              text: I ? h.intl.string(h.t.BXxdl7) : h.intl.string(h.t["9C444m"]),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(),
                      m?.({ action: "PRESS_HANG_STATUS_BUTTON" }),
                      a.default.selectVoiceChannel(A.id),
                      (0, l.iN)(A.id),
                      _.default.track(p.HAw.HANG_STATUS_CTA_CLICKED, {
                          ...(0, o.A)(A.id),
                          source: E,
                          other_user_id: t.id,
                          cta_type: I ? "open" : "join",
                      }),
                      g?.();
              },
          });
}
