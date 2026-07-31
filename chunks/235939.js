n.d(t, { A: () => d });
var s = n(477900);
n(582128);
var l = n(877624),
    r = n(554146),
    a = n(131607),
    i = n(549996),
    o = n(613556),
    u = n(814124),
    c = n(49999);
function d(e) {
    let { tab: t, handleTransition: n } = e,
        d = (0, i.c)(l.C.SHOP_NAGBAR),
        E = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
        g = d?.promotionId,
        [_, A] = (0, a.Cc)(null != E && null != g ? r.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, g ?? "", c.m.NOTICE_BAR, !0);
    return null != d && null != E && null != _
        ? (0, s.jsx)(o.A, { shopNagbar: E, componentId: d.id, tab: t, onDismiss: A })
        : (0, s.jsx)(u.A, { tab: t, handleTransition: n });
}
