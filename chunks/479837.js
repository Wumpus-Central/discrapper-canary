n.d(t, { r: () => _ });
var r = n(846027),
    i = n(365023),
    l = n(565799),
    a = n(501655),
    s = n(368442),
    o = n(829750),
    c = n(560688),
    u = n(173507),
    d = n(592125),
    p = n(131951),
    f = n(19780),
    h = n(594174),
    g = n(981631),
    m = n(65154);
function _() {
    var e, t;
    if (!(0, i.l)()) return;
    let n = p.Z.isVideoEnabled(),
        _ = Object.values(p.Z.getVideoDevices())[0],
        b = !1 === (null == (t = null == _ ? void 0 : _.disabled) || t),
        E = p.Z.supportsInApp(m.AN.VIDEO) && p.Z.supportsInApp(m.AN.DESKTOP_CAPTURE),
        O = d.Z.getChannel(f.Z.getChannelId()),
        y = null == (e = h.default.getCurrentUser()) ? void 0 : e.id;
    if (null == O || null == y) return;
    let { reachedLimit: v } = (0, o.t)(O);
    if (!v) {
        if (O.isGuildStageVoice()) {
            let e = l.Z.getMutableParticipants(O.id, a.pV.SPEAKER),
                t =
                    null == e
                        ? void 0
                        : e.find((e) => {
                              let { user: t } = e;
                              return t.id === y;
                          });
            if (!(0, s.tu)(O.guild_id) || !E || null == t || t.voiceState.suppress) return;
        }
        return (
            n
                ? r.Z.setVideoEnabled(!1)
                : !n && b
                  ? (0, u.Z)(
                        () => {
                            r.Z.setVideoEnabled(!0);
                        },
                        g.IlC.APP,
                        !0,
                    )
                  : b || (0, c.Z)(),
            !1
        );
    }
}
