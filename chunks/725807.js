"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(862482),
    c = n(930861),
    d = n(403581),
    _ = n(531685),
    f = n(783420),
    p = n(245383),
    h = n(788868),
    E = n(497566);
let m = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            size: s,
            className: m,
            textOptions: g,
            iconClassName: A,
            postSuccessGuild: I,
            onSubscribeModalClose: T,
            premiumModalAnalyticsLocation: S,
            showIcon: y = !0,
            disableShine: N,
            applicationId: v,
            shinyButtonClassName: C,
            showGradient: O = !1,
            confirmationFooter: R,
            color: b,
            iconColor: D = "currentColor",
            ...L
        } = e,
        w = (0, o.bG)([_.A], () => _.A.isFocused()),
        M = (0, p.A)({
            subscriptionTier: t,
            buttonTextOverride: g?.textOverride,
            defaultTextOverride: g?.subscribeText,
        }),
        P = b ?? (t === h.pe.TIER_1 ? u.$n.Colors.PRIMARY : u.$n.Colors.GREEN),
        x = (0, r.jsxs)(c.wL, {
            "data-migration-pending": !0,
            disabled: M.disabled,
            innerClassName: E.UO,
            color: P,
            size: s,
            className: C,
            wrapperClassName: a()({ [E.PJ]: O && t === h.pe.TIER_2, [E.Up]: O && t === h.pe.TIER_1 }, m),
            buttonShineClassName:
                "buttonShineClassName" in L ? L.buttonShineClassName : P === u.XD.BRAND_INVERTED ? E.nz : void 0,
            pauseAnimation: !w || N,
            ...L,
            children: [
                y && (0, r.jsx)(d.t, { size: "md", color: D, className: a()(E.PC, A) }),
                (0, r.jsx)("span", { className: a()(E._d, g?.textClassName), children: M.buttonText }),
            ],
        });
    return (0, r.jsx)(f.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: I,
        onSubscribeModalClose: T,
        premiumModalAnalyticsLocation: S,
        applicationId: v,
        confirmationFooter: R,
        children: (e) => {
            let { onClick: t } = e,
                n = i.cloneElement(x, { onClick: t });
            return null != M.buttonTooltipText ? (0, r.jsx)(l.m, { text: M.buttonTooltipText, children: n }) : n;
        },
    });
};
