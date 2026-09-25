n.d(t, { A: () => eo });
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
    g = n(966327),
    A = n(674658),
    P = n(769015),
    v = n(242874),
    _ = n(810498),
    x = n(531536),
    T = n(219271),
    N = n(427358),
    b = n(7133),
    j = n(994500),
    R = n(351906),
    M = n(287809),
    O = n(957565),
    L = n(45938),
    k = n(158045),
    w = n(427262),
    U = n(951305),
    D = n(482132),
    G = n(331322),
    F = n(834730),
    B = n(683071),
    H = n(696208),
    W = n(869038),
    Y = n(793574),
    V = n(688810),
    K = n(590180),
    Z = n(450047),
    q = n(61750),
    z = n(192308),
    Q = n(780964),
    $ = n(766075),
    J = n(403362),
    X = n(758836),
    ee = n(375708),
    et = n(341535),
    en = n(863263);
function el(e) {
    let {
            giftCode: t,
            giftCount: r,
            checkoutSessionId: a,
            deliveryReady: s,
            privateGiftLink: c,
            rewardSkuIds: d,
            canShowGiftingBadgePostPurchase: m,
            openGiftingBadgePostPurchaseModal: p,
            onClose: C,
        } = e,
        [f, E] = i.useState([]),
        [A, P] = i.useState(!1),
        { isLoading: _, potentialRecipients: x } = (function () {
            i.useEffect(() => {
                (I.A.fetchRelationships(), (0, T.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, u.cf)([N.A], () => ({
                    userAffinities: N.A.getUserAffinitiesMap(),
                    isLoading: N.A.isFetching(),
                })),
                n = i.useMemo(() => Array.from(e.keys()).sort((e, t) => N.A.compare(e, t)), [e]),
                l = (0, u.bG)([j.A], () => j.A.getFriendIDs()),
                r = i.useMemo(() => [...n, ...o().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, u.yK)(
                    [M.default],
                    () =>
                        r
                            .map(M.default.getUser)
                            .filter(J.Vq)
                            .filter((e) => !e.bot),
                    [r],
                ),
            };
        })(),
        { analyticsLocations: b } = (0, V.Ay)(Y.A.PREMIUM_GIFT_SUCCESS_MODAL),
        R = (0, u.yK)([M.default], () => f.map(M.default.getUser).filter(J.Vq), [f]),
        O = r > 1,
        L = O ? !s : null == t,
        k = 1 === f.length,
        U = k ? null == t : !s,
        el = f.length > 1 && null == a,
        er = A || 0 === f.length || f.length > r || R.length !== f.length || U || el,
        ea = x.map((e) => ({
            id: e.id,
            value: e.id,
            label: w.Ay.getUserTag(e),
            leading: (0, l.jsx)(g.A, { user: e, size: h._3.SIZE_20 }),
            disabled: O && f.length >= r && !f.includes(e.id),
        })),
        es = (0, Z.D)(d),
        [eo, ...eu] = (0, u.yK)([K.A], () => d.map((e) => K.A.getProduct(e)).filter((e) => null != e));
    async function ec() {
        var e;
        let i;
        P(!0);
        try {
            if (k) {
                let e = R[0];
                (await (0, v.UN)(e, t), (i = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == a) throw Error("Checkout session ID must be defined");
                let e = await (0, W.kW)(f, a),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                i = { recipients: R.filter((e) => t.has(e.id)), failedRecipients: R.filter((e) => n.has(e.id)) };
            }
        } catch {
            i = { recipients: [], failedRecipients: R };
        } finally {
            P(!1);
        }
        (C(),
            (0, y.bz)(),
            (e = {
                recipients: i.recipients,
                failedRecipients: i.failedRecipients,
                rewardSkuIds: d,
                purchaseQuantity: r,
                canShowGiftingBadgePostPurchase: m,
                openGiftingBadgePostPurchaseModal: p,
            }),
            (0, z.openModalLazy)(async () => {
                let { default: t } = await n.e("692318").then(n.bind(n, 150061));
                return (n) => (0, l.jsx)(t, { ...n, ...e });
            }));
    }
    function ed(e) {
        e.length <= r && E(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: en.OA,
                        children: [
                            O
                                ? (0, l.jsxs)(G.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(G.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, l.jsx)(F.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: ee.intl.string(et.default.ZolTTE),
                                                  }),
                                                  (0, l.jsx)(F.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      tabularNumbers: !0,
                                                      role: "status",
                                                      children: ee.intl.format(ee.t.H55rqz, {
                                                          numMembers: f.length,
                                                          maxMemberLimit: r,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(S.Z, {
                                              selectionMode: "multiple",
                                              label: ee.intl.string(et.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: ee.intl.string(et.default.xdDO7f),
                                              loading: _ || L,
                                              disabled: L || A,
                                              value: f,
                                              onSelectionChange: ed,
                                              options: ea,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(S.Z, {
                                      selectionMode: "single",
                                      label: ee.intl.string(ee.t.MJw05f),
                                      placeholder: ee.intl.string(ee.t.J019jZ),
                                      loading: _ || L,
                                      disabled: L || A,
                                      value: f[0],
                                      onSelectionChange: (e) => ed(null != e ? [e] : []),
                                      options: ea,
                                  }),
                            c,
                        ],
                    }),
                    null != eo && (0, l.jsx)(ei, { product: eo, moreCount: eu.length }),
                    (0, l.jsx)(B.w, {
                        type: "info",
                        children: ee.intl.format(et.default.ZvgWUV, {
                            giftCount: r,
                            onInventoryClick: function () {
                                (C(), (0, y.bz)(), (0, $.openUserSettings)(Q.X.GIFT_PANEL, { analyticsLocations: b }));
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(D.UX, {
                children: (0, l.jsx)(H.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: ee.intl.string(et.default["qTXpj/"]),
                            disabled: es || A,
                            onClick: function () {
                                (C(),
                                    (0, y.bz)(),
                                    null != eo
                                        ? (0, q.A)({
                                              product: eo,
                                              remainingProducts: eu,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: b,
                                              purchaseType: X.gs.GIFT,
                                              onCloseCallback: m ? p : void 0,
                                          })
                                        : m && p());
                            },
                        },
                        {
                            variant: "primary",
                            text: ee.intl.string(ee.t["+EgwQn"]),
                            disabled: er,
                            loading: es || A,
                            onClick: ec,
                        },
                    ],
                }),
            }),
        ],
    });
}
function ei(e) {
    let { product: t, moreCount: n } = e,
        r = i.useMemo(() => (n > 0 ? ee.intl.format(et.default.XoHiqS, { name: t.name, count: n }) : t?.name), [t, n]);
    return (0, l.jsx)(x.v, {
        className: en.Km,
        product: t,
        title: ee.intl.format(et.default["1fYyf4"], { count: n + 1 }),
        subtitle: r,
    });
}
var er = n(652215),
    ea = n(202541),
    es = n(815328);
function eo(e) {
    let {
            giftCode: t,
            giftCount: n = 1,
            checkoutSessionId: r,
            giftCodeDeliveryReady: s = !1,
            shouldUsePostPurchaseRecipientDelivery: o = !1,
            application: S,
            sku: I,
            subscriptionPlan: A,
            selectedGiftStyle: v,
            onClose: x,
            hasSentMessage: T,
            giftRecipient: N,
            giftMessageError: j,
            isSendingMessage: M,
        } = e,
        [G, F] = i.useState(p.e.Modes.DEFAULT),
        B = (0, u.bG)([R.A], () => R.A.enabled),
        H = T || (null != v && null != N),
        W = I?.productLine === er.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: Y,
            openGiftingBadgePostPurchaseModal: V,
            canShowGiftingBadgePostPurchase: K,
        } = (0, U.Pv)(),
        Z = (0, _.Mq)(A) && Y.length > 0,
        q = K && 0 === Y.length;
    function z() {
        return null != A ? A.skuId : null != I ? I.id : null;
    }
    function Q() {
        let e;
        return null != j
            ? ee.intl.string(ee.t.qB8aya)
            : null == A
              ? null
              : ((e =
                    A.interval === ea.WT.MONTH ? (H ? ee.t["4ZJ+7Z"] : ee.t["P+z55d"]) : H ? ee.t.p0pZXP : ee.t.bXqk3o),
                ee.intl.format(e, { skuName: (0, k.RH)(A.id), intervalCount: A.intervalCount }));
    }
    function $() {
        let e;
        if (null == t) return null;
        switch (G) {
            case p.e.Modes.SUCCESS:
                e = ee.intl.string(ee.t.XVvPjU);
                break;
            case p.e.Modes.ERROR:
                e = ee.intl.string(ee.t.i4GM3L);
                break;
            default:
                e = ee.intl.string(ee.t.OpuAlK);
        }
        return (0, l.jsx)(C.D, {
            label: ee.intl.string(ee.t["/dG4NA"]),
            children: (0, l.jsx)(p.e, {
                hideMessage: B ? ee.intl.string(ee.t["0RLn47"]) : null,
                value: (0, L.Zq)(t),
                mode: G,
                text: e,
                onCopy: (e) => {
                    (null != I && (0, L.AK)(new b.A({ code: t, maxUses: 1 }), I),
                        (0, O.C)(
                            e,
                            () => F(p.e.Modes.SUCCESS),
                            () => F(p.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            F(p.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: O.p5,
                className: es.__invalid_copyInput,
                buttonColor: m.XD.LINK,
                buttonLook: m.pR.LINK,
            }),
        });
    }
    return M
        ? (0, l.jsxs)("div", {
              className: es.EL,
              children: [
                  null != S
                      ? (0, l.jsx)(P.A, { game: S, className: es.__invalid_icon, size: P.M.LARGE, skuId: z() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : o
          ? (0, l.jsx)(el, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: r,
                deliveryReady: s,
                privateGiftLink: 1 === n ? $() : null,
                rewardSkuIds: Y,
                canShowGiftingBadgePostPurchase: K,
                openGiftingBadgePostPurchaseModal: V,
                onClose: x,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(es.EL, { [es.L1]: Z }),
                        children: [
                            null != S
                                ? (0, l.jsx)(P.A, {
                                      game: S,
                                      className: es.__invalid_icon,
                                      size: P.M.LARGE,
                                      skuId: z(),
                                  })
                                : null,
                            (0, l.jsx)(f.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [es.wx]: null == v && !W, [es.$A]: null != v && !W }),
                                children:
                                    null != N || (T && null == j)
                                        ? ee.intl.string(ee.t.zOmK9N)
                                        : null != j
                                          ? ee.intl.string(ee.t.d1lrmU)
                                          : ee.intl.string(ee.t["/s1xR7"]),
                            }),
                            (T && null != N && null == j) || H
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: es.jx,
                                              children: [
                                                  (0, l.jsx)(g.A, { user: N, size: h._3.SIZE_24 }),
                                                  (0, l.jsx)(f.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: w.Ay.getName(N),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: es._c, children: Q() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: es.I0, children: Q() }),
                                          null == j &&
                                              (0, l.jsx)(ec, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (x(), (0, y.bz)(), q && V());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: es.yF }),
                                          (0, l.jsxs)("div", {
                                              className: es.PN,
                                              children: [
                                                  $(),
                                                  (0, l.jsx)("div", {
                                                      className: es.W$,
                                                      children: ee.intl.string(ee.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            Y.length > 0 && (0, l.jsx)(eu, { skuIds: Y }),
                        ],
                    }),
                    q &&
                        (0, l.jsx)(D.UX, {
                            children: (0, l.jsx)(c.j, {
                                children: (0, l.jsx)("div", {
                                    className: es.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: ee.intl.string(ee.t.PDTjLN),
                                        onClick: () => {
                                            (x(), V());
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function eu(e) {
    let { skuIds: t } = e,
        { product: n } = (0, A.q)(t[0]),
        r = i.useMemo(
            () =>
                null != n && t.length > 1
                    ? ee.intl.format(et.default.XoHiqS, { name: n.name, count: t.length - 1 })
                    : n?.name,
            [n, t.length],
        );
    return null == n
        ? null
        : (0, l.jsx)(x.v, {
              className: es.Km,
              product: n,
              title: ee.intl.format(et.default["1fYyf4"], { count: t.length }),
              subtitle: r,
          });
}
function ec(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        (I.A.fetchRelationships(), (0, T.u)());
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [m, p] = i.useState(!1),
        { userAffinities: C, isLoading: f } = (0, u.cf)([N.A], () => ({
            userAffinities: N.A.getUserAffinitiesMap(),
            isLoading: N.A.isFetching(),
        })),
        E = Array.from(C.keys()).sort((e, t) => N.A.compare(e, t)),
        y = (0, u.bG)([j.A], () => j.A.getFriendIDs()),
        A = o().difference(y, E),
        P = [...E, ...A],
        _ = (0, u.bG)([M.default], () => M.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == _ || 0 === _.length) return null;
    let x = o().sortBy(_, (e) => P.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: es.vt,
        children: [
            (0, l.jsxs)("div", {
                className: es.AQ,
                children: [
                    (0, l.jsx)(S.Z, {
                        selectionMode: "single",
                        label: ee.intl.string(ee.t.MJw05f),
                        placeholder: ee.intl.string(ee.t.J019jZ),
                        loading: f,
                        value: r,
                        onSelectionChange: (e) => {
                            (a(e), c(!1));
                        },
                        options: x.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${w.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(g.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: es.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == r,
                            loading: m,
                            onClick: () => {
                                (p(!0),
                                    (0, v.UN)(r, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (c(!0), p(!1));
                                        }));
                            },
                            text: ee.intl.string(ee.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? es.Sc : es.W$,
                children: s ? ee.intl.string(ee.t.jo5Vbl) : ee.intl.string(ee.t["8/N3v3"]),
            }),
        ],
    });
}
