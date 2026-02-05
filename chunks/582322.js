"use strict";
n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(942857),
    u = n(77729),
    c = n(313961),
    d = n(267102),
    _ = n(85563),
    f = n(130412),
    p = n(239466),
    h = n(155545),
    m = n(797820),
    g = n(561155),
    E = n(803102),
    A = n(723702),
    I = n(837921),
    T = n(985018),
    y = n(551580);
let S = "#ffffff",
    v = (e) => I.Ay.close(e),
    C = (e) => I.Ay.minimize(e),
    b = (e, t) => {
        (0, A.isMac)() && !t.altKey ? I.Ay.fullscreen(e) : I.Ay.maximize(e);
    },
    N = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s } = e,
            l = (0, r.jsx)(o.DUT, {
                className: y.d1,
                onClick: () => v(n),
                "aria-label": T.intl.string(T.t.ZdNUj2),
                tabIndex: -1,
                children: (0, r.jsx)(f.A, {}),
            }),
            u = (0, r.jsx)(o.DUT, {
                className: y.T0,
                onClick: (e) => b(n, e),
                "aria-label": T.intl.string(T.t.G1u0hK),
                tabIndex: -1,
                children: (0, r.jsx)(h.A, {}),
            }),
            c = (0, r.jsx)(o.DUT, {
                className: y.T0,
                onClick: () => C(n),
                "aria-label": T.intl.string(T.t.CxOC4U),
                tabIndex: -1,
                children: (0, r.jsx)(g.A, {}),
            }),
            d = (0, r.jsxs)(r.Fragment, { children: [l, u, c] });
        return (0, r.jsx)(o.NPJ, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: a()(y._B, e, { [y.N_]: !s }),
                    children: [(0, r.jsx)("div", { className: y.X1, children: (0, r.jsx)(_.A, {}) }), t, d],
                }),
        });
    },
    R = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, r.jsx)(o.NPJ, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.DUT, {
                    className: a()(i ? y.zY : y.kE, t ? y.in : y.Vn, e, { [y.N_]: !l }),
                    onDoubleClick: () => I.Ay.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, r.jsxs)("div", {
                                  className: y.lY,
                                  children: [
                                      (0, r.jsx)(o.DUT, {
                                          className: y.gV,
                                          onClick: () => v(n),
                                          "aria-label": T.intl.string(T.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(p.A, { color: "#4c0000" }),
                                      }),
                                      (0, r.jsx)(o.DUT, {
                                          className: y.wv,
                                          onClick: () => C(n),
                                          "aria-label": T.intl.string(T.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(E.A, { color: "#975500" }),
                                      }),
                                      (0, r.jsx)(o.DUT, {
                                          className: y.KH,
                                          onClick: (e) => b(n, e),
                                          "aria-label": T.intl.string(T.t["2nM3Pk"]),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(m.A, { color: "#006500" }),
                                      }),
                                  ],
                              }),
                        i ? (0, r.jsx)("div", { className: y.Th, children: (0, r.jsx)(_.A, { color: S }) }) : null,
                    ],
                }),
        });
    };
function O(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, d.Us)(),
        _ = (0, s.bG)([c.A], () => c.A.isFullscreenInContext(u)),
        f = (0, l.A)();
    if (_) return null;
    switch (n) {
        case A.PlatformTypes.WINDOWS:
            return (0, r.jsx)(N, { windowKey: i, themeOverride: o, hasOpenLayer: f });
        case A.PlatformTypes.OSX:
            return (0, r.jsx)(R, { focused: t, windowKey: i, frame: a, themeOverride: o, hasOpenLayer: f });
        default:
            return null;
    }
}
