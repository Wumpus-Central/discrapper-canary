n.d(t, { O: () => d });
var i = n(200651),
    l = n(192379),
    a = n(864094),
    r = n(682901),
    s = n(861254),
    o = n(871499),
    c = n(388032);
function d(e) {
    let t,
        n,
        { hasPermission: d, streamActive: u, isSelfStream: h, centerButton: p, onMouseEnter: m, onMouseLeave: f, premiumGlow: g, renderNUXHighlight: _, buttonRef: C, ...x } = e,
        { mode: v, groupedButtons: E } = (0, s.ZP)({ location: 'StreamButton' }),
        { enabled: I } = (0, r.Z)({ location: 'StreamButton' }),
        b = p ? o.d : o.Z;
    n = u ? (h ? c.intl.string(c.t.S5anIS) : c.intl.string(c.t.q3O3Jy)) : d ? c.intl.string(c.t.fjBNo6) : c.intl.string(c.t.uQn9Bw);
    let { Component: Z, events: N, play: T } = (0, a.P)(u ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => T(), [u, T]),
        (0, i.jsx)(b, {
            buttonRef: C,
            label: n,
            disabled: !d,
            iconComponent: Z,
            isActive: !E && !I && u,
            color: (_ ? (t = 'premiumGradient') : v === s.BK.GroupedButtonsRedMic && u && (t = 'green'), t),
            ignoreColorForCaret: v === s.BK.GroupedButtonsRedMic && u,
            onMouseEnter: (e) => {
                null == m || m(e), N.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == f || f(e), N.onMouseLeave();
            },
            premiumGlow: g,
            ...x
        })
    );
}
