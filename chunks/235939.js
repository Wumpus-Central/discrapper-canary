var l = n(477900);
n(582128);
var a = n(877624),
    s = n(554146),
    i = n(263775),
    r = n(549996),
    o = n(613556),
    c = n(814124),
    d = n(49999);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { tab: t, handleTransition: n } = e,
                u = (0, r.c)(a.C.SHOP_NAGBAR),
                m = u?.properties.properties.oneofKind === "shopNagbar" ? u.properties.properties.shopNagbar : null,
                g = u?.promotionId,
                [E, h] = (0, i.Cc)(
                    null != m && null != g ? s.M.PREMIUM_SHOP_NAGBAR_NOTICE : null,
                    g ?? "",
                    d.m.NOTICE_BAR,
                    !0,
                );
            return null != u && null != m && null != E
                ? (0, l.jsx)(o.A, {
                      shopNagbar: m,
                      componentId: u.id,
                      promotionId: u.promotionId,
                      tab: t,
                      onDismiss: h,
                  })
                : (0, l.jsx)(c.A, { tab: t, handleTransition: n });
        },
    },
);
