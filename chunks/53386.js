i.d(t, { h: () => _ });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(347481),
    a = i(430452),
    u = i(780964),
    o = i(652215),
    d = i(985018);
let _ = (0, s.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => d.intl.string(d.t.iWTwu6),
    useValue: function () {
        return (0, n.bG)([a.Ay], () => a.Ay.getEchoCancellation());
    },
    setValue: function (e) {
        l.A.setEchoCancellation(e, { page: o.liQ.USER_SETTINGS, section: o.JJy.SETTINGS_VOICE_AND_VIDEO });
    },
    useDisabled: function () {
        return (0, n.bG)([a.Ay, r.A], () => {
            let e = a.Ay.getInputDeviceId();
            return r.A.hasEchoCancellation(e);
        });
    },
    usePredicate: function () {
        return (0, n.bG)([a.Ay], () => a.Ay.isInputProfileCustom());
    },
});
