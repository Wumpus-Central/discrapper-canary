r.d(t, { Z: () => s });
var n = r(255367);
r(73800);
var i = r(793030),
    a = r(388032),
    l = r(263930);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)(i.X6, {
                      className: l.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: a.intl.string(a.t['4Byy/P'])
                  }),
                  (0, n.jsx)(i.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
