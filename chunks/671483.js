n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(477782),
    a = n(192308),
    s = n(435183),
    d = n(532622),
    u = n(136523),
    o = n(345640),
    c = n(576705),
    A = n(882840),
    E = n(652215),
    g = n(985018);
function C(e, t) {
    let C = (0, l.bG)([c.A], () => c.A.can(E.xBc.MANAGE_CHANNELS, t)),
        h = (0, d.Ay)(e),
        _ = (0, o.b)(e),
        f = (0, A.l)(e),
        N = null != f && f.length > 0;
    return e.isGuildVoice() && (C || h)
        ? !_ && C && N
            ? (0, i.jsx)(r.Dr, {
                  id: "clear-status",
                  label: g.intl.string(g.t["22CYiZ"]),
                  action: () => {
                      s.Ay.updateVoiceChannelStatus(e.id, "");
                  },
              })
            : _ && h
              ? (0, i.jsx)(r.Dr, {
                    id: "set-status",
                    label: g.intl.string(g.t.RBd5PW),
                    action: () => {
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(n.bind(n, 136523));
                                return (n) => (0, i.jsx)(t, { channel: e, ...n });
                            },
                            { modalKey: u.m },
                        );
                    },
                })
              : null
        : null;
}
