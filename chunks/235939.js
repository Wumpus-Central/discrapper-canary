var l = n(477900);
n(582128);
var s = n(877624),
    a = n(554146),
    i = n(263775),
    r = n(549996),
    o = n(613556),
    c = n(814124),
    u = n(49999);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { tab: t, handleTransition: n } = e,
                d = (0, r.c)(s.C.SHOP_NAGBAR),
                m = d?.properties.properties.oneofKind === "shopNagbar" ? d.properties.properties.shopNagbar : null,
                g = d?.promotionId,
                [E, h] = (0, i.Cc)(
                    null != m && null != g ? a.M.PREMIUM_SHOP_NAGBAR_NOTICE : null,
                    g ?? "",
                    u.m.NOTICE_BAR,
                    !0,
                );
            return null != d && null != m && null != E
                ? (0, l.jsx)(o.A, {
                      shopNagbar: m,
                      componentId: d.id,
                      promotionId: d.promotionId,
                      tab: t,
                      onDismiss: h,
                  })
                : (0, l.jsx)(c.A, { tab: t, handleTransition: n });
        },
    },
);
