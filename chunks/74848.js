"use strict";
n.d(t, { Py: () => I, d: () => E, tR: () => A, x5: () => g });
var i = n(64700),
    r = n(735438),
    s = n(17928),
    a = n(444927),
    o = n(475743),
    l = n(761853),
    u = n(403362),
    c = n(723702),
    d = n(835498),
    _ = n(731854),
    h = n(375708);
function f(e) {
    return {
        [_.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => h.intl.string(h.t["/QIjDA"]),
        },
        [_.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => h.intl.string(h.t.xlUg0v),
        },
        [_.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => h.intl.string(h.t.WKWARY),
        },
    }[e];
}
function p() {
    return (0, c.isWindows)()
        ? h.intl.string(h.t.n4dQ2c)
        : (0, c.isMac)()
          ? h.intl.string(h.t.aYrsiB)
          : h.intl.string(h.t.Q3YKwS);
}
function E(e) {
    let t = RegExp(`^(?<prefix>${p()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function m(e) {
    let { getRawDevices: t } = f(e),
        n = (0, s.bG)([l.Ay], () => t(l.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...n },
            i = t[_.dx];
        return (
            null != i &&
                (t[_.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: n } = f(e);
                        return t.disabled ? n() : t.name.replace(_.vt, p());
                    })(e, i),
                }),
            t
        );
    }, [e, n]);
}
function g(e) {
    let t = m(e),
        { getCurrentDeviceId: n } = f(e);
    return t[(0, s.bG)([l.Ay], () => n(l.Ay))];
}
function A(e) {
    let t = m(e),
        { getAllDeviceIdsSortedByFrecency: n } = f(e),
        s = (0, a.A)(() => n(d.A));
    return (0, i.useMemo)(() => {
        let n = Object.keys(t),
            i = e !== _.oh.VIDEO_INPUT ? [_.dx] : [],
            a = (0, r.intersection)(s, n),
            o = (0, r.difference)(n, s);
        return (0, r.union)(i, a, o)
            .map((e) => t[e])
            .filter(u.Vq);
    }, [t, e, s]);
}
function I(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = f(e),
        { resolvedId: i, selectedId: r } = (0, s.cf)([l.Ay], () => ({ resolvedId: t(l.Ay), selectedId: n(l.Ay) })),
        a = (0, o.A)(i) ?? i,
        u = i !== a,
        c = (0, o.A)(r) ?? r,
        d = r !== c;
    return u && !d;
}
