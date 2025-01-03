n(47120);
var i = n(243814),
    r = n(846027),
    l = n(131951),
    a = n(13140),
    s = n(996106),
    o = n(452426),
    c = n(186901),
    d = n(981631),
    u = n(65154);
function h(e) {
    let t = e.application.id;
    if (null == t) throw new s.Z({ errorCode: d.lTL.INVALID_COMMAND }, 'No application.');
    return t;
}
t.Z = {
    [d.Etm.SET_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    input_mode: (0, o.Z)(e).keys({
                        type: e.string().valid(Object.keys(d.pM4)),
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
            null != n && r.Z.setMode(n.type, { shortcut: (0, a.Kd)(n.shortcut) }, o), null != i && i !== l.Z.isSelfMute(o) && r.Z.toggleSelfMute({ context: o }), null != s && s !== l.Z.isSelfDeaf(o) && r.Z.toggleSelfDeaf({ context: o });
        }
    },
    [d.Etm.SET_USER_VOICE_SETTINGS_2]: {
        scope: c.lH,
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
            null != i && i !== l.Z.isLocalMute(n, s) && r.Z.toggleLocalMute(n, s), null != a && r.Z.setLocalVolume(n, a, s);
        }
    },
    [d.Etm.PUSH_TO_TALK]: {
        scope: {
            [c.Gp.ALL]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
        },
        validation: (e) => (0, o.Z)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t }
            } = e;
            if (l.Z.getMode(u.Yn.DEFAULT) === d.pM4.PUSH_TO_TALK) l.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(t), u.Yn.DEFAULT);
        }
    }
};
