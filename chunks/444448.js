n.d(t, { d: () => O });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(159691),
    c = n(481060),
    s = n(987209),
    u = n(563132),
    d = n(614277),
    f = n(698708),
    p = n(844068),
    g = n(517730),
    b = n(436585),
    m = n(848118),
    v = n(388032),
    j = n(216215);
function O(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: l, selectedSkuId: O, application: y } = (0, u.JL)(),
        { isGift: h, giftRecipient: x } = (0, s.wD)();
    a()(null != O, "Expected selectedSkuId"), a()(null != y, "Expected application");
    let C = l[O];
    return (a()(null != C, "Expected sku"),
    i.useEffect(() => {
        h ||
            ((0, b.U)(),
            n(),
            (0, g.I)({
                sku: C,
                application: y,
            }));
    }, [h, C, y, n]),
    h)
        ? (0, r.jsxs)(d.C3, {
              children: [
                  (0, r.jsx)(p.Z, {}),
                  (0, r.jsx)(f.Z, {}),
                  (0, r.jsxs)("div", {
                      className: j.confirmation,
                      children: [
                          (0, r.jsx)(m.A, {
                              sku: C,
                              shape: "square",
                              containerClassName: j.skuImage,
                          }),
                          (0, r.jsx)(c.Heading, {
                              variant: "heading-xxl/bold",
                              className: j.confirmationHeader,
                              children: v.intl.string(v.t["5glWta"]),
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: v.intl.formatToPlainString(v.t["2VjPTw"], {
                                  itemName: C.name,
                                  giftRecipient: null != (t = null == x ? void 0 : x.username) ? t : "your recipient",
                              }),
                          }),
                          (0, r.jsx)("div", { className: j.divider }),
                          (0, r.jsx)(o.zxk, {
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
