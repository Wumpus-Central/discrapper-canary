n.d(t, {
    Py: () => I,
    d: () => O,
    tR: () => S,
    x5: () => v,
}),
    n(747238),
    n(812715),
    n(591487),
    n(727858);
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(444927),
    o = n(475743),
    l = n(430452),
    c = n(403362),
    u = n(723702),
    d = n(835498),
    f = n(731854),
    p = n(985018);
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
        [f.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"]),
        },
        [f.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v),
        },
        [f.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(f.oh.VIDEO_INPUT),
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
    return t.disabled ? n() : t.name.replace(f.vt, b());
}
function O(e) {
    var t;
    return null == (t = new RegExp("^(?<prefix>".concat(b(), ") \\((?<subName>.+)\\)$")).exec(e)) ? void 0 : t.groups;
}
function A(e) {
    let { getRawDevices: t } = E(e),
        n = (0, a.bG)([l.A], () => t(l.A));
    return (0, r.useMemo)(() => {
        let t = h({}, n),
            r = t[f.dx];
        return null != r && (t[f.dx] = g(h({}, r), { name: y(e, r) })), t;
    }, [e, n]);
}
function v(e) {
    let t = A(e),
        { getCurrentDeviceId: n } = E(e);
    return t[(0, a.bG)([l.A], () => n(l.A))];
}
function S(e, t) {
    let {} = t,
        n = A(e),
        { getAllDeviceIdsSortedByFrecency: o } = E(e),
        l = (0, s.A)((0, a.yK)([d.A], () => o(d.A))),
        { id: u } = v(e);
    return (0, r.useMemo)(() => {
        let t = (e) => e.map((e) => n[e]).filter(c.Vq),
            r = Object.keys(n),
            a = e !== f.oh.VIDEO_INPUT ? [f.dx] : [],
            s = (0, i.intersection)(l, r),
            o = (0, i.difference)(r, l),
            d = (0, i.difference)(o, a, [u]);
        return (null == s ? void 0 : s.length) === 0 || d.length <= 1
            ? [(0, i.union)(a, [u], s, o), []].map(t)
            : [(0, i.union)(a, [u], s), d].map(t);
    }, [n, e, l, u]);
}
function I(e) {
    var t, n;
    let { getCurrentDeviceId: r, getSelectedDeviceId: i } = E(e),
        { resolvedId: s, selectedId: c } = (0, a.cf)([l.A], () => ({
            resolvedId: r(l.A),
            selectedId: i(l.A),
        })),
        u = null != (t = (0, o.A)(s)) ? t : s,
        d = s !== u,
        f = null != (n = (0, o.A)(c)) ? n : c,
        p = c !== f;
    return d && !p;
}
