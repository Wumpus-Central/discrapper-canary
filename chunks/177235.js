n.d(t, { A: () => A });
var i = n(179771),
    r = n(827343),
    a = n(430452),
    l = n(287809),
    s = n(636401),
    o = n(629471),
    d = n(546983),
    u = n(613057),
    c = n(652215);
let A = {
    [c.e$_.SET_USER_VOICE_SETTINGS]: {
        scope: { [u.sm.ANY]: [i.F.RPC, i.F.RPC_VOICE_WRITE] },
        validation: (e) =>
            (0, o.A)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    pan: (0, o.A)(e).keys({
                        left: e.number().min(0).max(1).required(),
                        right: e.number().min(0).max(1).required(),
                    }),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean(),
                }),
        handler(e) {
            let {
                    args: { user_id: t, pan: n, volume: i, mute: o },
                } = e,
                d = l.default.getCurrentUser();
            if (null == l.default.getUser(t) || d?.id === t)
                throw new s.A({ errorCode: c.Lw6.INVALID_USER }, `Invalid user id: ${t}`);
            if ((null != n && r.A.setLocalPan(t, n.left, n.right), null != i && r.A.setLocalVolume(t, i), null != o)) {
                let e = a.Ay.isLocalMute(t);
                ((e && !o) || (!e && o)) && r.A.toggleLocalMute(t);
            }
            return { user_id: t, pan: a.Ay.getLocalPan(t), volume: a.Ay.getLocalVolume(t), mute: a.Ay.isLocalMute(t) };
        },
    },
    [c.e$_.GET_VOICE_SETTINGS]: { scope: { [u.sm.ANY]: [i.F.RPC, i.F.RPC_VOICE_READ] }, handler: () => (0, d.l6)() },
    [c.e$_.SET_VOICE_SETTINGS]: {
        scope: { [u.sm.ANY]: [i.F.RPC, i.F.RPC_VOICE_WRITE] },
        validation: (e) =>
            (0, o.A)(e)
                .required()
                .keys({
                    input: (0, o.A)(e).keys({
                        device_id: e.string().valid(Object.keys(a.Ay.getInputDevices())),
                        volume: e.number().min(0).max(100),
                    }),
                    output: (0, o.A)(e).keys({
                        device_id: e.string().valid(Object.keys(a.Ay.getOutputDevices())),
                        volume: e.number().min(0).max(200),
                    }),
                    mode: (0, o.A)(e).keys({
                        type: e.string().valid(Object.keys(c.TBI)),
                        auto_threshold: e.boolean(),
                        threshold: e.number().min(-100).max(0),
                        shortcut: e
                            .array()
                            .items(
                                (0, o.A)(e).keys({
                                    type: e.number().min(0).max(3).required(),
                                    code: e.number().required(),
                                    name: e.string(),
                                }),
                            ),
                        delay: e.number().min(0).max(2e3),
                    }),
                    automatic_gain_control: e.boolean(),
                    echo_cancellation: e.boolean(),
                    noise_suppression: e.boolean(),
                    qos: e.boolean(),
                    silence_warning: e.boolean(),
                    deaf: e.boolean(),
                    mute: e.boolean(),
                }),
        handler(e) {
            let {
                args: {
                    input: t,
                    output: n,
                    mode: i,
                    automatic_gain_control: l,
                    echo_cancellation: s,
                    noise_suppression: o,
                    qos: u,
                    silence_warning: c,
                    deaf: A,
                    mute: h,
                },
            } = e;
            if (
                (t &&
                    (null != t.device_id && r.A.setInputDevice(t.device_id),
                    null != t.volume && r.A.setInputVolume(t.volume)),
                n &&
                    (null != n.device_id && r.A.setOutputDevice(n.device_id),
                    null != n.volume && r.A.setOutputVolume(n.volume)),
                i)
            ) {
                let e = a.Ay.getMode(),
                    t = a.Ay.getModeOptions();
                null != i.type && (e = i.type),
                    null != i.auto_threshold && (t.autoThreshold = i.auto_threshold),
                    null != i.threshold && (t.threshold = i.threshold),
                    null != i.shortcut && (t.shortcut = i.shortcut.map((e) => [e.type, e.code])),
                    null != i.delay && (t.delay = i.delay),
                    r.A.setMode(e, t);
            }
            if (
                (null != l && r.A.setAutomaticGainControl(l),
                null != s && r.A.setEchoCancellation(s),
                null != o && r.A.setNoiseSuppression(o),
                null != u && r.A.setQoS(u),
                null != c && r.A.setSilenceWarning(c),
                null != A)
            ) {
                let e = a.Ay.isSelfDeaf();
                ((e && !A) || (!e && A)) && r.A.toggleSelfDeaf();
            }
            if (null != h) {
                let e = a.Ay.isSelfMute();
                ((e && !h) || (!e && h)) && r.A.toggleSelfMute();
            }
            return (0, d.l6)();
        },
    },
};
