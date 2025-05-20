n.d(t, {
    C: () => O,
    Z: () => y
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(75735),
    l = n(481060),
    c = n(40851),
    u = n(67844),
    d = n(871499),
    f = n(981631),
    _ = n(726465);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    let t = (0, u.X)(e),
        { enabled: n, cameraUnavailable: a, onChange: o, onCameraUnavailable: d, hasPermission: _, children: p, channelLimitReached: h = !1, join: m } = e,
        g = (0, c.bp)(),
        E = a ? () => d() : () => o(!e.enabled, g),
        { Component: b, play: y, events: O } = (0, s.o)(m || n ? 'disable' : 'enable');
    i.useEffect(() => () => y(), [n, y]);
    let v = m ? l.Odl : g === f.IlC.POPOUT ? (n ? l.Odl : l.Amn) : b;
    return (0, r.jsx)(r.Fragment, {
        children: p({
            onClick: E,
            isActive: n,
            disabled: !n && (!_ || h),
            iconComponent: v,
            iconColor: 'currentColor',
            label: t,
            unavailable: a,
            onMouseEnter: m ? void 0 : O.onMouseEnter,
            onMouseLeave: m ? void 0 : O.onMouseLeave
        })
    });
}
function O(e) {
    var { enabled: t, join: n, channel: i, onChange: a, onCameraUnavailable: s, cameraUnavailable: l, hasPermission: c, className: u, channelLimitReached: f, channelLimit: p, centerButton: m = !1, onPopoutClick: b } = e,
        O = E(e, ['enabled', 'join', 'channel', 'onChange', 'onCameraUnavailable', 'cameraUnavailable', 'hasPermission', 'className', 'channelLimitReached', 'channelLimit', 'centerButton', 'onPopoutClick']);
    let v = m ? d.d : d.Z,
        I = () => (n ? 'join' : t ? 'green' : 'primaryDark'),
        S = (e) => (n ? 'join' : e ? 'green' : O.color);
    return (0, r.jsx)(y, {
        enabled: t,
        join: n,
        channel: i,
        onChange: a,
        onCameraUnavailable: s,
        cameraUnavailable: l,
        hasPermission: c,
        channelLimitReached: f,
        channelLimit: p,
        children: (e) => {
            var { unavailable: t, onMouseEnter: i, onMouseLeave: a, isActive: s } = e,
                l = E(e, ['unavailable', 'onMouseEnter', 'onMouseLeave', 'isActive']);
            return (0, r.jsx)(
                v,
                g(h({}, l, O), {
                    color: S(s),
                    caretColor: I(),
                    isActive: s,
                    onMouseEnter: (e) => {
                        var t;
                        null == (t = O.onMouseEnter) || t.call(O, e), null == i || i();
                    },
                    onMouseLeave: (e) => {
                        var t;
                        null == (t = O.onMouseLeave) || t.call(O, e), null == a || a();
                    },
                    className: o()(u, { [_.fauxDisabled]: t }),
                    onPopoutClick: b,
                    isTrayButton: !n
                })
            );
        }
    });
}
