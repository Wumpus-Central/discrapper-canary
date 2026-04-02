"use strict";
n.d(t, { d: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(687498),
    o = n(397927),
    l = n(565645),
    u = n(220625),
    c = n(71393),
    d = n(725807),
    _ = n(465794),
    f = n(788868),
    p = n(985018),
    h = n(693041);
function m(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: m,
            buttonAnalyticsObject: g,
            className: A,
            onSubscribeModalClose: I,
            position: T = "floating",
            useGradientBg: S = !1,
            hoveredNitroLockedSound: y,
            useUpdatedStyling: v = !1,
            subscribeButtonVariantOverride: N,
            useLegacyButton: C = !1,
            leadingAction: R,
        } = e,
        { enabled: O } = u.e.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        b = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        D = O && null != y,
        L = y?.emojiId != null || y?.emojiName != null,
        w = n;
    if (D) {
        let e = c.A.getGuild(y.guildId);
        w = p.intl.format(p.t.eku049, { serverName: e?.name ?? p.intl.string(p.t.DmIUGK) });
    }
    return (0, r.jsx)(a.animated.div, {
        style: { ...b },
        className: s()(h.Zj, S && h.Me, v && h.ww, D && h.u8, { [h.tO]: "floating" === T, [h.Kx]: "inline" === T }, A),
        children: (0, r.jsxs)(E, {
            hasPreviewSound: D,
            useGradientBg: S,
            children: [
                D &&
                    (0, r.jsxs)("div", {
                        className: h.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.vg,
                                children: [
                                    L && (0, r.jsx)(l.A, { emojiId: y.emojiId, emojiName: y.emojiName }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: y.name,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: h.Fr,
                                children: w ?? n,
                            }),
                        ],
                    }),
                !D &&
                    (0, r.jsx)(o.Text, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: h.tD,
                        children: n,
                    }),
                null != R && (0, r.jsx)("div", { className: h.Zv, children: R }),
                "string" == typeof m
                    ? C
                        ? (0, r.jsx)(d.A, {
                              size: "m",
                              className: h.Z3,
                              shinyButtonClassName: h.Z3,
                              subscriptionTier: f.pe.TIER_2,
                              textOptions: { textOverride: m },
                              premiumModalAnalyticsLocation: g,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: I,
                          })
                        : (0, r.jsx)(_.A, {
                              size: "sm",
                              subscriptionTier: f.pe.TIER_2,
                              buttonTextOverride: m,
                              premiumModalAnalyticsLocation: g,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: I,
                              variantOverride: N,
                          })
                    : m,
            ],
        }),
    });
}
function E(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e;
    return n
        ? (0, r.jsx)(o.hLv, { color: "nitro-pink", offsetBottom: -3, className: s()(h.nC, { [h.u8]: t }), children: i })
        : i;
}
