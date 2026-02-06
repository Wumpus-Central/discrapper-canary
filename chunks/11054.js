"use strict";
n.d(t, { M: () => T });
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
    p = n(592362),
    h = n(510022),
    m = n(317560),
    g = n(204890),
    E = n(366523),
    A = n(985018),
    I = n(552696);
function T(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, u.Ay)(),
        { skusById: a, selectedSkuId: T, application: S, entitlementsGranted: y } = (0, d.P5)(),
        { isGift: v, giftRecipient: C } = (0, c.Pv)();
    s()(null != T, "Expected selectedSkuId"), s()(null != S, "Expected application");
    let N = a[T];
    s()(null != N, "Expected sku");
    let b = y.find((e) => e.sku_id === T),
        R = b?.metadata?.orbs_reward;
    if (
        (i.useEffect(() => {
            v || ((0, m.j)(), t(), (0, h.n)({ sku: N, application: S, analyticsLocations: n, orbsReward: R }));
        }, [v, N, S, t, n, R]),
        !v)
    )
        return null;
    let O = null != R && R > 0;
    return (0, r.jsxs)(_.dZ, {
        children: [
            (0, r.jsx)(p.A, {}),
            (0, r.jsx)(f.A, {}),
            (0, r.jsxs)("div", {
                className: I.EL,
                children: [
                    (0, r.jsx)(E.e, { sku: N, shape: "square", containerClassName: I.LC }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        className: I.RS,
                        children: A.intl.string(A.t["5glWta"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: A.intl.formatToPlainString(A.t["2VjPTw"], {
                            itemName: N.name,
                            giftRecipient: C?.username ?? "your recipient",
                        }),
                    }),
                    O &&
                        (0, r.jsx)("div", {
                            className: I.Is,
                            children: (0, r.jsx)(g.J8, { text: A.intl.format(A.t["ZV+aS9"], { orbs: R }) }),
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
