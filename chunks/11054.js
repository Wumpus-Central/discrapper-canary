n.d(t, { M: () => y });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(732955),
    l = n(397927),
    c = n(688810),
    u = n(937008),
    d = n(156312),
    f = n(482132),
    p = n(921925),
    _ = n(592362),
    h = n(510022),
    m = n(317560),
    g = n(366523),
    E = n(985018),
    b = n(552696);
function y(e) {
    var t;
    let { handleClose: n } = e,
        { analyticsLocations: a } = (0, c.Ay)(),
        { skusById: y, selectedSkuId: O, application: A } = (0, d.P5)(),
        { isGift: v, giftRecipient: S } = (0, u.Pv)();
    s()(null != O, "Expected selectedSkuId"), s()(null != A, "Expected application");
    let I = y[O];
    return (s()(null != I, "Expected sku"),
    i.useEffect(() => {
        v ||
            ((0, m.j)(),
            n(),
            (0, h.n)({
                sku: I,
                application: A,
                analyticsLocations: a,
            }));
    }, [v, I, A, n, a]),
    v)
        ? (0, r.jsxs)(f.dZ, {
              children: [
                  (0, r.jsx)(_.A, {}),
                  (0, r.jsx)(p.A, {}),
                  (0, r.jsxs)("div", {
                      className: b.EL,
                      children: [
                          (0, r.jsx)(g.e, {
                              sku: I,
                              shape: "square",
                              containerClassName: b.LC,
                          }),
                          (0, r.jsx)(l.Heading, {
                              variant: "heading-xl/semibold",
                              className: b.RS,
                              children: E.intl.string(E.t["5glWta"]),
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: b.Kz,
                              children: E.intl.formatToPlainString(E.t["2VjPTw"], {
                                  itemName: I.name,
                                  giftRecipient: null != (t = null == S ? void 0 : S.username) ? t : "your recipient",
                              }),
                          }),
                          (0, r.jsx)(o.$nd, {
                              onClick: n,
                              text: E.intl.string(E.t.cpT0Cq),
                              fullWidth: !0,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
