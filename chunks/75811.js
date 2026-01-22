n.d(t, {
    j: () => c,
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(200063);

function c(e) {
    let { chunks: t, columns: n, className: i } = e,
        c = r.useMemo(
            () => ({
                "--secure-frames-columns": n,
            }),
            [n],
        );
    return null == t
        ? (0, l.jsx)("div", {
              className: o.Lq,
              children: (0, l.jsx)(s.y$y, {}),
          })
        : (0, l.jsx)("div", {
              style: c,
              className: a()(o.aY, i),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: a()(o.iv, {
                              [o.yF]: t > n - 1,
                          }),
                          children: (0, l.jsx)(s.Text, {
                              className: o.ph,
                              variant: "code",
                              color: "text-default",
                              children: e,
                          }),
                      },
                      "".concat(e, "-").concat(t),
                  ),
              ),
          });
}
