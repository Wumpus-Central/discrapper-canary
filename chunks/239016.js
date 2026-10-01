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
    h = n(363195),
    x = n(174459),
    C = n(792656),
    T = n(962644),
    v = n(35587),
    j = n(412260),
    y = n(852218),
    P = n(194261),
    R = n(297264),
    O = n(144165),
    N = n(341973);
function A(e) {
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
                            children: (0, i.jsx)(P.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: N.yO,
                            children: [
                                (0, i.jsx)(R.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(R.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: N.R4,
                        children: (0, i.jsx)(O._, {
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
var _ = n(116011);
function E(e) {
    let { promotion: t, claimButtonPlacement: n = _.u5.INLINE, analyticsLocations: a } = e;
    return (0, i.jsx)(_.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: a,
    });
}
var L = n(325499),
    I = n(789861),
    w = n(398523),
    S = n(881373),
    D = n(264779),
    k = n(310235),
    U = n(334551),
    B = n(762359),
    M = n(375708);
let Y =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    H =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    z =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function F(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function G() {
    return M.intl.formatToPlainString(M.t.p7BkHh, { discountPercentage: w.b });
}
function K() {
    return (0, L.i)("ThirdPartyPromotionPartnerConfigs") ? M.intl.string(M.t.nmvvaN) : M.intl.string(M.t.igiSKe);
}
let V = {
    [y.KS]: {
        getLockedPreview: () => ({ title: G(), body: K(), asset: H }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: H,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: G, getBody: K, getBodyClaimed: () => M.t.w8CXUl },
        },
    },
    [y.XY]: {
        getLockedPreview: () => ({
            title: (0, L.i)("ThirdPartyPromotionPartnerConfigs")
                ? M.intl.formatToPlainString(U.default.PF1aT5, { discountPercentage: S.aW })
                : M.intl.formatToPlainString(U.default.LsJ9hj, { discountPercent: S.aW }),
            body: (0, L.i)("ThirdPartyPromotionPartnerConfigs")
                ? M.intl.formatToPlainString(U.default.KoKwMn, {})
                : M.intl.formatToPlainString(U.default.Yl5ww1, {}),
            asset: Y,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: Y,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => M.intl.formatToPlainString(U.default.jkdhZq, { discountPercent: S.aW }),
                    getBody: () => M.intl.formatToPlainString(U.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => M.intl.formatToPlainString(U.default.zeBjoX, { discountPercent: S.y$ }),
                    getBody: () => M.intl.formatToPlainString(U.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => M.intl.formatToPlainString(U.default.pSBCjv, { discountPercent: S.K2 }),
                    getBody: () => M.intl.formatToPlainString(U.default.lsRjfl, {}),
                },
            },
        },
    },
    [y.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => M.intl.string(k.default["6vVfeK"]),
                getBody: (e) => M.intl.formatToPlainString(k.default.nsmhS2, { date: (0, I.mh)(e.endDate) }),
                getAsset: (e, t) => (0, D.WD)(e.id, t),
                getClaimCtaText: () => M.intl.string(k.default["lbyFG+"]),
                getRedeemCtaText: () => M.intl.string(k.default["6rwUm2"]),
                claimButtonPlacement: _.u5.FOOTER,
            },
        },
    },
    [y.NC]: {
        getLockedPreview: () => ({
            title: M.intl.string(B.default.CwMGMb),
            body: M.intl.string(B.default.TgHy6p),
            asset: z,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: z,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => M.intl.string(B.default.CwMGMb),
                getBody: () => M.intl.string(B.default.TgHy6p),
                getRedeemCtaText: () => M.intl.string(B.default.KfOPbQ),
                claimButtonPlacement: _.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var W = n(553875);
function $() {
    return (0, i.jsx)(A, {
        title: M.intl.string(W.default.oDfh3O),
        body: M.intl.string(W.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var X = n(202541),
    Z = n(652215);
function J(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function q(e, t, n) {
    let i = V[e.partnerId ?? ""],
        a = F(i?.outboundConfigs, e.outboundTitle);
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
        x = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        C = g ? x : x.slice(0, 1),
        T = !g && x.length > 1,
        v =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, r.bG)([h.A], () => (0, s.M)(h.A.theme))),
            null == (l = V[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: C.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        _.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = V[e.partnerId ?? ""]),
                                (a = F(n?.outboundConfigs, e.outboundTitle)),
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
                            claimButtonPlacement: _.u5.FOOTER,
                            footerContent: (0, i.jsx)(_.vw, {}),
                            analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            T &&
                (0, i.jsx)(c.D, {
                    className: N.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: M.intl.string(M.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ee(e) {
    let { partnerId: t } = e,
        n = V[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(A, { title: n.title, body: n.body, asset: n.asset });
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
                  preview: (0, i.jsx)(C.A, {
                      subscriptionTier: X.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return T.Ay.fetchActivePromotions();
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
function ei(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: s, onClose: c } = e,
        f = (0, r.bG)([h.A], () => h.A.theme),
        [g, p] = (0, r.bG)(
            [j.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = V[t]?.outboundConfigs;
                        function a(e) {
                            return null != F(i, e.outboundTitle);
                        }
                        let r = j.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            J,
        ),
        { promotionsLoaded: x, claimedOutboundPromotionCodeMap: C } = (0, v.y7)();
    if (!x) return (0, i.jsx)(m.y, {});
    let T = t
            .map((e) => V[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        y = T ? { recurring: M.intl.string(U.default["9Y2p6p"]), oneTime: M.intl.string(U.default.Wm58LR) } : void 0,
        P = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = q(e, C[e.id] ?? null, f),
                    n = F(V[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    E,
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
                            null != y &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: y.recurring,
                                }),
                            (0, i.jsx)(Q, { records: g, claimedOutboundPromotionCodeMap: C, theme: f }),
                        ],
                    }),
                p.length > 0 &&
                    (T
                        ? (0, i.jsx)("div", {
                              className: N.E7,
                              children: (0, i.jsxs)(d.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != y &&
                                          (0, i.jsx)(u.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: y.oneTime,
                                          }),
                                      P,
                                  ],
                              }),
                          })
                        : P),
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
    (x.default.track(Z.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        T.Ay.fetchActivePromotions(),
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
