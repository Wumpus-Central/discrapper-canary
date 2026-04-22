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
    x = n(985018),
    S = n(208733);
function I(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, C.Ay)(),
        i = (0, m.t4)((e) => e.selectedSkuId),
        { application: I, entitlementsGranted: O } = (0, A.P5)(),
        y = (0, p.gU)(),
        { isGift: N, giftRecipient: R } = (0, E.Pv)();
    s()(null != i, "Expected selectedSkuId"), s()(null != I, "Expected application");
    let v = y[i];
    s()(null != v, "Expected sku");
    let P = O.find((e) => e.sku_id === i),
        b = P?.metadata?.orbs_reward;
    if (
        (r.useEffect(() => {
            N || ((0, g.j)(), t(), (0, _.n)({ sku: v, application: I, analyticsLocations: n, orbsReward: b }));
        }, [N, v, I, t, n, b]),
        !N)
    )
        return null;
    let L = null != b && b > 0;
    return (0, l.jsxs)(h.dZ, {
        children: [
            (0, l.jsx)(f.A, {}),
            (0, l.jsxs)("div", {
                className: S.EL,
                children: [
                    (0, l.jsx)(T.e, { sku: v, shape: "square", containerClassName: S.LC }),
                    (0, l.jsx)(o.D, {
                        variant: "heading-xl/semibold",
                        className: S.RS,
                        children: x.intl.string(x.t["5glWta"]),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-md/normal",
                        children: x.intl.formatToPlainString(x.t["2VjPTw"], {
                            itemName: v.name,
                            giftRecipient: R?.username ?? "your recipient",
                        }),
                    }),
                    L &&
                        (0, l.jsx)("div", {
                            className: S.Is,
                            children: (0, l.jsx)(c.J, {
                                Icon: d.C,
                                text: x.intl.format(x.t["ZV+aS9"], { orbCount: b }),
                            }),
                        }),
                    (0, l.jsx)("div", {
                        className: S.UD,
                        children: (0, l.jsx)(a.$, { onClick: t, text: x.intl.string(x.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
