n.d(t, { A: () => eu });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(435558),
    u = n.n(a),
    o = n(17928),
    c = n(364840),
    d = n(821609),
    f = n(862482),
    h = n(109802),
    m = n(452027),
    p = n(778712),
    C = n(297264),
    E = n(289873),
    y = n(890497),
    I = n(398590),
    S = n(717398),
    g = n(966327),
    _ = n(674658),
    P = n(769015),
    A = n(242874),
    x = n(810498),
    v = n(531536),
    M = n(219271),
    R = n(427358),
    T = n(7133),
    L = n(994500),
    b = n(351906),
    k = n(287809),
    N = n(957565),
    j = n(45938),
    U = n(158045),
    H = n(427262),
    w = n(951305),
    O = n(482132),
    F = n(331322),
    B = n(834730),
    D = n(683071),
    G = n(696208),
    Z = n(869038),
    K = n(793574),
    W = n(688810),
    Y = n(590180),
    q = n(450047),
    Q = n(61750),
    z = n(192308),
    V = n(780964),
    X = n(766075),
    $ = n(403362),
    J = n(758836),
    ee = n(660183),
    et = n(805161),
    en = n(863263);
function er(e) {
    let {
            giftCode: t,
            giftCount: i,
            checkoutSessionId: s,
            deliveryReady: a,
            privateGiftLink: c,
            rewardSkuIds: d,
            canShowGiftingBadgePostPurchase: f,
            openGiftingBadgePostPurchaseModal: h,
            onClose: m,
        } = e,
        [C, E] = l.useState([]),
        [_, P] = l.useState(!1),
        { isLoading: x, potentialRecipients: v } = (function () {
            l.useEffect(() => {
                (S.A.fetchRelationships(), (0, M.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, o.cf)([R.A], () => ({
                    userAffinities: R.A.getUserAffinitiesMap(),
                    isLoading: R.A.isFetching(),
                })),
                n = l.useMemo(() => Array.from(e.keys()).sort((e, t) => R.A.compare(e, t)), [e]),
                r = (0, o.bG)([L.A], () => L.A.getFriendIDs()),
                i = l.useMemo(() => [...n, ...u().difference(r, n)], [r, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, o.yK)(
                    [k.default],
                    () =>
                        i
                            .map(k.default.getUser)
                            .filter($.Vq)
                            .filter((e) => !e.bot),
                    [i],
                ),
            };
        })(),
        { analyticsLocations: T } = (0, W.Ay)(K.A.PREMIUM_GIFT_SUCCESS_MODAL),
        b = (0, o.yK)([k.default], () => C.map(k.default.getUser).filter($.Vq), [C]),
        N = i > 1,
        j = N ? !a : null == t,
        U = 1 === C.length,
        w = U ? null == t : !a,
        er = C.length > 1 && null == s,
        ei = _ || 0 === C.length || C.length > i || b.length !== C.length || w || er,
        es = v.map((e) => ({
            id: e.id,
            value: e.id,
            label: H.Ay.getUserTag(e),
            leading: (0, r.jsx)(g.A, { user: e, size: p._3.SIZE_20 }),
            disabled: N && C.length >= i && !C.includes(e.id),
        })),
        ea = (0, q.D)(d),
        [eu, ...eo] = (0, o.yK)([Y.A], () => d.map((e) => Y.A.getProduct(e)).filter((e) => null != e));
    async function ec() {
        var e;
        let l;
        P(!0);
        try {
            if (U) {
                let e = b[0];
                (await (0, A.UN)(e, t), (l = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == s) throw Error("Checkout session ID must be defined");
                let e = await (0, Z.kW)(C, s),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                l = { recipients: b.filter((e) => t.has(e.id)), failedRecipients: b.filter((e) => n.has(e.id)) };
            }
        } catch {
            l = { recipients: [], failedRecipients: b };
        } finally {
            P(!1);
        }
        (m(),
            (0, I.bz)(),
            (e = {
                recipients: l.recipients,
                failedRecipients: l.failedRecipients,
                rewardSkuIds: d,
                purchaseQuantity: i,
                canShowGiftingBadgePostPurchase: f,
                openGiftingBadgePostPurchaseModal: h,
            }),
            (0, z.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("719466"), n.e("692318")]).then(n.bind(n, 150061));
                return (n) => (0, r.jsx)(t, { ...n, ...e });
            }));
    }
    function ed(e) {
        e.length <= i && E(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: en.OA,
                        children: [
                            N
                                ? (0, r.jsxs)(F.B, {
                                      gap: 8,
                                      children: [
                                          (0, r.jsxs)(F.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, r.jsx)(B.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: ee.intl.string(et.default.ZolTTE),
                                                  }),
                                                  (0, r.jsx)(B.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      tabularNumbers: !0,
                                                      role: "status",
                                                      children: ee.intl.format(ee.t.H55rqz, {
                                                          numMembers: C.length,
                                                          maxMemberLimit: i,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              selectionMode: "multiple",
                                              label: ee.intl.string(et.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: ee.intl.string(et.default.xdDO7f),
                                              loading: x || j,
                                              disabled: j || _,
                                              value: C,
                                              onSelectionChange: ed,
                                              options: es,
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(y.Z, {
                                      selectionMode: "single",
                                      label: ee.intl.string(ee.t.MJw05f),
                                      placeholder: ee.intl.string(ee.t.J019jZ),
                                      loading: x || j,
                                      disabled: j || _,
                                      value: C[0],
                                      onSelectionChange: (e) => ed(null != e ? [e] : []),
                                      options: es,
                                  }),
                            c,
                        ],
                    }),
                    null != eu && (0, r.jsx)(el, { product: eu, moreCount: eo.length }),
                    (0, r.jsx)(D.w, {
                        type: "info",
                        message: ee.intl.format(et.default.ZvgWUV, {
                            giftCount: i,
                            onInventoryClick: function () {
                                (m(), (0, I.bz)(), (0, X.openUserSettings)(V.X.GIFT_PANEL, { analyticsLocations: T }));
                            },
                        }),
                        role: "static",
                    }),
                ],
            }),
            (0, r.jsx)(O.UX, {
                children: (0, r.jsx)(G.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: ee.intl.string(et.default["qTXpj/"]),
                            disabled: ea || _,
                            onClick: function () {
                                (m(),
                                    (0, I.bz)(),
                                    null != eu
                                        ? (0, Q.A)({
                                              product: eu,
                                              remainingProducts: eo,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: T,
                                              purchaseType: J.gs.GIFT,
                                              onCloseCallback: f ? h : void 0,
                                          })
                                        : f && h());
                            },
                        },
                        {
                            variant: "primary",
                            text: ee.intl.string(ee.t["+EgwQn"]),
                            disabled: ei,
                            loading: ea || _,
                            onClick: ec,
                        },
                    ],
                }),
            }),
        ],
    });
}
function el(e) {
    let { product: t, moreCount: n } = e,
        i = l.useMemo(() => (n > 0 ? ee.intl.format(et.default.XoHiqS, { name: t.name, count: n }) : t?.name), [t, n]);
    return (0, r.jsx)(v.v, {
        className: en.Km,
        product: t,
        title: ee.intl.format(et.default["1fYyf4"], { count: n + 1 }),
        subtitle: i,
    });
}
var ei = n(652215),
    es = n(202541),
    ea = n(815328);
function eu(e) {
    let {
            giftCode: t,
            giftCount: n = 1,
            checkoutSessionId: i,
            giftCodeDeliveryReady: a = !1,
            shouldUsePostPurchaseRecipientDelivery: u = !1,
            application: y,
            sku: S,
            subscriptionPlan: _,
            selectedGiftStyle: A,
            onClose: v,
            hasSentMessage: M,
            giftRecipient: R,
            giftMessageError: L,
            isSendingMessage: k,
        } = e,
        [F, B] = l.useState(h.e.Modes.DEFAULT),
        D = (0, o.bG)([b.A], () => b.A.enabled),
        G = M || (null != A && null != R),
        Z = S?.productLine === ei.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: K,
            openGiftingBadgePostPurchaseModal: W,
            canShowGiftingBadgePostPurchase: Y,
        } = (0, w.Pv)(),
        q = (0, x.Mq)(_) && K.length > 0,
        Q = Y && 0 === K.length;
    function z() {
        return null != _ ? _.skuId : null != S ? S.id : null;
    }
    function V() {
        let e;
        return null != L
            ? ee.intl.string(ee.t.qB8aya)
            : null == _
              ? null
              : ((e =
                    _.interval === es.WT.MONTH ? (G ? ee.t["4ZJ+7Z"] : ee.t["P+z55d"]) : G ? ee.t.p0pZXP : ee.t.bXqk3o),
                ee.intl.format(e, { skuName: (0, U.RH)(_.id), intervalCount: _.intervalCount }));
    }
    function X() {
        let e;
        if (null == t) return null;
        switch (F) {
            case h.e.Modes.SUCCESS:
                e = ee.intl.string(ee.t.XVvPjU);
                break;
            case h.e.Modes.ERROR:
                e = ee.intl.string(ee.t.i4GM3L);
                break;
            default:
                e = ee.intl.string(ee.t.OpuAlK);
        }
        return (0, r.jsx)(m.D, {
            label: ee.intl.string(ee.t["/dG4NA"]),
            children: (0, r.jsx)(h.e, {
                hideMessage: D ? ee.intl.string(ee.t["0RLn47"]) : null,
                value: (0, j.Zq)(t),
                mode: F,
                text: e,
                onCopy: (e) => {
                    (null != S && (0, j.AK)(new T.A({ code: t, maxUses: 1 }), S),
                        (0, N.C)(
                            e,
                            () => B(h.e.Modes.SUCCESS),
                            () => B(h.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            B(h.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: N.p5,
                className: ea.__invalid_copyInput,
                buttonColor: f.XD.LINK,
                buttonLook: f.pR.LINK,
            }),
        });
    }
    return k
        ? (0, r.jsxs)("div", {
              className: ea.EL,
              children: [
                  null != y
                      ? (0, r.jsx)(P.A, { game: y, className: ea.__invalid_icon, size: P.M.LARGE, skuId: z() })
                      : null,
                  (0, r.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : u
          ? (0, r.jsx)(er, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: i,
                deliveryReady: a,
                privateGiftLink: 1 === n ? X() : null,
                rewardSkuIds: K,
                canShowGiftingBadgePostPurchase: Y,
                openGiftingBadgePostPurchaseModal: W,
                onClose: v,
            })
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(ea.EL, { [ea.L1]: q }),
                        children: [
                            null != y
                                ? (0, r.jsx)(P.A, {
                                      game: y,
                                      className: ea.__invalid_icon,
                                      size: P.M.LARGE,
                                      skuId: z(),
                                  })
                                : null,
                            (0, r.jsx)(C.D, {
                                variant: "heading-lg/semibold",
                                className: s()({ [ea.wx]: null == A && !Z, [ea.$A]: null != A && !Z }),
                                children:
                                    null != R || (M && null == L)
                                        ? ee.intl.string(ee.t.zOmK9N)
                                        : null != L
                                          ? ee.intl.string(ee.t.d1lrmU)
                                          : ee.intl.string(ee.t["/s1xR7"]),
                            }),
                            (M && null != R && null == L) || G
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: ea.jx,
                                              children: [
                                                  (0, r.jsx)(g.A, { user: R, size: p._3.SIZE_24 }),
                                                  (0, r.jsx)(C.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: H.Ay.getName(R),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)("div", { className: ea._c, children: V() }),
                                      ],
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", { className: ea.I0, children: V() }),
                                          null == L &&
                                              (0, r.jsx)(ec, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (v(), (0, I.bz)(), Q && W());
                                                  },
                                              }),
                                          (0, r.jsx)("div", { className: ea.yF }),
                                          (0, r.jsxs)("div", {
                                              className: ea.PN,
                                              children: [
                                                  X(),
                                                  (0, r.jsx)("div", {
                                                      className: ea.W$,
                                                      children: ee.intl.string(ee.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            K.length > 0 && (0, r.jsx)(eo, { skuIds: K }),
                        ],
                    }),
                    Q &&
                        (0, r.jsx)(O.UX, {
                            children: (0, r.jsx)(c.j, {
                                children: (0, r.jsx)("div", {
                                    className: ea.pP,
                                    children: (0, r.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: ee.intl.string(ee.t.PDTjLN),
                                        onClick: () => {
                                            (v(), W());
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function eo(e) {
    let { skuIds: t } = e,
        { product: n } = (0, _.q)(t[0]),
        i = l.useMemo(
            () =>
                null != n && t.length > 1
                    ? ee.intl.format(et.default.XoHiqS, { name: n.name, count: t.length - 1 })
                    : n?.name,
            [n, t.length],
        );
    return null == n
        ? null
        : (0, r.jsx)(v.v, {
              className: ea.Km,
              product: n,
              title: ee.intl.format(et.default["1fYyf4"], { count: t.length }),
              subtitle: i,
          });
}
function ec(e) {
    let { giftCode: t, onClose: n } = e;
    l.useEffect(() => {
        (S.A.fetchRelationships(), (0, M.u)());
    }, []);
    let [i, s] = l.useState(),
        [a, c] = l.useState(!1),
        [f, h] = l.useState(!1),
        { userAffinities: m, isLoading: C } = (0, o.cf)([R.A], () => ({
            userAffinities: R.A.getUserAffinitiesMap(),
            isLoading: R.A.isFetching(),
        })),
        E = Array.from(m.keys()).sort((e, t) => R.A.compare(e, t)),
        I = (0, o.bG)([L.A], () => L.A.getFriendIDs()),
        _ = u().difference(I, E),
        P = [...E, ..._],
        x = (0, o.bG)([k.default], () => k.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == x || 0 === x.length) return null;
    let v = u().sortBy(x, (e) => P.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: ea.vt,
        children: [
            (0, r.jsxs)("div", {
                className: ea.AQ,
                children: [
                    (0, r.jsx)(y.Z, {
                        selectionMode: "single",
                        label: ee.intl.string(ee.t.MJw05f),
                        placeholder: ee.intl.string(ee.t.J019jZ),
                        loading: C,
                        value: i,
                        onSelectionChange: (e) => {
                            (s(e), c(!1));
                        },
                        options: v.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${H.Ay.getUserTag(e)}`,
                            leading: (0, r.jsx)(g.A, { user: e, size: p._3.SIZE_20 }),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: ea.Qg,
                        children: (0, r.jsx)(d.$, {
                            disabled: null == i,
                            loading: f,
                            onClick: () => {
                                (h(!0),
                                    (0, A.UN)(i, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (c(!0), h(!1));
                                        }));
                            },
                            text: ee.intl.string(ee.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a ? ea.Sc : ea.W$,
                children: a ? ee.intl.string(ee.t.jo5Vbl) : ee.intl.string(ee.t["8/N3v3"]),
            }),
        ],
    });
}
