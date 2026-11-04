(n.d(t, { ThirdPartyPromotionsModal: () => el, P: () => eo }), n(321073));
var i = n(477900),
    a = n(582128),
    r = n(855986),
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
    A = n(413599),
    P = n(129230),
    E = n(792656),
    C = n(158476),
    T = n(35587),
    _ = n(412260),
    O = n(852218),
    R = n(194261),
    h = n(534514),
    v = n(251843),
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
                                (0, i.jsx)(h.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(h.D, { variant: "heading-xs/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: N.R4,
                        children: (0, i.jsx)(v._, {
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
    M = n(325499);
(n(398523), n(881373));
var j = n(721157),
    S = n(712620),
    U = n(652215),
    D = n(749962),
    B = n(691450),
    k = n(524698),
    w = n(770300),
    H = n(855e3),
    Y = n(792996);
let V =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    G =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    K =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    F =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function W(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function z() {
    return Y.intl.formatToPlainString(Y.t.p7BkHh, { discountPercentage: 20 });
}
function X() {
    return (0, M.i)("ThirdPartyPromotionPartnerConfigs") ? Y.intl.string(Y.t.nmvvaN) : Y.intl.string(Y.t.igiSKe);
}
let q = {
    [O.KS]: {
        getLockedPreview: () => ({ title: z(), body: X(), asset: K }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: K,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: z, getBody: X, getBodyClaimed: () => Y.t.w8CXUl },
        },
    },
    [O.XY]: {
        getLockedPreview: () => ({
            title: (0, M.i)("ThirdPartyPromotionPartnerConfigs")
                ? Y.intl.formatToPlainString(B.default.PF1aT5, { discountPercentage: 30 })
                : Y.intl.formatToPlainString(B.default.LsJ9hj, { discountPercent: 30 }),
            body: (0, M.i)("ThirdPartyPromotionPartnerConfigs")
                ? Y.intl.formatToPlainString(B.default.KoKwMn, {})
                : Y.intl.formatToPlainString(B.default.Yl5ww1, {}),
            asset: G,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: G,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => Y.intl.formatToPlainString(B.default.jkdhZq, { discountPercent: 30 }),
                    getBody: () => Y.intl.formatToPlainString(B.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => Y.intl.formatToPlainString(B.default.zeBjoX, { discountPercent: 5 }),
                    getBody: () => Y.intl.formatToPlainString(B.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => Y.intl.formatToPlainString(B.default.pSBCjv, { discountPercent: 5 }),
                    getBody: () => Y.intl.formatToPlainString(B.default.lsRjfl, {}),
                },
            },
        },
    },
    [O.NC]: {
        getLockedPreview: () => ({
            title: Y.intl.string(k.default.CwMGMb),
            body: Y.intl.string(k.default.TgHy6p),
            asset: F,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: F,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(k.default.CwMGMb),
                getBody: () => Y.intl.string(k.default.TgHy6p),
                getRedeemCtaText: () => Y.intl.string(k.default.KfOPbQ),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [O.P_]: {
        getLockedPreview: () => ({
            title: Y.intl.string(H.default.ecPCdG),
            body: Y.intl.string(H.default.evF0PO),
            asset: V,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(H.default.ecPCdG),
                getAsset: () => V,
                getBody: () => Y.intl.string(H.default.evF0PO),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [O.Bt]: {
        getLockedPreview: () => ({
            title: Y.intl.string(w.default.xDMrVa),
            body: Y.intl.formatToPlainString(w.default.LUOF3v, { date: S.AQ }),
            asset: (0, j.VO)(O.Bt, L.C.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, U.NJ8.DARK),
        }),
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(w.default.xDMrVa),
                getBody: () => Y.intl.formatToPlainString(w.default.LUOF3v, { date: S.AQ }),
                getAsset: (e, t) => (0, j.VO)(O.Bt, L.C.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, t),
                getClaimCtaText: () => Y.intl.string(D.default["lbyFG+"]),
                getRedeemCtaText: () => Y.intl.string(D.default["6rwUm2"]),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
    },
};
var $ = n(831768);
function J() {
    return (0, i.jsx)(x, {
        title: Y.intl.string($.default.oDfh3O),
        body: Y.intl.string($.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var Q = n(682901);
function Z(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function ee(e, t, n) {
    let i = q[e.partnerId ?? ""],
        a = W(i?.outboundConfigs, e.outboundTitle);
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
        P = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        E = g ? P : P.slice(0, 1),
        C = !g && P.length > 1,
        T =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, r.bG)([A.A], () => (0, s.M)(A.A.theme))),
            null == (l = q[t]?.logos) ? void 0 : n ? l.dark : l.light);
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
                                (n = q[e.partnerId ?? ""]),
                                (a = W(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...ee(e, t, f),
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
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: Y.intl.string(Y.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function en(e) {
    let { partnerId: t } = e,
        n = q[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(x, { title: n.title, body: n.body, asset: n.asset });
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
        { promotionsLoaded: f } = (0, T.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, i.jsx)(p.f5, {
              value: g,
              children: (0, i.jsxs)(o.a, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(E.A, {
                      subscriptionTier: Q.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return C.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: s,
                  onClose: c,
                  children: [
                      (0, i.jsxs)(d.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)(J, {}), t.map((e) => (0, i.jsx)(en, { partnerId: e }, e))],
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
        className: N.ar,
        children: [
            (0, i.jsxs)("div", {
                className: N.Uv,
                children: [
                    (0, i.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(u.E, {
                        variant: t.titleVariant ?? "body-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, i.jsx)(u.E, { variant: "body-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function er(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: s, onClose: c } = e,
        f = (0, r.bG)([A.A], () => A.A.theme),
        [g, p] = (0, r.bG)(
            [_.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = q[t]?.outboundConfigs;
                        function a(e) {
                            return null != W(i, e.outboundTitle);
                        }
                        let r = _.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            Z,
        ),
        { promotionsLoaded: P, claimedOutboundPromotionCodeMap: E } = (0, T.y7)();
    if (!P) return (0, i.jsx)(m.y, {});
    let C = t
            .map((e) => q[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        O = C ? { recurring: Y.intl.string(B.default["9Y2p6p"]), oneTime: Y.intl.string(B.default.Wm58LR) } : void 0,
        R = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = ee(e, E[e.id] ?? null, f),
                    n = W(q[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
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
    return (0, i.jsx)(o.a, {
        title: n,
        subtitle: a,
        actions: [],
        transitionState: s,
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
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    children: O.recurring,
                                }),
                            (0, i.jsx)(et, { records: g, claimedOutboundPromotionCodeMap: E, theme: f }),
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
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: O.oneTime,
                                          }),
                                      R,
                                  ],
                              }),
                          })
                        : R),
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
    (P.default.track(U.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        C.Ay.fetchActivePromotions(),
        (0, g.mM)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 452417));
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
