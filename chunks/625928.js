"use strict";
n.d(t, { A: () => O });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(14877),
    o = n(17928),
    u = n(866665),
    c = n(403581),
    d = n(834730),
    h = n(140735),
    m = n(793574),
    f = n(688810),
    p = n(135621),
    g = n(287809),
    x = n(158045),
    A = n(192308),
    C = n(939249),
    E = n(404374),
    I = n(734057),
    y = n(309010),
    S = n(174459),
    N = n(652215),
    v = n(375708),
    _ = n(845210);
function j() {
    (0, A.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("235257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function T(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([y.Ay, I.A], () => {
            let e = I.A.getChannel(y.Ay.getChannelId());
            return e?.isPrivate() ? N.liQ.DM_CHANNEL : N.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: a } = (0, f.Ay)(m.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            S.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: N.JJy.CHANNEL_TEXT_AREA },
                location_stack: a,
            });
        }, [s, a]),
        n
            ? (0, l.jsx)(C.D, {
                  className: _.e7,
                  onClick: () => j(),
                  children: (0, l.jsx)(u.m, {
                      text: v.intl.string(v.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: _.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: r()(_.zr, t),
                  children: [
                      (0, l.jsx)(c.t, { size: "md", className: _.M2, color: E.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: _.Qq,
                          variant: "text-sm/normal",
                          children: v.intl.format(v.t.BNAIBU, { onLearnMore: j }),
                      }),
                  ],
              })
    );
}
var b = n(263582),
    R = n(412028);
function O(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s, className: A } = e,
        C = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        E = (0, p.A)(),
        I = i ?? E,
        y = s ?? i ?? E / 10,
        S = n.length,
        _ = null != t.upsellLongMessages && (S ?? 0) > N.uvi && C,
        j = null != t.upsellLongMessages && !C,
        O = I - S,
        M = O > y;
    (0, a.$)({ currentLength: S, maxLength: I, message: v.intl.string(v.t.c2Jqed) });
    let L =
            0 === O
                ? v.intl.string(v.t.tU6YQ7)
                : O > 0
                  ? v.intl.formatToPlainString(v.t.qH8uFW, { count: O })
                  : v.intl.string(v.t.YSRIqa),
        { analyticsLocations: k } = (0, f.Ay)(m.A.CHARACTER_COUNT),
        { isVisible: w } = (0, b.A)({ type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s });
    if (!w) return null;
    let P = O >= 0;
    return (0, l.jsx)(f.f5, {
        value: k,
        children: (0, l.jsxs)("div", {
            className: r()(A, R.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: R.SW,
                    children: [
                        _ && P
                            ? (0, l.jsx)(u.m, {
                                  text: v.intl.formatToPlainString(v.t.vcvHa0, { maxLength: I }),
                                  position: "top",
                                  children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: R.y }),
                              })
                            : null,
                        M
                            ? null
                            : (0, l.jsx)(u.m, {
                                  text: L,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: P ? "text-default" : "text-feedback-critical",
                                      children: O,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { "aria-live": "polite", children: v.intl.format(v.t.qH8uFW, { count: O }) }),
                j && !M
                    ? (0, l.jsx)(T, { className: R.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: O })
                    : null,
            ],
        }),
    });
}
