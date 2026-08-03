s.d(t, { P: () => y, ThirdPartyPromotionsModal: () => S });
var i = s(477900);
s(582128);
var n = s(289873),
    a = s(189213),
    r = s(834730),
    l = s(403581),
    c = s(17928),
    o = s(192308),
    d = s(793574),
    u = s(363195),
    m = s(174459),
    g = s(962644),
    x = s(35587),
    f = s(412260),
    p = s(772167);
function h(e) {
    let { promotion: t, claimButtonPlacement: s = p.u5.INLINE, analyticsLocations: n } = e;
    return (0, i.jsx)(p.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: s,
        analyticsLocations: n,
    });
}
var N = s(975571),
    A = s(789861),
    C = s(881373),
    j = s(264779),
    E = s(852218),
    b = s(652215),
    R = s(806343),
    T = s(962995),
    _ = s(375708);
let I = {
    [E.XY]: {
        getModalTitle: () => _.intl.string(T.default["2I7nK+"]),
        getModalSubtitle: () =>
            _.intl.format(T.default.W8jOD0, { termsUrl: N.A.getArticleURL(b.MVz.LOGITECH_PROMOTION) }),
        landingUrl: "https://www.logitech.com/",
        outboundConfigs: {
            "Logitech G": {
                getTitle: () => _.intl.formatToPlainString(T.default.jkdhZq, { discountPercent: C.aW }),
                getBody: () => _.intl.formatToPlainString(T.default.mH30Yx, {}),
            },
            "Logitech 5%": {
                getTitle: () => _.intl.formatToPlainString(T.default.zeBjoX, { discountPercent: C.y$ }),
                getBody: () => _.intl.formatToPlainString(T.default.fC4abC, { months: 6 }),
            },
            "Logitech PRO Series Sim": {
                getTitle: () => _.intl.formatToPlainString(T.default.pSBCjv, { discountPercent: C.K2 }),
                getBody: () => _.intl.formatToPlainString(T.default.lsRjfl, {}),
            },
        },
    },
    [E.Bt]: {
        getModalTitle: () => _.intl.string(R.default.YJsqDS),
        getModalSubtitle: () =>
            _.intl.format(R.default.ieA3V0, {
                termsUrl: "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
            }),
        getModalTeaser: () => ({ title: _.intl.string(R.default.Dkm10r), body: _.intl.string(R.default.LHAkT9) }),
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            "CoD MW4 Beta": {
                getTitle: () => _.intl.string(R.default["6vVfeK"]),
                getBody: (e) => _.intl.formatToPlainString(R.default.nsmhS2, { date: (0, A.m)(e.endDate) }),
                getAsset: (e, t) => (0, j.WD)(e.id, t),
                getClaimCtaText: () => _.intl.string(R.default["lbyFG+"]),
                getRedeemCtaText: () => _.intl.string(R.default["6rwUm2"]),
                claimButtonPlacement: p.u5.FOOTER,
            },
        },
    },
};
var v = s(640886);
function P(e, t, s) {
    let i = I[e.partnerId ?? ""],
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
function S(e) {
    let { partnerId: t, transitionState: s, onClose: o } = e,
        m = I[t],
        g = (0, c.bG)([u.A], () => u.A.theme),
        [N, A] = (0, c.yK)([f.A], () => {
            let { recurring: e, oneTime: s } = f.A.getPromotionsByPartner(t),
                i = m?.outboundConfigs ?? {};
            return [e.filter((e) => null != i[e.outboundTitle]), s.filter((e) => null != i[e.outboundTitle])];
        }),
        { promotionsLoaded: C, claimedOutboundPromotionCodeMap: j } = (0, x.y7)();
    if (!C) return (0, i.jsx)(n.y, {});
    let E = m?.getModalSubtitle?.(),
        b = m?.getModalTitle() ?? t,
        R = m?.showSectionHeaders !== !1,
        S = R ? { recurring: _.intl.string(T.default["9Y2p6p"]), oneTime: _.intl.string(T.default.Wm58LR) } : void 0,
        y = m?.getModalTeaser?.(),
        D = (0, i.jsx)("div", {
            className: v.kR,
            children: A.map((e) => {
                let t = P(e, j[e.id] ?? null, g),
                    s = m?.outboundConfigs[e.outboundTitle];
                return (0, i.jsx)(
                    h,
                    {
                        promotion: t,
                        claimButtonPlacement: s?.claimButtonPlacement,
                        analyticsLocations: [d.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, i.jsx)(a.Modal, {
        title: b,
        subtitle: E,
        actions: [],
        transitionState: s,
        onClose: o,
        children: (0, i.jsxs)("div", {
            className: v.kL,
            children: [
                N.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != S &&
                                (0, i.jsx)(r.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: S.recurring,
                                }),
                            (0, i.jsx)("div", {
                                className: v.kR,
                                children: N.map((e) => {
                                    var t;
                                    return (0, i.jsx)(
                                        p.wx,
                                        {
                                            recurrence:
                                                ((t = j[e.id] ?? null),
                                                { ...P(e, t, g), asset: (0, p.Cf)()[e.partnerId ?? ""]?.asset ?? "" }),
                                            showPartnerImage: !0,
                                            claimButtonPlacement: p.u5.FOOTER,
                                            footerContent: (0, i.jsx)(p.vw, {}),
                                            analyticsLocations: [d.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                        },
                                        e.id,
                                    );
                                }),
                            }),
                        ],
                    }),
                A.length > 0 &&
                    (R
                        ? (0, i.jsxs)("div", {
                              className: v.E7,
                              children: [
                                  null != S &&
                                      (0, i.jsx)(r.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: S.oneTime,
                                      }),
                                  D,
                              ],
                          })
                        : D),
                null != y &&
                    (0, i.jsxs)("div", {
                        className: v.ar,
                        children: [
                            (0, i.jsxs)("div", {
                                className: v.Uv,
                                children: [
                                    (0, i.jsx)(l.t, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: y.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.E, { variant: "text-sm/medium", color: "text-muted", children: y.body }),
                        ],
                    }),
            ],
        }),
    });
}
function y(e) {
    let { partnerId: t, analyticsLocations: n } = e;
    m.default.track(b.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: [t], partner_id: t, location_stack: n }),
        g.Ay.fetchActivePromotions(),
        (0, o.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(s.bind(s, 672787));
            return (s) => (0, i.jsx)(e, { ...s, partnerId: t });
        });
}
