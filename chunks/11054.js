"use strict";
n.d(t, { M: () => N });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(821609),
    l = n(534514),
    u = n(834730),
    c = n(318254),
    d = n(262427),
    _ = n(688810),
    f = n(427675),
    p = n(94420),
    h = n(937008),
    E = n(156312),
    m = n(482132),
    g = n(921925),
    A = n(510022),
    I = n(317560),
    T = n(366523),
    S = n(985018),
    y = n(208733);
function N(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, _.Ay)(),
        { selectedSkuId: s, entitlementsGranted: N } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: v } = (0, E.P5)(),
        C = (0, f.gU)(),
        { isGift: O, giftRecipient: R } = (0, h.Pv)();
    a()(null != s, "Expected selectedSkuId"), a()(null != v, "Expected application");
    let b = C[s];
    a()(null != b, "Expected sku");
    let D = N.find((e) => e.sku_id === s),
        L = D?.metadata?.orbs_reward;
    if (
        (i.useEffect(() => {
            O || ((0, I.j)(), t(), (0, A.n)({ sku: b, application: v, analyticsLocations: n, orbsReward: L }));
        }, [O, b, v, t, n, L]),
        !O)
    )
        return null;
    let w = null != L && L > 0;
    return (0, r.jsxs)(m.dZ, {
        children: [
            (0, r.jsx)(g.A, {}),
            (0, r.jsxs)("div", {
                className: y.EL,
                children: [
                    (0, r.jsx)(T.e, { sku: b, shape: "square", containerClassName: y.LC }),
                    (0, r.jsx)(l.D, {
                        variant: "heading-xl/semibold",
                        className: y.RS,
                        children: S.intl.string(S.t["5glWta"]),
                    }),
                    (0, r.jsx)(u.E, {
                        variant: "text-md/normal",
                        children: S.intl.formatToPlainString(S.t["2VjPTw"], {
                            itemName: b.name,
                            giftRecipient: R?.username ?? "your recipient",
                        }),
                    }),
                    w &&
                        (0, r.jsx)("div", {
                            className: y.Is,
                            children: (0, r.jsx)(d.J, {
                                Icon: c.C,
                                text: S.intl.format(S.t["ZV+aS9"], { orbCount: L }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: y.UD,
                        children: (0, r.jsx)(o.$, { onClick: t, text: S.intl.string(S.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
