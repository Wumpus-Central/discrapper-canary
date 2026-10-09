n.d(t, { u5: () => L, vw: () => _, wx: () => w });
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
    g = n(194261),
    f = n(297264),
    b = n(331322),
    p = n(144165),
    C = n(914410),
    h = n(174459),
    T = n(58703),
    x = n(975571),
    P = n(38405),
    v = n(264779),
    y = n(962644),
    j = n(852218),
    E = n(652215),
    O = n(334551),
    R = n(660183),
    N = n(341973);
function _() {
    let e = (0, T.N5)(),
        t = (0, T.P6)();
    return (0, a.jsxs)("div", {
        className: `${N.G9} ${N.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: N.kT,
                children: R.intl.format(O.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(C.Ay, {
                progress: e,
                variant: C.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function A(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: N.oP, children: (0, a.jsx)("div", { className: N.t0, children: t }) });
}
let I = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(o.r, { color: s.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        m = (0, a.jsx)("span", {
            className: N.nP,
            children: (0, a.jsx)(d.K, {
                icon: c.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        f(i),
                        h.default.track(E.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [g, f] = r.useState(() => m);
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
                    g,
                    (0, a.jsx)(u.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            R.intl.formatToPlainString(R.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                h.default.track(E.HAw.RECURRING_PROMOTION_CLAIMED),
                                h.default.track(E.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function S(e) {
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
        isClaiming: f,
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
                      text: R.intl.string(R.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(u.$, {
                      icon: g.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? R.intl.string(R.t.vwASIl),
                      loading: f,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, v.kd)({
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
                                  !1 === (null != c && c(e)) && (l(!0), P.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var L = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
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
            onClaimError: g,
            isClaiming: C,
            hideClaimButton: h = !1,
        } = e,
        [T, P] = r.useState(t.code),
        [v, y] = r.useState(!1),
        O = null == T;
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
                                    (0, a.jsx)(f.D, {
                                        variant: "secondary" === s ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(b.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(f.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: v
                                                    ? R.intl.format(R.t.i2EuFO, {
                                                          helpdeskArticle: x.A.getArticleURL(E.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : O
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? R.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(f.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: R.intl.format(t.bodyNote, {
                                                        partnerName: j.CD[t.partnerId].label,
                                                        helpdeskArticle: x.A.getArticleURL(E.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === h &&
                                (0, a.jsx)(S, {
                                    recurrence: t,
                                    canBeClaimed: O,
                                    hasClaimError: v,
                                    setCode: P,
                                    setHasClaimError: y,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: g,
                                    isClaiming: C,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: N.R4,
                            children: (0, a.jsx)(p._, {
                                src: t.asset ?? "",
                                className: N.Ys,
                                imageClassName: o || t.partnerId === j.XY ? N.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != T && (0, a.jsx)(I, { recurrence: { ...t, code: T }, analyticsLocations: u }),
            "footer" === d &&
                null == T &&
                !1 === h &&
                (0, a.jsx)(A, {
                    children: (0, a.jsx)(S, {
                        recurrence: t,
                        canBeClaimed: O,
                        hasClaimError: v,
                        setCode: P,
                        setHasClaimError: y,
                        className: N.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: g,
                        isClaiming: C,
                    }),
                }),
        ],
    });
}
