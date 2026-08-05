"use strict";
n.d(t, { A: () => D });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(289873),
    o = n(536246),
    d = n(809239),
    c = n(793574),
    u = n(688810),
    _ = n(429913),
    E = n(869146),
    A = n(272812),
    h = n(461782),
    I = n(334463),
    f = n(113854),
    p = n(91242),
    T = n(113192),
    m = n(165610),
    g = n(652215),
    S = n(360469),
    N = n(427957),
    C = n(516184),
    O = n(997213);
function R(e) {
    let { isPIPMode: t, frameId: n, applicationId: r, idle: a, onActive: s, onForceIdle: l } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { onMouseMove: s, onMouseDown: s, onMouseLeave: l, className: N.OB }),
                  (0, i.jsx)(T.v, {
                      idle: a,
                      onMouseMove: s,
                      onMouseDown: s,
                      onMouseLeave: l,
                      onFocus: () => {
                          f.A.updateFrameLayoutMode({ frameId: n, layoutMode: m.y0.FOCUSED });
                      },
                      applicationId: r,
                      frameId: n,
                  }),
              ],
          })
        : null;
}
function L() {
    let e = (0, s.bG)([p.A], () => (0, m.ny)(p.A.getMainFrame())),
        t = (0, _.h)(e?.applicationId),
        n = (0, s.bG)([E.A], () => E.A.getWindowOpen(g.MLl.ACTIVITY_POPOUT)),
        r = (0, s.bG)([I.A], () => I.A.isFrameHidden());
    if (null == e || null == t || n) return null;
    let { url: c, proxyTicket: u, proxyTicketRefreshing: T, layoutMode: L } = e.data,
        D = L === m.y0.PIP && !r,
        y = D && null != I.A.pipVideoWindow && null != I.A.pipFrameWindow,
        v = { instance_id: "example-cl-instance", platform: S.vu.DESKTOP, discord_proxy_ticket: u };
    return (0, i.jsx)(h.Ay, {
        timeout: 2e3,
        children: (n) => {
            let { idle: s, onActive: u, onForceIdle: _ } = n;
            return (0, i.jsxs)(A.A, {
                className: a()(N.zr, { [N.NW]: D, [O.a8]: D, [C.N7]: s, [N.p0]: D, [N.R]: r, [N.Gq]: y }),
                noBorder: !D,
                children: [
                    (0, i.jsx)("div", {
                        className: "theme-dark",
                        children: (0, i.jsx)(R, {
                            isPIPMode: D,
                            frameId: e.id,
                            applicationId: e.applicationId,
                            idle: s,
                            onActive: u,
                            onForceIdle: _,
                        }),
                    }),
                    T
                        ? (0, i.jsx)(l.y, { className: a()(N.pU, { [N.p0]: D }) })
                        : (0, i.jsx)(d.o, {
                              allowPopups: (0, o.b)(t),
                              referrerPolicy: "origin",
                              url: c,
                              onIframeMount: (t) => f.A.attachFrameIframe(e.id, t),
                              onIframeUnmount: (t) => f.A.detachFrameIframe(e.id, t),
                              queryParams: v,
                              className: a()(N.pU, { [N.p0]: D, [N.v8]: D }),
                              shouldRefocus: !D,
                          }),
                ],
            });
        },
    });
}
let D = () => {
    let { analyticsLocations: e } = (0, u.Ay)(c.A.FRAME_PIP);
    return (0, i.jsx)(u.f5, { value: e, children: (0, i.jsx)(L, {}) });
};
