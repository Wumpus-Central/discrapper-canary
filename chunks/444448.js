n.d(t, { d: () => j });
var i = n(54381),
    l = n(473749),
    a = n(512722),
    r = n.n(a),
    s = n(159691),
    o = n(481060),
    d = n(906732),
    c = n(987209),
    u = n(563132),
    g = n(614277),
    f = n(698708),
    m = n(844068),
    p = n(517730),
    x = n(436585),
    h = n(848118),
    v = n(388032),
    C = n(261112);
function j(e) {
    var t;
    let { handleClose: n } = e,
        { analyticsLocations: a } = (0, d.ZP)(),
        { skusById: j, selectedSkuId: b, application: _ } = (0, u.JL)(),
        { isGift: I, giftRecipient: P } = (0, c.wD)();
    r()(null != b, "Expected selectedSkuId"), r()(null != _, "Expected application");
    let w = j[b];
    return (r()(null != w, "Expected sku"),
    l.useEffect(() => {
        I ||
            ((0, x.U)(),
            n(),
            (0, p.I)({
                sku: w,
                application: _,
                analyticsLocations: a,
            }));
    }, [I, w, _, n, a]),
    I)
        ? (0, i.jsxs)(g.C3, {
              children: [
                  (0, i.jsx)(m.Z, {}),
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsxs)("div", {
                      className: C.confirmation,
                      children: [
                          (0, i.jsx)(h.A, {
                              sku: w,
                              shape: "square",
                              containerClassName: C.skuImage,
                          }),
                          (0, i.jsx)(o.Heading, {
                              variant: "heading-xxl/bold",
                              className: C.confirmationHeader,
                              children: v.intl.string(v.t["5glWta"]),
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: "text-md/normal",
                              children: v.intl.formatToPlainString(v.t["2VjPTw"], {
                                  itemName: w.name,
                                  giftRecipient: null != (t = null == P ? void 0 : P.username) ? t : "your recipient",
                              }),
                          }),
                          (0, i.jsx)("div", { className: C.divider }),
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
