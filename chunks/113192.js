"use strict";
n.d(t, { v: () => m });
var i = n(477900);
n(582128);
var r = n(646865),
    a = n(795816),
    s = n(47294),
    l = n(688810),
    o = n(429913),
    d = n(384059),
    c = n(235986),
    u = n(267102),
    _ = n(447404),
    E = n(271195),
    A = n(128286),
    h = n(113854),
    I = n(262579),
    f = n(652215),
    p = n(431740),
    T = n(516184);
function m(e) {
    let { applicationId: t, frameId: n, onMouseDown: m, onMouseMove: g, onMouseLeave: S, onFocus: N, idle: C } = e,
        O = (0, o.h)(t),
        R = (0, u.Us)() === f.BRT.POPOUT,
        { parentAnalyticsLocation: L } = (0, l.Ay)();
    return (0, i.jsxs)("div", {
        className: T._v,
        onMouseMove: g,
        onMouseDown: m,
        onMouseLeave: S,
        children: [
            (0, i.jsx)("div", {
                className: T.K1,
                children: (0, i.jsx)(E.X, {
                    idle: C,
                    title: O?.name ?? "",
                    onJumpToChannel: N,
                    preventIdleComponent: _.A,
                }),
            }),
            (0, i.jsx)("div", {
                className: T.q6,
                children: (0, i.jsxs)(c.A, {
                    grow: 1,
                    shrink: 1,
                    justify: c.A.Justify.END,
                    align: c.A.Align.CENTER,
                    children: [
                        R || (0, r.f)()
                            ? null
                            : (0, i.jsx)(A.A, {
                                  className: p.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: function () {
                                      (0, d.X)(L, d.O.POPOUT, !0),
                                          (0, s.A)({
                                              onConfirm: async () => {
                                                  await h.A.refreshProxyTicket(n), (0, a.jp)();
                                              },
                                          });
                                  },
                                  onClosePopout: f.FXj,
                              }),
                        (0, i.jsx)(I.A, { frameId: n, className: p.BD }),
                    ],
                }),
            }),
        ],
    });
}
