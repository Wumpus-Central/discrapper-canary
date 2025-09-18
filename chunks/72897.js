n.d(t, {
    Fh: () => C,
    Ls: () => A,
    p6: () => S,
    rX: () => I,
}),
    n(704826),
    n(35282),
    n(413496),
    n(433524);
var r = n(647438),
    i = n(392711),
    a = n(442837),
    o = n(211266),
    s = n(110924),
    l = n(131951),
    c = n(358085),
    u = n(679613),
    d = n(996897),
    f = n(145016),
    _ = n(568001),
    p = n(65154),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    return {
        [p.h7.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.h7.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => h.intl.string(h.t["/QIjDA"]),
        },
        [p.h7.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.h7.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => h.intl.string(h.t.xlUg0t),
        },
        [p.h7.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.h7.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => h.intl.string(h.t.WKWARU),
        },
    }[e];
}
function O() {
    let { showDeviceSelectionImprovements: e } = (0, _.M)({ location: "getDefaultDevicePrefix" });
    return e
        ? (0, c.isWindows)()
            ? h.intl.string(h.t.n4dQ2d)
            : (0, c.isMac)()
              ? h.intl.string(h.t.aYrsiI)
              : h.intl.string(h.t.Q3YKwc)
        : h.intl.string(h.t.bBvAEB);
}
function v(e, t) {
    let { getNoDevicesMessage: n } = y(e);
    return t.disabled ? n() : t.name.replace(p.fU, O());
}
function I(e) {
    var t;
    return null == (t = new RegExp("^(?<prefix>".concat(O(), ") \\((?<subName>.+)\\)$")).exec(e)) ? void 0 : t.groups;
}
function T(e) {
    let { getRawDevices: t } = y(e),
        n = (0, a.e7)([l.Z], () => t(l.Z));
    return (0, r.useMemo)(() => {
        let t = g({}, n),
            r = t[p.w5];
        return null != r && (t[p.w5] = b(g({}, r), { name: v(e, r) })), t;
    }, [e, n]);
}
function S(e) {
    let t = T(e),
        { getCurrentDeviceId: n } = y(e);
    return t[(0, a.e7)([l.Z], () => n(l.Z))];
}
function A(e, t) {
    let { location: n } = t,
        { shouldSortDevicesByFrecency: s } = (0, u._)({ location: n }),
        { shouldFilterDevicesByFrecency: l } = (0, d.w)({ location: n }),
        { showDeviceSelectionImprovements: c } = (0, _.V)({ location: n }),
        h = T(e),
        { getAllDeviceIdsSortedByFrecency: m } = y(e),
        g = (0, o.Z)((0, a.Wu)([f.Z], () => m(f.Z))),
        { id: E } = S(e);
    return (0, r.useMemo)(() => {
        let t = (e) => e.map((e) => h[e]),
            n = Object.keys(h);
        if (!s) return [n, []].map(t);
        let r = c && e !== p.h7.VIDEO_INPUT ? [p.w5] : [],
            a = (0, i.intersection)(g, n),
            o = (0, i.difference)(n, g);
        return l && (null == a ? void 0 : a.length) !== 0
            ? [(0, i.union)(r, [E], a), (0, i.difference)(o, r, [E])].map(t)
            : [(0, i.union)(r, [E], a, o), []].map(t);
    }, [h, e, g, E, s, l, c]);
}
function C(e) {
    var t, n;
    let { getCurrentDeviceId: r, getSelectedDeviceId: i } = y(e),
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
