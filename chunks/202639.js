n.d(t, {
    d: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(970984),
    s = n(397927),
    l = n(565645),
    c = n(736653),
    u = n(766708),
    d = n(71393),
    f = n(857586),
    p = n(788868),
    _ = n(985018),
    h = n(732591);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: c,
            buttonAnalyticsObject: m,
            className: E,
            onSubscribeModalClose: b,
            position: O = "floating",
            useGradientBg: v = !1,
            hoveredNitroLockedSound: A,
        } = e,
        I = u.r.useConfig({
            location: "PremiumFloatingPickerUpsell",
        }).enabled,
        S = (0, s.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 14,
            },
        }),
        T = I && null != A,
        C = (null == A ? void 0 : A.emojiId) != null || (null == A ? void 0 : A.emojiName) != null,
        N = n;
    if (T) {
        var w;
        let e = d.A.getGuild(A.guildId);
        N = _.intl.format(_.t.eku049, {
            serverName: null != (w = null == e ? void 0 : e.name) ? w : _.intl.string(_.t.DmIUGK),
        });
    }
    return (0, r.jsx)(o.animated.div, {
        style: g({}, S),
        className: a()(
            h.Zj,
            v && h.Me,
            {
                [h.tO]: "floating" === O,
                [h.Kx]: "inline" === O,
                [h.ik]: "bottom" === O,
            },
            E,
        ),
        children: (0, r.jsxs)(y, {
            hasPreviewSound: T,
            useGradientBg: v,
            children: [
                T &&
                    (0, r.jsxs)("div", {
                        className: h.Ed,
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.vg,
                                children: [
                                    C &&
                                        (0, r.jsx)(l.A, {
                                            emojiId: A.emojiId,
                                            emojiName: A.emojiName,
                                        }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: A.name,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: h.Fr,
                                children: null != N ? N : n,
                            }),
                        ],
                    }),
                !T &&
                    (0, r.jsx)(s.Text, {
                        variant: null != i ? i : "text-sm/medium",
                        color: "text-strong",
                        className: h.tD,
                        children: n,
                    }),
                "string" == typeof c
                    ? (0, r.jsx)(f.A, {
                          size: "sm",
                          subscriptionTier: p.pe.TIER_2,
                          buttonTextOverride: c,
                          premiumModalAnalyticsLocation: m,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: b,
                      })
                    : c,
            ],
        }),
    });
}

function y(e) {
    let { hasPreviewSound: t, useGradientBg: n, children: i } = e,
        o = (0, c.Ay)();
    return n
        ? (0, r.jsx)(s.hLv, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: a()(h.nC, {
                  [h.Ay]: (0, s.Mwr)(o),
                  [h.u8]: t,
              }),
              children: i,
          })
        : i;
}
