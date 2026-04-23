"use strict";
n.d(t, { d: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(419354),
    o = n(717421),
    l = n(834730),
    u = n(315629),
    c = n(565645),
    d = n(220625),
    _ = n(71393),
    f = n(725807),
    p = n(465794),
    h = n(788868),
    E = n(985018),
    m = n(379378);
function g(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: u,
            buttonAnalyticsObject: g,
            className: I,
            onSubscribeModalClose: T,
            position: S = "floating",
            useGradientBg: y = !1,
            hoveredNitroLockedSound: N,
            useUpdatedStyling: v = !1,
            subscribeButtonVariantOverride: C,
            useLegacyButton: O = !1,
            leadingAction: R,
        } = e,
        { enabled: b } = d.e.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        D = (0, o.z)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        L = b && null != N,
        w = N?.emojiId != null || N?.emojiName != null,
        M = n;
    if (L) {
        let e = _.A.getGuild(N.guildId);
        M = E.intl.format(E.t.eku049, { serverName: e?.name ?? E.intl.string(E.t.DmIUGK) });
    }
    return (0, r.jsx)(a.animated.div, {
        style: { ...D },
        className: s()(m.Zj, y && m.Me, v && m.ww, L && m.u8, { [m.tO]: "floating" === S, [m.Kx]: "inline" === S }, I),
        children: (0, r.jsxs)(A, {
            hasPreviewSound: L,
            useGradientBg: y,
            children: [
                L &&
                    (0, r.jsxs)("div", {
                        className: m.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: m.vg,
                                children: [
                                    w && (0, r.jsx)(c.A, { emojiId: N.emojiId, emojiName: N.emojiName }),
                                    (0, r.jsx)(l.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: N.name,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: m.Fr,
                                children: M ?? n,
                            }),
                        ],
                    }),
                !L &&
                    (0, r.jsx)(l.E, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: m.tD,
                        children: n,
                    }),
                null != R && (0, r.jsx)("div", { className: m.Zv, children: R }),
                "string" == typeof u
                    ? O
                        ? (0, r.jsx)(f.A, {
                              size: "m",
                              className: m.Z3,
                              shinyButtonClassName: m.Z3,
                              subscriptionTier: h.pe.TIER_2,
                              textOptions: { textOverride: u },
                              premiumModalAnalyticsLocation: g,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                          })
                        : (0, r.jsx)(p.A, {
                              size: "sm",
                              subscriptionTier: h.pe.TIER_2,
                              buttonTextOverride: u,
                              premiumModalAnalyticsLocation: g,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                              variantOverride: C,
                          })
                    : u,
            ],
        }),
    });
}
function A(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e;
    return n
        ? (0, r.jsx)(u.h, { color: "nitro-pink", offsetBottom: -3, className: s()(m.nC, { [m.u8]: t }), children: i })
        : i;
}
