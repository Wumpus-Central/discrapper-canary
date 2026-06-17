i.d(e, { $V: () => N, $k: () => B, aG: () => M, mO: () => F, v8: () => D }), i(321073);
var n = i(64700),
    r = i(106778),
    a = i(284009),
    l = i.n(a),
    u = i(575593),
    s = i(398590),
    p = i(87719),
    E = i(507107),
    A = i(617986),
    O = i(780964),
    R = i(766075),
    d = i(318346),
    c = i(174459),
    o = i(625494),
    _ = i(975571),
    f = i(993408),
    y = i(562819),
    m = i(637193),
    k = i(617061),
    I = i(515727),
    C = i(966971),
    T = i(758836),
    L = i(652215),
    g = i(788868),
    P = i(69626),
    S = i(375708);
let h = (t) => (null != t ? S.intl.format(S.t["4kp0AB"], { itemName: t }) : null),
    B = (t) => {
        let {
            product: e,
            overrideTitle: i,
            isVariantsGroupEnabled: n,
            shouldShowPromotionalExperience: r,
            productName: a,
            itemConsumed: l,
        } = t;
        if (null != i) return i;
        if (T.Dp.ORB_PROFILE_BADGE === e.skuId) return S.intl.string(P.default.nvaTQq);
        if ((0, T.EZ)(e.skuId))
            if (l) return S.intl.string(S.t.t0xkSB);
            else return S.intl.string(S.t.g5W1g8);
        if (n && !r) return S.intl.string(S.t.IMffmm);
        return S.intl.formatToPlainString(S.t.YNaxMp, { itemName: a });
    },
    D = (t) => {
        let {
            product: e,
            overrideDescription: i,
            productName: n,
            shouldShowPromotionalExperience: r,
            promotionalRewardCollectedText: a,
            itemConsumed: l,
            isFractionalPremiumActive: s,
            expiresAt: p,
        } = t;
        if (null != i) return i;
        if (T.Dp.ORB_PROFILE_BADGE === e.skuId) return S.intl.string(P.default.UnPGii);
        if (!(0, T.EZ)(e.skuId)) return e.type === u.R.AVATAR_DECORATION && r && null != a ? a : h(n);
        {
            let t = g.NL[e.skuId],
                i = t?.[1] ?? 3,
                n = S.intl.formatToPlainString(S.t.Cz1G97, { days: i });
            return l
                ? S.intl.format(S.t.bhLChO, {
                      helpCenterLink: _.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: n,
                      expirationDate: p,
                  })
                : s
                  ? S.intl.string(S.t.fBmhE9)
                  : S.intl.format(S.t["1ZBX4E"], {
                        helpCenterLink: _.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: n,
                    });
        }
    },
    M = (t) => {
        let {
                product: e,
                onClose: i,
                analyticsLocations: n,
                hasRequiredProductItems: r,
                handleUseNow: a,
                isApplying: c,
                canUseNow: _ = !0,
                openProfileSettings: f,
                itemConsumed: C,
            } = t,
            g = (r ?? !1) && _,
            h = [];
        if (T.Dp.ORB_PROFILE_BADGE === e.skuId)
            h.push(
                {
                    text: S.intl.string(P.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        i(), o._.dispatch(L.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: S.intl.string(S.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        i(),
                            (0, d.Y)({
                                pageType: L.liQ.SHOP_ORBS_TAB,
                                sectionType: L.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: L.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, A.navigateToQuestHome)({ fromContent: E.uF.REWARD_MODAL });
                    },
                },
            );
        else if ((0, T.EZ)(e.skuId))
            C
                ? h.push(
                      { text: S.intl.string(S.t.cpT0Cq), variant: "secondary", onClick: i },
                      {
                          text: S.intl.string(S.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, p.x)(i);
                          },
                      },
                  )
                : h.push(
                      { text: S.intl.string(S.t.cpT0Cq), variant: "secondary", onClick: i },
                      {
                          text: S.intl.string(S.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, R.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL), i();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            h.push({
                text: S.intl.string(S.t["2p2aYz"]),
                variant: g ? "secondary" : "primary",
                onClick: () => {
                    if ((i(), (0, s.jH)(), f?.(), e.type !== u.R.BUNDLE)) {
                        if (e.type === u.R.AVATAR_DECORATION) {
                            l()(t.type === u.R.AVATAR_DECORATION, "product type and item type are the same"),
                                (0, y.L)({ initialSelectedDecoration: t, analyticsLocations: n });
                            return;
                        }
                        if (e.type === u.R.PROFILE_EFFECT) {
                            l()(t.type === u.R.PROFILE_EFFECT, "product type and item type are the same"),
                                (0, k.W)({ initialSelectedEffect: t, analyticsLocations: n });
                            return;
                        }
                        if (e.type === u.R.NAMEPLATE) {
                            l()(t.type === u.R.NAMEPLATE, "product type and item type are the same"),
                                (0, m.p)({ initialSelectedNameplate: t, analyticsLocations: n });
                            return;
                        }
                        if (e.type === u.R.PROFILE_FRAME) {
                            l()(t.type === u.R.PROFILE_FRAME, "product type and item type are the same"),
                                (0, I.w)({ initialSelectedProfileFrame: t, analyticsLocations: n });
                            return;
                        }
                    }
                },
            });
        }
        return g && h.push({ text: S.intl.string(S.t.MAS7uK), variant: "primary", onClick: a, loading: c }), h;
    },
    N = (t, e) => {
        let i = n.useMemo(() => (0, f.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            n.useEffect(() => {
                c.default.track(L.HAw.OPEN_MODAL, {
                    type: L.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: i,
                });
            }, [e, t.skuId, t.items, i]),
            { productType: i }
        );
    },
    F = (t, e) => {
        let i = n.useRef(new r.OH()),
            a = (0, n.useRef)(null),
            [l, u] = n.useState(null),
            s = (0, C.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: i.current,
            modalRef: a,
            confettiCanvas: l,
            setConfettiCanvas: u,
            customConfettiDisplayOptions: s,
        };
    };
