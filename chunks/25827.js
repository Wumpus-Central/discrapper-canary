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
    s = r(120356),
    o = r.n(s),
    l = r(557753),
    u = r(95416),
    c = r(75735),
    d = r(40851),
    f = r(861254),
    _ = r(67844),
    h = r(871499),
    p = r(981631),
    m = r(541234);
function g(e) {
    let n = (0, _.X)(e),
        { enabled: r, cameraUnavailable: s, onChange: o, onCameraUnavailable: f, hasPermission: h, children: m, channelLimitReached: g = !1, join: E } = e,
        v = (0, d.bp)(),
        I = s ? () => f() : () => o(!e.enabled, v),
        { Component: T, play: b, events: y } = (0, c.o)(E || r ? 'disable' : 'enable');
    a.useEffect(() => () => b(), [r, b]);
    let S = v === p.IlC.POPOUT ? (r ? l.O : u.A) : T;
    return (0, i.jsx)(i.Fragment, {
        children: m({
            onClick: I,
            isActive: r,
            disabled: !r && (!h || g),
            iconComponent: S,
            iconColor: 'currentColor',
            label: n,
            unavailable: s,
            onMouseEnter: E ? void 0 : y.onMouseEnter,
            onMouseLeave: E ? void 0 : y.onMouseLeave
        })
    });
}
function E(e) {
    let { enabled: n, join: r, channel: a, onChange: s, onCameraUnavailable: l, cameraUnavailable: u, hasPermission: c, className: d, channelLimitReached: _, channelLimit: p, centerButton: E = !1, onPopoutClick: v, ...I } = e,
        T = E ? h.d : h.Z,
        { mode: b } = (0, f.ZP)({ location: 'VideoButton' });
    return (0, i.jsx)(g, {
        enabled: n,
        join: r,
        channel: a,
        onChange: s,
        onCameraUnavailable: l,
        cameraUnavailable: u,
        hasPermission: c,
        channelLimitReached: _,
        channelLimit: p,
        children: (e) => {
            let { unavailable: n, onMouseEnter: a, onMouseLeave: s, isActive: l, ...u } = e;
            return (0, i.jsx)(T, {
                ...u,
                ...I,
                color: b === f.BK.GroupedButtonsRedMic && l ? 'green' : I.color,
                ignoreColorForCaret: b === f.BK.GroupedButtonsRedMic && !r,
                isActive: l,
                onMouseEnter: (e) => {
                    var n;
                    null === (n = I.onMouseEnter) || void 0 === n || n.call(I, e), null == a || a();
                },
                onMouseLeave: (e) => {
                    var n;
                    null === (n = I.onMouseLeave) || void 0 === n || n.call(I, e), null == s || s();
                },
                className: o()(d, { [m.fauxDisabled]: n }),
                onPopoutClick: v,
                fullRegionButton: r
            });
        }
    });
}
