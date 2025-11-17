n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(145641),
    l = n(322701);
function a(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: a,
        isVirtualizedList: s,
        hasSearchQuery: o,
        sectionFilter: c,
        footer: u,
    } = e;
    return s
        ? (0, r.jsx)(i.Z, {
              rows: t,
              renderRow: n,
              renderSection: a,
              footer: u,
          })
        : (0, r.jsx)(l.Z, {
              rows: t,
              renderRow: n,
              renderSection: a,
              sectionFilter: c,
              hasSearchQuery: o,
              footer: u,
          });
}
