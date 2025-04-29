n.d(t, { Z: () => R });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(350810),
    c = n(579806),
    u = n(40851),
    d = n(358221),
    f = n(754347),
    _ = n(428548),
    p = n(718759),
    h = n(679219),
    m = n(835225),
    g = n(939039),
    E = n(117795),
    b = n(358085),
    y = n(998502),
    O = n(388032),
    v = n(445561);
let I = '#ffffff',
    S = (e) => y.ZP.close(e),
    T = (e) => y.ZP.minimize(e),
    A = (e, t) => {
        (0, b.isMac)() && !t.altKey ? y.ZP.fullscreen(e) : y.ZP.maximize(e);
    },
    N = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: a } = e,
            l = (0, r.jsx)(s.P3F, {
                className: v.winButtonClose,
                onClick: () => S(n),
                'aria-label': O.intl.string(O.t.ZdNUj4),
                tabIndex: -1,
                children: (0, r.jsx)(_.Z, {})
            }),
            c = (0, r.jsx)(s.P3F, {
                className: v.winButtonMinMax,
                onClick: (e) => A(n, e),
                'aria-label': O.intl.string(O.t.G1u0hI),
                tabIndex: -1,
                children: (0, r.jsx)(h.Z, {})
            }),
            u = (0, r.jsx)(s.P3F, {
                className: v.winButtonMinMax,
                onClick: () => T(n),
                'aria-label': O.intl.string(O.t.CxOC4e),
                tabIndex: -1,
                children: (0, r.jsx)(g.Z, {})
            }),
            d = (0, r.jsxs)(r.Fragment, {
                children: [l, c, u]
            });
        return (0, r.jsx)(s.f6W, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: o()(v.typeWindows, e, { [v.withBackgroundOverride]: !a }),
                    children: [
                        (0, r.jsx)('div', {
                            className: v.wordmarkWindows,
                            children: (0, r.jsx)(f.Z, {})
                        }),
                        t,
                        d
                    ]
                })
        });
    },
    C = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: a, hasOpenLayer: l, children: u } = e;
        return (0, r.jsx)(s.f6W, {
            theme: a,
            children: (e) =>
                (0, r.jsxs)(s.P3F, {
                    className: o()(i ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, e, { [v.withBackgroundOverride]: !l }),
                    onDoubleClick: () => y.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? u
                            : (0, r.jsxs)('div', {
                                  className: v.macButtons,
                                  children: [
                                      (0, r.jsx)(s.P3F, {
                                          className: v.macButtonClose,
                                          onClick: () => S(n),
                                          'aria-label': O.intl.string(O.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          className: v.macButtonMinimize,
                                          onClick: () => T(n),
                                          'aria-label': O.intl.string(O.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(E.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          className: v.macButtonMaximize,
                                          onClick: (e) => A(n, e),
                                          'aria-label': O.intl.string(O.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(m.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: v.wordmarkMacOS,
                                  children: (0, r.jsx)(f.Z, { color: I })
                              })
                            : null
                    ]
                })
        });
    };
function R(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: o = !1, themeOverride: s } = e,
        c = (0, u.bp)(),
        f = (0, a.e7)([d.Z], () => d.Z.isFullscreenInContext(c)),
        _ = (0, l.Z)();
    if (f) return null;
    switch (n) {
        case b.PlatformTypes.WINDOWS:
            return (0, r.jsx)(N, {
                windowKey: i,
                themeOverride: s,
                hasOpenLayer: _
            });
        case b.PlatformTypes.OSX:
            return (0, r.jsx)(C, {
                focused: t,
                windowKey: i,
                frame: o,
                themeOverride: s,
                hasOpenLayer: _
            });
        default:
            return null;
    }
}
