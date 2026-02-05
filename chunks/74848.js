"use strict";
n.d(t, { Py: () => T, d: () => g, tR: () => I, x5: () => A });
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
function g(e) {
    let t = RegExp(`^(?<prefix>${h()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function E(e) {
    let { getRawDevices: t } = p(e),
        n = (0, a.bG)([l.A], () => t(l.A));
    return (0, r.useMemo)(() => {
        let t = { ...n },
            r = t[_.dx];
        return null != r && (t[_.dx] = { ...r, name: m(e, r) }), t;
    }, [e, n]);
}
function A(e) {
    let t = E(e),
        { getCurrentDeviceId: n } = p(e);
    return t[(0, a.bG)([l.A], () => n(l.A))];
}
function I(e, t) {
    let {} = t,
        n = E(e),
        { getAllDeviceIdsSortedByFrecency: o } = p(e),
        l = (0, s.A)((0, a.yK)([d.A], () => o(d.A))),
        { id: c } = A(e);
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
function T(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = p(e),
        { resolvedId: r, selectedId: i } = (0, a.cf)([l.A], () => ({ resolvedId: t(l.A), selectedId: n(l.A) })),
        s = (0, o.A)(r) ?? r,
        u = r !== s,
        c = (0, o.A)(i) ?? i,
        d = i !== c;
    return u && !d;
}
