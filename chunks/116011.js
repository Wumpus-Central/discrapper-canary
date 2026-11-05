var i,
    a = n(477900),
    r = n(582128),
    l = n(834730),
    o = n(947641),
    s = n(646514),
    d = n(408278),
    c = n(624479),
    u = n(821609),
    m = n(695366),
    f = n(194261),
    g = n(534514),
    b = n(331322),
    p = n(251843),
    A = n(914410),
    P = n(129230),
    E = n(5377),
    C = n(975571),
    T = n(856383),
    _ = n(264779),
    O = n(158476),
    R = n(852218),
    h = n(652215),
    v = n(691450),
    N = n(792996),
    x = n(341973);
function I(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: x.oP, children: (0, a.jsx)("div", { className: x.t0, children: t }) });
}
let y = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(o.CheckmarkLargeBoldIcon, { color: s.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
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
                        P.default.track(h.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                            variant: "body-md/medium",
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
                                P.default.track(h.HAw.RECURRING_PROMOTION_CLAIMED),
                                P.default.track(h.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                      icon: m.CircleErrorIcon,
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
                              : (0, _.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
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
var M = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
n.d(
    t,
    {},
    {
        u5: M,
        vw: function () {
            let e = (0, E.N5)(),
                t = (0, E.P6)();
            return (0, a.jsxs)("div", {
                className: `${x.G9} ${x.sQ}`,
                children: [
                    (0, a.jsx)(l.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: x.kT,
                        children: N.intl.format(v.default["65EEvD"], { days: t }),
                    }),
                    (0, a.jsx)(A.Ay, {
                        progress: e,
                        variant: A.qP.UNSET,
                        override: {
                            default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" },
                        },
                    }),
                ],
            });
        },
        wx: function (e) {
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
                    isClaiming: A,
                    hideClaimButton: P = !1,
                } = e,
                [E, T] = r.useState(t.code),
                [_, O] = r.useState(!1),
                v = null == E;
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
                                                variant:
                                                    "secondary" === s ? "heading-sm/semibold" : "heading-lg/semibold",
                                                color: "text-strong",
                                                children: t.title,
                                            }),
                                            (0, a.jsxs)(b.B, {
                                                direction: "vertical",
                                                gap: 8,
                                                children: [
                                                    (0, a.jsx)(g.D, {
                                                        variant: "heading-xs/medium",
                                                        color: "text-subtle",
                                                        children: _
                                                            ? N.intl.format(N.t.i2EuFO, {
                                                                  helpdeskArticle: C.A.getArticleURL(
                                                                      h.MVz.RECURRING_PROMOTION,
                                                                  ),
                                                              })
                                                            : v
                                                              ? t.body
                                                              : null != t.bodyClaimed
                                                                ? N.intl.format(t.bodyClaimed, { date: t.endDate })
                                                                : t.body,
                                                    }),
                                                    null != t.bodyNote &&
                                                        (0, a.jsx)(g.D, {
                                                            variant: "heading-xs/medium",
                                                            color: "text-subtle",
                                                            children: N.intl.format(t.bodyNote, {
                                                                partnerName: R.CD[t.partnerId].label,
                                                                helpdeskArticle: C.A.getArticleURL(
                                                                    h.MVz.RECURRING_PROMOTION,
                                                                ),
                                                            }),
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    "inline" === d &&
                                        !1 === P &&
                                        (0, a.jsx)(L, {
                                            recurrence: t,
                                            canBeClaimed: v,
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
                                        imageClassName: o || t.partnerId === R.XY ? x.Cy : void 0,
                                        width: 100,
                                        height: 100,
                                        zoomable: !1,
                                    }),
                                }),
                        ],
                    }),
                    "footer" === d && c,
                    null != E && (0, a.jsx)(y, { recurrence: { ...t, code: E }, analyticsLocations: u }),
                    "footer" === d &&
                        null == E &&
                        !1 === P &&
                        (0, a.jsx)(I, {
                            children: (0, a.jsx)(L, {
                                recurrence: t,
                                canBeClaimed: v,
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
        },
    },
);
