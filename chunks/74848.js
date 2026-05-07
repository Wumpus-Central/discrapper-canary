"use strict";
n.d(t, { Py: () => I, d: () => E, tR: () => A, x5: () => g });
var i = n(64700),
    r = n(735438),
    s = n(17928),
    a = n(444927),
    o = n(475743),
    l = n(235058),
    u = n(403362),
    c = n(723702),
    d = n(835498),
    _ = n(731854),
    f = n(375708);
function h(e) {
    return {
        [_.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => f.intl.string(f.t["/QIjDA"]),
        },
        [_.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => f.intl.string(f.t.xlUg0v),
        },
        [_.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => f.intl.string(f.t.WKWARY),
        },
    }[e];
}
function p() {
    return (0, c.isWindows)()
        ? f.intl.string(f.t.n4dQ2c)
        : (0, c.isMac)()
          ? f.intl.string(f.t.aYrsiB)
          : f.intl.string(f.t.Q3YKwS);
}
function E(e) {
    let t = RegExp(`^(?<prefix>${p()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function m(e) {
    let { getRawDevices: t } = h(e),
        n = (0, s.bG)([l.Ay], () => t(l.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...n },
            i = t[_.dx];
        return (
            null != i &&
                (t[_.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: n } = h(e);
                        return t.disabled ? n() : t.name.replace(_.vt, p());
                    })(e, i),
                }),
            t
        );
    }, [e, n]);
}
function g(e) {
    let t = m(e),
        { getCurrentDeviceId: n } = h(e);
    return t[(0, s.bG)([l.Ay], () => n(l.Ay))];
}
function A(e) {
    let t = m(e),
        { getAllDeviceIdsSortedByFrecency: n } = h(e),
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
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = h(e),
        { resolvedId: i, selectedId: r } = (0, s.cf)([l.Ay], () => ({ resolvedId: t(l.Ay), selectedId: n(l.Ay) })),
        a = (0, o.A)(i) ?? i,
        u = i !== a,
        c = (0, o.A)(r) ?? r,
        d = r !== c;
    return u && !d;
}
