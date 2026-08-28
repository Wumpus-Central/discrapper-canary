l.d(n, { A: () => d });
var s = l(477900);
l(582128);
var t = l(877624),
    r = l(554146),
    i = l(131607),
    a = l(549996),
    o = l(613556),
    u = l(814124),
    c = l(49999);
function d(e) {
    let { tab: n, handleTransition: l } = e,
        d = (0, a.c)(t.C.SHOP_NAGBAR),
        p = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        h = d?.promotionId,
        [m, A] = (0, i.Cc)(null != p && null != h ? r.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, h ?? "", c.m.NOTICE_BAR, !0);
    return null != d && null != p && null != m
        ? (0, s.jsx)(o.A, { shopNagbar: p, componentId: d.id, promotionId: d.promotionId, tab: n, onDismiss: A })
        : (0, s.jsx)(u.A, { tab: n, handleTransition: l });
}
