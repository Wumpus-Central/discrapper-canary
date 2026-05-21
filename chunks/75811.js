"use strict";
n.d(t, { j: () => c });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(289873),
    l = n(834730),
    u = n(686052);
function c(e) {
    let { chunks: t, columns: n, className: s } = e,
        c = r.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, i.jsx)("div", { className: u.Lq, children: (0, i.jsx)(o.y, {}) })
        : (0, i.jsx)("div", {
              style: c,
              className: a()(u.aY, s),
              children: t.map((e, t) =>
                  (0, i.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              t > 0 && t % n == 0 && (0, i.jsx)("hr", { className: u.yF }),
                              (0, i.jsx)("div", {
                                  className: u.iv,
                                  children: (0, i.jsx)(l.E, {
                                      className: u.ph,
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
