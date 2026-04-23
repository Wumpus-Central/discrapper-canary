n.d(t, { A: () => _ });
var i = n(179771),
    r = n(827343),
    a = n(140175),
    l = n(430452),
    s = n(350535),
    o = n(636401),
    d = n(629471),
    u = n(613057),
    c = n(652215),
    A = n(731854);
function h(e) {
    let t = e.application.id;
    if (null == t) throw new o.A({ errorCode: c.Lw6.INVALID_COMMAND }, "No application.");
    return t;
}
let _ = {
    [c.e$_.SET_VOICE_SETTINGS_2]: {
        scope: u.hj,
        validation: (e) =>
            (0, d.A)(e)
                .required()
                .keys({
                    input_mode: (0, d.A)(e).keys({
                        type: e.string().valid(Object.keys(c.TBI)),
                        shortcut: e.string().required(),
                    }),
                    self_mute: e.boolean(),
                    self_deaf: e.boolean(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { input_mode: n, self_mute: i, self_deaf: a },
                } = e,
                o = h(t);
            null != n && r.A.setMode(n.type, { shortcut: (0, s.OH)(n.shortcut) }, o),
                null != i && i !== l.Ay.isSelfMute(o) && r.A.toggleSelfMute({ context: o }),
                null != a && a !== l.Ay.isSelfDeaf(o) && r.A.toggleSelfDeaf({ context: o });
        },
    },
    [c.e$_.SET_USER_VOICE_SETTINGS_2]: {
        scope: u.hj,
        validation: (e) =>
            (0, d.A)(e)
                .required()
                .keys({ user_id: e.string().required(), volume: e.number().min(0).max(200), mute: e.boolean() }),
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, mute: i, volume: a },
                } = e,
                s = h(t);
            null != i && i !== l.Ay.isLocalMute(n, s) && r.A.toggleLocalMute(n, s),
                null != a && r.A.setLocalVolume(n, a, s);
        },
    },
    [c.e$_.PUSH_TO_TALK]: {
        scope: { [u.sm.ALL]: [i.F.RPC, i.F.RPC_VOICE_WRITE] },
        validation: (e) => (0, d.A)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t },
            } = e;
            l.Ay.getMode(A.x.DEFAULT) === c.TBI.PUSH_TO_TALK && (0, a.N)(t);
        },
    },
};
