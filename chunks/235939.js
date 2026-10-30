l.d(t, { A: () => d });
var n = l(477900);
l(582128);
var a = l(877624),
    i = l(554146),
    r = l(131607),
    s = l(549996),
    o = l(613556),
    u = l(814124),
    c = l(49999);
function d(e) {
    let { tab: t, handleTransition: l } = e,
        d = (0, s.c)(a.C.SHOP_NAGBAR),
        E = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        p = d?.promotionId,
        [A, f] = (0, r.Cc)(null != E && null != p ? i.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, p ?? "", c.m.NOTICE_BAR, !0);
    return null != d && null != E && null != A
        ? (0, n.jsx)(o.A, { shopNagbar: E, componentId: d.id, promotionId: d.promotionId, tab: t, onDismiss: f })
        : (0, n.jsx)(u.A, { tab: t, handleTransition: l });
}
