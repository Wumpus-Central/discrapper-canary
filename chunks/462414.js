n.d(t, { Z: () => h }), n(388685);
var r = n(243814),
    i = n(846027),
    l = n(131951),
    a = n(13140),
    o = n(996106),
    s = n(452426),
    c = n(186901),
    u = n(981631),
    d = n(65154);
function p(e) {
    let t = e.application.id;
    if (null == t) throw new o.Z({ errorCode: u.lTL.INVALID_COMMAND }, 'No application.');
    return t;
}
let h = {
    [u.Etm.SET_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    input_mode: (0, s.Z)(e).keys({
                        type: e.string().valid(Object.keys(u.pM4)),
                        shortcut: e.string().required()
                    }),
                    self_mute: e.boolean(),
                    self_deaf: e.boolean()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { input_mode: n, self_mute: r, self_deaf: o }
                } = e,
                s = p(t);
            null != n && i.Z.setMode(n.type, { shortcut: (0, a.Kd)(n.shortcut) }, s), null != r && r !== l.Z.isSelfMute(s) && i.Z.toggleSelfMute({ context: s }), null != o && o !== l.Z.isSelfDeaf(s) && i.Z.toggleSelfDeaf({ context: s });
        }
    },
    [u.Etm.SET_USER_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, mute: r, volume: a }
                } = e,
                o = p(t);
            null != r && r !== l.Z.isLocalMute(n, o) && i.Z.toggleLocalMute(n, o), null != a && i.Z.setLocalVolume(n, a, o);
        }
    },
    [u.Etm.PUSH_TO_TALK]: {
        scope: {
            [c.Gp.ALL]: [r.x.RPC, r.x.RPC_VOICE_WRITE]
        },
        validation: (e) => (0, s.Z)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t }
            } = e;
            l.Z.getMode(d.Yn.DEFAULT) === u.pM4.PUSH_TO_TALK && l.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(t), d.Yn.DEFAULT);
        }
    }
};
