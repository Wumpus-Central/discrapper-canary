"use strict";
n.d(t, { v: () => m });
var i = n(627968);
n(64700);
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
    p = n(196436),
    T = n(27600);
function m(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: m, onMouseLeave: g, onFocus: S, idle: N } = e,
        C = (0, o.h)(t),
        R = (0, u.Us)() === f.BRT.POPOUT,
        { parentAnalyticsLocation: O } = (0, l.Ay)();
    return (0, i.jsxs)("div", {
        className: T._v,
        onMouseMove: m,
        onMouseDown: n,
        onMouseLeave: g,
        children: [
            (0, i.jsx)("div", {
                className: T.K1,
                children: (0, i.jsx)(E.X, {
                    idle: N,
                    title: C?.name ?? "",
                    onJumpToChannel: S,
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
                                      (0, d.X)(O, d.O.POPOUT, !0),
                                          (0, s.A)({
                                              onConfirm: async () => {
                                                  await h.A.refreshProxyTicket({ applicationId: t }), (0, a.jp)();
                                              },
                                          });
                                  },
                                  onClosePopout: f.FXj,
                              }),
                        (0, i.jsx)(I.A, { applicationId: t, className: p.BD }),
                    ],
                }),
            }),
        ],
    });
}
