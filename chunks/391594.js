n.d(e, {
    $0: () => N,
    Xw: () => L,
    cf: () => M,
    f1: () => w,
    ys: () => B,
}),
    n(314940),
    n(539854),
    n(388685);
var i = n(647438),
    r = n(238651),
    l = n(512722),
    s = n.n(l),
    a = n(278074),
    u = n(979554),
    o = n(481060),
    d = n(37234),
    c = n(230711),
    p = n(1585),
    f = n(318110),
    h = n(333867),
    O = n(98278),
    y = n(642619),
    g = n(110560),
    b = n(507808),
    A = n(626135),
    E = n(585483),
    m = n(63063),
    I = n(884697),
    T = n(328456),
    P = n(302800),
    _ = n(215023),
    v = n(981631),
    R = n(474936),
    k = n(456003),
    C = n(388032);
let S = (t) => (null != t ? C.intl.format(C.t["4kp0AA"], { itemName: t }) : null),
    L = (t) => {
        let {
            product: e,
            pairedProduct: n,
            overrideTitle: i,
            isVariantsGroupEnabled: r,
            shouldShowPromotionalExperience: l,
            productName: s,
            pairedProductName: a,
            itemConsumed: u,
        } = t;
        if (null != i) return i;
        if (_.Vt.ORB_PROFILE_BADGE === e.skuId) return C.intl.string(k.default.nvaTQk);
        if (_.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (u) return C.intl.string(C.t.t0xkSE);
            else return C.intl.string(C.t.g5W1g4);
        if (null != n)
            return C.intl.formatToPlainString(new Date() < _.a$ ? C.t.BhGU09 : C.t.Jfv5Qk, {
                purchased_item: s,
                suggested_item: a,
            });
        if (r && !l) return C.intl.string(C.t.IMffmp);
        else return C.intl.formatToPlainString(C.t.YNaxMj, { itemName: s });
    },
    B = (t) => {
        let {
            product: e,
            pairedProduct: n,
            overrideDescription: i,
            productName: r,
            pairedProductName: l,
            shouldShowPromotionalExperience: s,
            promotionalRewardCollectedText: o,
            itemConsumed: d,
            isFractionalPremiumActive: c,
            expiresAt: p,
        } = t;
        if (null != i) return i;
        if (_.Vt.ORB_PROFILE_BADGE === e.skuId) return C.intl.string(k.default.UnPGio);
        if (_.Vt.FRACTIONAL_PREMIUM === e.skuId) {
            let t = C.intl.formatToPlainString(C.t["Cz1G9/"], { days: 3 });
            return d
                ? C.intl.format(C.t.bhLChI, {
                      helpCenterLink: m.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: p,
                  })
                : c
                  ? C.intl.string(C.t.fBmhEx)
                  : C.intl.format(C.t["1ZBX4O"], {
                        helpCenterLink: m.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (null != n)
            return C.intl.format(new Date() < _.a$ ? C.t["1jBC0t"] : C.t.qSrp39, {
                purchased_item: r,
                suggested_item: l,
            });
        return (0, a.EQ)(null == e ? void 0 : e.type)
            .with(u.Z.BUNDLE, () => {
                let { itemOneName: t, itemTwoName: n } = (0, T.Ws)(e);
                return C.intl.format(C.t.fXw44e, {
                    itemOneName: t,
                    itemTwoName: n,
                });
            })
            .with(u.Z.AVATAR_DECORATION, () => (s && null != o ? o : S(r)))
            .otherwise(() => S(r));
    },
    M = (t) => {
        let {
                product: e,
                pairedProduct: n,
                onClose: i,
                analyticsLocations: r,
                hasRequiredProductItems: l,
                handleUseNow: a,
                isApplying: A,
                variantsReturnStyle: m,
                openProfileSettings: I,
                itemConsumed: T,
            } = t,
            P = [];
        if (_.Vt.ORB_PROFILE_BADGE === e.skuId)
            P.push(
                {
                    text: C.intl.string(k.default.yfwZu7),
                    variant: "primary",
                    onClick: () => {
                        i(), E.S.dispatch(v.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: C.intl.string(C.t["H57f4+"]),
                    variant: "secondary",
                    onClick: () => {
                        i(),
                            (0, b.Y)({
                                pageType: v.ZY5.SHOP_ORBS_TAB,
                                sectionType: v.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: v.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, g.navigateToQuestHome)();
                    },
                },
            );
        else if (_.Vt.FRACTIONAL_PREMIUM === e.skuId)
            T
                ? P.push(
                      {
                          text: C.intl.string(C.t.cpT0Cg),
                          variant: "secondary",
                          onClick: i,
                      },
                      {
                          text: C.intl.string(C.t.ERKK6u),
                          variant: "primary",
                          onClick: () => {
                              (0, O.$)(i);
                          },
                      },
                  )
                : P.push(
                      {
                          text: C.intl.string(C.t.cpT0Cg),
                          variant: "secondary",
                          onClick: i,
                      },
                      {
                          text: C.intl.string(C.t["Jr6N+v"]),
                          variant: "primary",
                          onClick: () => {
                              c.Z.open(v.oAB.SUBSCRIPTIONS, null, {}), i();
                          },
                      },
                  );
        else if (null != n)
            P.push({
                text: C.intl.string(C.t.ouo4FB),
                variant: "secondary",
                icon: o.OgN,
                onClick: (t) => {
                    t.stopPropagation(),
                        (0, h.Z)({
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
            P.push({
                text: C.intl.string(C.t["2p2aY2"]),
                variant: l ? "secondary" : "primary",
                onClick: () => {
                    if ((i(), (0, d.xf)(), null == I || I(), e.type === u.Z.AVATAR_DECORATION)) {
                        s()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, p.ps)({
                                initialSelectedDecoration: t,
                                analyticsLocations: r,
                            });
                        return;
                    }
                    if (e.type === u.Z.PROFILE_EFFECT) {
                        s()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, y.H)({
                                initialSelectedEffectId: t.id,
                                analyticsLocations: r,
                            });
                        return;
                    }
                    if (e.type === u.Z.NAMEPLATE) {
                        s()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"),
                            (0, f.f)({
                                initialSelectedNameplate: t,
                                analyticsLocations: r,
                            });
                        return;
                    }
                },
            });
        }
        return (
            l &&
                P.push({
                    text: C.intl.string(C.t.MAS7uL),
                    variant: "primary",
                    onClick: a,
                    loading: A,
                }),
            P
        );
    },
    w = (t, e) => {
        let n = i.useMemo(() => (0, I.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                A.default.track(v.rMx.OPEN_MODAL, {
                    type: v.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    N = (t, e) => {
        let n = i.useRef(new r.qA()),
            l = (0, i.useRef)(null),
            [s, a] = i.useState(null),
            u = (0, P.UY)({
                purchaseType: e,
                skuId: t.skuId,
            });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: s,
            setConfettiCanvas: a,
            customConfettiDisplayOptions: u,
        };
    };
