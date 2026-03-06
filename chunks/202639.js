"use strict";
n.d(t, { d: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(380278),
    o = n(397927),
    l = n(565645),
    u = n(736653),
    c = n(220625),
    d = n(1018),
    _ = n(71393),
    f = n(857586),
    p = n(465794),
    h = n(788868),
    m = n(985018),
    E = n(431009);
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
            hoveredNitroLockedSound: v,
            useUpdatedStyling: N = !1,
            subscribeButtonVariantOverride: C,
        } = e,
        { enabled: R } = c.e.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        { useLegacyButton: O } = d.h.useConfig({ location: "PremiumFloatingPickerUpsell" }),
        b = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        D = R && null != v,
        L = v?.emojiId != null || v?.emojiName != null,
        w = n;
    if (D) {
        let e = _.A.getGuild(v.guildId);
        w = m.intl.format(m.t.eku049, { serverName: e?.name ?? m.intl.string(m.t.DmIUGK) });
    }
    return (0, r.jsx)(a.animated.div, {
        style: { ...b },
        className: s()(E.Zj, y && E.Me, N && E.ww, { [E.tO]: "floating" === S, [E.Kx]: "inline" === S }, I),
        children: (0, r.jsxs)(A, {
            hasPreviewSound: D,
            useGradientBg: y,
            children: [
                D &&
                    (0, r.jsxs)("div", {
                        className: E.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.vg,
                                children: [
                                    L && (0, r.jsx)(l.A, { emojiId: v.emojiId, emojiName: v.emojiName }),
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
                                className: E.Fr,
                                children: w ?? n,
                            }),
                        ],
                    }),
                !D &&
                    (0, r.jsx)(o.Text, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: E.tD,
                        children: n,
                    }),
                "string" == typeof u
                    ? O
                        ? (0, r.jsx)(p.A, {
                              size: "m",
                              className: E.Z3,
                              shinyButtonClassName: E.Z3,
                              subscriptionTier: h.pe.TIER_2,
                              textOptions: { textOverride: u },
                              premiumModalAnalyticsLocation: g,
                              tabIndex: t ? 0 : -1,
                              onSubscribeModalClose: T,
                          })
                        : (0, r.jsx)(f.A, {
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
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e,
        a = (0, u.Ay)();
    return n
        ? (0, r.jsx)(o.hLv, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: s()(E.nC, { [E.Ay]: (0, o.Mwr)(a), [E.u8]: t }),
              children: i,
          })
        : i;
}
