n.d(t, { Z: () => m }), n(47120);
var i = n(243814),
    l = n(846027),
    r = n(131951),
    a = n(13140),
    s = n(996106),
    o = n(452426),
    d = n(186901),
    c = n(981631),
    u = n(65154);
function h(e) {
    let t = e.application.id;
    if (null == t) throw new s.Z({ errorCode: c.lTL.INVALID_COMMAND }, 'No application.');
    return t;
}
let m = {
    [c.Etm.SET_VOICE_SETTINGS_2]: {
        scope: d.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    input_mode: (0, o.Z)(e).keys({
                        type: e.string().valid(Object.keys(c.pM4)),
                        shortcut: e.string().required()
                    }),
                    self_mute: e.boolean(),
                    self_deaf: e.boolean()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { input_mode: n, self_mute: i, self_deaf: s }
                } = e,
                o = h(t);
            null != n && l.Z.setMode(n.type, { shortcut: (0, a.Kd)(n.shortcut) }, o), null != i && i !== r.Z.isSelfMute(o) && l.Z.toggleSelfMute({ context: o }), null != s && s !== r.Z.isSelfDeaf(o) && l.Z.toggleSelfDeaf({ context: o });
        }
    },
    [c.Etm.SET_USER_VOICE_SETTINGS_2]: {
        scope: d.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, mute: i, volume: a }
                } = e,
                s = h(t);
            null != i && i !== r.Z.isLocalMute(n, s) && l.Z.toggleLocalMute(n, s), null != a && l.Z.setLocalVolume(n, a, s);
        }
    },
    [c.Etm.PUSH_TO_TALK]: {
        scope: {
            [d.Gp.ALL]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
        },
        validation: (e) => (0, o.Z)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t }
            } = e;
            r.Z.getMode(u.Yn.DEFAULT) === c.pM4.PUSH_TO_TALK && r.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(t), u.Yn.DEFAULT);
        }
    }
};
