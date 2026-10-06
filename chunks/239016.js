(n.d(t, { P: () => er, ThirdPartyPromotionsModal: () => ea }), n(321073));
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
    C = n(363195),
    h = n(174459),
    T = n(792656),
    x = n(962644),
    v = n(35587),
    P = n(412260),
    j = n(852218),
    y = n(194261),
    R = n(297264),
    E = n(144165),
    O = n(341973);
function _(e) {
    let { title: t, body: n, asset: a } = e;
    return (0, i.jsx)("div", {
        className: O.lA,
        children: (0, i.jsxs)("div", {
            className: O.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: O.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.MC,
                            children: (0, i.jsx)(y.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: O.yO,
                            children: [
                                (0, i.jsx)(R.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(R.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: O.R4,
                        children: (0, i.jsx)(E._, {
                            src: a,
                            className: O.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: O.EM,
                        }),
                    }),
            ],
        }),
    });
}
var I = n(116011);
function N(e) {
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
var A = n(325499),
    L = n(789861),
    S = n(398523),
    w = n(881373),
    D = n(264779),
    U = n(310235),
    M = n(334551),
    k = n(762359),
    B = n(375708);
let Y =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    H =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    F =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function G(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function z() {
    return B.intl.formatToPlainString(B.t.p7BkHh, { discountPercentage: S.b });
}
function K() {
    return (0, A.i)("ThirdPartyPromotionPartnerConfigs") ? B.intl.string(B.t.nmvvaN) : B.intl.string(B.t.igiSKe);
}
let W = {
    [j.KS]: {
        getLockedPreview: () => ({ title: z(), body: K(), asset: H }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: H,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: z, getBody: K, getBodyClaimed: () => B.t.w8CXUl },
        },
    },
    [j.XY]: {
        getLockedPreview: () => ({
            title: (0, A.i)("ThirdPartyPromotionPartnerConfigs")
                ? B.intl.formatToPlainString(M.default.PF1aT5, { discountPercentage: w.aW })
                : B.intl.formatToPlainString(M.default.LsJ9hj, { discountPercent: w.aW }),
            body: (0, A.i)("ThirdPartyPromotionPartnerConfigs")
                ? B.intl.formatToPlainString(M.default.KoKwMn, {})
                : B.intl.formatToPlainString(M.default.Yl5ww1, {}),
            asset: Y,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: Y,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => B.intl.formatToPlainString(M.default.jkdhZq, { discountPercent: w.aW }),
                    getBody: () => B.intl.formatToPlainString(M.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => B.intl.formatToPlainString(M.default.zeBjoX, { discountPercent: w.y$ }),
                    getBody: () => B.intl.formatToPlainString(M.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => B.intl.formatToPlainString(M.default.pSBCjv, { discountPercent: w.K2 }),
                    getBody: () => B.intl.formatToPlainString(M.default.lsRjfl, {}),
                },
            },
        },
    },
    [j.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => B.intl.string(U.default["6vVfeK"]),
                getBody: (e) => B.intl.formatToPlainString(U.default.nsmhS2, { date: (0, L.mh)(e.endDate) }),
                getAsset: (e, t) => (0, D.WD)(e.id, t),
                getClaimCtaText: () => B.intl.string(U.default["lbyFG+"]),
                getRedeemCtaText: () => B.intl.string(U.default["6rwUm2"]),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
    },
    [j.NC]: {
        getLockedPreview: () => ({
            title: B.intl.string(k.default.CwMGMb),
            body: B.intl.string(k.default.TgHy6p),
            asset: F,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: F,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => B.intl.string(k.default.CwMGMb),
                getBody: () => B.intl.string(k.default.TgHy6p),
                getRedeemCtaText: () => B.intl.string(k.default.KfOPbQ),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var V = n(553875);
function $() {
    return (0, i.jsx)(_, {
        title: B.intl.string(V.default.oDfh3O),
        body: B.intl.string(V.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var X = n(202541),
    Z = n(652215);
function J(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function q(e, t, n) {
    let i = W[e.partnerId ?? ""],
        a = G(i?.outboundConfigs, e.outboundTitle);
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
function Q(e) {
    var t;
    let n,
        l,
        { records: o, claimedOutboundPromotionCodeMap: m, theme: f } = e,
        [g, p] = a.useState(!1),
        h = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        T = g ? h : h.slice(0, 1),
        x = !g && h.length > 1,
        v =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, r.bG)([C.A], () => (0, s.M)(C.A.theme))),
            null == (l = W[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: T.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        I.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = W[e.partnerId ?? ""]),
                                (a = G(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...q(e, t, f),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: a?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: v,
                            showPartnerImage: !0,
                            claimButtonPlacement: I.u5.FOOTER,
                            footerContent: (0, i.jsx)(I.vw, {}),
                            analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            x &&
                (0, i.jsx)(c.D, {
                    className: O.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: B.intl.string(B.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ee(e) {
    let { partnerId: t } = e,
        n = W[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(_, { title: n.title, body: n.body, asset: n.asset });
}
function et(e) {
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
        { promotionsLoaded: f } = (0, v.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, i.jsx)(p.f5, {
              value: g,
              children: (0, i.jsxs)(o.a, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(T.A, {
                      subscriptionTier: X.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return x.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: s,
                  onClose: c,
                  children: [
                      (0, i.jsxs)(d.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)($, {}), t.map((e) => (0, i.jsx)(ee, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(en, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, i.jsx)(m.y, {});
}
function en(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? f.t;
    return (0, i.jsxs)("div", {
        className: O.ar,
        children: [
            (0, i.jsxs)("div", {
                className: O.Uv,
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
function ei(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: s, onClose: c } = e,
        f = (0, r.bG)([C.A], () => C.A.theme),
        [g, p] = (0, r.bG)(
            [P.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = W[t]?.outboundConfigs;
                        function a(e) {
                            return null != G(i, e.outboundTitle);
                        }
                        let r = P.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            J,
        ),
        { promotionsLoaded: h, claimedOutboundPromotionCodeMap: T } = (0, v.y7)();
    if (!h) return (0, i.jsx)(m.y, {});
    let x = t
            .map((e) => W[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        j = x ? { recurring: B.intl.string(M.default["9Y2p6p"]), oneTime: B.intl.string(M.default.Wm58LR) } : void 0,
        y = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = q(e, T[e.id] ?? null, f),
                    n = G(W[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    N,
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
            className: O.kL,
            children: [
                g.length > 0 &&
                    (0, i.jsxs)(d.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != j &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: j.recurring,
                                }),
                            (0, i.jsx)(Q, { records: g, claimedOutboundPromotionCodeMap: T, theme: f }),
                        ],
                    }),
                p.length > 0 &&
                    (x
                        ? (0, i.jsx)("div", {
                              className: O.E7,
                              children: (0, i.jsxs)(d.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != j &&
                                          (0, i.jsx)(u.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: j.oneTime,
                                          }),
                                      y,
                                  ],
                              }),
                          })
                        : y),
                (0, i.jsx)(en, { modalTeaser: l }),
            ],
        }),
    });
}
function ea(e) {
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
        ? (0, i.jsx)(et, {
              partnerIds: t,
              title: a,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: o,
              transitionState: s,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(ei, { partnerIds: t, title: a, subtitle: r, modalTeaser: l, transitionState: s, onClose: d });
}
function er(e) {
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
    (h.default.track(Z.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        x.Ay.fetchActivePromotions(),
        (0, g.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 239016));
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
