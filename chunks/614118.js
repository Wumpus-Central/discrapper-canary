n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(602733),
    c = n(594174),
    u = n(55563),
    d = n(551428),
    f = n(937615),
    _ = n(164670),
    p = n(411935),
    h = n(436585),
    m = n(594914),
    g = n(433386),
    E = n(840724),
    b = n(231338),
    y = n(388032),
    O = n(953692);
function v(e) {
    var t, n, v, I, S, T, A, C;
    let { guildId: N, skuId: R, channel: P } = e,
        w = (0, o.e7)([d.Z], () => d.Z.isFetchingForSKU(R)),
        D = (0, o.e7)([u.Z], () => u.Z.get(R)),
        x = null == D ? void 0 : D.applicationId;
    (0, l.p2)();
    let L = (0, o.e7)([c.default], () =>
            P.isDM() && null != P.recipients && 0 !== P.recipients.length ? c.default.getUser(P.recipients[0]) : null,
        ),
        { primaryIconAsset: M, primaryIconLabel: j } = i.useMemo(() => (0, _.FE)(D, x), [D, x]);
    i.useEffect(() => {
        null == N || null == R || d.Z.isFetchingForSKU(R) || (0, p.y)(N, R);
    }, [N, R]);
    let k = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (null == D ? void 0 : D.applicationId) != null &&
                        null != N &&
                        (0, h.g)({
                            skuId: R,
                            applicationId: D.applicationId,
                            guildId: N,
                            isStorefront: !1,
                        });
            },
            [R, null == D ? void 0 : D.applicationId, N],
        ),
        U = i.useCallback(() => {
            null != D && (0, m.P)(D, { isGift: !1 });
        }, [D]),
        G = i.useCallback(() => {
            null != D &&
                (0, m.P)(D, {
                    isGift: !0,
                    giftRecipient: null != L ? L : void 0,
                });
        }, [D, L]);
    return w && null == D
        ? (0, r.jsx)("div", {
              className: O.container,
              children: (0, r.jsx)(s.$jN, { className: O.spinner }),
          })
        : null == D
          ? null
          : (0, r.jsxs)("div", {
                className: O.container,
                children: [
                    (0, r.jsx)(E.C, {
                        className: O.card,
                        applicationId: D.applicationId,
                        skuId: R,
                        variant: E.Z.EMBEDDED,
                        onClick: k,
                    }),
                    (0, r.jsxs)("div", {
                        className: O.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: O.detailsTitleDescription,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/bold",
                                        lineClamp: 1,
                                        children: D.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: O.detailsDescription,
                                        children: [
                                            null != M &&
                                                (0, r.jsx)("img", {
                                                    src: M.toString(),
                                                    alt: j,
                                                    className: O.iconAsset,
                                                }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/semibold",
                                                lineClamp: 1,
                                                children: (0, f.T4)(
                                                    null != (S = null == (t = D.price) ? void 0 : t.amount) ? S : 0,
                                                    null != (T = null == (n = D.price) ? void 0 : n.currency)
                                                        ? T
                                                        : b.pK.USD,
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
                                        onClick: k,
                                        text: y.intl.string(y.t.KLBTgF),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        variant: "primary",
                                        onClick: U,
                                        text: y.intl.format(y.t.Xp5WTn, {
                                            price: (0, f.T4)(
                                                null != (A = null == (v = D.price) ? void 0 : v.amount) ? A : 0,
                                                null != (C = null == (I = D.price) ? void 0 : I.currency)
                                                    ? C
                                                    : b.pK.USD,
                                            ),
                                        }),
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(g.Z, { onGift: G }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
}
