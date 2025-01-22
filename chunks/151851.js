r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(350810),
    c = r(579806),
    d = r(40851),
    f = r(358221),
    p = r(754347),
    h = r(428548),
    _ = r(718759),
    m = r(679219),
    g = r(835225),
    E = r(939039),
    v = r(117795),
    y = r(358085),
    b = r(998502),
    I = r(388032),
    T = r(882165);
let S = '#ffffff',
    A = (e) => b.ZP.close(e),
    C = (e) => b.ZP.minimize(e),
    N = (e, n) => {
        (0, y.isMac)() && !n.altKey ? b.ZP.fullscreen(e) : b.ZP.maximize(e);
    },
    R = (e) => {
        let { children: n, windowKey: r, themeOverride: a, hasOpenLayer: s } = e,
            u = (0, i.jsx)(l.Clickable, {
                className: T.winButtonClose,
                onClick: () => A(r),
                'aria-label': I.intl.string(I.t.ZdNUj4),
                tabIndex: -1,
                children: (0, i.jsx)(h.Z, {})
            }),
            c = (0, i.jsx)(l.Clickable, {
                className: T.winButtonMinMax,
                onClick: (e) => N(r, e),
                'aria-label': I.intl.string(I.t.G1u0hI),
                tabIndex: -1,
                children: (0, i.jsx)(m.Z, {})
            }),
            d = (0, i.jsx)(l.Clickable, {
                className: T.winButtonMinMax,
                onClick: () => C(r),
                'aria-label': I.intl.string(I.t.CxOC4e),
                tabIndex: -1,
                children: (0, i.jsx)(E.Z, {})
            }),
            f = (0, i.jsxs)(i.Fragment, {
                children: [u, c, d]
            });
        return (0, i.jsx)(l.ThemeProvider, {
            theme: a,
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: o()(T.typeWindows, e, { [T.withBackgroundOverride]: !s }),
                    children: [
                        (0, i.jsx)('div', {
                            className: T.wordmarkWindows,
                            children: (0, i.jsx)(p.Z, {})
                        }),
                        n,
                        f
                    ]
                })
        });
    },
    O = (e) => {
        let { focused: n, windowKey: r, frame: a, themeOverride: s, hasOpenLayer: u, children: d } = e;
        return (0, i.jsx)(l.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, i.jsxs)(l.Clickable, {
                    className: o()(a ? T.typeMacOSWithFrame : T.typeMacOS, n ? T.focused : T.unfocused, e, { [T.withBackgroundOverride]: !u }),
                    onDoubleClick: () => b.ZP.maximize(r),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? d
                            : (0, i.jsxs)('div', {
                                  className: T.macButtons,
                                  children: [
                                      (0, i.jsx)(l.Clickable, {
                                          className: T.macButtonClose,
                                          onClick: () => A(r),
                                          'aria-label': I.intl.string(I.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(_.Z, { color: '#4c0000' })
                                      }),
                                      (0, i.jsx)(l.Clickable, {
                                          className: T.macButtonMinimize,
                                          onClick: () => C(r),
                                          'aria-label': I.intl.string(I.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(v.Z, { color: '#975500' })
                                      }),
                                      (0, i.jsx)(l.Clickable, {
                                          className: T.macButtonMaximize,
                                          onClick: (e) => N(r, e),
                                          'aria-label': I.intl.string(I.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(g.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        a
                            ? (0, i.jsx)('div', {
                                  className: T.wordmarkMacOS,
                                  children: (0, i.jsx)(p.Z, { color: S })
                              })
                            : null
                    ]
                })
        });
    };
function D(e) {
    let { focused: n, type: r, windowKey: a, macOSFrame: o = !1, themeOverride: l } = e,
        c = (0, d.bp)(),
        p = (0, s.e7)([f.Z], () => f.Z.isFullscreenInContext(c)),
        h = (0, u.Z)();
    if (p) return null;
    switch (r) {
        case y.PlatformTypes.WINDOWS:
            return (0, i.jsx)(R, {
                windowKey: a,
                themeOverride: l,
                hasOpenLayer: h
            });
        case y.PlatformTypes.OSX:
            return (0, i.jsx)(O, {
                focused: n,
                windowKey: a,
                frame: o,
                themeOverride: l,
                hasOpenLayer: h
            });
        default:
            return null;
    }
}
