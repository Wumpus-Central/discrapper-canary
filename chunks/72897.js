n.d(t, {
    Fh: () => T,
    Ls: () => I,
    p6: () => S,
    rX: () => O,
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
    f = n(65154),
    p = n(388032);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.h7.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"]),
        },
        [f.h7.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.h7.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v),
        },
        [f.h7.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.h7.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.WKWARY),
        },
    }[e];
}
function b() {
    return (0, u.isWindows)()
        ? p.intl.string(p.t.n4dQ2c)
        : (0, u.isMac)()
          ? p.intl.string(p.t.aYrsiB)
          : p.intl.string(p.t.Q3YKwS);
}
function y(e, t) {
    let { getNoDevicesMessage: n } = E(e);
    return t.disabled ? n() : t.name.replace(f.fU, b());
}
function O(e) {
    var t;
    return null == (t = new RegExp("^(?<prefix>".concat(b(), ") \\((?<subName>.+)\\)$")).exec(e)) ? void 0 : t.groups;
}
function v(e) {
    let { getRawDevices: t } = E(e),
        n = (0, a.e7)([l.Z], () => t(l.Z));
    return (0, r.useMemo)(() => {
        let t = h({}, n),
            r = t[f.w5];
        return null != r && (t[f.w5] = g(h({}, r), { name: y(e, r) })), t;
    }, [e, n]);
}
function S(e) {
    let t = v(e),
        { getCurrentDeviceId: n } = E(e);
    return t[(0, a.e7)([l.Z], () => n(l.Z))];
}
function I(e, t) {
    let {} = t,
        n = v(e),
        { getAllDeviceIdsSortedByFrecency: s } = E(e),
        l = (0, o.Z)((0, a.Wu)([d.Z], () => s(d.Z))),
        { id: u } = S(e);
    return (0, r.useMemo)(() => {
        let t = (e) => e.map((e) => n[e]).filter(c.lm),
            r = Object.keys(n),
            a = e !== f.h7.VIDEO_INPUT ? [f.w5] : [],
            o = (0, i.intersection)(l, r),
            s = (0, i.difference)(r, l),
            d = (0, i.difference)(s, a, [u]);
        return (null == o ? void 0 : o.length) === 0 || d.length <= 1
            ? [(0, i.union)(a, [u], o, s), []].map(t)
            : [(0, i.union)(a, [u], o), d].map(t);
    }, [n, e, l, u]);
}
function T(e) {
    var t, n;
    let { getCurrentDeviceId: r, getSelectedDeviceId: i } = E(e),
        { resolvedId: o, selectedId: c } = (0, a.cj)([l.Z], () => ({
            resolvedId: r(l.Z),
            selectedId: i(l.Z),
        })),
        u = null != (t = (0, s.Z)(o)) ? t : o,
        d = o !== u,
        f = null != (n = (0, s.Z)(c)) ? n : c,
        p = c !== f;
    return d && !p;
}
