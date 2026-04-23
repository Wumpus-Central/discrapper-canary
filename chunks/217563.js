n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(477782),
    a = n(956793),
    s = n(796774),
    d = n(984813),
    u = n(576705),
    o = n(309010),
    c = n(652215),
    A = n(985018);
function E(e, t) {
    let n = (0, l.bG)([u.A], () => u.A.can(c.xBc.CONNECT, e), [e]),
        E = (0, l.bG)([o.A], () => o.A.getVoiceChannelId()),
        g = (0, d.mz)(t),
        C = E === e.id;
    return e.isGuildVocal() && n && null != g && !C
        ? (0, i.jsx)(r.Dr, {
              id: "join-muted-custom-join-sound",
              label: A.intl.string(A.t.saLMWc),
              action: () => {
                  (0, s.CX)(e.id), a.default.selectVoiceChannel(e.id);
              },
          })
        : null;
}
