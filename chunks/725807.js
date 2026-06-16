"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(990078),
    u = n(862482),
    c = n(930861),
    d = n(403581),
    _ = n(531685),
    h = n(783420),
    f = n(245383),
    p = n(788868),
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
            disableShine: C,
            applicationId: N,
            shinyButtonClassName: v,
            showGradient: R = !1,
            confirmationFooter: O,
            color: b,
            iconColor: D = "currentColor",
            ...L
        } = e,
        w = (0, o.bG)([_.A], () => _.A.isFocused()),
        M = (0, f.A)({
            subscriptionTier: t,
            buttonTextOverride: g?.textOverride,
            defaultTextOverride: g?.subscribeText,
        }),
        P = b ?? (t === p.pe.TIER_1 ? u.$n.Colors.PRIMARY : u.$n.Colors.GREEN),
        x = (0, i.jsxs)(c.wL, {
            "data-migration-pending": !0,
            disabled: M.disabled,
            innerClassName: E.UO,
            color: P,
            size: s,
            className: v,
            wrapperClassName: a()({ [E.PJ]: R && t === p.pe.TIER_2, [E.Up]: R && t === p.pe.TIER_1 }, m),
            buttonShineClassName:
                "buttonShineClassName" in L ? L.buttonShineClassName : P === u.XD.BRAND_INVERTED ? E.nz : void 0,
            pauseAnimation: !w || C,
            ...L,
            children: [
                y && (0, i.jsx)(d.t, { size: "md", color: D, className: a()(E.PC, A) }),
                (0, i.jsx)("span", { className: a()(E._d, g?.textClassName), children: M.buttonText }),
            ],
        });
    return (0, i.jsx)(h.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: I,
        onSubscribeModalClose: T,
        premiumModalAnalyticsLocation: S,
        applicationId: N,
        confirmationFooter: O,
        children: (e) => {
            let { onClick: t } = e,
                n = r.cloneElement(x, { onClick: t });
            return null != M.buttonTooltipText ? (0, i.jsx)(l.m, { text: M.buttonTooltipText, children: n }) : n;
        },
    });
};
