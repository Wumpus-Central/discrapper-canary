"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(990078),
    d = n(862482),
    _ = n(930861),
    u = n(403581),
    c = n(531685),
    E = n(783420),
    h = n(245383),
    m = n(788868),
    f = n(497566);
let g = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            size: s,
            className: g,
            textOptions: p,
            iconClassName: A,
            postSuccessGuild: I,
            onSubscribeModalClose: T,
            premiumModalAnalyticsLocation: S,
            showIcon: N = !0,
            disableShine: C,
            applicationId: R,
            shinyButtonClassName: O,
            showGradient: y = !1,
            confirmationFooter: v,
            color: D,
            iconColor: L = "currentColor",
            ...b
        } = e,
        w = (0, o.bG)([c.A], () => c.A.isFocused()),
        P = (0, h.A)({
            subscriptionTier: t,
            buttonTextOverride: p?.textOverride,
            defaultTextOverride: p?.subscribeText,
        }),
        k = D ?? (t === m.pe.TIER_1 ? d.$n.Colors.PRIMARY : d.$n.Colors.GREEN),
        M = (0, i.jsxs)(_.wL, {
            "data-migration-pending": !0,
            disabled: P.disabled,
            innerClassName: f.UO,
            color: k,
            size: s,
            className: O,
            wrapperClassName: a()({ [f.PJ]: y && t === m.pe.TIER_2, [f.Up]: y && t === m.pe.TIER_1 }, g),
            buttonShineClassName:
                "buttonShineClassName" in b ? b.buttonShineClassName : k === d.XD.BRAND_INVERTED ? f.nz : void 0,
            pauseAnimation: !w || C,
            ...b,
            children: [
                N && (0, i.jsx)(u.t, { size: "md", color: L, className: a()(f.PC, A) }),
                (0, i.jsx)("span", { className: a()(f._d, p?.textClassName), children: P.buttonText }),
            ],
        });
    return (0, i.jsx)(E.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: I,
        onSubscribeModalClose: T,
        premiumModalAnalyticsLocation: S,
        applicationId: R,
        confirmationFooter: v,
        children: (e) => {
            let { onClick: t } = e,
                n = r.cloneElement(M, { onClick: t });
            return null != P.buttonTooltipText ? (0, i.jsx)(l.m, { text: P.buttonTooltipText, children: n }) : n;
        },
    });
};
