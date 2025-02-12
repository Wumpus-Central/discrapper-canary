n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var a = n(793030),
    i = n(388032),
    o = n(959559);
function l(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(a.X6, {
                      className: o.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: i.intl.string(i.t['4Byy/P'])
                  }),
                  (0, r.jsx)(a.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
