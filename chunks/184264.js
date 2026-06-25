n.d(e, { $V: () => N, $k: () => B, aG: () => M, mO: () => F, v8: () => D }), n(321073);
var i = n(64700),
    r = n(106778),
    a = n(284009),
    l = n.n(a),
    u = n(575593),
    s = n(398590),
    p = n(87719),
    E = n(507107),
    c = n(617986),
    o = n(780964),
    A = n(766075),
    O = n(318346),
    R = n(174459),
    d = n(625494),
    f = n(975571),
    _ = n(993408),
    y = n(562819),
    m = n(637193),
    k = n(617061),
    I = n(515727),
    C = n(966971),
    T = n(758836),
    L = n(652215),
    g = n(788868),
    P = n(69626),
    S = n(375708);
function h(t) {
    return null != t ? S.intl.format(S.t["4kp0AB"], { itemName: t }) : null;
}
function B(t) {
    let {
        product: e,
        overrideTitle: n,
        isVariantsGroupEnabled: i,
        shouldShowPromotionalExperience: r,
        productName: a,
        itemConsumed: l,
    } = t;
    if (null != n) return n;
    if (T.Dp.ORB_PROFILE_BADGE === e.skuId) return S.intl.string(P.default.nvaTQq);
    if ((0, T.EZ)(e.skuId))
        if (l) return S.intl.string(S.t.t0xkSB);
        else return S.intl.string(S.t.g5W1g8);
    if (i && !r) return S.intl.string(S.t.IMffmm);
    return S.intl.formatToPlainString(S.t.YNaxMp, { itemName: a });
}
function D(t) {
    let {
        product: e,
        overrideDescription: n,
        productName: i,
        shouldShowPromotionalExperience: r,
        promotionalRewardCollectedText: a,
        itemConsumed: l,
        isFractionalPremiumActive: s,
        expiresAt: p,
    } = t;
    if (null != n) return n;
    if (T.Dp.ORB_PROFILE_BADGE === e.skuId) return S.intl.string(P.default.UnPGii);
    if (!(0, T.EZ)(e.skuId)) return e.type === u.R.AVATAR_DECORATION && r && null != a ? a : h(i);
    {
        let t = g.NL[e.skuId],
            n = t?.[1] ?? 3,
            i = S.intl.formatToPlainString(S.t.Cz1G97, { days: n });
        return l
            ? S.intl.format(S.t.bhLChO, {
                  helpCenterLink: f.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  duration: i,
                  expirationDate: p,
              })
            : s
              ? S.intl.string(S.t.fBmhE9)
              : S.intl.format(S.t["1ZBX4E"], {
                    helpCenterLink: f.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
                    duration: i,
                });
    }
}
function M(t) {
    let {
            product: e,
            onClose: n,
            analyticsLocations: i,
            hasRequiredProductItems: r,
            handleUseNow: a,
            isApplying: R,
            canUseNow: f = !0,
            openProfileSettings: _,
            itemConsumed: C,
        } = t,
        g = (r ?? !1) && f,
        h = [];
    if (T.Dp.ORB_PROFILE_BADGE === e.skuId)
        h.push(
            {
                text: S.intl.string(P.default.yfwZuy),
                variant: "primary",
                onClick: () => {
                    n(), d._.dispatch(L.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                },
            },
            {
                text: S.intl.string(S.t.H57f41),
                variant: "secondary",
                onClick: () => {
                    n(),
                        (0, O.Y)({
                            pageType: L.liQ.SHOP_ORBS_TAB,
                            sectionType: L.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                            ctaObject: L.ZSU.CTA_TO_QUEST_HOME,
                        }),
                        (0, c.navigateToQuestHome)({ fromContent: E.uF.REWARD_MODAL });
                },
            },
        );
    else if ((0, T.EZ)(e.skuId))
        C
            ? h.push(
                  { text: S.intl.string(S.t.cpT0Cq), variant: "secondary", onClick: n },
                  {
                      text: S.intl.string(S.t.ERKK6v),
                      variant: "primary",
                      onClick: () => {
                          (0, p.x)(n);
                      },
                  },
              )
            : h.push(
                  { text: S.intl.string(S.t.cpT0Cq), variant: "secondary", onClick: n },
                  {
                      text: S.intl.string(S.t["Jr6N+s"]),
                      variant: "primary",
                      onClick: () => {
                          (0, A.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL), n();
                      },
                  },
              );
    else {
        let [t] = e.items;
        h.push({
            text: S.intl.string(S.t["2p2aYz"]),
            variant: g ? "secondary" : "primary",
            onClick: () => {
                if ((n(), (0, s.jH)(), _?.(), e.type !== u.R.BUNDLE)) {
                    if (e.type === u.R.AVATAR_DECORATION) {
                        l()(t.type === u.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, y.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === u.R.PROFILE_EFFECT) {
                        l()(t.type === u.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, k.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === u.R.NAMEPLATE) {
                        l()(t.type === u.R.NAMEPLATE, "product type and item type are the same"),
                            (0, m.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === u.R.PROFILE_FRAME) {
                        l()(t.type === u.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, I.w)({ initialSelectedProfileFrame: t, analyticsLocations: i });
                        return;
                    }
                }
            },
        });
    }
    return g && h.push({ text: S.intl.string(S.t.MAS7uK), variant: "primary", onClick: a, loading: R }), h;
}
function N(t, e) {
    let n = i.useMemo(() => (0, _.V6)(t.type, t.skuId), [t.type, t.skuId]);
    return (
        i.useEffect(() => {
            R.default.track(L.HAw.OPEN_MODAL, {
                type: L.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                location_stack: e,
                sku_id: t.skuId,
                product_type: n,
            });
        }, [e, t.skuId, t.items, n]),
        { productType: n }
    );
}
let F = (t, e) => {
    let n = i.useRef(new r.OH()),
        a = (0, i.useRef)(null),
        [l, u] = i.useState(null),
        s = (0, C.AB)({ purchaseType: e, skuId: t.skuId });
    return {
        environment: n.current,
        modalRef: a,
        confettiCanvas: l,
        setConfettiCanvas: u,
        customConfettiDisplayOptions: s,
    };
};
