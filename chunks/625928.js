"use strict";
n.d(t, { A: () => L });
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
    E = n(939249),
    C = n(404374),
    I = n(734057),
    y = n(309010),
    S = n(174459),
    v = n(652215),
    _ = n(375708),
    N = n(820051);
function T() {
    (0, A.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("235257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function j(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([y.Ay, I.A], () => {
            let e = I.A.getChannel(y.Ay.getChannelId());
            return e?.isPrivate() ? v.liQ.DM_CHANNEL : v.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: a } = (0, f.Ay)(m.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            S.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: v.JJy.CHANNEL_TEXT_AREA },
                location_stack: a,
            });
        }, [s, a]),
        n
            ? (0, l.jsx)(E.D, {
                  className: N.e7,
                  onClick: () => T(),
                  children: (0, l.jsx)(u.m, {
                      text: _.intl.string(_.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: N.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: r()(N.zr, t),
                  children: [
                      (0, l.jsx)(c.t, { size: "md", className: N.M2, color: C.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: N.Qq,
                          variant: "text-sm/normal",
                          children: _.intl.format(_.t.BNAIBU, { onLearnMore: T }),
                      }),
                  ],
              })
    );
}
var b = n(263582),
    R = n(835547);
function L(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s, className: A } = e,
        E = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        C = (0, p.A)(),
        I = i ?? C,
        y = s ?? i ?? C / 10,
        S = n.length,
        N = null != t.upsellLongMessages && (S ?? 0) > v.uvi && E,
        T = null != t.upsellLongMessages && !E,
        L = I - S,
        O = L > y;
    (0, a.$)({ currentLength: S, maxLength: I, message: _.intl.string(_.t.c2Jqed) });
    let M =
            0 === L
                ? _.intl.string(_.t.tU6YQ7)
                : L > 0
                  ? _.intl.formatToPlainString(_.t.qH8uFW, { count: L })
                  : _.intl.string(_.t.YSRIqa),
        { analyticsLocations: w } = (0, f.Ay)(m.A.CHARACTER_COUNT),
        { isVisible: k } = (0, b.A)({ type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s });
    if (!k) return null;
    let P = L >= 0;
    return (0, l.jsx)(f.f5, {
        value: w,
        children: (0, l.jsxs)("div", {
            className: r()(A, R.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: R.SW,
                    children: [
                        N && P
                            ? (0, l.jsx)(u.m, {
                                  text: _.intl.formatToPlainString(_.t.vcvHa0, { maxLength: I }),
                                  position: "top",
                                  children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: R.y }),
                              })
                            : null,
                        O
                            ? null
                            : (0, l.jsx)(u.m, {
                                  text: M,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: P ? "text-default" : "text-feedback-critical",
                                      children: L,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { "aria-live": "polite", children: _.intl.format(_.t.qH8uFW, { count: L }) }),
                T && !O
                    ? (0, l.jsx)(j, { className: R.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: L })
                    : null,
            ],
        }),
    });
}
