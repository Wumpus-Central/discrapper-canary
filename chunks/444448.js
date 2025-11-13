n.d(t, { d: () => C });
var i = n(951288),
    l = n(647438),
    a = n(512722),
    r = n.n(a),
    s = n(159691),
    o = n(481060),
    d = n(987209),
    c = n(563132),
    u = n(614277),
    f = n(698708),
    g = n(844068),
    m = n(517730),
    p = n(436585),
    x = n(848118),
    v = n(388032),
    h = n(216215);
function C(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: a, selectedSkuId: C, application: j } = (0, c.JL)(),
        { isGift: b, giftRecipient: _ } = (0, d.wD)();
    r()(null != C, "Expected selectedSkuId"), r()(null != j, "Expected application");
    let I = a[C];
    return (r()(null != I, "Expected sku"),
    l.useEffect(() => {
        b ||
            ((0, p.U)(),
            n(),
            (0, m.I)({
                sku: I,
                application: j,
            }));
    }, [b, I, j, n]),
    b)
        ? (0, i.jsxs)(u.C3, {
              children: [
                  (0, i.jsx)(g.Z, {}),
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsxs)("div", {
                      className: h.confirmation,
                      children: [
                          (0, i.jsx)(x.A, {
                              sku: I,
                              shape: "square",
                              containerClassName: h.skuImage,
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: "heading-xxl/bold",
                              className: h.confirmationHeader,
                              children: v.intl.string(v.t["5glWta"]),
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: "text-md/normal",
                              children: v.intl.formatToPlainString(v.t["2VjPTw"], {
                                  itemName: I.name,
                                  giftRecipient: null != (t = null == _ ? void 0 : _.username) ? t : "your recipient",
                              }),
                          }),
                          (0, i.jsx)("div", { className: h.divider }),
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
