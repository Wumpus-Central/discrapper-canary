t.d(n, { A: () => b });
var e = t(477900);
t(582128);
var l = t(17928),
    a = t(477782),
    s = t(730852),
    c = t(796774),
    r = t(984813),
    o = t(576705),
    d = t(309010),
    u = t(652215),
    A = t(375708);
function b(i, n) {
    let t = (0, l.bG)([o.A], () => o.A.can(u.xBc.CONNECT, i), [i]),
        b = (0, l.bG)([d.Ay], () => d.Ay.getVoiceChannelId()),
        p = (0, r.mz)(n),
        h = b === i.id;
    return i.isGuildVocal() && t && null != p && !h
        ? (0, e.jsx)(a.Dr, {
              id: "join-muted-custom-join-sound",
              label: A.intl.string(A.t.saLMWc),
              action: () => {
                  (0, c.CX)(i.id), s.default.selectVoiceChannel(i.id);
              },
          })
        : null;
}
