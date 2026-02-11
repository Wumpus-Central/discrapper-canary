"use strict";
n.d(t, { v: () => T });
var r = n(627968);
n(64700);
var i = n(646865),
    a = n(795816),
    s = n(47294),
    o = n(688810),
    l = n(429913),
    u = n(384059),
    c = n(235986),
    d = n(267102),
    _ = n(447404),
    f = n(271195),
    h = n(128286),
    p = n(625180),
    g = n(262579),
    E = n(652215),
    A = n(700063),
    I = n(299973);
function T(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: T, onMouseLeave: y, onFocus: S, idle: v } = e,
        C = (0, l.h)(t),
        b = (0, d.Us)() === E.BRT.POPOUT,
        { parentAnalyticsLocation: N } = (0, o.Ay)(),
        R = () => {
            (0, u.X)(N, u.O.POPOUT, !0),
                (0, s.A)({
                    onConfirm: async () => {
                        await p.A.refreshProxyTicket({ applicationId: t }), (0, a.jp)();
                    },
                });
        };
    return (0, r.jsxs)("div", {
        className: I._v,
        onMouseMove: T,
        onMouseDown: n,
        onMouseLeave: y,
        children: [
            (0, r.jsx)("div", {
                className: I.K1,
                children: (0, r.jsx)(f.X, {
                    idle: v,
                    title: C?.name ?? "",
                    onJumpToChannel: S,
                    preventIdleComponent: _.A,
                }),
            }),
            (0, r.jsx)("div", {
                className: I.q6,
                children: (0, r.jsxs)(c.A, {
                    grow: 1,
                    shrink: 1,
                    justify: c.A.Justify.END,
                    align: c.A.Align.CENTER,
                    children: [
                        b || (0, i.f)()
                            ? null
                            : (0, r.jsx)(h.A, {
                                  className: A.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: R,
                                  onClosePopout: E.FXj,
                              }),
                        (0, r.jsx)(g.A, { applicationId: t, className: A.BD }),
                    ],
                }),
            }),
        ],
    });
}
