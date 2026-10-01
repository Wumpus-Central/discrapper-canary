n.d(t, { u5: () => w, vw: () => _, wx: () => S });
var i,
    a = n(477900),
    r = n(582128),
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
    h = n(914410),
    x = n(174459),
    C = n(58703),
    T = n(975571),
    v = n(38405),
    j = n(264779),
    y = n(962644),
    P = n(852218),
    R = n(652215),
    O = n(334551),
    N = n(375708),
    A = n(341973);
function _() {
    let e = (0, C.N5)(),
        t = (0, C.P6)();
    return (0, a.jsxs)("div", {
        className: `${A.G9} ${A.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: A.kT,
                children: N.intl.format(O.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(h.Ay, {
                progress: e,
                variant: h.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function E(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: A.oP, children: (0, a.jsx)("div", { className: A.t0, children: t }) });
}
let L = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(o.r, { color: s.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, a.jsx)("span", {
            className: A.nP,
            children: (0, a.jsx)(d.K, {
                icon: c.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        g(i),
                        x.default.track(R.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
            className: A.oP,
            children: (0, a.jsxs)("div", {
                className: A.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: A.cD,
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
                                x.default.track(R.HAw.RECURRING_PROMOTION_CLAIMED),
                                x.default.track(R.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function I(e) {
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
        isClaiming: g,
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(u.$, {
                      icon: m.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: N.intl.string(N.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? N.intl.string(N.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, j.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
                                }).then((e) => ((0, y.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && r(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (l(!0), v.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var w = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function S(e) {
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
            isClaiming: h,
            hideClaimButton: x = !1,
        } = e,
        [C, v] = r.useState(t.code),
        [j, y] = r.useState(!1),
        O = null == C;
    return (0, a.jsxs)("div", {
        className: A.lA,
        children: [
            (0, a.jsxs)("div", {
                className: A.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: A.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${A.yO} ${n}` : A.yO,
                                children: [
                                    (0, a.jsx)(g.D, {
                                        variant: "secondary" === s ? "heading-md/semibold" : "heading-lg/semibold",
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
                                                children: j
                                                    ? N.intl.format(N.t.i2EuFO, {
                                                          helpdeskArticle: T.A.getArticleURL(R.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : O
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
                                                        partnerName: P.CD[t.partnerId].label,
                                                        helpdeskArticle: T.A.getArticleURL(R.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === x &&
                                (0, a.jsx)(I, {
                                    recurrence: t,
                                    canBeClaimed: O,
                                    hasClaimError: j,
                                    setCode: v,
                                    setHasClaimError: y,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: f,
                                    isClaiming: h,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: A.R4,
                            children: (0, a.jsx)(p._, {
                                src: t.asset ?? "",
                                className: A.Ys,
                                imageClassName: o || t.partnerId === P.XY ? A.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != C && (0, a.jsx)(L, { recurrence: { ...t, code: C }, analyticsLocations: u }),
            "footer" === d &&
                null == C &&
                !1 === x &&
                (0, a.jsx)(E, {
                    children: (0, a.jsx)(I, {
                        recurrence: t,
                        canBeClaimed: O,
                        hasClaimError: j,
                        setCode: v,
                        setHasClaimError: y,
                        className: A.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: f,
                        isClaiming: h,
                    }),
                }),
        ],
    });
}
