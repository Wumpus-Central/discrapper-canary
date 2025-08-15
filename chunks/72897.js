n.d(t, {
    Fh: () => v,
    Ls: () => O,
    p6: () => y,
}),
    n(704826),
    n(35282);
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(211266),
    s = n(110924),
    l = n(131951),
    c = n(679613),
    u = n(996897),
    d = n(145016),
    f = n(65154),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    return {
        [f.h7.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getInputDeviceIdsSortedByFrecency(),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => _.intl.string(_.t["/QIjDA"]),
        },
        [f.h7.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getOutputDeviceIdsSortedByFrecency(),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => _.intl.string(_.t.xlUg0t),
        },
        [f.h7.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getVideoDeviceIdsSortedByFrecency(),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => _.intl.string(_.t.WKWARU),
        },
    }[e];
}
function b(e) {
    let { getRawDevices: t, getNoDevicesMessage: n } = E(e),
        i = (0, a.e7)([l.Z], () => t(l.Z)),
        o = n();
    return (0, r.useMemo)(() => {
        let e = h({}, i),
            t = e[f.w5];
        return (
            null != t &&
                (e[f.w5] = g(h({}, t), { name: t.disabled ? o : t.name.replace(f.fU, _.intl.string(_.t.bBvAEB)) })),
            e
        );
    }, [i, o]);
}
function y(e) {
    let t = b(e),
        { getCurrentDeviceId: n } = E(e);
    return t[(0, a.e7)([l.Z], () => n(l.Z))];
}
function O(e, t) {
    let { location: n } = t,
        { shouldSortDevicesByFrecency: s } = (0, c._)({ location: n }),
        { shouldFilterDevicesByFrecency: l } = (0, u.w)({ location: n }),
        f = b(e),
        { getAllDeviceIdsSortedByFrecency: _ } = E(e),
        p = (0, o.Z)((0, a.Wu)([d.Z], () => _(d.Z))),
        { id: h } = y(e);
    return (0, r.useMemo)(() => {
        let e = (e) => e.map((e) => f[e]),
            t = Object.keys(f);
        if (!s) return [t, []].map(e);
        let n = (0, i.intersection)(p, t),
            r = (0, i.difference)(t, p);
        return l && (null == n ? void 0 : n.length) !== 0
            ? r.some((e) => e === h)
                ? [(0, i.union)(n, [h]), (0, i.difference)(r, [h])].map(e)
                : [n, r].map(e)
            : [(0, i.union)(n, r), []].map(e);
    }, [f, p, h, s, l]);
}
function v(e) {
    var t, n;
    let { getCurrentDeviceId: r, getSelectedDeviceId: i } = E(e),
        { resolvedId: o, selectedId: c } = (0, a.cj)([l.Z], () => ({
            resolvedId: r(l.Z),
            selectedId: i(l.Z),
        })),
        u = null != (t = (0, s.Z)(o)) ? t : o,
        d = o !== u,
        f = null != (n = (0, s.Z)(c)) ? n : c,
        _ = c !== f;
    return d && !_;
}
