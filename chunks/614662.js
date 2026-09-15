n.d(t, { A: () => eu });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(517950),
    c = n(17928),
    d = n(364840),
    m = n(821609),
    p = n(862482),
    h = n(109802),
    C = n(452027),
    f = n(778712),
    E = n(297264),
    S = n(289873),
    y = n(890497),
    I = n(398590),
    g = n(717398),
    A = n(966327),
    P = n(674658),
    v = n(769015),
    x = n(242874),
    _ = n(580194),
    T = n(531536),
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
    en = n(805161),
    el = n(863263);
function ei(e) {
    let {
            giftCode: t,
            giftCount: r,
            checkoutSessionId: a,
            deliveryReady: s,
            privateGiftLink: d,
            rewardSkuIds: m,
            canShowGiftingBadgePostPurchase: p,
            openGiftingBadgePostPurchaseModal: h,
            onClose: C,
        } = e,
        [E, S] = i.useState([]),
        [P, v] = i.useState(!1),
        { isLoading: _, potentialRecipients: T } = (function () {
            i.useEffect(() => {
                (g.A.fetchRelationships(), (0, N.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, c.cf)([b.A], () => ({
                    userAffinities: b.A.getUserAffinitiesMap(),
                    isLoading: b.A.isFetching(),
                })),
                n = i.useMemo(() => Array.from(e.keys()).sort((e, t) => b.A.compare(e, t)), [e]),
                l = (0, c.bG)([R.A], () => R.A.getFriendIDs()),
                r = i.useMemo(() => [...n, ...o().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, c.yK)(
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
        M = (0, c.yK)([O.default], () => E.map(O.default.getUser).filter(X.Vq), [E]),
        L = r > 1,
        k = L ? !s : null == t,
        w = 1 === E.length,
        D = w ? null == t : !s,
        ei = E.length > 1 && null == a,
        ea = P || 0 === E.length || E.length > r || M.length !== E.length || D || ei,
        es = T.map((e) => ({
            id: e.id,
            value: e.id,
            label: U.Ay.getUserTag(e),
            leading: (0, l.jsx)(A.A, { user: e, size: f._3.SIZE_20 }),
            disabled: L && E.length >= r && !E.includes(e.id),
        })),
        eo = i.useMemo(() => m.filter((e) => e !== u.a.SUMMER_2026_GOGO_FAKE_SKU_ID), [m]),
        eu = (0, q.D)(eo),
        [ec, ...ed] = (0, c.yK)([Z.A], () => eo.map((e) => Z.A.getProduct(e)).filter((e) => null != e));
    async function em() {
        var e;
        let i;
        v(!0);
        try {
            if (w) {
                let e = M[0];
                (await (0, x.UN)(e, t), (i = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == a) throw Error("Checkout session ID must be defined");
                let e = await (0, Y.kW)(E, a),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                i = { recipients: M.filter((e) => t.has(e.id)), failedRecipients: M.filter((e) => n.has(e.id)) };
            }
        } catch {
            i = { recipients: [], failedRecipients: M };
        } finally {
            v(!1);
        }
        (C(),
            (0, I.bz)(),
            (e = {
                recipients: i.recipients,
                failedRecipients: i.failedRecipients,
                rewardSkuIds: m,
                purchaseQuantity: r,
                canShowGiftingBadgePostPurchase: p,
                openGiftingBadgePostPurchaseModal: h,
            }),
            (0, Q.openModalLazy)(async () => {
                let { default: t } = await n.e("692318").then(n.bind(n, 150061));
                return (n) => (0, l.jsx)(t, { ...n, ...e });
            }));
    }
    function ep(e) {
        e.length <= r && S(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: el.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: el.OA,
                        children: [
                            L
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
                                                          numMembers: E.length,
                                                          maxMemberLimit: r,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(y.Z, {
                                              selectionMode: "multiple",
                                              label: et.intl.string(en.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: et.intl.string(en.default.xdDO7f),
                                              loading: _ || k,
                                              disabled: k || P,
                                              value: E,
                                              onSelectionChange: ep,
                                              options: es,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(y.Z, {
                                      selectionMode: "single",
                                      label: et.intl.string(et.t.MJw05f),
                                      placeholder: et.intl.string(et.t.J019jZ),
                                      loading: _ || k,
                                      disabled: k || P,
                                      value: E[0],
                                      onSelectionChange: (e) => ep(null != e ? [e] : []),
                                      options: es,
                                  }),
                            d,
                        ],
                    }),
                    null != ec && (0, l.jsx)(er, { product: ec, moreCount: ed.length }),
                    (0, l.jsx)(H.w, {
                        type: "info",
                        children: et.intl.format(en.default.ZvgWUV, {
                            giftCount: r,
                            onInventoryClick: function () {
                                (C(), (0, I.bz)(), (0, J.openUserSettings)($.X.GIFT_PANEL, { analyticsLocations: j }));
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
                            disabled: eu || P,
                            onClick: function () {
                                (C(),
                                    (0, I.bz)(),
                                    null != ec
                                        ? (0, z.A)({
                                              product: ec,
                                              remainingProducts: ed,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: j,
                                              purchaseType: ee.gs.GIFT,
                                              onCloseCallback: p ? h : void 0,
                                          })
                                        : p && h());
                            },
                        },
                        {
                            variant: "primary",
                            text: et.intl.string(et.t["+EgwQn"]),
                            disabled: ea,
                            loading: eu || P,
                            onClick: em,
                        },
                    ],
                }),
            }),
        ],
    });
}
function er(e) {
    let { product: t, moreCount: n } = e,
        r = i.useMemo(() => (n > 0 ? et.intl.format(en.default.XoHiqS, { name: t.name, count: n }) : t?.name), [t, n]);
    return (0, l.jsx)(T.v, {
        className: el.Km,
        product: t,
        title: et.intl.format(en.default["1fYyf4"], { count: n + 1 }),
        subtitle: r,
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
            application: u,
            sku: y,
            subscriptionPlan: g,
            selectedGiftStyle: P,
            onClose: x,
            hasSentMessage: T,
            giftRecipient: N,
            giftMessageError: b,
            isSendingMessage: R,
        } = e,
        [O, F] = i.useState(h.e.Modes.DEFAULT),
        B = (0, c.bG)([M.A], () => M.A.enabled),
        H = T || (null != P && null != N),
        W = y?.productLine === ea.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: Y,
            openGiftingBadgePostPurchaseModal: V,
            canShowGiftingBadgePostPurchase: K,
        } = (0, D.Pv)(),
        Z = (0, _.Mq)(g) && Y.length > 0,
        q = K && 0 === Y.length;
    function z() {
        return null != g ? g.skuId : null != y ? y.id : null;
    }
    function Q() {
        let e;
        return null != b
            ? et.intl.string(et.t.qB8aya)
            : null == g
              ? null
              : ((e =
                    g.interval === es.WT.MONTH ? (H ? et.t["4ZJ+7Z"] : et.t["P+z55d"]) : H ? et.t.p0pZXP : et.t.bXqk3o),
                et.intl.format(e, { skuName: (0, w.RH)(g.id), intervalCount: g.intervalCount }));
    }
    function $() {
        let e;
        if (null == t) return null;
        switch (O) {
            case h.e.Modes.SUCCESS:
                e = et.intl.string(et.t.XVvPjU);
                break;
            case h.e.Modes.ERROR:
                e = et.intl.string(et.t.i4GM3L);
                break;
            default:
                e = et.intl.string(et.t.OpuAlK);
        }
        return (0, l.jsx)(C.D, {
            label: et.intl.string(et.t["/dG4NA"]),
            children: (0, l.jsx)(h.e, {
                hideMessage: B ? et.intl.string(et.t["0RLn47"]) : null,
                value: (0, k.Zq)(t),
                mode: O,
                text: e,
                onCopy: (e) => {
                    (null != y && (0, k.AK)(new j.A({ code: t, maxUses: 1 }), y),
                        (0, L.C)(
                            e,
                            () => F(h.e.Modes.SUCCESS),
                            () => F(h.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            F(h.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: L.p5,
                className: eo.__invalid_copyInput,
                buttonColor: p.XD.LINK,
                buttonLook: p.pR.LINK,
            }),
        });
    }
    return R
        ? (0, l.jsxs)("div", {
              className: eo.EL,
              children: [
                  null != u
                      ? (0, l.jsx)(v.A, { game: u, className: eo.__invalid_icon, size: v.M.LARGE, skuId: z() })
                      : null,
                  (0, l.jsx)(S.y, { type: S.t.PULSING_ELLIPSIS }),
              ],
          })
        : o
          ? (0, l.jsx)(ei, {
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
                        className: a()(eo.EL, { [eo.L1]: Z }),
                        children: [
                            null != u
                                ? (0, l.jsx)(v.A, {
                                      game: u,
                                      className: eo.__invalid_icon,
                                      size: v.M.LARGE,
                                      skuId: z(),
                                  })
                                : null,
                            (0, l.jsx)(E.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [eo.wx]: null == P && !W, [eo.$A]: null != P && !W }),
                                children:
                                    null != N || (T && null == b)
                                        ? et.intl.string(et.t.zOmK9N)
                                        : null != b
                                          ? et.intl.string(et.t.d1lrmU)
                                          : et.intl.string(et.t["/s1xR7"]),
                            }),
                            (T && null != N && null == b) || H
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: eo.jx,
                                              children: [
                                                  (0, l.jsx)(A.A, { user: N, size: f._3.SIZE_24 }),
                                                  (0, l.jsx)(E.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: U.Ay.getName(N),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: eo._c, children: Q() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: eo.I0, children: Q() }),
                                          null == b &&
                                              (0, l.jsx)(ed, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (x(), (0, I.bz)(), q && V());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: eo.yF }),
                                          (0, l.jsxs)("div", {
                                              className: eo.PN,
                                              children: [
                                                  $(),
                                                  (0, l.jsx)("div", {
                                                      className: eo.W$,
                                                      children: et.intl.string(et.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            Y.length > 0 && (0, l.jsx)(ec, { skuIds: Y }),
                        ],
                    }),
                    q &&
                        (0, l.jsx)(G.UX, {
                            children: (0, l.jsx)(d.j, {
                                children: (0, l.jsx)("div", {
                                    className: eo.pP,
                                    children: (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: et.intl.string(et.t.PDTjLN),
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
function ec(e) {
    let { skuIds: t } = e,
        n = t[0] !== u.a.SUMMER_2026_GOGO_FAKE_SKU_ID ? t[0] : null,
        { product: r } = (0, P.q)(n),
        a = i.useMemo(
            () =>
                null != r && t.length > 1
                    ? et.intl.format(en.default.XoHiqS, { name: r.name, count: t.length - 1 })
                    : r?.name,
            [r, t.length],
        );
    return null == r
        ? null
        : (0, l.jsx)(T.v, {
              className: eo.Km,
              product: r,
              title: et.intl.format(en.default["1fYyf4"], { count: t.length }),
              subtitle: a,
          });
}
function ed(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        (g.A.fetchRelationships(), (0, N.u)());
    }, []);
    let [r, a] = i.useState(),
        [s, u] = i.useState(!1),
        [d, p] = i.useState(!1),
        { userAffinities: h, isLoading: C } = (0, c.cf)([b.A], () => ({
            userAffinities: b.A.getUserAffinitiesMap(),
            isLoading: b.A.isFetching(),
        })),
        E = Array.from(h.keys()).sort((e, t) => b.A.compare(e, t)),
        S = (0, c.bG)([R.A], () => R.A.getFriendIDs()),
        I = o().difference(S, E),
        P = [...E, ...I],
        v = (0, c.bG)([O.default], () => O.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == v || 0 === v.length) return null;
    let _ = o().sortBy(v, (e) => P.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: eo.vt,
        children: [
            (0, l.jsxs)("div", {
                className: eo.AQ,
                children: [
                    (0, l.jsx)(y.Z, {
                        selectionMode: "single",
                        label: et.intl.string(et.t.MJw05f),
                        placeholder: et.intl.string(et.t.J019jZ),
                        loading: C,
                        value: r,
                        onSelectionChange: (e) => {
                            (a(e), u(!1));
                        },
                        options: _.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${U.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(A.A, { user: e, size: f._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: eo.Qg,
                        children: (0, l.jsx)(m.$, {
                            disabled: null == r,
                            loading: d,
                            onClick: () => {
                                (p(!0),
                                    (0, x.UN)(r, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (u(!0), p(!1));
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
