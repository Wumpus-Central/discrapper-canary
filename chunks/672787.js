i.d(t, { P: () => y, ThirdPartyPromotionsModal: () => S });
var s = i(477900);
i(582128);
var n = i(289873),
    a = i(189213),
    l = i(834730),
    r = i(403581),
    c = i(17928),
    o = i(192308),
    d = i(793574),
    u = i(363195),
    m = i(174459),
    g = i(962644),
    x = i(35587),
    f = i(528464),
    p = i(772167);
function h(e) {
    let { promotion: t, claimButtonPlacement: i = p.u5.INLINE, analyticsLocations: n } = e;
    return (0, s.jsx)(p.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: i,
        analyticsLocations: n,
    });
}
var N = i(975571),
    A = i(789861),
    j = i(881373),
    b = i(264779),
    C = i(852218),
    E = i(652215),
    T = i(806343),
    R = i(962995),
    v = i(375708);
let _ = {
    [C.XY]: {
        getModalTitle: () => v.intl.string(R.default["2I7nK+"]),
        getModalSubtitle: () =>
            v.intl.format(R.default.W8jOD0, { termsUrl: N.A.getArticleURL(E.MVz.LOGITECH_PROMOTION) }),
        landingUrl: "https://www.logitech.com/",
        outboundConfigs: {
            "Logitech G": {
                getTitle: () => v.intl.formatToPlainString(R.default.jkdhZq, { discountPercent: j.aW }),
                getBody: () => v.intl.formatToPlainString(R.default.mH30Yx, {}),
            },
            "Logitech 5%": {
                getTitle: () => v.intl.formatToPlainString(R.default.zeBjoX, { discountPercent: j.y$ }),
                getBody: () => v.intl.formatToPlainString(R.default.fC4abC, { months: 6 }),
            },
            "Logitech PRO Series Sim": {
                getTitle: () => v.intl.formatToPlainString(R.default.pSBCjv, { discountPercent: j.K2 }),
                getBody: () => v.intl.formatToPlainString(R.default.lsRjfl, {}),
            },
        },
    },
    [C.Bt]: {
        getModalTitle: () => v.intl.string(T.default.YJsqDS),
        getModalSubtitle: () =>
            v.intl.format(T.default.ieA3V0, {
                termsUrl: "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
            }),
        getModalTeaser: () => ({ title: v.intl.string(T.default.Dkm10r), body: v.intl.string(T.default.LHAkT9) }),
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            "CoD MW4 Beta": {
                getTitle: () => v.intl.string(T.default["6vVfeK"]),
                getBody: (e) => v.intl.formatToPlainString(T.default.nsmhS2, { date: (0, A.mh)(e.endDate) }),
                getAsset: (e, t) => (0, b.WD)(e.id, t),
                getClaimCtaText: () => v.intl.string(T.default["lbyFG+"]),
                getRedeemCtaText: () => v.intl.string(T.default["6rwUm2"]),
                claimButtonPlacement: p.u5.FOOTER,
            },
        },
    },
};
var I = i(640886);
function P(e, t, i) {
    let s = _[e.partnerId ?? ""],
        n = s?.outboundConfigs[e.outboundTitle];
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
        asset: n?.getAsset?.(e, i),
        claimCtaText: n?.getClaimCtaText?.(),
        redeemCtaText: n?.getRedeemCtaText?.(),
    };
}
function S(e) {
    let { partnerId: t, transitionState: i, onClose: o } = e,
        m = _[t],
        g = (0, c.bG)([u.A], () => u.A.theme),
        [N, A] = (0, c.yK)([f.A], () => {
            let { recurring: e, oneTime: i } = f.A.getPromotionsByPartner(t),
                s = m?.outboundConfigs ?? {};
            return [e.filter((e) => null != s[e.outboundTitle]), i.filter((e) => null != s[e.outboundTitle])];
        }),
        { promotionsLoaded: j, claimedOutboundPromotionCodeMap: b } = (0, x.y7)();
    if (!j) return (0, s.jsx)(n.y, {});
    let C = m?.getModalSubtitle?.(),
        E = m?.getModalTitle() ?? t,
        T = m?.showSectionHeaders !== !1,
        S = T ? { recurring: v.intl.string(R.default["9Y2p6p"]), oneTime: v.intl.string(R.default.Wm58LR) } : void 0,
        y = m?.getModalTeaser?.(),
        D = (0, s.jsx)("div", {
            className: I.kR,
            children: A.map((e) => {
                let t = P(e, b[e.id] ?? null, g),
                    i = m?.outboundConfigs[e.outboundTitle];
                return (0, s.jsx)(
                    h,
                    {
                        promotion: t,
                        claimButtonPlacement: i?.claimButtonPlacement,
                        analyticsLocations: [d.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, s.jsx)(a.Modal, {
        title: E,
        subtitle: C,
        actions: [],
        transitionState: i,
        onClose: o,
        children: (0, s.jsxs)("div", {
            className: I.kL,
            children: [
                N.length > 0 &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != S &&
                                (0, s.jsx)(l.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: S.recurring,
                                }),
                            (0, s.jsx)("div", {
                                className: I.kR,
                                children: N.map((e) => {
                                    var t;
                                    return (0, s.jsx)(
                                        p.wx,
                                        {
                                            recurrence:
                                                ((t = b[e.id] ?? null),
                                                { ...P(e, t, g), asset: (0, p.Cf)()[e.partnerId ?? ""]?.asset ?? "" }),
                                            showPartnerImage: !0,
                                            claimButtonPlacement: p.u5.FOOTER,
                                            footerContent: (0, s.jsx)(p.vw, {}),
                                            analyticsLocations: [d.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                        },
                                        e.id,
                                    );
                                }),
                            }),
                        ],
                    }),
                A.length > 0 &&
                    (T
                        ? (0, s.jsxs)("div", {
                              className: I.E7,
                              children: [
                                  null != S &&
                                      (0, s.jsx)(l.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: S.oneTime,
                                      }),
                                  D,
                              ],
                          })
                        : D),
                null != y &&
                    (0, s.jsxs)("div", {
                        className: I.ar,
                        children: [
                            (0, s.jsxs)("div", {
                                className: I.Uv,
                                children: [
                                    (0, s.jsx)(r.t, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                    (0, s.jsx)(l.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: y.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.E, { variant: "text-sm/medium", color: "text-muted", children: y.body }),
                        ],
                    }),
            ],
        }),
    });
}
function y(e) {
    let { partnerId: t, analyticsLocations: n } = e;
    m.default.track(E.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: [t], partner_id: t, location_stack: n }),
        g.Ay.fetchActivePromotions(),
        (0, o.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(i.bind(i, 672787));
            return (i) => (0, s.jsx)(e, { ...i, partnerId: t });
        });
}
