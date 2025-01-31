n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(592471),
    a = n(749280),
    r = n(424602),
    s = n(861254),
    o = n(871499);
function c(e) {
    let t,
        n,
        c,
        d,
        { isActivityActive: u, onMouseEnter: h, onMouseLeave: p, onClick: m, ...f } = e,
        { mode: g } = (0, s.ZP)({ location: 'VideoButton' });
    g === s.BK.GroupedButtonsRedMic && u && (t = 'green');
    let { enabled: _ } = r.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: C, events: x, play: v } = (0, l.s)(),
        { Component: E, events: I, play: b } = (0, a.w)();
    return (
        _ ? ((n = E), (c = I), (d = b)) : ((n = C), (c = x), (d = v)),
        (0, i.jsx)(o.d, {
            isActive: u,
            color: t,
            iconComponent: n,
            onMouseEnter: (e) => {
                null == h || h(e), c.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == p || p(e), c.onMouseLeave();
            },
            onClick: (e) => {
                null == m || m(e), d();
            },
            ...f
        })
    );
}
