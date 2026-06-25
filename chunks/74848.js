s.d(t, { Py: () => O, d: () => x, d4: () => T, tR: () => m, x5: () => U });
var i = s(64700),
    c = s(735438),
    r = s(17928),
    n = s(82034),
    l = s(12054),
    d = s(31300),
    a = s(332461),
    o = s(831544),
    g = s(597601),
    u = s(444927),
    v = s(475743),
    I = s(472444),
    h = s(403362),
    A = s(723702),
    D = s(835498),
    p = s(731854),
    f = s(375708);
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
function x(e) {
    let t = RegExp(`^(?<prefix>${w()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function T(e, t) {
    switch (e.formFactor) {
        case I.yz.AIRPLAY:
            return n.K;
        case I.yz.BLUETOOTH:
            return l.y;
        case I.yz.INTEGRATED:
            return d.k;
        case I.yz.WEBCAM:
            return a.x;
    }
    switch (t) {
        case p.oh.AUDIO_INPUT:
            return o.c;
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
        s = (0, r.bG)([I.Ay], () => t(I.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...s },
            i = t[p.dx];
        return (
            null != i &&
                (t[p.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: s } = y(e);
                        return t.disabled ? s() : t.name.replace(p.vt, w());
                    })(e, i),
                }),
            t
        );
    }, [e, s]);
}
function U(e) {
    let t = N(e),
        { getCurrentDeviceId: s } = y(e);
    return t[(0, r.bG)([I.Ay], () => s(I.Ay))];
}
function m(e) {
    let t = N(e),
        { getAllDeviceIdsSortedByFrecency: s } = y(e),
        r = (0, u.A)(() => s(D.A));
    return (0, i.useMemo)(() => {
        let s = Object.keys(t),
            i = e !== p.oh.VIDEO_INPUT ? [p.dx] : [],
            n = (0, c.intersection)(r, s),
            l = (0, c.difference)(s, r);
        return (0, c.union)(i, n, l)
            .map((e) => t[e])
            .filter(h.Vq);
    }, [t, e, r]);
}
function O(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: s } = y(e),
        { resolvedId: i, selectedId: c } = (0, r.cf)([I.Ay], () => ({ resolvedId: t(I.Ay), selectedId: s(I.Ay) })),
        n = (0, v.A)(i) ?? i,
        l = i !== n,
        d = (0, v.A)(c) ?? c,
        a = c !== d;
    return l && !a;
}
return o&&!u
}
