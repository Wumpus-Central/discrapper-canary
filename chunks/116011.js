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
    T = n(174459),
    _ = n(58703),
    E = n(975571),
    A = n(38405),
    C = n(264779),
    h = n(962644),
    x = n(852218),
    O = n(652215),
    v = n(334551),
    R = n(105292),
    N = n(341973);
function I() {
    let e = (0, _.N5)(),
        t = (0, _.P6)();
    return (0, a.jsxs)("div", {
        className: `${N.G9} ${N.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: N.kT,
                children: R.intl.format(v.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(P.Ay, {
                progress: e,
                variant: P.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function S(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: N.oP, children: (0, a.jsx)("div", { className: N.t0, children: t }) });
}
let y = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(s.r, { color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, a.jsx)("span", {
            className: N.nP,
            children: (0, a.jsx)(d.K, {
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
        [f, g] = r.useState(() => m);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: N.oP,
            children: (0, a.jsxs)("div", {
                className: N.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: N.cD,
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
                            R.intl.formatToPlainString(R.t.DF68t7, { redemptionURL: t.redemptionURL }),
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
                      text: R.intl.string(R.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: s,
                  children: (0, a.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? R.intl.string(R.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, C.kd)({
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
            hideClaimButton: T = !1,
        } = e,
        [_, A] = r.useState(t.code),
        [C, h] = r.useState(!1),
        v = null == _;
    return (0, a.jsxs)("div", {
        className: N.lA,
        children: [
            (0, a.jsxs)("div", {
                className: N.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${N.yO} ${n}` : N.yO,
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
                                                children: C
                                                    ? R.intl.format(R.t.i2EuFO, {
                                                          helpdeskArticle: E.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : v
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? R.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(g.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: R.intl.format(t.bodyNote, {
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
                                (0, a.jsx)(j, {
                                    recurrence: t,
                                    canBeClaimed: v,
                                    hasClaimError: C,
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
                            className: N.R4,
                            children: (0, a.jsx)(p._, {
                                src: t.asset ?? "",
                                className: N.Ys,
                                imageClassName: s || t.partnerId === x.XY ? N.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != _ && (0, a.jsx)(y, { recurrence: { ...t, code: _ }, analyticsLocations: u }),
            "footer" === d &&
                null == _ &&
                !1 === T &&
                (0, a.jsx)(S, {
                    children: (0, a.jsx)(j, {
                        recurrence: t,
                        canBeClaimed: v,
                        hasClaimError: C,
                        setCode: A,
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
