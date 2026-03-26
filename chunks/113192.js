"use strict";
n.d(t, { v: () => I });
var r = n(627968);
n(64700);
var i = n(646865),
    s = n(795816),
    a = n(47294),
    o = n(688810),
    l = n(429913),
    u = n(384059),
    c = n(235986),
    d = n(267102),
    _ = n(447404),
    f = n(271195),
    p = n(128286),
    h = n(625180),
    m = n(262579),
    E = n(652215),
    g = n(580868),
    A = n(156576);
function I(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: I, onMouseLeave: T, onFocus: S, idle: y } = e,
        v = (0, l.h)(t),
        N = (0, d.Us)() === E.BRT.POPOUT,
        { parentAnalyticsLocation: C } = (0, o.Ay)(),
        R = () => {
            (0, u.X)(C, u.O.POPOUT, !0),
                (0, a.A)({
                    onConfirm: async () => {
                        await h.A.refreshProxyTicket({ applicationId: t }), (0, s.jp)();
                    },
                });
        };
    return (0, r.jsxs)("div", {
        className: A._v,
        onMouseMove: I,
        onMouseDown: n,
        onMouseLeave: T,
        children: [
            (0, r.jsx)("div", {
                className: A.K1,
                children: (0, r.jsx)(f.X, {
                    idle: y,
                    title: v?.name ?? "",
                    onJumpToChannel: S,
                    preventIdleComponent: _.A,
                }),
            }),
            (0, r.jsx)("div", {
                className: A.q6,
                children: (0, r.jsxs)(c.A, {
                    grow: 1,
                    shrink: 1,
                    justify: c.A.Justify.END,
                    align: c.A.Align.CENTER,
                    children: [
                        N || (0, i.f)()
                            ? null
                            : (0, r.jsx)(p.A, {
                                  className: g.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: R,
                                  onClosePopout: E.FXj,
                              }),
                        (0, r.jsx)(m.A, { applicationId: t, className: g.BD }),
                    ],
                }),
            }),
        ],
    });
}
