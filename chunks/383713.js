n.d(e, { Z: () => E });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(463395),
    s = n(131951),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let E = (0, u.qs)(a.n.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => c.intl.string(c.t.iWTwu6),
    useDisabled: function () {
        return (0, i.e7)([s.Z, r.Z], () => {
            let t = s.Z.getInputDeviceId();
            return r.Z.hasEchoCancellation(t);
        });
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getEchoCancellation());
    },
    setValue: function (t) {
        l.Z.setEchoCancellation(t, {
            page: o.ZY5.USER_SETTINGS,
            section: o.jXE.SETTINGS_VOICE_AND_VIDEO,
        });
    },
});
