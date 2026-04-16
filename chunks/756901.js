n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(518620),
    a = n(901319);
function r(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: r,
        isVirtualizedList: s,
        hasSearchQuery: o,
        sectionFilter: d,
        footer: c,
        renderSectionFooter: u,
    } = e;
    return s
        ? (0, i.jsx)(l.A, {
              rows: t,
              renderRow: n,
              renderSection: r,
              footer: c,
              sectionFilter: d,
              renderSectionFooter: u,
          })
        : (0, i.jsx)(a.A, {
              rows: t,
              renderRow: n,
              renderSection: r,
              sectionFilter: d,
              hasSearchQuery: o,
              footer: c,
              renderSectionFooter: u,
          });
}
