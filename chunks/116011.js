n.d(t, { u5: () => L, vw: () => y, wx: () => U });
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
    T = n(914410),
    C = n(174459),
    P = n(58703),
    _ = n(975571),
    h = n(38405),
    A = n(264779),
    E = n(962644),
    x = n(852218),
    v = n(652215),
    O = n(334551),
    R = n(660183),
    N = n(341973);
function y() {
    let e = (0, P.N5)(),
        t = (0, P.P6)();
    return (0, a.jsxs)("div", {
        className: `${N.G9} ${N.sQ}`,
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: N.kT,
                children: R.intl.format(O.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(T.Ay, {
                progress: e,
                variant: T.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function I(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: N.oP, children: (0, a.jsx)("div", { className: N.t0, children: t }) });
}
let S = (e) => {
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
                        g(i),
                        C.default.track(v.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                                C.default.track(v.HAw.RECURRING_PROMOTION_CLAIMED),
                                C.default.track(v.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                      text: R.intl.string(R.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(u.$, {
                      icon: f.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? R.intl.string(R.t.vwASIl),
                      loading: g,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, A.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
                                }).then((e) => ((0, E.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && r(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (l(!0), h.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var L = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function U(e) {
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
            isClaiming: T,
            hideClaimButton: C = !1,
        } = e,
        [P, h] = r.useState(t.code),
        [A, E] = r.useState(!1),
        O = null == P;
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
                                                children: A
                                                    ? R.intl.format(R.t.i2EuFO, {
                                                          helpdeskArticle: _.A.getArticleURL(v.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : O
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
                                                        helpdeskArticle: _.A.getArticleURL(v.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === C &&
                                (0, a.jsx)(j, {
                                    recurrence: t,
                                    canBeClaimed: O,
                                    hasClaimError: A,
                                    setCode: h,
                                    setHasClaimError: E,
                                    analyticsLocations: u,
                                    onClaim: m,
                                    onClaimError: f,
                                    isClaiming: T,
                                }),
                        ],
                    }),
                    l &&
                        (0, a.jsx)("div", {
                            className: N.R4,
                            children: (0, a.jsx)(p._, {
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
            null != P && (0, a.jsx)(S, { recurrence: { ...t, code: P }, analyticsLocations: u }),
            "footer" === d &&
                null == P &&
                !1 === C &&
                (0, a.jsx)(I, {
                    children: (0, a.jsx)(j, {
                        recurrence: t,
                        canBeClaimed: O,
                        hasClaimError: A,
                        setCode: h,
                        setHasClaimError: E,
                        className: N.qx,
                        analyticsLocations: u,
                        onClaim: m,
                        onClaimError: f,
                        isClaiming: T,
                    }),
                }),
        ],
    });
}
