n.r(t),
    n.d(t, {
        default: function () {
            return S;
        }
    });
var i = n(200651);
n(192379);
var l = n(990547),
    r = n(481060),
    a = n(410575),
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
function S(e) {
    let { onClose: t, renderOutputDevices: n = !1, renderInputDevices: S = !1, renderInputModes: I = !1, renderInputVolume: x = !1, renderOutputVolume: _ = !1, onSelect: C } = e,
        { analyticsLocations: b } = (0, s.ZP)();
    (0, o.Z)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: b }
    });
    let E = (0, p.Z)(),
        y = (0, m.Z)(b),
        Z = (0, f.Z)(b),
        T = (0, c.Z)(b),
        N = (0, u.Z)(b),
        A = (0, d.Z)(b);
    return (0, i.jsx)(a.Z, {
        object: h.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(r.Menu, {
            onSelect: C,
            className: v.menu,
            onClose: t,
            navId: 'audio-device-context',
            'aria-label': g.intl.string(g.t.ZR1Ss7),
            children: [
                S
                    ? (0, i.jsx)(r.MenuGroup, {
                          label: g.intl.string(g.t.ElbIXF),
                          children: y
                      })
                    : null,
                n
                    ? (0, i.jsx)(r.MenuGroup, {
                          label: g.intl.string(g.t['6Ww0iI']),
                          children: Z
                      })
                    : null,
                I
                    ? (0, i.jsx)(r.MenuGroup, {
                          label: g.intl.string(g.t['pS+K2N']),
                          children: T
                      })
                    : null,
                (0, i.jsxs)(r.MenuGroup, {
                    children: [x ? N : null, _ ? A : null, E]
                })
            ]
        })
    });
}
