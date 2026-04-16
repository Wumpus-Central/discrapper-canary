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
    d = n(427675),
    _ = n(94420),
    f = n(937008),
    p = n(156312),
    h = n(482132),
    m = n(921925),
    E = n(510022),
    g = n(317560),
    A = n(366523),
    I = n(985018),
    T = n(208733);
function S(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(),
        s = (0, _.t4)((e) => e.selectedSkuId),
        { application: S, entitlementsGranted: y } = (0, p.P5)(),
        v = (0, d.gU)(),
        { isGift: N, giftRecipient: C } = (0, f.Pv)();
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
    return (0, r.jsxs)(h.dZ, {
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
