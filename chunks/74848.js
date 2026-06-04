"use strict";
n.d(t, { Py: () => R, d: () => S, d4: () => y, tR: () => C, x5: () => v });
var i = n(64700),
    r = n(735438),
    s = n(17928),
    a = n(82034),
    o = n(12054),
    l = n(31300),
    u = n(332461),
    c = n(831544),
    d = n(597601),
    _ = n(444927),
    h = n(475743),
    f = n(728555),
    p = n(403362),
    E = n(723702),
    m = n(835498),
    g = n(731854),
    A = n(375708);
function I(e) {
    return {
        [g.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(g.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => A.intl.string(A.t["/QIjDA"]),
        },
        [g.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(g.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => A.intl.string(A.t.xlUg0v),
        },
        [g.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(g.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => A.intl.string(A.t.WKWARY),
        },
    }[e];
}
function T() {
    return (0, E.isWindows)()
        ? A.intl.string(A.t.n4dQ2c)
        : (0, E.isMac)()
          ? A.intl.string(A.t.aYrsiB)
          : A.intl.string(A.t.Q3YKwS);
}
function S(e) {
    let t = RegExp(`^(?<prefix>${T()}) \\((?<subName>.+)\\)$`);
    return t.exec(e)?.groups;
}
function y(e, t) {
    switch (e.formFactor) {
        case f.yz.AIRPLAY:
            return a.K;
        case f.yz.BLUETOOTH:
            return o.y;
        case f.yz.INTEGRATED:
            return l.k;
        case f.yz.WEBCAM:
            return u.x;
    }
    switch (t) {
        case g.oh.AUDIO_INPUT:
            return c.c;
        case g.oh.AUDIO_OUTPUT:
            return d.L;
        case g.oh.VIDEO_INPUT:
            return u.x;
        default:
            return d.L;
    }
}
function N(e) {
    let { getRawDevices: t } = I(e),
        n = (0, s.bG)([f.Ay], () => t(f.Ay));
    return (0, i.useMemo)(() => {
        let t = { ...n },
            i = t[g.dx];
        return (
            null != i &&
                (t[g.dx] = {
                    ...i,
                    name: (function (e, t) {
                        let { getNoDevicesMessage: n } = I(e);
                        return t.disabled ? n() : t.name.replace(g.vt, T());
                    })(e, i),
                }),
            t
        );
    }, [e, n]);
}
function v(e) {
    let t = N(e),
        { getCurrentDeviceId: n } = I(e);
    return t[(0, s.bG)([f.Ay], () => n(f.Ay))];
}
function C(e) {
    let t = N(e),
        { getAllDeviceIdsSortedByFrecency: n } = I(e),
        s = (0, _.A)(() => n(m.A));
    return (0, i.useMemo)(() => {
        let n = Object.keys(t),
            i = e !== g.oh.VIDEO_INPUT ? [g.dx] : [],
            a = (0, r.intersection)(s, n),
            o = (0, r.difference)(n, s);
        return (0, r.union)(i, a, o)
            .map((e) => t[e])
            .filter(p.Vq);
    }, [t, e, s]);
}
function R(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = I(e),
        { resolvedId: i, selectedId: r } = (0, s.cf)([f.Ay], () => ({ resolvedId: t(f.Ay), selectedId: n(f.Ay) })),
        a = (0, h.A)(i) ?? i,
        o = i !== a,
        l = (0, h.A)(r) ?? r,
        u = r !== l;
    return o && !u;
}
