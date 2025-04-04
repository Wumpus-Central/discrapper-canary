n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(287734),
    s = n(906732),
    l = n(522651),
    c = n(82965),
    u = n(585483),
    d = n(871499),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
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
function h(e) {
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    var { channel: t, centerButton: n = !1, onCallJoined: p } = e,
        m = E(e, ['channel', 'centerButton', 'onCallJoined']);
    let { parentAnalyticsLocation: b } = (0, s.ZP)(),
        y = n ? d.d : d.Z,
        v = t.isManaged() || !t.isPrivate() ? _.NW.string(_.t.S0W8Z2) : _.NW.string(_.t['0D/6R0']),
        O = (0, c.Z)({ location: 'JoinCallButton' }),
        I = i.useCallback(() => {
            null == p || p(), (0, l.v)(b, l.d.JOIN_CALL), a.default.selectVoiceChannel(t.id);
        }, [t.id, p, b]);
    return (
        i.useEffect(
            () => (
                u.S.subscribe(f.CkL.CALL_ACCEPT, I),
                () => {
                    u.S.unsubscribe(f.CkL.CALL_ACCEPT, I);
                }
            ),
            [I]
        ),
        (0, r.jsx)(
            y,
            g(h({}, m), {
                iconComponent: o.Csw,
                label: v,
                onClick: I,
                fullRegionButton: O
            })
        )
    );
}
