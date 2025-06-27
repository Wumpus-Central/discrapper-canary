n.d(t, {
    kj: () => y,
    rB: () => b,
    zX: () => E
}),
    n(704826),
    n(35282);
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(211266),
    s = n(131951),
    l = n(679613),
    c = n(145016),
    u = n(65154),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    return (0, r.useMemo)(() => {
        let n = _({}, e),
            r = n[u.w5];
        return null != r && (n[u.w5] = h(_({}, r), { name: r.disabled ? t : r.name.replace(u.fU, d.intl.string(d.t.bBvAEB)) })), n;
    }, [e, t]);
}
function g(e, t, n) {
    let { shouldSortDevicesByFrecency: a } = (0, l._)({ location: n.location });
    return (0, r.useMemo)(() => {
        if (!a) return Object.values(e);
        {
            let n = Object.keys(e);
            return (0, i.union)((0, i.intersection)(t, n), n).map((t) => e[t]);
        }
    }, [e, t, a]);
}
function E(e) {
    return g(m((0, a.e7)([s.Z], s.Z.getInputDevices), d.intl.string(d.t['/QIjDA'])), (0, o.Z)((0, a.Wu)([c.Z], c.Z.getInputDeviceIdsSortedByFrecency)), e);
}
function b(e) {
    return g(m((0, a.e7)([s.Z], s.Z.getOutputDevices), d.intl.string(d.t.xlUg0t)), (0, o.Z)((0, a.Wu)([c.Z], c.Z.getOutputDeviceIdsSortedByFrecency)), e);
}
function y(e) {
    return g(m((0, a.e7)([s.Z], s.Z.getVideoDevices), d.intl.string(d.t.WKWARU)), (0, o.Z)((0, a.Wu)([c.Z], c.Z.getVideoDeviceIdsSortedByFrecency)), e);
}
