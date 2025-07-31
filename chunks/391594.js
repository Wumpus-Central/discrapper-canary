(n.d(e, {
    $0: () => B,
    Xw: () => R,
    cf: () => L,
    f1: () => D,
    ys: () => C
}),
    n(314940),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(505266),
    l = n(512722),
    a = n.n(l),
    s = n(278074),
    o = n(979554),
    u = n(481060),
    c = n(37234),
    d = n(230711),
    p = n(1585),
    f = n(318110),
    O = n(333867),
    y = n(98278),
    b = n(642619),
    g = n(110560),
    h = n(507808),
    P = n(626135),
    m = n(585483),
    v = n(63063),
    A = n(884697),
    E = n(328456),
    I = n(302800),
    T = n(215023),
    j = n(981631),
    w = n(474936),
    S = n(427487),
    _ = n(388032);
let k = (t) => (null != t ? _.intl.format(_.t['4kp0AA'], { itemName: t }) : null),
    R = (t) => {
        let { product: e, pairedProduct: n, overrideTitle: r, isVariantsGroupEnabled: i, shouldShowPromotionalExperience: l, productName: a, pairedProductName: s, itemConsumed: o } = t;
        if (null != r) return r;
        if (T.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(S.default.nvaTQk);
        if (T.Vt.FRACTIONAL_PREMIUM === e.skuId)
            if (o) return _.intl.string(_.t['Q+BB29']);
            else return _.intl.string(_.t['+PHEo6']);
        if (null != n)
            return _.intl.formatToPlainString(new Date() < T.a$ ? _.t.BhGU09 : _.t.Jfv5Qk, {
                purchased_item: a,
                suggested_item: s
            });
        if (i && !l) return _.intl.string(_.t.IMffmp);
        else return _.intl.formatToPlainString(_.t.YNaxMj, { itemName: a });
    },
    C = (t) => {
        let { product: e, pairedProduct: n, overrideDescription: r, productName: i, pairedProductName: l, shouldShowPromotionalExperience: a, promotionalRewardCollectedText: u, itemConsumed: c, isFractionalPremiumActive: d, expiresAt: p } = t;
        if (null != r) return r;
        if (T.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(S.default.UnPGio);
        if (T.Vt.FRACTIONAL_PREMIUM === e.skuId) {
            let t = _.intl.formatToPlainString(_.t['Cz1G9/'], { days: 3 });
            return c
                ? _.intl.format(_.t.tgc1oq, {
                      helpCenterLink: v.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: p
                  })
                : d
                  ? _.intl.string(_.t['1ku8i4'])
                  : _.intl.format(_.t.fI1nLy, {
                        helpCenterLink: v.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t
                    });
        }
        if (null != n)
            return _.intl.format(new Date() < T.a$ ? _.t['1jBC0t'] : _.t.qSrp39, {
                purchased_item: i,
                suggested_item: l
            });
        return (0, s.EQ)(null == e ? void 0 : e.type)
            .with(o.Z.BUNDLE, () => {
                let { itemOneName: t, itemTwoName: n } = (0, E.Ws)(e);
                return _.intl.format(_.t.fXw44e, {
                    itemOneName: t,
                    itemTwoName: n
                });
            })
            .with(o.Z.AVATAR_DECORATION, () => (a && null != u ? u : k(i)))
            .otherwise(() => k(i));
    },
    L = (t) => {
        let { product: e, pairedProduct: n, onClose: r, analyticsLocations: i, hasRequiredProductItems: l, handleUseNow: s, isApplying: P, variantsReturnStyle: v, openProfileSettings: A, itemConsumed: E } = t,
            I = [];
        if (T.Vt.ORB_PROFILE_BADGE === e.skuId)
            I.push(
                {
                    text: _.intl.string(S.default.yfwZu7),
                    variant: 'primary',
                    onClick: () => {
                        (r(), m.S.dispatch(j.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                    }
                },
                {
                    text: _.intl.string(_.t['H57f4+']),
                    variant: 'secondary',
                    onClick: () => {
                        (r(),
                            (0, h.Y)({
                                pageType: j.ZY5.SHOP_ORBS_TAB,
                                sectionType: j.jXE.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: j.qAy.CTA_TO_QUEST_HOME
                            }),
                            (0, g.navigateToQuestHome)());
                    }
                }
            );
        else if (T.Vt.FRACTIONAL_PREMIUM === e.skuId)
            E
                ? I.push(
                      {
                          text: _.intl.string(_.t.cpT0Cg),
                          variant: 'secondary',
                          onClick: r
                      },
                      {
                          text: _.intl.string(_.t['eQX+go']),
                          variant: 'primary',
                          onClick: () => {
                              (0, y.$)(r);
                          }
                      }
                  )
                : I.push(
                      {
                          text: _.intl.string(_.t.cpT0Cg),
                          variant: 'secondary',
                          onClick: r
                      },
                      {
                          text: _.intl.string(_.t.LnsQGR),
                          variant: 'primary',
                          onClick: () => {
                              (d.Z.open(j.oAB.SUBSCRIPTIONS, null, {}), r());
                          }
                      }
                  );
        else if (null != n)
            I.push({
                text: _.intl.string(_.t.ouo4FB),
                variant: 'secondary',
                icon: u.OgN,
                onClick: (t) => {
                    (t.stopPropagation(),
                        (0, O.Z)({
                            skuId: n.skuId,
                            isGift: !0,
                            giftingOrigin: w.Wt.SHOP_PAGE,
                            analyticsLocations: i,
                            variantsReturnStyle: v,
                            onClose: (t) => {
                                t && r();
                            }
                        }));
                }
            });
        else {
            let [t] = e.items;
            I.push({
                text: _.intl.string(_.t['2p2aY2']),
                variant: l ? 'secondary' : 'primary',
                onClick: () => {
                    if ((r(), (0, c.xf)(), null == A || A(), e.type === o.Z.AVATAR_DECORATION)) {
                        (a()(t.type === o.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                            (0, p.ps)({
                                initialSelectedDecoration: t,
                                analyticsLocations: i
                            }));
                        return;
                    }
                    if (e.type === o.Z.PROFILE_EFFECT) {
                        (a()(t.type === o.Z.PROFILE_EFFECT, 'product type and item type are the same'),
                            (0, b.H)({
                                initialSelectedEffectId: t.id,
                                analyticsLocations: i
                            }));
                        return;
                    }
                    if (e.type === o.Z.NAMEPLATE) {
                        (a()(t.type === o.Z.NAMEPLATE, 'product type and item type are the same'),
                            (0, f.f)({
                                initialSelectedNameplate: t,
                                analyticsLocations: i
                            }));
                        return;
                    }
                }
            });
        }
        return (
            l &&
                I.push({
                    text: _.intl.string(_.t.MAS7uL),
                    variant: 'primary',
                    onClick: s,
                    loading: P
                }),
            I
        );
    },
    D = (t, e) => {
        let n = r.useMemo(() => (0, A.jm)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            r.useEffect(() => {
                P.default.track(j.rMx.OPEN_MODAL, {
                    type: j.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    B = (t, e) => {
        let n = r.useRef(new i.qA()),
            l = (0, r.useRef)(null),
            [a, s] = r.useState(null),
            o = (0, I.UY)({
                purchaseType: e,
                skuId: t.skuId
            });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: a,
            setConfettiCanvas: s,
            customConfettiDisplayOptions: o
        };
    };
