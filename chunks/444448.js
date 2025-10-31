n.d(t, { d: () => x });
var i = n(951288),
    r = n(647438),
    a = n(512722),
    l = n.n(a),
    s = n(159691),
    o = n(481060),
    c = n(987209),
    d = n(563132),
    u = n(614277),
    f = n(698708),
    g = n(844068),
    m = n(517730),
    p = n(436585),
    b = n(848118),
    v = n(388032),
    h = n(216215);
function x(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: a, selectedSkuId: x, application: j } = (0, d.JL)(),
        { isGift: C, giftRecipient: y } = (0, c.wD)();
    l()(null != x, "Expected selectedSkuId"), l()(null != j, "Expected application");
    let _ = a[x];
    return (l()(null != _, "Expected sku"),
    r.useEffect(() => {
        C ||
            ((0, p.U)(),
            n(),
            (0, m.I)({
                sku: _,
                application: j,
            }));
    }, [C, _, j, n]),
    C)
        ? (0, i.jsxs)(u.C3, {
              children: [
                  (0, i.jsx)(g.Z, {}),
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsxs)("div", {
                      className: h.confirmation,
                      children: [
                          (0, i.jsx)(b.A, {
                              sku: _,
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
                                  itemName: _.name,
                                  giftRecipient: null != (t = null == y ? void 0 : y.username) ? t : "your recipient",
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
