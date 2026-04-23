n.d(t, { Py: () => P, d: () => d, tR: () => O, x5: () => R });
var i = n(64700),
    l = n(735438),
    r = n(17928),
    s = n(444927),
    a = n(475743),
    E = n(969341),
    o = n(403362),
    _ = n(723702),
    c = n(835498),
    A = n(731854),
    I = n(985018);
function u(e) {
    return {
        [A.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(A.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => I.intl.string(I.t["/QIjDA"]),
        },
        [A.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(A.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => I.intl.string(I.t.xlUg0v),
        },
        [A.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(A.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => I.intl.string(I.t.WKWARY),
        },
    }[e];
}
function T() {
    return (0, _.isWindows)()
        ? I.intl.string(I.t.n4dQ2c)
        : (0, _.isMac)()
          ? I.intl.string(I.t.aYrsiB)
          : I.intl.string(I.t.Q3YKwS);
}
function d(e) {
    let t = RegExp(`^(?<prefix>${T()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function N(e) {
    let { getRawDevices: t } = u(e),
        n = (0, r.bG)([E.Ay], () => t(E.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...n },
            i = t[A.dx];
        return (
            null != i &&
                (t[A.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: n } = u(e);
                        return t.disabled ? n() : t.name.replace(A.vt, T());
                    })(e, i),
                }),
            t
        );
    }, [e, n]);
}
function R(e) {
    let t = N(e),
        { getCurrentDeviceId: n } = u(e);
    return t[(0, r.bG)([E.Ay], () => n(E.Ay))];
}
function O(e) {
    let t = N(e),
        { getAllDeviceIdsSortedByFrecency: n } = u(e),
        r = (0, s.A)(() => n(c.A));
    return (0, i.useMemo)(() => {
        let n = Object.keys(t),
            i = e !== A.oh.VIDEO_INPUT ? [A.dx] : [],
            s = (0, l.intersection)(r, n),
            a = (0, l.difference)(n, r);
        return (0, l.union)(i, s, a)
            .map((e) => t[e])
            .filter(o.Vq);
    }, [t, e, r]);
}
function P(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = u(e),
        { resolvedId: i, selectedId: l } = (0, r.cf)([E.Ay], () => ({ resolvedId: t(E.Ay), selectedId: n(E.Ay) })),
        s = (0, a.A)(i) ?? i,
        o = i !== s,
        _ = (0, a.A)(l) ?? l,
        c = l !== _;
    return o && !c;
}
