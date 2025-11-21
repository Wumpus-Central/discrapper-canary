n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(502762),
    c = n(388032),
    u = n(588472);
function d(e) {
    let { renderCards: t, heading: n, onExpand: a } = e,
        d = i.useId(),
        f = i.useMemo(() => t({ className: u.card }), [t]),
        [_] = f;
    return 0 === f.length
        ? null
        : (0, r.jsxs)("section", {
              "aria-labelledby": null != n ? d : void 0,
              className: u.container,
              children: [
                  null != n &&
                      (0, r.jsx)(s.nn4, {
                          children: (0, r.jsx)(s.H, {
                              id: d,
                              children: n,
                          }),
                      }),
                  (0, r.jsxs)("ul", {
                      className: o()(u.cardsList, f.length > 1 && u.hasMultipleCards),
                      "aria-labelledby": null != n ? d : void 0,
                      tabIndex: -1,
                      children: [
                          (0, r.jsx)("li", {
                              className: u.firstCardContainer,
                              children: _,
                          }),
                          f.length > 1 &&
                              (0, r.jsx)(s.P3F, {
                                  tag: "li",
                                  className: u.backgroundCardContainer,
                                  onClick: a,
                                  "aria-label": c.intl.string(c.t["OBCR+p"]),
                                  children: (0, r.jsx)(l.Z.Overlay, {
                                      className: u.backgroundCard,
                                      children: null,
                                  }),
                              }),
                      ],
                  }),
              ],
          });
}
