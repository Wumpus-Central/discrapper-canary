n.d(t, { Z: () => f }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(793030),
    s = n(481060),
    c = n(383895),
    d = n(388032),
    u = n(452379),
    m = n(3628);
function f(e) {
    let { entries: t, viewId: n, officialGuildId: r, onClose: f } = e,
        g = t.length > 7,
        [p, x] = i.useState(!1),
        v = i.useMemo(() => t.slice(0, g && !p ? 6 : void 0), [t, g, p]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(o.X6q, {
                className: u.sectionHeader,
                variant: "text-md/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.ak8OHk),
            }),
            0 === t.length
                ? (0, a.jsx)(o.xvT, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVO),
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: l()(m.friends, { [m.fadedEntries]: g && !p }),
                              children: (0, a.jsx)("div", {
                                  className: u.column,
                                  children: v.map((e) =>
                                      (0, a.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: f,
                                              officialGuildId: r,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          g &&
                              !p &&
                              (0, a.jsxs)(s.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, a.jsx)(o.xvT, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.yohc6E),
                                      }),
                                      (0, a.jsx)(s.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
