n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(481060),
    c = n(383895),
    d = n(388032),
    u = n(226788),
    m = n(5463);
function f(e) {
    let { entries: t, viewId: n, officialGuildId: l, onClose: f } = e,
        p = t.length > 7,
        [g, x] = i.useState(!1),
        h = i.useMemo(() => t.slice(0, p && !g ? 6 : void 0), [t, p, g]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.X6q, {
                className: u.sectionHeader,
                variant: "text-md/semibold",
                color: "header-primary",
                children: d.intl.string(d.t.ak8OHk),
            }),
            0 === t.length
                ? (0, r.jsx)(s.xvT, {
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: m.emptyState,
                      children: d.intl.string(d.t.R5fYVO),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", {
                              className: a()(m.friends, { [m.fadedEntries]: p && !g }),
                              children: (0, r.jsx)("div", {
                                  className: u.column,
                                  children: h.map((e) =>
                                      (0, r.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: f,
                                              officialGuildId: l,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          p &&
                              !g &&
                              (0, r.jsxs)(o.P3F, {
                                  className: m.expandEntriesButton,
                                  onClick: () => x(!0),
                                  children: [
                                      (0, r.jsx)(s.xvT, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-normal",
                                          children: d.intl.string(d.t.yohc6E),
                                      }),
                                      (0, r.jsx)(o.CJ0, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
