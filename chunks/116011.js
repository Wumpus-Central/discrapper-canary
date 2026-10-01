n.d(t, { u5: () => x, vw: () => M, wx: () => k });
var i,
    l = n(477900),
    r = n(582128),
    s = n(834730),
    a = n(947641),
    o = n(661531),
    c = n(408278),
    E = n(624479),
    u = n(821609),
    d = n(695366),
    _ = n(194261),
    A = n(297264),
    T = n(331322),
    I = n(144165),
    N = n(914410),
    R = n(174459),
    C = n(58703),
    O = n(975571),
    m = n(38405),
    S = n(264779),
    f = n(962644),
    p = n(852218),
    D = n(652215),
    g = n(334551),
    P = n(375708),
    h = n(341973);
function M() {
    let e = (0, C.N5)(),
        t = (0, C.P6)();
    return (0, l.jsxs)("div", {
        className: `${h.G9} ${h.sQ}`,
        children: [
            (0, l.jsx)(s.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: h.kT,
                children: P.intl.format(g.default["65EEvD"], { days: t }),
            }),
            (0, l.jsx)(N.Ay, {
                progress: e,
                variant: N.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function U(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: h.oP, children: (0, l.jsx)("div", { className: h.t0, children: t }) });
}
let y = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, l.jsx)(a.r, { color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        d = (0, l.jsx)("span", {
            className: h.nP,
            children: (0, l.jsx)(c.K, {
                icon: E.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        A(i),
                        R.default.track(D.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [_, A] = r.useState(() => d);
    if (null != t.code)
        return (0, l.jsx)("div", {
            className: h.oP,
            children: (0, l.jsxs)("div", {
                className: h.t0,
                children: [
                    (0, l.jsx)("div", {
                        className: h.cD,
                        children: (0, l.jsx)(s.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    _,
                    (0, l.jsx)(u.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            P.intl.formatToPlainString(P.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                R.default.track(D.HAw.RECURRING_PROMOTION_CLAIMED),
                                R.default.track(D.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function L(e) {
    let {
        recurrence: t,
        canBeClaimed: n,
        hasClaimError: i,
        setCode: r,
        setHasClaimError: s,
        className: a,
        analyticsLocations: o = [],
        onClaim: c,
        onClaimError: E,
        isClaiming: A,
    } = e;
    return n
        ? i
            ? (0, l.jsx)("div", {
                  className: a,
                  children: (0, l.jsx)(u.$, {
                      icon: d.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: P.intl.string(P.t["8LKchl"]),
                  }),
              })
            : (0, l.jsx)("div", {
                  className: a,
                  children: (0, l.jsx)(u.$, {
                      icon: _.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? P.intl.string(P.t.vwASIl),
                      loading: A,
                      onClick: () => {
                          (null != c
                              ? c()
                              : (0, S.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: o,
                                }).then((e) => ((0, f.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && r(e);
                              })
                              .catch((e) => {
                                  !1 === (null != E && E(e)) && (s(!0), m.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var x = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function k(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: s = !1,
            roundPromotionImage: a = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: c = "inline",
            footerContent: E,
            analyticsLocations: u = [],
            onClaim: d,
            onClaimError: _,
            isClaiming: N,
        } = e,
        [R, C] = r.useState(t.code),
        [m, S] = r.useState(!1),
        f = null == R;
    return (0, l.jsxs)("div", {
        className: h.lA,
        children: [
            (0, l.jsxs)("div", {
                className: h.LV,
                children: [
                    (0, l.jsxs)("div", {
                        className: h.JN,
                        children: [
                            i,
                            (0, l.jsxs)("div", {
                                className: null != n ? `${h.yO} ${n}` : h.yO,
                                children: [
                                    (0, l.jsx)(A.D, {
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, l.jsxs)(T.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, l.jsx)(A.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: m
                                                    ? P.intl.format(P.t.i2EuFO, {
                                                          helpdeskArticle: O.A.getArticleURL(D.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : f
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? P.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, l.jsx)(A.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: P.intl.format(t.bodyNote, {
                                                        partnerName: p.CD[t.partnerId].label,
                                                        helpdeskArticle: O.A.getArticleURL(D.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === c &&
                                (0, l.jsx)(L, {
                                    recurrence: t,
                                    canBeClaimed: f,
                                    hasClaimError: m,
                                    setCode: C,
                                    setHasClaimError: S,
                                    analyticsLocations: u,
                                    onClaim: d,
                                    onClaimError: _,
                                    isClaiming: N,
                                }),
                        ],
                    }),
                    s &&
                        (0, l.jsx)("div", {
                            className: h.R4,
                            children: (0, l.jsx)(I._, {
                                src: t.asset ?? "",
                                className: h.Ys,
                                imageClassName: a || t.partnerId === p.XY ? h.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === c && E,
            null != R && (0, l.jsx)(y, { recurrence: { ...t, code: R }, analyticsLocations: u }),
            "footer" === c &&
                null == R &&
                (0, l.jsx)(U, {
                    children: (0, l.jsx)(L, {
                        recurrence: t,
                        canBeClaimed: f,
                        hasClaimError: m,
                        setCode: C,
                        setHasClaimError: S,
                        className: h.qx,
                        analyticsLocations: u,
                        onClaim: d,
                        onClaimError: _,
                        isClaiming: N,
                    }),
                }),
        ],
    });
}
