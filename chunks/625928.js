n.d(t, { A: () => O });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(14877),
    o = n(17928),
    u = n(866665),
    c = n(403581),
    d = n(834730),
    h = n(140735),
    m = n(793574),
    p = n(688810),
    f = n(135621),
    g = n(287809),
    x = n(158045),
    S = n(192308),
    E = n(939249),
    y = n(404374),
    C = n(10392),
    A = n(82498),
    b = n(734057),
    I = n(309010),
    v = n(174459),
    N = n(652215),
    T = n(375708),
    j = n(845210);
function k() {
    (0, S.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("235257"), n.e("66920")]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function _(e) {
    let { className: t, iconOnly: n } = e,
        r = (0, o.bG)([I.Ay, b.A], () => {
            let e = b.A.getChannel(I.Ay.getChannelId());
            return e?.isPrivate() ? N.liQ.DM_CHANNEL : N.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: a } = (0, p.Ay)(m.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            (v.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: r, location_section: N.JJy.CHANNEL_TEXT_AREA },
                location_stack: a,
            }),
                (0, C.sq)(N.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, A.uq)("longer messages inline")));
        }, [r, a]),
        n
            ? (0, l.jsx)(E.D, {
                  className: j.e7,
                  onClick: () => k(),
                  children: (0, l.jsx)(u.m, {
                      text: T.intl.string(T.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: j.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: s()(j.zr, t),
                  children: [
                      (0, l.jsx)(c.t, { size: "md", className: j.M2, color: y.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: j.Qq,
                          variant: "text-sm/normal",
                          children: T.intl.format(T.t.BNAIBU, { onLearnMore: k }),
                      }),
                  ],
              })
    );
}
var R = n(263582),
    w = n(412028);
function O(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: r, className: S } = e,
        E = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        y = (0, f.A)(),
        C = i ?? y,
        A = r ?? i ?? y / 10,
        b = n.length,
        I = null != t.upsellLongMessages && (b ?? 0) > N.uvi && E,
        v = null != t.upsellLongMessages && !E,
        j = C - b,
        k = j > A;
    (0, a.$)({ currentLength: b, maxLength: C, message: T.intl.string(T.t.c2Jqed) });
    let O =
            0 === j
                ? T.intl.string(T.t.tU6YQ7)
                : j > 0
                  ? T.intl.formatToPlainString(T.t.qH8uFW, { count: j })
                  : T.intl.string(T.t.YSRIqa),
        { analyticsLocations: L } = (0, p.Ay)(m.A.CHARACTER_COUNT),
        { isVisible: P } = (0, R.A)({ type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: r });
    if (!P) return null;
    let M = j >= 0;
    return (0, l.jsx)(p.f5, {
        value: L,
        children: (0, l.jsxs)("div", {
            className: s()(S, w.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: w.SW,
                    children: [
                        I && M
                            ? (0, l.jsx)(u.m, {
                                  text: T.intl.formatToPlainString(T.t.vcvHa0, { maxLength: C }),
                                  position: "top",
                                  children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: w.y }),
                              })
                            : null,
                        k
                            ? null
                            : (0, l.jsx)(u.m, {
                                  text: O,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: M ? "text-default" : "text-feedback-critical",
                                      children: j,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { "aria-live": "polite", children: T.intl.format(T.t.qH8uFW, { count: j }) }),
                v && !k
                    ? (0, l.jsx)(_, { className: w.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: j })
                    : null,
            ],
        }),
    });
}
