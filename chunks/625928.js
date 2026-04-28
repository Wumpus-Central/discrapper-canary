"use strict";
n.d(t, { A: () => R });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(14877),
    o = n(17928),
    c = n(990078),
    u = n(403581),
    d = n(834730),
    h = n(140735),
    m = n(793574),
    p = n(688810),
    f = n(135621),
    g = n(287809),
    x = n(927578),
    C = n(192308),
    A = n(939249),
    E = n(404374),
    I = n(734057),
    y = n(309010),
    v = n(954571),
    S = n(652215),
    N = n(985018),
    j = n(341867);
function _() {
    (0, C.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("35257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function T(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([y.A, I.A], () => {
            let e = I.A.getChannel(y.A.getChannelId());
            return e?.isPrivate() ? S.liQ.DM_CHANNEL : S.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: r } = (0, p.Ay)(m.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            v.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: S.JJy.CHANNEL_TEXT_AREA },
                location_stack: r,
            });
        }, [s, r]),
        n
            ? (0, l.jsx)(A.D, {
                  className: j.e7,
                  onClick: () => _(),
                  children: (0, l.jsx)(c.m, {
                      text: N.intl.string(N.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(u.t, { size: "md", color: "currentColor", className: j.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: a()(j.zr, t),
                  children: [
                      (0, l.jsx)(u.t, { size: "md", className: j.M2, color: E.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: j.Qq,
                          variant: "text-sm/normal",
                          children: N.intl.format(N.t.BNAIBU, { onLearnMore: _ }),
                      }),
                  ],
              })
    );
}
var b = n(481395);
function R(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s, className: C } = e,
        A = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        E = (0, f.A)(),
        I = i ?? E,
        y = s ?? i ?? E / 10,
        v = n.length,
        j = null != t.upsellLongMessages && (v ?? 0) > S.uvi && A,
        _ = null != t.upsellLongMessages && !A,
        R = I - v,
        O = R > y;
    (0, r.$)({ currentLength: v, maxLength: I, message: N.intl.string(N.t.c2Jqed) });
    let L =
            0 === R
                ? N.intl.string(N.t.tU6YQ7)
                : R > 0
                  ? N.intl.formatToPlainString(N.t.qH8uFW, { count: R })
                  : N.intl.string(N.t.YSRIqa),
        { analyticsLocations: w } = (0, p.Ay)(m.A.CHARACTER_COUNT);
    if (!((j && R >= 0) || !O || (_ && !O))) return null;
    let M = R >= 0;
    return (0, l.jsx)(p.f5, {
        value: w,
        children: (0, l.jsxs)("div", {
            className: a()(C, b.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: b.SW,
                    children: [
                        j && M
                            ? (0, l.jsx)(c.m, {
                                  text: N.intl.formatToPlainString(N.t.vcvHa0, { maxLength: I }),
                                  position: "top",
                                  children: (0, l.jsx)(u.t, { size: "md", color: "currentColor", className: b.y }),
                              })
                            : null,
                        O
                            ? null
                            : (0, l.jsx)(c.m, {
                                  text: L,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: M ? "text-default" : "text-feedback-critical",
                                      children: R,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { children: N.intl.format(N.t.qH8uFW, { count: R }) }),
                _ && !O
                    ? (0, l.jsx)(T, { className: b.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: R })
                    : null,
            ],
        }),
    });
}
