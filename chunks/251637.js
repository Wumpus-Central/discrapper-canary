n.d(t, { A: () => d }), n(134528), n(947204);
var l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    i = n(827734),
    r = n(397927),
    o = n(890687),
    u = n(191065),
    c = n(753245);
let d = function (e) {
    let { className: t, color: n = i.A.colors.WHITE, quest: s, isInventory: d } = e,
        _ = (0, o.aC)(e.quest),
        { percentComplete: m, completedRatioDisplay: p } = (0, o.O9)(s);
    return !d && _.length > 0
        ? (0, l.jsx)(u.A, { children: _.at(0) })
        : (0, l.jsxs)("div", {
              className: a()(c.iE, t),
              style: { color: n.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: c.O,
                      children: [
                          (0, l.jsx)(r.Text, {
                              variant: "text-xs/semibold",
                              className: c.Df,
                              color: "none",
                              children: p,
                          }),
                          (0, l.jsx)("div", { className: c.Cj, style: { width: `${100 - m}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: c.hr,
                      role: "progressbar",
                      "aria-valuenow": m,
                      children: (0, l.jsx)("div", { className: c.SX, style: { width: `${m}%` } }),
                  }),
                  _.length > 0 && (0, l.jsx)(u.A, { isInventory: d, children: _.at(0) }),
              ],
          });
};
