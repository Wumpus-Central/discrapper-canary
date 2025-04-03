n.d(t, { Z: () => p }), n(47120);
var r = n(243814),
    i = n(846027),
    l = n(131951),
    a = n(594174),
    o = n(996106),
    s = n(452426),
    c = n(852926),
    u = n(186901),
    d = n(981631);
let p = {
    [d.Etm.SET_USER_VOICE_SETTINGS]: {
        scope: {
            [u.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_WRITE]
        },
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    pan: (0, s.Z)(e).keys({
                        left: e.number().min(0).max(1).required(),
                        right: e.number().min(0).max(1).required()
                    }),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean()
                }),
        handler(e) {
            let {
                    args: { user_id: t, pan: n, volume: r, mute: s }
                } = e,
                c = a.default.getCurrentUser();
            if (null == a.default.getUser(t) || (null == c ? void 0 : c.id) === t) throw new o.Z({ errorCode: d.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
            if ((null != n && i.Z.setLocalPan(t, n.left, n.right), null != r && i.Z.setLocalVolume(t, r), null != s)) {
                let e = l.Z.isLocalMute(t);
                ((e && !s) || (!e && s)) && i.Z.toggleLocalMute(t);
            }
            return {
                user_id: t,
                pan: l.Z.getLocalPan(t),
                volume: l.Z.getLocalVolume(t),
                mute: l.Z.isLocalMute(t)
            };
        }
    },
    [d.Etm.GET_VOICE_SETTINGS]: {
        scope: {
            [u.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
        },
        handler: () => (0, c._X)()
    },
    [d.Etm.SET_VOICE_SETTINGS]: {
        scope: {
            [u.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_WRITE]
        },
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    input: (0, s.Z)(e).keys({
                        device_id: e.string().valid(Object.keys(l.Z.getInputDevices())),
                        volume: e.number().min(0).max(100)
                    }),
                    output: (0, s.Z)(e).keys({
                        device_id: e.string().valid(Object.keys(l.Z.getOutputDevices())),
                        volume: e.number().min(0).max(200)
                    }),
                    mode: (0, s.Z)(e).keys({
                        type: e.string().valid(Object.keys(d.pM4)),
                        auto_threshold: e.boolean(),
                        threshold: e.number().min(-100).max(0),
                        shortcut: e.array().items(
                            (0, s.Z)(e).keys({
                                type: e.number().min(0).max(3).required(),
                                code: e.number().required(),
                                name: e.string()
                            })
                        ),
                        delay: e.number().min(0).max(2000)
                    }),
                    automatic_gain_control: e.boolean(),
                    echo_cancellation: e.boolean(),
                    noise_suppression: e.boolean(),
                    qos: e.boolean(),
                    silence_warning: e.boolean(),
                    deaf: e.boolean(),
                    mute: e.boolean()
                }),
        handler(e) {
            let {
                args: { input: t, output: n, mode: r, automatic_gain_control: a, echo_cancellation: o, noise_suppression: s, qos: u, silence_warning: d, deaf: p, mute: h }
            } = e;
            if ((t && (null != t.device_id && i.Z.setInputDevice(t.device_id), null != t.volume && i.Z.setInputVolume(t.volume)), n && (null != n.device_id && i.Z.setOutputDevice(n.device_id), null != n.volume && i.Z.setOutputVolume(n.volume)), r)) {
                let e = l.Z.getMode(),
                    t = l.Z.getModeOptions();
                null != r.type && (e = r.type), null != r.auto_threshold && (t.autoThreshold = r.auto_threshold), null != r.threshold && (t.threshold = r.threshold), null != r.shortcut && (t.shortcut = r.shortcut.map((e) => [e.type, e.code])), null != r.delay && (t.delay = r.delay), i.Z.setMode(e, t);
            }
            if ((null != a && i.Z.setAutomaticGainControl(a), null != o && i.Z.setEchoCancellation(o), null != s && i.Z.setNoiseSuppression(s), null != u && i.Z.setQoS(u), null != d && i.Z.setSilenceWarning(d), null != p)) {
                let e = l.Z.isSelfDeaf();
                ((e && !p) || (!e && p)) && i.Z.toggleSelfDeaf();
            }
            if (null != h) {
                let e = l.Z.isSelfMute();
                ((e && !h) || (!e && h)) && i.Z.toggleSelfMute();
            }
            return (0, c._X)();
        }
    }
};
