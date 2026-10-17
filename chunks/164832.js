(n.d(t, { P: () => ea, ThirdPartyPromotionsModal: () => ei }), n(321073));
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
    P = n(363195),
    T = n(174459),
    _ = n(792656),
    E = n(962644),
    A = n(35587),
    C = n(412260),
    h = n(852218),
    x = n(194261),
    O = n(297264),
    v = n(144165),
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
                                (0, i.jsx)(O.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(O.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: R.R4,
                        children: (0, i.jsx)(v._, {
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
var I = n(116011);
function S(e) {
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
var y = n(325499),
    j = n(398523),
    L = n(881373),
    M = n(810889),
    U = n(264865),
    D = n(87255),
    w = n(105292);
let B =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    k =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    H =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    Y =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function G(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function F() {
    return w.intl.formatToPlainString(w.t.p7BkHh, { discountPercentage: j.b });
}
function K() {
    return (0, y.i)("ThirdPartyPromotionPartnerConfigs") ? w.intl.string(w.t.nmvvaN) : w.intl.string(w.t.igiSKe);
}
let z = {
    [h.KS]: {
        getLockedPreview: () => ({ title: F(), body: K(), asset: H }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: H,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: F, getBody: K, getBodyClaimed: () => w.t.w8CXUl },
        },
    },
    [h.XY]: {
        getLockedPreview: () => ({
            title: (0, y.i)("ThirdPartyPromotionPartnerConfigs")
                ? w.intl.formatToPlainString(M.default.PF1aT5, { discountPercentage: L.aW })
                : w.intl.formatToPlainString(M.default.LsJ9hj, { discountPercent: L.aW }),
            body: (0, y.i)("ThirdPartyPromotionPartnerConfigs")
                ? w.intl.formatToPlainString(M.default.KoKwMn, {})
                : w.intl.formatToPlainString(M.default.Yl5ww1, {}),
            asset: k,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: k,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => w.intl.formatToPlainString(M.default.jkdhZq, { discountPercent: L.aW }),
                    getBody: () => w.intl.formatToPlainString(M.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => w.intl.formatToPlainString(M.default.zeBjoX, { discountPercent: L.y$ }),
                    getBody: () => w.intl.formatToPlainString(M.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => w.intl.formatToPlainString(M.default.pSBCjv, { discountPercent: L.K2 }),
                    getBody: () => w.intl.formatToPlainString(M.default.lsRjfl, {}),
                },
            },
        },
    },
    [h.NC]: {
        getLockedPreview: () => ({
            title: w.intl.string(U.default.CwMGMb),
            body: w.intl.string(U.default.TgHy6p),
            asset: Y,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: Y,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => w.intl.string(U.default.CwMGMb),
                getBody: () => w.intl.string(U.default.TgHy6p),
                getRedeemCtaText: () => w.intl.string(U.default.KfOPbQ),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [h.P_]: {
        getLockedPreview: () => ({
            title: w.intl.string(D.default.ecPCdG),
            body: w.intl.string(D.default.evF0PO),
            asset: B,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => w.intl.string(D.default.ecPCdG),
                getAsset: () => B,
                getBody: () => w.intl.string(D.default.evF0PO),
                claimButtonPlacement: I.u5.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var V = n(428685);
function W() {
    return (0, i.jsx)(N, {
        title: w.intl.string(V.default.oDfh3O),
        body: w.intl.string(V.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var X = n(202541),
    $ = n(652215);
function J(e, t) {
    return (0, l.v)(e[0], t[0]) && (0, l.v)(e[1], t[1]);
}
function q(e, t, n) {
    let i = z[e.partnerId ?? ""],
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
        { records: s, claimedOutboundPromotionCodeMap: m, theme: f } = e,
        [g, p] = a.useState(!1),
        T = [...s].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        _ = g ? T : T.slice(0, 1),
        E = !g && T.length > 1,
        A =
            ((t = s[0]?.partnerId ?? ""),
            (n = (0, r.bG)([P.A], () => (0, o.M)(P.A.theme))),
            null == (l = z[t]?.logos) ? void 0 : n ? l.dark : l.light);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.B, {
                direction: "vertical",
                gap: 12,
                children: _.map((e) => {
                    var t;
                    let n, a;
                    return (0, i.jsx)(
                        I.wx,
                        {
                            recurrence:
                                ((t = m[e.id] ?? null),
                                (n = z[e.partnerId ?? ""]),
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
                            partnerLogo: A,
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
                    className: R.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: w.intl.string(w.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function Z(e) {
    let { partnerId: t } = e,
        n = z[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(N, { title: n.title, body: n.body, asset: n.asset });
}
function ee(e) {
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
        { promotionsLoaded: f } = (0, A.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, i.jsx)(p.f5, {
              value: g,
              children: (0, i.jsxs)(s.a, {
                  title: n,
                  subtitle: a,
                  actions: [],
                  preview: (0, i.jsx)(_.A, {
                      subscriptionTier: X.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          c();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return E.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: c,
                  children: [
                      (0, i.jsxs)(d.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, i.jsx)(W, {}), t.map((e) => (0, i.jsx)(Z, { partnerId: e }, e))],
                      }),
                      (0, i.jsx)(et, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, i.jsx)(m.y, {});
}
function et(e) {
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
function en(e) {
    let { partnerIds: t, title: n, subtitle: a, modalTeaser: l, transitionState: o, onClose: c } = e,
        f = (0, r.bG)([P.A], () => P.A.theme),
        [g, p] = (0, r.bG)(
            [C.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = z[t]?.outboundConfigs;
                        function a(e) {
                            return null != G(i, e.outboundTitle);
                        }
                        let r = C.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            J,
        ),
        { promotionsLoaded: T, claimedOutboundPromotionCodeMap: _ } = (0, A.y7)();
    if (!T) return (0, i.jsx)(m.y, {});
    let E = t
            .map((e) => z[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        h = E ? { recurring: w.intl.string(M.default["9Y2p6p"]), oneTime: w.intl.string(M.default.Wm58LR) } : void 0,
        x = (0, i.jsx)(d.B, {
            direction: "vertical",
            gap: 12,
            children: p.map((e) => {
                let t = q(e, _[e.id] ?? null, f),
                    n = G(z[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
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
    return (0, i.jsx)(s.a, {
        title: n,
        subtitle: a,
        actions: [],
        transitionState: o,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: R.kL,
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
                            (0, i.jsx)(Q, { records: g, claimedOutboundPromotionCodeMap: _, theme: f }),
                        ],
                    }),
                p.length > 0 &&
                    (E
                        ? (0, i.jsx)("div", {
                              className: R.E7,
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
                (0, i.jsx)(et, { modalTeaser: l }),
            ],
        }),
    });
}
function ei(e) {
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
        ? (0, i.jsx)(ee, {
              partnerIds: t,
              title: a,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: s,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, i.jsx)(en, { partnerIds: t, title: a, subtitle: r, modalTeaser: l, transitionState: o, onClose: d });
}
function ea(e) {
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
    (T.default.track($.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        E.Ay.fetchActivePromotions(),
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
