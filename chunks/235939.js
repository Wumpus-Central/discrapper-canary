n.d(t, { A: () => d });
var l = n(477900);
n(582128);
var r = n(877624),
    i = n(554146),
    s = n(131607),
    a = n(549996),
    o = n(613556),
    u = n(814124),
    c = n(49999);
function d(e) {
    let { tab: t, handleTransition: n } = e,
        d = (0, a.c)(r.C.SHOP_NAGBAR),
        p = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        m = d?.promotionId,
        [h, g] = (0, s.Cc)(null != p && null != m ? i.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, m ?? "", c.m.NOTICE_BAR, !0);
    return null != d && null != p && null != h
        ? (0, l.jsx)(o.A, { shopNagbar: p, componentId: d.id, promotionId: d.promotionId, tab: t, onDismiss: g })
        : (0, l.jsx)(u.A, { tab: t, handleTransition: n });
}
