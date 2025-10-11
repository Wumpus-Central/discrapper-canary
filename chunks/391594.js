n.d(e, {
    $0: () => B,
    Xw: () => S,
    cf: () => v,
    f1: () => N,
    ys: () => P,
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
    d = n(37234),
    o = n(1585),
    c = n(318110),
    p = n(98278),
    h = n(642619),
    E = n(110560),
    f = n(313789),
    A = n(518596),
    O = n(507808),
    C = n(626135),
    I = n(585483),
    _ = n(63063),
    T = n(884697),
    y = n(328456),
    L = n(302800),
    R = n(215023),
    k = n(981631),
    m = n(456003),
    b = n(388032);
let g = (t) => (null != t ? b.intl.format(b.t["4kp0AA"], { itemName: t }) : null),
    S = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: l,
            itemConsumed: a,
        } = t;
        if (null != n) return n;
        if (R.Vt.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(m.default.nvaTQk);
        if (R.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (a) return b.intl.string(b.t.t0xkSE);
            else return b.intl.string(b.t.g5W1g4);
        if (i && !r) return b.intl.string(b.t.IMffmp);
        return b.intl.formatToPlainString(b.t.YNaxMj, { itemName: l });
    },
    P = (t) => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: r,
            promotionalRewardCollectedText: l,
            itemConsumed: a,
            isFractionalPremiumActive: d,
            expiresAt: o,
        } = t;
        if (null != n) return n;
        if (R.Vt.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(m.default.UnPGio);
        if (R.Vt.FRACTIONAL_PREMIUM !== e.skuId)
            return (0, s.EQ)(null == e ? void 0 : e.type)
                .with(u.Z.BUNDLE, () => {
                    let { itemOneName: t, itemTwoName: n } = (0, y.Ws)(e);
                    return b.intl.format(b.t.fXw44e, {
                        itemOneName: t,
                        itemTwoName: n,
                    });
                })
                .with(u.Z.AVATAR_DECORATION, () => (r && null != l ? l : g(i)))
                .otherwise(() => g(i));
        {
            let t = b.intl.formatToPlainString(b.t["Cz1G9/"], { days: 3 });
            return a
                ? b.intl.format(b.t.bhLChI, {
                      helpCenterLink: _.Z.getArticleURL(k.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: o,
                  })
                : d
                  ? b.intl.string(b.t.fBmhEx)
                  : b.intl.format(b.t["1ZBX4O"], {
                        helpCenterLink: _.Z.getArticleURL(k.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
    },
    v = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: r,
                handleUseNow: l,
                isApplying: s,
                openProfileSettings: C,
                itemConsumed: _,
            } = t,
            T = [];
        if (R.Vt.ORB_PROFILE_BADGE === e.skuId)
            T.push(
                {
                    text: b.intl.string(m.default.yfwZu7),
                    variant: "primary",
                    onClick: () => {
                        n(), I.S.dispatch(k.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: b.intl.string(b.t["H57f4+"]),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, O.Y)({
                                pageType: k.ZY5.SHOP_ORBS_TAB,
                                sectionType: k.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: k.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, E.navigateToQuestHome)();
                    },
                },
            );
        else if (R.Vt.FRACTIONAL_PREMIUM === e.skuId)
            _
                ? T.push(
                      {
                          text: b.intl.string(b.t.cpT0Cg),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: b.intl.string(b.t.ERKK6u),
                          variant: "primary",
                          onClick: () => {
                              (0, p.$)(n);
                          },
                      },
                  )
                : T.push(
                      {
                          text: b.intl.string(b.t.cpT0Cg),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: b.intl.string(b.t["Jr6N+v"]),
                          variant: "primary",
                          onClick: () => {
                              (0, A.openUserSettings)(f.n.SUBSCRIPTIONS_PANEL, { section: k.oAB.SUBSCRIPTIONS }), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            T.push({
                text: b.intl.string(b.t["2p2aY2"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, d.xf)(), null == C || C(), e.type === u.Z.AVATAR_DECORATION)) {
                        a()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, o.ps)({
                                initialSelectedDecoration: t,
                                analyticsLocations: i,
                            });
                        return;
                    }
                    if (e.type === u.Z.PROFILE_EFFECT) {
                        a()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, h.H)({
                                initialSelectedEffect: t,
                                analyticsLocations: i,
                            });
                        return;
                    }
                    if (e.type === u.Z.NAMEPLATE) {
                        a()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"),
                            (0, c.f)({
                                initialSelectedNameplate: t,
                                analyticsLocations: i,
                            });
                        return;
                    }
                },
            });
        }
        return (
            r &&
                T.push({
                    text: b.intl.string(b.t.MAS7uL),
                    variant: "primary",
                    onClick: l,
                    loading: s,
                }),
            T
        );
    },
    N = (t, e) => {
        let n = i.useMemo(() => (0, T.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                C.default.track(k.rMx.OPEN_MODAL, {
                    type: k.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    B = (t, e) => {
        let n = i.useRef(new r.qA()),
            l = (0, i.useRef)(null),
            [a, s] = i.useState(null),
            u = (0, L.UY)({
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
