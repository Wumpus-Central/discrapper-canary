n.d(e, {
    $0: () => M,
    Xw: () => S,
    cf: () => B,
    f1: () => x,
    ys: () => N,
}),
    n(314940),
    n(539854),
    n(388685);
var i = n(647438),
    r = n(238651),
    a = n(512722),
    s = n.n(a),
    l = n(278074),
    u = n(979554),
    d = n(481060),
    o = n(37234),
    c = n(230711),
    p = n(1585),
    h = n(318110),
    f = n(333867),
    E = n(98278),
    A = n(642619),
    C = n(110560),
    O = n(507808),
    _ = n(626135),
    I = n(585483),
    m = n(63063),
    L = n(884697),
    g = n(328456),
    k = n(302800),
    T = n(215023),
    y = n(981631),
    R = n(474936),
    b = n(456003),
    P = n(388032);
let v = (t) => (null != t ? P.intl.format(P.t["4kp0AA"], { itemName: t }) : null),
    S = (t) => {
        let {
            product: e,
            pairedProduct: n,
            overrideTitle: i,
            isVariantsGroupEnabled: r,
            shouldShowPromotionalExperience: a,
            productName: s,
            pairedProductName: l,
            itemConsumed: u,
        } = t;
        if (null != i) return i;
        if (T.Vt.ORB_PROFILE_BADGE === e.skuId) return P.intl.string(b.default.nvaTQk);
        if (T.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (u) return P.intl.string(P.t.t0xkSE);
            else return P.intl.string(P.t.g5W1g4);
        if (null != n)
            return P.intl.formatToPlainString(new Date() < T.a$ ? P.t.BhGU09 : P.t.Jfv5Qk, {
                purchased_item: s,
                suggested_item: l,
            });
        if (r && !a) return P.intl.string(P.t.IMffmp);
        else return P.intl.formatToPlainString(P.t.YNaxMj, { itemName: s });
    },
    N = (t) => {
        let {
            product: e,
            pairedProduct: n,
            overrideDescription: i,
            productName: r,
            pairedProductName: a,
            shouldShowPromotionalExperience: s,
            promotionalRewardCollectedText: d,
            itemConsumed: o,
            isFractionalPremiumActive: c,
            expiresAt: p,
        } = t;
        if (null != i) return i;
        if (T.Vt.ORB_PROFILE_BADGE === e.skuId) return P.intl.string(b.default.UnPGio);
        if (T.Vt.FRACTIONAL_PREMIUM === e.skuId) {
            let t = P.intl.formatToPlainString(P.t["Cz1G9/"], { days: 3 });
            return o
                ? P.intl.format(P.t.bhLChI, {
                      helpCenterLink: m.Z.getArticleURL(y.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: p,
                  })
                : c
                  ? P.intl.string(P.t.fBmhEx)
                  : P.intl.format(P.t["1ZBX4O"], {
                        helpCenterLink: m.Z.getArticleURL(y.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (null != n)
            return P.intl.format(new Date() < T.a$ ? P.t["1jBC0t"] : P.t.qSrp39, {
                purchased_item: r,
                suggested_item: a,
            });
        return (0, l.EQ)(null == e ? void 0 : e.type)
            .with(u.Z.BUNDLE, () => {
                let { itemOneName: t, itemTwoName: n } = (0, g.Ws)(e);
                return P.intl.format(P.t.fXw44e, {
                    itemOneName: t,
                    itemTwoName: n,
                });
            })
            .with(u.Z.AVATAR_DECORATION, () => (s && null != d ? d : v(r)))
            .otherwise(() => v(r));
    },
    B = (t) => {
        let {
                product: e,
                pairedProduct: n,
                onClose: i,
                analyticsLocations: r,
                hasRequiredProductItems: a,
                handleUseNow: l,
                isApplying: _,
                variantsReturnStyle: m,
                openProfileSettings: L,
                itemConsumed: g,
            } = t,
            k = [];
        if (T.Vt.ORB_PROFILE_BADGE === e.skuId)
            k.push(
                {
                    text: P.intl.string(b.default.yfwZu7),
                    variant: "primary",
                    onClick: () => {
                        i(), I.S.dispatch(y.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: P.intl.string(P.t["H57f4+"]),
                    variant: "secondary",
                    onClick: () => {
                        i(),
                            (0, O.Y)({
                                pageType: y.ZY5.SHOP_ORBS_TAB,
                                sectionType: y.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: y.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, C.navigateToQuestHome)();
                    },
                },
            );
        else if (T.Vt.FRACTIONAL_PREMIUM === e.skuId)
            g
                ? k.push(
                      {
                          text: P.intl.string(P.t.cpT0Cg),
                          variant: "secondary",
                          onClick: i,
                      },
                      {
                          text: P.intl.string(P.t.ERKK6u),
                          variant: "primary",
                          onClick: () => {
                              (0, E.$)(i);
                          },
                      },
                  )
                : k.push(
                      {
                          text: P.intl.string(P.t.cpT0Cg),
                          variant: "secondary",
                          onClick: i,
                      },
                      {
                          text: P.intl.string(P.t["Jr6N+v"]),
                          variant: "primary",
                          onClick: () => {
                              c.Z.open(y.oAB.SUBSCRIPTIONS, null, {}), i();
                          },
                      },
                  );
        else if (null != n)
            k.push({
                text: P.intl.string(P.t.ouo4FB),
                variant: "secondary",
                icon: d.OgN,
                onClick: (t) => {
                    t.stopPropagation(),
                        (0, f.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: R.Wt.SHOP_PAGE,
                            analyticsLocations: r,
                            variantsReturnStyle: m,
                            onClose: (t) => {
                                t && i();
                            },
                        });
                },
            });
        else {
            let [t] = e.items;
            k.push({
                text: P.intl.string(P.t["2p2aY2"]),
                variant: a ? "secondary" : "primary",
                onClick: () => {
                    if ((i(), (0, o.xf)(), null == L || L(), e.type === u.Z.AVATAR_DECORATION)) {
                        s()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, p.ps)({
                                initialSelectedDecoration: t,
                                analyticsLocations: r,
                            });
                        return;
                    }
                    if (e.type === u.Z.PROFILE_EFFECT) {
                        s()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, A.H)({
                                initialSelectedEffectId: t.id,
                                analyticsLocations: r,
                            });
                        return;
                    }
                    if (e.type === u.Z.NAMEPLATE) {
                        s()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"),
                            (0, h.f)({
                                initialSelectedNameplate: t,
                                analyticsLocations: r,
                            });
                        return;
                    }
                },
            });
        }
        return (
            a &&
                k.push({
                    text: P.intl.string(P.t.MAS7uL),
                    variant: "primary",
                    onClick: l,
                    loading: _,
                }),
            k
        );
    },
    x = (t, e) => {
        let n = i.useMemo(() => (0, L.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                _.default.track(y.rMx.OPEN_MODAL, {
                    type: y.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    M = (t, e) => {
        let n = i.useRef(new r.qA()),
            a = (0, i.useRef)(null),
            [s, l] = i.useState(null),
            u = (0, k.UY)({
                purchaseType: e,
                skuId: t.skuId,
            });
        return {
            environment: n.current,
            modalRef: a,
            confettiCanvas: s,
            setConfettiCanvas: l,
            customConfettiDisplayOptions: u,
        };
    };
