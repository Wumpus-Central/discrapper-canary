n.d(t, {
    C: () => T,
    Z: () => I
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
    p = n(82965),
    _ = n(67844),
    h = n(871499),
    m = n(981631),
    g = n(962070);
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
function v(e) {
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
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
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
        { enabled: n, cameraUnavailable: o, onChange: a, onCameraUnavailable: d, hasPermission: f, children: p, channelLimitReached: h = !1, join: g } = e,
        E = (0, u.bp)(),
        v = o ? () => d() : () => a(!e.enabled, E),
        { Component: b, play: y, events: O } = (0, c.o)(g || n ? 'disable' : 'enable');
    i.useEffect(() => () => y(), [n, y]);
    let S = E === m.IlC.POPOUT ? (n ? s.O : l.A) : b;
    return (0, r.jsx)(r.Fragment, {
        children: p({
            onClick: v,
            isActive: n,
            disabled: !n && (!f || h),
            iconComponent: S,
            iconColor: 'currentColor',
            label: t,
            unavailable: o,
            onMouseEnter: g ? void 0 : O.onMouseEnter,
            onMouseLeave: g ? void 0 : O.onMouseLeave
        })
    });
}
function T(e) {
    var { enabled: t, join: n, channel: i, onChange: o, onCameraUnavailable: s, cameraUnavailable: l, hasPermission: c, className: u, channelLimitReached: _, channelLimit: m, centerButton: E = !1, onPopoutClick: b } = e,
        S = O(e, ['enabled', 'join', 'channel', 'onChange', 'onCameraUnavailable', 'cameraUnavailable', 'hasPermission', 'className', 'channelLimitReached', 'channelLimit', 'centerButton', 'onPopoutClick']);
    let T = E ? h.d : h.Z,
        { mode: N } = (0, d.ZP)({ location: 'VideoButton' }),
        { squareButtons: A } = (0, f.Z)({ location: 'VideoButton' }),
        C = ((0, p.Z)({ location: 'VideoButton' }) || N === d.BK.GroupedButtonsRedMic) && !n ? 'primaryDark' : 'green';
    n && (C = 'join');
    let R = (e) => (n ? 'join' : (A || N === d.BK.GroupedButtonsRedMic) && e ? 'green' : S.color);
    return (0, r.jsx)(I, {
        enabled: t,
        join: n,
        channel: i,
        onChange: o,
        onCameraUnavailable: s,
        cameraUnavailable: l,
        hasPermission: c,
        channelLimitReached: _,
        channelLimit: m,
        children: (e) => {
            var { unavailable: t, onMouseEnter: i, onMouseLeave: o, isActive: s } = e,
                l = O(e, ['unavailable', 'onMouseEnter', 'onMouseLeave', 'isActive']);
            return (0, r.jsx)(
                T,
                y(v({}, l, S), {
                    color: R(s),
                    caretColor: C,
                    isActive: s,
                    onMouseEnter: (e) => {
                        var t;
                        null === (t = S.onMouseEnter) || void 0 === t || t.call(S, e), null == i || i();
                    },
                    onMouseLeave: (e) => {
                        var t;
                        null === (t = S.onMouseLeave) || void 0 === t || t.call(S, e), null == o || o();
                    },
                    className: a()(u, { [g.fauxDisabled]: t }),
                    onPopoutClick: b,
                    fullRegionButton: n
                })
            );
        }
    });
}
