"use strict";
n.d(t, { M: () => T });
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
    p = n(987616),
    h = n(921925),
    m = n(510022),
    E = n(317560),
    g = n(366523),
    A = n(985018),
    I = n(275181);
function T(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(),
        { selectedSkuId: s, application: T, entitlementsGranted: S } = (0, _.P5)(),
        y = (0, p.gU)(),
        { isGift: v, giftRecipient: N } = (0, d.Pv)();
    a()(null != s, "Expected selectedSkuId"), a()(null != T, "Expected application");
    let C = y[s];
    a()(null != C, "Expected sku");
    let R = S.find((e) => e.sku_id === s),
        O = R?.metadata?.orbs_reward;
    if (
        (i.useEffect(() => {
            v || ((0, E.j)(), t(), (0, m.n)({ sku: C, application: T, analyticsLocations: n, orbsReward: O }));
        }, [v, C, T, t, n, O]),
        !v)
    )
        return null;
    let b = null != O && O > 0;
    return (0, r.jsxs)(f.dZ, {
        children: [
            (0, r.jsx)(h.A, {}),
            (0, r.jsxs)("div", {
                className: I.EL,
                children: [
                    (0, r.jsx)(g.e, { sku: C, shape: "square", containerClassName: I.LC }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        className: I.RS,
                        children: A.intl.string(A.t["5glWta"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: A.intl.formatToPlainString(A.t["2VjPTw"], {
                            itemName: C.name,
                            giftRecipient: N?.username ?? "your recipient",
                        }),
                    }),
                    b &&
                        (0, r.jsx)("div", {
                            className: I.Is,
                            children: (0, r.jsx)(u.J, {
                                Icon: l.Cp8,
                                text: A.intl.format(A.t["ZV+aS9"], { orbCount: O }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: I.UD,
                        children: (0, r.jsx)(o.$nd, { onClick: t, text: A.intl.string(A.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
