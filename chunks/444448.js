n.d(t, { d: () => h });
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
    v = n(388032),
    b = n(216215);
function h(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: l, selectedSkuId: h, application: x } = (0, d.JL)(),
        { isGift: j, giftRecipient: C } = (0, c.wD)();
    a()(null != h, "Expected selectedSkuId"), a()(null != x, "Expected application");
    let y = l[h];
    return (a()(null != y, "Expected sku"),
    r.useEffect(() => {
        j ||
            ((0, m.U)(),
            n(),
            (0, p.I)({
                sku: y,
                application: x,
            }));
    }, [j, y, x, n]),
    j)
        ? (0, i.jsxs)(u.C3, {
              children: [
                  (0, i.jsx)(g.Z, {}),
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsxs)("div", {
                      className: b.confirmation,
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: "heading-xxl/bold",
                              className: b.confirmationHeader,
                              children: v.intl.string(v.t["5glWta"]),
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: "text-md/normal",
                              children: v.intl.formatToPlainString(v.t["2VjPTw"], {
                                  itemName: y.name,
                                  giftRecipient: null != (t = null == C ? void 0 : C.username) ? t : "your recipient",
                              }),
                          }),
                          (0, i.jsx)("div", { className: b.divider }),
                          (0, i.jsx)(o.zxk, {
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
