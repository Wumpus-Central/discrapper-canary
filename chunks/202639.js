"use strict";
n.d(t, { d: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(563495),
    o = n(397927),
    l = n(565645),
    u = n(736653),
    c = n(766708),
    d = n(71393),
    _ = n(857586),
    f = n(788868),
    h = n(985018),
    p = n(431009);
function g(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: u,
            buttonAnalyticsObject: g,
            className: A,
            onSubscribeModalClose: I,
            position: T = "floating",
            useGradientBg: y = !1,
            hoveredNitroLockedSound: S,
            useUpdatedStyling: v = !1,
        } = e,
        C = c.r.useConfig({ location: "PremiumFloatingPickerUpsell" }).enabled,
        b = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        N = C && null != S,
        R = S?.emojiId != null || S?.emojiName != null,
        O = n;
    if (N) {
        let e = d.A.getGuild(S.guildId);
        O = h.intl.format(h.t.eku049, { serverName: e?.name ?? h.intl.string(h.t.DmIUGK) });
    }
    return (0, r.jsx)(s.animated.div, {
        style: { ...b },
        className: a()(
            p.Zj,
            y && p.Me,
            v && p.ww,
            { [p.tO]: "floating" === T, [p.Kx]: "inline" === T, [p.ik]: "bottom" === T },
            A,
        ),
        children: (0, r.jsxs)(E, {
            hasPreviewSound: N,
            useGradientBg: y,
            children: [
                N &&
                    (0, r.jsxs)("div", {
                        className: p.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: p.vg,
                                children: [
                                    R && (0, r.jsx)(l.A, { emojiId: S.emojiId, emojiName: S.emojiName }),
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
                                className: p.Fr,
                                children: O ?? n,
                            }),
                        ],
                    }),
                !N &&
                    (0, r.jsx)(o.Text, {
                        variant: i ?? "text-sm/medium",
                        color: "text-strong",
                        className: p.tD,
                        children: n,
                    }),
                "string" == typeof u
                    ? (0, r.jsx)(_.A, {
                          size: "sm",
                          subscriptionTier: f.pe.TIER_2,
                          buttonTextOverride: u,
                          premiumModalAnalyticsLocation: g,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: I,
                      })
                    : u,
            ],
        }),
    });
}
function E(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e,
        s = (0, u.Ay)();
    return n
        ? (0, r.jsx)(o.hLv, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: a()(p.nC, { [p.Ay]: (0, o.Mwr)(s), [p.u8]: t }),
              children: i,
          })
        : i;
}
