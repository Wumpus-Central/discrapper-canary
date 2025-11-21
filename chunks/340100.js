n.d(t, { Z: () => d }), n(784620), n(973216);
var r = n(54381);
n(473749);
var l = n(120356),
    s = n.n(l),
    i = n(692547),
    a = n(481060),
    o = n(313481),
    u = n(141707),
    c = n(905889);
let d = function (e) {
    let { className: t, color: n = i.Z.colors.WHITE, quest: l, isInventory: d } = e,
        p = (0, o.qb)(e.quest),
        { percentComplete: f, completedRatioDisplay: m } = (0, o.I)(l);
    return !d && p.length > 0
        ? (0, r.jsx)(u.Z, { children: p.at(0) })
        : (0, r.jsxs)("div", {
              className: s()(c.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, r.jsxs)("div", {
                      className: c.percentCompleteWrapper,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/semibold",
                              className: c.percentCompleteLabel,
                              color: "none",
                              children: m,
                          }),
                          (0, r.jsx)("div", {
                              className: c.percentCompleteLabelOffset,
                              style: { width: "".concat(100 - f, "%") },
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: c.progressBar,
                      role: "progressbar",
                      "aria-valuenow": f,
                      children: (0, r.jsx)("div", {
                          className: c.progressBarFill,
                          style: { width: "".concat(f, "%") },
                      }),
                  }),
                  p.length > 0 &&
                      (0, r.jsx)(u.Z, {
                          isInventory: d,
                          children: p.at(0),
                      }),
              ],
          });
};
