n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(793030),
    a = n(388032),
    l = n(561526);
function o(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(r.X6, {
                      className: l.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: a.intl.string(a.t['4Byy/P'])
                  }),
                  (0, i.jsx)(r.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
