n.d(t, { Z: () => g }), n(388685);
var r = n(243814),
    i = n(846027),
    l = n(837968),
    a = n(131951),
    o = n(13140),
    s = n(996106),
    c = n(452426),
    u = n(186901),
    d = n(981631),
    p = n(65154);
function f(e) {
    let t = e.application.id;
    if (null == t) throw new s.Z({ errorCode: d.lTL.INVALID_COMMAND }, "No application.");
    return t;
}
let g = {
    [d.Etm.SET_VOICE_SETTINGS_2]: {
        scope: u.lH,
        validation: (e) =>
            (0, c.Z)(e)
                .required()
                .keys({
                    input_mode: (0, c.Z)(e).keys({
                        type: e.string().valid(Object.keys(d.pM4)),
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
                s = f(t);
            null != n && i.Z.setMode(n.type, { shortcut: (0, o.Kd)(n.shortcut) }, s),
                null != r && r !== a.Z.isSelfMute(s) && i.Z.toggleSelfMute({ context: s }),
                null != l && l !== a.Z.isSelfDeaf(s) && i.Z.toggleSelfDeaf({ context: s });
        },
    },
    [d.Etm.SET_USER_VOICE_SETTINGS_2]: {
        scope: u.lH,
        validation: (e) =>
            (0, c.Z)(e)
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
                o = f(t);
            null != r && r !== a.Z.isLocalMute(n, o) && i.Z.toggleLocalMute(n, o),
                null != l && i.Z.setLocalVolume(n, l, o);
        },
    },
    [d.Etm.PUSH_TO_TALK]: {
        scope: {
            [u.Gp.ALL]: [r.x.RPC, r.x.RPC_VOICE_WRITE],
        },
        validation: (e) => (0, c.Z)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t },
            } = e;
            a.Z.getMode(p.Yn.DEFAULT) === d.pM4.PUSH_TO_TALK && (0, l.I)(t);
        },
    },
};
