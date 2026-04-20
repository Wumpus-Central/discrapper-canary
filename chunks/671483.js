t.d(n, { A: () => v });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(435183),
    s = t(532622),
    o = t(136523),
    u = t(345640),
    d = t(576705),
    c = t(882840),
    A = t(652215),
    E = t(985018);
function v(e, n) {
    let v = (0, r.bG)([d.A], () => d.A.can(A.xBc.MANAGE_CHANNELS, n)),
        g = (0, s.Ay)(e),
        f = (0, u.b)(e),
        I = (0, c.l)(e),
        N = null != I && I.length > 0;
    return e.isGuildVoice() && (v || g)
        ? !f && v && N
            ? (0, i.jsx)(l.Drp, {
                  id: "clear-status",
                  label: E.intl.string(E.t["22CYiZ"]),
                  action: () => {
                      a.Ay.updateVoiceChannelStatus(e.id, "");
                  },
              })
            : f && g
              ? (0, i.jsx)(l.Drp, {
                    id: "set-status",
                    label: E.intl.string(E.t.RBd5PW),
                    action: () => {
                        (0, l.mMO)(
                            async () => {
                                let { default: n } = await Promise.resolve().then(t.bind(t, 136523));
                                return (t) => (0, i.jsx)(n, { channel: e, ...t });
                            },
                            { modalKey: o.m },
                        );
                    },
                })
              : null
        : null;
}
