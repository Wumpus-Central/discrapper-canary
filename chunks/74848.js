var n = i(582128),
    c = i(435558),
    r = i(855986),
    s = i(82034),
    o = i(12054),
    a = i(31300),
    l = i(332461),
    d = i(831544),
    u = i(597601),
    I = i(444927),
    g = i(475743),
    v = i(754712),
    h = i(403362),
    D = i(723702),
    A = i(835498),
    f = i(731854),
    p = i(792996);
function y(e) {
    return {
        [f.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"]),
        },
        [f.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v),
        },
        [f.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.WKWARY),
        },
    }[e];
}
function w() {
    return (0, D.uF)()
        ? p.intl.string(p.t.n4dQ2c)
        : (0, D.cX)()
          ? p.intl.string(p.t.aYrsiB)
          : p.intl.string(p.t.Q3YKwS);
}
function m(e) {
    let { getRawDevices: t } = y(e),
        i = (0, r.bG)([v.Ay], () => t(v.Ay));
    return (0, n.useMemo)(() => {
        let t = { ...i },
            n = t[f.dx];
        return (
            null != n &&
                (t[f.dx] = {
                    ...n,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: i } = y(e);
                        return t.disabled ? i() : t.name.replace(f.vt, w());
                    })(e, n),
                }),
            t
        );
    }, [e, i]);
}
i.d(
    t,
    {},
    {
        Py: function (e) {
            let { getCurrentDeviceId: t, getSelectedDeviceId: i } = y(e),
                { resolvedId: n, selectedId: c } = (0, r.cf)([v.Ay], () => ({
                    resolvedId: t(v.Ay),
                    selectedId: i(v.Ay),
                })),
                s = (0, g.Ay)(n) ?? n,
                o = n !== s,
                a = (0, g.Ay)(c) ?? c,
                l = c !== a;
            return o && !l;
        },
        d: function (e) {
            let t = RegExp(`^(?<prefix>${w()}) \\((?<subName>.+)\\)$`),
                i = t.exec(e.name)?.groups;
            return null == i
                ? { prefix: e.windowsDeviceInterfaceFriendlyName ?? e.name, subName: e.windowsDeviceDescription }
                : { prefix: i.prefix, subName: e.windowsDeviceInterfaceFriendlyName ?? i.subName };
        },
        d4: function (e) {
            switch (e.formFactor) {
                case v.yz.AIRPLAY:
                    return s.AirplayIcon;
                case v.yz.BLUETOOTH:
                    return o.BluetoothIcon;
                case v.yz.INTEGRATED:
                    return a.ScreenIcon;
                case v.yz.WEBCAM:
                    return l.CameraIcon;
            }
            switch (e.deviceType) {
                case f.oh.AUDIO_INPUT:
                    return d.MicrophoneIcon;
                case f.oh.AUDIO_OUTPUT:
                    return u.HeadphonesIcon;
                case f.oh.VIDEO_INPUT:
                    return l.CameraIcon;
                default:
                    return u.HeadphonesIcon;
            }
        },
        tR: function (e) {
            let t = m(e),
                { getAllDeviceIdsSortedByFrecency: i } = y(e),
                r = (0, I.A)(() => i(A.A));
            return (0, n.useMemo)(() => {
                let i = Object.keys(t),
                    n = e !== f.oh.VIDEO_INPUT ? [f.dx] : [],
                    s = (0, c.intersection)(r, i),
                    o = (0, c.difference)(i, r);
                return (0, c.union)(n, s, o)
                    .map((e) => t[e])
                    .filter(h.Vq);
            }, [t, e, r]);
        },
        x5: function (e) {
            let t = m(e),
                { getCurrentDeviceId: i } = y(e);
            return t[(0, r.bG)([v.Ay], () => i(v.Ay))];
        },
    },
);
