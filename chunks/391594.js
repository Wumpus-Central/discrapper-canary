n.d(e, {
    $0: () => x,
    Xw: () => v,
    cf: () => B,
    f1: () => Z,
    ys: () => N,
}),
    n(314940),
    n(539854),
    n(388685);
var i = n(647438),
    r = n(238651),
    l = n(512722),
    a = n.n(l),
    s = n(278074),
    u = n(979554),
    d = n(481060),
    o = n(37234),
    c = n(230711),
    p = n(1585),
    f = n(318110),
    h = n(333867),
    E = n(98278),
    C = n(642619),
    A = n(110560),
    O = n(507808),
    _ = n(626135),
    I = n(585483),
    T = n(63063),
    m = n(884697),
    g = n(328456),
    R = n(302800),
    k = n(215023),
    L = n(981631),
    P = n(474936),
    b = n(456003),
    y = n(388032);
let S = (t) => (null != t ? y.intl.format(y.t["4kp0AA"], { itemName: t }) : null),
    v = (t) => {
        let {
            product: e,
            pairedProduct: n,
            overrideTitle: i,
            isVariantsGroupEnabled: r,
            shouldShowPromotionalExperience: l,
            productName: a,
            pairedProductName: s,
            itemConsumed: u,
        } = t;
        if (null != i) return i;
        if (k.Vt.ORB_PROFILE_BADGE === e.skuId) return y.intl.string(b.default.nvaTQk);
        if (k.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (u) return y.intl.string(y.t.t0xkSE);
            else return y.intl.string(y.t.g5W1g4);
        if (null != n)
            return y.intl.formatToPlainString(new Date() < k.a$ ? y.t.BhGU09 : y.t.Jfv5Qk, {
                purchased_item: a,
                suggested_item: s,
            });
        if (r && !l) return y.intl.string(y.t.IMffmp);
        else return y.intl.formatToPlainString(y.t.YNaxMj, { itemName: a });
    },
    N = (t) => {
        let {
            product: e,
            pairedProduct: n,
            overrideDescription: i,
            productName: r,
            pairedProductName: l,
            shouldShowPromotionalExperience: a,
            promotionalRewardCollectedText: d,
            itemConsumed: o,
            isFractionalPremiumActive: c,
            expiresAt: p,
        } = t;
        if (null != i) return i;
        if (k.Vt.ORB_PROFILE_BADGE === e.skuId) return y.intl.string(b.default.UnPGio);
        if (k.Vt.FRACTIONAL_PREMIUM === e.skuId) {
            let t = y.intl.formatToPlainString(y.t["Cz1G9/"], { days: 3 });
            return o
                ? y.intl.format(y.t.bhLChI, {
                      helpCenterLink: T.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: p,
                  })
                : c
                  ? y.intl.string(y.t.fBmhEx)
                  : y.intl.format(y.t["1ZBX4O"], {
                        helpCenterLink: T.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (null != n)
            return y.intl.format(new Date() < k.a$ ? y.t["1jBC0t"] : y.t.qSrp39, {
                purchased_item: r,
                suggested_item: l,
            });
        return (0, s.EQ)(null == e ? void 0 : e.type)
            .with(u.Z.BUNDLE, () => {
                let { itemOneName: t, itemTwoName: n } = (0, g.Ws)(e);
                return y.intl.format(y.t.fXw44e, {
                    itemOneName: t,
                    itemTwoName: n,
                });
            })
            .with(u.Z.AVATAR_DECORATION, () => (a && null != d ? d : S(r)))
            .otherwise(() => S(r));
    },
    B = (t) => {
        let {
                product: e,
                pairedProduct: n,
                onClose: i,
                analyticsLocations: r,
                hasRequiredProductItems: l,
                handleUseNow: s,
                isApplying: _,
                variantsReturnStyle: T,
                openProfileSettings: m,
                itemConsumed: g,
            } = t,
            R = [];
        if (k.Vt.ORB_PROFILE_BADGE === e.skuId)
            R.push(
                {
                    text: y.intl.string(b.default.yfwZu7),
                    variant: "primary",
                    onClick: () => {
                        i(), I.S.dispatch(L.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: y.intl.string(y.t["H57f4+"]),
                    variant: "secondary",
                    onClick: () => {
                        i(),
                            (0, O.Y)({
                                pageType: L.ZY5.SHOP_ORBS_TAB,
                                sectionType: L.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: L.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, A.navigateToQuestHome)();
                    },
                },
            );
        else if (k.Vt.FRACTIONAL_PREMIUM === e.skuId)
            g
                ? R.push(
                      {
                          text: y.intl.string(y.t.cpT0Cg),
                          variant: "secondary",
                          onClick: i,
                      },
                      {
                          text: y.intl.string(y.t.ERKK6u),
                          variant: "primary",
                          onClick: () => {
                              (0, E.$)(i);
                          },
                      },
                  )
                : R.push(
                      {
                          text: y.intl.string(y.t.cpT0Cg),
                          variant: "secondary",
                          onClick: i,
                      },
                      {
                          text: y.intl.string(y.t["Jr6N+v"]),
                          variant: "primary",
                          onClick: () => {
                              c.Z.open(L.oAB.SUBSCRIPTIONS, null, {}), i();
                          },
                      },
                  );
        else if (null != n)
            R.push({
                text: y.intl.string(y.t.ouo4FB),
                variant: "secondary",
                icon: d.OgN,
                onClick: (t) => {
                    t.stopPropagation(),
                        (0, h.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: P.Wt.SHOP_PAGE,
                            analyticsLocations: r,
                            variantsReturnStyle: T,
                            onClose: (t) => {
                                t && i();
                            },
                        });
                },
            });
        else {
            let [t] = e.items;
            R.push({
                text: y.intl.string(y.t["2p2aY2"]),
                variant: l ? "secondary" : "primary",
                onClick: () => {
                    if ((i(), (0, o.xf)(), null == m || m(), e.type === u.Z.AVATAR_DECORATION)) {
                        a()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, p.ps)({
                                initialSelectedDecoration: t,
                                analyticsLocations: r,
                            });
                        return;
                    }
                    if (e.type === u.Z.PROFILE_EFFECT) {
                        a()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, C.H)({
                                initialSelectedEffectId: t.id,
                                analyticsLocations: r,
                            });
                        return;
                    }
                    if (e.type === u.Z.NAMEPLATE) {
                        a()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"),
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
                R.push({
                    text: y.intl.string(y.t.MAS7uL),
                    variant: "primary",
                    onClick: s,
                    loading: _,
                }),
            R
        );
    },
    Z = (t, e) => {
        let n = i.useMemo(() => (0, m.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                _.default.track(L.rMx.OPEN_MODAL, {
                    type: L.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    x = (t, e) => {
        let n = i.useRef(new r.qA()),
            l = (0, i.useRef)(null),
            [a, s] = i.useState(null),
            u = (0, R.UY)({
                purchaseType: e,
                skuId: t.skuId,
            });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: a,
            setConfettiCanvas: s,
            customConfettiDisplayOptions: u,
        };
    };
