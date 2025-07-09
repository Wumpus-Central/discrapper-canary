a.d(t, { Z: () => S });
var n = a(255367);
a(73800);
var r = a(120356),
    l = a.n(r),
    i = a(442837),
    s = a(481060),
    o = a(350810),
    c = a(579806),
    d = a(40851),
    u = a(358221),
    m = a(754347),
    x = a(428548),
    p = a(718759),
    h = a(679219),
    b = a(835225),
    f = a(939039),
    v = a(117795),
    j = a(358085),
    g = a(998502),
    _ = a(388032),
    y = a(445561);
let C = (e) => g.ZP.close(e),
    O = (e) => g.ZP.minimize(e),
    N = (e, t) => {
        (0, j.isMac)() && !t.altKey ? g.ZP.fullscreen(e) : g.ZP.maximize(e);
    },
    T = (e) => {
        let { children: t, windowKey: a, themeOverride: r, hasOpenLayer: i } = e,
            o = (0, n.jsx)(s.P3F, {
                className: y.winButtonClose,
                onClick: () => C(a),
                'aria-label': _.intl.string(_.t.ZdNUj4),
                tabIndex: -1,
                children: (0, n.jsx)(x.Z, {})
            }),
            c = (0, n.jsx)(s.P3F, {
                className: y.winButtonMinMax,
                onClick: (e) => N(a, e),
                'aria-label': _.intl.string(_.t.G1u0hI),
                tabIndex: -1,
                children: (0, n.jsx)(h.Z, {})
            }),
            d = (0, n.jsx)(s.P3F, {
                className: y.winButtonMinMax,
                onClick: () => O(a),
                'aria-label': _.intl.string(_.t.CxOC4e),
                tabIndex: -1,
                children: (0, n.jsx)(f.Z, {})
            }),
            u = (0, n.jsxs)(n.Fragment, {
                children: [o, c, d]
            });
        return (0, n.jsx)(s.f6W, {
            theme: r,
            children: (e) =>
                (0, n.jsxs)('div', {
                    className: l()(y.typeWindows, e, { [y.withBackgroundOverride]: !i }),
                    children: [
                        (0, n.jsx)('div', {
                            className: y.wordmarkWindows,
                            children: (0, n.jsx)(m.Z, {})
                        }),
                        t,
                        u
                    ]
                })
        });
    },
    E = (e) => {
        let { focused: t, windowKey: a, frame: r, themeOverride: i, hasOpenLayer: o, children: d } = e;
        return (0, n.jsx)(s.f6W, {
            theme: i,
            children: (e) =>
                (0, n.jsxs)(s.P3F, {
                    className: l()(r ? y.typeMacOSWithFrame : y.typeMacOS, t ? y.focused : y.unfocused, e, { [y.withBackgroundOverride]: !o }),
                    onDoubleClick: () => g.ZP.maximize(a),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? d
                            : (0, n.jsxs)('div', {
                                  className: y.macButtons,
                                  children: [
                                      (0, n.jsx)(s.P3F, {
                                          className: y.macButtonClose,
                                          onClick: () => C(a),
                                          'aria-label': _.intl.string(_.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, n.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, n.jsx)(s.P3F, {
                                          className: y.macButtonMinimize,
                                          onClick: () => O(a),
                                          'aria-label': _.intl.string(_.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, n.jsx)(v.Z, { color: '#975500' })
                                      }),
                                      (0, n.jsx)(s.P3F, {
                                          className: y.macButtonMaximize,
                                          onClick: (e) => N(a, e),
                                          'aria-label': _.intl.string(_.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, n.jsx)(b.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        r
                            ? (0, n.jsx)('div', {
                                  className: y.wordmarkMacOS,
                                  children: (0, n.jsx)(m.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function S(e) {
    let { focused: t, type: a, windowKey: r, macOSFrame: l = !1, themeOverride: s } = e,
        c = (0, d.bp)(),
        m = (0, i.e7)([u.Z], () => u.Z.isFullscreenInContext(c)),
        x = (0, o.Z)();
    if (m) return null;
    switch (a) {
        case j.PlatformTypes.WINDOWS:
            return (0, n.jsx)(T, {
                windowKey: r,
                themeOverride: s,
                hasOpenLayer: x
            });
        case j.PlatformTypes.OSX:
            return (0, n.jsx)(E, {
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
