(n.d(e, { $V: () => F, $k: () => S, aG: () => N, mO: () => v, v8: () => M }), n(321073));
var i = n(582128),
    r = n(776310),
    l = n(284009),
    a = n.n(l),
    u = n(575593),
    s = n(398590),
    p = n(87719),
    c = n(738822),
    o = n(617986),
    A = n(780964),
    E = n(766075),
    d = n(318346),
    f = n(174459),
    O = n(625494),
    R = n(975571),
    _ = n(993408),
    y = n(562819),
    m = n(637193),
    k = n(617061),
    C = n(515727),
    I = n(61750),
    T = n(966971),
    L = n(758836),
    g = n(652215),
    P = n(202541),
    h = n(557743),
    B = n(105292);
function D(t) {
    return null != t ? B.intl.format(B.t["4kp0AB"], { itemName: t }) : null;
}
function S(t) {
    let {
        product: e,
        overrideTitle: n,
        isVariantsGroupEnabled: i,
        shouldShowPromotionalExperience: r,
        productName: l,
        itemConsumed: a,
    } = t;
    if (null != n) return n;
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return B.intl.string(h.default.nvaTQq);
    if ((0, L.EZ)(e.skuId))
        if (a) return B.intl.string(B.t.t0xkSB);
        else return B.intl.string(B.t.g5W1g8);
    if (i && !r) return B.intl.string(B.t.IMffmm);
    return B.intl.formatToPlainString(B.t.YNaxMp, { itemName: l });
}
function M(t) {
    let {
        product: e,
        overrideDescription: n,
        productName: i,
        shouldShowPromotionalExperience: r,
        promotionalRewardCollectedText: l,
        itemConsumed: a,
        isFractionalPremiumActive: s,
        expiresAt: p,
    } = t;
    if (null != n) return n;
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return B.intl.string(h.default.UnPGii);
    if (!(0, L.EZ)(e.skuId)) return e.type === u.R.AVATAR_DECORATION && r && null != l ? l : D(i);
    {
        let t = P.NL[e.skuId],
            n = t?.[1] ?? 3,
            i = B.intl.formatToPlainString(B.t.Cz1G97, { days: n });
        return a
            ? B.intl.format(B.t.bhLChO, {
                  helpCenterLink: R.A.getArticleURL(g.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  duration: i,
                  expirationDate: p,
              })
            : s
              ? B.intl.string(B.t.fBmhE9)
              : B.intl.format(B.t["1ZBX4E"], {
                    helpCenterLink: R.A.getArticleURL(g.MVz.FRACTIONAL_PREMIUM_ABOUT),
                    duration: i,
                });
    }
}
function N(t) {
    let {
            props: e,
            product: n,
            analyticsLocations: i,
            handleUseNow: r,
            isApplying: l,
            canUseNow: f = !0,
            openProfileSettings: R,
            isFetchingPromotion: _ = !1,
            showClaimReward: T = !1,
            isClaimingReward: P = !1,
            onClaimReward: D,
        } = t,
        { onClose: S, itemConsumed: M, remainingProducts: N } = e,
        [F, ...v] = N ?? [];
    if (_ || T) return [{ text: B.intl.string(B.t.pVBlCH), variant: "expressive", onClick: D, loading: _ || P }];
    let x = [];
    if (L.Dp.ORB_PROFILE_BADGE === n.skuId)
        x.push(
            {
                text: B.intl.string(h.default.yfwZuy),
                variant: "primary",
                onClick: () => {
                    (S(), O._.dispatch(g.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                },
            },
            {
                text: B.intl.string(B.t.H57f41),
                variant: "secondary",
                onClick: () => {
                    (S(),
                        (0, d.Y)({
                            pageType: g.liQ.SHOP_ORBS_TAB,
                            sectionType: g.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                            ctaObject: g.ZSU.CTA_TO_QUEST_HOME,
                        }),
                        (0, o.mA)({ fromContent: c.uF.REWARD_MODAL }));
                },
            },
        );
    else if ((0, L.EZ)(n.skuId))
        M
            ? x.push(
                  { text: B.intl.string(B.t.cpT0Cq), variant: "secondary", onClick: S },
                  {
                      text: B.intl.string(B.t.ERKK6v),
                      variant: "primary",
                      onClick: () => {
                          (0, p.x)(S);
                      },
                  },
              )
            : x.push(
                  { text: B.intl.string(B.t.cpT0Cq), variant: "secondary", onClick: S },
                  {
                      text: B.intl.string(B.t["Jr6N+s"]),
                      variant: "primary",
                      onClick: () => {
                          ((0, E.openUserSettings)(A.X.SUBSCRIPTIONS_PANEL), S());
                      },
                  },
              );
    else if (null == F) {
        let [t] = n.items;
        x.push({
            text: B.intl.string(B.t["2p2aYz"]),
            variant: f ? "secondary" : "primary",
            onClick: () => {
                if ((S(), (0, s.jH)(), R?.(), n.type !== u.R.BUNDLE)) {
                    if (n.type === u.R.AVATAR_DECORATION) {
                        (a()(t.type === u.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, y.L)({ initialSelectedDecoration: t, analyticsLocations: i }));
                        return;
                    }
                    if (n.type === u.R.PROFILE_EFFECT) {
                        (a()(t.type === u.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, k.W)({ initialSelectedEffect: t, analyticsLocations: i }));
                        return;
                    }
                    if (n.type === u.R.NAMEPLATE) {
                        (a()(t.type === u.R.NAMEPLATE, "product type and item type are the same"),
                            (0, m.p)({ initialSelectedNameplate: t, analyticsLocations: i }));
                        return;
                    }
                    if (n.type === u.R.PROFILE_FRAME) {
                        (a()(t.type === u.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, C.w)({ initialSelectedProfileFrame: t, analyticsLocations: i }));
                        return;
                    }
                }
            },
        });
    }
    return (
        f &&
            x.push({
                text: B.intl.string(B.t.MAS7uK),
                variant: null == F ? "primary" : "secondary",
                onClick: r,
                loading: l,
            }),
        null != F &&
            x.push({
                text: B.intl.string(B.t.PDTjLN),
                variant: "primary",
                onClick: () => {
                    (S(), (0, I.A)({ ...e, product: F, remainingProducts: v }));
                },
            }),
        x
    );
}
function F(t, e) {
    let n = i.useMemo(() => (0, _.V6)(t.type, t.skuId), [t.type, t.skuId]);
    return (
        i.useEffect(() => {
            f.default.track(g.HAw.OPEN_MODAL, {
                type: g.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                location_stack: e,
                sku_id: t.skuId,
                product_type: n,
            });
        }, [e, t.skuId, t.items, n]),
        { productType: n }
    );
}
let v = (t, e) => {
    let n = i.useRef(new r.OH()),
        l = (0, i.useRef)(null),
        [a, u] = i.useState(null),
        s = (0, T.AB)({ purchaseType: e, skuId: t.skuId });
    return {
        environment: n.current,
        modalRef: l,
        confettiCanvas: a,
        setConfettiCanvas: u,
        customConfettiDisplayOptions: s,
    };
};
