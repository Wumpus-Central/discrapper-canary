n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(475179),
    o = n(703656),
    c = n(496675),
    s = n(981631),
    u = n(388032);
function d(e, t) {
    return (0, r.e7)([c.Z], () => c.Z.can(s.Plq.CONNECT, e), [e]) && e.isGuildVocal()
        ? (0, i.jsx)(l.sNh, {
              id: 'open-chat',
              label: u.intl.string(u.t.ZXxLQk),
              action: () => {
                  (a.Z.updateChatOpen(e.id, !0), (0, o.XU)(t.id, e.id));
              }
          })
        : null;
}
