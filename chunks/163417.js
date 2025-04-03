n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(145641),
    l = n(322701);
function a(e) {
    let { rows: t, renderRow: n, renderSection: a, isVirtualizedList: o, hasSearchQuery: s, sectionFilter: c, footer: u } = e;
    return o
        ? (0, r.jsx)(i.Z, {
              rows: t,
              renderRow: n,
              renderSection: a,
              footer: u
          })
        : (0, r.jsx)(l.Z, {
              rows: t,
              renderRow: n,
              renderSection: a,
              sectionFilter: c,
              hasSearchQuery: s,
              footer: u
          });
}
