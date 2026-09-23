i.d(t, { Py: () => O, d: () => x, d4: () => N, tR: () => U, x5: () => T });
var n = i(582128),
    s = i(435558),
    c = i(17928),
    r = i(82034),
    l = i(12054),
    d = i(31300),
    a = i(332461),
    o = i(831544),
    u = i(597601),
    g = i(444927),
    v = i(475743),
    I = i(25578),
    h = i(403362),
    D = i(723702),
    A = i(835498),
    f = i(731854),
    p = i(375708);
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
    return (0, D.isWindows)()
        ? p.intl.string(p.t.n4dQ2c)
        : (0, D.isMac)()
          ? p.intl.string(p.t.aYrsiB)
          : p.intl.string(p.t.Q3YKwS);
}
function x(e) {
    let t = RegExp(`^(?<prefix>${w()}) \\((?<subName>.+)\\)$`),
        i = t.exec(e.name)?.groups;
    return null == i
        ? { prefix: e.windowsDeviceInterfaceFriendlyName ?? e.name, subName: e.windowsDeviceDescription }
        : { prefix: i.prefix, subName: e.windowsDeviceInterfaceFriendlyName ?? i.subName };
}
function N(e) {
    switch (e.formFactor) {
        case I.yz.AIRPLAY:
            return r.K;
        case I.yz.BLUETOOTH:
            return l.y;
        case I.yz.INTEGRATED:
            return d.k;
        case I.yz.WEBCAM:
            return a.x;
    }
    switch (e.deviceType) {
        case f.oh.AUDIO_INPUT:
            return o.MicrophoneIcon;
        case f.oh.AUDIO_OUTPUT:
            return u.L;
        case f.oh.VIDEO_INPUT:
            return a.x;
        default:
            return u.L;
    }
}
function m(e) {
    let { getRawDevices: t } = y(e),
        i = (0, c.bG)([I.Ay], () => t(I.Ay));
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
function T(e) {
    let t = m(e),
        { getCurrentDeviceId: i } = y(e);
    return t[(0, c.bG)([I.Ay], () => i(I.Ay))];
}
function U(e) {
    let t = m(e),
        { getAllDeviceIdsSortedByFrecency: i } = y(e),
        c = (0, g.A)(() => i(A.A));
    return (0, n.useMemo)(() => {
        let i = Object.keys(t),
            n = e !== f.oh.VIDEO_INPUT ? [f.dx] : [],
            r = (0, s.intersection)(c, i),
            l = (0, s.difference)(i, c);
        return (0, s.union)(n, r, l)
            .map((e) => t[e])
            .filter(h.Vq);
    }, [t, e, c]);
}
function O(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: i } = y(e),
        { resolvedId: n, selectedId: s } = (0, c.cf)([I.Ay], () => ({ resolvedId: t(I.Ay), selectedId: i(I.Ay) })),
        r = (0, v.Ay)(n) ?? n,
        l = n !== r,
        d = (0, v.Ay)(s) ?? s,
        a = s !== d;
    return l && !a;
}
