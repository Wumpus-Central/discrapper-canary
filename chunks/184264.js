n.d(e, { $V: () => b, $k: () => D, aG: () => U, mO: () => k, v8: () => P }), n(321073);
var i = n(64700),
    a = n(106778),
    l = n(284009),
    r = n.n(l),
    d = n(575593),
    s = n(398590),
    o = n(87719),
    p = n(507107),
    u = n(545986),
    _ = n(780964),
    E = n(858897),
    c = n(318346),
    S = n(954571),
    h = n(625494),
    R = n(975571),
    A = n(993408),
    I = n(562819),
    T = n(442759),
    y = n(637193),
    f = n(617061),
    g = n(515727),
    O = n(158216),
    v = n(758836),
    m = n(652215),
    N = n(625265),
    L = n(985018);
let C = (t) => (null != t ? L.intl.format(L.t["4kp0AB"], { itemName: t }) : null),
    D = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: a,
            productName: l,
            itemConsumed: r,
        } = t;
        if (null != n) return n;
        if (v.Dp.ORB_PROFILE_BADGE === e.skuId) return L.intl.string(N.default.nvaTQq);
        if (v.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (r) return L.intl.string(L.t.t0xkSB);
            else return L.intl.string(L.t.g5W1g8);
        if (i && !a) return L.intl.string(L.t.IMffmm);
        return L.intl.formatToPlainString(L.t.YNaxMp, { itemName: l });
    },
    P = (t) => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: a,
            promotionalRewardCollectedText: l,
            itemConsumed: r,
            isFractionalPremiumActive: s,
            expiresAt: o,
        } = t;
        if (null != n) return n;
        if (v.Dp.ORB_PROFILE_BADGE === e.skuId) return L.intl.string(N.default.UnPGii);
        if (v.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = L.intl.formatToPlainString(L.t.Cz1G97, { days: 3 });
            return r
                ? L.intl.format(L.t.bhLChO, {
                      helpCenterLink: R.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: o,
                  })
                : s
                  ? L.intl.string(L.t.fBmhE9)
                  : L.intl.format(L.t["1ZBX4E"], {
                        helpCenterLink: R.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (e.type === d.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: n } = (0, T.yW)(e);
            return L.intl.format(L.t.fXw44U, { itemOneName: t, itemTwoName: n });
        }
        return e.type === d.R.AVATAR_DECORATION && a && null != l ? l : C(i);
    },
    U = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: a,
                handleUseNow: l,
                isApplying: S,
                openProfileSettings: R,
                itemConsumed: A,
            } = t,
            T = [];
        if (v.Dp.ORB_PROFILE_BADGE === e.skuId)
            T.push(
                {
                    text: L.intl.string(N.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), h._.dispatch(m.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: L.intl.string(L.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, c.Y)({
                                pageType: m.liQ.SHOP_ORBS_TAB,
                                sectionType: m.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: m.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, u.navigateToQuestHome)({ fromContent: p.uF.REWARD_MODAL });
                    },
                },
            );
        else if (v.Dp.FRACTIONAL_PREMIUM === e.skuId)
            A
                ? T.push(
                      { text: L.intl.string(L.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: L.intl.string(L.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, o.x)(n);
                          },
                      },
                  )
                : T.push(
                      { text: L.intl.string(L.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: L.intl.string(L.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, E.openUserSettings)(_.X.SUBSCRIPTIONS_PANEL), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            T.push({
                text: L.intl.string(L.t["2p2aYz"]),
                variant: a ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, s.jH)(), R?.(), e.type === d.R.AVATAR_DECORATION)) {
                        r()(t.type === d.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, I.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === d.R.PROFILE_EFFECT) {
                        r()(t.type === d.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, f.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === d.R.NAMEPLATE) {
                        r()(t.type === d.R.NAMEPLATE, "product type and item type are the same"),
                            (0, y.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === d.R.PROFILE_FRAME) {
                        r()(t.type === d.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, g.w)({ initialSelectedProfileFrame: t, analyticsLocations: i });
                        return;
                    }
                },
            });
        }
        return a && T.push({ text: L.intl.string(L.t.MAS7uK), variant: "primary", onClick: l, loading: S }), T;
    },
    b = (t, e) => {
        let n = i.useMemo(() => (0, A.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                S.default.track(m.HAw.OPEN_MODAL, {
                    type: m.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    k = (t, e) => {
        let n = i.useRef(new a.OH()),
            l = (0, i.useRef)(null),
            [r, d] = i.useState(null),
            s = (0, O.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: r,
            setConfettiCanvas: d,
            customConfettiDisplayOptions: s,
        };
    };
