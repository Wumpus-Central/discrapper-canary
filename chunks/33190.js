n.d(t, { k: () => h });
var l = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    s = n(821609),
    a = n(534514),
    o = n(834730),
    u = n(427675),
    d = n(94420),
    c = n(937008),
    C = n(156312),
    p = n(921925),
    m = n(482132),
    E = n(985018),
    A = n(989553);
function h(e) {
    let { handleClose: t } = e,
        n = (0, d.t4)((e) => e.selectedSkuId),
        { application: r } = (0, C.P5)(),
        h = (0, u.gU)(),
        { isGift: f, giftRecipient: _ } = (0, c.Pv)();
    i()(null != n, "Expected selectedSkuId"), i()(null != r, "Expected application");
    let g = h[n];
    i()(null != g, "Expected sku");
    let T = f
        ? E.intl.formatToPlainString(E.t["2VjPTw"], {
              itemName: g.name,
              giftRecipient: _?.username ?? "your recipient",
          })
        : E.intl.formatToPlainString(E.t.wK0IbP, { applicationName: r.name, itemName: g.name });
    return (0, l.jsxs)(m.dZ, {
        children: [
            (0, l.jsx)(p.A, {}),
            (0, l.jsxs)("div", {
                className: A.EL,
                children: [
                    (0, l.jsx)(a.D, { variant: "heading-xxl/bold", className: A.RS, children: "Success!" }),
                    (0, l.jsx)(o.E, { variant: "text-md/normal", children: T }),
                    (0, l.jsx)("div", { className: A.yF }),
                    (0, l.jsx)(s.$, { onClick: t, text: E.intl.string(E.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
