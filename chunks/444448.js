n.d(t, { d: () => b });
var i = n(54381),
    l = n(473749),
    a = n(512722),
    r = n.n(a),
    s = n(159691),
    o = n(481060),
    c = n(906732),
    d = n(987209),
    u = n(563132),
    f = n(614277),
    g = n(698708),
    m = n(844068),
    p = n(517730),
    h = n(436585),
    x = n(848118),
    v = n(388032),
    C = n(216215);
function b(e) {
    var t;
    let { handleClose: n } = e,
        { analyticsLocations: a } = (0, c.ZP)(),
        { skusById: b, selectedSkuId: _, application: j } = (0, u.JL)(),
        { isGift: I, giftRecipient: P } = (0, d.wD)();
    r()(null != _, "Expected selectedSkuId"), r()(null != j, "Expected application");
    let w = b[_];
    return (r()(null != w, "Expected sku"),
    l.useEffect(() => {
        I ||
            ((0, h.U)(),
            n(),
            (0, p.I)({
                sku: w,
                application: j,
                analyticsLocations: a,
            }));
    }, [I, w, j, n, a]),
    I)
        ? (0, i.jsxs)(f.C3, {
              children: [
                  (0, i.jsx)(m.Z, {}),
                  (0, i.jsx)(g.Z, {}),
                  (0, i.jsxs)("div", {
                      className: C.confirmation,
                      children: [
                          (0, i.jsx)(x.A, {
                              sku: w,
                              shape: "square",
                              containerClassName: C.skuImage,
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: "heading-xl/semibold",
                              className: C.confirmationHeader,
                              children: v.intl.string(v.t["5glWta"]),
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: C.confirmationDescription,
                              children: v.intl.formatToPlainString(v.t["2VjPTw"], {
                                  itemName: w.name,
                                  giftRecipient: null != (t = null == P ? void 0 : P.username) ? t : "your recipient",
                              }),
                          }),
                          (0, i.jsx)(s.zxk, {
                              onClick: n,
                              text: v.intl.string(v.t.cpT0Cq),
                              fullWidth: !0,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
