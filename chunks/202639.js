"use strict";
n.d(t, { d: () => x });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(517738),
    a = n(717421),
    o = n(834730),
    c = n(315629),
    u = n(565645),
    d = n(220625),
    h = n(71393),
    m = n(725807),
    p = n(465794),
    f = n(788868),
    g = n(985018),
    _ = n(379378);
function x(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: l,
            button: c,
            buttonAnalyticsObject: x,
            className: C,
            onSubscribeModalClose: E,
            position: I = "floating",
            useGradientBg: v = !1,
            hoveredNitroLockedSound: y,
            useUpdatedStyling: S = !1,
            subscribeButtonVariantOverride: b,
            useLegacyButton: N = !1,
            leadingAction: T,
        } = e,
        { enabled: j } = d.e.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        R = (0, a.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        w = j && null != y,
        L = y?.emojiId != null || y?.emojiName != null,
        M = n;
    if (w) {
        let e = h.A.getGuild(y.guildId);
        M = g.intl.format(g.t.eku049, { serverName: e?.name ?? g.intl.string(g.t.DmIUGK) });
    }
    return (0, i.jsx)(r.animated.div, {
        style: { ...R },
        className: s()(_.Zj, v && _.Me, S && _.ww, w && _.u8, { [_.tO]: "floating" === I, [_.Kx]: "inline" === I }, C),
        children: (0, i.jsxs)(A, {
            hasPreviewSound: w,
            useGradientBg: v,
            children: [
                w &&
                    (0, i.jsxs)("div", {
                        className: _.Ed,
                        children: [
                            (0, i.jsxs)("div", {
                                className: _.vg,
                                children: [
                                    L && (0, i.jsx)(u.A, { emojiId: y.emojiId, emojiName: y.emojiName }),
                                    (0, i.jsx)(o.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: y.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: _.Fr,
                                children: M ?? n,
                            }),
                        ],
                    }),
                !w &&
                    (0, i.jsx)(o.E, {
                        variant: l ?? "text-sm/medium",
                        color: "text-strong",
                        className: _.tD,
                        children: n,
                    }),
                null != T && (0, i.jsx)("div", { className: _.Zv, children: T }),
                "string" == typeof c
                    ? N
                        ? (0, i.jsx)(m.A, {
                              size: "m",
                              className: _.Z3,
                              shinyButtonClassName: _.Z3,
                              subscriptionTier: f.pe.TIER_2,
                              textOptions: { textOverride: c },
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: E,
                          })
                        : (0, i.jsx)(p.A, {
                              size: "sm",
                              subscriptionTier: f.pe.TIER_2,
                              buttonTextOverride: c,
                              premiumModalAnalyticsLocation: x,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: E,
                              variantOverride: b,
                          })
                    : c,
            ],
        }),
    });
}
function A(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: l } = e;
    return n
        ? (0, i.jsx)(c.h, { color: "nitro-pink", offsetBottom: -3, className: s()(_.nC, { [_.u8]: t }), children: l })
        : l;
}
