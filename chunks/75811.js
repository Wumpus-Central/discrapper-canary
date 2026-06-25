r.d(l, { j: () => d });
var s = r(627968),
    a = r(64700),
    n = r(503698),
    u = r.n(n),
    t = r(289873),
    c = r(834730),
    i = r(836004);
function d(e) {
    let { chunks: l, columns: r, className: n } = e,
        d = a.useMemo(() => ({ "--secure-frames-columns": r }), [r]);
    return null == l
        ? (0, s.jsx)("div", { className: i.Lq, children: (0, s.jsx)(t.y, {}) })
        : (0, s.jsx)("div", {
              style: d,
              className: u()(i.aY, n),
              children: l.map((e, l) =>
                  (0, s.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              l > 0 && l % r == 0 && (0, s.jsx)("hr", { className: i.yF }),
                              (0, s.jsx)("div", {
                                  className: i.iv,
                                  children: (0, s.jsx)(c.E, {
                                      className: i.ph,
                                      variant: "code",
                                      color: "text-default",
                                      children: e,
                                  }),
                              }),
                          ],
                      },
                      `${e}-${l}`,
                  ),
              ),
          });
}
