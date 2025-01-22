r.d(n, {
    C: function () {
        return E;
    },
    Z: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(557753),
    u = r(95416),
    c = r(75735),
    d = r(40851),
    f = r(861254),
    p = r(67844),
    h = r(871499),
    _ = r(981631),
    m = r(541234);
function g(e) {
    let n = (0, p.X)(e),
        { enabled: r, cameraUnavailable: o, onChange: s, onCameraUnavailable: f, hasPermission: h, children: m, channelLimitReached: g = !1, join: E } = e,
        v = (0, d.bp)(),
        y = o ? () => f() : () => s(!e.enabled, v),
        { Component: b, play: I, events: T } = (0, c.o)(E || r ? 'disable' : 'enable');
    a.useEffect(() => () => I(), [r, I]);
    let S = v === _.IlC.POPOUT ? (r ? l.O : u.A) : b;
    return (0, i.jsx)(i.Fragment, {
        children: m({
            onClick: y,
            isActive: r,
            disabled: !r && (!h || g),
            iconComponent: S,
            iconColor: 'currentColor',
            label: n,
            unavailable: o,
            onMouseEnter: E ? void 0 : T.onMouseEnter,
            onMouseLeave: E ? void 0 : T.onMouseLeave
        })
    });
}
function E(e) {
    let { enabled: n, join: r, channel: a, onChange: o, onCameraUnavailable: l, cameraUnavailable: u, hasPermission: c, className: d, channelLimitReached: p, channelLimit: _, centerButton: E = !1, onPopoutClick: v, ...y } = e,
        b = E ? h.d : h.Z,
        { mode: I } = (0, f.ZP)({ location: 'VideoButton' });
    return (0, i.jsx)(g, {
        enabled: n,
        join: r,
        channel: a,
        onChange: o,
        onCameraUnavailable: l,
        cameraUnavailable: u,
        hasPermission: c,
        channelLimitReached: p,
        channelLimit: _,
        children: (e) => {
            let { unavailable: n, onMouseEnter: a, onMouseLeave: o, isActive: l, ...u } = e;
            return (0, i.jsx)(b, {
                ...u,
                ...y,
                color: I === f.BK.GroupedButtonsRedMic && l ? 'green' : y.color,
                ignoreColorForCaret: I === f.BK.GroupedButtonsRedMic && !r,
                isActive: l,
                onMouseEnter: (e) => {
                    var n;
                    null === (n = y.onMouseEnter) || void 0 === n || n.call(y, e), null == a || a();
                },
                onMouseLeave: (e) => {
                    var n;
                    null === (n = y.onMouseLeave) || void 0 === n || n.call(y, e), null == o || o();
                },
                className: s()(d, { [m.fauxDisabled]: n }),
                onPopoutClick: v,
                fullRegionButton: r
            });
        }
    });
}
