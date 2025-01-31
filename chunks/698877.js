n.d(t, { O: () => c });
var i = n(200651),
    l = n(192379),
    a = n(864094),
    r = n(861254),
    s = n(871499),
    o = n(388032);
function c(e) {
    let t,
        n,
        { hasPermission: c, streamActive: d, isSelfStream: u, centerButton: h, onMouseEnter: p, onMouseLeave: m, premiumGlow: f, renderNUXHighlight: g, buttonRef: _, ...C } = e,
        { mode: x } = (0, r.ZP)({ location: 'StreamButton' }),
        v = h ? s.d : s.Z;
    n = d ? (u ? o.intl.string(o.t.S5anIS) : o.intl.string(o.t.q3O3Jy)) : c ? o.intl.string(o.t.fjBNo6) : o.intl.string(o.t.uQn9Bw);
    let { Component: E, events: I, play: b } = (0, a.P)(d ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => b(), [d, b]),
        (0, i.jsx)(v, {
            buttonRef: _,
            label: n,
            disabled: !c,
            iconComponent: E,
            isActive: d,
            color: (g ? (t = 'premiumGradient') : x === r.BK.GroupedButtonsRedMic && d && (t = 'green'), t),
            ignoreColorForCaret: x === r.BK.GroupedButtonsRedMic && d,
            onMouseEnter: (e) => {
                null == p || p(e), I.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == m || m(e), I.onMouseLeave();
            },
            premiumGlow: f,
            ...C
        })
    );
}
