a.d(t, { n: () => d });
var n = a(627968),
    l = a(64700),
    i = a(834730),
    s = a(939249),
    r = a(147925),
    o = a(53181);
function d(e) {
    let { title: t, initExpanded: a, highlightMode: d = "none", children: c } = e,
        [u, m] = l.useState(a),
        h = l.useCallback(() => {
            m(!u);
        }, [u]),
        p = "migrated" === d || "migrated-root" === d ? void 0 : "status-warning",
        x = (e) => (0, n.jsx)(i.E, { variant: e, color: p, children: t });
    return null == c
        ? (0, n.jsx)("div", { className: o.NF, children: x("text-md/normal") })
        : (0, n.jsxs)("div", {
              className: o.NF,
              children: [
                  (0, n.jsxs)(s.D, {
                      className: o.jr,
                      onClick: h,
                      children: [
                          x("text-md/bold"),
                          (0, n.jsx)(r.A, {
                              direction: u ? r.A.Directions.DOWN : r.A.Directions.RIGHT,
                              className: o.D,
                          }),
                      ],
                  }),
                  u && (0, n.jsx)("div", { className: o.m4, children: c }),
              ],
          });
}
