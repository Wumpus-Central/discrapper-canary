(n.d(t, { P: () => er, ThirdPartyPromotionsModal: () => ea }), n(321073));
var i = n(477900),
    a = n(582128),
    r = n(366010),
    s = n(331322),
    l = n(939249),
    o = n(834730),
    d = n(289873),
    c = n(189213),
    u = n(403581),
    m = n(17928),
    p = n(52133),
    b = n(192308),
    f = n(793574),
    g = n(688810),
    h = n(363195),
    x = n(174459),
    v = n(792656),
    _ = n(962644),
    C = n(35587),
    P = n(412260),
    T = n(852218),
    R = n(194261),
    A = n(297264),
    y = n(144165),
    E = n(341973);
function N(e) {
    let { title: t, body: n, asset: a } = e;
    return (0, i.jsx)("div", {
        className: E.lA,
        children: (0, i.jsxs)("div", {
            className: E.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: E.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: E.MC,
                            children: (0, i.jsx)(R.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: E.yO,
                            children: [
                                (0, i.jsx)(A.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(A.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: E.R4,
                        children: (0, i.jsx)(y._, {
                            src: a,
                            className: E.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: E.EM,
                        }),
                    }),
            ],
        }),
    });
}
var j = n(116011);
function I(e) {
    let { promotion: t, claimButtonPlacement: n = j.u5.INLINE, analyticsLocations: a } = e;
    return (0, i.jsx)(j.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: a,
    });
}
var O = n(325499),
    L = n(789861),
    U = n(398523),
    S = n(881373),
    M = n(264779),
    w = n(310235),
    D = n(334551),
    k = n(762359),
    B = n(375708);
let Y =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    G =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    V =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function H(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function z() {
    return B.intl.formatToPlainString(B.t.p7BkHh, { discountPercentage: U.b });
}
function F() {
    return (0, O.i)("ThirdPartyPromotionPartnerConfigs") ? B.intl.string(B.t.nmvvaN) : B.intl.string(B.t.igiSKe);
}
let K = {
    [T.KS]: {
        getLockedPreview: () => ({ title: z(), body: F(), asset: G }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: G,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: z, getBody: F, getBodyClaimed: () => B.t.w8CXUl },
        },
    },
    [T.XY]: {
        getLockedPreview: () => ({
            title: (0, O.i)("ThirdPartyPromotionPartnerConfigs")
                ? B.intl.formatToPlainString(D.default.PF1aT5, { discountPercentage: S.aW })
                : B.intl.formatToPlainString(D.default.LsJ9hj, { discountPercent: S.aW }),
            body: (0, O.i)("ThirdPartyPromotionPartnerConfigs")
                ? B.intl.formatToPlainString(D.default.KoKwMn, {})
                : B.intl.formatToPlainString(D.default.Yl5ww1, {}),
            asset: Y,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: Y,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => B.intl.formatToPlainString(D.default.jkdhZq, { discountPercent: S.aW }),
                    getBody: () => B.intl.formatToPlainString(D.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => B.intl.formatToPlainString(D.default.zeBjoX, { discountPercent: S.y$ }),
                    getBody: () => B.intl.formatToPlainString(D.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => B.intl.formatToPlainString(D.default.pSBCjv, { discountPercent: S.K2 }),
                    getBody: () => B.intl.formatToPlainString(D.default.lsRjfl, {}),
                },
            },
        },
    },
    [T.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => B.intl.string(w.default["6vVfeK"]),
                getBody: (e) => B.intl.formatToPlainString(w.default.nsmhS2, { date: (0, L.mh)(e.endDate) }),
                getAsset: (e, t) => (0, M.WD)(e.id, t),
                getClaimCtaText: () => B.intl.string(w.default["lbyFG+"]),
                getRedeemCtaText: () => B.intl.string(w.default["6rwUm2"]),
                claimButtonPlacement: j.u5.FOOTER,
            },
        },
    },
    [T.NC]: {
        getLockedPreview: () => ({
            title: B.intl.string(k.default.CwMGMb),
            body: B.intl.string(k.default.TgHy6p),
            asset: V,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: V,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => B.intl.string(k.default.CwMGMb),
                getBody: () => B.intl.string(k.default.TgHy6p),
                getRedeemCtaText: () => B.intl.string(k.default.KfOPbQ),
                claimButtonPlacement: j.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var W = n(553875);
function X() {
    return (0, i.jsx)(N, {
        title: B.intl.string(W.default.oDfh3O),
        body: B.intl.string(W.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var $ = n(202541),
    q = n(652215);
function J(e, t) {
    return (0, p.v)(e[0], t[0]) && (0, p.v)(e[1], t[1]);
}
function Z(e, t, n) {
    let i = K[e.partnerId ?? ""],
        a = H(i?.outboundConfigs, e.outboundTitle);
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
        d,
        { records: c, claimedOutboundPromotionCodeMap: u, theme: p } = e,
        [b, g] = a.useState(!1),
        x = [...c].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        v = b ? x : x.slice(0, 1),
        _ = !b && x.length > 1,
        C =
            ((t = c[0]?.partnerId ?? ""),
            (n = (0, m.bG)([h.A], () => (0, r.M)(h.A.theme))),
            null == (d = K[t]?.logos) ? void 0 : n ? d.dark : d.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.B, {
                direction: "vertical",
                gap: 12,
                children: v.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        j.wx,
                        {
                            recurrence:
                                ((t = u[e.id] ?? null),
                                (n = K[e.partnerId ?? ""]),
                                (a = H(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...Z(e, t, p),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: a?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: C,
                            showPartnerImage: !0,
                            claimButtonPlacement: j.u5.FOOTER,
                            footerContent: (0, i.jsx)(j.vw, {}),
                            analyticsLocations: [f.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            _ &&
                (0, i.jsx)(l.D, {
                    className: E.K8,
                    onClick: () => {
                        g(!0);
                    },
                    children: (0, i.jsx)(o.E, {
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
        n = K[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(N, { title: n.title, body: n.body, asset: n.asset });
}
function et(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: a,
            modalTeaser: r,
            showXboxCard: l = !1,
            transitionState: o,
            onClose: u,
            analyticsLocationsProp: m,
        } = e,
        { promotionsLoaded: p } = (0, C.y7)(),
        { analyticsLocations: b } = (0, g.Ay)(m);
    return p
        ? (0, i.jsx)(g.f5, {
              value: b,
              children: (0, i.jsxs)(c.Modal, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(v.A, {
                      subscriptionTier: $.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          u();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return _.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: u,
                  children: [
                      (0, i.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)(X, {}), t.map((e) => (0, i.jsx)(ee, { partnerId: e }, e))],
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
    let n = t.icon ?? u.t;
    return (0, i.jsxs)("div", {
        className: E.ar,
        children: [
            (0, i.jsxs)("div", {
                className: E.Uv,
                children: [
                    (0, i.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(o.E, {
                        variant: t.titleVariant ?? "text-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function ei(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: r, transitionState: l, onClose: u } = e,
        p = (0, m.bG)([h.A], () => h.A.theme),
        [b, g] = (0, m.bG)(
            [P.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = K[t]?.outboundConfigs;
                        function a(e) {
                            return null != H(i, e.outboundTitle);
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
        { promotionsLoaded: x, claimedOutboundPromotionCodeMap: v } = (0, C.y7)();
    if (!x) return (0, i.jsx)(d.y, {});
    let _ = t
            .map((e) => K[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        T = _ ? { recurring: B.intl.string(D.default["9Y2p6p"]), oneTime: B.intl.string(D.default.Wm58LR) } : void 0,
        R = (0, i.jsx)(s.B, {
            direction: "vertical",
            gap: 12,
            children: g.map((e) => {
                let t = Z(e, v[e.id] ?? null, p),
                    n = H(K[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, i.jsx)(
                    I,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [f.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, i.jsx)(c.Modal, {
        title: n,
        subtitle: a,
        actions: [],
        transitionState: l,
        onClose: u,
        children: (0, i.jsxs)("div", {
            className: E.kL,
            children: [
                b.length > 0 &&
                    (0, i.jsxs)(s.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != T &&
                                (0, i.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: T.recurring,
                                }),
                            (0, i.jsx)(Q, { records: b, claimedOutboundPromotionCodeMap: v, theme: p }),
                        ],
                    }),
                g.length > 0 &&
                    (_
                        ? (0, i.jsx)("div", {
                              className: E.E7,
                              children: (0, i.jsxs)(s.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != T &&
                                          (0, i.jsx)(o.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: T.oneTime,
                                          }),
                                      R,
                                  ],
                              }),
                          })
                        : R),
                (0, i.jsx)(en, { modalTeaser: r }),
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
        modalTeaser: s,
        showXboxCard: l,
        transitionState: o,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, i.jsx)(et, {
              partnerIds: t,
              title: a,
              subtitle: r,
              modalTeaser: s,
              showXboxCard: l,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(ei, { partnerIds: t, title: a, subtitle: r, modalTeaser: s, transitionState: o, onClose: d });
}
function er(e) {
    let {
            partnerIds: t,
            isLocked: a = !1,
            title: r,
            subtitle: s,
            modalTeaser: l,
            showXboxCard: o,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = o ? [...t, "xbox"] : t;
    (x.default.track(q.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        _.Ay.fetchActivePromotions(),
        (0, b.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 239016));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: a,
                        title: r,
                        subtitle: s,
                        modalTeaser: l,
                        showXboxCard: o,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
