n.d(t, {
    C: () => S,
    Z: () => I
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(75735),
    l = n(481060),
    c = n(40851),
    u = n(861254),
    d = n(221241),
    f = n(82965),
    _ = n(67844),
    p = n(871499),
    h = n(981631),
    m = n(726465);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    let t = (0, _.X)(e),
        { enabled: n, cameraUnavailable: o, onChange: a, onCameraUnavailable: u, hasPermission: d, children: f, channelLimitReached: p = !1, join: m } = e,
        g = (0, c.bp)(),
        E = o ? () => u() : () => a(!e.enabled, g),
        { Component: b, play: y, events: O } = (0, s.o)(m || n ? 'disable' : 'enable');
    i.useEffect(() => () => y(), [n, y]);
    let v = m ? l.Odl : g === h.IlC.POPOUT ? (n ? l.Odl : l.Amn) : b;
    return (0, r.jsx)(r.Fragment, {
        children: f({
            onClick: E,
            isActive: n,
            disabled: !n && (!d || p),
            iconComponent: v,
            iconColor: 'currentColor',
            label: t,
            unavailable: o,
            onMouseEnter: m ? void 0 : O.onMouseEnter,
            onMouseLeave: m ? void 0 : O.onMouseLeave
        })
    });
}
function S(e) {
    var { enabled: t, join: n, channel: i, onChange: o, onCameraUnavailable: s, cameraUnavailable: l, hasPermission: c, className: _, channelLimitReached: h, channelLimit: g, centerButton: b = !1, onPopoutClick: v } = e,
        S = O(e, ['enabled', 'join', 'channel', 'onChange', 'onCameraUnavailable', 'cameraUnavailable', 'hasPermission', 'className', 'channelLimitReached', 'channelLimit', 'centerButton', 'onPopoutClick']);
    let T = b ? p.d : p.Z,
        { mode: A } = (0, u.ZP)({ location: 'VideoButton' }),
        { squareButtonsEnabled: N, coloredIconsEnabled: C } = (0, d.Z)({ location: 'VideoButton' }),
        R = (0, f.Z)({ location: 'VideoButton' }),
        P = () => (n ? 'join' : C && t ? 'green' : R || A === u.BK.GroupedButtonsRedMic ? 'primaryDark' : 'green'),
        w = (e) => (n ? 'join' : (N || A === u.BK.GroupedButtonsRedMic) && e ? 'green' : S.color);
    return (0, r.jsx)(I, {
        enabled: t,
        join: n,
        channel: i,
        onChange: o,
        onCameraUnavailable: s,
        cameraUnavailable: l,
        hasPermission: c,
        channelLimitReached: h,
        channelLimit: g,
        children: (e) => {
            var { unavailable: t, onMouseEnter: i, onMouseLeave: o, isActive: s } = e,
                l = O(e, ['unavailable', 'onMouseEnter', 'onMouseLeave', 'isActive']);
            return (0, r.jsx)(
                T,
                y(E({}, l, S), {
                    color: w(s),
                    caretColor: P(),
                    isActive: s,
                    onMouseEnter: (e) => {
                        var t;
                        null == (t = S.onMouseEnter) || t.call(S, e), null == i || i();
                    },
                    onMouseLeave: (e) => {
                        var t;
                        null == (t = S.onMouseLeave) || t.call(S, e), null == o || o();
                    },
                    className: a()(_, { [m.fauxDisabled]: t }),
                    onPopoutClick: v,
                    fullRegionButton: n
                })
            );
        }
    });
}
