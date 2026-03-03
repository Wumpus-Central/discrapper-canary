"use strict";
n.d(t, { d: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(475539),
    o = n(397927),
    l = n(565645),
    u = n(736653),
    c = n(766708),
    d = n(71393),
    _ = n(857586),
    f = n(788868),
    p = n(985018),
    h = n(732591);
function m(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: u,
            buttonAnalyticsObject: m,
            className: g,
            onSubscribeModalClose: A,
            position: I = "floating",
            useGradientBg: T = !1,
            hoveredNitroLockedSound: S,
            useUpdatedStyling: y = !1,
            subscribeButtonVariantOverride: v,
        } = e,
        N = c.rn.useConfig({ location: "PremiumFloatingPickerUpsell" }).enableSoundPreview,
        C = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        R = N && null != S,
        O = S?.emojiId != null || S?.emojiName != null,
        b = n;
    if (R) {
        let e = d.A.getGuild(S.guildId);
        b = p.intl.format(p.t.eku049, { serverName: e?.name ?? p.intl.string(p.t.DmIUGK) });
    }
    return (0, r.jsx)(a.animated.div, {
        style: { ...C },
        className: s()(
            h.Zj,
            T && h.Me,
            y && h.ww,
            { [h.tO]: "floating" === I, [h.Kx]: "inline" === I, [h.ik]: "bottom" === I },
            g,
        ),
        children: (0, r.jsxs)(E, {
            hasPreviewSound: R,
            useGradientBg: T,
            children: [
                R &&
                    (0, r.jsxs)("div", {
                        className: h.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.vg,
                                children: [
                                    O && (0, r.jsx)(l.A, { emojiId: S.emojiId, emojiName: S.emojiName }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: S.name,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: h.Fr,
                                children: b ?? n,
                            }),
                        ],
                    }),
                !R &&
                    (0, r.jsx)(o.Text, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: h.tD,
                        children: n,
                    }),
                "string" == typeof u
                    ? (0, r.jsx)(_.A, {
                          size: "sm",
                          subscriptionTier: f.pe.TIER_2,
                          buttonTextOverride: u,
                          premiumModalAnalyticsLocation: m,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: A,
                          variantOverride: v,
                      })
                    : u,
            ],
        }),
    });
}
function E(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e,
        a = (0, u.Ay)();
    return n
        ? (0, r.jsx)(o.hLv, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: s()(h.nC, { [h.Ay]: (0, o.Mwr)(a), [h.u8]: t }),
              children: i,
          })
        : i;
}
