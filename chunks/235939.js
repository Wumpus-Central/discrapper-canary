var l = n(477900);
n(582128);
var s = n(517352),
    a = n(554146),
    i = n(263775),
    r = n(641436),
    o = n(613556),
    c = n(814124),
    u = n(49999);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { tab: t, handleTransition: n } = e,
                d = (0, r.u)(s.oW.SHOP_NAGBAR),
                m = d?.promotionId,
                [g, E] = (0, i.Cc)(null != d ? a.M.PREMIUM_SHOP_NAGBAR_NOTICE : null, m ?? "", u.m.NOTICE_BAR, !0);
            if (null != d && null != g) {
                let { surface: e, id: n, promotionId: s, componentType: a } = d;
                return (0, l.jsx)(o.A, {
                    shopNagbar: e,
                    componentId: n,
                    componentType: a,
                    promotionId: s,
                    tab: t,
                    onDismiss: E,
                });
            }
            return (0, l.jsx)(c.A, { tab: t, handleTransition: n });
        },
    },
);
