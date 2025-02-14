n.d(t, { Z: () => h }), n(47120);
var i = n(243814),
    l = n(846027),
    r = n(131951),
    a = n(594174),
    s = n(996106),
    o = n(452426),
    d = n(852926),
    c = n(186901),
    u = n(981631);
let h = {
    [u.Etm.SET_USER_VOICE_SETTINGS]: {
        scope: {
            [c.Gp.ANY]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
        },
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    pan: (0, o.Z)(e).keys({
                        left: e.number().min(0).max(1).required(),
                        right: e.number().min(0).max(1).required()
                    }),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean()
                }),
        handler(e) {
            let {
                    args: { user_id: t, pan: n, volume: i, mute: o }
                } = e,
                d = a.default.getCurrentUser();
            if (null == a.default.getUser(t) || (null == d ? void 0 : d.id) === t) throw new s.Z({ errorCode: u.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
            if ((null != n && l.Z.setLocalPan(t, n.left, n.right), null != i && l.Z.setLocalVolume(t, i), null != o)) {
                let e = r.Z.isLocalMute(t);
                ((e && !o) || (!e && o)) && l.Z.toggleLocalMute(t);
            }
            return {
                user_id: t,
                pan: r.Z.getLocalPan(t),
                volume: r.Z.getLocalVolume(t),
                mute: r.Z.isLocalMute(t)
            };
        }
    },
    [u.Etm.GET_VOICE_SETTINGS]: {
        scope: {
            [c.Gp.ANY]: [i.x.RPC, i.x.RPC_VOICE_READ]
        },
        handler: () => (0, d._X)()
    },
    [u.Etm.SET_VOICE_SETTINGS]: {
        scope: {
            [c.Gp.ANY]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
        },
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    input: (0, o.Z)(e).keys({
                        device_id: e.string().valid(Object.keys(r.Z.getInputDevices())),
                        volume: e.number().min(0).max(100)
                    }),
                    output: (0, o.Z)(e).keys({
                        device_id: e.string().valid(Object.keys(r.Z.getOutputDevices())),
                        volume: e.number().min(0).max(200)
                    }),
                    mode: (0, o.Z)(e).keys({
                        type: e.string().valid(Object.keys(u.pM4)),
                        auto_threshold: e.boolean(),
                        threshold: e.number().min(-100).max(0),
                        shortcut: e.array().items(
                            (0, o.Z)(e).keys({
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
                args: { input: t, output: n, mode: i, automatic_gain_control: a, echo_cancellation: s, noise_suppression: o, qos: c, silence_warning: u, deaf: h, mute: m }
            } = e;
            if ((t && (null != t.device_id && l.Z.setInputDevice(t.device_id), null != t.volume && l.Z.setInputVolume(t.volume)), n && (null != n.device_id && l.Z.setOutputDevice(n.device_id), null != n.volume && l.Z.setOutputVolume(n.volume)), i)) {
                let e = r.Z.getMode(),
                    t = r.Z.getModeOptions();
                null != i.type && (e = i.type), null != i.auto_threshold && (t.autoThreshold = i.auto_threshold), null != i.threshold && (t.threshold = i.threshold), null != i.shortcut && (t.shortcut = i.shortcut.map((e) => [e.type, e.code])), null != i.delay && (t.delay = i.delay), l.Z.setMode(e, t);
            }
            if ((null != a && l.Z.setAutomaticGainControl(a), null != s && l.Z.setEchoCancellation(s), null != o && l.Z.setNoiseSuppression(o), null != c && l.Z.setQoS(c), null != u && l.Z.setSilenceWarning(u), null != h)) {
                let e = r.Z.isSelfDeaf();
                ((e && !h) || (!e && h)) && l.Z.toggleSelfDeaf();
            }
            if (null != m) {
                let e = r.Z.isSelfMute();
                ((e && !m) || (!e && m)) && l.Z.toggleSelfMute();
            }
            return (0, d._X)();
        }
    }
};
