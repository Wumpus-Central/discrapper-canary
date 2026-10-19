n.d(t, { A: () => eu });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(435558),
    u = n.n(a),
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
    I = n(398590),
    g = n(49229),
    S = n(966327),
    _ = n(674658),
    x = n(769015),
    P = n(242874),
    A = n(810498),
    v = n(531536),
    R = n(175452),
    M = n(427358),
    T = n(7133),
    L = n(994500),
    j = n(351906),
    N = n(287809),
    b = n(957565),
    k = n(45938),
    U = n(158045),
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
    et = n(805161),
    en = n(863263);
function el(e) {
    let {
            giftCode: t,
            giftCount: i,
            checkoutSessionId: s,
            deliveryReady: a,
            privateGiftLink: o,
            rewardSkuIds: d,
            canShowGiftingBadgePostPurchase: f,
            openGiftingBadgePostPurchaseModal: h,
            onClose: m,
        } = e,
        [C, E] = r.useState([]),
        [_, x] = r.useState(!1),
        { isLoading: A, potentialRecipients: v } = (function () {
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
                    [N.default],
                    () =>
                        i
                            .map(N.default.getUser)
                            .filter($.Vq)
                            .filter((e) => !e.bot),
                    [i],
                ),
            };
        })(),
        { analyticsLocations: T } = (0, W.Ay)(K.A.PREMIUM_GIFT_SUCCESS_MODAL),
        j = (0, c.yK)([N.default], () => C.map(N.default.getUser).filter($.Vq), [C]),
        b = i > 1,
        k = b ? !a : null == t,
        U = 1 === C.length,
        H = U ? null == t : !a,
        el = C.length > 1 && null == s,
        ei = _ || 0 === C.length || C.length > i || j.length !== C.length || H || el,
        es = v.map((e) => ({
            id: e.id,
            value: e.id,
            label: w.Ay.getUserTag(e),
            leading: (0, l.jsx)(S.A, { user: e, size: p._3.SIZE_20 }),
            disabled: b && C.length >= i && !C.includes(e.id),
        })),
        ea = (0, q.D)(d),
        [eu, ...ec] = (0, c.yK)([Y.A], () => d.map((e) => Y.A.getProduct(e)).filter((e) => null != e));
    async function eo() {
        var e;
        let r;
        x(!0);
        try {
            if (U) {
                let e = j[0];
                (await (0, P.UN)(e, t), (r = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == s) throw Error("Checkout session ID must be defined");
                let e = await (0, Z.kW)(C, s),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                r = { recipients: j.filter((e) => t.has(e.id)), failedRecipients: j.filter((e) => n.has(e.id)) };
            }
        } catch {
            r = { recipients: [], failedRecipients: j };
        } finally {
            x(!1);
        }
        (m(),
            (0, I.bz)(),
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
                            b
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
                                              loading: A || k,
                                              disabled: k || _,
                                              value: C,
                                              onSelectionChange: ed,
                                              options: es,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(y.Z, {
                                      selectionMode: "single",
                                      label: ee.intl.string(ee.t.MJw05f),
                                      placeholder: ee.intl.string(ee.t.J019jZ),
                                      loading: A || k,
                                      disabled: k || _,
                                      value: C[0],
                                      onSelectionChange: (e) => ed(null != e ? [e] : []),
                                      options: es,
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
                                (m(), (0, I.bz)(), (0, X.openUserSettings)(V.X.GIFT_PANEL, { analyticsLocations: T }));
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
                            disabled: ea || _,
                            onClick: function () {
                                (m(),
                                    (0, I.bz)(),
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
                            loading: ea || _,
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
            sku: g,
            subscriptionPlan: _,
            selectedGiftStyle: P,
            onClose: v,
            hasSentMessage: R,
            giftRecipient: M,
            giftMessageError: L,
            isSendingMessage: N,
        } = e,
        [F, D] = r.useState(h.e.Modes.DEFAULT),
        B = (0, c.bG)([j.A], () => j.A.enabled),
        G = R || (null != P && null != M),
        Z = g?.productLine === ei.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: K,
            openGiftingBadgePostPurchaseModal: W,
            canShowGiftingBadgePostPurchase: Y,
        } = (0, H.Pv)(),
        q = (0, A.Mq)(_) && K.length > 0,
        z = Y && 0 === K.length;
    function Q() {
        return null != _ ? _.skuId : null != g ? g.id : null;
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
        return (0, l.jsx)(m.D, {
            label: ee.intl.string(ee.t["/dG4NA"]),
            children: (0, l.jsx)(h.e, {
                hideMessage: B ? ee.intl.string(ee.t["0RLn47"]) : null,
                value: (0, k.Zq)(t),
                mode: F,
                text: e,
                onCopy: (e) => {
                    (null != g && (0, k.AK)(new T.A({ code: t, maxUses: 1 }), g),
                        (0, b.C)(
                            e,
                            () => D(h.e.Modes.SUCCESS),
                            () => D(h.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            D(h.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: b.p5,
                className: ea.__invalid_copyInput,
                buttonColor: f.XD.LINK,
                buttonLook: f.pR.LINK,
            }),
        });
    }
    return N
        ? (0, l.jsxs)("div", {
              className: ea.EL,
              children: [
                  null != y
                      ? (0, l.jsx)(x.A, { game: y, className: ea.__invalid_icon, size: x.M.LARGE, skuId: Q() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : u
          ? (0, l.jsx)(el, {
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
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: s()(ea.EL, { [ea.L1]: q }),
                        children: [
                            null != y
                                ? (0, l.jsx)(x.A, {
                                      game: y,
                                      className: ea.__invalid_icon,
                                      size: x.M.LARGE,
                                      skuId: Q(),
                                  })
                                : null,
                            (0, l.jsx)(C.D, {
                                variant: "heading-lg/semibold",
                                className: s()({ [ea.wx]: null == P && !Z, [ea.$A]: null != P && !Z }),
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
                                              className: ea.jx,
                                              children: [
                                                  (0, l.jsx)(S.A, { user: M, size: p._3.SIZE_24 }),
                                                  (0, l.jsx)(C.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: w.Ay.getName(M),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: ea._c, children: V() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: ea.I0, children: V() }),
                                          null == L &&
                                              (0, l.jsx)(eo, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (v(), (0, I.bz)(), z && W());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: ea.yF }),
                                          (0, l.jsxs)("div", {
                                              className: ea.PN,
                                              children: [
                                                  X(),
                                                  (0, l.jsx)("div", {
                                                      className: ea.W$,
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
                                    className: ea.pP,
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
        { product: n } = (0, _.q)(t[0]),
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
              className: ea.Km,
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
    let [i, s] = r.useState(),
        [a, o] = r.useState(!1),
        [f, h] = r.useState(!1),
        { userAffinities: m, isLoading: C } = (0, c.cf)([M.A], () => ({
            userAffinities: M.A.getUserAffinitiesMap(),
            isLoading: M.A.isFetching(),
        })),
        E = Array.from(m.keys()).sort((e, t) => M.A.compare(e, t)),
        I = (0, c.bG)([L.A], () => L.A.getFriendIDs()),
        _ = u().difference(I, E),
        x = [...E, ..._],
        A = (0, c.bG)([N.default], () => N.default.filter((e) => x.includes(e.id) && !e.bot), [x]);
    if (null == A || 0 === A.length) return null;
    let v = u().sortBy(A, (e) => x.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: ea.vt,
        children: [
            (0, l.jsxs)("div", {
                className: ea.AQ,
                children: [
                    (0, l.jsx)(y.Z, {
                        selectionMode: "single",
                        label: ee.intl.string(ee.t.MJw05f),
                        placeholder: ee.intl.string(ee.t.J019jZ),
                        loading: C,
                        value: i,
                        onSelectionChange: (e) => {
                            (s(e), o(!1));
                        },
                        options: v.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${w.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(S.A, { user: e, size: p._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: ea.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == i,
                            loading: f,
                            onClick: () => {
                                (h(!0),
                                    (0, P.UN)(i, t)
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
                className: a ? ea.Sc : ea.W$,
                children: a ? ee.intl.string(ee.t.jo5Vbl) : ee.intl.string(ee.t["8/N3v3"]),
            }),
        ],
    });
}
