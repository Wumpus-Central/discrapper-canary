"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(311907),
    u = n(939249),
    c = n(834730),
    d = n(628284),
    _ = n(285796),
    f = n(865116),
    p = n(750506),
    h = n(540999),
    E = n(797820),
    m = n(803102),
    g = n(686757),
    A = n(820276);
function I() {
    let { debugTrackedData: e, impressions: t } = (0, g.SD)(
            (e) => ({ debugTrackedData: e.debugTrackedData, impressions: e.impressions }),
            o.x,
        ),
        n = (0, l.bG)([f.Ay], () => f.Ay.get("analytics_debugger")),
        s = (0, l.bG)([h.A], () => h.A.isDeveloper),
        [I, T] = i.useState(!1),
        { name: S, ...y } = e ?? {},
        N = null != S;
    return s && n
        ? (0, r.jsx)(p.Ay, {
              children: (0, r.jsxs)("div", {
                  className: a()(A.kL, { [A.YV]: I, [A.cn]: !N }),
                  children: [
                      (0, r.jsx)(u.D, {
                          className: A.VI,
                          onClick: () => {
                              T(!I);
                          },
                          children: I ? (0, r.jsx)(E.A, {}) : (0, r.jsx)(m.A, {}),
                      }),
                      (0, r.jsxs)("div", {
                          className: a()(A.Qs, { [A.Cx]: I }),
                          children: [
                              (0, r.jsxs)(c.E, {
                                  className: a()(A.Pf, { [A.cn]: !N }),
                                  variant: "text-xxs/normal",
                                  children: [
                                      N
                                          ? (0, r.jsx)(d.y, { size: "md", color: "currentColor", className: A.sG })
                                          : (0, r.jsx)(_.a, { size: "md", color: "currentColor", className: A.jZ }),
                                      S ?? "(untracked)",
                                  ],
                              }),
                              (0, r.jsx)("div", { className: A.ss, children: JSON.stringify(y, void 0, 2) }),
                              (0, r.jsx)(c.E, {
                                  className: a()(A.Pf, { [A.cn]: !N }),
                                  variant: "text-xxs/normal",
                                  children: "impressions stack",
                              }),
                              (0, r.jsx)("div", { className: A.t$, children: JSON.stringify(t, void 0, 2) }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
