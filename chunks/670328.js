(n.d(t, { ThirdPartyPromotionsModal: () => eC, P: () => eR }), n(321073));
var i,
    a = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(52133),
    o = n(189213),
    d = n(366010),
    c = n(331322),
    u = n(939249),
    f = n(834730),
    m = n(289873),
    g = n(403581),
    b = n(192308),
    p = n(793574),
    A = n(688810),
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
                            children: (0, a.jsx)(N.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: x.yO,
                            children: [
                                (0, a.jsx)(h.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(h.D, { variant: "heading-xs/medium", color: "text-subtle", children: n }),
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
var M = n(947641),
    y = n(646514),
    L = n(408278),
    j = n(624479),
    U = n(821609),
    S = n(695366),
    D = n(914410),
    B = n(5377),
    k = n(975571),
    w = n(856383),
    H = n(264779),
    Y = n(652215),
    V = n(691450),
    W = n(792996);
function G() {
    let e = (0, B.N5)(),
        t = (0, B.P6)();
    return (0, a.jsxs)("div", {
        className: `${x.G9} ${x.sQ}`,
        children: [
            (0, a.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: x.kT,
                children: W.intl.format(V.default["65EEvD"], { days: t }),
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
    return (0, a.jsx)("div", { className: x.oP, children: (0, a.jsx)("div", { className: x.t0, children: t }) });
}
let F = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(M.CheckmarkLargeBoldIcon, { color: y.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        l = (0, a.jsx)("span", {
            className: x.nP,
            children: (0, a.jsx)(L.K, {
                icon: j.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        o(i),
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
        [s, o] = r.useState(() => l);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: x.oP,
            children: (0, a.jsxs)("div", {
                className: x.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: x.cD,
                        children: (0, a.jsx)(f.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    s,
                    (0, a.jsx)(U.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            W.intl.formatToPlainString(W.t.DF68t7, { redemptionURL: t.redemptionURL }),
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
                  children: (0, a.jsx)(U.$, {
                      icon: S.CircleErrorIcon,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: W.intl.string(W.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: s,
                  children: (0, a.jsx)(U.$, {
                      icon: N.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? W.intl.string(W.t.vwASIl),
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
            roundPromotionImage: s = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: u,
            analyticsLocations: f = [],
            onClaim: m,
            onClaimError: g,
            isClaiming: b,
            hideClaimButton: p = !1,
        } = e,
        [A, P] = r.useState(t.code),
        [E, _] = r.useState(!1),
        O = null == A;
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
                                                    ? W.intl.format(W.t.i2EuFO, {
                                                          helpdeskArticle: k.A.getArticleURL(Y.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : O
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? W.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(h.D, {
                                                    variant: "heading-xs/medium",
                                                    color: "text-subtle",
                                                    children: W.intl.format(t.bodyNote, {
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
                    l &&
                        (0, a.jsx)("div", {
                            className: x.R4,
                            children: (0, a.jsx)(v._, {
                                src: t.asset ?? "",
                                className: x.Ys,
                                imageClassName: s || t.partnerId === R.XY ? x.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && u,
            null != A && (0, a.jsx)(F, { recurrence: { ...t, code: A }, analyticsLocations: f }),
            "footer" === d &&
                null == A &&
                !1 === p &&
                (0, a.jsx)(K, {
                    children: (0, a.jsx)(z, {
                        recurrence: t,
                        canBeClaimed: O,
                        hasClaimError: E,
                        setCode: P,
                        setHasClaimError: _,
                        className: x.qx,
                        analyticsLocations: f,
                        onClaim: m,
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
    es =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    eo =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function ed(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function ec() {
    return W.intl.formatToPlainString(W.t.p7BkHh, { discountPercentage: 20 });
}
function eu() {
    return (0, Q.i)("ThirdPartyPromotionPartnerConfigs") ? W.intl.string(W.t.nmvvaN) : W.intl.string(W.t.igiSKe);
}
let ef = {
    [R.KS]: {
        getLockedPreview: () => ({ title: ec(), body: eu(), asset: es }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: es,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: ec, getBody: eu, getBodyClaimed: () => W.t.w8CXUl },
        },
    },
    [R.XY]: {
        getLockedPreview: () => ({
            title: (0, Q.i)("ThirdPartyPromotionPartnerConfigs")
                ? W.intl.formatToPlainString(V.default.PF1aT5, { discountPercentage: 30 })
                : W.intl.formatToPlainString(V.default.LsJ9hj, { discountPercent: 30 }),
            body: (0, Q.i)("ThirdPartyPromotionPartnerConfigs")
                ? W.intl.formatToPlainString(V.default.KoKwMn, {})
                : W.intl.formatToPlainString(V.default.Yl5ww1, {}),
            asset: el,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: el,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => W.intl.formatToPlainString(V.default.jkdhZq, { discountPercent: 30 }),
                    getBody: () => W.intl.formatToPlainString(V.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => W.intl.formatToPlainString(V.default.zeBjoX, { discountPercent: 5 }),
                    getBody: () => W.intl.formatToPlainString(V.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => W.intl.formatToPlainString(V.default.pSBCjv, { discountPercent: 5 }),
                    getBody: () => W.intl.formatToPlainString(V.default.lsRjfl, {}),
                },
            },
        },
    },
    [R.NC]: {
        getLockedPreview: () => ({
            title: W.intl.string(en.default.CwMGMb),
            body: W.intl.string(en.default.TgHy6p),
            asset: eo,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: eo,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => W.intl.string(en.default.CwMGMb),
                getBody: () => W.intl.string(en.default.TgHy6p),
                getRedeemCtaText: () => W.intl.string(en.default.KfOPbQ),
                claimButtonPlacement: X.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [R.P_]: {
        getLockedPreview: () => ({
            title: W.intl.string(ea.default.ecPCdG),
            body: W.intl.string(ea.default.evF0PO),
            asset: er,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => W.intl.string(ea.default.ecPCdG),
                getAsset: () => er,
                getBody: () => W.intl.string(ea.default.evF0PO),
                claimButtonPlacement: X.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [R.Bt]: {
        getLockedPreview: () => ({
            title: W.intl.string(ei.default.xDMrVa),
            body: W.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
            asset: (0, Z.VO)(R.Bt, J.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, Y.NJ8.DARK),
        }),
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => W.intl.string(ei.default.xDMrVa),
                getBody: () => W.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
                getAsset: (e, t) => (0, Z.VO)(R.Bt, J.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, t),
                getClaimCtaText: () => W.intl.string(et.default["lbyFG+"]),
                getRedeemCtaText: () => W.intl.string(et.default["6rwUm2"]),
                claimButtonPlacement: X.FOOTER,
            },
        },
    },
};
var em = n(831768);
function eg() {
    return (0, a.jsx)(I, {
        title: W.intl.string(em.default.oDfh3O),
        body: W.intl.string(em.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var eb = n(682901);
function ep(e, t) {
    return (0, s.v)(e[0], t[0]) && (0, s.v)(e[1], t[1]);
}
function eA(e, t, n) {
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
        [g, b] = r.useState(!1),
        A = [...s].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        E = g ? A : A.slice(0, 1),
        _ = !g && A.length > 1,
        O =
            ((t = s[0]?.partnerId ?? ""),
            (n = (0, l.bG)([P.A], () => (0, d.M)(P.A.theme))),
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
                                    ...eA(e, t, m),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: i?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: O,
                            showPartnerImage: !0,
                            claimButtonPlacement: X.FOOTER,
                            footerContent: (0, a.jsx)(G, {}),
                            analyticsLocations: [p.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            _ &&
                (0, a.jsx)(u.D, {
                    className: x.K8,
                    onClick: () => {
                        b(!0);
                    },
                    children: (0, a.jsx)(f.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: W.intl.string(W.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function eE(e) {
    let { partnerId: t } = e,
        n = ef[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(I, { title: n.title, body: n.body, asset: n.asset });
}
function e_(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: r,
            showXboxCard: l = !1,
            transitionState: s,
            onClose: d,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: f } = (0, T.y7)(),
        { analyticsLocations: g } = (0, A.Ay)(u);
    return f
        ? (0, a.jsx)(A.f5, {
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
                          children: [l && (0, a.jsx)(eg, {}), t.map((e) => (0, a.jsx)(eE, { partnerId: e }, e))],
                      }),
                      (0, a.jsx)(eO, { modalTeaser: r }),
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
        className: x.ar,
        children: [
            (0, a.jsxs)("div", {
                className: x.Uv,
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
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: r, transitionState: s, onClose: d } = e,
        u = (0, l.bG)([P.A], () => P.A.theme),
        [g, b] = (0, l.bG)(
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
                        let r = C.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            ep,
        ),
        { promotionsLoaded: A, claimedOutboundPromotionCodeMap: E } = (0, T.y7)();
    if (!A) return (0, a.jsx)(m.y, {});
    let _ = t
            .map((e) => ef[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        O = _ ? { recurring: W.intl.string(V.default["9Y2p6p"]), oneTime: W.intl.string(V.default.Wm58LR) } : void 0,
        R = (0, a.jsx)(c.B, {
            direction: "vertical",
            gap: 12,
            children: b.map((e) => {
                let t = eA(e, E[e.id] ?? null, u),
                    n = ed(ef[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
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
    return (0, a.jsx)(o.a, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: s,
        onClose: d,
        children: (0, a.jsxs)("div", {
            className: x.kL,
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
                              className: x.E7,
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
                (0, a.jsx)(eO, { modalTeaser: r }),
            ],
        }),
    });
}
function eC(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: i,
        subtitle: r,
        modalTeaser: l,
        showXboxCard: s,
        transitionState: o,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, a.jsx)(e_, {
              partnerIds: t,
              title: i,
              subtitle: r,
              modalTeaser: l,
              showXboxCard: s,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, a.jsx)(eT, { partnerIds: t, title: i, subtitle: r, modalTeaser: l, transitionState: o, onClose: d });
}
function eR(e) {
    let {
            partnerIds: t,
            isLocked: i = !1,
            title: r,
            subtitle: l,
            modalTeaser: s,
            showXboxCard: o,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = o ? [...t, "xbox"] : t;
    (E.default.track(Y.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        O.Ay.fetchActivePromotions(),
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
                        modalTeaser: s,
                        showXboxCard: o,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
