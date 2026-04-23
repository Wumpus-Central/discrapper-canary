"use strict";
n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(939249),
    l = n(43990),
    u = n(942857),
    c = n(77729),
    d = n(313961),
    _ = n(267102),
    f = n(85563),
    p = n(908031),
    h = n(239466),
    E = n(155545),
    m = n(797820),
    g = n(561155),
    A = n(803102),
    I = n(723702),
    T = n(837921),
    S = n(985018),
    y = n(964837);
let N = (e, t) => {
        (0, I.isMac)() && !t.altKey ? T.Ay.fullscreen(e) : T.Ay.maximize(e);
    },
    v = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: a } = e,
            u = (0, r.jsx)(o.D, {
                className: y.d1,
                onClick: () => T.Ay.close(n),
                "aria-label": S.intl.string(S.t.ZdNUj2),
                tabIndex: -1,
                children: (0, r.jsx)(p.A, {}),
            }),
            c = (0, r.jsx)(o.D, {
                className: y.T0,
                onClick: (e) => N(n, e),
                "aria-label": S.intl.string(S.t.G1u0hK),
                tabIndex: -1,
                children: (0, r.jsx)(E.A, {}),
            }),
            d = (0, r.jsx)(o.D, {
                className: y.T0,
                onClick: () => T.Ay.minimize(n),
                "aria-label": S.intl.string(S.t.CxOC4U),
                tabIndex: -1,
                children: (0, r.jsx)(g.A, {}),
            }),
            _ = (0, r.jsxs)(r.Fragment, { children: [u, c, d] });
        return (0, r.jsx)(l.N, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: s()(y._B, e, { [y.N_]: !a }),
                    children: [(0, r.jsx)("div", { className: y.X1, children: (0, r.jsx)(f.A, {}) }), t, _],
                }),
        });
    },
    C = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: a, hasOpenLayer: u, children: d } = e;
        return (0, r.jsx)(l.N, {
            theme: a,
            children: (e) =>
                (0, r.jsxs)(o.D, {
                    className: s()(i ? y.zY : y.kE, t ? y.in : y.Vn, e, { [y.N_]: !u }),
                    onDoubleClick: () => T.Ay.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? d
                            : (0, r.jsxs)("div", {
                                  className: y.lY,
                                  children: [
                                      (0, r.jsx)(o.D, {
                                          className: y.gV,
                                          onClick: () => T.Ay.close(n),
                                          "aria-label": S.intl.string(S.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(h.A, { color: "#4c0000" }),
                                      }),
                                      (0, r.jsx)(o.D, {
                                          className: y.wv,
                                          onClick: () => T.Ay.minimize(n),
                                          "aria-label": S.intl.string(S.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(A.A, { color: "#975500" }),
                                      }),
                                      (0, r.jsx)(o.D, {
                                          className: y.KH,
                                          onClick: (e) => N(n, e),
                                          "aria-label": S.intl.string(S.t["2nM3Pk"]),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(m.A, { color: "#006500" }),
                                      }),
                                  ],
                              }),
                        i
                            ? (0, r.jsx)("div", { className: y.Th, children: (0, r.jsx)(f.A, { color: "#ffffff" }) })
                            : null,
                    ],
                }),
        });
    };
function O(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: s = !1, themeOverride: o } = e,
        l = (0, _.Us)(),
        c = (0, a.bG)([d.A], () => d.A.isFullscreenInContext(l)),
        f = (0, u.A)();
    if (c) return null;
    switch (n) {
        case I.PlatformTypes.WINDOWS:
            return (0, r.jsx)(v, { windowKey: i, themeOverride: o, hasOpenLayer: f });
        case I.PlatformTypes.OSX:
            return (0, r.jsx)(C, { focused: t, windowKey: i, frame: s, themeOverride: o, hasOpenLayer: f });
        default:
            return null;
    }
}
