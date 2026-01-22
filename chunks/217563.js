e.d(t, { A: () => b });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(477782),
    a = e(956793),
    s = e(796774),
    c = e(984813),
    o = e(576705),
    d = e(309010),
    u = e(652215),
    A = e(985018);
function b(n, t) {
    let e = (0, l.bG)([o.A], () => o.A.can(u.xBc.CONNECT, n), [n]),
        b = (0, l.bG)([d.A], () => d.A.getVoiceChannelId()),
        h = (0, c.mz)(t),
        g = b === n.id;
    return n.isGuildVocal() && e && null != h && !g
        ? (0, i.jsx)(r.Dr, {
              id: "join-muted-custom-join-sound",
              label: A.intl.string(A.t.saLMWc),
              action: () => {
                  (0, s.CX)(n.id), a.default.selectVoiceChannel(n.id);
              },
          })
        : null;
}
