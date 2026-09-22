n.d(t, { A: () => eu });
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
    _ = n(380619),
    x = n(531536),
    T = n(412260),
    N = n(219271),
    b = n(427358),
    j = n(7133),
    R = n(994500),
    M = n(351906),
    O = n(287809),
    L = n(957565),
    k = n(45938),
    w = n(158045),
    U = n(427262),
    D = n(951305),
    G = n(482132),
    F = n(331322),
    B = n(834730),
    H = n(683071),
    W = n(696208),
    Y = n(869038),
    V = n(793574),
    K = n(688810),
    Z = n(590180),
    q = n(450047),
    z = n(61750),
    Q = n(192308),
    $ = n(780964),
    J = n(766075),
    X = n(403362),
    ee = n(758836),
    et = n(375708),
    en = n(341535),
    el = n(863263);
function ei(e) {
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
                (I.A.fetchRelationships(), (0, N.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, u.cf)([b.A], () => ({
                    userAffinities: b.A.getUserAffinitiesMap(),
                    isLoading: b.A.isFetching(),
                })),
                n = i.useMemo(() => Array.from(e.keys()).sort((e, t) => b.A.compare(e, t)), [e]),
                l = (0, u.bG)([R.A], () => R.A.getFriendIDs()),
                r = i.useMemo(() => [...n, ...o().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, u.yK)(
                    [O.default],
                    () =>
                        r
                            .map(O.default.getUser)
                            .filter(X.Vq)
                            .filter((e) => !e.bot),
                    [r],
                ),
            };
        })(),
        { analyticsLocations: j } = (0, K.Ay)(V.A.PREMIUM_GIFT_SUCCESS_MODAL),
        { claimableRewards: M } = (0, D.Pv)(),
        L = (0, u.yK)([T.A], () => T.A.getGiftPromotionRewardSkuIds()),
        k = (0, u.yK)([O.default], () => f.map(O.default.getUser).filter(X.Vq), [f]),
        w = r > 1,
        ei = w ? !s : null == t,
        ea = 1 === f.length,
        es = ea ? null == t : !s,
        eo = f.length > 1 && null == a,
        eu = A || 0 === f.length || f.length > r || k.length !== f.length || es || eo,
        ec = x.map((e) => ({
            id: e.id,
            value: e.id,
            label: U.Ay.getUserTag(e),
            leading: (0, l.jsx)(g.A, { user: e, size: h._3.SIZE_20 }),
            disabled: w && f.length >= r && !f.includes(e.id),
        })),
        ed = (0, q.D)(d),
        [em, ...ep] = (0, u.yK)([Z.A], () => d.map((e) => Z.A.getProduct(e)).filter((e) => null != e));
    async function eC() {
        var e;
        let i;
        P(!0);
        try {
            if (ea) {
                let e = k[0];
                (await (0, v.UN)(e, t), (i = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == a) throw Error("Checkout session ID must be defined");
                let e = await (0, Y.kW)(f, a),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                i = { recipients: k.filter((e) => t.has(e.id)), failedRecipients: k.filter((e) => n.has(e.id)) };
            }
        } catch {
            i = { recipients: [], failedRecipients: k };
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
            (0, Q.openModalLazy)(async () => {
                let { default: t } = await n.e("692318").then(n.bind(n, 150061));
                return (n) => (0, l.jsx)(t, { ...n, ...e });
            }));
    }
    function eh(e) {
        e.length <= r && E(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: el.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: el.OA,
                        children: [
                            w
                                ? (0, l.jsxs)(F.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(F.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, l.jsx)(B.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: et.intl.string(en.default.ZolTTE),
                                                  }),
                                                  (0, l.jsx)(B.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      tabularNumbers: !0,
                                                      role: "status",
                                                      children: et.intl.format(et.t.H55rqz, {
                                                          numMembers: f.length,
                                                          maxMemberLimit: r,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(S.Z, {
                                              selectionMode: "multiple",
                                              label: et.intl.string(en.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: et.intl.string(en.default.xdDO7f),
                                              loading: _ || ei,
                                              disabled: ei || A,
                                              value: f,
                                              onSelectionChange: eh,
                                              options: ec,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(S.Z, {
                                      selectionMode: "single",
                                      label: et.intl.string(et.t.MJw05f),
                                      placeholder: et.intl.string(et.t.J019jZ),
                                      loading: _ || ei,
                                      disabled: ei || A,
                                      value: f[0],
                                      onSelectionChange: (e) => eh(null != e ? [e] : []),
                                      options: ec,
                                  }),
                            c,
                        ],
                    }),
                    null != em &&
                        (0, l.jsx)(er, {
                            product: em,
                            moreCount: ep.length,
                            purchasedSkuIds: d,
                            claimableRewards: M,
                            allRewards: L,
                        }),
                    (0, l.jsx)(H.w, {
                        type: "info",
                        children: et.intl.format(en.default.ZvgWUV, {
                            giftCount: r,
                            onInventoryClick: function () {
                                (C(), (0, y.bz)(), (0, J.openUserSettings)($.X.GIFT_PANEL, { analyticsLocations: j }));
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(G.UX, {
                children: (0, l.jsx)(W.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: et.intl.string(en.default["qTXpj/"]),
                            disabled: ed || A,
                            onClick: function () {
                                (C(),
                                    (0, y.bz)(),
                                    null != em
                                        ? (0, z.A)({
                                              product: em,
                                              remainingProducts: ep,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: j,
                                              purchaseType: ee.gs.GIFT,
                                              onCloseCallback: m ? p : void 0,
                                          })
                                        : m && p());
                            },
                        },
                        {
                            variant: "primary",
                            text: et.intl.string(et.t["+EgwQn"]),
                            disabled: eu,
                            loading: ed || A,
                            onClick: eC,
                        },
                    ],
                }),
            }),
        ],
    });
}
function er(e) {
    let { product: t, moreCount: n, purchasedSkuIds: i, claimableRewards: r, allRewards: a } = e;
    return (0, l.jsx)(x.v, {
        className: el.Km,
        product: t,
        title: et.intl.format(en.default["3ihAAO"], { count: n + 1 }),
        subtitle: (0, _.iq)(a, r, i),
    });
}
var ea = n(652215),
    es = n(202541),
    eo = n(815328);
function eu(e) {
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
            hasSentMessage: N,
            giftRecipient: b,
            giftMessageError: R,
            isSendingMessage: O,
        } = e,
        [F, B] = i.useState(p.e.Modes.DEFAULT),
        H = (0, u.bG)([M.A], () => M.A.enabled),
        W = N || (null != v && null != b),
        Y = I?.productLine === ea.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: V,
            claimableRewards: K,
            openGiftingBadgePostPurchaseModal: Z,
            canShowGiftingBadgePostPurchase: q,
        } = (0, D.Pv)(),
        z = (0, u.yK)([T.A], () => T.A.getGiftPromotionRewardSkuIds()),
        Q = (0, _.Mq)(A) && V.length > 0,
        $ = q && 0 === V.length;
    function J() {
        return null != A ? A.skuId : null != I ? I.id : null;
    }
    function X() {
        let e;
        return null != R
            ? et.intl.string(et.t.qB8aya)
            : null == A
              ? null
              : ((e =
                    A.interval === es.WT.MONTH ? (W ? et.t["4ZJ+7Z"] : et.t["P+z55d"]) : W ? et.t.p0pZXP : et.t.bXqk3o),
                et.intl.format(e, { skuName: (0, w.RH)(A.id), intervalCount: A.intervalCount }));
    }
    function ee() {
        let e;
        if (null == t) return null;
        switch (F) {
            case p.e.Modes.SUCCESS:
                e = et.intl.string(et.t.XVvPjU);
                break;
            case p.e.Modes.ERROR:
                e = et.intl.string(et.t.i4GM3L);
                break;
            default:
                e = et.intl.string(et.t.OpuAlK);
        }
        return (0, l.jsx)(C.D, {
            label: et.intl.string(et.t["/dG4NA"]),
            children: (0, l.jsx)(p.e, {
                hideMessage: H ? et.intl.string(et.t["0RLn47"]) : null,
                value: (0, k.Zq)(t),
                mode: F,
                text: e,
                onCopy: (e) => {
                    (null != I && (0, k.AK)(new j.A({ code: t, maxUses: 1 }), I),
                        (0, L.C)(
                            e,
                            () => B(p.e.Modes.SUCCESS),
                            () => B(p.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            B(p.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: L.p5,
                className: eo.__invalid_copyInput,
                buttonColor: m.XD.LINK,
                buttonLook: m.pR.LINK,
            }),
        });
    }
    return O
        ? (0, l.jsxs)("div", {
              className: eo.EL,
              children: [
                  null != S
                      ? (0, l.jsx)(P.A, { game: S, className: eo.__invalid_icon, size: P.M.LARGE, skuId: J() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : o
          ? (0, l.jsx)(ei, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: r,
                deliveryReady: s,
                privateGiftLink: 1 === n ? ee() : null,
                rewardSkuIds: V,
                canShowGiftingBadgePostPurchase: q,
                openGiftingBadgePostPurchaseModal: Z,
                onClose: x,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(eo.EL, { [eo.L1]: Q }),
                        children: [
                            null != S
                                ? (0, l.jsx)(P.A, {
                                      game: S,
                                      className: eo.__invalid_icon,
                                      size: P.M.LARGE,
                                      skuId: J(),
                                  })
                                : null,
                            (0, l.jsx)(f.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [eo.wx]: null == v && !Y, [eo.$A]: null != v && !Y }),
                                children:
                                    null != b || (N && null == R)
                                        ? et.intl.string(et.t.zOmK9N)
                                        : null != R
                                          ? et.intl.string(et.t.d1lrmU)
                                          : et.intl.string(et.t["/s1xR7"]),
                            }),
                            (N && null != b && null == R) || W
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: eo.jx,
                                              children: [
                                                  (0, l.jsx)(g.A, { user: b, size: h._3.SIZE_24 }),
                                                  (0, l.jsx)(f.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: U.Ay.getName(b),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: eo._c, children: X() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: eo.I0, children: X() }),
                                          null == R &&
                                              (0, l.jsx)(ed, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (x(), (0, y.bz)(), $ && Z());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: eo.yF }),
                                          (0, l.jsxs)("div", {
                                              className: eo.PN,
                                              children: [
                                                  ee(),
                                                  (0, l.jsx)("div", {
                                                      className: eo.W$,
                                                      children: et.intl.string(et.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            V.length > 0 && (0, l.jsx)(ec, { skuIds: V, claimableRewards: K, allRewards: z }),
                        ],
                    }),
                    $ &&
                        (0, l.jsx)(G.UX, {
                            children: (0, l.jsx)(c.j, {
                                children: (0, l.jsx)("div", {
                                    className: eo.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: et.intl.string(et.t.PDTjLN),
                                        onClick: () => {
                                            (x(), Z());
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function ec(e) {
    let { skuIds: t, claimableRewards: n, allRewards: i } = e,
        { product: r } = (0, A.q)(t[0]);
    return null == r
        ? null
        : (0, l.jsx)(x.v, {
              className: eo.Km,
              product: r,
              title: et.intl.format(en.default["3ihAAO"], { count: t.length }),
              subtitle: (0, _.iq)(i, n, t),
          });
}
function ed(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        (I.A.fetchRelationships(), (0, N.u)());
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [m, p] = i.useState(!1),
        { userAffinities: C, isLoading: f } = (0, u.cf)([b.A], () => ({
            userAffinities: b.A.getUserAffinitiesMap(),
            isLoading: b.A.isFetching(),
        })),
        E = Array.from(C.keys()).sort((e, t) => b.A.compare(e, t)),
        y = (0, u.bG)([R.A], () => R.A.getFriendIDs()),
        A = o().difference(y, E),
        P = [...E, ...A],
        _ = (0, u.bG)([O.default], () => O.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == _ || 0 === _.length) return null;
    let x = o().sortBy(_, (e) => P.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: eo.vt,
        children: [
            (0, l.jsxs)("div", {
                className: eo.AQ,
                children: [
                    (0, l.jsx)(S.Z, {
                        selectionMode: "single",
                        label: et.intl.string(et.t.MJw05f),
                        placeholder: et.intl.string(et.t.J019jZ),
                        loading: f,
                        value: r,
                        onSelectionChange: (e) => {
                            (a(e), c(!1));
                        },
                        options: x.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${U.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(g.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: eo.Qg,
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
                            text: et.intl.string(et.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? eo.Sc : eo.W$,
                children: s ? et.intl.string(et.t.jo5Vbl) : et.intl.string(et.t["8/N3v3"]),
            }),
        ],
    });
}
