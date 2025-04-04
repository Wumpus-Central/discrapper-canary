n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(513202),
    a = n(906732),
    s = n(522651),
    l = n(82965),
    c = n(871499),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function p(e, t) {
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    var { location: t, applicationId: n, centerButton: d = !1 } = e,
        _ = h(e, ['location', 'applicationId', 'centerButton']);
    let { parentAnalyticsLocation: m } = (0, a.ZP)(),
        g = (0, l.Z)({ location: 'LeaveActivityButton' }),
        E = d ? c.d : c.Z,
        b = () => {
            (0, s.v)(m, s.d.LEAVE_ACTIVITY),
                o.Z.leaveActivity({
                    location: t,
                    applicationId: n,
                    showFeedback: !0
                });
        };
    return (0, r.jsx)(
        E,
        p(f({}, _), {
            fullRegionButton: g,
            onClick: b,
            iconComponent: i.PBZ,
            label: u.NW.string(u.t['R/FK4O'])
        })
    );
}
