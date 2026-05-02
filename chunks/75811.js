s.d(l, { j: () => o });
var r = s(627968),
    n = s(64700),
    t = s(503698),
    a = s.n(t),
    c = s(289873),
    u = s(834730),
    i = s(686052);
function o(e) {
    let { chunks: l, columns: s, className: t } = e,
        o = n.useMemo(() => ({ "--secure-frames-columns": s }), [s]);
    return null == l
        ? (0, r.jsx)("div", { className: i.Lq, children: (0, r.jsx)(c.y, {}) })
        : (0, r.jsx)("div", {
              style: o,
              className: a()(i.aY, t),
              children: l.map((e, l) =>
                  (0, r.jsxs)(
                      n.Fragment,
                      {
                          children: [
                              l > 0 && l % s == 0 && (0, r.jsx)("hr", { className: i.yF }),
                              (0, r.jsx)("div", {
                                  className: i.iv,
                                  children: (0, r.jsx)(u.E, {
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
