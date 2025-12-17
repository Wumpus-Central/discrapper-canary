n.d(t, { d: () => y });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(159691),
    l = n(481060),
    c = n(906732),
    u = n(987209),
    d = n(563132),
    f = n(614277),
    p = n(698708),
    _ = n(844068),
    m = n(517730),
    h = n(436585),
    g = n(848118),
    E = n(388032),
    b = n(358035);
function y(e) {
    var t;
    let { handleClose: n } = e,
        { analyticsLocations: a } = (0, c.ZP)(),
        { skusById: y, selectedSkuId: O, application: v } = (0, d.JL)(),
        { isGift: S, giftRecipient: I } = (0, u.wD)();
    o()(null != O, "Expected selectedSkuId"), o()(null != v, "Expected application");
    let T = y[O];
    return (o()(null != T, "Expected sku"),
    i.useEffect(() => {
        S ||
            ((0, h.U)(),
            n(),
            (0, m.I)({
                sku: T,
                application: v,
                analyticsLocations: a,
            }));
    }, [S, T, v, n, a]),
    S)
        ? (0, r.jsxs)(f.C3, {
              children: [
                  (0, r.jsx)(_.Z, {}),
                  (0, r.jsx)(p.Z, {}),
                  (0, r.jsxs)("div", {
                      className: b.confirmation,
                      children: [
                          (0, r.jsx)(g.A, {
                              sku: T,
                              shape: "square",
                              containerClassName: b.skuImage,
                          }),
                          (0, r.jsx)(l.Heading, {
                              variant: "heading-xl/semibold",
                              className: b.confirmationHeader,
                              children: E.intl.string(E.t["5glWta"]),
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: b.confirmationDescription,
                              children: E.intl.formatToPlainString(E.t["2VjPTw"], {
                                  itemName: T.name,
                                  giftRecipient: null != (t = null == I ? void 0 : I.username) ? t : "your recipient",
                              }),
                          }),
                          (0, r.jsx)(s.zxk, {
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
