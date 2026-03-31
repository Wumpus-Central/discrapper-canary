"use strict";
n.d(t, { M: () => I });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(732955),
    l = n(397927),
    u = n(262427),
    c = n(688810),
    d = n(937008),
    _ = n(156312),
    f = n(482132),
    p = n(921925),
    h = n(510022),
    m = n(317560),
    E = n(366523),
    g = n(985018),
    A = n(275181);
function I(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(),
        { skusById: s, selectedSkuId: I, application: T, entitlementsGranted: S } = (0, _.P5)(),
        { isGift: y, giftRecipient: v } = (0, d.Pv)();
    a()(null != I, "Expected selectedSkuId"), a()(null != T, "Expected application");
    let N = s[I];
    a()(null != N, "Expected sku");
    let C = S.find((e) => e.sku_id === I),
        R = C?.metadata?.orbs_reward;
    if (
        (i.useEffect(() => {
            y || ((0, m.j)(), t(), (0, h.n)({ sku: N, application: T, analyticsLocations: n, orbsReward: R }));
        }, [y, N, T, t, n, R]),
        !y)
    )
        return null;
    let O = null != R && R > 0;
    return (0, r.jsxs)(f.dZ, {
        children: [
            (0, r.jsx)(p.A, {}),
            (0, r.jsxs)("div", {
                className: A.EL,
                children: [
                    (0, r.jsx)(E.e, { sku: N, shape: "square", containerClassName: A.LC }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        className: A.RS,
                        children: g.intl.string(g.t["5glWta"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: g.intl.formatToPlainString(g.t["2VjPTw"], {
                            itemName: N.name,
                            giftRecipient: v?.username ?? "your recipient",
                        }),
                    }),
                    O &&
                        (0, r.jsx)("div", {
                            className: A.Is,
                            children: (0, r.jsx)(u.J, {
                                Icon: l.Cp8,
                                text: g.intl.format(g.t["ZV+aS9"], { orbCount: R }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: A.UD,
                        children: (0, r.jsx)(o.$nd, { onClick: t, text: g.intl.string(g.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
