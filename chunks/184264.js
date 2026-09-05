n.d(e, { $V: () => F, $k: () => B, aG: () => N, mO: () => v, v8: () => M }), n(321073);
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
    O = n(174459),
    R = n(625494),
    f = n(975571),
    _ = n(993408),
    y = n(562819),
    m = n(637193),
    k = n(617061),
    C = n(515727),
    I = n(61750),
    T = n(966971),
    L = n(758836),
    P = n(652215),
    g = n(202541),
    h = n(438691),
    D = n(375708);
function S(t) {
    return null != t ? D.intl.format(D.t["4kp0AB"], { itemName: t }) : null;
}
function B(t) {
    let {
        product: e,
        overrideTitle: n,
        isVariantsGroupEnabled: i,
        shouldShowPromotionalExperience: r,
        productName: l,
        itemConsumed: a,
    } = t;
    if (null != n) return n;
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return D.intl.string(h.default.nvaTQq);
    if ((0, L.EZ)(e.skuId))
        if (a) return D.intl.string(D.t.t0xkSB);
        else return D.intl.string(D.t.g5W1g8);
    if (i && !r) return D.intl.string(D.t.IMffmm);
    return D.intl.formatToPlainString(D.t.YNaxMp, { itemName: l });
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
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return D.intl.string(h.default.UnPGii);
    if (!(0, L.EZ)(e.skuId)) return e.type === u.R.AVATAR_DECORATION && r && null != l ? l : S(i);
    {
        let t = g.NL[e.skuId],
            n = t?.[1] ?? 3,
            i = D.intl.formatToPlainString(D.t.Cz1G97, { days: n });
        return a
            ? D.intl.format(D.t.bhLChO, {
                  helpCenterLink: f.A.getArticleURL(P.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  duration: i,
                  expirationDate: p,
              })
            : s
              ? D.intl.string(D.t.fBmhE9)
              : D.intl.format(D.t["1ZBX4E"], {
                    helpCenterLink: f.A.getArticleURL(P.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
            canUseNow: O = !0,
            openProfileSettings: f,
        } = t,
        { onClose: _, itemConsumed: T, remainingProducts: g } = e,
        [S, ...B] = g ?? [],
        M = [];
    if (L.Dp.ORB_PROFILE_BADGE === n.skuId)
        M.push(
            {
                text: D.intl.string(h.default.yfwZuy),
                variant: "primary",
                onClick: () => {
                    _(), R._.dispatch(P.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                },
            },
            {
                text: D.intl.string(D.t.H57f41),
                variant: "secondary",
                onClick: () => {
                    _(),
                        (0, d.Y)({
                            pageType: P.liQ.SHOP_ORBS_TAB,
                            sectionType: P.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                            ctaObject: P.ZSU.CTA_TO_QUEST_HOME,
                        }),
                        (0, o.mA)({ fromContent: c.uF.REWARD_MODAL });
                },
            },
        );
    else if ((0, L.EZ)(n.skuId))
        T
            ? M.push(
                  { text: D.intl.string(D.t.cpT0Cq), variant: "secondary", onClick: _ },
                  {
                      text: D.intl.string(D.t.ERKK6v),
                      variant: "primary",
                      onClick: () => {
                          (0, p.x)(_);
                      },
                  },
              )
            : M.push(
                  { text: D.intl.string(D.t.cpT0Cq), variant: "secondary", onClick: _ },
                  {
                      text: D.intl.string(D.t["Jr6N+s"]),
                      variant: "primary",
                      onClick: () => {
                          (0, E.openUserSettings)(A.X.SUBSCRIPTIONS_PANEL), _();
                      },
                  },
              );
    else if (null == S) {
        let [t] = n.items;
        M.push({
            text: D.intl.string(D.t["2p2aYz"]),
            variant: O ? "secondary" : "primary",
            onClick: () => {
                if ((_(), (0, s.jH)(), f?.(), n.type !== u.R.BUNDLE)) {
                    if (n.type === u.R.AVATAR_DECORATION) {
                        a()(t.type === u.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, y.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (n.type === u.R.PROFILE_EFFECT) {
                        a()(t.type === u.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, k.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (n.type === u.R.NAMEPLATE) {
                        a()(t.type === u.R.NAMEPLATE, "product type and item type are the same"),
                            (0, m.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                    if (n.type === u.R.PROFILE_FRAME) {
                        a()(t.type === u.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, C.w)({ initialSelectedProfileFrame: t, analyticsLocations: i });
                        return;
                    }
                }
            },
        });
    }
    return (
        O &&
            M.push({
                text: D.intl.string(D.t.MAS7uK),
                variant: null == S ? "primary" : "secondary",
                onClick: r,
                loading: l,
            }),
        null != S &&
            M.push({
                text: D.intl.string(D.t.PDTjLN),
                variant: "primary",
                onClick: () => {
                    _(), (0, I.A)({ ...e, product: S, remainingProducts: B });
                },
            }),
        M
    );
}
function F(t, e) {
    let n = i.useMemo(() => (0, _.V6)(t.type, t.skuId), [t.type, t.skuId]);
    return (
        i.useEffect(() => {
            O.default.track(P.HAw.OPEN_MODAL, {
                type: P.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
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
