n.d(e, {
    $0: () => Z,
    Xw: () => v,
    cf: () => P,
    f1: () => N,
    ys: () => S,
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
    T = n(585483),
    I = n(63063),
    R = n(884697),
    _ = n(328456),
    y = n(302800),
    L = n(215023),
    m = n(981631),
    b = n(339756),
    g = n(388032);
let k = (t) => (null != t ? g.intl.format(g.t["4kp0AB"], { itemName: t }) : null),
    v = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: l,
            itemConsumed: a,
        } = t;
        if (null != n) return n;
        if (L.Vt.ORB_PROFILE_BADGE === e.skuId) return g.intl.string(b.default.nvaTQq);
        if (L.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (a) return g.intl.string(g.t.t0xkSB);
            else return g.intl.string(g.t.g5W1g8);
        if (i && !r) return g.intl.string(g.t.IMffmm);
        return g.intl.formatToPlainString(g.t.YNaxMp, { itemName: l });
    },
    S = (t) => {
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
        if (L.Vt.ORB_PROFILE_BADGE === e.skuId) return g.intl.string(b.default.UnPGii);
        if (L.Vt.FRACTIONAL_PREMIUM !== e.skuId)
            return (0, s.EQ)(null == e ? void 0 : e.type)
                .with(u.Z.BUNDLE, () => {
                    let { itemOneName: t, itemTwoName: n } = (0, _.Ws)(e);
                    return g.intl.format(g.t.fXw44U, {
                        itemOneName: t,
                        itemTwoName: n,
                    });
                })
                .with(u.Z.AVATAR_DECORATION, () => (r && null != l ? l : k(i)))
                .otherwise(() => k(i));
        {
            let t = g.intl.formatToPlainString(g.t.Cz1G97, { days: 3 });
            return a
                ? g.intl.format(g.t.bhLChO, {
                      helpCenterLink: I.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: o,
                  })
                : d
                  ? g.intl.string(g.t.fBmhE9)
                  : g.intl.format(g.t["1ZBX4E"], {
                        helpCenterLink: I.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
    },
    P = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: r,
                handleUseNow: l,
                isApplying: s,
                openProfileSettings: C,
                itemConsumed: I,
            } = t,
            R = [];
        if (L.Vt.ORB_PROFILE_BADGE === e.skuId)
            R.push(
                {
                    text: g.intl.string(b.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), T.S.dispatch(m.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: g.intl.string(g.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, O.Y)({
                                pageType: m.ZY5.SHOP_ORBS_TAB,
                                sectionType: m.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: m.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, E.navigateToQuestHome)();
                    },
                },
            );
        else if (L.Vt.FRACTIONAL_PREMIUM === e.skuId)
            I
                ? R.push(
                      {
                          text: g.intl.string(g.t.cpT0Cq),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: g.intl.string(g.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, p.$)(n);
                          },
                      },
                  )
                : R.push(
                      {
                          text: g.intl.string(g.t.cpT0Cq),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: g.intl.string(g.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, A.openUserSettings)(f.n.SUBSCRIPTIONS_PANEL, { section: m.oAB.SUBSCRIPTIONS }), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            R.push({
                text: g.intl.string(g.t["2p2aYz"]),
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
                R.push({
                    text: g.intl.string(g.t.MAS7uK),
                    variant: "primary",
                    onClick: l,
                    loading: s,
                }),
            R
        );
    },
    N = (t, e) => {
        let n = i.useMemo(() => (0, R.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                C.default.track(m.rMx.OPEN_MODAL, {
                    type: m.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    Z = (t, e) => {
        let n = i.useRef(new r.qA()),
            l = (0, i.useRef)(null),
            [a, s] = i.useState(null),
            u = (0, y.UY)({
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
