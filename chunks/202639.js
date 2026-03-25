"use strict";
n.d(t, { d: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(497766),
    o = n(397927),
    l = n(565645),
    u = n(220625),
    c = n(1018),
    d = n(71393),
    _ = n(857586),
    f = n(465794),
    p = n(788868),
    h = n(985018),
    m = n(732591);
function E(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: E,
            buttonAnalyticsObject: A,
            className: I,
            onSubscribeModalClose: T,
            position: S = "floating",
            useGradientBg: y = !1,
            hoveredNitroLockedSound: v,
            useUpdatedStyling: N = !1,
            subscribeButtonVariantOverride: C,
            leadingAction: R,
        } = e,
        { enabled: O } = u.e.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        { useLegacyButton: b } = c.h.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        D = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        L = O && null != v,
        w = v?.emojiId != null || v?.emojiName != null,
        M = n;
    if (L) {
        let e = d.A.getGuild(v.guildId);
        M = h.intl.format(h.t.eku049, { serverName: e?.name ?? h.intl.string(h.t.DmIUGK) });
    }
    return (0, r.jsx)(a.animated.div, {
        style: { ...D },
        className: s()(m.Zj, y && m.Me, N && m.ww, { [m.tO]: "floating" === S, [m.Kx]: "inline" === S }, I),
        children: (0, r.jsxs)(g, {
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
                                    w && (0, r.jsx)(l.A, { emojiId: v.emojiId, emojiName: v.emojiName }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: v.name,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: m.Fr,
                                children: M ?? n,
                            }),
                        ],
                    }),
                !L &&
                    (0, r.jsx)(o.Text, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: m.tD,
                        children: n,
                    }),
                null != R && (0, r.jsx)("div", { className: m.Zv, children: R }),
                "string" == typeof E
                    ? b
                        ? (0, r.jsx)(f.A, {
                              size: "m",
                              className: m.Z3,
                              shinyButtonClassName: m.Z3,
                              subscriptionTier: p.pe.TIER_2,
                              textOptions: { textOverride: E },
                              premiumModalAnalyticsLocation: A,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                          })
                        : (0, r.jsx)(_.A, {
                              size: "sm",
                              subscriptionTier: p.pe.TIER_2,
                              buttonTextOverride: E,
                              premiumModalAnalyticsLocation: A,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                              variantOverride: C,
                          })
                    : E,
            ],
        }),
    });
}
function g(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e;
    return n
        ? (0, r.jsx)(o.hLv, { color: "nitro-pink", offsetBottom: -3, className: s()(m.nC, { [m.u8]: t }), children: i })
        : i;
}
