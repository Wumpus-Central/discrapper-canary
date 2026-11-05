var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(855986),
    l = n(793574),
    o = n(688810),
    d = n(429913),
    c = n(144399),
    u = n(869146),
    _ = n(272812),
    E = n(461782),
    A = n(334463),
    f = n(343030),
    h = n(91242),
    I = n(11411),
    p = n(113192),
    m = n(165610),
    T = n(652215),
    g = n(411801),
    S = n(967481),
    N = n(969426);
function C(e) {
    let { onActive: t, onForceIdle: n } = e;
    return (0, i.jsx)("div", { onMouseMove: t, onMouseDown: t, onMouseLeave: n, className: g.IU });
}
function O() {
    let e = (0, s.bG)([h.A], () => (0, m.ny)(h.A.getMainFrame())),
        t = (0, d.h)(e?.applicationId),
        n = (0, s.bG)([u.A], () => u.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        r = (0, s.bG)([A.A], () => A.A.isFrameHidden());
    if (null == e || null == t || n) return null;
    let { layoutMode: l } = e.data,
        o = l === m.y0.PIP && !r,
        O = o && null != A.A.pipVideoWindow && null != A.A.pipFrameWindow;
    return (0, i.jsx)(E.Ay, {
        timeout: 2e3,
        children: (t) => {
            let { idle: n, onActive: s, onForceIdle: l } = t;
            return (0, i.jsxs)(_.A, {
                className: a()(g.zr, { [g.NW]: o, [N.a8]: o, [S.N7]: n, [g.p0]: o, [g.R]: r, [g.Gq]: O }),
                noBorder: !o,
                children: [
                    o ? (0, i.jsx)(C, { onActive: s, onForceIdle: l }) : null,
                    (0, i.jsx)(I.A, {
                        frameId: e.id,
                        level: f.A.AboveAppContent,
                        className: a()(g.pU, { [g.p0]: o }),
                        overlay: o
                            ? (0, i.jsx)("div", {
                                  className: "theme-dark",
                                  children: (0, i.jsx)(p.v, {
                                      frame: e,
                                      idle: n,
                                      onMouseMove: s,
                                      onMouseDown: s,
                                      onMouseLeave: l,
                                  }),
                              })
                            : (0, i.jsx)(c.A, { frameId: e.id }),
                    }),
                ],
            });
        },
    });
}
n.d(
    t,
    {},
    {
        A: () => {
            let { analyticsLocations: e } = (0, o.Ay)(l.A.FRAME_PIP);
            return (0, i.jsx)(o.f5, { value: e, children: (0, i.jsx)(O, {}) });
        },
    },
);
