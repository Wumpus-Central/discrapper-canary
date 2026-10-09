(n.d(t, { P: () => el, ThirdPartyPromotionsModal: () => er }), n(321073));
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
    g = n(403581),
    f = n(192308),
    b = n(793574),
    p = n(688810),
    C = n(363195),
    h = n(174459),
    T = n(792656),
    x = n(962644),
    P = n(35587),
    v = n(412260),
    y = n(852218),
    j = n(194261),
    E = n(297264),
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
                            children: (0, i.jsx)(j.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: R.yO,
                            children: [
                                (0, i.jsx)(E.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(E.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
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
var _ = n(116011);
function A(e) {
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
var I = n(325499),
    S = n(789861),
    L = n(398523),
    w = n(881373),
    D = n(264779),
    U = n(310235),
    M = n(334551),
    k = n(762359),
    B = n(429605),
    H = n(660183);
let Y =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    F =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    G =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function W(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function z() {
    return H.intl.formatToPlainString(H.t.p7BkHh, { discountPercentage: L.b });
}
function K() {
    return (0, I.i)("ThirdPartyPromotionPartnerConfigs") ? H.intl.string(H.t.nmvvaN) : H.intl.string(H.t.igiSKe);
}
let V = {
    [y.KS]: {
        getLockedPreview: () => ({ title: z(), body: K(), asset: F }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: F,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: z, getBody: K, getBodyClaimed: () => H.t.w8CXUl },
        },
    },
    [y.XY]: {
        getLockedPreview: () => ({
            title: (0, I.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(M.default.PF1aT5, { discountPercentage: w.aW })
                : H.intl.formatToPlainString(M.default.LsJ9hj, { discountPercent: w.aW }),
            body: (0, I.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(M.default.KoKwMn, {})
                : H.intl.formatToPlainString(M.default.Yl5ww1, {}),
            asset: Y,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: Y,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => H.intl.formatToPlainString(M.default.jkdhZq, { discountPercent: w.aW }),
                    getBody: () => H.intl.formatToPlainString(M.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => H.intl.formatToPlainString(M.default.zeBjoX, { discountPercent: w.y$ }),
                    getBody: () => H.intl.formatToPlainString(M.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => H.intl.formatToPlainString(M.default.pSBCjv, { discountPercent: w.K2 }),
                    getBody: () => H.intl.formatToPlainString(M.default.lsRjfl, {}),
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
                getTitle: () => H.intl.string(U.default["6vVfeK"]),
                getBody: (e) => H.intl.formatToPlainString(U.default.nsmhS2, { date: (0, S.mh)(e.endDate) }),
                getAsset: (e, t) => (0, D.WD)(e.id, t),
                getClaimCtaText: () => H.intl.string(U.default["lbyFG+"]),
                getRedeemCtaText: () => H.intl.string(U.default["6rwUm2"]),
                claimButtonPlacement: _.u5.FOOTER,
            },
        },
    },
    [y.NC]: {
        getLockedPreview: () => ({
            title: H.intl.string(k.default.CwMGMb),
            body: H.intl.string(k.default.TgHy6p),
            asset: G,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: G,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(k.default.CwMGMb),
                getBody: () => H.intl.string(k.default.TgHy6p),
                getRedeemCtaText: () => H.intl.string(k.default.KfOPbQ),
                claimButtonPlacement: _.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [y.Bc]: {
        getLockedPreview: () => ({
            title: H.intl.string(B.default.ecPCdG),
            body: H.intl.string(B.default.evF0PO),
            asset: "",
        }),
        landingUrl: "",
        oneTimeCardAsset: "",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(B.default.ecPCdG),
                getBody: () => H.intl.string(B.default.evF0PO),
                claimButtonPlacement: _.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var $ = n(553875);
function X() {
    return (0, i.jsx)(N, {
        title: H.intl.string($.default.oDfh3O),
        body: H.intl.string($.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var Z = n(202541),
    J = n(652215);
function q(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function Q(e, t, n) {
    let i = V[e.partnerId ?? ""],
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
function ee(e) {
    var t;
    let n,
        l,
        { records: o, claimedOutboundPromotionCodeMap: m, theme: g } = e,
        [f, p] = a.useState(!1),
        h = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        T = f ? h : h.slice(0, 1),
        x = !f && h.length > 1,
        P =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, r.bG)([C.A], () => (0, s.M)(C.A.theme))),
            null == (l = V[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: T.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        _.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = V[e.partnerId ?? ""]),
                                (a = W(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...Q(e, t, g),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: a?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: P,
                            showPartnerImage: !0,
                            claimButtonPlacement: _.u5.FOOTER,
                            footerContent: (0, i.jsx)(_.vw, {}),
                            analyticsLocations: [b.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            x &&
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
function et(e) {
    let { partnerId: t } = e,
        n = V[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(N, { title: n.title, body: n.body, asset: n.asset });
}
function en(e) {
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
        { promotionsLoaded: g } = (0, P.y7)(),
        { analyticsLocations: f } = (0, p.Ay)(u);
    return g
        ? (0, i.jsx)(p.f5, {
              value: f,
              children: (0, i.jsxs)(o.a, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(T.A, {
                      subscriptionTier: Z.pe.TIER_2,
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
                          children: [l && (0, i.jsx)(X, {}), t.map((e) => (0, i.jsx)(et, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(ei, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, i.jsx)(m.y, {});
}
function ei(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? g.t;
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
function ea(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: s, onClose: c } = e,
        g = (0, r.bG)([C.A], () => C.A.theme),
        [f, p] = (0, r.bG)(
            [v.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = V[t]?.outboundConfigs;
                        function a(e) {
                            return null != W(i, e.outboundTitle);
                        }
                        let r = v.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            q,
        ),
        { promotionsLoaded: h, claimedOutboundPromotionCodeMap: T } = (0, P.y7)();
    if (!h) return (0, i.jsx)(m.y, {});
    let x = t
            .map((e) => V[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        y = x ? { recurring: H.intl.string(M.default["9Y2p6p"]), oneTime: H.intl.string(M.default.Wm58LR) } : void 0,
        j = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = Q(e, T[e.id] ?? null, g),
                    n = W(V[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    A,
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
                f.length > 0 &&
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
                            (0, i.jsx)(ee, { records: f, claimedOutboundPromotionCodeMap: T, theme: g }),
                        ],
                    }),
                p.length > 0 &&
                    (x
                        ? (0, i.jsx)("div", {
                              className: R.E7,
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
                                      j,
                                  ],
                              }),
                          })
                        : j),
                (0, i.jsx)(ei, { modalTeaser: l }),
            ],
        }),
    });
}
function er(e) {
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
        ? (0, i.jsx)(en, {
              partnerIds: t,
              title: a,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: o,
              transitionState: s,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(ea, { partnerIds: t, title: a, subtitle: r, modalTeaser: l, transitionState: s, onClose: d });
}
function el(e) {
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
    (h.default.track(J.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        x.Ay.fetchActivePromotions(),
        (0, f.openModalLazy)(
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
