"use strict";
n.d(t, { Py: () => y, d: () => E, tR: () => T, x5: () => I });
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(444927),
    o = n(475743),
    l = n(430452),
    u = n(403362),
    c = n(723702),
    d = n(835498),
    _ = n(731854),
    f = n(985018);
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
function g(e, t) {
    let { getNoDevicesMessage: n } = h(e);
    return t.disabled ? n() : t.name.replace(_.vt, p());
}
function E(e) {
    let t = RegExp(`^(?<prefix>${p()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function A(e) {
    let { getRawDevices: t } = h(e),
        n = (0, a.bG)([l.Ay], () => t(l.Ay));
    return (0, r.useMemo)(() => {
        let t = { ...n },
            r = t[_.dx];
        return null != r && (t[_.dx] = { ...r, name: g(e, r) }), t;
    }, [e, n]);
}
function I(e) {
    let t = A(e),
        { getCurrentDeviceId: n } = h(e);
    return t[(0, a.bG)([l.Ay], () => n(l.Ay))];
}
function T(e, t) {
    let {} = t,
        n = A(e),
        { getAllDeviceIdsSortedByFrecency: o } = h(e),
        l = (0, s.A)((0, a.yK)([d.A], () => o(d.A))),
        { id: c } = I(e);
    return (0, r.useMemo)(() => {
        let t = (e) => e.map((e) => n[e]).filter(u.Vq),
            r = Object.keys(n),
            a = e !== _.oh.VIDEO_INPUT ? [_.dx] : [],
            s = (0, i.intersection)(l, r),
            o = (0, i.difference)(r, l),
            d = (0, i.difference)(o, a, [c]);
        return s?.length === 0 || d.length <= 1
            ? [(0, i.union)(a, [c], s, o), []].map(t)
            : [(0, i.union)(a, [c], s), d].map(t);
    }, [n, e, l, c]);
}
function y(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = h(e),
        { resolvedId: r, selectedId: i } = (0, a.cf)([l.Ay], () => ({ resolvedId: t(l.Ay), selectedId: n(l.Ay) })),
        s = (0, o.A)(r) ?? r,
        u = r !== s,
        c = (0, o.A)(i) ?? i,
        d = i !== c;
    return u && !d;
}
