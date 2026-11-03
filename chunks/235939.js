l.d(t, { A: () => d });
var n = l(477900);
l(582128);
var a = l(877624),
    i = l(554146),
    s = l(131607),
    o = l(549996),
    r = l(613556),
    c = l(814124),
    u = l(49999);
function d(e) {
    let { tab: t, handleTransition: l } = e,
        d = (0, o.c)(a.C.SHOP_NAGBAR),
        E = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        A = d?.promotionId,
        [p, C] = (0, s.Cc)(null != E && null != A ? i.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, A ?? "", u.m.NOTICE_BAR, !0);
    return null != d && null != E && null != p
        ? (0, n.jsx)(r.A, { shopNagbar: E, componentId: d.id, promotionId: d.promotionId, tab: t, onDismiss: C })
        : (0, n.jsx)(c.A, { tab: t, handleTransition: l });
}
