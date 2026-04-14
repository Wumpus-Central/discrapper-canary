"use strict";
n.d(t, { M: () => S });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(732955),
    l = n(397927),
    u = n(262427),
    c = n(688810),
    d = n(413748),
    _ = n(937008),
    f = n(156312),
    p = n(482132),
    h = n(987616),
    m = n(921925),
    E = n(510022),
    g = n(317560),
    A = n(366523),
    I = n(985018),
    T = n(275181);
function S(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(),
        s = (0, d.t)((e) => e.selectedSkuId),
        { application: S, entitlementsGranted: y } = (0, f.P5)(),
        v = (0, h.gU)(),
        { isGift: N, giftRecipient: C } = (0, _.Pv)();
    a()(null != s, "Expected selectedSkuId"), a()(null != S, "Expected application");
    let R = v[s];
    a()(null != R, "Expected sku");
    let O = y.find((e) => e.sku_id === s),
        b = O?.metadata?.orbs_reward;
    if (
        (i.useEffect(() => {
            N || ((0, g.j)(), t(), (0, E.n)({ sku: R, application: S, analyticsLocations: n, orbsReward: b }));
        }, [N, R, S, t, n, b]),
        !N)
    )
        return null;
    let D = null != b && b > 0;
    return (0, r.jsxs)(p.dZ, {
        children: [
            (0, r.jsx)(m.A, {}),
            (0, r.jsxs)("div", {
                className: T.EL,
                children: [
                    (0, r.jsx)(A.e, { sku: R, shape: "square", containerClassName: T.LC }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        className: T.RS,
                        children: I.intl.string(I.t["5glWta"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: I.intl.formatToPlainString(I.t["2VjPTw"], {
                            itemName: R.name,
                            giftRecipient: C?.username ?? "your recipient",
                        }),
                    }),
                    D &&
                        (0, r.jsx)("div", {
                            className: T.Is,
                            children: (0, r.jsx)(u.J, {
                                Icon: l.Cp8,
                                text: I.intl.format(I.t["ZV+aS9"], { orbCount: b }),
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
