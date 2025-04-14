n.d(t, { r: () => b });
var r = n(846027),
    i = n(365023),
    l = n(565799),
    a = n(501655),
    o = n(368442),
    s = n(829750),
    c = n(560688),
    u = n(173507),
    d = n(592125),
    p = n(131951),
    h = n(19780),
    f = n(594174),
    g = n(981631),
    m = n(65154);
function b() {
    var e, t;
    if (!(0, i.l)()) return;
    let n = p.Z.isVideoEnabled(),
        b = Object.values(p.Z.getVideoDevices())[0],
        _ = !1 === (null == (t = null == b ? void 0 : b.disabled) || t),
        E = p.Z.supportsInApp(m.AN.VIDEO) && p.Z.supportsInApp(m.AN.DESKTOP_CAPTURE),
        O = d.Z.getChannel(h.Z.getChannelId()),
        N = null == (e = f.default.getCurrentUser()) ? void 0 : e.id;
    if (null == O || null == N) return;
    let { reachedLimit: y } = (0, s.t)(O);
    if (!y) {
        if (O.isGuildStageVoice()) {
            let e = l.Z.getMutableParticipants(O.id, a.pV.SPEAKER),
                t =
                    null == e
                        ? void 0
                        : e.find((e) => {
                              let { user: t } = e;
                              return t.id === N;
                          });
            if (!(0, o.tu)(O.guild_id) || !E || null == t || t.voiceState.suppress) return;
        }
        return (
            n
                ? r.Z.setVideoEnabled(!1)
                : !n && _
                  ? (0, u.Z)(
                        () => {
                            r.Z.setVideoEnabled(!0);
                        },
                        g.IlC.APP,
                        !0
                    )
                  : _ || (0, c.Z)(),
            !1
        );
    }
}
