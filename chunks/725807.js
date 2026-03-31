"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(435371),
    u = n(421380),
    c = n(397927),
    d = n(531685),
    _ = n(783420),
    f = n(245383),
    p = n(788868),
    h = n(636977);
let m = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            size: s,
            className: m,
            textOptions: E,
            iconClassName: g,
            postSuccessGuild: A,
            onSubscribeModalClose: I,
            premiumModalAnalyticsLocation: T,
            showIcon: S = !0,
            disableShine: y,
            applicationId: v,
            shinyButtonClassName: N,
            showGradient: C = !1,
            confirmationFooter: R,
            color: O,
            iconColor: b = "currentColor",
            ...D
        } = e,
        L = (0, o.bG)([d.A], () => d.A.isFocused()),
        w = (0, f.A)({
            subscriptionTier: t,
            buttonTextOverride: E?.textOverride,
            defaultTextOverride: E?.subscribeText,
        }),
        M = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: A,
            onSubscribeModalClose: I,
            premiumModalAnalyticsLocation: T,
            applicationId: v,
            confirmationFooter: R,
        },
        P = O ?? (t === p.pe.TIER_1 ? u.$n.Colors.PRIMARY : u.$n.Colors.GREEN),
        x = (0, r.jsxs)(c.wLn, {
            "data-migration-pending": !0,
            disabled: w.disabled,
            innerClassName: h.UO,
            color: P,
            size: s,
            className: N,
            wrapperClassName: a()({ [h.PJ]: C && t === p.pe.TIER_2, [h.Up]: C && t === p.pe.TIER_1 }, m),
            buttonShineClassName:
                "buttonShineClassName" in D ? D.buttonShineClassName : P === u.XD.BRAND_INVERTED ? h.nz : void 0,
            pauseAnimation: !L || y,
            ...D,
            children: [
                S && (0, r.jsx)(c.tvc, { size: "md", color: b, className: a()(h.PC, g) }),
                (0, r.jsx)("span", { className: a()(h._d, E?.textClassName), children: w.buttonText }),
            ],
        });
    return (0, r.jsx)(_.A, {
        ...M,
        children: (e) => {
            let { onClick: t } = e,
                n = i.cloneElement(x, { onClick: t });
            return null != w.buttonTooltipText ? (0, r.jsx)(l.m_, { text: w.buttonTooltipText, children: n }) : n;
        },
    });
};
