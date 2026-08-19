t.d(i, { A: () => p });
var e = t(477900);
t(582128);
var l = t(17928),
    a = t(477782),
    c = t(192308),
    s = t(435183),
    r = t(532622),
    o = t(136523),
    d = t(345640),
    u = t(576705),
    A = t(882840),
    b = t(652215),
    g = t(375708);
function p(n, i) {
    let p = (0, l.bG)([u.A], () => u.A.can(b.xBc.MANAGE_CHANNELS, i)),
        h = (0, r.Ay)(n),
        C = (0, d.b)(n),
        y = (0, A.l)(n),
        j = null != y && y.length > 0;
    return n.isGuildVoice() && (p || h)
        ? !C && p && j
            ? (0, e.jsx)(a.Dr, {
                  id: "clear-status",
                  label: g.intl.string(g.t["22CYiZ"]),
                  action: () => {
                      s.Ay.updateVoiceChannelStatus(n.id, "");
                  },
              })
            : C && h
              ? (0, e.jsx)(a.Dr, {
                    id: "set-status",
                    label: g.intl.string(g.t.RBd5PW),
                    action: () => {
                        (0, c.openModalLazy)(
                            async () => {
                                let { default: i } = await Promise.resolve().then(t.bind(t, 136523));
                                return (t) => (0, e.jsx)(i, { channel: n, ...t });
                            },
                            { modalKey: o.m },
                        );
                    },
                })
              : null
        : null;
}
