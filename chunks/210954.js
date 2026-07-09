"use strict";
n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(289873),
    o = n(536246),
    d = n(395678),
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
    N = n(157690),
    C = n(429904),
    R = n(794005);
function O(e) {
    let { isLoading: t } = e,
        n = (0, s.bG)([p.A], () => p.A.getConnectedFrame()),
        r = (0, s.bG)([p.A], () => p.A.getFrameLayoutMode()),
        c = (0, _.h)(n?.applicationId),
        u = (0, s.bG)([p.A], () => null != c && p.A.isProxyTicketRefreshing(c.id), [c]),
        O = (0, s.bG)([E.A], () => E.A.getWindowOpen(g.MLl.ACTIVITY_POPOUT)),
        L = (0, s.bG)([I.A], () => I.A.isFrameHidden()),
        D = r === m.y.PIP && !L && !O,
        y = D && null != I.A.pipVideoWindow && null != I.A.pipFrameWindow;
    if (null == n || null == c || O) return null;
    let v = { instance_id: "example-cl-instance", platform: S.vu.DESKTOP };
    return (
        null != n.proxyTicket && (v.discord_proxy_ticket = n.proxyTicket),
        (0, i.jsx)(h.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: s, onForceIdle: _ } = e;
                return (0, i.jsxs)(A.A, {
                    className: a()(N.zr, { [N.NW]: D, [R.a8]: D, [C.N7]: r, [N.p0]: D, [N.R]: L, [N.Gq]: y }),
                    noBorder: !D,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: r, idle: a } = e;
                                return D && null != n
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: r,
                                                  className: N.OB,
                                              }),
                                              (0, i.jsx)(T.v, {
                                                  idle: a,
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: r,
                                                  onFocus: () => {
                                                      f.A.updateFrameLayoutMode({
                                                          applicationId: n.applicationId,
                                                          layoutMode: m.y.FOCUSED,
                                                      });
                                                  },
                                                  applicationId: n.applicationId,
                                              }),
                                          ],
                                      })
                                    : null;
                            })({ onActive: s, onForceIdle: _, idle: r }),
                        }),
                        t || u
                            ? (0, i.jsx)(l.y, { className: a()(N.pU, { [N.p0]: D }) })
                            : (0, i.jsx)(d.o, {
                                  allowPopups: (0, o.b)(c),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: v,
                                  className: a()(N.pU, { [N.p0]: D, [N.v8]: D }),
                                  shouldRefocus: !D,
                              }),
                    ],
                });
            },
        })
    );
}
let L = () => {
    let { analyticsLocations: e } = (0, u.Ay)(c.A.FRAME_PIP),
        t = (0, s.bG)([p.A], () => p.A.isFrameActive());
    return (0, i.jsx)(u.f5, { value: e, children: (0, i.jsx)(O, { isLoading: !t }) });
};
