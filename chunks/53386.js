i.d(e, { h: () => A });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(347481),
    u = i(430452),
    a = i(780964),
    o = i(652215),
    T = i(985018);
let A = (0, s.zD)(a.X.VOICE_ECHO_CANCELLATION_SETTING, {
    useTitle: () => T.intl.string(T.t.iWTwu6),
    useValue: function () {
        return (0, n.bG)([u.A], () => u.A.getEchoCancellation());
    },
    setValue: function (t) {
        l.A.setEchoCancellation(t, {
            page: o.liQ.USER_SETTINGS,
            section: o.JJy.SETTINGS_VOICE_AND_VIDEO,
        });
    },
    useDisabled: function () {
        return (0, n.bG)([u.A, r.A], () => {
            let t = u.A.getInputDeviceId();
            return r.A.hasEchoCancellation(t);
        });
    },
    usePredicate: function () {
        return (0, n.bG)([u.A], () => u.A.isInputProfileCustom());
    },
});
