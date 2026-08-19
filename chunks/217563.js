t.d(i, { A: () => b });
var e = t(477900);
t(582128);
var l = t(17928),
    a = t(477782),
    c = t(730852),
    s = t(796774),
    r = t(984813),
    o = t(576705),
    d = t(309010),
    u = t(652215),
    A = t(375708);
function b(n, i) {
    let t = (0, l.bG)([o.A], () => o.A.can(u.xBc.CONNECT, n), [n]),
        b = (0, l.bG)([d.Ay], () => d.Ay.getVoiceChannelId()),
        g = (0, r.mz)(i),
        p = b === n.id;
    return n.isGuildVocal() && t && null != g && !p
        ? (0, e.jsx)(a.Dr, {
              id: "join-muted-custom-join-sound",
              label: A.intl.string(A.t.saLMWc),
              action: () => {
                  (0, s.CX)(n.id), c.default.selectVoiceChannel(n.id);
              },
          })
        : null;
}
