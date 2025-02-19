n.d(t, {
    C: () => S,
    Z: () => O
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
    f = n(67844),
    p = n(871499),
    _ = n(981631),
    h = n(962070);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let t = (0, f.X)(e),
        { enabled: n, cameraUnavailable: o, onChange: a, onCameraUnavailable: d, hasPermission: p, children: h, channelLimitReached: m = !1, join: g } = e,
        E = (0, u.bp)(),
        v = o ? () => d() : () => a(!e.enabled, E),
        { Component: b, play: y, events: O } = (0, c.o)(g || n ? 'disable' : 'enable');
    i.useEffect(() => () => y(), [n, y]);
    let S = E === _.IlC.POPOUT ? (n ? s.O : l.A) : b;
    return (0, r.jsx)(r.Fragment, {
        children: h({
            onClick: v,
            isActive: n,
            disabled: !n && (!p || m),
            iconComponent: S,
            iconColor: 'currentColor',
            label: t,
            unavailable: o,
            onMouseEnter: g ? void 0 : O.onMouseEnter,
            onMouseLeave: g ? void 0 : O.onMouseLeave
        })
    });
}
function S(e) {
    var { enabled: t, join: n, channel: i, onChange: o, onCameraUnavailable: s, cameraUnavailable: l, hasPermission: c, className: u, channelLimitReached: f, channelLimit: _, centerButton: m = !1, onPopoutClick: E } = e,
        y = b(e, ['enabled', 'join', 'channel', 'onChange', 'onCameraUnavailable', 'cameraUnavailable', 'hasPermission', 'className', 'channelLimitReached', 'channelLimit', 'centerButton', 'onPopoutClick']);
    let S = m ? p.d : p.Z,
        { mode: I } = (0, d.ZP)({ location: 'VideoButton' });
    return (0, r.jsx)(O, {
        enabled: t,
        join: n,
        channel: i,
        onChange: o,
        onCameraUnavailable: s,
        cameraUnavailable: l,
        hasPermission: c,
        channelLimitReached: f,
        channelLimit: _,
        children: (e) => {
            var { unavailable: t, onMouseEnter: i, onMouseLeave: o, isActive: s } = e,
                l = b(e, ['unavailable', 'onMouseEnter', 'onMouseLeave', 'isActive']);
            return (0, r.jsx)(
                S,
                v(g({}, l, y), {
                    color: I === d.BK.GroupedButtonsRedMic && s ? 'green' : y.color,
                    ignoreColorForCaret: I === d.BK.GroupedButtonsRedMic && !n,
                    isActive: s,
                    onMouseEnter: (e) => {
                        var t;
                        null === (t = y.onMouseEnter) || void 0 === t || t.call(y, e), null == i || i();
                    },
                    onMouseLeave: (e) => {
                        var t;
                        null === (t = y.onMouseLeave) || void 0 === t || t.call(y, e), null == o || o();
                    },
                    className: a()(u, { [h.fauxDisabled]: t }),
                    onPopoutClick: E,
                    fullRegionButton: n
                })
            );
        }
    });
}
