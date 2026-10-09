(n.d(t, { P: () => eo, ThirdPartyPromotionsModal: () => el }), n(321073));
var i = n(477900),
    a = n(582128),
    r = n(17928),
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
    T = n(363195),
    C = n(174459),
    P = n(792656),
    _ = n(962644),
    h = n(35587),
    A = n(412260),
    E = n(852218),
    x = n(194261),
    v = n(297264),
    O = n(144165),
    R = n(341973);
function N(e) {
    let { title: t, body: n, asset: a } = e;
    return (0, i.jsx)("div", {
        className: R.lA,
        children: (0, i.jsxs)("div", {
            className: R.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: R.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: R.MC,
                            children: (0, i.jsx)(x.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: R.yO,
                            children: [
                                (0, i.jsx)(v.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(v.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: R.R4,
                        children: (0, i.jsx)(O._, {
                            src: a,
                            className: R.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: R.EM,
                        }),
                    }),
            ],
        }),
    });
}
var y = n(116011);
function I(e) {
    let { promotion: t, claimButtonPlacement: n = y.u5.INLINE, analyticsLocations: a } = e;
    return (0, i.jsx)(y.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: a,
    });
}
var S = n(325499),
    j = n(789861),
    L = n(398523),
    U = n(881373),
    M = n(264779),
    D = n(310235),
    w = n(334551),
    k = n(762359),
    B = n(429605),
    H = n(660183);
let Y =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    F =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    G =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    K =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function V(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function z() {
    return H.intl.formatToPlainString(H.t.p7BkHh, { discountPercentage: L.b });
}
function W() {
    return (0, S.i)("ThirdPartyPromotionPartnerConfigs") ? H.intl.string(H.t.nmvvaN) : H.intl.string(H.t.igiSKe);
}
let $ = {
    [E.KS]: {
        getLockedPreview: () => ({ title: z(), body: W(), asset: G }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: G,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: z, getBody: W, getBodyClaimed: () => H.t.w8CXUl },
        },
    },
    [E.XY]: {
        getLockedPreview: () => ({
            title: (0, S.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(w.default.PF1aT5, { discountPercentage: U.aW })
                : H.intl.formatToPlainString(w.default.LsJ9hj, { discountPercent: U.aW }),
            body: (0, S.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(w.default.KoKwMn, {})
                : H.intl.formatToPlainString(w.default.Yl5ww1, {}),
            asset: F,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: F,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => H.intl.formatToPlainString(w.default.jkdhZq, { discountPercent: U.aW }),
                    getBody: () => H.intl.formatToPlainString(w.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => H.intl.formatToPlainString(w.default.zeBjoX, { discountPercent: U.y$ }),
                    getBody: () => H.intl.formatToPlainString(w.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => H.intl.formatToPlainString(w.default.pSBCjv, { discountPercent: U.K2 }),
                    getBody: () => H.intl.formatToPlainString(w.default.lsRjfl, {}),
                },
            },
        },
    },
    [E.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(D.default["6vVfeK"]),
                getBody: (e) => H.intl.formatToPlainString(D.default.nsmhS2, { date: (0, j.mh)(e.endDate) }),
                getAsset: (e, t) => (0, M.WD)(e.id, t),
                getClaimCtaText: () => H.intl.string(D.default["lbyFG+"]),
                getRedeemCtaText: () => H.intl.string(D.default["6rwUm2"]),
                claimButtonPlacement: y.u5.FOOTER,
            },
        },
    },
    [E.NC]: {
        getLockedPreview: () => ({
            title: H.intl.string(k.default.CwMGMb),
            body: H.intl.string(k.default.TgHy6p),
            asset: K,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: K,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(k.default.CwMGMb),
                getBody: () => H.intl.string(k.default.TgHy6p),
                getRedeemCtaText: () => H.intl.string(k.default.KfOPbQ),
                claimButtonPlacement: y.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [E.P_]: {
        getLockedPreview: () => ({
            title: H.intl.string(B.default.ecPCdG),
            body: H.intl.string(B.default.evF0PO),
            asset: Y,
        }),
        oneTimeCardAsset: Y,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(B.default.ecPCdG),
                getBody: () => H.intl.string(B.default.evF0PO),
                claimButtonPlacement: y.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var X = n(553875);
function Z() {
    return (0, i.jsx)(N, {
        title: H.intl.string(X.default.oDfh3O),
        body: H.intl.string(X.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var J = n(202541),
    q = n(652215);
function Q(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function ee(e, t, n) {
    let i = $[e.partnerId ?? ""],
        a = V(i?.outboundConfigs, e.outboundTitle);
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
function et(e) {
    var t;
    let n,
        l,
        { records: o, claimedOutboundPromotionCodeMap: m, theme: f } = e,
        [g, p] = a.useState(!1),
        C = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        P = g ? C : C.slice(0, 1),
        _ = !g && C.length > 1,
        h =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, r.bG)([T.A], () => (0, s.M)(T.A.theme))),
            null == (l = $[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: P.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        y.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = $[e.partnerId ?? ""]),
                                (a = V(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...ee(e, t, f),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: a?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: h,
                            showPartnerImage: !0,
                            claimButtonPlacement: y.u5.FOOTER,
                            footerContent: (0, i.jsx)(y.vw, {}),
                            analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            _ &&
                (0, i.jsx)(c.D, {
                    className: R.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: H.intl.string(H.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function en(e) {
    let { partnerId: t } = e,
        n = $[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(N, { title: n.title, body: n.body, asset: n.asset });
}
function ei(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: a,
            modalTeaser: r,
            showXboxCard: l = !1,
            transitionState: s,
            onClose: c,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: f } = (0, h.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, i.jsx)(p.f5, {
              value: g,
              children: (0, i.jsxs)(o.a, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(P.A, {
                      subscriptionTier: J.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return _.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: s,
                  onClose: c,
                  children: [
                      (0, i.jsxs)(d.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)(Z, {}), t.map((e) => (0, i.jsx)(en, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(ea, { modalTeaser: r }),
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
        className: R.ar,
        children: [
            (0, i.jsxs)("div", {
                className: R.Uv,
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
function er(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: s, onClose: c } = e,
        f = (0, r.bG)([T.A], () => T.A.theme),
        [g, p] = (0, r.bG)(
            [A.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = $[t]?.outboundConfigs;
                        function a(e) {
                            return null != V(i, e.outboundTitle);
                        }
                        let r = A.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            Q,
        ),
        { promotionsLoaded: C, claimedOutboundPromotionCodeMap: P } = (0, h.y7)();
    if (!C) return (0, i.jsx)(m.y, {});
    let _ = t
            .map((e) => $[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        E = _ ? { recurring: H.intl.string(w.default["9Y2p6p"]), oneTime: H.intl.string(w.default.Wm58LR) } : void 0,
        x = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = ee(e, P[e.id] ?? null, f),
                    n = V($[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    I,
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
        subtitle: a,
        actions: [],
        transitionState: s,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: R.kL,
            children: [
                g.length > 0 &&
                    (0, i.jsxs)(d.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != E &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: E.recurring,
                                }),
                            (0, i.jsx)(et, { records: g, claimedOutboundPromotionCodeMap: P, theme: f }),
                        ],
                    }),
                p.length > 0 &&
                    (_
                        ? (0, i.jsx)("div", {
                              className: R.E7,
                              children: (0, i.jsxs)(d.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != E &&
                                          (0, i.jsx)(u.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: E.oneTime,
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
function el(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: a,
        subtitle: r,
        modalTeaser: l,
        showXboxCard: o,
        transitionState: s,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, i.jsx)(ei, {
              partnerIds: t,
              title: a,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: o,
              transitionState: s,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(er, { partnerIds: t, title: a, subtitle: r, modalTeaser: l, transitionState: s, onClose: d });
}
function eo(e) {
    let {
            partnerIds: t,
            isLocked: a = !1,
            title: r,
            subtitle: l,
            modalTeaser: o,
            showXboxCard: s,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = s ? [...t, "xbox"] : t;
    (C.default.track(q.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        _.Ay.fetchActivePromotions(),
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
                        modalTeaser: o,
                        showXboxCard: s,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
