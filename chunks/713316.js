n.d(t, { w: () => m });
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
    p = n(388032),
    _ = n(629183);
function m(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: i, selectedSkuId: m, application: h } = (0, c.JL)(),
        { isGift: g, giftRecipient: E } = (0, l.wD)();
    a()(null != m, "Expected selectedSkuId"), a()(null != h, "Expected application");
    let b = i[m];
    a()(null != b, "Expected sku");
    let y = g
        ? p.intl.formatToPlainString(p.t["2VjPTw"], {
              itemName: b.name,
              giftRecipient: null != (t = null == E ? void 0 : E.username) ? t : "your recipient",
          })
        : p.intl.formatToPlainString(p.t.wK0IbP, {
              applicationName: h.name,
              itemName: b.name,
          });
    return (0, r.jsxs)(f.C3, {
        children: [
            (0, r.jsx)(d.Z, {}),
            (0, r.jsx)(u.Z, {}),
            (0, r.jsxs)("div", {
                className: _.confirmation,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xxl/bold",
                        className: _.confirmationHeader,
                        children: "Success!",
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: y,
                    }),
                    (0, r.jsx)("div", { className: _.divider }),
                    (0, r.jsx)(o.zxk, {
                        onClick: n,
                        text: p.intl.string(p.t.cpT0Cq),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
