i.d(t, { Py: () => O, d: () => T, d4: () => x, tR: () => m, x5: () => U });
var s = i(582128),
    c = i(435558),
    n = i(17928),
    r = i(82034),
    l = i(12054),
    d = i(31300),
    a = i(332461),
    o = i(831544),
    g = i(597601),
    u = i(444927),
    v = i(475743),
    I = i(25578),
    h = i(403362),
    A = i(723702),
    D = i(835498),
    p = i(731854),
    f = i(375708);
function y(e) {
    return {
        [p.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => f.intl.string(f.t["/QIjDA"]),
        },
        [p.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => f.intl.string(f.t.xlUg0v),
        },
        [p.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => f.intl.string(f.t.WKWARY),
        },
    }[e];
}
function w() {
    return (0, A.isWindows)()
        ? f.intl.string(f.t.n4dQ2c)
        : (0, A.isMac)()
          ? f.intl.string(f.t.aYrsiB)
          : f.intl.string(f.t.Q3YKwS);
}
function T(e) {
    let t = RegExp(`^(?<prefix>${w()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function x(e) {
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
        case p.oh.AUDIO_INPUT:
            return o.MicrophoneIcon;
        case p.oh.AUDIO_OUTPUT:
            return g.L;
        case p.oh.VIDEO_INPUT:
            return a.x;
        default:
            return g.L;
    }
}
function N(e) {
    let { getRawDevices: t } = y(e),
        i = (0, n.bG)([I.Ay], () => t(I.Ay));
    return (0, s.useMemo)(() => {
        let t = { ...i },
            s = t[p.dx];
        return (
            null != s &&
                (t[p.dx] = {
                    ...s,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: i } = y(e);
                        return t.disabled ? i() : t.name.replace(p.vt, w());
                    })(e, s),
                }),
            t
        );
    }, [e, i]);
}
function U(e) {
    let t = N(e),
        { getCurrentDeviceId: i } = y(e);
    return t[(0, n.bG)([I.Ay], () => i(I.Ay))];
}
function m(e) {
    let t = N(e),
        { getAllDeviceIdsSortedByFrecency: i } = y(e),
        n = (0, u.A)(() => i(D.A));
    return (0, s.useMemo)(() => {
        let i = Object.keys(t),
            s = e !== p.oh.VIDEO_INPUT ? [p.dx] : [],
            r = (0, c.intersection)(n, i),
            l = (0, c.difference)(i, n);
        return (0, c.union)(s, r, l)
            .map((e) => t[e])
            .filter(h.Vq);
    }, [t, e, n]);
}
function O(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: i } = y(e),
        { resolvedId: s, selectedId: c } = (0, n.cf)([I.Ay], () => ({ resolvedId: t(I.Ay), selectedId: i(I.Ay) })),
        r = (0, v.Ay)(s) ?? s,
        l = s !== r,
        d = (0, v.Ay)(c) ?? c,
        a = c !== d;
    return l && !a;
}
