r.d(t, { Z: () => f }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(120356),
    l = r.n(i),
    o = r(793030),
    s = r(481060),
    c = r(383895),
    u = r(388032),
    d = r(226788),
    m = r(5463);
function f(e) {
    let { entries: t, viewId: r, officialGuildId: i, onClose: f } = e,
        g = t.length > 7,
        [p, x] = a.useState(!1),
        v = a.useMemo(() => t.slice(0, g && !p ? 6 : void 0), [t, g, p]);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(o.X6, {
                className: d.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: u.intl.string(u.t.ak8OHh),
            }),
            0 === t.length
                ? (0, n.jsx)(o.xv, {
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: m.emptyState,
                      children: u.intl.string(u.t.R5fYVF),
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: l()(m.friends, { [m.fadedEntries]: g && !p }),
                              children: (0, n.jsx)("div", {
                                  className: d.column,
                                  children: v.map((e) =>
                                      (0, n.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: r,
                                              onClose: f,
                                              officialGuildId: i,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          g &&
                              !p &&
                              (0, n.jsxs)(s.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, n.jsx)(o.xv, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.yohc6O),
                                      }),
                                      (0, n.jsx)(s.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
