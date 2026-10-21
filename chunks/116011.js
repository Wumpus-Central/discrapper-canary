n.d(t, { u5: () => j, vw: () => I, wx: () => U });
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
    A = n(914410),
    P = n(174459),
    E = n(58703),
    C = n(975571),
    T = n(38405),
    _ = n(264779),
    O = n(962644),
    R = n(852218),
    v = n(652215),
    h = n(334551),
    N = n(105292),
    x = n(341973);
function I() {
    let e = (0, E.N5)(),
        t = (0, E.P6)();
    return (0, a.jsxs)("div", {
        className: `${x.G9} ${x.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: x.kT,
                children: N.intl.format(h.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(A.Ay, {
                progress: e,
                variant: A.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function y(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: x.oP, children: (0, a.jsx)("div", { className: x.t0, children: t }) });
}
let L = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(s.r, { color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, a.jsx)("span", {
            className: x.nP,
            children: (0, a.jsx)(d.K, {
                icon: c.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        g(i),
                        P.default.track(v.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
            className: x.oP,
            children: (0, a.jsxs)("div", {
                className: x.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: x.cD,
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
                                P.default.track(v.HAw.RECURRING_PROMOTION_CLAIMED),
                                P.default.track(v.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function M(e) {
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
                              : (0, _.kd)({
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
                                  !1 === (null != c && c(e)) && (l(!0), T.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var j = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function U(e) {
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
            isClaiming: A,
            hideClaimButton: P = !1,
        } = e,
        [E, T] = r.useState(t.code),
        [_, O] = r.useState(!1),
        h = null == E;
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
                                                children: _
                                                    ? N.intl.format(N.t.i2EuFO, {
                                                          helpdeskArticle: C.A.getArticleURL(v.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : h
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
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: C.A.getArticleURL(v.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === P &&
                                (0, a.jsx)(M, {
                                    recurrence: t,
                                    canBeClaimed: h,
                                    hasClaimError: _,
                                    setCode: T,
                                    setHasClaimError: O,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: f,
                                    isClaiming: A,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: x.R4,
                            children: (0, a.jsx)(p._, {
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
            "footer" === d && c,
            null != E && (0, a.jsx)(L, { recurrence: { ...t, code: E }, analyticsLocations: u }),
            "footer" === d &&
                null == E &&
                !1 === P &&
                (0, a.jsx)(y, {
                    children: (0, a.jsx)(M, {
                        recurrence: t,
                        canBeClaimed: h,
                        hasClaimError: _,
                        setCode: T,
                        setHasClaimError: O,
                        className: x.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: f,
                        isClaiming: A,
                    }),
                }),
        ],
    });
}
