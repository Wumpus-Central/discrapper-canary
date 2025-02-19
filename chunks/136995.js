n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(287734),
    s = n(82965),
    l = n(585483),
    c = n(871499),
    u = n(981631),
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
function p(e) {
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var { channel: t, centerButton: n = !1 } = e,
        f = m(e, ['channel', 'centerButton']);
    let _ = n ? c.d : c.Z,
        g = t.isManaged() || !t.isPrivate() ? d.NW.string(d.t.S0W8Z2) : d.NW.string(d.t['0D/6R0']),
        E = (0, s.Z)({ location: 'JoinCallButton' }),
        v = i.useCallback(() => a.default.selectVoiceChannel(t.id), [t.id]);
    return (
        i.useEffect(
            () => (
                l.S.subscribe(u.CkL.CALL_ACCEPT, v),
                () => {
                    l.S.unsubscribe(u.CkL.CALL_ACCEPT, v);
                }
            ),
            [v]
        ),
        (0, r.jsx)(
            _,
            h(p({}, f), {
                iconComponent: o.Csw,
                label: g,
                onClick: v,
                fullRegionButton: E
            })
        )
    );
}
