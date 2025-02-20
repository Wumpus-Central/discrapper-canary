n.d(t, { Z: () => R });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(350810),
    c = n(579806),
    u = n(40851),
    d = n(358221),
    f = n(754347),
    p = n(428548),
    _ = n(718759),
    h = n(679219),
    m = n(835225),
    g = n(939039),
    E = n(117795),
    v = n(358085),
    b = n(998502),
    y = n(388032),
    O = n(550164);
let S = '#ffffff',
    I = (e) => b.ZP.close(e),
    T = (e) => b.ZP.minimize(e),
    N = (e, t) => {
        (0, v.isMac)() && !t.altKey ? b.ZP.fullscreen(e) : b.ZP.maximize(e);
    },
    A = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: a } = e,
            l = (0, r.jsx)(s.P3F, {
                className: O.winButtonClose,
                onClick: () => I(n),
                'aria-label': y.NW.string(y.t.ZdNUj4),
                tabIndex: -1,
                children: (0, r.jsx)(p.Z, {})
            }),
            c = (0, r.jsx)(s.P3F, {
                className: O.winButtonMinMax,
                onClick: (e) => N(n, e),
                'aria-label': y.NW.string(y.t.G1u0hI),
                tabIndex: -1,
                children: (0, r.jsx)(h.Z, {})
            }),
            u = (0, r.jsx)(s.P3F, {
                className: O.winButtonMinMax,
                onClick: () => T(n),
                'aria-label': y.NW.string(y.t.CxOC4e),
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
                    className: o()(O.typeWindows, e, { [O.withBackgroundOverride]: !a }),
                    children: [
                        (0, r.jsx)('div', {
                            className: O.wordmarkWindows,
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
                    className: o()(i ? O.typeMacOSWithFrame : O.typeMacOS, t ? O.focused : O.unfocused, e, { [O.withBackgroundOverride]: !l }),
                    onDoubleClick: () => b.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? u
                            : (0, r.jsxs)('div', {
                                  className: O.macButtons,
                                  children: [
                                      (0, r.jsx)(s.P3F, {
                                          className: O.macButtonClose,
                                          onClick: () => I(n),
                                          'aria-label': y.NW.string(y.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(_.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          className: O.macButtonMinimize,
                                          onClick: () => T(n),
                                          'aria-label': y.NW.string(y.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(E.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          className: O.macButtonMaximize,
                                          onClick: (e) => N(n, e),
                                          'aria-label': y.NW.string(y.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(m.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: O.wordmarkMacOS,
                                  children: (0, r.jsx)(f.Z, { color: S })
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
        p = (0, l.Z)();
    if (f) return null;
    switch (n) {
        case v.PlatformTypes.WINDOWS:
            return (0, r.jsx)(A, {
                windowKey: i,
                themeOverride: s,
                hasOpenLayer: p
            });
        case v.PlatformTypes.OSX:
            return (0, r.jsx)(C, {
                focused: t,
                windowKey: i,
                frame: o,
                themeOverride: s,
                hasOpenLayer: p
            });
        default:
            return null;
    }
}
