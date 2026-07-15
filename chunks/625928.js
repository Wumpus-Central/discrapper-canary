"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(14877),
    o = n(17928),
    d = n(990078),
    c = n(403581),
    u = n(834730),
    _ = n(140735),
    E = n(793574),
    A = n(688810),
    h = n(135621),
    I = n(287809),
    f = n(428262),
    p = n(192308),
    T = n(939249),
    m = n(404374),
    g = n(734057),
    S = n(309010),
    N = n(174459),
    C = n(652215),
    R = n(375708),
    O = n(341867);
function L() {
    (0, p.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("35257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function D(e) {
    let { className: t, iconOnly: n } = e,
        a = (0, o.bG)([S.A, g.A], () => {
            let e = g.A.getChannel(S.A.getChannelId());
            return e?.isPrivate() ? C.liQ.DM_CHANNEL : C.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: l } = (0, A.Ay)(E.A.PREMIUM_UPSELL);
    return (
        r.useEffect(() => {
            N.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: a, location_section: C.JJy.CHANNEL_TEXT_AREA },
                location_stack: l,
            });
        }, [a, l]),
        n
            ? (0, i.jsx)(T.D, {
                  className: O.e7,
                  onClick: () => L(),
                  children: (0, i.jsx)(d.m, {
                      text: R.intl.string(R.t["+eFIjX"]),
                      position: "top",
                      children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: O.M2 }),
                  }),
              })
            : (0, i.jsxs)("div", {
                  className: s()(O.zr, t),
                  children: [
                      (0, i.jsx)(c.t, { size: "md", className: O.M2, color: m.k0.PREMIUM_TIER_2 }),
                      (0, i.jsx)(u.E, {
                          className: O.Qq,
                          variant: "text-sm/normal",
                          children: R.intl.format(R.t.BNAIBU, { onLearnMore: L }),
                      }),
                  ],
              })
    );
}
var y = n(263582),
    v = n(481395);
function b(e) {
    let { type: t, textValue: n, maxCharacterCount: r, showRemainingCharsAfterCount: a, className: p } = e,
        T = (0, o.bG)([I.default], () => f.Ay.canUseIncreasedMessageLength(I.default.getCurrentUser())),
        m = (0, h.A)(),
        g = r ?? m,
        S = a ?? r ?? m / 10,
        N = n.length,
        O = null != t.upsellLongMessages && (N ?? 0) > C.uvi && T,
        L = null != t.upsellLongMessages && !T,
        b = g - N,
        M = b > S;
    (0, l.$)({ currentLength: N, maxLength: g, message: R.intl.string(R.t.c2Jqed) });
    let P =
            0 === b
                ? R.intl.string(R.t.tU6YQ7)
                : b > 0
                  ? R.intl.formatToPlainString(R.t.qH8uFW, { count: b })
                  : R.intl.string(R.t.YSRIqa),
        { analyticsLocations: U } = (0, A.Ay)(E.A.CHARACTER_COUNT),
        { isVisible: w } = (0, y.A)({ type: t, textValue: n, maxCharacterCount: r, showRemainingCharsAfterCount: a });
    if (!w) return null;
    let G = b >= 0;
    return (0, i.jsx)(A.f5, {
        value: U,
        children: (0, i.jsxs)("div", {
            className: s()(p, v.Dq),
            children: [
                (0, i.jsxs)("div", {
                    className: v.SW,
                    children: [
                        O && G
                            ? (0, i.jsx)(d.m, {
                                  text: R.intl.formatToPlainString(R.t.vcvHa0, { maxLength: g }),
                                  position: "top",
                                  children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: v.y }),
                              })
                            : null,
                        M
                            ? null
                            : (0, i.jsx)(d.m, {
                                  text: P,
                                  position: "top",
                                  children: (0, i.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: G ? "text-default" : "text-feedback-critical",
                                      children: b,
                                  }),
                              }),
                    ],
                }),
                (0, i.jsx)(_.A, { "aria-live": "polite", children: R.intl.format(R.t.qH8uFW, { count: b }) }),
                L && !M
                    ? (0, i.jsx)(D, { className: v.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: b })
                    : null,
            ],
        }),
    });
}
