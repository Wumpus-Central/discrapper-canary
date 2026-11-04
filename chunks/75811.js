var s = r(477900),
    a = r(582128),
    n = r(503698),
    u = r.n(n),
    t = r(289873),
    c = r(834730),
    d = r(873353);
r.d(
    l,
    {},
    {
        j: function (e) {
            let { chunks: l, columns: r, className: n } = e,
                i = a.useMemo(() => ({ "--secure-frames-columns": r }), [r]);
            return null == l
                ? (0, s.jsx)("div", { className: d.Lq, children: (0, s.jsx)(t.y, {}) })
                : (0, s.jsx)("div", {
                      style: i,
                      className: u()(d.aY, n),
                      children: l.map((e, l) =>
                          (0, s.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      l > 0 && l % r == 0 && (0, s.jsx)("hr", { className: d.yF }),
                                      (0, s.jsx)("div", {
                                          className: d.iv,
                                          children: (0, s.jsx)(c.E, {
                                              className: d.ph,
                                              variant: "mono-md/bold",
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
        },
    },
);
