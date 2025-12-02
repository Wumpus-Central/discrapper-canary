n.d(e, { Z: () => d });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    s = n(463395),
    u = n(131951),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let d = (0, l.qs)(a.n.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => c.intl.string(c.t.iWTwu6),
    useDisabled: function () {
        return (0, i.e7)([u.Z, s.Z], () => {
            let t = u.Z.getInputDeviceId();
            return s.Z.hasEchoCancellation(t);
        });
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getEchoCancellation());
    },
    setValue: function (t) {
        r.Z.setEchoCancellation(t, {
            page: o.ZY5.USER_SETTINGS,
            section: o.jXE.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.isInputProfileCustom());
    },
});
