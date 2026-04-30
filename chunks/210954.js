"use strict";
n.d(t, { A: () => O });
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
    f = n(869146),
    h = n(272812),
    p = n(461782),
    E = n(334463),
    m = n(113854),
    g = n(91242),
    A = n(113192),
    I = n(165610),
    T = n(652215),
    S = n(360469),
    N = n(970682),
    y = n(27600),
    C = n(604949);
function v(e) {
    let { isLoading: t } = e,
        n = (0, a.bG)([g.A], () => g.A.getConnectedFrame()),
        r = (0, a.bG)([g.A], () => g.A.getFrameLayoutMode()),
        c = (0, _.h)(n?.applicationId),
        d = (0, a.bG)([g.A], () => null != c && g.A.isProxyTicketRefreshing(c.id), [c]),
        v = (0, a.bG)([f.A], () => f.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        O = (0, a.bG)([E.A], () => E.A.isFrameHidden()),
        R = r === I.y.PIP && !O && !v,
        b = R && null != E.A.pipVideoWindow && null != E.A.pipFrameWindow;
    if (null == n || null == c || v) return null;
    let D = { instance_id: "example-cl-instance", platform: S.vu.DESKTOP };
    return (
        null != n.proxyTicket && (D.discord_proxy_ticket = n.proxyTicket),
        (0, i.jsx)(p.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: a, onForceIdle: _ } = e;
                return (0, i.jsxs)(h.A, {
                    className: s()(N.zr, { [N.NW]: R, [C.a8]: R, [y.N7]: r, [N.p0]: R, [N.R]: O, [N.Gq]: b }),
                    noBorder: !R,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: r, idle: s } = e;
                                return R && null != n
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: r,
                                                  className: N.OB,
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
                            ? (0, i.jsx)(o.y, { className: s()(N.pU, { [N.p0]: R }) })
                            : (0, i.jsx)(u.o, {
                                  allowPopups: (0, l.b)(c),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: D,
                                  className: s()(N.pU, { [N.p0]: R, [N.v8]: R }),
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
    return (0, i.jsx)(d.f5, { value: e, children: (0, i.jsx)(v, { isLoading: !t }) });
};
