n.d(t, {
    C: () => g,
    Z: () => m
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(557753),
    l = n(95416),
    u = n(75735),
    c = n(40851),
    d = n(861254),
    f = n(67844),
    _ = n(871499),
    p = n(981631),
    h = n(541234);
function m(e) {
    let t = (0, f.X)(e),
        { enabled: n, cameraUnavailable: a, onChange: s, onCameraUnavailable: d, hasPermission: _, children: h, channelLimitReached: m = !1, join: g } = e,
        E = (0, c.bp)(),
        v = a ? () => d() : () => s(!e.enabled, E),
        { Component: y, play: I, events: T } = (0, u.o)(g || n ? 'disable' : 'enable');
    r.useEffect(() => () => I(), [n, I]);
    let b = E === p.IlC.POPOUT ? (n ? o.O : l.A) : y;
    return (0, i.jsx)(i.Fragment, {
        children: h({
            onClick: v,
            isActive: n,
            disabled: !n && (!_ || m),
            iconComponent: b,
            iconColor: 'currentColor',
            label: t,
            unavailable: a,
            onMouseEnter: g ? void 0 : T.onMouseEnter,
            onMouseLeave: g ? void 0 : T.onMouseLeave
        })
    });
}
function g(e) {
    let { enabled: t, join: n, channel: r, onChange: a, onCameraUnavailable: o, cameraUnavailable: l, hasPermission: u, className: c, channelLimitReached: f, channelLimit: p, centerButton: g = !1, onPopoutClick: E, ...v } = e,
        y = g ? _.d : _.Z,
        { mode: I } = (0, d.ZP)({ location: 'VideoButton' });
    return (0, i.jsx)(m, {
        enabled: t,
        join: n,
        channel: r,
        onChange: a,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: f,
        channelLimit: p,
        children: (e) => {
            let { unavailable: t, onMouseEnter: r, onMouseLeave: a, isActive: o, ...l } = e;
            return (0, i.jsx)(y, {
                ...l,
                ...v,
                color: I === d.BK.GroupedButtonsRedMic && o ? 'green' : v.color,
                ignoreColorForCaret: I === d.BK.GroupedButtonsRedMic && !n,
                isActive: o,
                onMouseEnter: (e) => {
                    var t;
                    null === (t = v.onMouseEnter) || void 0 === t || t.call(v, e), null == r || r();
                },
                onMouseLeave: (e) => {
                    var t;
                    null === (t = v.onMouseLeave) || void 0 === t || t.call(v, e), null == a || a();
                },
                className: s()(c, { [h.fauxDisabled]: t }),
                onPopoutClick: E,
                fullRegionButton: n
            });
        }
    });
}
