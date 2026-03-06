"use strict";
n.d(t, { Py: () => T, d: () => E, tR: () => I, x5: () => A });
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(444927),
    o = n(475743),
    l = n(430452),
    u = n(403362),
    c = n(723702),
    d = n(835498),
    _ = n(731854),
    f = n(985018);
function p(e) {
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
function h() {
    return (0, c.isWindows)()
        ? f.intl.string(f.t.n4dQ2c)
        : (0, c.isMac)()
          ? f.intl.string(f.t.aYrsiB)
          : f.intl.string(f.t.Q3YKwS);
}
function m(e, t) {
    let { getNoDevicesMessage: n } = p(e);
    return t.disabled ? n() : t.name.replace(_.vt, h());
}
function E(e) {
    let t = RegExp(`^(?<prefix>${h()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function g(e) {
    let { getRawDevices: t } = p(e),
        n = (0, s.bG)([l.Ay], () => t(l.Ay));
    return (0, r.useMemo)(() => {
        let t = { ...n },
            r = t[_.dx];
        return null != r && (t[_.dx] = { ...r, name: m(e, r) }), t;
    }, [e, n]);
}
function A(e) {
    let t = g(e),
        { getCurrentDeviceId: n } = p(e);
    return t[(0, s.bG)([l.Ay], () => n(l.Ay))];
}
function I(e) {
    let t = g(e),
        { getAllDeviceIdsSortedByFrecency: n } = p(e),
        s = (0, a.A)(() => n(d.A));
    return (0, r.useMemo)(() => {
        let n = Object.keys(t),
            r = e !== _.oh.VIDEO_INPUT ? [_.dx] : [],
            a = (0, i.intersection)(s, n),
            o = (0, i.difference)(n, s);
        return (0, i.union)(r, a, o)
            .map((e) => t[e])
            .filter(u.Vq);
    }, [t, e, s]);
}
function T(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = p(e),
        { resolvedId: r, selectedId: i } = (0, s.cf)([l.Ay], () => ({ resolvedId: t(l.Ay), selectedId: n(l.Ay) })),
        a = (0, o.A)(r) ?? r,
        u = r !== a,
        c = (0, o.A)(i) ?? i,
        d = i !== c;
    return u && !d;
}
