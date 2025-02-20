n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(475179),
    c = n(703656),
    a = n(496675),
    s = n(981631),
    u = n(388032);
function d(e, t) {
    return (0, i.e7)([a.Z], () => a.Z.can(s.Plq.CONNECT, e), [e]) && e.isGuildVocal()
        ? (0, r.jsx)(l.sNh, {
              id: 'open-chat',
              label: u.NW.string(u.t.ZXxLQk),
              action: () => {
                  o.Z.updateChatOpen(e.id, !0), (0, c.XU)(t.id, e.id);
              }
          })
        : null;
}
