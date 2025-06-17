n.d(t, { Z: () => d }), n(784620), n(973216);
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(692547),
    a = n(481060),
    l = n(113434),
    c = n(26650),
    u = n(485662);
let d = function (e) {
    let { className: t, color: n = o.Z.colors.WHITE, quest: i, isInventory: d } = e,
        m = (0, l.qb)(e.quest),
        { percentComplete: x, completedRatioDisplay: p } = (0, l.I)(i);
    return !d && m.length > 0
        ? (0, r.jsx)(c.Z, { children: m.at(0) })
        : (0, r.jsxs)('div', {
              className: s()(u.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, r.jsxs)('div', {
                      className: u.percentCompleteWrapper,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: 'text-xs/semibold',
                              className: u.percentCompleteLabel,
                              color: 'none',
                              children: p
                          }),
                          (0, r.jsx)('div', {
                              className: u.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - x, '%') }
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: u.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': x,
                      children: (0, r.jsx)('div', {
                          className: u.progressBarFill,
                          style: { width: ''.concat(x, '%') }
                      })
                  }),
                  m.length > 0 &&
                      (0, r.jsx)(c.Z, {
                          isInventory: d,
                          children: m.at(0)
                      })
              ]
          });
};
