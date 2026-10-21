(n.d(t, { P: () => es, ThirdPartyPromotionsModal: () => eo }), n(321073));
var i = n(477900),
    r = n(582128),
    a = n(17928),
    l = n(52133),
    o = n(189213),
    s = n(366010),
    d = n(331322),
    c = n(939249),
    u = n(834730),
    m = n(289873),
    f = n(403581),
    g = n(192308),
    b = n(793574),
    p = n(688810),
    P = n(363195),
    T = n(174459),
    _ = n(792656),
    E = n(962644),
    C = n(35587),
    A = n(412260),
    h = n(852218),
    x = n(194261),
    O = n(297264),
    R = n(144165),
    v = n(341973);
function N(e) {
    let { title: t, body: n, asset: r } = e;
    return (0, i.jsx)("div", {
        className: v.lA,
        children: (0, i.jsxs)("div", {
            className: v.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: v.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: v.MC,
                            children: (0, i.jsx)(x.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: v.yO,
                            children: [
                                (0, i.jsx)(O.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(O.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: v.R4,
                        children: (0, i.jsx)(R._, {
                            src: r,
                            className: v.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: v.EM,
                        }),
                    }),
            ],
        }),
    });
}
var I = n(116011);
function S(e) {
    let { promotion: t, claimButtonPlacement: n = I.u5.INLINE, analyticsLocations: r } = e;
    return (0, i.jsx)(I.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: r,
    });
}
var y = n(877624),
    j = n(325499),
    L = n(398523),
    M = n(881373),
    U = n(236233),
    D = n(310235),
    w = n(334551),
    B = n(762359),
    k = n(973507),
    H = n(429605),
    Y = n(105292);
let F =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    G =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    K =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    V =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function z(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function W() {
    return Y.intl.formatToPlainString(Y.t.p7BkHh, { discountPercentage: L.b });
}
function X() {
    return (0, j.i)("ThirdPartyPromotionPartnerConfigs") ? Y.intl.string(Y.t.nmvvaN) : Y.intl.string(Y.t.igiSKe);
}
let $ = {
    [h.KS]: {
        getLockedPreview: () => ({ title: W(), body: X(), asset: K }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: K,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: W, getBody: X, getBodyClaimed: () => Y.t.w8CXUl },
        },
    },
    [h.XY]: {
        getLockedPreview: () => ({
            title: (0, j.i)("ThirdPartyPromotionPartnerConfigs")
                ? Y.intl.formatToPlainString(w.default.PF1aT5, { discountPercentage: M.aW })
                : Y.intl.formatToPlainString(w.default.LsJ9hj, { discountPercent: M.aW }),
            body: (0, j.i)("ThirdPartyPromotionPartnerConfigs")
                ? Y.intl.formatToPlainString(w.default.KoKwMn, {})
                : Y.intl.formatToPlainString(w.default.Yl5ww1, {}),
            asset: G,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: G,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => Y.intl.formatToPlainString(w.default.jkdhZq, { discountPercent: M.aW }),
                    getBody: () => Y.intl.formatToPlainString(w.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => Y.intl.formatToPlainString(w.default.zeBjoX, { discountPercent: M.y$ }),
                    getBody: () => Y.intl.formatToPlainString(w.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => Y.intl.formatToPlainString(w.default.pSBCjv, { discountPercent: M.K2 }),
                    getBody: () => Y.intl.formatToPlainString(w.default.lsRjfl, {}),
                },
            },
        },
    },
    [h.NC]: {
        getLockedPreview: () => ({
            title: Y.intl.string(B.default.CwMGMb),
            body: Y.intl.string(B.default.TgHy6p),
            asset: V,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: V,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(B.default.CwMGMb),
                getBody: () => Y.intl.string(B.default.TgHy6p),
                getRedeemCtaText: () => Y.intl.string(B.default.KfOPbQ),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [h.P_]: {
        getLockedPreview: () => ({
            title: Y.intl.string(H.default.ecPCdG),
            body: Y.intl.string(H.default.evF0PO),
            asset: F,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(H.default.ecPCdG),
                getAsset: () => F,
                getBody: () => Y.intl.string(H.default.evF0PO),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [h.Bt]: {
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(k.default.xDMrVa),
                getBody: (e) => Y.intl.formatToPlainString(k.default.LUOF3v, { date: e.endDate }),
                getAsset: (e, t) => (0, U.VO)(h.Bt, y.C.PREMIUM_HOME_REWARDS_PERK_CARD, t),
                getClaimCtaText: () => Y.intl.string(D.default["lbyFG+"]),
                getRedeemCtaText: () => Y.intl.string(D.default["6rwUm2"]),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
    },
};
var J = n(553875);
function q() {
    return (0, i.jsx)(N, {
        title: Y.intl.string(J.default.oDfh3O),
        body: Y.intl.string(J.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var Q = n(202541),
    Z = n(652215);
function ee(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function et(e, t, n) {
    let i = $[e.partnerId ?? ""],
        r = z(i?.outboundConfigs, e.outboundTitle);
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: r?.getTitle(e) ?? "",
        outboundTitle: e.outboundTitle,
        body: r?.getBody?.(e) ?? "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
        asset: r?.getAsset?.(e, n) ?? i?.oneTimeCardAsset,
        claimCtaText: r?.getClaimCtaText?.(),
        redeemCtaText: r?.getRedeemCtaText?.(),
    };
}
function en(e) {
    var t;
    let n,
        l,
        { records: o, claimedOutboundPromotionCodeMap: m, theme: f } = e,
        [g, p] = r.useState(!1),
        T = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        _ = g ? T : T.slice(0, 1),
        E = !g && T.length > 1,
        C =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, a.bG)([P.A], () => (0, s.M)(P.A.theme))),
            null == (l = $[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: _.map((e) => {
                    var t;
                    let n, r;
                    return (0, i.jsx)(
                        I.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = $[e.partnerId ?? ""]),
                                (r = z(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...et(e, t, f),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: r?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: C,
                            showPartnerImage: !0,
                            claimButtonPlacement: I.u5.FOOTER,
                            footerContent: (0, i.jsx)(I.vw, {}),
                            analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            E &&
                (0, i.jsx)(c.D, {
                    className: v.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: Y.intl.string(Y.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ei(e) {
    let { partnerId: t } = e,
        n = $[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(N, { title: n.title, body: n.body, asset: n.asset });
}
function er(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: r,
            modalTeaser: a,
            showXboxCard: l = !1,
            transitionState: s,
            onClose: c,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: f } = (0, C.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, i.jsx)(p.f5, {
              value: g,
              children: (0, i.jsxs)(o.a, {
                  title: n,
                  subtitle: r,
                  actions: [],
                  preview: (0, i.jsx)(_.A, {
                      subscriptionTier: Q.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return E.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: s,
                  onClose: c,
                  children: [
                      (0, i.jsxs)(d.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)(q, {}), t.map((e) => (0, i.jsx)(ei, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(ea, { modalTeaser: a }),
                  ],
              }),
          })
        : (0, i.jsx)(m.y, {});
}
function ea(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? f.t;
    return (0, i.jsxs)("div", {
        className: v.ar,
        children: [
            (0, i.jsxs)("div", {
                className: v.Uv,
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
function el(e) {
    let { partnerIds: t, title: n, subtitle: r, modalTeaser: l, transitionState: s, onClose: c } = e,
        f = (0, a.bG)([P.A], () => P.A.theme),
        [g, p] = (0, a.bG)(
            [A.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = $[t]?.outboundConfigs;
                        function r(e) {
                            return null != z(i, e.outboundTitle);
                        }
                        let a = A.A.getPromotionsByPartner(t);
                        (e.push(...a.recurring.filter(r)), n.push(...a.oneTime.filter(r)));
                    }),
                    [e, n]
                );
            },
            [t],
            ee,
        ),
        { promotionsLoaded: T, claimedOutboundPromotionCodeMap: _ } = (0, C.y7)();
    if (!T) return (0, i.jsx)(m.y, {});
    let E = t
            .map((e) => $[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        h = E ? { recurring: Y.intl.string(w.default["9Y2p6p"]), oneTime: Y.intl.string(w.default.Wm58LR) } : void 0,
        x = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = et(e, _[e.id] ?? null, f),
                    n = z($[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    S,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, i.jsx)(o.a, {
        title: n,
        subtitle: r,
        actions: [],
        transitionState: s,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: v.kL,
            children: [
                g.length > 0 &&
                    (0, i.jsxs)(d.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != h &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: h.recurring,
                                }),
                            (0, i.jsx)(en, { records: g, claimedOutboundPromotionCodeMap: _, theme: f }),
                        ],
                    }),
                p.length > 0 &&
                    (E
                        ? (0, i.jsx)("div", {
                              className: v.E7,
                              children: (0, i.jsxs)(d.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != h &&
                                          (0, i.jsx)(u.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: h.oneTime,
                                          }),
                                      x,
                                  ],
                              }),
                          })
                        : x),
                (0, i.jsx)(ea, { modalTeaser: l }),
            ],
        }),
    });
}
function eo(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: r,
        subtitle: a,
        modalTeaser: l,
        showXboxCard: o,
        transitionState: s,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, i.jsx)(er, {
              partnerIds: t,
              title: r,
              subtitle: a,
              modalTeaser: l,
              showXboxCard: o,
              transitionState: s,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(el, { partnerIds: t, title: r, subtitle: a, modalTeaser: l, transitionState: s, onClose: d });
}
function es(e) {
    let {
            partnerIds: t,
            isLocked: r = !1,
            title: a,
            subtitle: l,
            modalTeaser: o,
            showXboxCard: s,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = s ? [...t, "xbox"] : t;
    (T.default.track(Z.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        E.Ay.fetchActivePromotions(),
        (0, g.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 164832));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: r,
                        title: a,
                        subtitle: l,
                        modalTeaser: o,
                        showXboxCard: s,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
