"use strict";
n.d(t, { Py: () => p, d: () => I, tR: () => g, x5: () => N });
var i = n(64700),
    r = n(735438),
    l = n(311907),
    s = n(444927),
    a = n(475743),
    o = n(430452),
    c = n(403362),
    u = n(723702),
    d = n(835498),
    _ = n(731854),
    E = n(985018);
function A(e) {
    return {
        [_.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => E.intl.string(E.t["/QIjDA"]),
        },
        [_.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => E.intl.string(E.t.xlUg0v),
        },
        [_.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => E.intl.string(E.t.WKWARY),
        },
    }[e];
}
function m() {
    return (0, u.isWindows)()
        ? E.intl.string(E.t.n4dQ2c)
        : (0, u.isMac)()
          ? E.intl.string(E.t.aYrsiB)
          : E.intl.string(E.t.Q3YKwS);
}
function I(e) {
    let t = RegExp(`^(?<prefix>${m()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function T(e) {
    let { getRawDevices: t } = A(e),
        n = (0, l.bG)([o.Ay], () => t(o.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...n },
            i = t[_.dx];
        return (
            null != i &&
                (t[_.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: n } = A(e);
                        return t.disabled ? n() : t.name.replace(_.vt, m());
                    })(e, i),
                }),
            t
        );
    }, [e, n]);
}
function N(e) {
    let t = T(e),
        { getCurrentDeviceId: n } = A(e);
    return t[(0, l.bG)([o.Ay], () => n(o.Ay))];
}
function g(e) {
    let t = T(e),
        { getAllDeviceIdsSortedByFrecency: n } = A(e),
        l = (0, s.A)(() => n(d.A));
    return (0, i.useMemo)(() => {
        let n = Object.keys(t),
            i = e !== _.oh.VIDEO_INPUT ? [_.dx] : [],
            s = (0, r.intersection)(l, n),
            a = (0, r.difference)(n, l);
        return (0, r.union)(i, s, a)
            .map((e) => t[e])
            .filter(c.Vq);
    }, [t, e, l]);
}
function p(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = A(e),
        { resolvedId: i, selectedId: r } = (0, l.cf)([o.Ay], () => ({ resolvedId: t(o.Ay), selectedId: n(o.Ay) })),
        s = (0, a.A)(i) ?? i,
        c = i !== s,
        u = (0, a.A)(r) ?? r,
        d = r !== u;
    return c && !d;
}
