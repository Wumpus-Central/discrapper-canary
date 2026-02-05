"use strict";
n.d(t, { d: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(92674),
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
            className: E,
            onSubscribeModalClose: A,
            position: I = "floating",
            useGradientBg: T = !1,
            hoveredNitroLockedSound: y,
        } = e,
        S = c.r.useConfig({ location: "PremiumFloatingPickerUpsell" }).enabled,
        v = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: { tension: 120, friction: 14 },
        }),
        C = S && null != y,
        b = y?.emojiId != null || y?.emojiName != null,
        N = n;
    if (C) {
        let e = d.A.getGuild(y.guildId);
        N = p.intl.format(p.t.eku049, { serverName: e?.name ?? p.intl.string(p.t.DmIUGK) });
    }
    return (0, r.jsx)(s.animated.div, {
        style: { ...v },
        className: a()(
            h.Zj,
            T && h.Me,
            { [h.tO]: "floating" === I, [h.Kx]: "inline" === I, [h.ik]: "bottom" === I },
            E,
        ),
        children: (0, r.jsxs)(g, {
            hasPreviewSound: C,
            useGradientBg: T,
            children: [
                C &&
                    (0, r.jsxs)("div", {
                        className: h.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.vg,
                                children: [
                                    b && (0, r.jsx)(l.A, { emojiId: y.emojiId, emojiName: y.emojiName }),
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
                                children: N ?? n,
                            }),
                        ],
                    }),
                !C &&
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
                      })
                    : u,
            ],
        }),
    });
}
function g(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e,
        s = (0, u.Ay)();
    return n
        ? (0, r.jsx)(o.hLv, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: a()(h.nC, { [h.Ay]: (0, o.Mwr)(s), [h.u8]: t }),
              children: i,
          })
        : i;
}
