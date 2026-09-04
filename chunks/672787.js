s.d(t, { P: () => y, ThirdPartyPromotionsModal: () => S });
var i = s(477900);
s(582128);
var n = s(289873),
    a = s(189213),
    l = s(834730),
    r = s(403581),
    c = s(17928),
    o = s(192308),
    d = s(793574),
    u = s(363195),
    m = s(174459),
    g = s(962644),
    x = s(35587),
    f = s(412260),
    h = s(772167);
function p(e) {
    let { promotion: t, claimButtonPlacement: s = h.u5.INLINE, analyticsLocations: n } = e;
    return (0, i.jsx)(h.wx, {
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
    j = s(881373),
    b = s(264779),
    C = s(852218),
    E = s(652215),
    T = s(310235),
    v = s(334551),
    R = s(375708);
let I = {
    [C.XY]: {
        getModalTitle: () => R.intl.string(v.default["2I7nK+"]),
        getModalSubtitle: () =>
            R.intl.format(v.default.W8jOD0, { termsUrl: N.A.getArticleURL(E.MVz.LOGITECH_PROMOTION) }),
        landingUrl: "https://www.logitech.com/",
        outboundConfigs: {
            "Logitech G": {
                getTitle: () => R.intl.formatToPlainString(v.default.jkdhZq, { discountPercent: j.aW }),
                getBody: () => R.intl.formatToPlainString(v.default.mH30Yx, {}),
            },
            "Logitech 5%": {
                getTitle: () => R.intl.formatToPlainString(v.default.zeBjoX, { discountPercent: j.y$ }),
                getBody: () => R.intl.formatToPlainString(v.default.fC4abC, { months: 6 }),
            },
            "Logitech PRO Series Sim": {
                getTitle: () => R.intl.formatToPlainString(v.default.pSBCjv, { discountPercent: j.K2 }),
                getBody: () => R.intl.formatToPlainString(v.default.lsRjfl, {}),
            },
        },
    },
    [C.Bt]: {
        getModalTitle: () => R.intl.string(T.default.YJsqDS),
        getModalSubtitle: () =>
            R.intl.format(T.default.ieA3V0, {
                termsUrl: "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
            }),
        getModalTeaser: () => ({ title: R.intl.string(T.default.Dkm10r), body: R.intl.string(T.default.LHAkT9) }),
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            "CoD MW4 Beta": {
                getTitle: () => R.intl.string(T.default["6vVfeK"]),
                getBody: (e) => R.intl.formatToPlainString(T.default.nsmhS2, { date: (0, A.mh)(e.endDate) }),
                getAsset: (e, t) => (0, b.WD)(e.id, t),
                getClaimCtaText: () => R.intl.string(T.default["lbyFG+"]),
                getRedeemCtaText: () => R.intl.string(T.default["6rwUm2"]),
                claimButtonPlacement: h.u5.FOOTER,
            },
        },
    },
};
var _ = s(341973);
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
        { promotionsLoaded: j, claimedOutboundPromotionCodeMap: b } = (0, x.y7)();
    if (!j) return (0, i.jsx)(n.y, {});
    let C = m?.getModalSubtitle?.(),
        E = m?.getModalTitle() ?? t,
        T = m?.showSectionHeaders !== !1,
        S = T ? { recurring: R.intl.string(v.default["9Y2p6p"]), oneTime: R.intl.string(v.default.Wm58LR) } : void 0,
        y = m?.getModalTeaser?.(),
        D = (0, i.jsx)("div", {
            className: _.kR,
            children: A.map((e) => {
                let t = P(e, b[e.id] ?? null, g),
                    s = m?.outboundConfigs[e.outboundTitle];
                return (0, i.jsx)(
                    p,
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
        title: E,
        subtitle: C,
        actions: [],
        transitionState: s,
        onClose: o,
        children: (0, i.jsxs)("div", {
            className: _.kL,
            children: [
                N.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != S &&
                                (0, i.jsx)(l.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: S.recurring,
                                }),
                            (0, i.jsx)("div", {
                                className: _.kR,
                                children: N.map((e) => {
                                    var t;
                                    return (0, i.jsx)(
                                        h.wx,
                                        {
                                            recurrence:
                                                ((t = b[e.id] ?? null),
                                                { ...P(e, t, g), asset: (0, h.Cf)()[e.partnerId ?? ""]?.asset ?? "" }),
                                            showPartnerImage: !0,
                                            claimButtonPlacement: h.u5.FOOTER,
                                            footerContent: (0, i.jsx)(h.vw, {}),
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
                        ? (0, i.jsxs)("div", {
                              className: _.E7,
                              children: [
                                  null != S &&
                                      (0, i.jsx)(l.E, {
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
                        className: _.ar,
                        children: [
                            (0, i.jsxs)("div", {
                                className: _.Uv,
                                children: [
                                    (0, i.jsx)(r.t, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(l.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: y.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-muted", children: y.body }),
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
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(s.bind(s, 672787));
            return (s) => (0, i.jsx)(e, { ...s, partnerId: t });
        });
}
