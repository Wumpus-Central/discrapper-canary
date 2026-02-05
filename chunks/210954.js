"use strict";
n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(536246),
    u = n(398866),
    c = n(793574),
    d = n(688810),
    _ = n(429913),
    f = n(869146),
    p = n(272812),
    h = n(461782),
    m = n(334463),
    g = n(625180),
    E = n(91242),
    A = n(113192),
    I = n(165610),
    T = n(652215),
    y = n(360469),
    S = n(463967),
    v = n(319567),
    C = n(976092);
function b(e) {
    let { isLoading: t } = e,
        n = (0, s.bG)([E.A], () => E.A.getConnectedFrame()),
        i = (0, s.bG)([E.A], () => E.A.getFrameLayoutMode()),
        c = (0, _.h)(n?.applicationId),
        d = (0, s.bG)([E.A], () => null != c && E.A.isProxyTicketRefreshing(c.id), [c]),
        b = (0, s.bG)([f.A], () => f.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        N = (0, s.bG)([m.A], () => m.A.isFrameHidden()),
        R = i === I.y.PIP && !N && !b,
        O = R && null != m.A.pipVideoWindow && null != m.A.pipFrameWindow;
    if (null == n || null == c || b) return null;
    let D = { instance_id: "example-cl-instance", platform: y.vu.DESKTOP };
    function L(e) {
        let { onActive: t, onForceIdle: i, idle: a } = e;
        return R && null != n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { onMouseMove: t, onMouseDown: t, onMouseLeave: i, className: S.OB }),
                      (0, r.jsx)(A.v, {
                          idle: a,
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          onFocus: () => {
                              g.A.updateFrameLayoutMode({ applicationId: n.applicationId, layoutMode: I.y.FOCUSED });
                          },
                          applicationId: n.applicationId,
                      }),
                  ],
              })
            : null;
    }
    return (
        null != n.proxyTicket && (D.discord_proxy_ticket = n.proxyTicket),
        (0, r.jsx)(h.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: s, onForceIdle: _ } = e;
                return (0, r.jsxs)(p.A, {
                    className: a()(S.zr, { [S.NW]: R, [C.a8]: R, [v.N7]: i, [S.p0]: R, [S.R]: N, [S.Gq]: O }),
                    noBorder: !R,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: L({ onActive: s, onForceIdle: _, idle: i }),
                        }),
                        t || d
                            ? (0, r.jsx)(o.y$y, { className: a()(S.pU, { [S.p0]: R }) })
                            : (0, r.jsx)(u.o, {
                                  allowPopups: (0, l.b)(c),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: D,
                                  className: a()(S.pU, { [S.p0]: R, [S.v8]: R }),
                                  shouldRefocus: !R,
                              }),
                    ],
                });
            },
        })
    );
}
let N = () => {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.FRAME_PIP),
        t = (0, s.bG)([E.A], () => E.A.isFrameActive());
    return (0, r.jsx)(d.f5, { value: e, children: (0, r.jsx)(b, { isLoading: !t }) });
};
