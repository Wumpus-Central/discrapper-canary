"use strict";
n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(289873),
    l = n(536246),
    u = n(398866),
    c = n(793574),
    d = n(688810),
    _ = n(429913),
    f = n(869146),
    p = n(272812),
    h = n(461782),
    E = n(334463),
    m = n(625180),
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
        i = (0, a.bG)([g.A], () => g.A.getFrameLayoutMode()),
        c = (0, _.h)(n?.applicationId),
        d = (0, a.bG)([g.A], () => null != c && g.A.isProxyTicketRefreshing(c.id), [c]),
        C = (0, a.bG)([f.A], () => f.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        O = (0, a.bG)([E.A], () => E.A.isFrameHidden()),
        R = i === I.y.PIP && !O && !C,
        b = R && null != E.A.pipVideoWindow && null != E.A.pipFrameWindow;
    if (null == n || null == c || C) return null;
    let D = { instance_id: "example-cl-instance", platform: S.vu.DESKTOP };
    return (
        null != n.proxyTicket && (D.discord_proxy_ticket = n.proxyTicket),
        (0, r.jsx)(h.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: a, onForceIdle: _ } = e;
                return (0, r.jsxs)(p.A, {
                    className: s()(y.zr, { [y.NW]: R, [v.a8]: R, [N.N7]: i, [y.p0]: R, [y.R]: O, [y.Gq]: b }),
                    noBorder: !R,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: i, idle: s } = e;
                                return R && null != n
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: i,
                                                  className: y.OB,
                                              }),
                                              (0, r.jsx)(A.v, {
                                                  idle: s,
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: i,
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
                            })({ onActive: a, onForceIdle: _, idle: i }),
                        }),
                        t || d
                            ? (0, r.jsx)(o.y, { className: s()(y.pU, { [y.p0]: R }) })
                            : (0, r.jsx)(u.o, {
                                  allowPopups: (0, l.b)(c),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: D,
                                  className: s()(y.pU, { [y.p0]: R, [y.v8]: R }),
                                  shouldRefocus: !R,
                              }),
                    ],
                });
            },
        })
    );
}
let O = () => {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.FRAME_PIP),
        t = (0, a.bG)([g.A], () => g.A.isFrameActive());
    return (0, r.jsx)(d.f5, { value: e, children: (0, r.jsx)(C, { isLoading: !t }) });
};
