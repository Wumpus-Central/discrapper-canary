n.d(t, {
    Fh: () => A,
    Ls: () => S,
    p6: () => T,
    rX: () => v,
}),
    n(704826),
    n(35282),
    n(413496),
    n(433524);
var r = n(473749),
    i = n(392711),
    a = n(442837),
    o = n(211266),
    s = n(110924),
    l = n(131951),
    c = n(823379),
    u = n(358085),
    d = n(145016),
    f = n(568001),
    _ = n(65154),
    p = n(388032);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    return {
        [_.h7.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.h7.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"]),
        },
        [_.h7.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.h7.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v),
        },
        [_.h7.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(_.h7.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.WKWARY),
        },
    }[e];
}
function y() {
    let { showDeviceSelectionImprovements: e } = (0, f.M)({ location: "getDefaultDevicePrefix" });
    return e
        ? (0, u.isWindows)()
            ? p.intl.string(p.t.n4dQ2c)
            : (0, u.isMac)()
              ? p.intl.string(p.t.aYrsiB)
              : p.intl.string(p.t.Q3YKwS)
        : p.intl.string(p.t.bBvAEH);
}
function O(e, t) {
    let { getNoDevicesMessage: n } = b(e);
    return t.disabled ? n() : t.name.replace(_.fU, y());
}
function v(e) {
    var t;
    return null == (t = new RegExp("^(?<prefix>".concat(y(), ") \\((?<subName>.+)\\)$")).exec(e)) ? void 0 : t.groups;
}
function I(e) {
    let { getRawDevices: t } = b(e),
        n = (0, a.e7)([l.Z], () => t(l.Z));
    return (0, r.useMemo)(() => {
        let t = m({}, n),
            r = t[_.w5];
        return null != r && (t[_.w5] = E(m({}, r), { name: O(e, r) })), t;
    }, [e, n]);
}
function T(e) {
    let t = I(e),
        { getCurrentDeviceId: n } = b(e);
    return t[(0, a.e7)([l.Z], () => n(l.Z))];
}
function S(e, t) {
    let { location: n } = t,
        { showDeviceSelectionImprovements: s } = (0, f.V)({ location: n }),
        l = I(e),
        { getAllDeviceIdsSortedByFrecency: u } = b(e),
        p = (0, o.Z)((0, a.Wu)([d.Z], () => u(d.Z))),
        { id: h } = T(e);
    return (0, r.useMemo)(() => {
        let t = (e) => e.map((e) => l[e]).filter(c.lm),
            n = Object.keys(l),
            r = s && e !== _.h7.VIDEO_INPUT ? [_.w5] : [],
            a = (0, i.intersection)(p, n),
            o = (0, i.difference)(n, p),
            u = (0, i.difference)(o, r, [h]);
        return (null == a ? void 0 : a.length) === 0 || u.length <= 1
            ? [(0, i.union)(r, [h], a, o), []].map(t)
            : [(0, i.union)(r, [h], a), u].map(t);
    }, [l, e, p, h, s]);
}
function A(e) {
    var t, n;
    let { getCurrentDeviceId: r, getSelectedDeviceId: i } = b(e),
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
