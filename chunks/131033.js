r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var a = r(793030),
    i = r(388032),
    l = r(263930);
function s(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)(a.X6, {
                      className: l.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: i.NW.string(i.t['4Byy/P'])
                  }),
                  (0, n.jsx)(a.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
