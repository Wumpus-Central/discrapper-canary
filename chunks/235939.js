t.d(n, { A: () => d });
var l = t(477900);
t(582128);
var r = t(877624),
    i = t(554146),
    s = t(131607),
    a = t(549996),
    o = t(613556),
    u = t(814124),
    c = t(49999);
function d(e) {
    let { tab: n, handleTransition: t } = e,
        d = (0, a.c)(r.C.SHOP_NAGBAR),
        p = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        m = d?.promotionId,
        [h, g] = (0, s.Cc)(null != p && null != m ? i.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, m ?? "", c.m.NOTICE_BAR, !0);
    return null != d && null != p && null != h
        ? (0, l.jsx)(o.A, { shopNagbar: p, componentId: d.id, promotionId: d.promotionId, tab: n, onDismiss: g })
        : (0, l.jsx)(u.A, { tab: n, handleTransition: t });
}
