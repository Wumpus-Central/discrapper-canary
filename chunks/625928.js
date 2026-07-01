"use strict";
n.d(t, { A: () => L });
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
    C = n(652215),
    N = n(375708),
    v = n(341867);
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
            return e?.isPrivate() ? C.liQ.DM_CHANNEL : C.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: o } = (0, f.Ay)(h.A.PREMIUM_UPSELL);
    return (
        r.useEffect(() => {
            y.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: C.JJy.CHANNEL_TEXT_AREA },
                location_stack: o,
            });
        }, [s, o]),
        n
            ? (0, i.jsx)(A.D, {
                  className: v.e7,
                  onClick: () => R(),
                  children: (0, i.jsx)(u.m, {
                      text: N.intl.string(N.t["+eFIjX"]),
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
                          children: N.intl.format(N.t.BNAIBU, { onLearnMore: R }),
                      }),
                  ],
              })
    );
}
var b = n(263582),
    D = n(481395);
function L(e) {
    let { type: t, textValue: n, maxCharacterCount: r, showRemainingCharsAfterCount: s, className: g } = e,
        A = (0, l.bG)([E.default], () => m.Ay.canUseIncreasedMessageLength(E.default.getCurrentUser())),
        I = (0, p.A)(),
        T = r ?? I,
        S = s ?? r ?? I / 10,
        y = n.length,
        v = null != t.upsellLongMessages && (y ?? 0) > C.uvi && A,
        R = null != t.upsellLongMessages && !A,
        L = T - y,
        w = L > S;
    (0, o.$)({ currentLength: y, maxLength: T, message: N.intl.string(N.t.c2Jqed) });
    let M =
            0 === L
                ? N.intl.string(N.t.tU6YQ7)
                : L > 0
                  ? N.intl.formatToPlainString(N.t.qH8uFW, { count: L })
                  : N.intl.string(N.t.YSRIqa),
        { analyticsLocations: P } = (0, f.Ay)(h.A.CHARACTER_COUNT);
    if (!(0, b.A)({ type: t, textValue: n, maxCharacterCount: r, showRemainingCharsAfterCount: s })) return null;
    let x = L >= 0;
    return (0, i.jsx)(f.f5, {
        value: P,
        children: (0, i.jsxs)("div", {
            className: a()(g, D.Dq),
            children: [
                (0, i.jsxs)("div", {
                    className: D.SW,
                    children: [
                        v && x
                            ? (0, i.jsx)(u.m, {
                                  text: N.intl.formatToPlainString(N.t.vcvHa0, { maxLength: T }),
                                  position: "top",
                                  children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: D.y }),
                              })
                            : null,
                        w
                            ? null
                            : (0, i.jsx)(u.m, {
                                  text: M,
                                  position: "top",
                                  children: (0, i.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: x ? "text-default" : "text-feedback-critical",
                                      children: L,
                                  }),
                              }),
                    ],
                }),
                (0, i.jsx)(_.A, { "aria-live": "polite", children: N.intl.format(N.t.qH8uFW, { count: L }) }),
                R && !w
                    ? (0, i.jsx)(O, { className: D.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: L })
                    : null,
            ],
        }),
    });
}
