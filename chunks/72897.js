n.d(t, {
    kj: () => g,
    rB: () => m,
    zX: () => h
}),
    n(387201),
    n(642613),
    n(704826),
    n(35282);
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(131951),
    s = n(65154),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    let n = Date.now(),
        r = (e) => {
            var r;
            let { id: i } = e;
            return (null != (r = t[i]) ? r : []).reduce((e, t) => e + Math.pow(0.5, (n - t) / 86400000 / 14), 0);
        };
    return e.map((e) => f(u({}, e), { frecency: r(e) })).toSorted((e, t) => t.frecency - e.frecency);
}
function p(e, t, n, i) {
    return (0, r.useMemo)(() => {
        let r = u({}, e),
            a = r[s.w5];
        return (null != a && (r[s.w5] = f(u({}, a), { name: a.disabled ? n : a.name.replace(s.fU, l.intl.string(l.t.bBvAEB)) })), null == i ? void 0 : i.sortDevicesByFrecency) ? _(Object.values(r), t) : Object.values(r);
    }, [e, t, null == i ? void 0 : i.sortDevicesByFrecency, n]);
}
function h(e) {
    return p(
        (0, a.e7)([o.Z], () => o.Z.getInputDevices()),
        (0, a.e7)([o.Z], o.Z.getInputDeviceUsageTimes, [], i.isEqual),
        l.intl.string(l.t['/QIjDA']),
        e
    );
}
function m(e) {
    return p(
        (0, a.e7)([o.Z], () => o.Z.getOutputDevices()),
        (0, a.e7)([o.Z], o.Z.getOutputDeviceUsageTimes, [], i.isEqual),
        l.intl.string(l.t.xlUg0t),
        e
    );
}
function g(e) {
    return p(
        (0, a.e7)([o.Z], () => o.Z.getVideoDevices()),
        {},
        l.intl.string(l.t.WKWARU),
        e
    );
}
