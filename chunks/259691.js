var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(939249),
    u = l(256905),
    o = l(666476),
    d = l(989145),
    c = l(932111),
    f = l(161431),
    m = l(407653),
    g = l(191850),
    p = l(792996),
    h = l(587041);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { attachmentId: t } = e,
                l = a.useContext(c.Fu),
                r = (0, f.Od)(l, t),
                b = r?.name ?? p.intl.string(g.default.ff9Q4C),
                x = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(m.A, { projectId: l, file: r, className: h.xn }), b],
                });
            return null != l && null != r && o.XB.has(r.content_type)
                ? (0, n.jsx)(s.D, {
                      tag: "span",
                      className: i()(h.Pq, h.Td),
                      onClick: async () => {
                          let e;
                          try {
                              e = await (0, d.PK)(l, r.id);
                          } catch {
                              return;
                          }
                          (0, u.R)({
                              items: [{ type: "IMAGE", url: e, alt: r.name }],
                              startingIndex: 0,
                              shouldHideMediaOptions: !0,
                              location: "ConjureChat",
                          });
                      },
                      "aria-label": p.intl.formatToPlainString(g.default.GtNukg, { name: r.name }),
                      children: x,
                  })
                : (0, n.jsx)("span", { className: h.Pq, children: x });
        },
    },
);
