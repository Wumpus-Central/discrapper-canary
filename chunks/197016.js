n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(685072),
    a = n(481060),
    o = n(287734),
    s = n(77880),
    l = n(871499),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    var { centerButton: t = !1, onClick: n, onMouseEnter: u, onMouseLeave: f } = e,
        h = p(e, ['centerButton', 'onClick', 'onMouseEnter', 'onMouseLeave']);
    let m = t ? l.d : l.Z,
        { changeLeaveCallAndActivityIcons: g } = (0, s.A)({ location: 'LeaveCallButton' }),
        E = () => {
            null == n || n(), o.default.disconnect();
        },
        b = () => (g ? c.intl.string(c.t['Hi1/aW']) : c.intl.string(c.t['6vrfgo'])),
        { Component: y, events: O } = (0, i.K)();
    return (0, r.jsx)(
        m,
        _(d({}, h), {
            isTrayButton: !1,
            onClick: E,
            iconComponent: g ? a.PBZ : y,
            onMouseEnter: (e) => {
                null == u || u(e), O.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == f || f(e), O.onMouseLeave();
            },
            label: b()
        })
    );
}
