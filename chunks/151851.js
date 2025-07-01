n.d(t, { Z: () => S });
var a = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    i = n(442837),
    s = n(481060),
    o = n(350810),
    c = n(579806),
    d = n(40851),
    u = n(358221),
    m = n(754347),
    x = n(428548),
    h = n(718759),
    p = n(679219),
    b = n(835225),
    f = n(939039),
    v = n(117795),
    j = n(358085),
    g = n(998502),
    _ = n(388032),
    y = n(445561);
let C = (e) => g.ZP.close(e),
    O = (e) => g.ZP.minimize(e),
    N = (e, t) => {
        (0, j.isMac)() && !t.altKey ? g.ZP.fullscreen(e) : g.ZP.maximize(e);
    },
    E = (e) => {
        let { children: t, windowKey: n, themeOverride: r, hasOpenLayer: i } = e,
            o = (0, a.jsx)(s.P3F, {
                className: y.winButtonClose,
                onClick: () => C(n),
                'aria-label': _.intl.string(_.t.ZdNUj4),
                tabIndex: -1,
                children: (0, a.jsx)(x.Z, {})
            }),
            c = (0, a.jsx)(s.P3F, {
                className: y.winButtonMinMax,
                onClick: (e) => N(n, e),
                'aria-label': _.intl.string(_.t.G1u0hI),
                tabIndex: -1,
                children: (0, a.jsx)(p.Z, {})
            }),
            d = (0, a.jsx)(s.P3F, {
                className: y.winButtonMinMax,
                onClick: () => O(n),
                'aria-label': _.intl.string(_.t.CxOC4e),
                tabIndex: -1,
                children: (0, a.jsx)(f.Z, {})
            }),
            u = (0, a.jsxs)(a.Fragment, {
                children: [o, c, d]
            });
        return (0, a.jsx)(s.f6W, {
            theme: r,
            children: (e) =>
                (0, a.jsxs)('div', {
                    className: l()(y.typeWindows, e, { [y.withBackgroundOverride]: !i }),
                    children: [
                        (0, a.jsx)('div', {
                            className: y.wordmarkWindows,
                            children: (0, a.jsx)(m.Z, {})
                        }),
                        t,
                        u
                    ]
                })
        });
    },
    T = (e) => {
        let { focused: t, windowKey: n, frame: r, themeOverride: i, hasOpenLayer: o, children: d } = e;
        return (0, a.jsx)(s.f6W, {
            theme: i,
            children: (e) =>
                (0, a.jsxs)(s.P3F, {
                    className: l()(r ? y.typeMacOSWithFrame : y.typeMacOS, t ? y.focused : y.unfocused, e, { [y.withBackgroundOverride]: !o }),
                    onDoubleClick: () => g.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? d
                            : (0, a.jsxs)('div', {
                                  className: y.macButtons,
                                  children: [
                                      (0, a.jsx)(s.P3F, {
                                          className: y.macButtonClose,
                                          onClick: () => C(n),
                                          'aria-label': _.intl.string(_.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(h.Z, { color: '#4c0000' })
                                      }),
                                      (0, a.jsx)(s.P3F, {
                                          className: y.macButtonMinimize,
                                          onClick: () => O(n),
                                          'aria-label': _.intl.string(_.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(v.Z, { color: '#975500' })
                                      }),
                                      (0, a.jsx)(s.P3F, {
                                          className: y.macButtonMaximize,
                                          onClick: (e) => N(n, e),
                                          'aria-label': _.intl.string(_.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(b.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        r
                            ? (0, a.jsx)('div', {
                                  className: y.wordmarkMacOS,
                                  children: (0, a.jsx)(m.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function S(e) {
    let { focused: t, type: n, windowKey: r, macOSFrame: l = !1, themeOverride: s } = e,
        c = (0, d.bp)(),
        m = (0, i.e7)([u.Z], () => u.Z.isFullscreenInContext(c)),
        x = (0, o.Z)();
    if (m) return null;
    switch (n) {
        case j.PlatformTypes.WINDOWS:
            return (0, a.jsx)(E, {
                windowKey: r,
                themeOverride: s,
                hasOpenLayer: x
            });
        case j.PlatformTypes.OSX:
            return (0, a.jsx)(T, {
                focused: t,
                windowKey: r,
                frame: l,
                themeOverride: s,
                hasOpenLayer: x
            });
        default:
            return null;
    }
}
