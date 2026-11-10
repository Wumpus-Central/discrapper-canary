(n.d(t, { ThirdPartyPromotionsModal: () => eO, P: () => eR }), n(321073));
var i,
    a = n(477900),
    r = n(582128),
    l = n(855986),
    o = n(52133),
    s = n(189213),
    d = n(366010),
    c = n(331322),
    u = n(939249),
    m = n(834730),
    f = n(289873),
    g = n(403581),
    b = n(192308),
    p = n(793574),
    A = n(688810),
    P = n(413599),
    E = n(129230),
    C = n(792656),
    _ = n(597758),
    T = n(35587),
    O = n(412260),
    R = n(852218),
    h = n(194261),
    N = n(534514),
    v = n(251843),
    x = n(341973);
function I(e) {
    let { title: t, body: n, asset: i } = e;
    return (0, a.jsx)("div", {
        className: x.lA,
        children: (0, a.jsxs)("div", {
            className: x.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: x.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: x.MC,
                            children: (0, a.jsx)(h.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: x.yO,
                            children: [
                                (0, a.jsx)(N.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(N.D, { variant: "heading-xs/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        className: x.R4,
                        children: (0, a.jsx)(v._, {
                            src: i,
                            className: x.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: x.EM,
                        }),
                    }),
            ],
        }),
    });
}
var y = n(947641),
    L = n(646514),
    M = n(408278),
    j = n(624479),
    S = n(821609),
    U = n(695366),
    D = n(914410),
    B = n(5377),
    k = n(975571),
    w = n(856383),
    H = n(264779),
    Y = n(652215),
    V = n(691450),
    G = n(792996);
function K() {
    let e = (0, B.N5)(),
        t = (0, B.P6)();
    return (0, a.jsxs)("div", {
        className: `${x.G9} ${x.sQ}`,
        children: [
            (0, a.jsx)(m.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: x.kT,
                children: G.intl.format(V.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(D.Ay, {
                progress: e,
                variant: D.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function W(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: x.oP, children: (0, a.jsx)("div", { className: x.t0, children: t }) });
}
let F = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(y.CheckmarkLargeBoldIcon, { color: L.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        l = (0, a.jsx)("span", {
            className: x.nP,
            children: (0, a.jsx)(M.K, {
                icon: j.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        s(i),
                        E.default.track(Y.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [o, s] = r.useState(() => l);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: x.oP,
            children: (0, a.jsxs)("div", {
                className: x.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: x.cD,
                        children: (0, a.jsx)(m.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    o,
                    (0, a.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            G.intl.formatToPlainString(G.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                E.default.track(Y.HAw.RECURRING_PROMOTION_CLAIMED),
                                E.default.track(Y.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                                    partner: t.partnerId,
                                    cta_type: "visit store",
                                    promotion: t.outboundTitle,
                                    promotion_id: t.id,
                                    url: t.redemptionURL,
                                    location_stack: n,
                                }));
                        },
                    }),
                ],
            }),
        });
};
function z(e) {
    let {
        recurrence: t,
        canBeClaimed: n,
        hasClaimError: i,
        setCode: r,
        setHasClaimError: l,
        className: o,
        analyticsLocations: s = [],
        onClaim: d,
        onClaimError: c,
        isClaiming: u,
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(S.$, {
                      icon: U.CircleErrorIcon,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: G.intl.string(G.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(S.$, {
                      icon: h.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? G.intl.string(G.t.vwASIl),
                      loading: u,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, H.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
                                }).then((e) => ((0, _.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && r(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (l(!0), w.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var X = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function q(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: l = !1,
            roundPromotionImage: o = !1,
            titleVariant: s = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: u,
            analyticsLocations: m = [],
            onClaim: f,
            onClaimError: g,
            isClaiming: b,
            hideClaimButton: p = !1,
        } = e,
        [A, P] = r.useState(t.code),
        [E, C] = r.useState(!1),
        _ = null == A;
    return (0, a.jsxs)("div", {
        className: x.lA,
        children: [
            (0, a.jsxs)("div", {
                className: x.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: x.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${x.yO} ${n}` : x.yO,
                                children: [
                                    (0, a.jsx)(N.D, {
                                        variant: "secondary" === s ? "heading-sm/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(c.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(N.D, {
                                                variant: "heading-xs/medium",
                                                color: "text-subtle",
                                                children: E
                                                    ? G.intl.format(G.t.i2EuFO, {
                                                          helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : _
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? G.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(N.D, {
                                                    variant: "heading-xs/medium",
                                                    color: "text-subtle",
                                                    children: G.intl.format(t.bodyNote, {
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === p &&
                                (0, a.jsx)(z, {
                                    recurrence: t,
                                    canBeClaimed: _,
                                    hasClaimError: E,
                                    setCode: P,
                                    setHasClaimError: C,
                                    analyticsLocations: m,
                                    onClaim: f,
                                    onClaimError: g,
                                    isClaiming: b,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: x.R4,
                            children: (0, a.jsx)(v._, {
                                src: t.asset ?? "",
                                className: x.Ys,
                                imageClassName: o || t.partnerId === R.XY ? x.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && u,
            null != A && (0, a.jsx)(F, { recurrence: { ...t, code: A }, analyticsLocations: m }),
            "footer" === d &&
                null == A &&
                !1 === p &&
                (0, a.jsx)(W, {
                    children: (0, a.jsx)(z, {
                        recurrence: t,
                        canBeClaimed: _,
                        hasClaimError: E,
                        setCode: P,
                        setHasClaimError: C,
                        className: x.qx,
                        analyticsLocations: m,
                        onClaim: f,
                        onClaimError: g,
                        isClaiming: b,
                    }),
                }),
        ],
    });
}
function $(e) {
    let { promotion: t, claimButtonPlacement: n = X.INLINE, analyticsLocations: i } = e;
    return (0, a.jsx)(q, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: i,
    });
}
var J = n(517352),
    Q = n(325499);
(n(398523), n(881373));
var Z = n(721157),
    ee = n(712620),
    et = n(749962),
    en = n(524698),
    ei = n(770300),
    ea = n(855e3);
let er =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    el =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    eo =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    es =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function ed(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function ec() {
    return G.intl.formatToPlainString(G.t.p7BkHh, { discountPercentage: 20 });
}
function eu() {
    return (0, Q.i)("ThirdPartyPromotionPartnerConfigs") ? G.intl.string(G.t.nmvvaN) : G.intl.string(G.t.igiSKe);
}
let em = {
    [R.KS]: {
        getLockedPreview: () => ({ title: ec(), body: eu(), asset: eo }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: eo,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: ec, getBody: eu, getBodyClaimed: () => G.t.w8CXUl },
        },
    },
    [R.XY]: {
        getLockedPreview: () => ({
            title: (0, Q.i)("ThirdPartyPromotionPartnerConfigs")
                ? G.intl.formatToPlainString(V.default.PF1aT5, { discountPercentage: 30 })
                : G.intl.formatToPlainString(V.default.LsJ9hj, { discountPercent: 30 }),
            body: (0, Q.i)("ThirdPartyPromotionPartnerConfigs")
                ? G.intl.formatToPlainString(V.default.KoKwMn, {})
                : G.intl.formatToPlainString(V.default.Yl5ww1, {}),
            asset: el,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: el,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => G.intl.formatToPlainString(V.default.jkdhZq, { discountPercent: 30 }),
                    getBody: () => G.intl.formatToPlainString(V.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => G.intl.formatToPlainString(V.default.zeBjoX, { discountPercent: 5 }),
                    getBody: () => G.intl.formatToPlainString(V.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => G.intl.formatToPlainString(V.default.pSBCjv, { discountPercent: 5 }),
                    getBody: () => G.intl.formatToPlainString(V.default.lsRjfl, {}),
                },
            },
        },
    },
    [R.NC]: {
        getLockedPreview: () => ({
            title: G.intl.string(en.default.CwMGMb),
            body: G.intl.string(en.default.TgHy6p),
            asset: es,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: es,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => G.intl.string(en.default.CwMGMb),
                getBody: () => G.intl.string(en.default.TgHy6p),
                getRedeemCtaText: () => G.intl.string(en.default.KfOPbQ),
                claimButtonPlacement: X.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [R.P_]: {
        getLockedPreview: () => ({
            title: G.intl.string(ea.default.ecPCdG),
            body: G.intl.string(ea.default.evF0PO),
            asset: er,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => G.intl.string(ea.default.ecPCdG),
                getAsset: () => er,
                getBody: () => G.intl.string(ea.default.evF0PO),
                claimButtonPlacement: X.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [R.Bt]: {
        getLockedPreview: () => ({
            title: G.intl.string(ei.default.xDMrVa),
            body: G.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
            asset: (0, Z.VO)(R.Bt, J.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, Y.NJ8.DARK),
        }),
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => G.intl.string(ei.default.xDMrVa),
                getBody: () => G.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
                getAsset: (e, t) => (0, Z.VO)(R.Bt, J.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, t),
                getClaimCtaText: () => G.intl.string(et.default["lbyFG+"]),
                getRedeemCtaText: () => G.intl.string(et.default["6rwUm2"]),
                claimButtonPlacement: X.FOOTER,
            },
        },
    },
};
var ef = n(831768);
function eg() {
    return (0, a.jsx)(I, {
        title: G.intl.string(ef.default.oDfh3O),
        body: G.intl.string(ef.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var eb = n(682901);
function ep(e, t) {
    return (0, o.v)(e[0], t[0]) && (0, o.v)(e[1], t[1]);
}
function eA(e, t, n) {
    let i = em[e.partnerId ?? ""],
        a = ed(i?.outboundConfigs, e.outboundTitle);
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
function eP(e) {
    var t;
    let n,
        i,
        { records: o, claimedOutboundPromotionCodeMap: s, theme: f } = e,
        [g, b] = r.useState(!1),
        A = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        E = g ? A : A.slice(0, 1),
        C = !g && A.length > 1,
        _ =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, l.bG)([P.A], () => (0, d.M)(P.A.theme))),
            null == (i = em[t]?.logos) ? void 0 : n ? i.dark : i.light);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(c.B, {
                direction: "vertical",
                gap: 12,
                children: E.map((e) => {
                    var t;
                    let n, i;
                    return (0, a.jsx)(
                        q,
                        {
                            recurrence:
                                ((t = s[e.id] ?? null),
                                (n = em[e.partnerId ?? ""]),
                                (i = ed(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...eA(e, t, f),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: i?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: _,
                            showPartnerImage: !0,
                            claimButtonPlacement: X.FOOTER,
                            footerContent: (0, a.jsx)(K, {}),
                            analyticsLocations: [p.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            C &&
                (0, a.jsx)(u.D, {
                    className: x.K8,
                    onClick: () => {
                        b(!0);
                    },
                    children: (0, a.jsx)(m.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: G.intl.string(G.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function eE(e) {
    let { partnerId: t } = e,
        n = em[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(I, { title: n.title, body: n.body, asset: n.asset });
}
function eC(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: r,
            showXboxCard: l = !1,
            transitionState: o,
            onClose: d,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: m } = (0, T.y7)(),
        { analyticsLocations: g } = (0, A.Ay)(u);
    return m
        ? (0, a.jsx)(A.f5, {
              value: g,
              children: (0, a.jsxs)(s.a, {
                  title: n,
                  subtitle: i,
                  actions: [],
                  preview: (0, a.jsx)(C.A, {
                      subscriptionTier: eb.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          d();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return _.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: d,
                  children: [
                      (0, a.jsxs)(c.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [l && (0, a.jsx)(eg, {}), t.map((e) => (0, a.jsx)(eE, { partnerId: e }, e))],
                      }),
                      (0, a.jsx)(e_, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, a.jsx)(f.y, {});
}
function e_(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? g.NitroWheelIcon;
    return (0, a.jsxs)("div", {
        className: x.ar,
        children: [
            (0, a.jsxs)("div", {
                className: x.Uv,
                children: [
                    (0, a.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(m.E, {
                        variant: t.titleVariant ?? "body-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, a.jsx)(m.E, { variant: "body-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function eT(e) {
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: r, transitionState: o, onClose: d } = e,
        u = (0, l.bG)([P.A], () => P.A.theme),
        [g, b] = (0, l.bG)(
            [O.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = em[t]?.outboundConfigs;
                        function a(e) {
                            return null != ed(i, e.outboundTitle);
                        }
                        let r = O.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            ep,
        ),
        { promotionsLoaded: A, claimedOutboundPromotionCodeMap: E } = (0, T.y7)();
    if (!A) return (0, a.jsx)(f.y, {});
    let C = t
            .map((e) => em[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        _ = C ? { recurring: G.intl.string(V.default["9Y2p6p"]), oneTime: G.intl.string(V.default.Wm58LR) } : void 0,
        R = (0, a.jsx)(c.B, {
            direction: "vertical",
            gap: 12,
            children: b.map((e) => {
                let t = eA(e, E[e.id] ?? null, u),
                    n = ed(em[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    $,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [p.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(s.a, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: o,
        onClose: d,
        children: (0, a.jsxs)("div", {
            className: x.kL,
            children: [
                g.length > 0 &&
                    (0, a.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != _ &&
                                (0, a.jsx)(m.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    children: _.recurring,
                                }),
                            (0, a.jsx)(eP, { records: g, claimedOutboundPromotionCodeMap: E, theme: u }),
                        ],
                    }),
                b.length > 0 &&
                    (C
                        ? (0, a.jsx)("div", {
                              className: x.E7,
                              children: (0, a.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != _ &&
                                          (0, a.jsx)(m.E, {
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: _.oneTime,
                                          }),
                                      R,
                                  ],
                              }),
                          })
                        : R),
                (0, a.jsx)(e_, { modalTeaser: r }),
            ],
        }),
    });
}
function eO(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: i,
        subtitle: r,
        modalTeaser: l,
        showXboxCard: o,
        transitionState: s,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, a.jsx)(eC, {
              partnerIds: t,
              title: i,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: o,
              transitionState: s,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, a.jsx)(eT, { partnerIds: t, title: i, subtitle: r, modalTeaser: l, transitionState: s, onClose: d });
}
function eR(e) {
    let {
            partnerIds: t,
            isLocked: i = !1,
            title: r,
            subtitle: l,
            modalTeaser: o,
            showXboxCard: s,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = s ? [...t, "xbox"] : t;
    (E.default.track(Y.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        _.Ay.fetchActivePromotions(),
        (0, b.mM)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 670328));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: i,
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
