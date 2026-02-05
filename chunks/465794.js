"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    u = n(421380),
    c = n(397927),
    d = n(531685),
    _ = n(783420),
    f = n(245383),
    p = n(788868),
    h = n(328504);
let m = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            size: a,
            className: m,
            textOptions: g,
            iconClassName: E,
            postSuccessGuild: A,
            onSubscribeModalClose: I,
            premiumModalAnalyticsLocation: T,
            showIcon: y = !0,
            disableShine: S,
            applicationId: v,
            shinyButtonClassName: C,
            showGradient: b = !1,
            confirmationFooter: N,
            color: R,
            iconColor: O = "currentColor",
            ...D
        } = e,
        L = (0, o.bG)([d.A], () => d.A.isFocused()),
        w = (0, f.A)({
            subscriptionTier: t,
            buttonTextOverride: g?.textOverride,
            defaultTextOverride: g?.subscribeText,
        }),
        x = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: A,
            onSubscribeModalClose: I,
            premiumModalAnalyticsLocation: T,
            applicationId: v,
            confirmationFooter: N,
        },
        P = R ?? (t === p.pe.TIER_1 ? u.$n.Colors.PRIMARY : u.$n.Colors.GREEN),
        M = (0, r.jsxs)(c.wLn, {
            "data-migration-pending": !0,
            disabled: w.disabled,
            innerClassName: h.UO,
            color: P,
            size: a,
            className: C,
            wrapperClassName: s()({ [h.PJ]: b && t === p.pe.TIER_2, [h.Up]: b && t === p.pe.TIER_1 }, m),
            buttonShineClassName:
                "buttonShineClassName" in D ? D.buttonShineClassName : P === u.XD.BRAND_INVERTED ? h.nz : void 0,
            pauseAnimation: !L || S,
            ...D,
            children: [
                y && (0, r.jsx)(c.tvc, { size: "md", color: O, className: s()(h.PC, E) }),
                (0, r.jsx)("span", { className: s()(h._d, g?.textClassName), children: w.buttonText }),
            ],
        });
    return (0, r.jsx)(_.A, {
        ...x,
        children: (e) => {
            let { onClick: t } = e,
                n = i.cloneElement(M, { onClick: t });
            return null != w.buttonTooltipText ? (0, r.jsx)(l.m_, { text: w.buttonTooltipText, children: n }) : n;
        },
    });
};
