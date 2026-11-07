var i = c(582128),
    n = c(435558),
    r = c(855986),
    s = c(82034),
    o = c(12054),
    a = c(31300),
    l = c(332461),
    d = c(831544),
    u = c(597601),
    I = c(444927),
    g = c(475743),
    v = c(754712),
    h = c(403362),
    f = c(723702),
    D = c(835498),
    A = c(731854),
    p = c(792996);
function w(e) {
    return {
        [A.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(A.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"]),
        },
        [A.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(A.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v),
        },
        [A.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(A.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.WKWARY),
        },
    }[e];
}
function m() {
    return (0, f.uF)()
        ? p.intl.string(p.t.n4dQ2c)
        : (0, f.cX)()
          ? p.intl.string(p.t.aYrsiB)
          : p.intl.string(p.t.Q3YKwS);
}
function y(e) {
    let { getRawDevices: t } = w(e),
        c = (0, r.bG)([v.Ay], () => t(v.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...c },
            i = t[A.dx];
        return (
            null != i &&
                (t[A.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: c } = w(e);
                        return t.disabled ? c() : t.name.replace(A.vt, m());
                    })(e, i),
                }),
            t
        );
    }, [e, c]);
}
c.d(
    t,
    {},
    {
        Py: function (e) {
            let { getCurrentDeviceId: t, getSelectedDeviceId: c } = w(e),
                { resolvedId: i, selectedId: n } = (0, r.cf)([v.Ay], () => ({
                    resolvedId: t(v.Ay),
                    selectedId: c(v.Ay),
                })),
                s = (0, g.Ay)(i) ?? i,
                o = i !== s,
                a = (0, g.Ay)(n) ?? n,
                l = n !== a;
            return o && !l;
        },
        d: function (e) {
            let t = RegExp(`^(?<prefix>${m()}) \\((?<subName>.+)\\)$`),
                c = t.exec(e.name)?.groups;
            return null == c
                ? { prefix: e.windowsDeviceInterfaceFriendlyName ?? e.name, subName: e.windowsDeviceDescription }
                : { prefix: c.prefix, subName: e.windowsDeviceInterfaceFriendlyName ?? c.subName };
        },
        d4: function (e) {
            switch (e.formFactor) {
                case v.fc.AIRPLAY:
                    return s.AirplayIcon;
                case v.fc.BLUETOOTH:
                    return o.BluetoothIcon;
                case v.fc.INTEGRATED:
                    return a.ScreenIcon;
                case v.fc.WEBCAM:
                    return l.CameraIcon;
            }
            switch (e.deviceType) {
                case A.oh.AUDIO_INPUT:
                    return d.MicrophoneIcon;
                case A.oh.AUDIO_OUTPUT:
                    return u.HeadphonesIcon;
                case A.oh.VIDEO_INPUT:
                    return l.CameraIcon;
                default:
                    return u.HeadphonesIcon;
            }
        },
        tR: function (e) {
            let t = y(e),
                { getAllDeviceIdsSortedByFrecency: c } = w(e),
                r = (0, I.A)(() => c(D.A));
            return (0, i.useMemo)(() => {
                let c = Object.keys(t),
                    i = e !== A.oh.VIDEO_INPUT ? [A.dx] : [],
                    s = (0, n.intersection)(r, c),
                    o = (0, n.difference)(c, r);
                return (0, n.union)(i, s, o)
                    .map((e) => t[e])
                    .filter(h.Vq);
            }, [t, e, r]);
        },
        x5: function (e) {
            let t = y(e),
                { getCurrentDeviceId: c } = w(e);
            return t[(0, r.bG)([v.Ay], () => c(v.Ay))];
        },
    },
);
