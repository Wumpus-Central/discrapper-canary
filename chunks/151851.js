r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(350810),
    c = r(579806),
    d = r(40851),
    f = r(358221),
    _ = r(754347),
    h = r(428548),
    p = r(718759),
    m = r(679219),
    g = r(835225),
    E = r(939039),
    v = r(117795),
    I = r(358085),
    T = r(998502),
    b = r(388032),
    y = r(882165);
let S = '#ffffff',
    A = (e) => T.ZP.close(e),
    N = (e) => T.ZP.minimize(e),
    C = (e, n) => {
        (0, I.isMac)() && !n.altKey ? T.ZP.fullscreen(e) : T.ZP.maximize(e);
    },
    R = (e) => {
        let { children: n, windowKey: r, themeOverride: a, hasOpenLayer: o } = e,
            u = (0, i.jsx)(l.Clickable, {
                className: y.winButtonClose,
                onClick: () => A(r),
                'aria-label': b.intl.string(b.t.ZdNUj4),
                tabIndex: -1,
                children: (0, i.jsx)(h.Z, {})
            }),
            c = (0, i.jsx)(l.Clickable, {
                className: y.winButtonMinMax,
                onClick: (e) => C(r, e),
                'aria-label': b.intl.string(b.t.G1u0hI),
                tabIndex: -1,
                children: (0, i.jsx)(m.Z, {})
            }),
            d = (0, i.jsx)(l.Clickable, {
                className: y.winButtonMinMax,
                onClick: () => N(r),
                'aria-label': b.intl.string(b.t.CxOC4e),
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
                    className: s()(y.typeWindows, e, { [y.withBackgroundOverride]: !o }),
                    children: [
                        (0, i.jsx)('div', {
                            className: y.wordmarkWindows,
                            children: (0, i.jsx)(_.Z, {})
                        }),
                        n,
                        f
                    ]
                })
        });
    },
    O = (e) => {
        let { focused: n, windowKey: r, frame: a, themeOverride: o, hasOpenLayer: u, children: d } = e;
        return (0, i.jsx)(l.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, i.jsxs)(l.Clickable, {
                    className: s()(a ? y.typeMacOSWithFrame : y.typeMacOS, n ? y.focused : y.unfocused, e, { [y.withBackgroundOverride]: !u }),
                    onDoubleClick: () => T.ZP.maximize(r),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? d
                            : (0, i.jsxs)('div', {
                                  className: y.macButtons,
                                  children: [
                                      (0, i.jsx)(l.Clickable, {
                                          className: y.macButtonClose,
                                          onClick: () => A(r),
                                          'aria-label': b.intl.string(b.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, i.jsx)(l.Clickable, {
                                          className: y.macButtonMinimize,
                                          onClick: () => N(r),
                                          'aria-label': b.intl.string(b.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(v.Z, { color: '#975500' })
                                      }),
                                      (0, i.jsx)(l.Clickable, {
                                          className: y.macButtonMaximize,
                                          onClick: (e) => C(r, e),
                                          'aria-label': b.intl.string(b.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, i.jsx)(g.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        a
                            ? (0, i.jsx)('div', {
                                  className: y.wordmarkMacOS,
                                  children: (0, i.jsx)(_.Z, { color: S })
                              })
                            : null
                    ]
                })
        });
    };
function D(e) {
    let { focused: n, type: r, windowKey: a, macOSFrame: s = !1, themeOverride: l } = e,
        c = (0, d.bp)(),
        _ = (0, o.e7)([f.Z], () => f.Z.isFullscreenInContext(c)),
        h = (0, u.Z)();
    if (_) return null;
    switch (r) {
        case I.PlatformTypes.WINDOWS:
            return (0, i.jsx)(R, {
                windowKey: a,
                themeOverride: l,
                hasOpenLayer: h
            });
        case I.PlatformTypes.OSX:
            return (0, i.jsx)(O, {
                focused: n,
                windowKey: a,
                frame: s,
                themeOverride: l,
                hasOpenLayer: h
            });
        default:
            return null;
    }
}
