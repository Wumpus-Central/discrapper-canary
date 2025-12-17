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
var i = n(473749),
    r = n(921254),
    l = n(512722),
    a = n.n(l),
    s = n(278074),
    u = n(979554),
    o = n(37234),
    d = n(1585),
    c = n(318110),
    p = n(98278),
    O = n(642619),
    f = n(110560),
    h = n(313789),
    b = n(518596),
    y = n(507808),
    A = n(626135),
    E = n(585483),
    g = n(63063),
    I = n(884697),
    m = n(328456),
    P = n(302800),
    R = n(215023),
    S = n(981631),
    T = n(174572),
    _ = n(388032);
let k = (t) => (null != t ? _.intl.format(_.t["4kp0AB"], { itemName: t }) : null),
    C = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: l,
            itemConsumed: a,
            rentalDuration: s,
        } = t;
        if (null != n) return n;
        if (null != s)
            return 3 === s
                ? _.intl.string(_.t["5Gltxj"])
                : 7 === s
                  ? _.intl.string(_.t.UpxLQN)
                  : _.intl.string(_.t.sYO0Wl);
        if (R.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(T.default.nvaTQq);
        if (R.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (a) return _.intl.string(_.t.t0xkSB);
            else return _.intl.string(_.t.g5W1g8);
        if (i && !r) return _.intl.string(_.t.IMffmm);
        else return _.intl.formatToPlainString(_.t.YNaxMp, { itemName: l });
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
            isRental: c = !1,
        } = t;
        if (null != n) return n;
        if (c && null != d)
            return _.intl.format(_.t["HQjw+I"], {
                itemName: i,
                date: d,
            });
        if (R.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(T.default.UnPGii);
        {
            if (R.Vt.FRACTIONAL_PREMIUM !== e.skuId)
                return (0, s.EQ)(null == e ? void 0 : e.type)
                    .with(u.Z.BUNDLE, () => {
                        let { itemOneName: t, itemTwoName: n } = (0, m.Ws)(e);
                        return _.intl.format(_.t.fXw44U, {
                            itemOneName: t,
                            itemTwoName: n,
                        });
                    })
                    .with(u.Z.AVATAR_DECORATION, () => (r && null != l ? l : k(i)))
                    .otherwise(() => k(i));
            let t = _.intl.formatToPlainString(_.t.Cz1G97, { days: 3 });
            return a
                ? _.intl.format(_.t.bhLChO, {
                      helpCenterLink: g.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: d,
                  })
                : o
                  ? _.intl.string(_.t.fBmhE9)
                  : _.intl.format(_.t["1ZBX4E"], {
                        helpCenterLink: g.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT),
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
                openProfileSettings: A,
                itemConsumed: g,
            } = t,
            I = [];
        if (R.Vt.ORB_PROFILE_BADGE === e.skuId)
            I.push(
                {
                    text: _.intl.string(T.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), E.S.dispatch(S.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: _.intl.string(_.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, y.Y)({
                                pageType: S.ZY5.SHOP_ORBS_TAB,
                                sectionType: S.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: S.qAy.CTA_TO_QUEST_HOME,
                            }),
                            (0, f.navigateToQuestHome)();
                    },
                },
            );
        else if (R.Vt.FRACTIONAL_PREMIUM === e.skuId)
            g
                ? I.push(
                      {
                          text: _.intl.string(_.t.cpT0Cq),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: _.intl.string(_.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, p.$)(n);
                          },
                      },
                  )
                : I.push(
                      {
                          text: _.intl.string(_.t.cpT0Cq),
                          variant: "secondary",
                          onClick: n,
                      },
                      {
                          text: _.intl.string(_.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, b.openUserSettings)(h.n.SUBSCRIPTIONS_PANEL, { section: S.oAB.SUBSCRIPTIONS }), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            I.push({
                text: _.intl.string(_.t["2p2aYz"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, o.xf)(), null == A || A(), e.type === u.Z.AVATAR_DECORATION)) {
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
                    text: _.intl.string(_.t.MAS7uK),
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
                A.default.track(S.rMx.OPEN_MODAL, {
                    type: S.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
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
            u = (0, P.UY)({
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
