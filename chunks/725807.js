"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(862482),
    d = n(930861),
    c = n(403581),
    _ = n(531685),
    f = n(783420),
    E = n(245383),
    h = n(788868),
    p = n(497566);
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
            applicationId: O,
            shinyButtonClassName: R,
            showGradient: v = !1,
            confirmationFooter: C,
            color: b,
            iconColor: D = "currentColor",
            ...L
        } = e,
        w = (0, o.bG)([_.A], () => _.A.isFocused()),
        M = (0, E.A)({
            subscriptionTier: t,
            buttonTextOverride: g?.textOverride,
            defaultTextOverride: g?.subscribeText,
        }),
        P = b ?? (t === h.pe.TIER_1 ? u.$n.Colors.PRIMARY : u.$n.Colors.GREEN),
        U = (0, r.jsxs)(d.wL, {
            "data-migration-pending": !0,
            disabled: M.disabled,
            innerClassName: p.UO,
            color: P,
            size: s,
            className: R,
            wrapperClassName: a()({ [p.PJ]: v && t === h.pe.TIER_2, [p.Up]: v && t === h.pe.TIER_1 }, m),
            buttonShineClassName:
                "buttonShineClassName" in L ? L.buttonShineClassName : P === u.XD.BRAND_INVERTED ? p.nz : void 0,
            pauseAnimation: !w || N,
            ...L,
            children: [
                y && (0, r.jsx)(c.t, { size: "md", color: D, className: a()(p.PC, A) }),
                (0, r.jsx)("span", { className: a()(p._d, g?.textClassName), children: M.buttonText }),
            ],
        });
    return (0, r.jsx)(f.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: I,
        onSubscribeModalClose: T,
        premiumModalAnalyticsLocation: S,
        applicationId: O,
        confirmationFooter: C,
        children: (e) => {
            let { onClick: t } = e,
                n = i.cloneElement(U, { onClick: t });
            return null != M.buttonTooltipText ? (0, r.jsx)(l.m, { text: M.buttonTooltipText, children: n }) : n;
        },
    });
};
