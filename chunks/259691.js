var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(939249),
    u = l(256905),
    o = l(666476),
    d = l(989145),
    c = l(932111),
    f = l(161431),
    m = l(407653),
    g = l(258576),
    p = l(792996),
    h = l(587041);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { attachmentId: t } = e,
                l = a.useContext(c.Fu),
                i = (0, f.Od)(l, t),
                v = i?.name ?? p.intl.string(g.default.ff9Q4C),
                x = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(m.A, { projectId: l, file: i, className: h.xn }), v],
                });
            return null != l && null != i && o.XB.has(i.content_type)
                ? (0, n.jsx)(s.D, {
                      tag: "span",
                      className: r()(h.Pq, h.Td),
                      onClick: async () => {
                          let e;
                          try {
                              e = await (0, d.PK)(l, i.id);
                          } catch {
                              return;
                          }
                          (0, u.R)({
                              items: [{ type: "IMAGE", url: e, alt: i.name }],
                              startingIndex: 0,
                              shouldHideMediaOptions: !0,
                              location: "ConjureChat",
                          });
                      },
                      "aria-label": p.intl.formatToPlainString(g.default.GtNukg, { name: i.name }),
                      children: x,
                  })
                : (0, n.jsx)("span", { className: h.Pq, children: x });
        },
    },
);
