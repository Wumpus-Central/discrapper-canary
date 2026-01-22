n.d(t, { k: () => h });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(732955),
    o = n(397927),
    l = n(937008),
    c = n(156312),
    u = n(921925),
    d = n(592362),
    f = n(482132),
    p = n(985018),
    _ = n(724788);
function h(e) {
    var t;
    let { handleClose: n } = e,
        { skusById: i, selectedSkuId: h, application: m } = (0, c.P5)(),
        { isGift: g, giftRecipient: E } = (0, l.Pv)();
    a()(null != h, "Expected selectedSkuId"), a()(null != m, "Expected application");
    let b = i[h];
    a()(null != b, "Expected sku");
    let y = g
        ? p.intl.formatToPlainString(p.t["2VjPTw"], {
              itemName: b.name,
              giftRecipient: null != (t = null == E ? void 0 : E.username) ? t : "your recipient",
          })
        : p.intl.formatToPlainString(p.t.wK0IbP, {
              applicationName: m.name,
              itemName: b.name,
          });
    return (0, r.jsxs)(f.dZ, {
        children: [
            (0, r.jsx)(d.A, {}),
            (0, r.jsx)(u.A, {}),
            (0, r.jsxs)("div", {
                className: _.EL,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xxl/bold",
                        className: _.RS,
                        children: "Success!",
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: y,
                    }),
                    (0, r.jsx)("div", { className: _.yF }),
                    (0, r.jsx)(s.$nd, {
                        onClick: n,
                        text: p.intl.string(p.t.cpT0Cq),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
