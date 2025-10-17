n.d(e, {
    $0: () => M,
    Xw: () => C,
    cf: () => L,
    f1: () => N,
    ys: () => v,
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
    o = n(37234),
    d = n(1585),
    c = n(318110),
    p = n(98278),
    O = n(642619),
    h = n(110560),
    f = n(313789),
    b = n(518596),
    A = n(507808),
    y = n(626135),
    E = n(585483),
    g = n(63063),
    I = n(884697),
    P = n(328456),
    R = n(302800),
    S = n(215023),
    T = n(981631),
    m = n(456003),
    _ = n(388032);
let k = (t) => (null != t ? _.intl.format(_.t["4kp0AA"], { itemName: t }) : null),
    C = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: l,
            itemConsumed: a,
        } = t;
        if (null != n) return n;
        if (S.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(m.default.nvaTQk);
        if (S.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (a) return _.intl.string(_.t.t0xkSE);
            else return _.intl.string(_.t.g5W1g4);
        if (i && !r) return _.intl.string(_.t.IMffmp);
        return _.intl.formatToPlainString(_.t.YNaxMj, { itemName: l });
    },
    v = (t) => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: r,
            promotionalRewardCollectedText: l,
            itemConsumed: a,
            isFractionalPremiumActive: o,
            expiresAt: d,
        } = t;
        if (null != n) return n;
        if (S.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(m.default.UnPGio);
        if (S.Vt.FRACTIONAL_PREMIUM !== e.skuId)
            return (0, s.EQ)(null == e ? void 0 : e.type)
                .with(u.Z.BUNDLE, () => {
                    let { itemOneName: t, itemTwoName: n } = (0, P.Ws)(e);
                    return _.intl.format(_.t.fXw44e, {
                        itemOneName: t,
                        itemTwoName: n,
                    });
                })
                .with(u.Z.AVATAR_DECORATION, () => (r && null != l ? l : k(i)))
                .otherwise(() => k(i));
        {
            let t = _.intl.formatToPlainString(_.t["Cz1G9/"], { days: 3 });
            return a
                ? _.intl.format(_.t.bhLChI, {
                      helpCenterLink: g.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: d,
                  })
                : o
                  ? _.intl.string(_.t.fBmhEx)
                  : _.intl.format(_.t["1ZBX4O"], {
                        helpCenterLink: g.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
    },
    L = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: r,
                handleUseNow: l,
                isApplying: s,
                openProfileSettings: y,
                itemConsumed: g,
            } = t,
            I = [];
        if (S.Vt.ORB_PROFILE_BADGE === e.skuId)
            I.push(
                {
                    text: _.intl.string(m.default.yfwZu7),
                    variant: "primary",
                    onClick: () => {
                        n(), E.S.dispatch(T.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: _.intl.string(_.t["H57f4+"]),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, A.Y)({
                                pageType: T.ZY5.SHOP_ORBS_TAB,
                                sectionType: T.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: T.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, h.navigateToQuestHome)();
                    },
                },
            );
        else if (S.Vt.FRACTIONAL_PREMIUM === e.skuId)
            g
                ? I.push(
                      {
                          text: _.intl.string(_.t.cpT0Cg),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: _.intl.string(_.t.ERKK6u),
                          variant: "primary",
                          onClick: () => {
                              (0, p.$)(n);
                          },
                      },
                  )
                : I.push(
                      {
                          text: _.intl.string(_.t.cpT0Cg),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: _.intl.string(_.t["Jr6N+v"]),
                          variant: "primary",
                          onClick: () => {
                              (0, b.openUserSettings)(f.n.SUBSCRIPTIONS_PANEL, { section: T.oAB.SUBSCRIPTIONS }), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            I.push({
                text: _.intl.string(_.t["2p2aY2"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, o.xf)(), null == y || y(), e.type === u.Z.AVATAR_DECORATION)) {
                        a()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, d.ps)({
                                initialSelectedDecoration: t,
                                analyticsLocations: i,
                            });
                        return;
                    }
                    if (e.type === u.Z.PROFILE_EFFECT) {
                        a()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, O.H)({
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
                I.push({
                    text: _.intl.string(_.t.MAS7uL),
                    variant: "primary",
                    onClick: l,
                    loading: s,
                }),
            I
        );
    },
    N = (t, e) => {
        let n = i.useMemo(() => (0, I.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                y.default.track(T.rMx.OPEN_MODAL, {
                    type: T.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
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
