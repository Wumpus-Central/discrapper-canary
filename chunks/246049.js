n.d(t, { A: () => O });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(14877),
    o = n(855986),
    u = n(866665),
    c = n(403581),
    d = n(834730),
    h = n(140735),
    m = n(793574),
    f = n(688810),
    p = n(135621),
    g = n(287809),
    x = n(722178),
    E = n(192308),
    y = n(939249),
    S = n(404374),
    C = n(739053),
    A = n(82498),
    b = n(734057),
    I = n(309010),
    v = n(129230),
    N = n(652215),
    T = n(792996),
    k = n(845210);
function j() {
    (0, E.mM)(async () => {
        let { default: e } = await Promise.all([n.e(235257), n.e(66920)]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function _(e) {
    let { className: t, iconOnly: n } = e,
        r = (0, o.bG)([I.Ay, b.A], () => {
            let e = b.A.getChannel(I.Ay.getChannelId());
            return e?.isPrivate() ? N.liQ.DM_CHANNEL : N.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: a } = (0, f.Ay)(m.A.PREMIUM_UPSELL);
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
            ? (0, l.jsx)(y.D, {
                  className: k.e7,
                  onClick: () => j(),
                  children: (0, l.jsx)(u.m, {
                      text: T.intl.string(T.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(c.t, { size: "md", color: "currentColor", className: k.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: s()(k.zr, t),
                  children: [
                      (0, l.jsx)(c.t, { size: "md", className: k.M2, color: S.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: k.Qq,
                          variant: "body-sm/normal",
                          children: T.intl.format(T.t.BNAIBU, { onLearnMore: j }),
                      }),
                  ],
              })
    );
}
var R = n(263582),
    w = n(412028);
function O(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: r, className: E } = e,
        y = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        S = (0, p.A)(),
        C = i ?? S,
        A = r ?? i ?? S / 10,
        b = n.length,
        I = null != t.upsellLongMessages && (b ?? 0) > 2e3 && y,
        v = null != t.upsellLongMessages && !y,
        N = C - b,
        k = N > A;
    (0, a.$)({ currentLength: b, maxLength: C, message: T.intl.string(T.t.c2Jqed) });
    let j =
            0 === N
                ? T.intl.string(T.t.tU6YQ7)
                : N > 0
                  ? T.intl.formatToPlainString(T.t.qH8uFW, { count: N })
                  : T.intl.string(T.t.YSRIqa),
        { analyticsLocations: O } = (0, f.Ay)(m.A.CHARACTER_COUNT),
        { isVisible: L } = (0, R.A)({ type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: r });
    if (!L) return null;
    let M = N >= 0;
    return (0, l.jsx)(f.f5, {
        value: O,
        children: (0, l.jsxs)("div", {
            className: s()(E, w.Dq),
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
                                  text: j,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "body-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: M ? "text-default" : "text-feedback-critical",
                                      children: N,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { "aria-live": "polite", children: T.intl.format(T.t.qH8uFW, { count: N }) }),
                v && !k
                    ? (0, l.jsx)(_, { className: w.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: N })
                    : null,
            ],
        }),
    });
}
