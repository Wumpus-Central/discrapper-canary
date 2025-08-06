n.d(t, { Z: () => d }), n(784620), n(973216);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(692547),
    s = n(481060),
    l = n(113434),
    c = n(26650),
    u = n(485662);
let d = function (e) {
    let { className: t, color: n = a.Z.colors.WHITE, quest: i, isInventory: d } = e,
        f = (0, l.qb)(e.quest),
        { percentComplete: _, completedRatioDisplay: p } = (0, l.I)(i);
    return !d && f.length > 0
        ? (0, r.jsx)(c.Z, { children: f.at(0) })
        : (0, r.jsxs)("div", {
              className: o()(u.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, r.jsxs)("div", {
                      className: u.percentCompleteWrapper,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-xs/semibold",
                              className: u.percentCompleteLabel,
                              color: "none",
                              children: p,
                          }),
                          (0, r.jsx)("div", {
                              className: u.percentCompleteLabelOffset,
                              style: { width: "".concat(100 - _, "%") },
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: u.progressBar,
                      role: "progressbar",
                      "aria-valuenow": _,
                      children: (0, r.jsx)("div", {
                          className: u.progressBarFill,
                          style: { width: "".concat(_, "%") },
                      }),
                  }),
                  f.length > 0 &&
                      (0, r.jsx)(c.Z, {
                          isInventory: d,
                          children: f.at(0),
                      }),
              ],
          });
};
