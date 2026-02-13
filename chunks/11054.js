"use strict";
n.d(t, { M: () => y });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(732955),
    l = n(397927),
    u = n(688810),
    c = n(937008),
    d = n(156312),
    _ = n(482132),
    f = n(921925),
    h = n(592362),
    p = n(510022),
    g = n(317560),
    E = n(204890),
    A = n(366523),
    I = n(985018),
    T = n(552696);
function y(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, u.Ay)(),
        { skusById: a, selectedSkuId: y, application: S, entitlementsGranted: v } = (0, d.P5)(),
        { isGift: C, giftRecipient: b } = (0, c.Pv)();
    s()(null != y, "Expected selectedSkuId"), s()(null != S, "Expected application");
    let N = a[y];
    s()(null != N, "Expected sku");
    let R = v.find((e) => e.sku_id === y),
        O = R?.metadata?.orbs_reward;
    if (
        (i.useEffect(() => {
            C || ((0, g.j)(), t(), (0, p.n)({ sku: N, application: S, analyticsLocations: n, orbsReward: O }));
        }, [C, N, S, t, n, O]),
        !C)
    )
        return null;
    let D = null != O && O > 0;
    return (0, r.jsxs)(_.dZ, {
        children: [
            (0, r.jsx)(h.A, {}),
            (0, r.jsx)(f.A, {}),
            (0, r.jsxs)("div", {
                className: T.EL,
                children: [
                    (0, r.jsx)(A.e, { sku: N, shape: "square", containerClassName: T.LC }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        className: T.RS,
                        children: I.intl.string(I.t["5glWta"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: I.intl.formatToPlainString(I.t["2VjPTw"], {
                            itemName: N.name,
                            giftRecipient: b?.username ?? "your recipient",
                        }),
                    }),
                    D &&
                        (0, r.jsx)("div", {
                            className: T.Is,
                            children: (0, r.jsx)(E.J8, {
                                Icon: l.Cp8,
                                text: I.intl.format(I.t["ZV+aS9"], { orbCount: O }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: T.UD,
                        children: (0, r.jsx)(o.$nd, { onClick: t, text: I.intl.string(I.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
