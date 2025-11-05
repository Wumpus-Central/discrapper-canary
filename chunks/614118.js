n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(602733),
    c = n(55563),
    u = n(551428),
    d = n(937615),
    f = n(164670),
    _ = n(411935),
    p = n(436585),
    h = n(594914),
    m = n(433386),
    g = n(840724),
    E = n(231338),
    b = n(388032),
    y = n(54602);
function O(e) {
    var t, n, O, v, I, T, S, A;
    let { guildId: C, skuId: N } = e,
        R = (0, o.e7)([u.Z], () => u.Z.isFetchingForSKU(N)),
        P = (0, o.e7)([c.Z], () => c.Z.get(N)),
        w = null == P ? void 0 : P.applicationId;
    (0, l.p2)();
    let { primaryIconAsset: D, primaryIconLabel: x } = i.useMemo(() => (0, f.FE)(P, w), [P, w]);
    i.useEffect(() => {
        null == C || null == N || u.Z.isFetchingForSKU(N) || (0, _.y)(C, N);
    }, [C, N]);
    let L = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == P ? void 0 : P.applicationId) != null &&
                        null != C &&
                        (0, p.g)({
                            skuId: N,
                            applicationId: P.applicationId,
                            guildId: C,
                            isStorefront: !1,
                        });
            },
            [N, null == P ? void 0 : P.applicationId, C],
        ),
        M = i.useCallback(() => {
            null != P && (0, h.P)(P, { isGift: !1 });
        }, [P]),
        j = i.useCallback(() => {
            null != P && (0, h.P)(P, { isGift: !0 });
        }, [P]);
    return R && null == P
        ? (0, r.jsx)("div", {
              className: y.container,
              children: (0, r.jsx)(s.$jN, { className: y.spinner }),
          })
        : null == P
          ? null
          : (0, r.jsxs)("div", {
                className: y.container,
                children: [
                    (0, r.jsx)(g.C, {
                        cardClassName: y.innerCard,
                        applicationId: P.applicationId,
                        skuId: N,
                        variant: g.Z.EMBEDDED,
                        onClick: L,
                    }),
                    (0, r.jsxs)("div", {
                        className: y.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.detailsTitleDescription,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/bold",
                                        lineClamp: 1,
                                        children: P.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: y.detailsDescription,
                                        children: [
                                            null != D &&
                                                (0, r.jsx)("img", {
                                                    src: D.toString(),
                                                    alt: x,
                                                    className: y.iconAsset,
                                                }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/semibold",
                                                lineClamp: 1,
                                                children: (0, d.T4)(
                                                    null != (I = null == (t = P.price) ? void 0 : t.amount) ? I : 0,
                                                    null != (T = null == (n = P.price) ? void 0 : n.currency)
                                                        ? T
                                                        : E.pK.USD,
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.hE2, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(a.zxk, {
                                        variant: "secondary",
                                        onClick: L,
                                        text: b.intl.string(b.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: M,
                                        text: b.intl.format(b.t.Xp5WTn, {
                                            price: (0, d.T4)(
                                                null != (S = null == (O = P.price) ? void 0 : O.amount) ? S : 0,
                                                null != (A = null == (v = P.price) ? void 0 : v.currency)
                                                    ? A
                                                    : E.pK.USD,
                                            ),
                                        }),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(m.Z, { onGift: j }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
