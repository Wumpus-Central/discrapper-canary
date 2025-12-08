n.d(t, { Z: () => d }), n(784620), n(973216);
var l = n(54381);
n(473749);
var r = n(120356),
    s = n.n(r),
    i = n(692547),
    o = n(481060),
    a = n(968843),
    u = n(141707),
    c = n(905889);
let d = function (e) {
    let { className: t, color: n = i.Z.colors.WHITE, quest: r, isInventory: d } = e,
        E = (0, a.qb)(e.quest),
        { percentComplete: m, completedRatioDisplay: p } = (0, a.I)(r);
    return !d && E.length > 0
        ? (0, l.jsx)(u.Z, { children: E.at(0) })
        : (0, l.jsxs)("div", {
              className: s()(c.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: c.percentCompleteWrapper,
                      children: [
                          (0, l.jsx)(o.Text, {
                              variant: "text-xs/semibold",
                              className: c.percentCompleteLabel,
                              color: "none",
                              children: p,
                          }),
                          (0, l.jsx)("div", {
                              className: c.percentCompleteLabelOffset,
                              style: { width: "".concat(100 - m, "%") },
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: c.progressBar,
                      role: "progressbar",
                      "aria-valuenow": m,
                      children: (0, l.jsx)("div", {
                          className: c.progressBarFill,
                          style: { width: "".concat(m, "%") },
                      }),
                  }),
                  E.length > 0 &&
                      (0, l.jsx)(u.Z, {
                          isInventory: d,
                          children: E.at(0),
                      }),
              ],
          });
};
