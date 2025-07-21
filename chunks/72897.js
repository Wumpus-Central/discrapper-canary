(n.d(t, {
    L: () => y,
    p: () => b
}),
    n(704826),
    n(35282));
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(211266),
    s = n(131951),
    l = n(679613),
    c = n(996897),
    u = n(145016),
    d = n(65154),
    f = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    return {
        [d.h7.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getInputDeviceIdsSortedByFrecency(),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getNoDevicesMessage: () => f.intl.string(f.t['/QIjDA'])
        },
        [d.h7.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getOutputDeviceIdsSortedByFrecency(),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getNoDevicesMessage: () => f.intl.string(f.t.xlUg0t)
        },
        [d.h7.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getVideoDeviceIdsSortedByFrecency(),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getNoDevicesMessage: () => f.intl.string(f.t.WKWARU)
        }
    }[e];
}
function E(e) {
    let { getRawDevices: t, getNoDevicesMessage: n } = g(e),
        i = (0, a.e7)([s.Z], () => t(s.Z)),
        o = n();
    return (0, r.useMemo)(() => {
        let e = p({}, i),
            t = e[d.w5];
        return (null != t && (e[d.w5] = m(p({}, t), { name: t.disabled ? o : t.name.replace(d.fU, f.intl.string(f.t.bBvAEB)) })), e);
    }, [i, o]);
}
function b(e) {
    let t = E(e),
        { getCurrentDeviceId: n } = g(e);
    return t[(0, a.e7)([s.Z], () => n(s.Z))];
}
function y(e, t) {
    let { location: n } = t,
        { shouldSortDevicesByFrecency: s } = (0, l._)({ location: n }),
        { shouldFilterDevicesByFrecency: d } = (0, c.w)({ location: n }),
        f = E(e),
        { getAllDeviceIdsSortedByFrecency: _ } = g(e),
        p = (0, o.Z)((0, a.Wu)([u.Z], () => _(u.Z))),
        { id: h } = b(e);
    return (0, r.useMemo)(() => {
        let e = (e) => e.map((e) => f[e]),
            t = Object.keys(f);
        if (!s) return [t, []].map(e);
        let n = (0, i.intersection)(p, t),
            r = (0, i.difference)(t, p);
        return d && (null == n ? void 0 : n.length) !== 0 ? (r.some((e) => e === h) ? [(0, i.union)(n, [h]), (0, i.difference)(r, [h])].map(e) : [n, r].map(e)) : [(0, i.union)(n, r), []].map(e);
    }, [f, p, h, s, d]);
}
