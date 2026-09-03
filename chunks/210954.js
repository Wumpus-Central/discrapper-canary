n.d(t, { A: () => O });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(793574),
    o = n(688810),
    d = n(429913),
    c = n(869146),
    u = n(272812),
    _ = n(461782),
    E = n(334463),
    A = n(91242),
    h = n(812901),
    I = n(317608),
    f = n(113192),
    p = n(165610),
    T = n(652215),
    m = n(411801),
    g = n(967481),
    S = n(969426);
function N(e) {
    let { onActive: t, onForceIdle: n } = e;
    return (0, i.jsx)("div", { onMouseMove: t, onMouseDown: t, onMouseLeave: n, className: m.IU });
}
function C() {
    let e = (0, s.bG)([A.A], () => (0, p.ny)(A.A.getMainFrame())),
        t = (0, d.h)(e?.applicationId),
        n = (0, s.bG)([c.A], () => c.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        r = (0, s.bG)([E.A], () => E.A.isFrameHidden());
    if (null == e || null == t || n) return null;
    let { layoutMode: l } = e.data,
        o = l === p.y0.PIP && !r,
        C = o && null != E.A.pipVideoWindow && null != E.A.pipFrameWindow;
    return (0, i.jsx)(_.Ay, {
        timeout: 2e3,
        children: (t) => {
            let { idle: n, onActive: s, onForceIdle: l } = t;
            return (0, i.jsxs)(u.A, {
                className: a()(m.zr, { [m.NW]: o, [S.a8]: o, [g.N7]: n, [m.p0]: o, [m.R]: r, [m.Gq]: C }),
                noBorder: !o,
                children: [
                    o ? (0, i.jsx)(N, { onActive: s, onForceIdle: l }) : null,
                    (0, i.jsx)(I.A, {
                        frameId: e.id,
                        level: h.A.AboveAppContent,
                        className: a()(m.pU, { [m.p0]: o }),
                        overlay: o
                            ? (0, i.jsx)("div", {
                                  className: "theme-dark",
                                  children: (0, i.jsx)(f.v, {
                                      frame: e,
                                      idle: n,
                                      onMouseMove: s,
                                      onMouseDown: s,
                                      onMouseLeave: l,
                                  }),
                              })
                            : null,
                    }),
                ],
            });
        },
    });
}
let O = () => {
    let { analyticsLocations: e } = (0, o.Ay)(l.A.FRAME_PIP);
    return (0, i.jsx)(o.f5, { value: e, children: (0, i.jsx)(C, {}) });
};
