e.d(t, { Z: () => u });
var i = e(54381);
e(473749);
var l = e(442837),
    r = e(481060),
    a = e(475179),
    s = e(703656),
    c = e(496675),
    o = e(981631),
    d = e(388032);
function u(n, t) {
    return (0, l.e7)([c.Z], () => c.Z.can(o.Plq.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, i.jsx)(r.sNh, {
              id: "open-chat",
              label: d.intl.string(d.t.ZXxLQg),
              action: () => {
                  a.Z.updateChatOpen(n.id, !0), (0, s.XU)(t.id, n.id);
              },
          })
        : null;
}
