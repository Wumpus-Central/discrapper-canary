n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var l = n(145641),
    r = n(322701);
function a(e) {
    let { rows: t, renderRow: n, renderSection: a, isVirtualizedList: s, hasSearchQuery: o, sectionFilter: c, footer: d } = e;
    return s
        ? (0, i.jsx)(l.Z, {
              rows: t,
              renderRow: n,
              renderSection: a,
              footer: d
          })
        : (0, i.jsx)(r.Z, {
              rows: t,
              renderRow: n,
              renderSection: a,
              sectionFilter: c,
              hasSearchQuery: o,
              footer: d
          });
}
