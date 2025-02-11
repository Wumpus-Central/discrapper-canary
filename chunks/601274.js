i.d(t, { Z: () => u });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    d = i(475179),
    r = i(703656),
    s = i(496675),
    c = i(981631),
    o = i(388032);
function u(n, t) {
    return (0, l.e7)([s.Z], () => s.Z.can(c.Plq.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, e.jsx)(a.sNh, {
              id: 'open-chat',
              label: o.intl.string(o.t.ZXxLQk),
              action: () => {
                  d.Z.updateChatOpen(n.id, !0), (0, r.XU)(t.id, n.id);
              }
          })
        : null;
}
