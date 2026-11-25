n.d(t, { A: () => w });
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
    x = n(448645),
    E = n(192308),
    y = n(939249),
    S = n(404374),
    A = n(739053),
    C = n(82498),
    I = n(734057),
    b = n(309010),
    v = n(129230),
    N = n(652215),
    j = n(792996),
    T = n(845210);
function k() {
    (0, E.mM)(async () => {
        let { default: e } = await Promise.all([n.e(235257), n.e(66920)]).then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function _(e) {
    let { className: t, iconOnly: n } = e,
        r = (0, o.bG)([b.Ay, I.A], () => {
            let e = I.A.getChannel(b.Ay.getChannelId());
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
                (0, A.sq)(N.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, C.uq)("longer messages inline")));
        }, [r, a]),
        n
            ? (0, l.jsx)(y.D, {
                  className: T.e7,
                  onClick: () => k(),
                  children: (0, l.jsx)(u.m, {
                      text: j.intl.string(j.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(c.NitroWheelIcon, { size: "md", color: "currentColor", className: T.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: s()(T.zr, t),
                  children: [
                      (0, l.jsx)(c.NitroWheelIcon, { size: "md", className: T.M2, color: S.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: T.Qq,
                          variant: "body-sm/normal",
                          children: j.intl.format(j.t.BNAIBU, { onLearnMore: k }),
                      }),
                  ],
              })
    );
}
var O = n(263582),
    R = n(412028);
function w(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: r, className: E } = e,
        y = (0, o.bG)([g.default], () => x.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        S = (0, p.A)(),
        A = i ?? S,
        C = r ?? i ?? S / 10,
        I = n.length,
        b = null != t.upsellLongMessages && (I ?? 0) > 2e3 && y,
        v = null != t.upsellLongMessages && !y,
        N = A - I,
        T = N > C;
    (0, a.$)({ currentLength: I, maxLength: A, message: j.intl.string(j.t.c2Jqed) });
    let k =
            0 === N
                ? j.intl.string(j.t.tU6YQ7)
                : N > 0
                  ? j.intl.formatToPlainString(j.t.qH8uFW, { count: N })
                  : j.intl.string(j.t.YSRIqa),
        { analyticsLocations: w } = (0, f.Ay)(m.A.CHARACTER_COUNT),
        { isVisible: M } = (0, O.A)({ type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: r });
    if (!M) return null;
    let L = N >= 0;
    return (0, l.jsx)(f.f5, {
        value: w,
        children: (0, l.jsxs)("div", {
            className: s()(E, R.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: R.SW,
                    children: [
                        b && L
                            ? (0, l.jsx)(u.m, {
                                  text: j.intl.formatToPlainString(j.t.vcvHa0, { maxLength: A }),
                                  position: "top",
                                  children: (0, l.jsx)(c.NitroWheelIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: R.y,
                                  }),
                              })
                            : null,
                        T
                            ? null
                            : (0, l.jsx)(u.m, {
                                  text: k,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "body-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: L ? "text-default" : "text-feedback-critical",
                                      children: N,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { "aria-live": "polite", children: j.intl.format(j.t.qH8uFW, { count: N }) }),
                v && !T
                    ? (0, l.jsx)(_, { className: R.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: N })
                    : null,
            ],
        }),
    });
}
