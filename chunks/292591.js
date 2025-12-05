n.d(e, { f: () => d });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(463395),
    u = n(131951),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let d = (0, s.qs)(a.n.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
    useTitle: () => c.intl.string(c.t.cUMdH0),
    useSubtitle: () => c.intl.string(c.t["6EjbvA"]),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getAutomaticGainControl());
    },
    setValue: function (t) {
        l.Z.setAutomaticGainControl(t, {
            page: o.ZY5.USER_SETTINGS,
            section: o.jXE.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    useDisabled: function () {
        return (0, i.e7)([u.Z, r.Z], () => {
            let t = u.Z.getInputDeviceId();
            return r.Z.hasAutomaticGainControl(t);
        });
    },
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.isAutomaticGainControlSupported() && u.Z.isInputProfileCustom());
    },
});
