n.d(t, { u5: () => S, vw: () => I, wx: () => w });
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
    C = n(914410),
    h = n(174459),
    T = n(58703),
    x = n(975571),
    v = n(38405),
    P = n(264779),
    j = n(962644),
    y = n(852218),
    R = n(652215),
    E = n(334551),
    O = n(375708),
    _ = n(341973);
function I() {
    let e = (0, T.N5)(),
        t = (0, T.P6)();
    return (0, a.jsxs)("div", {
        className: `${_.G9} ${_.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: _.kT,
                children: O.intl.format(E.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(C.Ay, {
                progress: e,
                variant: C.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function N(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: _.oP, children: (0, a.jsx)("div", { className: _.t0, children: t }) });
}
let A = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(o.r, { color: s.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, a.jsx)("span", {
            className: _.nP,
            children: (0, a.jsx)(d.K, {
                icon: c.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        g(i),
                        h.default.track(R.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
            className: _.oP,
            children: (0, a.jsxs)("div", {
                className: _.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: _.cD,
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
                            O.intl.formatToPlainString(O.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                h.default.track(R.HAw.RECURRING_PROMOTION_CLAIMED),
                                h.default.track(R.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                      text: O.intl.string(O.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? O.intl.string(O.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, P.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
                                }).then((e) => ((0, j.LI)(e), e.code))
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
var S = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function w(e) {
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
            isClaiming: C,
            hideClaimButton: h = !1,
        } = e,
        [T, v] = r.useState(t.code),
        [P, j] = r.useState(!1),
        E = null == T;
    return (0, a.jsxs)("div", {
        className: _.lA,
        children: [
            (0, a.jsxs)("div", {
                className: _.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: _.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${_.yO} ${n}` : _.yO,
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
                                                children: P
                                                    ? O.intl.format(O.t.i2EuFO, {
                                                          helpdeskArticle: x.A.getArticleURL(R.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : E
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? O.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(g.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: O.intl.format(t.bodyNote, {
                                                        partnerName: y.CD[t.partnerId].label,
                                                        helpdeskArticle: x.A.getArticleURL(R.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === h &&
                                (0, a.jsx)(L, {
                                    recurrence: t,
                                    canBeClaimed: E,
                                    hasClaimError: P,
                                    setCode: v,
                                    setHasClaimError: j,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: f,
                                    isClaiming: C,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: _.R4,
                            children: (0, a.jsx)(p._, {
                                src: t.asset ?? "",
                                className: _.Ys,
                                imageClassName: o || t.partnerId === y.XY ? _.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != T && (0, a.jsx)(A, { recurrence: { ...t, code: T }, analyticsLocations: u }),
            "footer" === d &&
                null == T &&
                !1 === h &&
                (0, a.jsx)(N, {
                    children: (0, a.jsx)(L, {
                        recurrence: t,
                        canBeClaimed: E,
                        hasClaimError: P,
                        setCode: v,
                        setHasClaimError: j,
                        className: _.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: f,
                        isClaiming: C,
                    }),
                }),
        ],
    });
}
