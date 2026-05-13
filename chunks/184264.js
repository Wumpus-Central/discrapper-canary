i.d(e, { $V: () => F, $k: () => D, aG: () => N, mO: () => U, v8: () => M }), i(321073);
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
    o = i(174459),
    c = i(625494),
    _ = i(975571),
    f = i(993408),
    y = i(562819),
    m = i(442759),
    k = i(637193),
    I = i(617061),
    C = i(515727),
    T = i(966971),
    L = i(758836),
    g = i(652215),
    P = i(788868),
    S = i(625265),
    h = i(375708);
let B = (t) => (null != t ? h.intl.format(h.t["4kp0AB"], { itemName: t }) : null),
    D = (t) => {
        let {
            product: e,
            overrideTitle: i,
            isVariantsGroupEnabled: n,
            shouldShowPromotionalExperience: r,
            productName: a,
            itemConsumed: l,
        } = t;
        if (null != i) return i;
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return h.intl.string(S.default.nvaTQq);
        if ((0, L.EZ)(e.skuId))
            if (l) return h.intl.string(h.t.t0xkSB);
            else return h.intl.string(h.t.g5W1g8);
        if (n && !r) return h.intl.string(h.t.IMffmm);
        return h.intl.formatToPlainString(h.t.YNaxMp, { itemName: a });
    },
    M = (t) => {
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
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return h.intl.string(S.default.UnPGii);
        if ((0, L.EZ)(e.skuId)) {
            let t = P.NL[e.skuId],
                i = t?.[1] ?? 3,
                n = h.intl.formatToPlainString(h.t.Cz1G97, { days: i });
            return l
                ? h.intl.format(h.t.bhLChO, {
                      helpCenterLink: _.A.getArticleURL(g.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: n,
                      expirationDate: p,
                  })
                : s
                  ? h.intl.string(h.t.fBmhE9)
                  : h.intl.format(h.t["1ZBX4E"], {
                        helpCenterLink: _.A.getArticleURL(g.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: n,
                    });
        }
        if (e.type === u.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: i } = (0, m.yW)(e);
            return h.intl.format(h.t.fXw44U, { itemOneName: t, itemTwoName: i });
        }
        return e.type === u.R.AVATAR_DECORATION && r && null != a ? a : B(n);
    },
    N = (t) => {
        let {
                product: e,
                onClose: i,
                analyticsLocations: n,
                hasRequiredProductItems: r,
                handleUseNow: a,
                isApplying: o,
                openProfileSettings: _,
                itemConsumed: f,
            } = t,
            m = [];
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId)
            m.push(
                {
                    text: h.intl.string(S.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        i(), c._.dispatch(g.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: h.intl.string(h.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        i(),
                            (0, d.Y)({
                                pageType: g.liQ.SHOP_ORBS_TAB,
                                sectionType: g.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: g.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, A.navigateToQuestHome)({ fromContent: E.uF.REWARD_MODAL });
                    },
                },
            );
        else if ((0, L.EZ)(e.skuId))
            f
                ? m.push(
                      { text: h.intl.string(h.t.cpT0Cq), variant: "secondary", onClick: i },
                      {
                          text: h.intl.string(h.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, p.x)(i);
                          },
                      },
                  )
                : m.push(
                      { text: h.intl.string(h.t.cpT0Cq), variant: "secondary", onClick: i },
                      {
                          text: h.intl.string(h.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, R.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL), i();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            m.push({
                text: h.intl.string(h.t["2p2aYz"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if ((i(), (0, s.jH)(), _?.(), e.type === u.R.AVATAR_DECORATION)) {
                        l()(t.type === u.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, y.L)({ initialSelectedDecoration: t, analyticsLocations: n });
                        return;
                    }
                    if (e.type === u.R.PROFILE_EFFECT) {
                        l()(t.type === u.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, I.W)({ initialSelectedEffect: t, analyticsLocations: n });
                        return;
                    }
                    if (e.type === u.R.NAMEPLATE) {
                        l()(t.type === u.R.NAMEPLATE, "product type and item type are the same"),
                            (0, k.p)({ initialSelectedNameplate: t, analyticsLocations: n });
                        return;
                    }
                    if (e.type === u.R.PROFILE_FRAME) {
                        l()(t.type === u.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, C.w)({ initialSelectedProfileFrame: t, analyticsLocations: n });
                        return;
                    }
                },
            });
        }
        return r && m.push({ text: h.intl.string(h.t.MAS7uK), variant: "primary", onClick: a, loading: o }), m;
    },
    F = (t, e) => {
        let i = n.useMemo(() => (0, f.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            n.useEffect(() => {
                o.default.track(g.HAw.OPEN_MODAL, {
                    type: g.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: i,
                });
            }, [e, t.skuId, t.items, i]),
            { productType: i }
        );
    },
    U = (t, e) => {
        let i = n.useRef(new r.OH()),
            a = (0, n.useRef)(null),
            [l, u] = n.useState(null),
            s = (0, T.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: i.current,
            modalRef: a,
            confettiCanvas: l,
            setConfettiCanvas: u,
            customConfettiDisplayOptions: s,
        };
    };
