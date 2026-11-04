var e = t(477900);
t(582128);
var l = t(855986),
    a = t(477782),
    c = t(192308),
    s = t(435183),
    r = t(532622),
    o = t(136523),
    u = t(345640),
    d = t(576705),
    A = t(882840),
    b = t(652215),
    g = t(792996);
t.d(
    i,
    {},
    {
        A: function (n, i) {
            let h = (0, l.bG)([d.A], () => d.A.can(b.xBc.MANAGE_CHANNELS, i)),
                p = (0, r.Ay)(n),
                C = (0, u.b)(n),
                j = (0, A.l)(n),
                v = null != j && j.length > 0;
            return n.isGuildVoice() && (h || p)
                ? !C && h && v
                    ? (0, e.jsx)(a.Dr, {
                          id: "clear-status",
                          label: g.intl.string(g.t["22CYiZ"]),
                          action: () => {
                              s.Ay.updateVoiceChannelStatus(n.id, "");
                          },
                      })
                    : C && p
                      ? (0, e.jsx)(a.Dr, {
                            id: "set-status",
                            label: g.intl.string(g.t.RBd5PW),
                            action: () => {
                                (0, c.mM)(
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
        },
    },
);
