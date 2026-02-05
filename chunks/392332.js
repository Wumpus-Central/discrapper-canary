i.d(t, { A: () => x });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(158954),
    c = i(397927),
    o = i(760459),
    d = i(985018),
    u = i(851822),
    m = i(491510);
function x(e) {
    let { entries: t, viewId: i, officialGuildId: n, onClose: x, source: g } = e,
        h = t.length > 7,
        [f, j] = a.useState(!1),
        p = a.useMemo(() => t.slice(0, h && !f ? 6 : void 0), [t, h, f]);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(r.DZT, {
                className: u.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.ak8OHk),
            }),
            0 === t.length
                ? (0, l.jsx)(r.EYj, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: m.p$,
                      children: d.intl.string(d.t.R5fYVO),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: s()(m.yz, { [m.T6]: h && !f }),
                              children: (0, l.jsx)("div", {
                                  className: u.fi,
                                  children: p.map((e) =>
                                      (0, l.jsx)(
                                          o.A,
                                          { entry: e, viewId: i, onClose: x, officialGuildId: n, source: g },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          h &&
                              !f &&
                              (0, l.jsxs)(c.DUT, {
                                  className: m.ND,
                                  onClick: () => j(!0),
                                  children: [
                                      (0, l.jsx)(r.EYj, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.yohc6E),
                                      }),
                                      (0, l.jsx)(c.abt, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
