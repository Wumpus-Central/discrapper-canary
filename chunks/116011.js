n.d(t, { u5: () => L, vw: () => I, wx: () => M });
var i,
    r = n(477900),
    a = n(582128),
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
    C = n(975571),
    A = n(38405),
    h = n(264779),
    E = n(962644),
    x = n(852218),
    O = n(652215),
    v = n(334551),
    R = n(660183),
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
                children: R.intl.format(v.default["65EEvD"], { days: t }),
            }),
            (0, r.jsx)(P.Ay, {
                progress: e,
                variant: P.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function y(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: N.oP, children: (0, r.jsx)("div", { className: N.t0, children: t }) });
}
let S = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, r.jsx)(s.r, { color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
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
        setCode: a,
        setHasClaimError: l,
        className: s,
        analyticsLocations: o = [],
        onClaim: d,
        onClaimError: c,
        isClaiming: g,
    } = e;
    return n
        ? i
            ? (0, r.jsx)("div", {
                  className: s,
                  children: (0, r.jsx)(u.$, {
                      icon: m.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: R.intl.string(R.t["8LKchl"]),
                  }),
              })
            : (0, r.jsx)("div", {
                  className: s,
                  children: (0, r.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? R.intl.string(R.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, h.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: o,
                                }).then((e) => ((0, E.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && a(e);
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
        [_, A] = a.useState(t.code),
        [h, E] = a.useState(!1),
        v = null == _;
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
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
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
                                                children: h
                                                    ? R.intl.format(R.t.i2EuFO, {
                                                          helpdeskArticle: C.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : v
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? R.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, r.jsx)(g.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: R.intl.format(t.bodyNote, {
                                                        partnerName: x.CD[t.partnerId].label,
                                                        helpdeskArticle: C.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
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
                                    canBeClaimed: v,
                                    hasClaimError: h,
                                    setCode: A,
                                    setHasClaimError: E,
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
                                imageClassName: s || t.partnerId === x.XY ? N.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != _ && (0, r.jsx)(S, { recurrence: { ...t, code: _ }, analyticsLocations: u }),
            "footer" === d &&
                null == _ &&
                !1 === T &&
                (0, r.jsx)(y, {
                    children: (0, r.jsx)(j, {
                        recurrence: t,
                        canBeClaimed: v,
                        hasClaimError: h,
                        setCode: A,
                        setHasClaimError: E,
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
