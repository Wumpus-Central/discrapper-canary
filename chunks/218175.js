n.d(t, { A: () => X });
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
    _ = n(192308),
    x = n(219271),
    T = n(427358),
    N = n(7133),
    b = n(994500),
    j = n(351906),
    R = n(287809),
    M = n(957565),
    O = n(45938),
    L = n(158045),
    k = n(427262),
    w = n(951305),
    U = n(683071),
    D = n(696208),
    G = n(869038),
    F = n(793574),
    B = n(688810),
    H = n(780964),
    W = n(766075),
    Y = n(403362),
    V = n(482132),
    K = n(375708),
    Z = n(341535),
    q = n(757716);
function z(e) {
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
                I.A.fetchRelationships(), (0, x.u)();
            }, []);
            let { userAffinities: e, isLoading: t } = (0, u.cf)([T.A], () => ({
                    userAffinities: T.A.getUserAffinitiesMap(),
                    isLoading: T.A.isFetching(),
                })),
                n = i.useMemo(() => Array.from(e.keys()).sort((e, t) => T.A.compare(e, t)), [e]),
                l = (0, u.bG)([b.A], () => b.A.getFriendIDs()),
                r = i.useMemo(() => [...n, ...o().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, u.yK)(
                    [R.default],
                    () =>
                        r
                            .map(R.default.getUser)
                            .filter(Y.Vq)
                            .filter((e) => !e.bot),
                    [r],
                ),
            };
        })(),
        { analyticsLocations: v } = (0, B.Ay)(F.A.PREMIUM_GIFT_SUCCESS_MODAL),
        _ = (0, u.yK)([R.default], () => m.map(R.default.getUser).filter(Y.Vq), [m]),
        N = n > 1,
        j = N ? !a : null == t,
        M = 1 === m.length,
        O = M ? null == t : !a,
        L = m.length > 1 && null == r,
        w = C || 0 === m.length || m.length > n || _.length !== m.length || O || L,
        z = g.map((e) => ({
            id: e.id,
            value: e.id,
            label: k.Ay.getUserTag(e),
            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
            disabled: N && m.length >= n && !m.includes(e.id),
        }));
    async function Q() {
        let e;
        f(!0);
        try {
            if (M) {
                let n = _[0];
                await (0, P.UN)(n, t), (e = { recipients: [n], failedRecipients: [] });
            } else {
                if (null == r) throw Error("Checkout session ID must be defined");
                let t = await (0, G.kW)(m, r),
                    n = new Set(t.successful_recipient_ids),
                    l = new Set(t.failed_recipient_ids);
                e = { recipients: _.filter((e) => n.has(e.id)), failedRecipients: _.filter((e) => l.has(e.id)) };
            }
        } catch {
            e = { recipients: [], failedRecipients: _ };
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
                className: q.Q,
                children: [
                    (0, l.jsxs)("div", {
                        className: q.O,
                        children: [
                            N
                                ? (0, l.jsx)(S.Z, {
                                      selectionMode: "multiple",
                                      label: K.intl.string(Z.default.ZolTTE),
                                      placeholder: K.intl.string(Z.default.xdDO7f),
                                      loading: E || j,
                                      disabled: j || C,
                                      value: m,
                                      onSelectionChange: $,
                                      options: z,
                                  })
                                : (0, l.jsx)(S.Z, {
                                      selectionMode: "single",
                                      label: K.intl.string(K.t.MJw05f),
                                      placeholder: K.intl.string(K.t.J019jZ),
                                      loading: E || j,
                                      disabled: j || C,
                                      value: m[0],
                                      onSelectionChange: (e) => $(null != e ? [e] : []),
                                      options: z,
                                  }),
                            s,
                        ],
                    }),
                    (0, l.jsx)(U.w, {
                        type: "info",
                        children: K.intl.format(Z.default.ZvgWUV, {
                            giftCount: n,
                            onInventoryClick: function () {
                                d(), (0, y.bz)(), (0, W.openUserSettings)(H.X.GIFT_PANEL, { analyticsLocations: v });
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(V.UX, {
                children: (0, l.jsx)(D.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: K.intl.string(Z.default["qTXpj/"]),
                            disabled: C,
                            onClick: function () {
                                d(), (0, y.bz)();
                            },
                        },
                        { variant: "primary", text: K.intl.string(K.t["+EgwQn"]), disabled: w, loading: C, onClick: Q },
                    ],
                }),
            }),
        ],
    });
}
var Q = n(652215),
    $ = n(202541),
    J = n(392309);
function X(e) {
    let {
            giftCode: t,
            giftCount: r = 1,
            checkoutSessionId: s,
            giftCodeDeliveryReady: o = !1,
            shouldUsePostPurchaseRecipientDelivery: S = !1,
            application: I,
            sku: P,
            subscriptionPlan: x,
            selectedGiftStyle: T,
            onClose: b,
            hasSentMessage: R,
            giftRecipient: U,
            giftMessageError: D,
            isSendingMessage: G,
        } = e,
        [F, B] = i.useState(p.e.Modes.DEFAULT),
        H = (0, u.bG)([j.A], () => j.A.enabled),
        W = R || (null != T && null != U),
        Y = P?.productLine === Q.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: Z,
            openGiftingBadgePostPurchaseModal: q,
            canShowGiftingBadgePostPurchase: X,
        } = (0, w.Pv)(),
        et = (0, v.Mq)(x) && Z.length > 0,
        en = X && 0 === Z.length;
    function el() {
        return null != x ? x.skuId : null != P ? P.id : null;
    }
    function ei() {
        let e;
        return null != D
            ? K.intl.string(K.t.qB8aya)
            : null == x
              ? null
              : ((e = x.interval === $.WT.MONTH ? (W ? K.t["4ZJ+7Z"] : K.t["P+z55d"]) : W ? K.t.p0pZXP : K.t.bXqk3o),
                K.intl.format(e, { skuName: (0, L.RH)(x.id), intervalCount: x.intervalCount }));
    }
    function er() {
        let e;
        if (null == t) return null;
        switch (F) {
            case p.e.Modes.SUCCESS:
                e = K.intl.string(K.t.XVvPjU);
                break;
            case p.e.Modes.ERROR:
                e = K.intl.string(K.t.i4GM3L);
                break;
            default:
                e = K.intl.string(K.t.OpuAlK);
        }
        return (0, l.jsx)(C.D, {
            label: K.intl.string(K.t["/dG4NA"]),
            children: (0, l.jsx)(p.e, {
                hideMessage: H ? K.intl.string(K.t["0RLn47"]) : null,
                value: (0, O.Zq)(t),
                mode: F,
                text: e,
                onCopy: (e) => {
                    null != P && (0, O.AK)(new N.A({ code: t, maxUses: 1 }), P),
                        (0, M.C)(
                            e,
                            () => B(p.e.Modes.SUCCESS),
                            () => B(p.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            B(p.e.Modes.DEFAULT);
                        }, 1500);
                },
                supportsCopy: M.p5,
                className: J.__invalid_copyInput,
                buttonColor: m.XD.LINK,
                buttonLook: m.pR.LINK,
            }),
        });
    }
    return G
        ? (0, l.jsxs)("div", {
              className: J.EL,
              children: [
                  null != I
                      ? (0, l.jsx)(g.A, { game: I, className: J.__invalid_icon, size: g.M.LARGE, skuId: el() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : S
          ? (0, l.jsx)(z, {
                giftCode: t,
                giftCount: r,
                checkoutSessionId: s,
                deliveryReady: o,
                privateGiftLink: 1 === r ? er() : null,
                onComplete: (e) => {
                    var t;
                    b(),
                        (0, y.bz)(),
                        (t = {
                            recipients: e.recipients,
                            failedRecipients: e.failedRecipients,
                            rewardSkuIds: Z,
                            purchaseQuantity: r,
                            canShowGiftingBadgePostPurchase: X,
                            openGiftingBadgePostPurchaseModal: q,
                        }),
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await n.e("692318").then(n.bind(n, 150061));
                            return (n) => (0, l.jsx)(e, { ...n, ...t });
                        });
                },
                onClose: b,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(J.EL, { [J.L1]: et }),
                        children: [
                            null != I
                                ? (0, l.jsx)(g.A, {
                                      game: I,
                                      className: J.__invalid_icon,
                                      size: g.M.LARGE,
                                      skuId: el(),
                                  })
                                : null,
                            (0, l.jsx)(f.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [J.wx]: null == T && !Y, [J.$A]: null != T && !Y }),
                                children:
                                    null != U || (R && null == D)
                                        ? K.intl.string(K.t.zOmK9N)
                                        : null != D
                                          ? K.intl.string(K.t.d1lrmU)
                                          : K.intl.string(K.t["/s1xR7"]),
                            }),
                            (R && null != U && null == D) || W
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: J.jx,
                                              children: [
                                                  (0, l.jsx)(A.A, { user: U, size: h._3.SIZE_40 }),
                                                  (0, l.jsxs)("div", {
                                                      className: J.gn,
                                                      children: [
                                                          (0, l.jsx)(f.D, {
                                                              variant: "heading-md/semibold",
                                                              children: k.Ay.getName(U),
                                                          }),
                                                          (0, l.jsxs)("div", {
                                                              className: J.Ik,
                                                              children: [" ", k.Ay.getUserTag(U)],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: J._c, children: ei() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: J.I0, children: ei() }),
                                          null == D &&
                                              (0, l.jsx)(ee, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      b(), (0, y.bz)(), en && q();
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: J.yF }),
                                          (0, l.jsxs)("div", {
                                              className: J.PN,
                                              children: [
                                                  er(),
                                                  (0, l.jsx)("div", {
                                                      className: J.W$,
                                                      children: K.intl.string(K.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    en &&
                        (0, l.jsx)(V.UX, {
                            children: (0, l.jsx)(c.j, {
                                children: (0, l.jsx)("div", {
                                    className: J.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: K.intl.string(K.t.PDTjLN),
                                        onClick: () => {
                                            b(), q();
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function ee(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        I.A.fetchRelationships(), (0, x.u)();
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [m, p] = i.useState(!1),
        { userAffinities: C, isLoading: f } = (0, u.cf)([T.A], () => ({
            userAffinities: T.A.getUserAffinitiesMap(),
            isLoading: T.A.isFetching(),
        })),
        E = Array.from(C.keys()).sort((e, t) => T.A.compare(e, t)),
        y = (0, u.bG)([b.A], () => b.A.getFriendIDs()),
        g = o().difference(y, E),
        v = [...E, ...g],
        _ = (0, u.bG)([R.default], () => R.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == _ || 0 === _.length) return null;
    let N = o().sortBy(_, (e) => v.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: J.vt,
        children: [
            (0, l.jsxs)("div", {
                className: J.AQ,
                children: [
                    (0, l.jsx)(S.Z, {
                        selectionMode: "single",
                        label: K.intl.string(K.t.MJw05f),
                        placeholder: K.intl.string(K.t.J019jZ),
                        loading: f,
                        value: r,
                        onSelectionChange: (e) => {
                            a(e), c(!1);
                        },
                        options: N.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${k.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: J.Qg,
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
                            text: K.intl.string(K.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? J.Sc : J.W$,
                children: s ? K.intl.string(K.t.jo5Vbl) : K.intl.string(K.t["8/N3v3"]),
            }),
        ],
    });
}
