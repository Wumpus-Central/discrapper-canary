i.d(t, { Py: () => O, d: () => m, d4: () => x, tR: () => U, x5: () => T });
var n = i(582128),
    s = i(435558),
    c = i(17928),
    r = i(82034),
    a = i(12054),
    l = i(31300),
    d = i(332461),
    o = i(831544),
    u = i(597601),
    g = i(444927),
    v = i(475743),
    I = i(25578),
    h = i(403362),
    D = i(723702),
    f = i(835498),
    A = i(731854),
    p = i(375708);
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
function y() {
    return (0, D.isWindows)()
        ? p.intl.string(p.t.n4dQ2c)
        : (0, D.isMac)()
          ? p.intl.string(p.t.aYrsiB)
          : p.intl.string(p.t.Q3YKwS);
}
function m(e) {
    let t = RegExp(`^(?<prefix>${y()}) \\((?<subName>.+)\\)$`),
        i = t.exec(e.name)?.groups;
    return null == i
        ? { prefix: e.windowsDeviceInterfaceFriendlyName ?? e.name, subName: e.windowsDeviceDescription }
        : { prefix: i.prefix, subName: e.windowsDeviceInterfaceFriendlyName ?? i.subName };
}
function x(e) {
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
}
function N(e) {
    let { getRawDevices: t } = w(e),
        i = (0, c.bG)([I.Ay], () => t(I.Ay));
    return (0, n.useMemo)(() => {
        let t = { ...i },
            n = t[A.dx];
        return (
            null != n &&
                (t[A.dx] = {
                    ...n,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: i } = w(e);
                        return t.disabled ? i() : t.name.replace(A.vt, y());
                    })(e, n),
                }),
            t
        );
    }, [e, i]);
}
function T(e) {
    let t = N(e),
        { getCurrentDeviceId: i } = w(e);
    return t[(0, c.bG)([I.Ay], () => i(I.Ay))];
}
function U(e) {
    let t = N(e),
        { getAllDeviceIdsSortedByFrecency: i } = w(e),
        c = (0, g.A)(() => i(f.A));
    return (0, n.useMemo)(() => {
        let i = Object.keys(t),
            n = e !== A.oh.VIDEO_INPUT ? [A.dx] : [],
            r = (0, s.intersection)(c, i),
            a = (0, s.difference)(i, c);
        return (0, s.union)(n, r, a)
            .map((e) => t[e])
            .filter(h.Vq);
    }, [t, e, c]);
}
function O(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: i } = w(e),
        { resolvedId: n, selectedId: s } = (0, c.cf)([I.Ay], () => ({ resolvedId: t(I.Ay), selectedId: i(I.Ay) })),
        r = (0, v.Ay)(n) ?? n,
        a = n !== r,
        l = (0, v.Ay)(s) ?? s,
        d = s !== l;
    return a && !d;
}
