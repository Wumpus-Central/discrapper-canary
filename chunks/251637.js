n.d(t, { A: () => c }), n(134528), n(947204);
var l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(827734),
    i = n(834730),
    o = n(890687),
    u = n(191065),
    d = n(431540);
let c = function (e) {
    let { className: t, color: n = r.A.colors.WHITE, quest: s, isInventory: c } = e,
        p = (0, o.aC)(e.quest),
        { percentComplete: m, completedRatioDisplay: f } = (0, o.O9)(s);
    return !c && p.length > 0
        ? (0, l.jsx)(u.A, { children: p.at(0) })
        : (0, l.jsxs)("div", {
              className: a()(d.iE, t),
              style: { color: n.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: d.O,
                      children: [
                          (0, l.jsx)(i.E, { variant: "text-xs/semibold", className: d.Df, color: "none", children: f }),
                          (0, l.jsx)("div", { className: d.Cj, style: { width: `${100 - m}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: d.hr,
                      role: "progressbar",
                      "aria-valuenow": m,
                      children: (0, l.jsx)("div", { className: d.SX, style: { width: `${m}%` } }),
                  }),
                  p.length > 0 && (0, l.jsx)(u.A, { isInventory: c, children: p.at(0) }),
              ],
          });
};
