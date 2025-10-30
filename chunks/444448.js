n.d(t, { d: () => x });
var i = n(951288),
    r = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(159691),
    s = n(481060),
    c = n(987209),
    d = n(563132),
    u = n(614277),
    f = n(698708),
    g = n(844068),
    p = n(517730),
    m = n(436585),
    v = n(848118),
    b = n(388032),
    h = n(216215);
function x(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: l, selectedSkuId: x, application: j } = (0, d.JL)(),
        { isGift: C, giftRecipient: y } = (0, c.wD)();
    a()(null != x, "Expected selectedSkuId"), a()(null != j, "Expected application");
    let P = l[x];
    return (a()(null != P, "Expected sku"),
    r.useEffect(() => {
        C ||
            ((0, m.U)(),
            n(),
            (0, p.I)({
                sku: P,
                application: j,
            }));
    }, [C, P, j, n]),
    C)
        ? (0, i.jsxs)(u.C3, {
              children: [
                  (0, i.jsx)(g.Z, {}),
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsxs)("div", {
                      className: h.confirmation,
                      children: [
                          (0, i.jsx)(v.A, {
                              sku: P,
                              shape: "square",
                              className: h.skuImage,
                          }),
                          (0, i.jsx)(s.Heading, {
                              variant: "heading-xxl/bold",
                              className: h.confirmationHeader,
                              children: b.intl.string(b.t["5glWta"]),
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: "text-md/normal",
                              children: b.intl.formatToPlainString(b.t["2VjPTw"], {
                                  itemName: P.name,
                                  giftRecipient: null != (t = null == y ? void 0 : y.username) ? t : "your recipient",
                              }),
                          }),
                          (0, i.jsx)("div", { className: h.divider }),
                          (0, i.jsx)(o.zxk, {
                              onClick: n,
                              text: b.intl.string(b.t.cpT0Cq),
                              fullWidth: !0,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
