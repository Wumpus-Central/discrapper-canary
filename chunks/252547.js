r.d(t, { Z: () => g }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(793030),
    s = r(481060),
    c = r(383895),
    d = r(388032),
    u = r(110568),
    m = r(559537);
function g(e) {
    let { entries: t, viewId: r, officialGuildId: i, onClose: g } = e,
        p = t.length > 7,
        [f, x] = a.useState(!1),
        j = a.useMemo(() => t.slice(0, p && !f ? 6 : void 0), [t, p, f]);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(o.X6, {
                className: u.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: d.intl.string(d.t.ak8OHh),
            }),
            0 === t.length
                ? (0, n.jsx)(o.xv, {
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVF),
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: l()(m.friends, { [m.fadedEntries]: p && !f }),
                              children: (0, n.jsx)("div", {
                                  className: u.column,
                                  children: j.map((e) =>
                                      (0, n.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: r,
                                              onClose: g,
                                              officialGuildId: i,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          p &&
                              !f &&
                              (0, n.jsxs)(s.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, n.jsx)(o.xv, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: d.intl.string(d.t.yohc6O),
                                      }),
                                      (0, n.jsx)(s.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
