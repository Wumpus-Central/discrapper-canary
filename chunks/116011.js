n.d(t, { u5: () => L, vw: () => I, wx: () => M });
var i,
    a = n(477900),
    r = n(582128),
    l = n(834730),
    s = n(947641),
    o = n(661531),
    d = n(408278),
    c = n(624479),
    u = n(821609),
    m = n(695366),
    f = n(194261),
    g = n(297264),
    b = n(331322),
    p = n(144165),
    P = n(914410),
    _ = n(174459),
    T = n(58703),
    C = n(975571),
    A = n(38405),
    E = n(264779),
    h = n(962644),
    x = n(852218),
    O = n(652215),
    v = n(334551),
    N = n(660183),
    R = n(341973);
function I() {
    let e = (0, T.N5)(),
        t = (0, T.P6)();
    return (0, a.jsxs)("div", {
        className: `${R.G9} ${R.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: R.kT,
                children: N.intl.format(v.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(P.Ay, {
                progress: e,
                variant: P.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function y(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: R.oP, children: (0, a.jsx)("div", { className: R.t0, children: t }) });
}
let S = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(s.r, { color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, a.jsx)("span", {
            className: R.nP,
            children: (0, a.jsx)(d.K, {
                icon: c.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        g(i),
                        _.default.track(O.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [f, g] = r.useState(() => m);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: R.oP,
            children: (0, a.jsxs)("div", {
                className: R.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: R.cD,
                        children: (0, a.jsx)(l.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    f,
                    (0, a.jsx)(u.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            N.intl.formatToPlainString(N.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                _.default.track(O.HAw.RECURRING_PROMOTION_CLAIMED),
                                _.default.track(O.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function j(e) {
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
        isClaiming: g,
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: s,
                  children: (0, a.jsx)(u.$, {
                      icon: m.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: N.intl.string(N.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: s,
                  children: (0, a.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? N.intl.string(N.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, E.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: o,
                                }).then((e) => ((0, h.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && r(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (l(!0), A.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var L = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function M(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: l = !1,
            roundPromotionImage: s = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: c,
            analyticsLocations: u = [],
            onClaim: m,
            onClaimError: f,
            isClaiming: P,
            hideClaimButton: _ = !1,
        } = e,
        [T, A] = r.useState(t.code),
        [E, h] = r.useState(!1),
        v = null == T;
    return (0, a.jsxs)("div", {
        className: R.lA,
        children: [
            (0, a.jsxs)("div", {
                className: R.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: R.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${R.yO} ${n}` : R.yO,
                                children: [
                                    (0, a.jsx)(g.D, {
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(b.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(g.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: E
                                                    ? N.intl.format(N.t.i2EuFO, {
                                                          helpdeskArticle: C.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : v
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? N.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(g.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: N.intl.format(t.bodyNote, {
                                                        partnerName: x.CD[t.partnerId].label,
                                                        helpdeskArticle: C.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === _ &&
                                (0, a.jsx)(j, {
                                    recurrence: t,
                                    canBeClaimed: v,
                                    hasClaimError: E,
                                    setCode: A,
                                    setHasClaimError: h,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: f,
                                    isClaiming: P,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: R.R4,
                            children: (0, a.jsx)(p._, {
                                src: t.asset ?? "",
                                className: R.Ys,
                                imageClassName: s || t.partnerId === x.XY ? R.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != T && (0, a.jsx)(S, { recurrence: { ...t, code: T }, analyticsLocations: u }),
            "footer" === d &&
                null == T &&
                !1 === _ &&
                (0, a.jsx)(y, {
                    children: (0, a.jsx)(j, {
                        recurrence: t,
                        canBeClaimed: v,
                        hasClaimError: E,
                        setCode: A,
                        setHasClaimError: h,
                        className: R.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: f,
                        isClaiming: P,
                    }),
                }),
        ],
    });
}
