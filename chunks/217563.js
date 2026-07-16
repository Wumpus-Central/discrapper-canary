t.d(n, { A: () => b });
var e = t(627968);
t(64700);
var l = t(17928),
    a = t(477782),
    s = t(730852),
    c = t(796774),
    r = t(984813),
    d = t(576705),
    o = t(309010),
    u = t(652215),
    A = t(375708);
function b(i, n) {
    let t = (0, l.bG)([d.A], () => d.A.can(u.xBc.CONNECT, i), [i]),
        b = (0, l.bG)([o.Ay], () => o.Ay.getVoiceChannelId()),
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
