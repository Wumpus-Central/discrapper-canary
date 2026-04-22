n.d(t, { A: () => f });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(534514),
    o = n(834730),
    d = n(939249),
    c = n(847374),
    u = n(760459),
    m = n(985018),
    _ = n(141535),
    h = n(759203);
function f(e) {
    let { entries: t, viewId: n, officialGuildId: i, onClose: f, source: g } = e,
        p = t.length > 7,
        [x, b] = l.useState(!1),
        A = l.useMemo(() => t.slice(0, p && !x ? 6 : void 0), [t, p, x]);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(s.D, {
                className: _.bV,
                variant: "text-md/semibold",
                color: "text-strong",
                children: m.intl.string(m.t.ak8OHk),
            }),
            0 === t.length
                ? (0, a.jsx)(o.E, {
                      variant: "text-xs/semibold",
                      color: "text-strong",
                      className: h.p$,
                      children: m.intl.string(m.t.R5fYVO),
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("div", {
                              className: r()(h.yz, { [h.T6]: p && !x }),
                              children: (0, a.jsx)("div", {
                                  className: _.fi,
                                  children: A.map((e) =>
                                      (0, a.jsx)(
                                          u.A,
                                          { entry: e, viewId: n, onClose: f, officialGuildId: i, source: g },
                                          e.id,
                                      ),
                                  ),
                              }),
                          }),
                          p &&
                              !x &&
                              (0, a.jsxs)(d.D, {
                                  className: h.ND,
                                  onClick: () => b(!0),
                                  children: [
                                      (0, a.jsx)(o.E, {
                                          variant: "text-xs/semibold",
                                          color: "interactive-text-default",
                                          children: m.intl.string(m.t.yohc6E),
                                      }),
                                      (0, a.jsx)(c.a, { size: "xs" }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
