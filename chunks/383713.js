n.d(e, { Z: () => d });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    u = n(463395),
    s = n(131951),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let d = (0, l.qs)(a.n.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => c.intl.string(c.t.iWTwu6),
    useDisabled: function () {
        return (0, i.e7)([s.Z, u.Z], () => {
            let t = s.Z.getInputDeviceId();
            return u.Z.hasEchoCancellation(t);
        });
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getEchoCancellation());
    },
    setValue: function (t) {
        r.Z.setEchoCancellation(t, {
            page: o.ZY5.USER_SETTINGS,
            section: o.jXE.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    usePredicate: function () {
        return (0, i.e7)([s.Z], () => s.Z.isInputProfileCustom());
    },
});
