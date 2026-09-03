n.d(t, { A: () => M });
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
    I = n(10392),
    y = n(82498),
    S = n(734057),
    v = n(309010),
    N = n(174459),
    _ = n(652215),
    j = n(375708),
    T = n(845210);
function b() {
    (0, A.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("235257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function R(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([v.Ay, S.A], () => {
            let e = S.A.getChannel(v.Ay.getChannelId());
            return e?.isPrivate() ? _.liQ.DM_CHANNEL : _.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: a } = (0, f.Ay)(m.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            N.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: _.JJy.CHANNEL_TEXT_AREA },
                location_stack: a,
            }),
                (0, I.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, y.uq)("longer messages inline"));
        }, [s, a]),
        n
            ? (0, l.jsx)(C.D, {
                  className: T.e7,
                  onClick: () => b(),
                  children: (0, l.jsx)(u.m, {
                      text: j.intl.string(j.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: T.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: r()(T.zr, t),
                  children: [
                      (0, l.jsx)(c.t, { size: "md", className: T.M2, color: E.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: T.Qq,
                          variant: "text-sm/normal",
                          children: j.intl.format(j.t.BNAIBU, { onLearnMore: b }),
                      }),
                  ],
              })
    );
}
var O = n(263582),
    L = n(412028);
function M(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s, className: A } = e,
        C = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        E = (0, p.A)(),
        I = i ?? E,
        y = s ?? i ?? E / 10,
        S = n.length,
        v = null != t.upsellLongMessages && (S ?? 0) > _.uvi && C,
        N = null != t.upsellLongMessages && !C,
        T = I - S,
        b = T > y;
    (0, a.$)({ currentLength: S, maxLength: I, message: j.intl.string(j.t.c2Jqed) });
    let M =
            0 === T
                ? j.intl.string(j.t.tU6YQ7)
                : T > 0
                  ? j.intl.formatToPlainString(j.t.qH8uFW, { count: T })
                  : j.intl.string(j.t.YSRIqa),
        { analyticsLocations: k } = (0, f.Ay)(m.A.CHARACTER_COUNT),
        { isVisible: w } = (0, O.A)({ type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s });
    if (!w) return null;
    let P = T >= 0;
    return (0, l.jsx)(f.f5, {
        value: k,
        children: (0, l.jsxs)("div", {
            className: r()(A, L.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: L.SW,
                    children: [
                        v && P
                            ? (0, l.jsx)(u.m, {
                                  text: j.intl.formatToPlainString(j.t.vcvHa0, { maxLength: I }),
                                  position: "top",
                                  children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: L.y }),
                              })
                            : null,
                        b
                            ? null
                            : (0, l.jsx)(u.m, {
                                  text: M,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: P ? "text-default" : "text-feedback-critical",
                                      children: T,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { "aria-live": "polite", children: j.intl.format(j.t.qH8uFW, { count: T }) }),
                N && !b
                    ? (0, l.jsx)(R, { className: L.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: T })
                    : null,
            ],
        }),
    });
}
