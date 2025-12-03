n.d(t, { Z: () => g }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    s = n(793030),
    o = n(481060),
    c = n(383895),
    d = n(388032),
    u = n(226788),
    m = n(5463);
function g(e) {
    let { entries: t, viewId: n, officialGuildId: r, onClose: g } = e,
        f = t.length > 7,
        [p, x] = i.useState(!1),
        h = i.useMemo(() => t.slice(0, f && !p ? 6 : void 0), [t, f, p]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(s.X6q, {
                className: u.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: d.intl.string(d.t.ak8OHk),
            }),
            0 === t.length
                ? (0, a.jsx)(s.xvT, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVO),
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: l()(m.friends, { [m.fadedEntries]: f && !p }),
                              children: (0, a.jsx)("div", {
                                  className: u.column,
                                  children: h.map((e) =>
                                      (0, a.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: g,
                                              officialGuildId: r,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          f &&
                              !p &&
                              (0, a.jsxs)(o.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, a.jsx)(s.xvT, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: d.intl.string(d.t.yohc6E),
                                      }),
                                      (0, a.jsx)(o.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
