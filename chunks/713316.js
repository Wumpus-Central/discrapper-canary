n.d(t, { w: () => h });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(159691),
    s = n(481060),
    l = n(987209),
    c = n(563132),
    u = n(698708),
    d = n(844068),
    f = n(614277),
    _ = n(388032),
    p = n(587490);
function h(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: i, selectedSkuId: h, application: m } = (0, c.JL)(),
        { isGift: g, giftRecipient: E } = (0, l.wD)();
    a()(null != h, "Expected selectedSkuId"), a()(null != m, "Expected application");
    let b = i[h];
    a()(null != b, "Expected sku");
    let y = g
        ? _.intl.formatToPlainString(_.t["2VjPTw"], {
              itemName: b.name,
              giftRecipient: null != (t = null == E ? void 0 : E.username) ? t : "your recipient",
          })
        : _.intl.formatToPlainString(_.t.wK0IbP, {
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
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xxl/bold",
                        className: p.confirmationHeader,
                        children: "Success!",
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: y,
                    }),
                    (0, r.jsx)("div", { className: p.divider }),
                    (0, r.jsx)(o.zxk, {
                        onClick: n,
                        text: _.intl.string(_.t.cpT0Cq),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
