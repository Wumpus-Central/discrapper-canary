n.d(t, {
    C: () => T,
    Z: () => S
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(557753),
    l = n(95416),
    c = n(75735),
    u = n(40851),
    d = n(861254),
    f = n(221241),
    _ = n(82965),
    p = n(67844),
    h = n(871499),
    m = n(981631),
    g = n(726465);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let t = (0, p.X)(e),
        { enabled: n, cameraUnavailable: o, onChange: a, onCameraUnavailable: d, hasPermission: f, children: _, channelLimitReached: h = !1, join: g } = e,
        E = (0, u.bp)(),
        b = o ? () => d() : () => a(!e.enabled, E),
        { Component: y, play: v, events: O } = (0, c.o)(g || n ? 'disable' : 'enable');
    i.useEffect(() => () => v(), [n, v]);
    let I = g ? s.O : E === m.IlC.POPOUT ? (n ? s.O : l.A) : y;
    return (0, r.jsx)(r.Fragment, {
        children: _({
            onClick: b,
            isActive: n,
            disabled: !n && (!f || h),
            iconComponent: I,
            iconColor: 'currentColor',
            label: t,
            unavailable: o,
            onMouseEnter: g ? void 0 : O.onMouseEnter,
            onMouseLeave: g ? void 0 : O.onMouseLeave
        })
    });
}
function T(e) {
    var { enabled: t, join: n, channel: i, onChange: o, onCameraUnavailable: s, cameraUnavailable: l, hasPermission: c, className: u, channelLimitReached: p, channelLimit: m, centerButton: E = !1, onPopoutClick: y } = e,
        I = O(e, ['enabled', 'join', 'channel', 'onChange', 'onCameraUnavailable', 'cameraUnavailable', 'hasPermission', 'className', 'channelLimitReached', 'channelLimit', 'centerButton', 'onPopoutClick']);
    let T = E ? h.d : h.Z,
        { mode: N } = (0, d.ZP)({ location: 'VideoButton' }),
        { squareButtonsEnabled: A, coloredIconsEnabled: C } = (0, f.Z)({ location: 'VideoButton' }),
        R = (0, _.Z)({ location: 'VideoButton' }),
        P = () => (n ? 'join' : C && t ? 'green' : R || N === d.BK.GroupedButtonsRedMic ? 'primaryDark' : 'green'),
        w = (e) => (n ? 'join' : (A || N === d.BK.GroupedButtonsRedMic) && e ? 'green' : I.color);
    return (0, r.jsx)(S, {
        enabled: t,
        join: n,
        channel: i,
        onChange: o,
        onCameraUnavailable: s,
        cameraUnavailable: l,
        hasPermission: c,
        channelLimitReached: p,
        channelLimit: m,
        children: (e) => {
            var { unavailable: t, onMouseEnter: i, onMouseLeave: o, isActive: s } = e,
                l = O(e, ['unavailable', 'onMouseEnter', 'onMouseLeave', 'isActive']);
            return (0, r.jsx)(
                T,
                v(b({}, l, I), {
                    color: w(s),
                    caretColor: P(),
                    isActive: s,
                    onMouseEnter: (e) => {
                        var t;
                        null == (t = I.onMouseEnter) || t.call(I, e), null == i || i();
                    },
                    onMouseLeave: (e) => {
                        var t;
                        null == (t = I.onMouseLeave) || t.call(I, e), null == o || o();
                    },
                    className: a()(u, { [g.fauxDisabled]: t }),
                    onPopoutClick: y,
                    fullRegionButton: n
                })
            );
        }
    });
}
