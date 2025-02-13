n.d(t, { Z: () => c }), n(571269), n(298267);
var s = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    r = n(481060),
    o = n(113434),
    d = n(26650),
    u = n(526668);
let c = function (e) {
    let { className: t, color: n = a.Z.colors.WHITE, quest: i, isInventory: c } = e,
        m = (0, o.qb)(e.quest),
        { percentComplete: x, completedRatioDisplay: h } = (0, o.I)(i);
    return !c && m.length > 0
        ? (0, s.jsx)(d.Z, { children: m.at(0) })
        : (0, s.jsxs)('div', {
              className: l()(u.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, s.jsxs)('div', {
                      className: u.percentCompleteWrapper,
                      children: [
                          (0, s.jsx)(r.Text, {
                              variant: 'text-xs/semibold',
                              className: u.percentCompleteLabel,
                              color: 'none',
                              children: h
                          }),
                          (0, s.jsx)('div', {
                              className: u.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - x, '%') }
                          })
                      ]
                  }),
                  (0, s.jsx)('div', {
                      className: u.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': x,
                      children: (0, s.jsx)('div', {
                          className: u.progressBarFill,
                          style: { width: ''.concat(x, '%') }
                      })
                  }),
                  m.length > 0 &&
                      (0, s.jsx)(d.Z, {
                          isInventory: c,
                          children: m.at(0)
                      })
              ]
          });
};
