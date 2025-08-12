n.d(t, { w: () => h });
var r = n(255367);
n(73800);
var i = n(512722),
    o = n.n(i),
    a = n(680018),
    s = n(481060),
    l = n(987209),
    c = n(563132),
    u = n(698708),
    d = n(844068),
    f = n(27034),
    _ = n(388032),
    p = n(153196);
function h(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: i, selectedSkuId: h, application: m } = (0, c.JL)(),
        { isGift: g, giftRecipient: E } = (0, l.wD)();
    o()(null != h, "Expected selectedSkuId"), o()(null != m, "Expected application");
    let b = i[h];
    o()(null != b, "Expected sku");
    let y = g
        ? _.intl.formatToPlainString(_.t["2VjPT0"], {
              itemName: b.name,
              giftRecipient: null != (t = null == E ? void 0 : E.username) ? t : "your recipient",
          })
        : _.intl.formatToPlainString(_.t.wK0IbG, {
              applicationName: m.name,
              itemName: b.name,
          });
    return (0, r.jsxs)(f.C3, {
        children: [
            (0, r.jsx)(d.Z, {}),
            (0, r.jsx)(u.Z, {}),
            (0, r.jsxs)("div", {
                className: p.confirmation,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-xxl/bold",
                        className: p.confirmationHeader,
                        children: "Success!",
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: y,
                    }),
                    (0, r.jsx)("div", { className: p.divider }),
                    (0, r.jsx)(a.z, {
                        onClick: n,
                        text: _.intl.string(_.t.cpT0Cg),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
