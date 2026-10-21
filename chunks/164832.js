(n.d(t, { P: () => ed, ThirdPartyPromotionsModal: () => eo }), n(321073));
var i = n(477900),
    a = n(582128),
    r = n(17928),
    l = n(52133),
    s = n(189213),
    o = n(366010),
    d = n(331322),
    c = n(939249),
    u = n(834730),
    m = n(289873),
    f = n(403581),
    g = n(192308),
    b = n(793574),
    p = n(688810),
    A = n(363195),
    P = n(174459),
    E = n(792656),
    C = n(962644),
    T = n(35587),
    _ = n(412260),
    O = n(852218),
    R = n(194261),
    v = n(297264),
    h = n(144165),
    N = n(341973);
function x(e) {
    let { title: t, body: n, asset: a } = e;
    return (0, i.jsx)("div", {
        className: N.lA,
        children: (0, i.jsxs)("div", {
            className: N.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: N.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: N.MC,
                            children: (0, i.jsx)(R.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: N.yO,
                            children: [
                                (0, i.jsx)(v.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(v.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: N.R4,
                        children: (0, i.jsx)(h._, {
                            src: a,
                            className: N.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: N.EM,
                        }),
                    }),
            ],
        }),
    });
}
var I = n(116011);
function y(e) {
    let { promotion: t, claimButtonPlacement: n = I.u5.INLINE, analyticsLocations: a } = e;
    return (0, i.jsx)(I.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: a,
    });
}
var L = n(877624),
    M = n(325499),
    j = n(398523),
    U = n(881373),
    S = n(721157),
    D = n(712620),
    B = n(652215),
    k = n(310235),
    w = n(334551),
    H = n(762359),
    Y = n(973507),
    V = n(429605),
    G = n(105292);
let K =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    F =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    W =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    z =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function X(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function $() {
    return G.intl.formatToPlainString(G.t.p7BkHh, { discountPercentage: j.b });
}
function q() {
    return (0, M.i)("ThirdPartyPromotionPartnerConfigs") ? G.intl.string(G.t.nmvvaN) : G.intl.string(G.t.igiSKe);
}
let Q = {
    [O.KS]: {
        getLockedPreview: () => ({ title: $(), body: q(), asset: W }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: W,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: $, getBody: q, getBodyClaimed: () => G.t.w8CXUl },
        },
    },
    [O.XY]: {
        getLockedPreview: () => ({
            title: (0, M.i)("ThirdPartyPromotionPartnerConfigs")
                ? G.intl.formatToPlainString(w.default.PF1aT5, { discountPercentage: U.aW })
                : G.intl.formatToPlainString(w.default.LsJ9hj, { discountPercent: U.aW }),
            body: (0, M.i)("ThirdPartyPromotionPartnerConfigs")
                ? G.intl.formatToPlainString(w.default.KoKwMn, {})
                : G.intl.formatToPlainString(w.default.Yl5ww1, {}),
            asset: F,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: F,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => G.intl.formatToPlainString(w.default.jkdhZq, { discountPercent: U.aW }),
                    getBody: () => G.intl.formatToPlainString(w.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => G.intl.formatToPlainString(w.default.zeBjoX, { discountPercent: U.y$ }),
                    getBody: () => G.intl.formatToPlainString(w.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => G.intl.formatToPlainString(w.default.pSBCjv, { discountPercent: U.K2 }),
                    getBody: () => G.intl.formatToPlainString(w.default.lsRjfl, {}),
                },
            },
        },
    },
    [O.NC]: {
        getLockedPreview: () => ({
            title: G.intl.string(H.default.CwMGMb),
            body: G.intl.string(H.default.TgHy6p),
            asset: z,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: z,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => G.intl.string(H.default.CwMGMb),
                getBody: () => G.intl.string(H.default.TgHy6p),
                getRedeemCtaText: () => G.intl.string(H.default.KfOPbQ),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [O.P_]: {
        getLockedPreview: () => ({
            title: G.intl.string(V.default.ecPCdG),
            body: G.intl.string(V.default.evF0PO),
            asset: K,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => G.intl.string(V.default.ecPCdG),
                getAsset: () => K,
                getBody: () => G.intl.string(V.default.evF0PO),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [O.Bt]: {
        getLockedPreview: () => ({
            title: G.intl.string(Y.default.xDMrVa),
            body: G.intl.formatToPlainString(Y.default.LUOF3v, { date: D.AQ }),
            asset: (0, S.VO)(O.Bt, L.C.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, B.NJ8.DARK),
        }),
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => G.intl.string(Y.default.xDMrVa),
                getBody: () => G.intl.formatToPlainString(Y.default.LUOF3v, { date: D.AQ }),
                getAsset: (e, t) => (0, S.VO)(O.Bt, L.C.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, t),
                getClaimCtaText: () => G.intl.string(k.default["lbyFG+"]),
                getRedeemCtaText: () => G.intl.string(k.default["6rwUm2"]),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
    },
};
var J = n(553875);
function Z() {
    return (0, i.jsx)(x, {
        title: G.intl.string(J.default.oDfh3O),
        body: G.intl.string(J.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var ee = n(202541);
function et(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function en(e, t, n) {
    let i = Q[e.partnerId ?? ""],
        a = X(i?.outboundConfigs, e.outboundTitle);
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: a?.getTitle(e) ?? "",
        outboundTitle: e.outboundTitle,
        body: a?.getBody?.(e) ?? "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
        asset: a?.getAsset?.(e, n) ?? i?.oneTimeCardAsset,
        claimCtaText: a?.getClaimCtaText?.(),
        redeemCtaText: a?.getRedeemCtaText?.(),
    };
}
function ei(e) {
    var t;
    let n,
        l,
        { records: s, claimedOutboundPromotionCodeMap: m, theme: f } = e,
        [g, p] = a.useState(!1),
        P = [...s].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        E = g ? P : P.slice(0, 1),
        C = !g && P.length > 1,
        T =
            ((t = s[0]?.partnerId ?? ""),
            (n = (0, r.bG)([A.A], () => (0, o.M)(A.A.theme))),
            null == (l = Q[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: E.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        I.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = Q[e.partnerId ?? ""]),
                                (a = X(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...en(e, t, f),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: a?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: T,
                            showPartnerImage: !0,
                            claimButtonPlacement: I.u5.FOOTER,
                            footerContent: (0, i.jsx)(I.vw, {}),
                            analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            C &&
                (0, i.jsx)(c.D, {
                    className: N.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: G.intl.string(G.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ea(e) {
    let { partnerId: t } = e,
        n = Q[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(x, { title: n.title, body: n.body, asset: n.asset });
}
function er(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: a,
            modalTeaser: r,
            showXboxCard: l = !1,
            transitionState: o,
            onClose: c,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: f } = (0, T.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, i.jsx)(p.f5, {
              value: g,
              children: (0, i.jsxs)(s.a, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(E.A, {
                      subscriptionTier: ee.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return C.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: c,
                  children: [
                      (0, i.jsxs)(d.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)(Z, {}), t.map((e) => (0, i.jsx)(ea, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(el, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, i.jsx)(m.y, {});
}
function el(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? f.t;
    return (0, i.jsxs)("div", {
        className: N.ar,
        children: [
            (0, i.jsxs)("div", {
                className: N.Uv,
                children: [
                    (0, i.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(u.E, {
                        variant: t.titleVariant ?? "text-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function es(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: o, onClose: c } = e,
        f = (0, r.bG)([A.A], () => A.A.theme),
        [g, p] = (0, r.bG)(
            [_.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = Q[t]?.outboundConfigs;
                        function a(e) {
                            return null != X(i, e.outboundTitle);
                        }
                        let r = _.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            et,
        ),
        { promotionsLoaded: P, claimedOutboundPromotionCodeMap: E } = (0, T.y7)();
    if (!P) return (0, i.jsx)(m.y, {});
    let C = t
            .map((e) => Q[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        O = C ? { recurring: G.intl.string(w.default["9Y2p6p"]), oneTime: G.intl.string(w.default.Wm58LR) } : void 0,
        R = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = en(e, E[e.id] ?? null, f),
                    n = X(Q[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    y,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, i.jsx)(s.a, {
        title: n,
        subtitle: a,
        actions: [],
        transitionState: o,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: N.kL,
            children: [
                g.length > 0 &&
                    (0, i.jsxs)(d.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != O &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: O.recurring,
                                }),
                            (0, i.jsx)(ei, { records: g, claimedOutboundPromotionCodeMap: E, theme: f }),
                        ],
                    }),
                p.length > 0 &&
                    (C
                        ? (0, i.jsx)("div", {
                              className: N.E7,
                              children: (0, i.jsxs)(d.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != O &&
                                          (0, i.jsx)(u.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: O.oneTime,
                                          }),
                                      R,
                                  ],
                              }),
                          })
                        : R),
                (0, i.jsx)(el, { modalTeaser: l }),
            ],
        }),
    });
}
function eo(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: a,
        subtitle: r,
        modalTeaser: l,
        showXboxCard: s,
        transitionState: o,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, i.jsx)(er, {
              partnerIds: t,
              title: a,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: s,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(es, { partnerIds: t, title: a, subtitle: r, modalTeaser: l, transitionState: o, onClose: d });
}
function ed(e) {
    let {
            partnerIds: t,
            isLocked: a = !1,
            title: r,
            subtitle: l,
            modalTeaser: s,
            showXboxCard: o,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = o ? [...t, "xbox"] : t;
    (P.default.track(B.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        C.Ay.fetchActivePromotions(),
        (0, g.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 164832));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: a,
                        title: r,
                        subtitle: l,
                        modalTeaser: s,
                        showXboxCard: o,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
