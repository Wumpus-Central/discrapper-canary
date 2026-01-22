n.d(t, {
    A: () => R,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(942857),
    c = n(77729),
    u = n(313961),
    d = n(267102),
    f = n(85563),
    p = n(130412),
    _ = n(239466),
    h = n(155545),
    m = n(797820),
    g = n(561155),
    E = n(803102),
    b = n(723702),
    y = n(837921),
    O = n(985018),
    A = n(551580);
let v = "#ffffff",
    S = (e) => y.Ay.close(e),
    I = (e) => y.Ay.minimize(e),
    T = (e, t) => {
        (0, b.isMac)() && !t.altKey ? y.Ay.fullscreen(e) : y.Ay.maximize(e);
    },
    C = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s } = e,
            l = (0, r.jsx)(o.DUT, {
                className: A.d1,
                onClick: () => S(n),
                "aria-label": O.intl.string(O.t.ZdNUj2),
                tabIndex: -1,
                children: (0, r.jsx)(p.A, {}),
            }),
            c = (0, r.jsx)(o.DUT, {
                className: A.T0,
                onClick: (e) => T(n, e),
                "aria-label": O.intl.string(O.t.G1u0hK),
                tabIndex: -1,
                children: (0, r.jsx)(h.A, {}),
            }),
            u = (0, r.jsx)(o.DUT, {
                className: A.T0,
                onClick: () => I(n),
                "aria-label": O.intl.string(O.t.CxOC4U),
                tabIndex: -1,
                children: (0, r.jsx)(g.A, {}),
            }),
            d = (0, r.jsxs)(r.Fragment, {
                children: [l, c, u],
            });
        return (0, r.jsx)(o.NPJ, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: a()(A._B, e, {
                        [A.N_]: !s,
                    }),
                    children: [
                        (0, r.jsx)("div", {
                            className: A.X1,
                            children: (0, r.jsx)(f.A, {}),
                        }),
                        t,
                        d,
                    ],
                }),
        });
    },
    N = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: u } = e;
        return (0, r.jsx)(o.NPJ, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.DUT, {
                    className: a()(i ? A.zY : A.kE, t ? A.in : A.Vn, e, {
                        [A.N_]: !l,
                    }),
                    onDoubleClick: () => y.Ay.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? u
                            : (0, r.jsxs)("div", {
                                  className: A.lY,
                                  children: [
                                      (0, r.jsx)(o.DUT, {
                                          className: A.gV,
                                          onClick: () => S(n),
                                          "aria-label": O.intl.string(O.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(_.A, {
                                              color: "#4c0000",
                                          }),
                                      }),
                                      (0, r.jsx)(o.DUT, {
                                          className: A.wv,
                                          onClick: () => I(n),
                                          "aria-label": O.intl.string(O.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(E.A, {
                                              color: "#975500",
                                          }),
                                      }),
                                      (0, r.jsx)(o.DUT, {
                                          className: A.KH,
                                          onClick: (e) => T(n, e),
                                          "aria-label": O.intl.string(O.t["2nM3Pk"]),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(m.A, {
                                              color: "#006500",
                                          }),
                                      }),
                                  ],
                              }),
                        i
                            ? (0, r.jsx)("div", {
                                  className: A.Th,
                                  children: (0, r.jsx)(f.A, {
                                      color: v,
                                  }),
                              })
                            : null,
                    ],
                }),
        });
    };

function R(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        c = (0, d.Us)(),
        f = (0, s.bG)([u.A], () => u.A.isFullscreenInContext(c)),
        p = (0, l.A)();
    if (f) return null;
    switch (n) {
        case b.PlatformTypes.WINDOWS:
            return (0, r.jsx)(C, {
                windowKey: i,
                themeOverride: o,
                hasOpenLayer: p,
            });
        case b.PlatformTypes.OSX:
            return (0, r.jsx)(N, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: o,
                hasOpenLayer: p,
            });
        default:
            return null;
    }
}
