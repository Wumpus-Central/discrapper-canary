t.d(n, { A: () => h });
var e = t(627968);
t(64700);
var l = t(17928),
    a = t(477782),
    s = t(192308),
    c = t(435183),
    r = t(532622),
    d = t(136523),
    o = t(345640),
    u = t(576705),
    A = t(882840),
    b = t(652215),
    p = t(375708);
function h(i, n) {
    let h = (0, l.bG)([u.A], () => u.A.can(b.xBc.MANAGE_CHANNELS, n)),
        C = (0, r.Ay)(i),
        g = (0, o.b)(i),
        j = (0, A.l)(i),
        v = null != j && j.length > 0;
    return i.isGuildVoice() && (h || C)
        ? !g && h && v
            ? (0, e.jsx)(a.Dr, {
                  id: "clear-status",
                  label: p.intl.string(p.t["22CYiZ"]),
                  action: () => {
                      c.Ay.updateVoiceChannelStatus(i.id, "");
                  },
              })
            : g && C
              ? (0, e.jsx)(a.Dr, {
                    id: "set-status",
                    label: p.intl.string(p.t.RBd5PW),
                    action: () => {
                        (0, s.openModalLazy)(
                            async () => {
                                let { default: n } = await Promise.resolve().then(t.bind(t, 136523));
                                return (t) => (0, e.jsx)(n, { channel: i, ...t });
                            },
                            { modalKey: d.m },
                        );
                    },
                })
              : null
        : null;
}
