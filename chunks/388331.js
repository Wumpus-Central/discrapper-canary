n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var r = n(179771),
    a = n(192308),
    l = n(827343),
    s = n(401843),
    o = n(793574),
    d = n(15285),
    u = n(905552),
    c = n(442353),
    A = n(616356),
    h = n(430452),
    _ = n(157257),
    E = n(723702),
    p = n(629471),
    m = n(693806),
    g = n(613057),
    I = n(652215);
let C = {
    [I.e$_.TOGGLE_VIDEO]: {
        scope: { [g.sm.ALL]: [r.F.RPC, r.F.RPC_VIDEO_WRITE] },
        handler() {
            let e = h.Ay.isVideoEnabled();
            null != (0, m.A)() && (e ? l.A.setVideoEnabled(!1) : (0, c.A)(() => l.A.setVideoEnabled(!0), I.BRT.APP));
        },
    },
    [I.e$_.TOGGLE_SCREENSHARE]: {
        scope: { [g.sm.ALL]: [r.F.RPC, r.F.RPC_SCREENSHARE_WRITE] },
        validation: (e) =>
            (0, p.A)(e)
                .optional()
                .keys({ pid: e.number().optional().min(0) }),
        handler(e) {
            let {
                    args: { pid: t },
                } = e,
                r = A.A.getCurrentUserActiveStream(),
                l = A.A.getStreamerActiveStreamMetadata(),
                c = (0, u.A)(d.Ay, _.A),
                h = (0, m.A)();
            null != h &&
                (null != t && null != l && l.pid !== t && (0, E.isWindows)()
                    ? (0, s.XI)(h.guild_id, h.id, { pid: t })
                    : null != r
                      ? (0, s.nO)(!1)
                      : null != t && (0, E.isWindows)()
                        ? (0, s.XI)(h.guild_id, h.id, { pid: t })
                        : null != c
                          ? (0, s.XI)(h.guild_id, h.id, { pid: c.pid })
                          : (0, a.openModalLazy)(async () => {
                                let { default: e } = await n.e("96811").then(n.bind(n, 648230));
                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: [o.A.RPC] });
                            }));
        },
    },
};
