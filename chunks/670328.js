(n.d(t, { ThirdPartyPromotionsModal: () => eC, P: () => eR }), n(321073));
var i,
    a = n(477900),
    l = n(582128),
    r = n(855986),
    s = n(52133),
    o = n(189213),
    d = n(366010),
    c = n(331322),
    u = n(939249),
    f = n(834730),
    m = n(289873),
    g = n(403581),
    b = n(192308),
    A = n(793574),
    p = n(688810),
    P = n(413599),
    E = n(129230),
    _ = n(792656),
    O = n(597758),
    T = n(35587),
    C = n(412260),
    R = n(852218),
    N = n(194261),
    h = n(534514),
    v = n(251843),
    I = n(341973);
function x(e) {
    let { title: t, body: n, asset: i } = e;
    return (0, a.jsx)("div", {
        className: I.lA,
        children: (0, a.jsxs)("div", {
            className: I.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: I.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: I.MC,
                            children: (0, a.jsx)(N.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: I.yO,
                            children: [
                                (0, a.jsx)(h.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(h.D, { variant: "heading-xs/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        className: I.R4,
                        children: (0, a.jsx)(v._, {
                            src: i,
                            className: I.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: I.EM,
                        }),
                    }),
            ],
        }),
    });
}
var M = n(947641),
    y = n(646514),
    L = n(408278),
    S = n(624479),
    j = n(821609),
    U = n(695366),
    D = n(914410),
    B = n(5377),
    k = n(975571),
    w = n(856383),
    H = n(264779),
    G = n(652215),
    Y = n(691450),
    V = n(792996);
function W() {
    let e = (0, B.N5)(),
        t = (0, B.P6)();
    return (0, a.jsxs)("div", {
        className: `${I.G9} ${I.sQ}`,
        children: [
            (0, a.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: I.kT,
                children: V.intl.format(Y.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(D.Ay, {
                progress: e,
                variant: D.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function K(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: I.oP, children: (0, a.jsx)("div", { className: I.t0, children: t }) });
}
let F = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(M.CheckmarkLargeBoldIcon, { color: y.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        r = (0, a.jsx)("span", {
            className: I.nP,
            children: (0, a.jsx)(L.K, {
                icon: S.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        o(i),
                        E.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [s, o] = l.useState(() => r);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: I.oP,
            children: (0, a.jsxs)("div", {
                className: I.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: I.cD,
                        children: (0, a.jsx)(f.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    s,
                    (0, a.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            V.intl.formatToPlainString(V.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                E.default.track(G.HAw.RECURRING_PROMOTION_CLAIMED),
                                E.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function X(e) {
    let {
        recurrence: t,
        canBeClaimed: n,
        hasClaimError: i,
        setCode: l,
        setHasClaimError: r,
        className: s,
        analyticsLocations: o = [],
        onClaim: d,
        onClaimError: c,
        isClaiming: u,
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: s,
                  children: (0, a.jsx)(j.$, {
                      icon: U.CircleErrorIcon,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: V.intl.string(V.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: s,
                  children: (0, a.jsx)(j.$, {
                      icon: N.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? V.intl.string(V.t.vwASIl),
                      loading: u,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, H.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: o,
                                }).then((e) => ((0, O.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && l(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (r(!0), w.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var z = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function q(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: r = !1,
            roundPromotionImage: s = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: u,
            analyticsLocations: f = [],
            onClaim: m,
            onClaimError: g,
            isClaiming: b,
            hideClaimButton: A = !1,
        } = e,
        [p, P] = l.useState(t.code),
        [E, _] = l.useState(!1),
        O = null == p;
    return (0, a.jsxs)("div", {
        className: I.lA,
        children: [
            (0, a.jsxs)("div", {
                className: I.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: I.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${I.yO} ${n}` : I.yO,
                                children: [
                                    (0, a.jsx)(h.D, {
                                        variant: "secondary" === o ? "heading-sm/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(c.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(h.D, {
                                                variant: "heading-xs/medium",
                                                color: "text-subtle",
                                                children: E
                                                    ? V.intl.format(V.t.i2EuFO, {
                                                          helpdeskArticle: k.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : O
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? V.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(h.D, {
                                                    variant: "heading-xs/medium",
                                                    color: "text-subtle",
                                                    children: V.intl.format(t.bodyNote, {
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: k.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === A &&
                                (0, a.jsx)(X, {
                                    recurrence: t,
                                    canBeClaimed: O,
                                    hasClaimError: E,
                                    setCode: P,
                                    setHasClaimError: _,
                                    analyticsLocations: f,
                                    onClaim: m,
                                    onClaimError: g,
                                    isClaiming: b,
                                }),
                        ],
                    }),
                    r &&
                        (0, a.jsx)("div", {
                            className: I.R4,
                            children: (0, a.jsx)(v._, {
                                src: t.asset ?? "",
                                className: I.Ys,
                                imageClassName: s || t.partnerId === R.XY ? I.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && u,
            null != p && (0, a.jsx)(F, { recurrence: { ...t, code: p }, analyticsLocations: f }),
            "footer" === d &&
                null == p &&
                !1 === A &&
                (0, a.jsx)(K, {
                    children: (0, a.jsx)(X, {
                        recurrence: t,
                        canBeClaimed: O,
                        hasClaimError: E,
                        setCode: P,
                        setHasClaimError: _,
                        className: I.qx,
                        analyticsLocations: f,
                        onClaim: m,
                        onClaimError: g,
                        isClaiming: b,
                    }),
                }),
        ],
    });
}
function J(e) {
    let { promotion: t, claimButtonPlacement: n = z.INLINE, analyticsLocations: i } = e;
    return (0, a.jsx)(q, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: i,
    });
}
var Q = n(517352),
    $ = n(325499);
(n(398523), n(881373));
var Z = n(721157);
n(675772);
var ee = n(712620),
    et = n(749962),
    en = n(524698),
    ei = n(770300),
    ea = n(855e3);
let el =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    er =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    es =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    eo =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function ed(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function ec() {
    return V.intl.formatToPlainString(V.t.p7BkHh, { discountPercentage: 20 });
}
function eu() {
    return (0, $.i)("ThirdPartyPromotionPartnerConfigs") ? V.intl.string(V.t.nmvvaN) : V.intl.string(V.t.igiSKe);
}
let ef = {
    [R.KS]: {
        getLockedPreview: () => ({ title: ec(), body: eu(), asset: es }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: es,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: ec, getBody: eu, getBodyClaimed: () => V.t.w8CXUl },
        },
    },
    [R.XY]: {
        getLockedPreview: () => ({
            title: (0, $.i)("ThirdPartyPromotionPartnerConfigs")
                ? V.intl.formatToPlainString(Y.default.PF1aT5, { discountPercentage: 30 })
                : V.intl.formatToPlainString(Y.default.LsJ9hj, { discountPercent: 30 }),
            body: (0, $.i)("ThirdPartyPromotionPartnerConfigs")
                ? V.intl.formatToPlainString(Y.default.KoKwMn, {})
                : V.intl.formatToPlainString(Y.default.Yl5ww1, {}),
            asset: er,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: er,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => V.intl.formatToPlainString(Y.default.jkdhZq, { discountPercent: 30 }),
                    getBody: () => V.intl.formatToPlainString(Y.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => V.intl.formatToPlainString(Y.default.zeBjoX, { discountPercent: 5 }),
                    getBody: () => V.intl.formatToPlainString(Y.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => V.intl.formatToPlainString(Y.default.pSBCjv, { discountPercent: 5 }),
                    getBody: () => V.intl.formatToPlainString(Y.default.lsRjfl, {}),
                },
            },
        },
    },
    [R.NC]: {
        getLockedPreview: () => ({
            title: V.intl.string(en.default.CwMGMb),
            body: V.intl.formatToPlainString(en.default["7b+4f6"], { discountPercentage: 20, months: 6 }),
            asset: eo,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: eo,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => V.intl.string(en.default.CwMGMb),
                getBody: () => V.intl.formatToPlainString(en.default["7b+4f6"], { discountPercentage: 20, months: 6 }),
                getRedeemCtaText: () => V.intl.string(en.default.KfOPbQ),
                claimButtonPlacement: z.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [R.P_]: {
        getLockedPreview: () => ({
            title: V.intl.string(ea.default.ecPCdG),
            body: V.intl.string(ea.default["2370GD"]),
            asset: el,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => V.intl.string(ea.default.ecPCdG),
                getAsset: () => el,
                getBody: () => V.intl.string(ea.default["2370GD"]),
                claimButtonPlacement: z.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [R.Bt]: {
        getLockedPreview: () => ({
            title: V.intl.string(ei.default.xDMrVa),
            body: V.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
            asset: (0, Z.VO)(R.Bt, Q.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, G.NJ8.DARK),
        }),
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => V.intl.string(ei.default.xDMrVa),
                getBody: () => V.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
                getAsset: (e, t) => (0, Z.VO)(R.Bt, Q.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, t),
                getClaimCtaText: () => V.intl.string(et.default["lbyFG+"]),
                getRedeemCtaText: () => V.intl.string(et.default["6rwUm2"]),
                claimButtonPlacement: z.FOOTER,
            },
        },
    },
};
var em = n(831768);
function eg() {
    return (0, a.jsx)(x, {
        title: V.intl.string(em.default.oDfh3O),
        body: V.intl.string(em.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var eb = n(682901);
function eA(e, t) {
    return (0, s.v)(e[0], t[0]) && (0, s.v)(e[1], t[1]);
}
function ep(e, t, n) {
    let i = ef[e.partnerId ?? ""],
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
        { records: s, claimedOutboundPromotionCodeMap: o, theme: m } = e,
        [g, b] = l.useState(!1),
        p = [...s].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        E = g ? p : p.slice(0, 1),
        _ = !g && p.length > 1,
        O =
            ((t = s[0]?.partnerId ?? ""),
            (n = (0, r.bG)([P.A], () => (0, d.M)(P.A.theme))),
            null == (i = ef[t]?.logos) ? void 0 : n ? i.dark : i.light);
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
                                ((t = o[e.id] ?? null),
                                (n = ef[e.partnerId ?? ""]),
                                (i = ed(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...ep(e, t, m),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: i?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: O,
                            showPartnerImage: !0,
                            claimButtonPlacement: z.FOOTER,
                            footerContent: (0, a.jsx)(W, {}),
                            analyticsLocations: [A.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            _ &&
                (0, a.jsx)(u.D, {
                    className: I.K8,
                    onClick: () => {
                        b(!0);
                    },
                    children: (0, a.jsx)(f.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function eE(e) {
    let { partnerId: t } = e,
        n = ef[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(x, { title: n.title, body: n.body, asset: n.asset });
}
function e_(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: l,
            showXboxCard: r = !1,
            transitionState: s,
            onClose: d,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: f } = (0, T.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, a.jsx)(p.f5, {
              value: g,
              children: (0, a.jsxs)(o.a, {
                  title: n,
                  subtitle: i,
                  actions: [],
                  preview: (0, a.jsx)(_.A, {
                      subscriptionTier: eb.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          d();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return O.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: s,
                  onClose: d,
                  children: [
                      (0, a.jsxs)(c.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [r && (0, a.jsx)(eg, {}), t.map((e) => (0, a.jsx)(eE, { partnerId: e }, e))],
                      }),
                      (0, a.jsx)(eO, { modalTeaser: l }),
                  ],
              }),
          })
        : (0, a.jsx)(m.y, {});
}
function eO(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? g.NitroWheelIcon;
    return (0, a.jsxs)("div", {
        className: I.ar,
        children: [
            (0, a.jsxs)("div", {
                className: I.Uv,
                children: [
                    (0, a.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(f.E, {
                        variant: t.titleVariant ?? "body-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, a.jsx)(f.E, { variant: "body-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function eT(e) {
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: l, transitionState: s, onClose: d } = e,
        u = (0, r.bG)([P.A], () => P.A.theme),
        [g, b] = (0, r.bG)(
            [C.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = ef[t]?.outboundConfigs;
                        function a(e) {
                            return null != ed(i, e.outboundTitle);
                        }
                        let l = C.A.getPromotionsByPartner(t);
                        (e.push(...l.recurring.filter(a)), n.push(...l.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            eA,
        ),
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: E } = (0, T.y7)();
    if (!p) return (0, a.jsx)(m.y, {});
    let _ = t
            .map((e) => ef[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        O = _ ? { recurring: V.intl.string(Y.default["9Y2p6p"]), oneTime: V.intl.string(Y.default.Wm58LR) } : void 0,
        R = (0, a.jsx)(c.B, {
            direction: "vertical",
            gap: 12,
            children: b.map((e) => {
                let t = ep(e, E[e.id] ?? null, u),
                    n = ed(ef[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    J,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [A.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(o.a, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: s,
        onClose: d,
        children: (0, a.jsxs)("div", {
            className: I.kL,
            children: [
                g.length > 0 &&
                    (0, a.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != O &&
                                (0, a.jsx)(f.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    children: O.recurring,
                                }),
                            (0, a.jsx)(eP, { records: g, claimedOutboundPromotionCodeMap: E, theme: u }),
                        ],
                    }),
                b.length > 0 &&
                    (_
                        ? (0, a.jsx)("div", {
                              className: I.E7,
                              children: (0, a.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != O &&
                                          (0, a.jsx)(f.E, {
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: O.oneTime,
                                          }),
                                      R,
                                  ],
                              }),
                          })
                        : R),
                (0, a.jsx)(eO, { modalTeaser: l }),
            ],
        }),
    });
}
function eC(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: i,
        subtitle: l,
        modalTeaser: r,
        showXboxCard: s,
        transitionState: o,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, a.jsx)(e_, {
              partnerIds: t,
              title: i,
              subtitle: l,
              modalTeaser: r,
              showXboxCard: s,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, a.jsx)(eT, { partnerIds: t, title: i, subtitle: l, modalTeaser: r, transitionState: o, onClose: d });
}
function eR(e) {
    let {
            partnerIds: t,
            isLocked: i = !1,
            title: l,
            subtitle: r,
            modalTeaser: s,
            showXboxCard: o,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = o ? [...t, "xbox"] : t;
    (E.default.track(G.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        O.Ay.fetchActivePromotions(),
        (0, b.mM)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 670328));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: i,
                        title: l,
                        subtitle: r,
                        modalTeaser: s,
                        showXboxCard: o,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
