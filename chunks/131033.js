n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(793030),
    a = n(388032),
    l = n(561526);
function o(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(i.X6, {
                      className: l.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: a.intl.string(a.t['4Byy/P'])
                  }),
                  (0, r.jsx)(i.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
