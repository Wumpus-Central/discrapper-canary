n.d(t, {
    O: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(864094),
    a = n(861254),
    s = n(871499),
    o = n(388032);
function c(e) {
    let t,
        n,
        { hasPermission: c, streamActive: d, isSelfStream: u, centerButton: h, onMouseEnter: p, onMouseLeave: m, premiumGlow: f, renderNUXHighlight: g, buttonRef: C, ...x } = e,
        { mode: v } = (0, a.ZP)({ location: 'StreamButton' }),
        _ = h ? s.d : s.Z;
    n = d ? (u ? o.intl.string(o.t.S5anIS) : o.intl.string(o.t.q3O3Jy)) : c ? o.intl.string(o.t.fjBNo6) : o.intl.string(o.t.uQn9Bw);
    let { Component: I, events: E, play: b } = (0, r.P)(d ? 'disable' : 'enable');
    l.useEffect(() => () => b(), [d, b]);
    return (0, i.jsx)(_, {
        buttonRef: C,
        label: n,
        disabled: !c,
        iconComponent: I,
        isActive: d,
        color: (g ? (t = 'premiumGradient') : v === a.BK.GroupedButtonsRedMic && d && (t = 'green'), t),
        ignoreColorForCaret: v === a.BK.GroupedButtonsRedMic && d,
        onMouseEnter: (e) => {
            null == p || p(e), E.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == m || m(e), E.onMouseLeave();
        },
        premiumGlow: f,
        ...x
    });
}
