n.d(t, { u5: () => L, vw: () => I, wx: () => M });
var i,
    r = n(477900),
    a = n(582128),
    l = n(834730),
    o = n(947641),
    s = n(661531),
    d = n(408278),
    c = n(624479),
    u = n(821609),
    m = n(695366),
    f = n(194261),
    g = n(297264),
    b = n(331322),
    p = n(144165),
    P = n(914410),
    T = n(174459),
    _ = n(58703),
    E = n(975571),
    C = n(38405),
    A = n(264779),
    h = n(962644),
    x = n(852218),
    O = n(652215),
    R = n(334551),
    v = n(105292),
    N = n(341973);
function I() {
    let e = (0, _.N5)(),
        t = (0, _.P6)();
    return (0, r.jsxs)("div", {
        className: `${N.G9} ${N.sQ}`,
        children: [
            (0, r.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: N.kT,
                children: v.intl.format(R.default["65EEvD"], { days: t }),
            }),
            (0, r.jsx)(P.Ay, {
                progress: e,
                variant: P.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: N.oP, children: (0, r.jsx)("div", { className: N.t0, children: t }) });
}
let y = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, r.jsx)(o.r, { color: s.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, r.jsx)("span", {
            className: N.nP,
            children: (0, r.jsx)(d.K, {
                icon: c.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        g(i),
                        T.default.track(O.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [f, g] = a.useState(() => m);
    if (null != t.code)
        return (0, r.jsx)("div", {
            className: N.oP,
            children: (0, r.jsxs)("div", {
                className: N.t0,
                children: [
                    (0, r.jsx)("div", {
                        className: N.cD,
                        children: (0, r.jsx)(l.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    f,
                    (0, r.jsx)(u.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            v.intl.formatToPlainString(v.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                T.default.track(O.HAw.RECURRING_PROMOTION_CLAIMED),
                                T.default.track(O.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
        setCode: a,
        setHasClaimError: l,
        className: o,
        analyticsLocations: s = [],
        onClaim: d,
        onClaimError: c,
        isClaiming: g,
    } = e;
    return n
        ? i
            ? (0, r.jsx)("div", {
                  className: o,
                  children: (0, r.jsx)(u.$, {
                      icon: m.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: v.intl.string(v.t["8LKchl"]),
                  }),
              })
            : (0, r.jsx)("div", {
                  className: o,
                  children: (0, r.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? v.intl.string(v.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, A.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
                                }).then((e) => ((0, h.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && a(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (l(!0), C.A.captureException(e));
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
            roundPromotionImage: o = !1,
            titleVariant: s = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: c,
            analyticsLocations: u = [],
            onClaim: m,
            onClaimError: f,
            isClaiming: P,
            hideClaimButton: T = !1,
        } = e,
        [_, C] = a.useState(t.code),
        [A, h] = a.useState(!1),
        R = null == _;
    return (0, r.jsxs)("div", {
        className: N.lA,
        children: [
            (0, r.jsxs)("div", {
                className: N.LV,
                children: [
                    (0, r.jsxs)("div", {
                        className: N.JN,
                        children: [
                            i,
                            (0, r.jsxs)("div", {
                                className: null != n ? `${N.yO} ${n}` : N.yO,
                                children: [
                                    (0, r.jsx)(g.D, {
                                        variant: "secondary" === s ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, r.jsxs)(b.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(g.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: A
                                                    ? v.intl.format(v.t.i2EuFO, {
                                                          helpdeskArticle: E.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : R
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? v.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, r.jsx)(g.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: v.intl.format(t.bodyNote, {
                                                        partnerName: x.CD[t.partnerId].label,
                                                        helpdeskArticle: E.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === T &&
                                (0, r.jsx)(j, {
                                    recurrence: t,
                                    canBeClaimed: R,
                                    hasClaimError: A,
                                    setCode: C,
                                    setHasClaimError: h,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: f,
                                    isClaiming: P,
                                }),
                        ],
                    }),
                    l &&
                        (0, r.jsx)("div", {
                            className: N.R4,
                            children: (0, r.jsx)(p._, {
                                src: t.asset ?? "",
                                className: N.Ys,
                                imageClassName: o || t.partnerId === x.XY ? N.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != _ && (0, r.jsx)(y, { recurrence: { ...t, code: _ }, analyticsLocations: u }),
            "footer" === d &&
                null == _ &&
                !1 === T &&
                (0, r.jsx)(S, {
                    children: (0, r.jsx)(j, {
                        recurrence: t,
                        canBeClaimed: R,
                        hasClaimError: A,
                        setCode: C,
                        setHasClaimError: h,
                        className: N.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: f,
                        isClaiming: P,
                    }),
                }),
        ],
    });
}
