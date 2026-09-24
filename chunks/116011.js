n.d(t, { u5: () => U, vw: () => j, wx: () => S });
var i,
    a = n(477900),
    r = n(582128),
    s = n(834730),
    l = n(947641),
    o = n(408278),
    d = n(624479),
    c = n(821609),
    u = n(695366),
    m = n(194261),
    p = n(297264),
    b = n(331322),
    f = n(661531),
    g = n(144165),
    h = n(914410),
    x = n(174459),
    v = n(58703),
    _ = n(975571),
    C = n(38405),
    P = n(264779),
    T = n(962644),
    R = n(852218),
    A = n(652215),
    y = n(334551),
    E = n(375708),
    N = n(341973);
function j() {
    let e = (0, v.N5)(),
        t = (0, v.P6)();
    return (0, a.jsxs)("div", {
        className: `${N.G9} ${N.sQ}`,
        children: [
            (0, a.jsx)(s.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: N.kT,
                children: E.intl.format(y.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(h.Ay, {
                progress: e,
                variant: h.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function I(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: N.oP, children: (0, a.jsx)("div", { className: N.t0, children: t }) });
}
let O = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(l.r, { color: f.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        u = (0, a.jsx)("span", {
            className: N.nP,
            children: (0, a.jsx)(o.K, {
                icon: d.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        p(i),
                        x.default.track(A.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [m, p] = r.useState(() => u);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: N.oP,
            children: (0, a.jsxs)("div", {
                className: N.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: N.cD,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    m,
                    (0, a.jsx)(c.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            E.intl.formatToPlainString(E.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                x.default.track(A.HAw.RECURRING_PROMOTION_CLAIMED),
                                x.default.track(A.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
        setHasClaimError: s,
        className: l,
        analyticsLocations: o = [],
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(c.$, {
                      icon: u.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: E.intl.string(E.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(c.$, {
                      icon: m.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? E.intl.string(E.t.vwASIl),
                      onClick: () => {
                          (0, P.kd)({
                              promotionId: t.id,
                              promotionTitle: t.outboundTitle,
                              partnerId: t.partnerId,
                              analyticsLocations: o,
                          })
                              .then((e) => {
                                  ((0, T.LI)(e), r(e.code));
                              })
                              .catch((e) => {
                                  (s(!0), C.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var U = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function S(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: s = !1,
            roundPromotionImage: l = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: c,
            analyticsLocations: u = [],
        } = e,
        [m, f] = r.useState(t.code),
        [h, x] = r.useState(!1),
        v = null == m;
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
                                    (0, a.jsx)(p.D, {
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(b.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(p.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: h
                                                    ? E.intl.format(E.t.i2EuFO, {
                                                          helpdeskArticle: _.A.getArticleURL(A.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : v
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? E.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(p.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: E.intl.format(t.bodyNote, {
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: _.A.getArticleURL(A.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                (0, a.jsx)(L, {
                                    recurrence: t,
                                    canBeClaimed: v,
                                    hasClaimError: h,
                                    setCode: f,
                                    setHasClaimError: x,
                                    analyticsLocations: u,
                                }),
                        ],
                    }),
                    s &&
                        (0, a.jsx)("div", {
                            className: N.R4,
                            children: (0, a.jsx)(g._, {
                                src: t.asset ?? "",
                                className: N.Ys,
                                imageClassName: l || t.partnerId === R.XY ? N.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != m && (0, a.jsx)(O, { recurrence: { ...t, code: m }, analyticsLocations: u }),
            "footer" === d &&
                null == m &&
                (0, a.jsx)(I, {
                    children: (0, a.jsx)(L, {
                        recurrence: t,
                        canBeClaimed: v,
                        hasClaimError: h,
                        setCode: f,
                        setHasClaimError: x,
                        className: N.qx,
                        analyticsLocations: u,
                    }),
                }),
        ],
    });
}
