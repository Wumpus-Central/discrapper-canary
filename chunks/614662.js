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
    p = n(452027),
    C = n(778712),
    m = n(297264),
    E = n(289873),
    I = n(890497),
    S = n(398590),
    y = n(717398),
    g = n(966327),
    _ = n(674658),
    P = n(769015),
    A = n(242874),
    R = n(810498),
    M = n(531536),
    v = n(219271),
    T = n(427358),
    x = n(7133),
    L = n(994500),
    b = n(351906),
    N = n(287809),
    U = n(957565),
    k = n(45938),
    H = n(158045),
    j = n(427262),
    w = n(951305),
    O = n(482132),
    D = n(331322),
    F = n(834730),
    G = n(683071),
    B = n(696208),
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
    ee = n(375708),
    et = n(341535),
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
            onClose: p,
        } = e,
        [m, E] = r.useState([]),
        [_, P] = r.useState(!1),
        { isLoading: R, potentialRecipients: M } = (function () {
            r.useEffect(() => {
                (y.A.fetchRelationships(), (0, v.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, c.cf)([T.A], () => ({
                    userAffinities: T.A.getUserAffinitiesMap(),
                    isLoading: T.A.isFetching(),
                })),
                n = r.useMemo(() => Array.from(e.keys()).sort((e, t) => T.A.compare(e, t)), [e]),
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
        { analyticsLocations: x } = (0, W.Ay)(K.A.PREMIUM_GIFT_SUCCESS_MODAL),
        b = (0, c.yK)([N.default], () => m.map(N.default.getUser).filter($.Vq), [m]),
        U = i > 1,
        k = U ? !a : null == t,
        H = 1 === m.length,
        w = H ? null == t : !a,
        el = m.length > 1 && null == s,
        ei = _ || 0 === m.length || m.length > i || b.length !== m.length || w || el,
        es = M.map((e) => ({
            id: e.id,
            value: e.id,
            label: j.Ay.getUserTag(e),
            leading: (0, l.jsx)(g.A, { user: e, size: C._3.SIZE_20 }),
            disabled: U && m.length >= i && !m.includes(e.id),
        })),
        ea = (0, q.D)(d),
        [eu, ...ec] = (0, c.yK)([Y.A], () => d.map((e) => Y.A.getProduct(e)).filter((e) => null != e));
    async function eo() {
        var e;
        let r;
        P(!0);
        try {
            if (H) {
                let e = b[0];
                (await (0, A.UN)(e, t), (r = { recipients: [e], failedRecipients: [] }));
            } else {
                if (null == s) throw Error("Checkout session ID must be defined");
                let e = await (0, Z.kW)(m, s),
                    t = new Set(e.successful_recipient_ids),
                    n = new Set(e.failed_recipient_ids);
                r = { recipients: b.filter((e) => t.has(e.id)), failedRecipients: b.filter((e) => n.has(e.id)) };
            }
        } catch {
            r = { recipients: [], failedRecipients: b };
        } finally {
            P(!1);
        }
        (p(),
            (0, S.bz)(),
            (e = {
                recipients: r.recipients,
                failedRecipients: r.failedRecipients,
                rewardSkuIds: d,
                purchaseQuantity: i,
                canShowGiftingBadgePostPurchase: f,
                openGiftingBadgePostPurchaseModal: h,
            }),
            (0, z.openModalLazy)(async () => {
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
                            U
                                ? (0, l.jsxs)(D.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(D.B, {
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
                                                          numMembers: m.length,
                                                          maxMemberLimit: i,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(I.Z, {
                                              selectionMode: "multiple",
                                              label: ee.intl.string(et.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: ee.intl.string(et.default.xdDO7f),
                                              loading: R || k,
                                              disabled: k || _,
                                              value: m,
                                              onSelectionChange: ed,
                                              options: es,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(I.Z, {
                                      selectionMode: "single",
                                      label: ee.intl.string(ee.t.MJw05f),
                                      placeholder: ee.intl.string(ee.t.J019jZ),
                                      loading: R || k,
                                      disabled: k || _,
                                      value: m[0],
                                      onSelectionChange: (e) => ed(null != e ? [e] : []),
                                      options: es,
                                  }),
                            o,
                        ],
                    }),
                    null != eu && (0, l.jsx)(er, { product: eu, moreCount: ec.length }),
                    (0, l.jsx)(G.w, {
                        type: "info",
                        children: ee.intl.format(et.default.ZvgWUV, {
                            giftCount: i,
                            onInventoryClick: function () {
                                (p(), (0, S.bz)(), (0, X.openUserSettings)(V.X.GIFT_PANEL, { analyticsLocations: x }));
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(O.UX, {
                children: (0, l.jsx)(B.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: ee.intl.string(et.default["qTXpj/"]),
                            disabled: ea || _,
                            onClick: function () {
                                (p(),
                                    (0, S.bz)(),
                                    null != eu
                                        ? (0, Q.A)({
                                              product: eu,
                                              remainingProducts: ec,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: x,
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
    return (0, l.jsx)(M.v, {
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
            application: I,
            sku: y,
            subscriptionPlan: _,
            selectedGiftStyle: A,
            onClose: M,
            hasSentMessage: v,
            giftRecipient: T,
            giftMessageError: L,
            isSendingMessage: N,
        } = e,
        [D, F] = r.useState(h.e.Modes.DEFAULT),
        G = (0, c.bG)([b.A], () => b.A.enabled),
        B = v || (null != A && null != T),
        Z = y?.productLine === ei.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: K,
            openGiftingBadgePostPurchaseModal: W,
            canShowGiftingBadgePostPurchase: Y,
        } = (0, w.Pv)(),
        q = (0, R.Mq)(_) && K.length > 0,
        Q = Y && 0 === K.length;
    function z() {
        return null != _ ? _.skuId : null != y ? y.id : null;
    }
    function V() {
        let e;
        return null != L
            ? ee.intl.string(ee.t.qB8aya)
            : null == _
              ? null
              : ((e =
                    _.interval === es.WT.MONTH ? (B ? ee.t["4ZJ+7Z"] : ee.t["P+z55d"]) : B ? ee.t.p0pZXP : ee.t.bXqk3o),
                ee.intl.format(e, { skuName: (0, H.RH)(_.id), intervalCount: _.intervalCount }));
    }
    function X() {
        let e;
        if (null == t) return null;
        switch (D) {
            case h.e.Modes.SUCCESS:
                e = ee.intl.string(ee.t.XVvPjU);
                break;
            case h.e.Modes.ERROR:
                e = ee.intl.string(ee.t.i4GM3L);
                break;
            default:
                e = ee.intl.string(ee.t.OpuAlK);
        }
        return (0, l.jsx)(p.D, {
            label: ee.intl.string(ee.t["/dG4NA"]),
            children: (0, l.jsx)(h.e, {
                hideMessage: G ? ee.intl.string(ee.t["0RLn47"]) : null,
                value: (0, k.Zq)(t),
                mode: D,
                text: e,
                onCopy: (e) => {
                    (null != y && (0, k.AK)(new x.A({ code: t, maxUses: 1 }), y),
                        (0, U.C)(
                            e,
                            () => F(h.e.Modes.SUCCESS),
                            () => F(h.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            F(h.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: U.p5,
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
                  null != I
                      ? (0, l.jsx)(P.A, { game: I, className: ea.__invalid_icon, size: P.M.LARGE, skuId: z() })
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
                onClose: M,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: s()(ea.EL, { [ea.L1]: q }),
                        children: [
                            null != I
                                ? (0, l.jsx)(P.A, {
                                      game: I,
                                      className: ea.__invalid_icon,
                                      size: P.M.LARGE,
                                      skuId: z(),
                                  })
                                : null,
                            (0, l.jsx)(m.D, {
                                variant: "heading-lg/semibold",
                                className: s()({ [ea.wx]: null == A && !Z, [ea.$A]: null != A && !Z }),
                                children:
                                    null != T || (v && null == L)
                                        ? ee.intl.string(ee.t.zOmK9N)
                                        : null != L
                                          ? ee.intl.string(ee.t.d1lrmU)
                                          : ee.intl.string(ee.t["/s1xR7"]),
                            }),
                            (v && null != T && null == L) || B
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: ea.jx,
                                              children: [
                                                  (0, l.jsx)(g.A, { user: T, size: C._3.SIZE_24 }),
                                                  (0, l.jsx)(m.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: j.Ay.getName(T),
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
                                                      (M(), (0, S.bz)(), Q && W());
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
                    Q &&
                        (0, l.jsx)(O.UX, {
                            children: (0, l.jsx)(o.j, {
                                children: (0, l.jsx)("div", {
                                    className: ea.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: ee.intl.string(ee.t.PDTjLN),
                                        onClick: () => {
                                            (M(), W());
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
        : (0, l.jsx)(M.v, {
              className: ea.Km,
              product: n,
              title: ee.intl.format(et.default["1fYyf4"], { count: t.length }),
              subtitle: i,
          });
}
function eo(e) {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        (y.A.fetchRelationships(), (0, v.u)());
    }, []);
    let [i, s] = r.useState(),
        [a, o] = r.useState(!1),
        [f, h] = r.useState(!1),
        { userAffinities: p, isLoading: m } = (0, c.cf)([T.A], () => ({
            userAffinities: T.A.getUserAffinitiesMap(),
            isLoading: T.A.isFetching(),
        })),
        E = Array.from(p.keys()).sort((e, t) => T.A.compare(e, t)),
        S = (0, c.bG)([L.A], () => L.A.getFriendIDs()),
        _ = u().difference(S, E),
        P = [...E, ..._],
        R = (0, c.bG)([N.default], () => N.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == R || 0 === R.length) return null;
    let M = u().sortBy(R, (e) => P.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: ea.vt,
        children: [
            (0, l.jsxs)("div", {
                className: ea.AQ,
                children: [
                    (0, l.jsx)(I.Z, {
                        selectionMode: "single",
                        label: ee.intl.string(ee.t.MJw05f),
                        placeholder: ee.intl.string(ee.t.J019jZ),
                        loading: m,
                        value: i,
                        onSelectionChange: (e) => {
                            (s(e), o(!1));
                        },
                        options: M.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${j.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(g.A, { user: e, size: C._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: ea.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == i,
                            loading: f,
                            onClick: () => {
                                (h(!0),
                                    (0, A.UN)(i, t)
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
