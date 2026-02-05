"use strict";
n.d(t, { M: () => I });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(732955),
    l = n(397927),
    u = n(688810),
    c = n(937008),
    d = n(156312),
    _ = n(482132),
    f = n(921925),
    p = n(592362),
    h = n(510022),
    m = n(317560),
    g = n(366523),
    E = n(985018),
    A = n(552696);
function I(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, u.Ay)(),
        { skusById: a, selectedSkuId: I, application: T } = (0, d.P5)(),
        { isGift: y, giftRecipient: S } = (0, c.Pv)();
    s()(null != I, "Expected selectedSkuId"), s()(null != T, "Expected application");
    let v = a[I];
    return (s()(null != v, "Expected sku"),
    i.useEffect(() => {
        y || ((0, m.j)(), t(), (0, h.n)({ sku: v, application: T, analyticsLocations: n }));
    }, [y, v, T, t, n]),
    y)
        ? (0, r.jsxs)(_.dZ, {
              children: [
                  (0, r.jsx)(p.A, {}),
                  (0, r.jsx)(f.A, {}),
                  (0, r.jsxs)("div", {
                      className: A.EL,
                      children: [
                          (0, r.jsx)(g.e, { sku: v, shape: "square", containerClassName: A.LC }),
                          (0, r.jsx)(l.Heading, {
                              variant: "heading-xl/semibold",
                              className: A.RS,
                              children: E.intl.string(E.t["5glWta"]),
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: A.Kz,
                              children: E.intl.formatToPlainString(E.t["2VjPTw"], {
                                  itemName: v.name,
                                  giftRecipient: S?.username ?? "your recipient",
                              }),
                          }),
                          (0, r.jsx)(o.$nd, { onClick: t, text: E.intl.string(E.t.cpT0Cq), fullWidth: !0 }),
                      ],
                  }),
              ],
          })
        : null;
}
