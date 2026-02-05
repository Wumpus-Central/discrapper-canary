t.d(n, { A: () => E });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(477782),
    a = t(956793),
    s = t(796774),
    u = t(984813),
    o = t(576705),
    d = t(309010),
    c = t(652215),
    A = t(985018);
function E(e, n) {
    let t = (0, r.bG)([o.A], () => o.A.can(c.xBc.CONNECT, e), [e]),
        E = (0, r.bG)([d.A], () => d.A.getVoiceChannelId()),
        v = (0, u.mz)(n),
        g = E === e.id;
    return e.isGuildVocal() && t && null != v && !g
        ? (0, i.jsx)(l.Dr, {
              id: "join-muted-custom-join-sound",
              label: A.intl.string(A.t.saLMWc),
              action: () => {
                  (0, s.CX)(e.id), a.default.selectVoiceChannel(e.id);
              },
          })
        : null;
}
