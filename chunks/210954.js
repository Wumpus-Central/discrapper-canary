"use strict";
n.d(t, { A: () => R });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(289873),
    l = n(536246),
    u = n(395678),
    c = n(793574),
    d = n(688810),
    _ = n(429913),
    h = n(869146),
    f = n(272812),
    p = n(461782),
    E = n(334463),
    m = n(113854),
    g = n(91242),
    A = n(113192),
    I = n(165610),
    T = n(652215),
    S = n(360469),
    y = n(970682),
    N = n(27600),
    v = n(604949);
function C(e) {
    let { isLoading: t } = e,
        n = (0, a.bG)([g.A], () => g.A.getConnectedFrame()),
        r = (0, a.bG)([g.A], () => g.A.getFrameLayoutMode()),
        c = (0, _.h)(n?.applicationId),
        d = (0, a.bG)([g.A], () => null != c && g.A.isProxyTicketRefreshing(c.id), [c]),
        C = (0, a.bG)([h.A], () => h.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        R = (0, a.bG)([E.A], () => E.A.isFrameHidden()),
        O = r === I.y.PIP && !R && !C,
        b = O && null != E.A.pipVideoWindow && null != E.A.pipFrameWindow;
    if (null == n || null == c || C) return null;
    let D = { instance_id: "example-cl-instance", platform: S.vu.DESKTOP };
    return (
        null != n.proxyTicket && (D.discord_proxy_ticket = n.proxyTicket),
        (0, i.jsx)(p.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: a, onForceIdle: _ } = e;
                return (0, i.jsxs)(f.A, {
                    className: s()(y.zr, { [y.NW]: O, [v.a8]: O, [N.N7]: r, [y.p0]: O, [y.R]: R, [y.Gq]: b }),
                    noBorder: !O,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: r, idle: s } = e;
                                return O && null != n
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: r,
                                                  className: y.OB,
                                              }),
                                              (0, i.jsx)(A.v, {
                                                  idle: s,
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: r,
                                                  onFocus: () => {
                                                      m.A.updateFrameLayoutMode({
                                                          applicationId: n.applicationId,
                                                          layoutMode: I.y.FOCUSED,
                                                      });
                                                  },
                                                  applicationId: n.applicationId,
                                              }),
                                          ],
                                      })
                                    : null;
                            })({ onActive: a, onForceIdle: _, idle: r }),
                        }),
                        t || d
                            ? (0, i.jsx)(o.y, { className: s()(y.pU, { [y.p0]: O }) })
                            : (0, i.jsx)(u.o, {
                                  allowPopups: (0, l.b)(c),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: D,
                                  className: s()(y.pU, { [y.p0]: O, [y.v8]: O }),
                                  shouldRefocus: !O,
                              }),
                    ],
                });
            },
        })
    );
}
let R = () => {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.FRAME_PIP),
        t = (0, a.bG)([g.A], () => g.A.isFrameActive());
    return (0, i.jsx)(d.f5, { value: e, children: (0, i.jsx)(C, { isLoading: !t }) });
};
