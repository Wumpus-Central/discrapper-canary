n.d(t, { Z: () => P });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(350810),
    c = n(579806),
    u = n(358221),
    d = n(728285),
    f = n(754347),
    p = n(428548),
    _ = n(718759),
    m = n(679219),
    h = n(835225),
    g = n(939039),
    E = n(117795),
    b = n(358085),
    y = n(998502),
    O = n(388032),
    v = n(94879);
let S = "#ffffff",
    I = (e) => y.ZP.close(e),
    T = (e) => y.ZP.minimize(e),
    C = (e, t) => {
        (0, b.isMac)() && !t.altKey ? y.ZP.fullscreen(e) : y.ZP.maximize(e);
    },
    A = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: o } = e,
            l = (0, r.jsx)(s.P3F, {
                className: v.winButtonClose,
                onClick: () => I(n),
                "aria-label": O.intl.string(O.t.ZdNUj2),
                tabIndex: -1,
                children: (0, r.jsx)(p.Z, {}),
            }),
            c = (0, r.jsx)(s.P3F, {
                className: v.winButtonMinMax,
                onClick: (e) => C(n, e),
                "aria-label": O.intl.string(O.t.G1u0hK),
                tabIndex: -1,
                children: (0, r.jsx)(m.Z, {}),
            }),
            u = (0, r.jsx)(s.P3F, {
                className: v.winButtonMinMax,
                onClick: () => T(n),
                "aria-label": O.intl.string(O.t.CxOC4U),
                tabIndex: -1,
                children: (0, r.jsx)(g.Z, {}),
            }),
            d = (0, r.jsxs)(r.Fragment, {
                children: [l, c, u],
            });
        return (0, r.jsx)(s.f6W, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: a()(v.typeWindows, e, { [v.withBackgroundOverride]: !o }),
                    children: [
                        (0, r.jsx)("div", {
                            className: v.wordmarkWindows,
                            children: (0, r.jsx)(f.Z, {}),
                        }),
                        t,
                        d,
                    ],
                }),
        });
    },
    N = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: o, hasOpenLayer: l, children: u } = e;
        return (0, r.jsx)(s.f6W, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)(s.P3F, {
                    className: a()(i ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, e, {
                        [v.withBackgroundOverride]: !l,
                    }),
                    onDoubleClick: () => y.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? u
                            : (0, r.jsxs)("div", {
                                  className: v.macButtons,
                                  children: [
                                      (0, r.jsx)(s.P3F, {
                                          className: v.macButtonClose,
                                          onClick: () => I(n),
                                          "aria-label": O.intl.string(O.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(_.Z, { color: "#4c0000" }),
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          className: v.macButtonMinimize,
                                          onClick: () => T(n),
                                          "aria-label": O.intl.string(O.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(E.Z, { color: "#975500" }),
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          className: v.macButtonMaximize,
                                          onClick: (e) => C(n, e),
                                          "aria-label": O.intl.string(O.t["2nM3Pk"]),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(h.Z, { color: "#006500" }),
                                      }),
                                  ],
                              }),
                        i
                            ? (0, r.jsx)("div", {
                                  className: v.wordmarkMacOS,
                                  children: (0, r.jsx)(f.Z, { color: S }),
                              })
                            : null,
                    ],
                }),
        });
    };
function P(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: s } = e,
        c = (0, d.bp)(),
        f = (0, o.e7)([u.Z], () => u.Z.isFullscreenInContext(c)),
        p = (0, l.Z)();
    if (f) return null;
    switch (n) {
        case b.PlatformTypes.WINDOWS:
            return (0, r.jsx)(A, {
                windowKey: i,
                themeOverride: s,
                hasOpenLayer: p,
            });
        case b.PlatformTypes.OSX:
            return (0, r.jsx)(N, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: s,
                hasOpenLayer: p,
            });
        default:
            return null;
    }
}
