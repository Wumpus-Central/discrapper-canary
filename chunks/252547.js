n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(481060),
    c = n(383895),
    u = n(388032),
    d = n(226788),
    m = n(5463);
function p(e) {
    let { entries: t, viewId: n, officialGuildId: l, onClose: p } = e,
        f = t.length > 7,
        [g, x] = i.useState(!1),
        j = i.useMemo(() => t.slice(0, f && !g ? 6 : void 0), [t, f, g]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.X6, {
                className: d.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: u.intl.string(u.t.ak8OHh),
            }),
            0 === t.length
                ? (0, r.jsx)(s.xv, {
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: m.emptyState,
                      children: u.intl.string(u.t.R5fYVF),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", {
                              className: a()(m.friends, { [m.fadedEntries]: f && !g }),
                              children: (0, r.jsx)("div", {
                                  className: d.column,
                                  children: j.map((e) =>
                                      (0, r.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
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
                              (0, r.jsxs)(o.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, r.jsx)(s.xv, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.yohc6O),
                                      }),
                                      (0, r.jsx)(o.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
