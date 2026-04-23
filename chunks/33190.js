"use strict";
n.d(t, { k: () => m });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(821609),
    o = n(534514),
    l = n(834730),
    u = n(427675),
    c = n(94420),
    d = n(937008),
    _ = n(156312),
    f = n(921925),
    p = n(482132),
    h = n(985018),
    E = n(989553);
function m(e) {
    let { handleClose: t } = e,
        n = (0, c.t4)((e) => e.selectedSkuId),
        { application: i } = (0, _.P5)(),
        m = (0, u.gU)(),
        { isGift: g, giftRecipient: A } = (0, d.Pv)();
    s()(null != n, "Expected selectedSkuId"), s()(null != i, "Expected application");
    let I = m[n];
    s()(null != I, "Expected sku");
    let T = g
        ? h.intl.formatToPlainString(h.t["2VjPTw"], {
              itemName: I.name,
              giftRecipient: A?.username ?? "your recipient",
          })
        : h.intl.formatToPlainString(h.t.wK0IbP, { applicationName: i.name, itemName: I.name });
    return (0, r.jsxs)(p.dZ, {
        children: [
            (0, r.jsx)(f.A, {}),
            (0, r.jsxs)("div", {
                className: E.EL,
                children: [
                    (0, r.jsx)(o.D, { variant: "heading-xxl/bold", className: E.RS, children: "Success!" }),
                    (0, r.jsx)(l.E, { variant: "text-md/normal", children: T }),
                    (0, r.jsx)("div", { className: E.yF }),
                    (0, r.jsx)(a.$, { onClick: t, text: h.intl.string(h.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
