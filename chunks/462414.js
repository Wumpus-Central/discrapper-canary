n.d(t, { Z: () => f }), n(388685);
var r = n(243814),
    i = n(846027),
    l = n(131951),
    a = n(13140),
    s = n(996106),
    o = n(452426),
    c = n(186901),
    u = n(981631),
    d = n(65154);
function p(e) {
    let t = e.application.id;
    if (null == t) throw new s.Z({ errorCode: u.lTL.INVALID_COMMAND }, "No application.");
    return t;
}
let f = {
    [u.Etm.SET_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    input_mode: (0, o.Z)(e).keys({
                        type: e.string().valid(Object.keys(u.pM4)),
                        shortcut: e.string().required(),
                    }),
                    self_mute: e.boolean(),
                    self_deaf: e.boolean(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { input_mode: n, self_mute: r, self_deaf: s },
                } = e,
                o = p(t);
            null != n && i.Z.setMode(n.type, { shortcut: (0, a.Kd)(n.shortcut) }, o),
                null != r && r !== l.Z.isSelfMute(o) && i.Z.toggleSelfMute({ context: o }),
                null != s && s !== l.Z.isSelfDeaf(o) && i.Z.toggleSelfDeaf({ context: o });
        },
    },
    [u.Etm.SET_USER_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, mute: r, volume: a },
                } = e,
                s = p(t);
            null != r && r !== l.Z.isLocalMute(n, s) && i.Z.toggleLocalMute(n, s),
                null != a && i.Z.setLocalVolume(n, a, s);
        },
    },
    [u.Etm.PUSH_TO_TALK]: {
        scope: {
            [c.Gp.ALL]: [r.x.RPC, r.x.RPC_VOICE_WRITE],
        },
        validation: (e) => (0, o.Z)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t },
            } = e;
            l.Z.getMode(d.Yn.DEFAULT) === u.pM4.PUSH_TO_TALK &&
                l.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(t), d.Yn.DEFAULT);
        },
    },
};
