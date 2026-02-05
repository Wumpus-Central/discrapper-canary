n.d(t, { j: () => c });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(200063);
function c(e) {
    let { chunks: t, columns: n, className: a } = e,
        c = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, i.jsx)("div", { className: o.Lq, children: (0, i.jsx)(r.y$y, {}) })
        : (0, i.jsx)("div", {
              style: c,
              className: s()(o.aY, a),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: s()(o.iv, { [o.yF]: t > n - 1 }),
                          children: (0, i.jsx)(r.Text, {
                              className: o.ph,
                              variant: "code",
                              color: "text-default",
                              children: e,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
