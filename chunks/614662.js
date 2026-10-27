n.d(t, { A: () => eu });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(435558),
    u = n.n(s),
    c = n(17928),
    o = n(364840),
    d = n(821609),
    f = n(862482),
    h = n(109802),
    m = n(452027),
    p = n(778712),
    C = n(297264),
    E = n(289873),
    y = n(890497),
    _ = n(398590),
    g = n(49229),
    I = n(966327),
    S = n(674658),
    A = n(769015),
    x = n(242874),
    P = n(810498),
    v = n(531536),
    R = n(175452),
    M = n(427358),
    T = n(7133),
    L = n(994500),
    b = n(351906),
    j = n(287809),
    N = n(957565),
    k = n(45938),
    U = n(927578),
    w = n(427262),
    H = n(951305),
    O = n(482132),
    F = n(331322),
    D = n(834730),
    B = n(683071),
    G = n(696208),
    Z = n(869038),
    K = n(793574),
    W = n(688810),
    Y = n(590180),
    q = n(450047),
    z = n(61750),
    Q = n(192308),
    V = n(780964),
    X = n(766075),
    $ = n(403362),
    J = n(758836),
    ee = n(105292),
    et = n(341535),
    en = n(863263);
function el(e) {
    let {
            giftCode: t,
            giftCount: i,
            checkoutSessionId: a,
            deliveryReady: s,
            privateGiftLink: o,
            rewardSkuIds: d,
            canShowGiftingBadgePostPurchase: f,
            openGiftingBadgePostPurchaseModal: h,
            onClose: m,
        } = e,
        [C, E] = r.useState([]),
        [S, A] = r.useState(!1),
        { isLoading: P, potentialRecipients: v } = (function () {
            r.useEffect(() => {
                (g.A.fetchRelationships(), (0, R.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, c.cf)([M.A], () => ({
                    userAffinities: M.A.getUserAffinitiesMap(),
                    isLoading: M.A.isFetching(),
                })),
                n = r.useMemo(() => Array.from(e.keys()).sort((e, t) => M.A.compare(e, t)), [e]),
                l = (0, c.bG)([L.A], () => L.A.getFriendIDs()),
                i = r.useMemo(() => [...n, ...u().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, c.yK)(
                    [j.default],
                    () =>
                        i
                            .map(j.default.getUser)
                            .filter($.Vq)
                            .filter((e) => !e.bot),
                    [i],
                ),
            };
        })(),
        { analyticsLocations: T } = (0, W.Ay)(K.A.PREMIUM_GIFT_SUCCESS_MODAL),
        b = (0, c.yK)([j.default], () => C.map(j.default.getUser).filter($.Vq), [C]),
        N = i > 1,
        k = N ? !s : null == t,
        U = 1 === C.length,
        H = U ? null == t : !s,
        el = C.length > 1 && null == a,
        ei = S || 0 === C.length || C.length > i || b.length !== C.length || H || el,
        ea = v.map((e) => ({
            id: e.id,
            value: e.id,
            label: w.Ay.getUserTag(e),
            leading: (0, l.jsx)(I.A, { user: e, size: p._3.SIZE_20 }),
            disabled: N && C.length >= i && !C.includes(e.id),
        })),
        es = (0, q.D)(d),
        [eu, ...ec] = (0, c.yK)([Y.A], () => d.map((e) => Y.A.getProduct(e)).filter((e) => null != e));
    async function eo() {
        var e;
        let r;
        A(!0);
        try {
            if (U) {
                let e = b[0];
                (await (0, x.UN)(e, t), (r = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == a) throw Error("Checkout session ID must be defined");
                let e = await (0, Z.kW)(C, a),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                r = { recipients: b.filter((e) => t.has(e.id)), failedRecipients: b.filter((e) => n.has(e.id)) };
            }
        } catch {
            r = { recipients: [], failedRecipients: b };
        } finally {
            A(!1);
        }
        (m(),
            (0, _.bz)(),
            (e = {
                recipients: r.recipients,
                failedRecipients: r.failedRecipients,
                rewardSkuIds: d,
                purchaseQuantity: i,
                canShowGiftingBadgePostPurchase: f,
                openGiftingBadgePostPurchaseModal: h,
            }),
            (0, Q.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("719466"), n.e("692318")]).then(n.bind(n, 150061));
                return (n) => (0, l.jsx)(t, { ...n, ...e });
            }));
    }
    function ed(e) {
        e.length <= i && E(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: en.OA,
                        children: [
                            N
                                ? (0, l.jsxs)(F.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(F.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, l.jsx)(D.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: ee.intl.string(et.default.ZolTTE),
                                                  }),
                                                  (0, l.jsx)(D.E, {
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
                                          (0, l.jsx)(y.Z, {
                                              selectionMode: "multiple",
                                              label: ee.intl.string(et.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: ee.intl.string(et.default.xdDO7f),
                                              loading: P || k,
                                              disabled: k || S,
                                              value: C,
                                              onSelectionChange: ed,
                                              options: ea,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(y.Z, {
                                      selectionMode: "single",
                                      label: ee.intl.string(ee.t.MJw05f),
                                      placeholder: ee.intl.string(ee.t.J019jZ),
                                      loading: P || k,
                                      disabled: k || S,
                                      value: C[0],
                                      onSelectionChange: (e) => ed(null != e ? [e] : []),
                                      options: ea,
                                  }),
                            o,
                        ],
                    }),
                    null != eu && (0, l.jsx)(er, { product: eu, moreCount: ec.length }),
                    (0, l.jsx)(B.w, {
                        type: "info",
                        message: ee.intl.format(et.default.ZvgWUV, {
                            giftCount: i,
                            onInventoryClick: function () {
                                (m(), (0, _.bz)(), (0, X.openUserSettings)(V.X.GIFT_PANEL, { analyticsLocations: T }));
                            },
                        }),
                        role: "none",
                    }),
                ],
            }),
            (0, l.jsx)(O.UX, {
                children: (0, l.jsx)(G.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: ee.intl.string(et.default["qTXpj/"]),
                            disabled: es || S,
                            onClick: function () {
                                (m(),
                                    (0, _.bz)(),
                                    null != eu
                                        ? (0, z.A)({
                                              product: eu,
                                              remainingProducts: ec,
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
                            loading: es || S,
                            onClick: eo,
                        },
                    ],
                }),
            }),
        ],
    });
}
function er(e) {
    let { product: t, moreCount: n } = e,
        i = r.useMemo(() => (n > 0 ? ee.intl.format(et.default.XoHiqS, { name: t.name, count: n }) : t?.name), [t, n]);
    return (0, l.jsx)(v.v, {
        className: en.Km,
        product: t,
        title: ee.intl.format(et.default["1fYyf4"], { count: n + 1 }),
        subtitle: i,
    });
}
var ei = n(652215),
    ea = n(202541),
    es = n(815328);
function eu(e) {
    let {
            giftCode: t,
            giftCount: n = 1,
            checkoutSessionId: i,
            giftCodeDeliveryReady: s = !1,
            shouldUsePostPurchaseRecipientDelivery: u = !1,
            application: y,
            sku: g,
            subscriptionPlan: S,
            selectedGiftStyle: x,
            onClose: v,
            hasSentMessage: R,
            giftRecipient: M,
            giftMessageError: L,
            isSendingMessage: j,
        } = e,
        [F, D] = r.useState(h.e.Modes.DEFAULT),
        B = (0, c.bG)([b.A], () => b.A.enabled),
        G = R || (null != x && null != M),
        Z = g?.productLine === ei.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: K,
            openGiftingBadgePostPurchaseModal: W,
            canShowGiftingBadgePostPurchase: Y,
        } = (0, H.Pv)(),
        q = (0, P.Mq)(S) && K.length > 0,
        z = Y && 0 === K.length;
    function Q() {
        return null != S ? S.skuId : null != g ? g.id : null;
    }
    function V() {
        let e;
        return null != L
            ? ee.intl.string(ee.t.qB8aya)
            : null == S
              ? null
              : ((e =
                    S.interval === ea.WT.MONTH ? (G ? ee.t["4ZJ+7Z"] : ee.t["P+z55d"]) : G ? ee.t.p0pZXP : ee.t.bXqk3o),
                ee.intl.format(e, { skuName: (0, U.RH)(S.id), intervalCount: S.intervalCount }));
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
        return (0, l.jsx)(m.D, {
            label: ee.intl.string(ee.t["/dG4NA"]),
            children: (0, l.jsx)(h.e, {
                hideMessage: B ? ee.intl.string(ee.t["0RLn47"]) : null,
                value: (0, k.Zq)(t),
                mode: F,
                text: e,
                onCopy: (e) => {
                    (null != g && (0, k.AK)(new T.A({ code: t, maxUses: 1 }), g),
                        (0, N.C)(
                            e,
                            () => D(h.e.Modes.SUCCESS),
                            () => D(h.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            D(h.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: N.p5,
                className: es.__invalid_copyInput,
                buttonColor: f.XD.LINK,
                buttonLook: f.pR.LINK,
            }),
        });
    }
    return j
        ? (0, l.jsxs)("div", {
              className: es.EL,
              children: [
                  null != y
                      ? (0, l.jsx)(A.A, { game: y, className: es.__invalid_icon, size: A.M.LARGE, skuId: Q() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : u
          ? (0, l.jsx)(el, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: i,
                deliveryReady: s,
                privateGiftLink: 1 === n ? X() : null,
                rewardSkuIds: K,
                canShowGiftingBadgePostPurchase: Y,
                openGiftingBadgePostPurchaseModal: W,
                onClose: v,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(es.EL, { [es.L1]: q }),
                        children: [
                            null != y
                                ? (0, l.jsx)(A.A, {
                                      game: y,
                                      className: es.__invalid_icon,
                                      size: A.M.LARGE,
                                      skuId: Q(),
                                  })
                                : null,
                            (0, l.jsx)(C.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [es.wx]: null == x && !Z, [es.$A]: null != x && !Z }),
                                children:
                                    null != M || (R && null == L)
                                        ? ee.intl.string(ee.t.zOmK9N)
                                        : null != L
                                          ? ee.intl.string(ee.t.d1lrmU)
                                          : ee.intl.string(ee.t["/s1xR7"]),
                            }),
                            (R && null != M && null == L) || G
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: es.jx,
                                              children: [
                                                  (0, l.jsx)(I.A, { user: M, size: p._3.SIZE_24 }),
                                                  (0, l.jsx)(C.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: w.Ay.getName(M),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: es._c, children: V() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: es.I0, children: V() }),
                                          null == L &&
                                              (0, l.jsx)(eo, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (v(), (0, _.bz)(), z && W());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: es.yF }),
                                          (0, l.jsxs)("div", {
                                              className: es.PN,
                                              children: [
                                                  X(),
                                                  (0, l.jsx)("div", {
                                                      className: es.W$,
                                                      children: ee.intl.string(ee.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            K.length > 0 && (0, l.jsx)(ec, { skuIds: K }),
                        ],
                    }),
                    z &&
                        (0, l.jsx)(O.UX, {
                            children: (0, l.jsx)(o.j, {
                                children: (0, l.jsx)("div", {
                                    className: es.pP,
                                    children: (0, l.jsx)(d.$, {
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
function ec(e) {
    let { skuIds: t } = e,
        { product: n } = (0, S.q)(t[0]),
        i = r.useMemo(
            () =>
                null != n && t.length > 1
                    ? ee.intl.format(et.default.XoHiqS, { name: n.name, count: t.length - 1 })
                    : n?.name,
            [n, t.length],
        );
    return null == n
        ? null
        : (0, l.jsx)(v.v, {
              className: es.Km,
              product: n,
              title: ee.intl.format(et.default["1fYyf4"], { count: t.length }),
              subtitle: i,
          });
}
function eo(e) {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        (g.A.fetchRelationships(), (0, R.u)());
    }, []);
    let [i, a] = r.useState(),
        [s, o] = r.useState(!1),
        [f, h] = r.useState(!1),
        { userAffinities: m, isLoading: C } = (0, c.cf)([M.A], () => ({
            userAffinities: M.A.getUserAffinitiesMap(),
            isLoading: M.A.isFetching(),
        })),
        E = Array.from(m.keys()).sort((e, t) => M.A.compare(e, t)),
        _ = (0, c.bG)([L.A], () => L.A.getFriendIDs()),
        S = u().difference(_, E),
        A = [...E, ...S],
        P = (0, c.bG)([j.default], () => j.default.filter((e) => A.includes(e.id) && !e.bot), [A]);
    if (null == P || 0 === P.length) return null;
    let v = u().sortBy(P, (e) => A.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: es.vt,
        children: [
            (0, l.jsxs)("div", {
                className: es.AQ,
                children: [
                    (0, l.jsx)(y.Z, {
                        selectionMode: "single",
                        label: ee.intl.string(ee.t.MJw05f),
                        placeholder: ee.intl.string(ee.t.J019jZ),
                        loading: C,
                        value: i,
                        onSelectionChange: (e) => {
                            (a(e), o(!1));
                        },
                        options: v.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${w.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(I.A, { user: e, size: p._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: es.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == i,
                            loading: f,
                            onClick: () => {
                                (h(!0),
                                    (0, x.UN)(i, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (o(!0), h(!1));
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
