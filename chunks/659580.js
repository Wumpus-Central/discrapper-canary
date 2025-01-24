n.r(t),
    n.d(t, {
        default: function () {
            return I;
        }
    });
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
function I(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: I = !1, renderInputModes: S = !1, renderInputVolume: _ = !1, renderOutputVolume: x = !1, onSelect: E } = e,
        { analyticsLocations: C } = (0, s.ZP)();
    (0, o.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: C }
    });
    let y = (0, p.Z)(),
        Z = (0, m.Z)(C),
        b = (0, f.Z)(C),
        T = (0, c.Z)(C),
        N = (0, u.Z)(C),
        A = (0, d.Z)(C);
    return (0, i.jsx)(r.Z, {
        object: h.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(a.Menu, {
            onSelect: E,
            className: v.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': g.intl.string(g.t.ZR1Ss7),
            children: [
                I
                    ? (0, i.jsx)(a.MenuGroup, {
                          label: g.intl.string(g.t.ElbIXF),
                          children: Z
                      })
                    : null,
                n
                    ? (0, i.jsx)(a.MenuGroup, {
                          label: g.intl.string(g.t['6Ww0iI']),
                          children: b
                      })
                    : null,
                S
                    ? (0, i.jsx)(a.MenuGroup, {
                          label: g.intl.string(g.t['pS+K2N']),
                          children: T
                      })
                    : null,
                (0, i.jsxs)(a.MenuGroup, {
                    children: [_ ? N : null, x ? A : null, y]
                })
            ]
        })
    });
}
