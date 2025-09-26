r.d(t, { Z: () => p }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    s = r(793030),
    o = r(481060),
    c = r(383895),
    u = r(388032),
    d = r(226788),
    m = r(5463);
function p(e) {
    let { entries: t, viewId: r, officialGuildId: l, onClose: p } = e,
        f = t.length > 7,
        [g, j] = i.useState(!1),
        x = i.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(s.X6q, {
                className: d.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: u.intl.string(u.t.ak8OHh),
            }),
            0 === t.length
                ? (0, n.jsx)(s.xvT, {
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: m.emptyState,
                      children: u.intl.string(u.t.R5fYVF),
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: a()(m.friends, { [m.fadedEntries]: f && !g }),
                              children: (0, n.jsx)("div", {
                                  className: d.column,
                                  children: x.map((e) =>
                                      (0, n.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: r,
                                              onClose: p,
                                              officialGuildId: l,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          f &&
                              !g &&
                              (0, n.jsxs)(o.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => j(!0),
                                  children: [
                                      (0, n.jsx)(s.xvT, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.yohc6O),
                                      }),
                                      (0, n.jsx)(o.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
