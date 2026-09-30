(n.d(t, { P: () => er, ThirdPartyPromotionsModal: () => el }), n(321073));
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(52133),
    a = n(189213),
    o = n(366010),
    c = n(331322),
    E = n(939249),
    u = n(834730),
    d = n(289873),
    _ = n(403581),
    A = n(192308),
    T = n(793574),
    I = n(688810),
    N = n(363195),
    R = n(174459),
    C = n(792656),
    O = n(962644),
    m = n(35587),
    S = n(412260),
    f = n(852218),
    p = n(194261),
    D = n(297264),
    g = n(144165),
    P = n(341973);
function h(e) {
    let { title: t, body: n, asset: l } = e;
    return (0, i.jsx)("div", {
        className: P.lA,
        children: (0, i.jsxs)("div", {
            className: P.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: P.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: P.MC,
                            children: (0, i.jsx)(p.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: P.yO,
                            children: [
                                (0, i.jsx)(D.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(D.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != l &&
                    (0, i.jsx)("div", {
                        className: P.R4,
                        children: (0, i.jsx)(g._, {
                            src: l,
                            className: P.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: P.EM,
                        }),
                    }),
            ],
        }),
    });
}
var M = n(116011);
function U(e) {
    let { promotion: t, claimButtonPlacement: n = M.u5.INLINE, analyticsLocations: l } = e;
    return (0, i.jsx)(M.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: l,
    });
}
var y = n(325499),
    L = n(789861),
    x = n(398523),
    k = n(881373),
    v = n(264779),
    j = n(14429),
    G = n(810889),
    b = n(264865),
    q = n(375708);
let B =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    X =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    w =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function F(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function H() {
    return q.intl.formatToPlainString(q.t.p7BkHh, { discountPercentage: x.b });
}
function V() {
    return (0, y.i)("ThirdPartyPromotionPartnerConfigs") ? q.intl.string(q.t.nmvvaN) : q.intl.string(q.t.igiSKe);
}
let K = {
    [f.KS]: {
        getLockedPreview: () => ({ title: H(), body: V(), asset: X }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: X,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: H, getBody: V, getBodyClaimed: () => q.t.w8CXUl },
        },
    },
    [f.XY]: {
        getLockedPreview: () => ({
            title: (0, y.i)("ThirdPartyPromotionPartnerConfigs")
                ? q.intl.formatToPlainString(G.default.PF1aT5, { discountPercentage: k.aW })
                : q.intl.formatToPlainString(G.default.LsJ9hj, { discountPercent: k.aW }),
            body: (0, y.i)("ThirdPartyPromotionPartnerConfigs")
                ? q.intl.formatToPlainString(G.default.KoKwMn, {})
                : q.intl.formatToPlainString(G.default.Yl5ww1, {}),
            asset: B,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: B,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => q.intl.formatToPlainString(G.default.jkdhZq, { discountPercent: k.aW }),
                    getBody: () => q.intl.formatToPlainString(G.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => q.intl.formatToPlainString(G.default.zeBjoX, { discountPercent: k.y$ }),
                    getBody: () => q.intl.formatToPlainString(G.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => q.intl.formatToPlainString(G.default.pSBCjv, { discountPercent: k.K2 }),
                    getBody: () => q.intl.formatToPlainString(G.default.lsRjfl, {}),
                },
            },
        },
    },
    [f.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => q.intl.string(j.default["6vVfeK"]),
                getBody: (e) => q.intl.formatToPlainString(j.default.nsmhS2, { date: (0, L.mh)(e.endDate) }),
                getAsset: (e, t) => (0, v.WD)(e.id, t),
                getClaimCtaText: () => q.intl.string(j.default["lbyFG+"]),
                getRedeemCtaText: () => q.intl.string(j.default["6rwUm2"]),
                claimButtonPlacement: M.u5.FOOTER,
            },
        },
    },
    [f.NC]: {
        getLockedPreview: () => ({
            title: q.intl.string(b.default.CwMGMb),
            body: q.intl.string(b.default.TgHy6p),
            asset: w,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: w,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => q.intl.string(b.default.CwMGMb),
                getBody: () => q.intl.string(b.default.TgHy6p),
                getRedeemCtaText: () => q.intl.string(b.default.KfOPbQ),
                claimButtonPlacement: M.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var Y = n(428685);
function W() {
    return (0, i.jsx)(h, {
        title: q.intl.string(Y.default.oDfh3O),
        body: q.intl.string(Y.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var Q = n(202541),
    Z = n(652215);
function z(e, t) {
    return (0, s.v)(e[0], t[0]) && (0, s.v)(e[1], t[1]);
}
function $(e, t, n) {
    let i = K[e.partnerId ?? ""],
        l = F(i?.outboundConfigs, e.outboundTitle);
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: l?.getTitle(e) ?? "",
        outboundTitle: e.outboundTitle,
        body: l?.getBody?.(e) ?? "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
        asset: l?.getAsset?.(e, n) ?? i?.oneTimeCardAsset,
        claimCtaText: l?.getClaimCtaText?.(),
        redeemCtaText: l?.getRedeemCtaText?.(),
    };
}
function J(e) {
    var t;
    let n,
        s,
        { records: a, claimedOutboundPromotionCodeMap: d, theme: _ } = e,
        [A, I] = l.useState(!1),
        R = [...a].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        C = A ? R : R.slice(0, 1),
        O = !A && R.length > 1,
        m =
            ((t = a[0]?.partnerId ?? ""),
            (n = (0, r.bG)([N.A], () => (0, o.M)(N.A.theme))),
            null == (s = K[t]?.logos) ? void 0 : n ? s.dark : s.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(c.B, {
                direction: "vertical",
                gap: 12,
                children: C.map((e) => {
                    var t;
                    let n, l;
                    return (0, i.jsx)(
                        M.wx,
                        {
                            recurrence:
                                ((t = d[e.id] ?? null),
                                (n = K[e.partnerId ?? ""]),
                                (l = F(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...$(e, t, _),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: l?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: m,
                            showPartnerImage: !0,
                            claimButtonPlacement: M.u5.FOOTER,
                            footerContent: (0, i.jsx)(M.vw, {}),
                            analyticsLocations: [T.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            O &&
                (0, i.jsx)(E.D, {
                    className: P.K8,
                    onClick: () => {
                        I(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: q.intl.string(q.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ee(e) {
    let { partnerId: t } = e,
        n = K[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(h, { title: n.title, body: n.body, asset: n.asset });
}
function et(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: l,
            modalTeaser: r,
            showXboxCard: s = !1,
            transitionState: o,
            onClose: E,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: _ } = (0, m.y7)(),
        { analyticsLocations: A } = (0, I.Ay)(u);
    return _
        ? (0, i.jsx)(I.f5, {
              value: A,
              children: (0, i.jsxs)(a.a, {
                  title: n,
                  subtitle: l,
                  actions: [],
                  preview: (0, i.jsx)(C.A, {
                      subscriptionTier: Q.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          E();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return O.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: E,
                  children: [
                      (0, i.jsxs)(c.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [s && (0, i.jsx)(W, {}), t.map((e) => (0, i.jsx)(ee, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(en, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, i.jsx)(d.y, {});
}
function en(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? _.t;
    return (0, i.jsxs)("div", {
        className: P.ar,
        children: [
            (0, i.jsxs)("div", {
                className: P.Uv,
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
    let { partnerIds: t, title: n, subtitle: l, modalTeaser: s, transitionState: o, onClose: E } = e,
        _ = (0, r.bG)([N.A], () => N.A.theme),
        [A, I] = (0, r.bG)(
            [S.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = K[t]?.outboundConfigs;
                        function l(e) {
                            return null != F(i, e.outboundTitle);
                        }
                        let r = S.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(l)), n.push(...r.oneTime.filter(l)));
                    }),
                    [e, n]
                );
            },
            [t],
            z,
        ),
        { promotionsLoaded: R, claimedOutboundPromotionCodeMap: C } = (0, m.y7)();
    if (!R) return (0, i.jsx)(d.y, {});
    let O = t
            .map((e) => K[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        f = O ? { recurring: q.intl.string(G.default["9Y2p6p"]), oneTime: q.intl.string(G.default.Wm58LR) } : void 0,
        p = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 12,
            children: I.map((e) => {
                let t = $(e, C[e.id] ?? null, _),
                    n = F(K[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    U,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [T.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, i.jsx)(a.a, {
        title: n,
        subtitle: l,
        actions: [],
        transitionState: o,
        onClose: E,
        children: (0, i.jsxs)("div", {
            className: P.kL,
            children: [
                A.length > 0 &&
                    (0, i.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != f &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: f.recurring,
                                }),
                            (0, i.jsx)(J, { records: A, claimedOutboundPromotionCodeMap: C, theme: _ }),
                        ],
                    }),
                I.length > 0 &&
                    (O
                        ? (0, i.jsx)("div", {
                              className: P.E7,
                              children: (0, i.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != f &&
                                          (0, i.jsx)(u.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: f.oneTime,
                                          }),
                                      p,
                                  ],
                              }),
                          })
                        : p),
                (0, i.jsx)(en, { modalTeaser: s }),
            ],
        }),
    });
}
function el(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: l,
        subtitle: r,
        modalTeaser: s,
        showXboxCard: a,
        transitionState: o,
        onClose: c,
        analyticsLocations: E,
    } = e;
    return n
        ? (0, i.jsx)(et, {
              partnerIds: t,
              title: l,
              subtitle: r,
              modalTeaser: s,
              showXboxCard: a,
              transitionState: o,
              onClose: c,
              analyticsLocationsProp: E,
          })
        : (0, i.jsx)(ei, { partnerIds: t, title: l, subtitle: r, modalTeaser: s, transitionState: o, onClose: c });
}
function er(e) {
    let {
            partnerIds: t,
            isLocked: l = !1,
            title: r,
            subtitle: s,
            modalTeaser: a,
            showXboxCard: o,
            analyticsLocations: c,
            onClose: E,
        } = e,
        u = o ? [...t, "xbox"] : t;
    (R.default.track(Z.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: c }),
        O.Ay.fetchActivePromotions(),
        (0, A.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 239016));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: l,
                        title: r,
                        subtitle: s,
                        modalTeaser: a,
                        showXboxCard: o,
                        analyticsLocations: c,
                    });
            },
            { onCloseCallback: E },
        ));
}
