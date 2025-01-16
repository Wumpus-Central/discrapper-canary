n(47120);
var i = n(200651);
n(192379);
var r = n(243814),
    l = n(481060),
    a = n(846027),
    s = n(872810),
    o = n(594190),
    c = n(989941),
    d = n(173507),
    u = n(199902),
    h = n(131951),
    m = n(449224),
    p = n(358085),
    g = n(452426),
    f = n(736045),
    _ = n(186901),
    E = n(981631);
t.Z = {
    [E.Etm.TOGGLE_VIDEO]: {
        scope: {
            [_.Gp.ALL]: [r.x.RPC, r.x.RPC_VIDEO_WRITE]
        },
        handler() {
            let e = h.Z.isVideoEnabled();
            if (null != (0, f.Z)()) e ? a.Z.setVideoEnabled(!1) : (0, d.Z)(() => a.Z.setVideoEnabled(!0), E.IlC.APP);
        }
    },
    [E.Etm.TOGGLE_SCREENSHARE]: {
        scope: {
            [_.Gp.ALL]: [r.x.RPC, r.x.RPC_SCREENSHARE_WRITE]
        },
        validation: (e) =>
            (0, g.Z)(e)
                .optional()
                .keys({ pid: e.number().optional().min(0) }),
        handler(e) {
            let {
                    args: { pid: t }
                } = e,
                r = u.Z.getCurrentUserActiveStream(),
                a = u.Z.getStreamerActiveStreamMetadata(),
                d = (0, c.Z)(o.ZP, m.Z),
                h = (0, f.Z)();
            if (null != h)
                null != t && null != a && a.pid !== t && (0, p.isWindows)()
                    ? (0, s.WH)(h.guild_id, h.id, { pid: t })
                    : null != r
                      ? (0, s.L6)(!1)
                      : null != t && (0, p.isWindows)()
                        ? (0, s.WH)(h.guild_id, h.id, { pid: t })
                        : null != d
                          ? (0, s.WH)(h.guild_id, h.id, { pid: d.pid })
                          : (0, l.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('38454')]).then(n.bind(n, 60594));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guildId: h.guild_id,
                                        analyticsLocation: E.Sbl.ACTIVITY_RPC
                                    });
                            });
        }
    }
};
