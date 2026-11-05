var c = i(582128),
    n = i(435558),
    s = i(855986),
    r = i(82034),
    a = i(12054),
    l = i(31300),
    d = i(332461),
    o = i(831544),
    u = i(597601),
    g = i(444927),
    v = i(475743),
    I = i(754712),
    h = i(403362),
    D = i(723702),
    f = i(835498),
    A = i(731854),
    p = i(792996);
function y(e) {
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
function w() {
    return (0, D.uF)()
        ? p.intl.string(p.t.n4dQ2c)
        : (0, D.cX)()
          ? p.intl.string(p.t.aYrsiB)
          : p.intl.string(p.t.Q3YKwS);
}
function m(e) {
    let { getRawDevices: t } = y(e),
        i = (0, s.bG)([I.Ay], () => t(I.Ay));
    return (0, c.useMemo)(() => {
        let t = { ...i },
            c = t[A.dx];
        return (
            null != c &&
                (t[A.dx] = {
                    ...c,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: i } = y(e);
                        return t.disabled ? i() : t.name.replace(A.vt, w());
                    })(e, c),
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
                { resolvedId: c, selectedId: n } = (0, s.cf)([I.Ay], () => ({
                    resolvedId: t(I.Ay),
                    selectedId: i(I.Ay),
                })),
                r = (0, v.Ay)(c) ?? c,
                a = c !== r,
                l = (0, v.Ay)(n) ?? n,
                d = n !== l;
            return a && !d;
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
                case I.yz.AIRPLAY:
                    return r.K;
                case I.yz.BLUETOOTH:
                    return a.y;
                case I.yz.INTEGRATED:
                    return l.k;
                case I.yz.WEBCAM:
                    return d.x;
            }
            switch (e.deviceType) {
                case A.oh.AUDIO_INPUT:
                    return o.MicrophoneIcon;
                case A.oh.AUDIO_OUTPUT:
                    return u.L;
                case A.oh.VIDEO_INPUT:
                    return d.x;
                default:
                    return u.L;
            }
        },
        tR: function (e) {
            let t = m(e),
                { getAllDeviceIdsSortedByFrecency: i } = y(e),
                s = (0, g.A)(() => i(f.A));
            return (0, c.useMemo)(() => {
                let i = Object.keys(t),
                    c = e !== A.oh.VIDEO_INPUT ? [A.dx] : [],
                    r = (0, n.intersection)(s, i),
                    a = (0, n.difference)(i, s);
                return (0, n.union)(c, r, a)
                    .map((e) => t[e])
                    .filter(h.Vq);
            }, [t, e, s]);
        },
        x5: function (e) {
            let t = m(e),
                { getCurrentDeviceId: i } = y(e);
            return t[(0, s.bG)([I.Ay], () => i(I.Ay))];
        },
    },
);
