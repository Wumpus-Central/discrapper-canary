n.d(t, { A: () => h }), n(896048);
var r = n(179771),
    i = n(827343),
    l = n(140175),
    a = n(430452),
    s = n(350535),
    o = n(636401),
    c = n(629471),
    u = n(613057),
    d = n(652215),
    p = n(731854);
function f(e) {
    let t = e.application.id;
    if (null == t) throw new o.A({ errorCode: d.Lw6.INVALID_COMMAND }, "No application.");
    return t;
}
let h = {
    [d.e$_.SET_VOICE_SETTINGS_2]: {
        scope: u.hj,
        validation: (e) =>
            (0, c.A)(e)
                .required()
                .keys({
                    input_mode: (0, c.A)(e).keys({
                        type: e.string().valid(Object.keys(d.TBI)),
                        shortcut: e.string().required(),
                    }),
                    self_mute: e.boolean(),
                    self_deaf: e.boolean(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { input_mode: n, self_mute: r, self_deaf: l },
                } = e,
                o = f(t);
            null != n && i.A.setMode(n.type, { shortcut: (0, s.OH)(n.shortcut) }, o),
                null != r && r !== a.A.isSelfMute(o) && i.A.toggleSelfMute({ context: o }),
                null != l && l !== a.A.isSelfDeaf(o) && i.A.toggleSelfDeaf({ context: o });
        },
    },
    [d.e$_.SET_USER_VOICE_SETTINGS_2]: {
        scope: u.hj,
        validation: (e) =>
            (0, c.A)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, mute: r, volume: l },
                } = e,
                s = f(t);
            null != r && r !== a.A.isLocalMute(n, s) && i.A.toggleLocalMute(n, s),
                null != l && i.A.setLocalVolume(n, l, s);
        },
    },
    [d.e$_.PUSH_TO_TALK]: {
        scope: {
            [u.sm.ALL]: [r.F.RPC, r.F.RPC_VOICE_WRITE],
        },
        validation: (e) => (0, c.A)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t },
            } = e;
            a.A.getMode(p.x.DEFAULT) === d.TBI.PUSH_TO_TALK && (0, l.N)(t);
        },
    },
};
