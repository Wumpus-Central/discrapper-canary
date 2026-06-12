"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(14877),
    l = n(17928),
    u = n(990078),
    c = n(403581),
    d = n(834730),
    _ = n(140735),
    h = n(793574),
    f = n(688810),
    p = n(135621),
    E = n(287809),
    m = n(428262),
    g = n(192308),
    A = n(939249),
    I = n(404374),
    T = n(734057),
    S = n(309010),
    y = n(174459),
    N = n(652215),
    v = n(375708),
    C = n(341867);
function R() {
    (0, g.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("35257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function O(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, l.bG)([S.A, T.A], () => {
            let e = T.A.getChannel(S.A.getChannelId());
            return e?.isPrivate() ? N.liQ.DM_CHANNEL : N.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: o } = (0, f.Ay)(h.A.PREMIUM_UPSELL);
    return (
        r.useEffect(() => {
            y.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: N.JJy.CHANNEL_TEXT_AREA },
                location_stack: o,
            });
        }, [s, o]),
        n
            ? (0, i.jsx)(A.D, {
                  className: C.e7,
                  onClick: () => R(),
                  children: (0, i.jsx)(u.m, {
                      text: v.intl.string(v.t["+eFIjX"]),
                      position: "top",
                      children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: C.M2 }),
                  }),
              })
            : (0, i.jsxs)("div", {
                  className: a()(C.zr, t),
                  children: [
                      (0, i.jsx)(c.t, { size: "md", className: C.M2, color: I.k0.PREMIUM_TIER_2 }),
                      (0, i.jsx)(d.E, {
                          className: C.Qq,
                          variant: "text-sm/normal",
                          children: v.intl.format(v.t.BNAIBU, { onLearnMore: R }),
                      }),
                  ],
              })
    );
}
var b = n(481395);
function D(e) {
    let { type: t, textValue: n, maxCharacterCount: r, showRemainingCharsAfterCount: s, className: g } = e,
        A = (0, l.bG)([E.default], () => m.Ay.canUseIncreasedMessageLength(E.default.getCurrentUser())),
        I = (0, p.A)(),
        T = r ?? I,
        S = s ?? r ?? I / 10,
        y = n.length,
        C = null != t.upsellLongMessages && (y ?? 0) > N.uvi && A,
        R = null != t.upsellLongMessages && !A,
        D = T - y,
        L = D > S;
    (0, o.$)({ currentLength: y, maxLength: T, message: v.intl.string(v.t.c2Jqed) });
    let w =
            0 === D
                ? v.intl.string(v.t.tU6YQ7)
                : D > 0
                  ? v.intl.formatToPlainString(v.t.qH8uFW, { count: D })
                  : v.intl.string(v.t.YSRIqa),
        { analyticsLocations: M } = (0, f.Ay)(h.A.CHARACTER_COUNT);
    if (!((C && D >= 0) || !L || (R && !L))) return null;
    let P = D >= 0;
    return (0, i.jsx)(f.f5, {
        value: M,
        children: (0, i.jsxs)("div", {
            className: a()(g, b.Dq),
            children: [
                (0, i.jsxs)("div", {
                    className: b.SW,
                    children: [
                        C && P
                            ? (0, i.jsx)(u.m, {
                                  text: v.intl.formatToPlainString(v.t.vcvHa0, { maxLength: T }),
                                  position: "top",
                                  children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: b.y }),
                              })
                            : null,
                        L
                            ? null
                            : (0, i.jsx)(u.m, {
                                  text: w,
                                  position: "top",
                                  children: (0, i.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: P ? "text-default" : "text-feedback-critical",
                                      children: D,
                                  }),
                              }),
                    ],
                }),
                (0, i.jsx)(_.A, { "aria-live": "polite", children: v.intl.format(v.t.qH8uFW, { count: D }) }),
                R && !L
                    ? (0, i.jsx)(O, { className: b.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: D })
                    : null,
            ],
        }),
    });
}
