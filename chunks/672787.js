s.d(t, { P: () => S, ThirdPartyPromotionsModal: () => P });
var i = s(477900);
s(582128);
var n = s(289873),
    a = s(189213),
    r = s(834730),
    l = s(17928),
    c = s(192308),
    o = s(793574),
    d = s(363195),
    u = s(174459),
    m = s(962644),
    g = s(35587),
    x = s(412260),
    f = s(772167);
function p(e) {
    let { promotion: t, claimButtonPlacement: s = f.u5.INLINE, analyticsLocations: n } = e;
    return (0, i.jsx)(f.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: s,
        analyticsLocations: n,
    });
}
var h = s(975571),
    N = s(789861),
    A = s(881373),
    C = s(264779),
    E = s(852218),
    j = s(652215),
    b = s(806343),
    R = s(962995),
    T = s(375708);
let _ = {
    [E.XY]: {
        getModalTitle: () => T.intl.string(R.default["2I7nK+"]),
        getModalSubtitle: () =>
            T.intl.format(R.default.W8jOD0, { termsUrl: h.A.getArticleURL(j.MVz.LOGITECH_PROMOTION) }),
        landingUrl: "https://www.logitech.com/",
        outboundConfigs: {
            "Logitech G": {
                getTitle: () => T.intl.formatToPlainString(R.default.jkdhZq, { discountPercent: A.aW }),
                getBody: () => T.intl.formatToPlainString(R.default.mH30Yx, {}),
            },
            "Logitech 5%": {
                getTitle: () => T.intl.formatToPlainString(R.default.zeBjoX, { discountPercent: A.y$ }),
                getBody: () => T.intl.formatToPlainString(R.default.fC4abC, { months: 6 }),
            },
            "Logitech PRO Series Sim": {
                getTitle: () => T.intl.formatToPlainString(R.default.pSBCjv, { discountPercent: A.K2 }),
                getBody: () => T.intl.formatToPlainString(R.default.lsRjfl, {}),
            },
        },
    },
    [E.Bt]: {
        getModalTitle: () => T.intl.string(b.default.YJsqDS),
        getModalSubtitle: () =>
            T.intl.format(b.default.ieA3V0, {
                termsUrl: "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
            }),
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            "CoD MW4 Beta": {
                getTitle: () => T.intl.string(b.default["6vVfeK"]),
                getBody: (e) => T.intl.formatToPlainString(b.default.nsmhS2, { date: (0, N.m)(e.endDate) }),
                getAsset: (e, t) => (0, C.WD)(e.id, t),
                getClaimCtaText: () => T.intl.string(b.default["lbyFG+"]),
                getRedeemCtaText: () => T.intl.string(b.default["6rwUm2"]),
                claimButtonPlacement: f.u5.FOOTER,
            },
        },
    },
};
var I = s(640886);
function v(e, t, s) {
    let i = _[e.partnerId ?? ""],
        n = i?.outboundConfigs[e.outboundTitle];
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: n?.getTitle(e) ?? "",
        outboundTitle: e.outboundTitle,
        body: n?.getBody?.(e) ?? "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
        asset: n?.getAsset?.(e, s),
        claimCtaText: n?.getClaimCtaText?.(),
        redeemCtaText: n?.getRedeemCtaText?.(),
    };
}
function P(e) {
    let { partnerId: t, transitionState: s, onClose: c } = e,
        u = _[t],
        m = (0, l.bG)([d.A], () => d.A.theme),
        [h, N] = (0, l.yK)([x.A], () => {
            let { recurring: e, oneTime: s } = x.A.getPromotionsByPartner(t),
                i = u?.outboundConfigs ?? {};
            return [e.filter((e) => null != i[e.outboundTitle]), s.filter((e) => null != i[e.outboundTitle])];
        }),
        { promotionsLoaded: A, claimedOutboundPromotionCodeMap: C } = (0, g.y7)();
    if (!A) return (0, i.jsx)(n.y, {});
    let E = u?.getModalSubtitle?.(),
        j = u?.getModalTitle() ?? t,
        b = u?.showSectionHeaders !== !1,
        P = b ? { recurring: T.intl.string(R.default["9Y2p6p"]), oneTime: T.intl.string(R.default.Wm58LR) } : void 0,
        S = (0, i.jsx)("div", {
            className: I.kR,
            children: N.map((e) => {
                let t = v(e, C[e.id] ?? null, m),
                    s = u?.outboundConfigs[e.outboundTitle];
                return (0, i.jsx)(
                    p,
                    {
                        promotion: t,
                        claimButtonPlacement: s?.claimButtonPlacement,
                        analyticsLocations: [o.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, i.jsx)(a.Modal, {
        title: j,
        subtitle: E,
        actions: [],
        transitionState: s,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: I.kL,
            children: [
                h.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != P &&
                                (0, i.jsx)(r.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: P.recurring,
                                }),
                            (0, i.jsx)("div", {
                                className: I.kR,
                                children: h.map((e) => {
                                    var t;
                                    return (0, i.jsx)(
                                        f.wx,
                                        {
                                            recurrence:
                                                ((t = C[e.id] ?? null),
                                                { ...v(e, t, m), asset: (0, f.Cf)()[e.partnerId ?? ""]?.asset ?? "" }),
                                            showPartnerImage: !0,
                                            claimButtonPlacement: f.u5.FOOTER,
                                            footerContent: (0, i.jsx)(f.vw, {}),
                                            analyticsLocations: [o.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                        },
                                        e.id,
                                    );
                                }),
                            }),
                        ],
                    }),
                N.length > 0 &&
                    (b
                        ? (0, i.jsxs)("div", {
                              className: I.E7,
                              children: [
                                  null != P &&
                                      (0, i.jsx)(r.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: P.oneTime,
                                      }),
                                  S,
                              ],
                          })
                        : S),
            ],
        }),
    });
}
function S(e) {
    let { partnerId: t, analyticsLocations: n } = e;
    u.default.track(j.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: [t], partner_id: t, location_stack: n }),
        m.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(s.bind(s, 672787));
            return (s) => (0, i.jsx)(e, { ...s, partnerId: t });
        });
}
