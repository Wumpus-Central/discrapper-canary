"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(311907),
    u = n(397927),
    c = n(865116),
    d = n(750506),
    _ = n(540999),
    f = n(797820),
    p = n(803102),
    h = n(686757),
    m = n(820276);
function E() {
    let { debugTrackedData: e, impressions: t } = (0, h.SD)(
            (e) => ({ debugTrackedData: e.debugTrackedData, impressions: e.impressions }),
            o.x,
        ),
        n = (0, l.bG)([c.Ay], () => c.Ay.get("analytics_debugger")),
        s = (0, l.bG)([_.A], () => _.A.isDeveloper),
        [E, g] = i.useState(!1),
        { name: A, ...I } = e ?? {},
        T = null != A;
    return s && n
        ? (0, r.jsx)(d.Ay, {
              children: (0, r.jsxs)("div", {
                  className: a()(m.kL, { [m.YV]: E, [m.cn]: !T }),
                  children: [
                      (0, r.jsx)(u.DUT, {
                          className: m.VI,
                          onClick: () => {
                              g(!E);
                          },
                          children: E ? (0, r.jsx)(f.A, {}) : (0, r.jsx)(p.A, {}),
                      }),
                      (0, r.jsxs)("div", {
                          className: a()(m.Qs, { [m.Cx]: E }),
                          children: [
                              (0, r.jsxs)(u.Text, {
                                  className: a()(m.Pf, { [m.cn]: !T }),
                                  variant: "text-xxs/normal",
                                  children: [
                                      T
                                          ? (0, r.jsx)(u.yr3, { size: "md", color: "currentColor", className: m.sG })
                                          : (0, r.jsx)(u.aXh, { size: "md", color: "currentColor", className: m.jZ }),
                                      A ?? "(untracked)",
                                  ],
                              }),
                              (0, r.jsx)("div", { className: m.ss, children: JSON.stringify(I, void 0, 2) }),
                              (0, r.jsx)(u.Text, {
                                  className: a()(m.Pf, { [m.cn]: !T }),
                                  variant: "text-xxs/normal",
                                  children: "impressions stack",
                              }),
                              (0, r.jsx)("div", { className: m.t$, children: JSON.stringify(t, void 0, 2) }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
