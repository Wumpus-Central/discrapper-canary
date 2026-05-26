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
    f = n(793574),
    h = n(688810),
    p = n(135621),
    E = n(287809),
    m = n(428262),
    g = n(192308),
    A = n(939249),
    I = n(404374),
    T = n(734057),
    S = n(309010),
    N = n(174459),
    y = n(652215),
    C = n(375708),
    v = n(341867);
function O() {
    (0, g.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("35257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function R(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, l.bG)([S.A, T.A], () => {
            let e = T.A.getChannel(S.A.getChannelId());
            return e?.isPrivate() ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: o } = (0, h.Ay)(f.A.PREMIUM_UPSELL);
    return (
        r.useEffect(() => {
            N.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: y.JJy.CHANNEL_TEXT_AREA },
                location_stack: o,
            });
        }, [s, o]),
        n
            ? (0, i.jsx)(A.D, {
                  className: v.e7,
                  onClick: () => O(),
                  children: (0, i.jsx)(u.m, {
                      text: C.intl.string(C.t["+eFIjX"]),
                      position: "top",
                      children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: v.M2 }),
                  }),
              })
            : (0, i.jsxs)("div", {
                  className: a()(v.zr, t),
                  children: [
                      (0, i.jsx)(c.t, { size: "md", className: v.M2, color: I.k0.PREMIUM_TIER_2 }),
                      (0, i.jsx)(d.E, {
                          className: v.Qq,
                          variant: "text-sm/normal",
                          children: C.intl.format(C.t.BNAIBU, { onLearnMore: O }),
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
        N = n.length,
        v = null != t.upsellLongMessages && (N ?? 0) > y.uvi && A,
        O = null != t.upsellLongMessages && !A,
        D = T - N,
        L = D > S;
    (0, o.$)({ currentLength: N, maxLength: T, message: C.intl.string(C.t.c2Jqed) });
    let w =
            0 === D
                ? C.intl.string(C.t.tU6YQ7)
                : D > 0
                  ? C.intl.formatToPlainString(C.t.qH8uFW, { count: D })
                  : C.intl.string(C.t.YSRIqa),
        { analyticsLocations: M } = (0, h.Ay)(f.A.CHARACTER_COUNT);
    if (!((v && D >= 0) || !L || (O && !L))) return null;
    let P = D >= 0;
    return (0, i.jsx)(h.f5, {
        value: M,
        children: (0, i.jsxs)("div", {
            className: a()(g, b.Dq),
            children: [
                (0, i.jsxs)("div", {
                    className: b.SW,
                    children: [
                        v && P
                            ? (0, i.jsx)(u.m, {
                                  text: C.intl.formatToPlainString(C.t.vcvHa0, { maxLength: T }),
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
                (0, i.jsx)(_.A, { "aria-live": "polite", children: C.intl.format(C.t.qH8uFW, { count: D }) }),
                O && !L
                    ? (0, i.jsx)(R, { className: b.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: D })
                    : null,
            ],
        }),
    });
}
