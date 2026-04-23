"use strict";
n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(289873),
    l = n(536246),
    u = n(398866),
    d = n(793574),
    c = n(688810),
    _ = n(429913),
    f = n(869146),
    E = n(272812),
    h = n(461782),
    p = n(334463),
    m = n(625180),
    g = n(91242),
    A = n(113192),
    I = n(165610),
    T = n(652215),
    S = n(360469),
    y = n(970682),
    N = n(27600),
    O = n(604949);
function R(e) {
    let { isLoading: t } = e,
        n = (0, a.bG)([g.A], () => g.A.getConnectedFrame()),
        i = (0, a.bG)([g.A], () => g.A.getFrameLayoutMode()),
        d = (0, _.h)(n?.applicationId),
        c = (0, a.bG)([g.A], () => null != d && g.A.isProxyTicketRefreshing(d.id), [d]),
        R = (0, a.bG)([f.A], () => f.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT)),
        v = (0, a.bG)([p.A], () => p.A.isFrameHidden()),
        C = i === I.y.PIP && !v && !R,
        b = C && null != p.A.pipVideoWindow && null != p.A.pipFrameWindow;
    if (null == n || null == d || R) return null;
    let D = { instance_id: "example-cl-instance", platform: S.vu.DESKTOP };
    return (
        null != n.proxyTicket && (D.discord_proxy_ticket = n.proxyTicket),
        (0, r.jsx)(h.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: a, onForceIdle: _ } = e;
                return (0, r.jsxs)(E.A, {
                    className: s()(y.zr, { [y.NW]: C, [O.a8]: C, [N.N7]: i, [y.p0]: C, [y.R]: v, [y.Gq]: b }),
                    noBorder: !C,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: i, idle: s } = e;
                                return C && null != n
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
                        t || c
                            ? (0, r.jsx)(o.y, { className: s()(y.pU, { [y.p0]: C }) })
                            : (0, r.jsx)(u.o, {
                                  allowPopups: (0, l.b)(d),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: D,
                                  className: s()(y.pU, { [y.p0]: C, [y.v8]: C }),
                                  shouldRefocus: !C,
                              }),
                    ],
                });
            },
        })
    );
}
let v = () => {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.FRAME_PIP),
        t = (0, a.bG)([g.A], () => g.A.isFrameActive());
    return (0, r.jsx)(c.f5, { value: e, children: (0, r.jsx)(R, { isLoading: !t }) });
};
