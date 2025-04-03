r.d(t, { Z: () => l });
var n = r(200651);
r(192379);
var a = r(793030),
    o = r(388032),
    i = r(263930);
function l(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)(a.X6, {
                      className: i.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: o.NW.string(o.t['4Byy/P'])
                  }),
                  (0, n.jsx)(a.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
