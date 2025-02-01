n.d(t, { Z: () => O });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(350810),
    u = n(579806),
    c = n(40851),
    d = n(358221),
    f = n(754347),
    _ = n(428548),
    p = n(718759),
    h = n(679219),
    m = n(835225),
    g = n(939039),
    E = n(117795),
    v = n(358085),
    y = n(998502),
    I = n(388032),
    T = n(882165);
let b = '#ffffff',
    S = (e) => y.ZP.close(e),
    A = (e) => y.ZP.minimize(e),
    N = (e, t) => {
        (0, v.isMac)() && !t.altKey ? y.ZP.fullscreen(e) : y.ZP.maximize(e);
    },
    C = (e) => {
        let { children: t, windowKey: n, themeOverride: r, hasOpenLayer: s } = e,
            l = (0, i.jsx)(o.P3F, {
                className: T.winButtonClose,
                onClick: () => S(n),
                'aria-label': I.intl.string(I.t.ZdNUj4),
                tabIndex: -1,
                children: (0, i.jsx)(_.Z, {})
            }),
            u = (0, i.jsx)(o.P3F, {
                className: T.winButtonMinMax,
                onClick: (e) => N(n, e),
                'aria-label': I.intl.string(I.t.G1u0hI),
                tabIndex: -1,
                children: (0, i.jsx)(h.Z, {})
            }),
            c = (0, i.jsx)(o.P3F, {
                className: T.winButtonMinMax,
                onClick: () => A(n),
                'aria-label': I.intl.string(I.t.CxOC4e),
                tabIndex: -1,
                children: (0, i.jsx)(g.Z, {})
            }),
            d = (0, i.jsxs)(i.Fragment, {
                children: [l, u, c]
            });
        return (0, i.jsx)(o.f6W, {
            theme: r,
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: a()(T.typeWindows, e, { [T.withBackgroundOverride]: !s }),
                    children: [
                        (0, i.jsx)('div', {
                            className: T.wordmarkWindows,
                            children: (0, i.jsx)(f.Z, {})
                        }),
                        t,
                        d
                    ]
                })
        });
    },
    R = (e) => {
        let { focused: t, windowKey: n, frame: r, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, i.jsx)(o.f6W, {
            theme: s,
            children: (e) =>
                (0, i.jsxs)(o.P3F, {
                    className: a()(r ? T.typeMacOSWithFrame : T.typeMacOS, t ? T.focused : T.unfocused, e, { [T.withBackgroundOverride]: !l }),
                    onDoubleClick: () => y.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, i.jsxs)('div', {
                                  className: T.macButtons,
                                  children: [
                                      (0, i.jsx)(o.P3F, {
                                          className: T.macButtonClose,
                                          onClick: () => S(n),
                                          'aria-label': I.intl.string(I.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, i.jsx)(o.P3F, {
                                          className: T.macButtonMinimize,
                                          onClick: () => A(n),
                                          'aria-label': I.intl.string(I.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(E.Z, { color: '#975500' })
                                      }),
                                      (0, i.jsx)(o.P3F, {
                                          className: T.macButtonMaximize,
                                          onClick: (e) => N(n, e),
                                          'aria-label': I.intl.string(I.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(m.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        r
                            ? (0, i.jsx)('div', {
                                  className: T.wordmarkMacOS,
                                  children: (0, i.jsx)(f.Z, { color: b })
                              })
                            : null
                    ]
                })
        });
    };
function O(e) {
    let { focused: t, type: n, windowKey: r, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, c.bp)(),
        f = (0, s.e7)([d.Z], () => d.Z.isFullscreenInContext(u)),
        _ = (0, l.Z)();
    if (f) return null;
    switch (n) {
        case v.PlatformTypes.WINDOWS:
            return (0, i.jsx)(C, {
                windowKey: r,
                themeOverride: o,
                hasOpenLayer: _
            });
        case v.PlatformTypes.OSX:
            return (0, i.jsx)(R, {
                focused: t,
                windowKey: r,
                frame: a,
                themeOverride: o,
                hasOpenLayer: _
            });
        default:
            return null;
    }
}
