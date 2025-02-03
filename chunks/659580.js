n.d(t, { default: () => _ });
var i = n(200651);
n(192379);
var l = n(990547),
    a = n(481060),
    r = n(410575),
    s = n(906732),
    o = n(213609),
    c = n(821564),
    u = n(453925),
    d = n(632304),
    m = n(947150),
    f = n(488021),
    p = n(822556),
    h = n(981631),
    g = n(388032),
    v = n(126741);
function _(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: _ = !1, renderInputModes: I = !1, renderInputVolume: S = !1, renderOutputVolume: x = !1, onSelect: E } = e,
        { analyticsLocations: C } = (0, s.ZP)();
    (0, o.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: C }
    });
    let Z = (0, p.Z)(),
        y = (0, m.Z)(C),
        b = (0, f.Z)(C),
        N = (0, c.Z)(C),
        T = (0, u.Z)(C),
        A = (0, d.Z)(C);
    return (0, i.jsx)(r.Z, {
        object: h.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(a.v2r, {
            onSelect: E,
            className: v.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': g.intl.string(g.t.ZR1Ss7),
            children: [
                _
                    ? (0, i.jsx)(a.kSQ, {
                          label: g.intl.string(g.t.ElbIXF),
                          children: y
                      })
                    : null,
                n
                    ? (0, i.jsx)(a.kSQ, {
                          label: g.intl.string(g.t['6Ww0iI']),
                          children: b
                      })
                    : null,
                I
                    ? (0, i.jsx)(a.kSQ, {
                          label: g.intl.string(g.t['pS+K2N']),
                          children: N
                      })
                    : null,
                (0, i.jsxs)(a.kSQ, {
                    children: [S ? T : null, x ? A : null, Z]
                })
            ]
        })
    });
}
