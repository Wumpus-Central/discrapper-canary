t.d(n, { A: () => v });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(435183),
    s = t(532622),
    u = t(136523),
    o = t(345640),
    d = t(576705),
    c = t(309698),
    A = t(652215),
    E = t(985018);
function v(e, n) {
    let v = (0, r.bG)([d.A], () => d.A.can(A.xBc.MANAGE_CHANNELS, n)),
        g = (0, s.Ay)(e),
        f = (0, o.b)(e),
        h = (0, r.bG)([c.A], () => c.A.getChannelStatus(e)),
        y = null != h && h.length > 0;
    return e.isGuildVoice() && (v || g)
        ? !f && v && y
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
                            { modalKey: u.m },
                        );
                    },
                })
              : null
        : null;
}
