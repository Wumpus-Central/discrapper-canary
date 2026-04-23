n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(518620),
    l = n(901319);
function a(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: a,
        isVirtualizedList: r,
        hasSearchQuery: o,
        sectionFilter: c,
        footer: d,
        renderSectionFooter: u,
    } = e;
    return r
        ? (0, i.jsx)(s.A, {
              rows: t,
              renderRow: n,
              renderSection: a,
              footer: d,
              sectionFilter: c,
              renderSectionFooter: u,
          })
        : (0, i.jsx)(l.A, {
              rows: t,
              renderRow: n,
              renderSection: a,
              sectionFilter: c,
              hasSearchQuery: o,
              footer: d,
              renderSectionFooter: u,
          });
}
