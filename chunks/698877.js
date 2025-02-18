n.d(t, { O: () => u });
var i = n(200651),
    l = n(192379),
    a = n(864094),
    r = n(682901),
    s = n(861254),
    o = n(82965),
    c = n(871499),
    d = n(388032);
function u(e) {
    let t,
        n,
        { hasPermission: u, streamActive: h, isSelfStream: p, centerButton: m, onMouseEnter: f, onMouseLeave: g, premiumGlow: _, renderNUXHighlight: C, buttonRef: x, ...v } = e,
        { mode: E } = (0, s.ZP)({ location: 'StreamButton' }),
        I = (0, o.Z)({ location: 'StreamButton' }),
        { enabled: b } = (0, r.Z)({ location: 'StreamButton' }),
        Z = m ? c.d : c.Z;
    n = h ? (p ? d.intl.string(d.t.S5anIS) : d.intl.string(d.t.q3O3Jy)) : u ? d.intl.string(d.t.fjBNo6) : d.intl.string(d.t.uQn9Bw);
    let { Component: N, events: T, play: S } = (0, a.P)(h ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => S(), [h, S]),
        (0, i.jsx)(Z, {
            buttonRef: x,
            label: n,
            disabled: !u,
            iconComponent: N,
            isActive: !I && !b && h,
            color: (C ? (t = 'premiumGradient') : E === s.BK.GroupedButtonsRedMic && h && (t = 'green'), t),
            ignoreColorForCaret: E === s.BK.GroupedButtonsRedMic && h,
            onMouseEnter: (e) => {
                null == f || f(e), T.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == g || g(e), T.onMouseLeave();
            },
            premiumGlow: _,
            ...v
        })
    );
}
