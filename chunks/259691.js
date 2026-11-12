var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(939249),
    o = l(256905),
    u = l(666476),
    d = l(989145),
    c = l(932111),
    f = l(161431),
    m = l(407653),
    p = l(191850),
    g = l(792996),
    v = l(587041);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { attachmentId: t } = e,
                l = a.useContext(c.Fu),
                r = (0, f.Od)(l, t),
                h = r?.name ?? g.intl.string(p.default.ff9Q4C),
                x = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(m.A, { projectId: l, file: r, className: v.xn }), h],
                });
            return null != l && null != r && u.XB.has(r.content_type)
                ? (0, n.jsx)(s.D, {
                      tag: "span",
                      className: i()(v.Pq, v.Td),
                      onClick: async () => {
                          let e;
                          try {
                              e = await (0, d.PK)(l, r.id);
                          } catch {
                              return;
                          }
                          (0, o.R)({
                              items: [{ type: "IMAGE", url: e, alt: r.name }],
                              startingIndex: 0,
                              shouldHideMediaOptions: !0,
                              location: "ConjureChat",
                          });
                      },
                      "aria-label": g.intl.formatToPlainString(p.default.GtNukg, { name: r.name }),
                      children: x,
                  })
                : (0, n.jsx)("span", { className: v.Pq, children: x });
        },
    },
);
