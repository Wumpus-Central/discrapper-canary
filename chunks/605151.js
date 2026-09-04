n.d(t, { A: () => J });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(17928),
    c = n(364840),
    d = n(821609),
    m = n(862482),
    p = n(109802),
    C = n(452027),
    h = n(778712),
    f = n(297264),
    E = n(289873),
    S = n(890497),
    y = n(398590),
    I = n(717398),
    A = n(966327),
    g = n(769015),
    P = n(242874),
    v = n(580194),
    _ = n(219271),
    x = n(427358),
    T = n(7133),
    N = n(994500),
    b = n(351906),
    j = n(287809),
    R = n(957565),
    M = n(45938),
    O = n(158045),
    L = n(427262),
    k = n(951305),
    w = n(683071),
    U = n(696208),
    D = n(869038),
    G = n(793574),
    F = n(688810),
    B = n(780964),
    H = n(766075),
    W = n(403362),
    Y = n(482132),
    V = n(375708),
    K = n(341535),
    Z = n(757716);
function q(e) {
    let {
            giftCode: t,
            giftCount: n,
            checkoutSessionId: r,
            deliveryReady: a,
            privateGiftLink: s,
            onComplete: c,
            onClose: d,
        } = e,
        [m, p] = i.useState([]),
        [C, f] = i.useState(!1),
        { isLoading: E, potentialRecipients: g } = (function () {
            i.useEffect(() => {
                I.A.fetchRelationships(), (0, _.u)();
            }, []);
            let { userAffinities: e, isLoading: t } = (0, u.cf)([x.A], () => ({
                    userAffinities: x.A.getUserAffinitiesMap(),
                    isLoading: x.A.isFetching(),
                })),
                n = i.useMemo(() => Array.from(e.keys()).sort((e, t) => x.A.compare(e, t)), [e]),
                l = (0, u.bG)([N.A], () => N.A.getFriendIDs()),
                r = i.useMemo(() => [...n, ...o().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, u.yK)(
                    [j.default],
                    () =>
                        r
                            .map(j.default.getUser)
                            .filter(W.Vq)
                            .filter((e) => !e.bot),
                    [r],
                ),
            };
        })(),
        { analyticsLocations: v } = (0, F.Ay)(G.A.PREMIUM_GIFT_SUCCESS_MODAL),
        T = (0, u.yK)([j.default], () => m.map(j.default.getUser).filter(W.Vq), [m]),
        b = n > 1,
        R = b ? !a : null == t,
        M = 1 === m.length,
        O = M ? null == t : !a,
        k = m.length > 1 && null == r,
        q = C || 0 === m.length || m.length > n || T.length !== m.length || O || k,
        z = g.map((e) => ({
            id: e.id,
            value: e.id,
            label: L.Ay.getUserTag(e),
            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
            disabled: b && m.length >= n && !m.includes(e.id),
        }));
    async function Q() {
        let e;
        f(!0);
        try {
            if (M) {
                let n = T[0];
                await (0, P.UN)(n, t), (e = { recipients: [n], failedRecipients: [] });
            } else {
                if (null == r) throw Error("Checkout session ID must be defined");
                let t = await (0, D.kW)(m, r),
                    n = new Set(t.successful_recipient_ids),
                    l = new Set(t.failed_recipient_ids);
                e = { recipients: T.filter((e) => n.has(e.id)), failedRecipients: T.filter((e) => l.has(e.id)) };
            }
        } catch {
            e = { recipients: [], failedRecipients: T };
        } finally {
            f(!1);
        }
        c(e);
    }
    function $(e) {
        e.length <= n && p(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: Z.Q,
                children: [
                    (0, l.jsxs)("div", {
                        className: Z.O,
                        children: [
                            b
                                ? (0, l.jsx)(S.Z, {
                                      selectionMode: "multiple",
                                      label: V.intl.string(K.default.ZolTTE),
                                      placeholder: V.intl.string(K.default.xdDO7f),
                                      loading: E || R,
                                      disabled: R || C,
                                      value: m,
                                      onSelectionChange: $,
                                      options: z,
                                  })
                                : (0, l.jsx)(S.Z, {
                                      selectionMode: "single",
                                      label: V.intl.string(V.t.MJw05f),
                                      placeholder: V.intl.string(V.t.J019jZ),
                                      loading: E || R,
                                      disabled: R || C,
                                      value: m[0],
                                      onSelectionChange: (e) => $(null != e ? [e] : []),
                                      options: z,
                                  }),
                            s,
                        ],
                    }),
                    (0, l.jsx)(w.w, {
                        type: "info",
                        children: V.intl.format(K.default.ZvgWUV, {
                            giftCount: n,
                            onInventoryClick: function () {
                                d(), (0, y.bz)(), (0, H.openUserSettings)(B.X.GIFT_PANEL, { analyticsLocations: v });
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(Y.UX, {
                children: (0, l.jsx)(U.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: V.intl.string(K.default["qTXpj/"]),
                            disabled: C,
                            onClick: function () {
                                d(), (0, y.bz)();
                            },
                        },
                        { variant: "primary", text: V.intl.string(V.t["+EgwQn"]), disabled: q, loading: C, onClick: Q },
                    ],
                }),
            }),
        ],
    });
}
var z = n(652215),
    Q = n(202541),
    $ = n(392309);
function J(e) {
    let {
            giftCode: t,
            giftCount: n = 1,
            checkoutSessionId: r,
            giftCodeDeliveryReady: s = !1,
            shouldUsePostPurchaseRecipientDelivery: o = !1,
            application: S,
            sku: I,
            subscriptionPlan: P,
            selectedGiftStyle: _,
            onClose: x,
            hasSentMessage: N,
            giftRecipient: j,
            giftMessageError: w,
            isSendingMessage: U,
        } = e,
        [D, G] = i.useState(p.e.Modes.DEFAULT),
        F = (0, u.bG)([b.A], () => b.A.enabled),
        B = N || (null != _ && null != j),
        H = I?.productLine === z.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: W,
            openGiftingBadgePostPurchaseModal: K,
            canShowGiftingBadgePostPurchase: Z,
        } = (0, k.Pv)(),
        J = (0, v.Mq)(P) && W.length > 0,
        ee = Z && 0 === W.length;
    function et() {
        return null != P ? P.skuId : null != I ? I.id : null;
    }
    function en() {
        let e;
        return null != w
            ? V.intl.string(V.t.qB8aya)
            : null == P
              ? null
              : ((e = P.interval === Q.WT.MONTH ? (B ? V.t["4ZJ+7Z"] : V.t["P+z55d"]) : B ? V.t.p0pZXP : V.t.bXqk3o),
                V.intl.format(e, { skuName: (0, O.RH)(P.id), intervalCount: P.intervalCount }));
    }
    function el() {
        let e;
        if (null == t) return null;
        switch (D) {
            case p.e.Modes.SUCCESS:
                e = V.intl.string(V.t.XVvPjU);
                break;
            case p.e.Modes.ERROR:
                e = V.intl.string(V.t.i4GM3L);
                break;
            default:
                e = V.intl.string(V.t.OpuAlK);
        }
        return (0, l.jsx)(C.D, {
            label: V.intl.string(V.t["/dG4NA"]),
            children: (0, l.jsx)(p.e, {
                hideMessage: F ? V.intl.string(V.t["0RLn47"]) : null,
                value: (0, M.Zq)(t),
                mode: D,
                text: e,
                onCopy: (e) => {
                    null != I && (0, M.AK)(new T.A({ code: t, maxUses: 1 }), I),
                        (0, R.C)(
                            e,
                            () => G(p.e.Modes.SUCCESS),
                            () => G(p.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            G(p.e.Modes.DEFAULT);
                        }, 1500);
                },
                supportsCopy: R.p5,
                className: $.__invalid_copyInput,
                buttonColor: m.XD.LINK,
                buttonLook: m.pR.LINK,
            }),
        });
    }
    return U
        ? (0, l.jsxs)("div", {
              className: $.EL,
              children: [
                  null != S
                      ? (0, l.jsx)(g.A, { game: S, className: $.__invalid_icon, size: g.M.LARGE, skuId: et() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : o
          ? (0, l.jsx)(q, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: r,
                deliveryReady: s,
                privateGiftLink: 1 === n ? el() : null,
                onComplete: () => {
                    x(), (0, y.bz)();
                },
                onClose: x,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()($.EL, { [$.L1]: J }),
                        children: [
                            null != S
                                ? (0, l.jsx)(g.A, {
                                      game: S,
                                      className: $.__invalid_icon,
                                      size: g.M.LARGE,
                                      skuId: et(),
                                  })
                                : null,
                            (0, l.jsx)(f.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [$.wx]: null == _ && !H, [$.$A]: null != _ && !H }),
                                children:
                                    null != j || (N && null == w)
                                        ? V.intl.string(V.t.zOmK9N)
                                        : null != w
                                          ? V.intl.string(V.t.d1lrmU)
                                          : V.intl.string(V.t["/s1xR7"]),
                            }),
                            (N && null != j && null == w) || B
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: $.jx,
                                              children: [
                                                  (0, l.jsx)(A.A, { user: j, size: h._3.SIZE_40 }),
                                                  (0, l.jsxs)("div", {
                                                      className: $.gn,
                                                      children: [
                                                          (0, l.jsx)(f.D, {
                                                              variant: "heading-md/semibold",
                                                              children: L.Ay.getName(j),
                                                          }),
                                                          (0, l.jsxs)("div", {
                                                              className: $.Ik,
                                                              children: [" ", L.Ay.getUserTag(j)],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: $._c, children: en() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: $.I0, children: en() }),
                                          null == w &&
                                              (0, l.jsx)(X, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      x(), (0, y.bz)(), ee && K();
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: $.yF }),
                                          (0, l.jsxs)("div", {
                                              className: $.PN,
                                              children: [
                                                  el(),
                                                  (0, l.jsx)("div", {
                                                      className: $.W$,
                                                      children: V.intl.string(V.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    ee &&
                        (0, l.jsx)(Y.UX, {
                            children: (0, l.jsx)(c.j, {
                                children: (0, l.jsx)("div", {
                                    className: $.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: V.intl.string(V.t.PDTjLN),
                                        onClick: () => {
                                            x(), K();
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function X(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        I.A.fetchRelationships(), (0, _.u)();
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [m, p] = i.useState(!1),
        { userAffinities: C, isLoading: f } = (0, u.cf)([x.A], () => ({
            userAffinities: x.A.getUserAffinitiesMap(),
            isLoading: x.A.isFetching(),
        })),
        E = Array.from(C.keys()).sort((e, t) => x.A.compare(e, t)),
        y = (0, u.bG)([N.A], () => N.A.getFriendIDs()),
        g = o().difference(y, E),
        v = [...E, ...g],
        T = (0, u.bG)([j.default], () => j.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == T || 0 === T.length) return null;
    let b = o().sortBy(T, (e) => v.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: $.vt,
        children: [
            (0, l.jsxs)("div", {
                className: $.AQ,
                children: [
                    (0, l.jsx)(S.Z, {
                        selectionMode: "single",
                        label: V.intl.string(V.t.MJw05f),
                        placeholder: V.intl.string(V.t.J019jZ),
                        loading: f,
                        value: r,
                        onSelectionChange: (e) => {
                            a(e), c(!1);
                        },
                        options: b.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${L.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: $.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == r,
                            loading: m,
                            onClick: () => {
                                p(!0),
                                    (0, P.UN)(r, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            c(!0), p(!1);
                                        });
                            },
                            text: V.intl.string(V.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? $.Sc : $.W$,
                children: s ? V.intl.string(V.t.jo5Vbl) : V.intl.string(V.t["8/N3v3"]),
            }),
        ],
    });
}
