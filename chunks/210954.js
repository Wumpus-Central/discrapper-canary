n.d(t, {
    A: () => C,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(536246),
    c = n(398866),
    u = n(793574),
    d = n(688810),
    f = n(429913),
    p = n(869146),
    _ = n(272812),
    h = n(461782),
    m = n(334463),
    g = n(625180),
    E = n(91242),
    b = n(113192),
    y = n(165610),
    O = n(652215),
    A = n(360469),
    v = n(463967),
    S = n(319567),
    I = n(976092);

function T(e) {
    let { isLoading: t } = e,
        n = (0, s.bG)([E.A], () => E.A.getConnectedFrame()),
        i = (0, s.bG)([E.A], () => E.A.getFrameLayoutMode()),
        u = (0, f.h)(null == n ? void 0 : n.applicationId),
        d = (0, s.bG)([E.A], () => null != u && E.A.isProxyTicketRefreshing(u.id), [u]),
        T = (0, s.bG)([p.A], () => p.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT)),
        C = (0, s.bG)([m.A], () => m.A.isFrameHidden()),
        N = i === y.y.PIP && !C && !T,
        R = N && null != m.A.pipVideoWindow && null != m.A.pipFrameWindow;
    if (null == n || null == u || T) return null;
    let w = {
        instance_id: "example-cl-instance",
        platform: A.vu.DESKTOP,
    };

    function P(e) {
        let { onActive: t, onForceIdle: i, idle: a } = e;
        return N && null != n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          className: v.OB,
                      }),
                      (0, r.jsx)(b.v, {
                          idle: a,
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          onFocus: () => {
                              g.A.updateFrameLayoutMode({
                                  applicationId: n.applicationId,
                                  layoutMode: y.y.FOCUSED,
                              });
                          },
                          applicationId: n.applicationId,
                      }),
                  ],
              })
            : null;
    }
    return (
        null != n.proxyTicket && (w.discord_proxy_ticket = n.proxyTicket),
        (0, r.jsx)(h.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: s, onForceIdle: f } = e;
                return (0, r.jsxs)(_.A, {
                    className: a()(v.zr, {
                        [v.NW]: N,
                        [I.a8]: N,
                        [S.N7]: i,
                        [v.p0]: N,
                        [v.R]: C,
                        [v.Gq]: R,
                    }),
                    noBorder: !N,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: P({
                                onActive: s,
                                onForceIdle: f,
                                idle: i,
                            }),
                        }),
                        t || d
                            ? (0, r.jsx)(o.y$y, {
                                  className: a()(v.pU, {
                                      [v.p0]: N,
                                  }),
                              })
                            : (0, r.jsx)(c.o, {
                                  allowPopups: (0, l.b)(u),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: w,
                                  className: a()(v.pU, {
                                      [v.p0]: N,
                                      [v.v8]: N,
                                  }),
                                  shouldRefocus: !N,
                              }),
                    ],
                });
            },
        })
    );
}
let C = () => {
    let { analyticsLocations: e } = (0, d.Ay)(u.A.FRAME_PIP),
        t = (0, s.bG)([E.A], () => E.A.isFrameActive());
    return (0, r.jsx)(d.f5, {
        value: e,
        children: (0, r.jsx)(T, {
            isLoading: !t,
        }),
    });
};
