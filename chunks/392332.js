n.d(t, {
    A: () => f,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(760459),
    d = n(985018),
    u = n(851822),
    m = n(491510);

function f(e) {
    let { entries: t, viewId: n, officialGuildId: i, onClose: f } = e,
        x = t.length > 7,
        [b, p] = r.useState(!1),
        g = r.useMemo(() => t.slice(0, x && !b ? 6 : void 0), [t, x, b]);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(s.DZT, {
                className: u.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.ak8OHk),
            }),
            0 === t.length
                ? (0, l.jsx)(s.EYj, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: m.p$,
                      children: d.intl.string(d.t.R5fYVO),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: a()(m.yz, {
                                  [m.T6]: x && !b,
                              }),
                              children: (0, l.jsx)("div", {
                                  className: u.fi,
                                  children: g.map((e) =>
                                      (0, l.jsx)(
                                          c.A,
                                          {
                                              entry: e,
                                              viewId: n,
                                              onClose: f,
                                              officialGuildId: i,
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          x &&
                              !b &&
                              (0, l.jsxs)(o.DUT, {
                                  className: m.ND,
                                  onClick: () => p(!0),
                                  children: [
                                      (0, l.jsx)(s.EYj, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.yohc6E),
                                      }),
                                      (0, l.jsx)(o.abt, {
                                          size: "xs",
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
