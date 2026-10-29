l.d(t, { A: () => d });
var n = l(477900);
l(582128);
var i = l(877624),
    a = l(554146),
    r = l(131607),
    s = l(549996),
    o = l(613556),
    c = l(814124),
    u = l(49999);
function d(e) {
    let { tab: t, handleTransition: l } = e,
        d = (0, s.c)(i.C.SHOP_NAGBAR),
        E = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        A = d?.promotionId,
        [p, C] = (0, r.Cc)(null != E && null != A ? a.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, A ?? "", u.m.NOTICE_BAR, !0);
    return null != d && null != E && null != p
        ? (0, n.jsx)(o.A, { shopNagbar: E, componentId: d.id, promotionId: d.promotionId, tab: t, onDismiss: C })
        : (0, n.jsx)(c.A, { tab: t, handleTransition: l });
}
