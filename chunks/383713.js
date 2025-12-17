n.d(e, { A: () => T });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(463395),
    r = n(131951),
    a = n(313789),
    o = n(981631),
    S = n(388032);
let T = (0, s.qs)(a.n.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => S.intl.string(S.t.iWTwu6),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getEchoCancellation());
    },
    setValue: function (t) {
        l.Z.setEchoCancellation(t, {
            page: o.ZY5.USER_SETTINGS,
            section: o.jXE.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    useDisabled: function () {
        return (0, i.e7)([r.Z, u.Z], () => {
            let t = r.Z.getInputDeviceId();
            return u.Z.hasEchoCancellation(t);
        });
    },
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.isInputProfileCustom());
    },
});
