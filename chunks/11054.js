n.d(t, { M: () => I });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(821609),
    o = n(534514),
    u = n(834730),
    d = n(318254),
    c = n(262427),
    C = n(688810),
    p = n(427675),
    m = n(94420),
    E = n(937008),
    A = n(156312),
    h = n(482132),
    f = n(921925),
    _ = n(510022),
    g = n(317560),
    T = n(366523),
    S = n(985018),
    x = n(578909);
function I(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, C.Ay)(),
        { selectedSkuId: i, entitlementsGranted: I } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: O } = (0, A.P5)(),
        y = (0, p.gU)(),
        { isGift: N, giftRecipient: R } = (0, E.Pv)();
    s()(null != i, "Expected selectedSkuId"), s()(null != O, "Expected application");
    let v = y[i];
    s()(null != v, "Expected sku");
    let P = I.find((e) => e.sku_id === i),
        b = P?.metadata?.orbs_reward;
    if (
        (r.useEffect(() => {
            N || ((0, g.j)(), t(), (0, _.n)({ sku: v, application: O, analyticsLocations: n, orbsReward: b }));
        }, [N, v, O, t, n, b]),
        !N)
    )
        return null;
    let L = null != b && b > 0;
    return (0, l.jsxs)(h.dZ, {
        children: [
            (0, l.jsx)(f.A, {}),
            (0, l.jsxs)("div", {
                className: x.EL,
                children: [
                    (0, l.jsx)(T.e, { sku: v, shape: "square", containerClassName: x.LC }),
                    (0, l.jsx)(o.D, {
                        variant: "heading-xl/semibold",
                        className: x.RS,
                        children: S.intl.string(S.t["5glWta"]),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-md/normal",
                        children: S.intl.formatToPlainString(S.t["2VjPTw"], {
                            itemName: v.name,
                            giftRecipient: R?.username ?? "your recipient",
                        }),
                    }),
                    L &&
                        (0, l.jsx)("div", {
                            className: x.Is,
                            children: (0, l.jsx)(c.J, {
                                Icon: d.C,
                                text: S.intl.format(S.t["ZV+aS9"], { orbCount: b }),
                            }),
                        }),
                    (0, l.jsx)("div", {
                        className: x.UD,
                        children: (0, l.jsx)(a.$, { onClick: t, text: S.intl.string(S.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
