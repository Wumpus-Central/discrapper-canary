n.d(t, { Z: () => f }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    s = n(793030),
    o = n(481060),
    c = n(383895),
    d = n(388032),
    u = n(226788),
    m = n(5463);
function f(e) {
    let { entries: t, viewId: n, officialGuildId: r, onClose: f } = e,
        g = t.length > 7,
        [p, x] = l.useState(!1),
        h = l.useMemo(() => t.slice(0, g && !p ? 6 : void 0), [t, g, p]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.X6q, {
                className: u.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: d.intl.string(d.t.ak8OHk),
            }),
            0 === t.length
                ? (0, i.jsx)(s.xvT, {
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVO),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: a()(m.friends, { [m.fadedEntries]: g && !p }),
                              children: (0, i.jsx)("div", {
                                  className: u.column,
                                  children: h.map((e) =>
                                      (0, i.jsx)(
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
                              (0, i.jsxs)(o.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, i.jsx)(s.xvT, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: d.intl.string(d.t.yohc6E),
                                      }),
                                      (0, i.jsx)(o.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
