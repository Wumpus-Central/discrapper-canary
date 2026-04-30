"use strict";
n.d(t, { v: () => I });
var i = n(627968);
n(64700);
var r = n(646865),
    s = n(795816),
    a = n(47294),
    o = n(688810),
    l = n(429913),
    u = n(384059),
    c = n(235986),
    d = n(267102),
    _ = n(447404),
    f = n(271195),
    h = n(128286),
    p = n(113854),
    E = n(262579),
    m = n(652215),
    g = n(196436),
    A = n(27600);
function I(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: I, onMouseLeave: T, onFocus: S, idle: N } = e,
        y = (0, l.h)(t),
        C = (0, d.Us)() === m.BRT.POPOUT,
        { parentAnalyticsLocation: v } = (0, o.Ay)();
    return (0, i.jsxs)("div", {
        className: A._v,
        onMouseMove: I,
        onMouseDown: n,
        onMouseLeave: T,
        children: [
            (0, i.jsx)("div", {
                className: A.K1,
                children: (0, i.jsx)(f.X, {
                    idle: N,
                    title: y?.name ?? "",
                    onJumpToChannel: S,
                    preventIdleComponent: _.A,
                }),
            }),
            (0, i.jsx)("div", {
                className: A.q6,
                children: (0, i.jsxs)(c.A, {
                    grow: 1,
                    shrink: 1,
                    justify: c.A.Justify.END,
                    align: c.A.Align.CENTER,
                    children: [
                        C || (0, r.f)()
                            ? null
                            : (0, i.jsx)(h.A, {
                                  className: g.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: () => {
                                      (0, u.X)(v, u.O.POPOUT, !0),
                                          (0, a.A)({
                                              onConfirm: async () => {
                                                  await p.A.refreshProxyTicket({ applicationId: t }), (0, s.jp)();
                                              },
                                          });
                                  },
                                  onClosePopout: m.FXj,
                              }),
                        (0, i.jsx)(E.A, { applicationId: t, className: g.BD }),
                    ],
                }),
            }),
        ],
    });
}
