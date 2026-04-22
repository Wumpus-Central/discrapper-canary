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
    d = n(235986),
    c = n(267102),
    _ = n(447404),
    f = n(271195),
    E = n(128286),
    h = n(625180),
    p = n(262579),
    m = n(652215),
    g = n(114964),
    A = n(429904);
function I(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: I, onMouseLeave: T, onFocus: S, idle: y } = e,
        N = (0, l.h)(t),
        O = (0, c.Us)() === m.BRT.POPOUT,
        { parentAnalyticsLocation: R } = (0, o.Ay)();
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
                    title: N?.name ?? "",
                    onJumpToChannel: S,
                    preventIdleComponent: _.A,
                }),
            }),
            (0, r.jsx)("div", {
                className: A.q6,
                children: (0, r.jsxs)(d.A, {
                    grow: 1,
                    shrink: 1,
                    justify: d.A.Justify.END,
                    align: d.A.Align.CENTER,
                    children: [
                        O || (0, i.f)()
                            ? null
                            : (0, r.jsx)(E.A, {
                                  className: g.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: () => {
                                      (0, u.X)(R, u.O.POPOUT, !0),
                                          (0, a.A)({
                                              onConfirm: async () => {
                                                  await h.A.refreshProxyTicket({ applicationId: t }), (0, s.jp)();
                                              },
                                          });
                                  },
                                  onClosePopout: m.FXj,
                              }),
                        (0, r.jsx)(p.A, { applicationId: t, className: g.BD }),
                    ],
                }),
            }),
        ],
    });
}
