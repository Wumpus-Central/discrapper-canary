i.d(e, { C: () => A });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(347481),
    u = i(430452),
    a = i(780964),
    o = i(652215),
    T = i(985018);
let A = (0, s.zD)(a.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
    useTitle: () => T.intl.string(T.t.cUMdH0),
    useSubtitle: () => T.intl.string(T.t["6EjbvA"]),
    useValue: function () {
        return (0, n.bG)([u.A], () => u.A.getAutomaticGainControl());
    },
    setValue: function (t) {
        l.A.setAutomaticGainControl(t, {
            page: o.liQ.USER_SETTINGS,
            section: o.JJy.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    useDisabled: function () {
        return (0, n.bG)([u.A, r.A], () => {
            let t = u.A.getInputDeviceId();
            return r.A.hasAutomaticGainControl(t);
        });
    },
    usePredicate: function () {
        return (0, n.bG)([u.A], () => u.A.isAutomaticGainControlSupported() && u.A.isInputProfileCustom());
    },
});
