n(571269), n(298267);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(692547),
    o = n(481060),
    a = n(113434),
    u = n(26650),
    c = n(355533);
t.Z = function (e) {
    let { className: t, color: n = r.Z.colors.WHITE, quest: s, isInventory: d } = e,
        m = (0, a.qb)(e.quest),
        { percentComplete: x, completedRatioDisplay: h } = (0, a.I)(s);
    return !d && m.length > 0
        ? (0, i.jsx)(u.Z, { children: m.at(0) })
        : (0, i.jsxs)('div', {
              className: l()(c.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, i.jsxs)('div', {
                      className: c.percentCompleteWrapper,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/semibold',
                              className: c.percentCompleteLabel,
                              color: 'none',
                              children: h
                          }),
                          (0, i.jsx)('div', {
                              className: c.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - x, '%') }
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: c.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': x,
                      children: (0, i.jsx)('div', {
                          className: c.progressBarFill,
                          style: { width: ''.concat(x, '%') }
                      })
                  }),
                  m.length > 0 &&
                      (0, i.jsx)(u.Z, {
                          isInventory: d,
                          children: m.at(0)
                      })
              ]
          });
};
