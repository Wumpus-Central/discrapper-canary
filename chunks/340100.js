n.d(t, { Z: () => d }), n(571269), n(298267);
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(692547),
    l = n(481060),
    a = n(113434),
    c = n(26650),
    u = n(306983);
let d = function (e) {
    let { className: t, color: n = o.Z.colors.WHITE, quest: s, isInventory: d } = e,
        m = (0, a.qb)(e.quest),
        { percentComplete: p, completedRatioDisplay: x } = (0, a.I)(s);
    return !d && m.length > 0
        ? (0, r.jsx)(c.Z, { children: m.at(0) })
        : (0, r.jsxs)('div', {
              className: i()(u.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, r.jsxs)('div', {
                      className: u.percentCompleteWrapper,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-xs/semibold',
                              className: u.percentCompleteLabel,
                              color: 'none',
                              children: x
                          }),
                          (0, r.jsx)('div', {
                              className: u.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - p, '%') }
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: u.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': p,
                      children: (0, r.jsx)('div', {
                          className: u.progressBarFill,
                          style: { width: ''.concat(p, '%') }
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
