n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(287734),
    s = n(906732),
    l = n(522651),
    c = n(585483),
    u = n(871499),
    d = n(981631),
    _ = n(388032);
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
function h(e, t) {
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
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    var { channel: t, centerButton: n = !1, onCallJoined: f } = e,
        h = g(e, ['channel', 'centerButton', 'onCallJoined']);
    let { parentAnalyticsLocation: E } = (0, s.ZP)(),
        b = n ? u.d : u.Z,
        y = t.isManaged() || !t.isPrivate() ? _.intl.string(_.t.S0W8Z2) : _.intl.string(_.t['0D/6R0']),
        O = i.useCallback(() => {
            null == f || f(), (0, l.v)(E, l.d.JOIN_CALL), o.default.selectVoiceChannel(t.id);
        }, [t.id, f, E]);
    return (
        i.useEffect(
            () => (
                c.S.subscribe(d.CkL.CALL_ACCEPT, O),
                () => {
                    c.S.unsubscribe(d.CkL.CALL_ACCEPT, O);
                }
            ),
            [O]
        ),
        (0, r.jsx)(
            b,
            m(p({}, h), {
                iconComponent: a.Csw,
                label: y,
                onClick: O,
                isTrayButton: !1
            })
        )
    );
}
