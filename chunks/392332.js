n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(534514),
    o = n(834730),
    c = n(939249),
    d = n(847374),
    u = n(760459),
    m = n(985018),
    h = n(141535),
    f = n(759203);
function _(e) {
    let { entries: t, viewId: n, officialGuildId: i, onClose: _, source: g } = e,
        p = t.length > 7,
        [x, E] = a.useState(!1),
        A = a.useMemo(() => t.slice(0, p && !x ? 6 : void 0), [t, p, x]);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(s.D, {
                className: h.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: m.intl.string(m.t.ak8OHk),
            }),
            0 === t.length
                ? (0, l.jsx)(o.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: f.p$,
                      children: m.intl.string(m.t.R5fYVO),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: r()(f.yz, { [f.T6]: p && !x }),
                              children: (0, l.jsx)("div", {
                                  className: h.fi,
                                  children: A.map((e) =>
                                      (0, l.jsx)(
                                          u.A,
                                          { entry: e, viewId: n, onClose: _, officialGuildId: i, source: g },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          p &&
                              !x &&
                              (0, l.jsxs)(c.D, {
                                  className: f.ND,
                                  onClick: () => E(!0),
                                  children: [
                                      (0, l.jsx)(o.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: m.intl.string(m.t.yohc6E),
                                      }),
                                      (0, l.jsx)(d.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
