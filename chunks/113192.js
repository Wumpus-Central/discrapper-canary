"use strict";
n.d(t, { v: () => I });
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
    p = n(128286),
    h = n(625180),
    m = n(262579),
    g = n(652215),
    E = n(31545),
    A = n(319567);
function I(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: I, onMouseLeave: T, onFocus: y, idle: S } = e,
        v = (0, l.h)(t),
        C = (0, d.Us)() === g.BRT.POPOUT,
        { parentAnalyticsLocation: b } = (0, o.Ay)(),
        N = () => {
            (0, u.X)(b, u.O.POPOUT, !0),
                (0, s.A)({
                    onConfirm: async () => {
                        await h.A.refreshProxyTicket({ applicationId: t }), (0, a.jp)();
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
                    idle: S,
                    title: v?.name ?? "",
                    onJumpToChannel: y,
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
                        C || (0, i.f)()
                            ? null
                            : (0, r.jsx)(p.A, {
                                  className: E.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: N,
                                  onClosePopout: g.FXj,
                              }),
                        (0, r.jsx)(m.A, { applicationId: t, className: E.BD }),
                    ],
                }),
            }),
        ],
    });
}
