l.d(t, { A: () => E });
var n = l(477900);
l(582128);
var a = l(877624),
    i = l(554146),
    r = l(131607),
    s = l(549996),
    o = l(613556),
    c = l(814124),
    u = l(49999);
function E(e) {
    let { tab: t, handleTransition: l } = e,
        E = (0, s.c)(a.C.SHOP_NAGBAR),
        d = E?.properties.properties.oneofKind === "shopNagbar" ? E.properties.properties.shopNagbar : null,
        p = E?.promotionId,
        [A, _] = (0, r.Cc)(null != d && null != p ? i.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, p ?? "", u.m.NOTICE_BAR, !0);
    return null != E && null != d && null != A
        ? (0, n.jsx)(o.A, { shopNagbar: d, componentId: E.id, promotionId: E.promotionId, tab: t, onDismiss: _ })
        : (0, n.jsx)(c.A, { tab: t, handleTransition: l });
}
