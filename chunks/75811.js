n.d(t, { j: () => d });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(289873),
    o = n(834730),
    c = n(686052);
function d(e) {
    let { chunks: t, columns: n, className: a } = e,
        d = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, i.jsx)("div", { className: c.Lq, children: (0, i.jsx)(r.y, {}) })
        : (0, i.jsx)("div", {
              style: d,
              className: s()(c.aY, a),
              children: t.map((e, t) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              t > 0 && t % n == 0 && (0, i.jsx)("hr", { className: c.yF }),
                              (0, i.jsx)("div", {
                                  className: c.iv,
                                  children: (0, i.jsx)(o.E, {
                                      className: c.ph,
                                      variant: "code",
                                      color: "text-default",
                                      children: e,
                                  }),
                              }),
                          ],
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
