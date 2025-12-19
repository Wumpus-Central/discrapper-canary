n.d(e, { f: () => S });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(463395),
    r = n(131951),
    a = n(313789),
    o = n(981631),
    T = n(388032);
let S = (0, s.qs)(a.n.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
    useTitle: () => T.intl.string(T.t.cUMdH0),
    useSubtitle: () => T.intl.string(T.t["6EjbvA"]),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getAutomaticGainControl());
    },
    setValue: function (t) {
        l.Z.setAutomaticGainControl(t, {
            page: o.ZY5.USER_SETTINGS,
            section: o.jXE.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    useDisabled: function () {
        return (0, i.e7)([r.Z, u.Z], () => {
            let t = r.Z.getInputDeviceId();
            return u.Z.hasAutomaticGainControl(t);
        });
    },
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.isAutomaticGainControlSupported() && r.Z.isInputProfileCustom());
    },
});
