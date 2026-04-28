"use strict";
n.d(t, { A: () => w });
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
    _ = n(927578),
    x = n(192308),
    C = n(939249),
    A = n(404374),
    E = n(734057),
    I = n(309010),
    v = n(954571),
    y = n(652215),
    b = n(985018),
    S = n(341867);
function N() {
    (0, x.openModalLazy)(async () => {
        let { default: e } = await n.e("66920").then(n.bind(n, 220763));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function j(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([I.A, E.A], () => {
            let e = E.A.getChannel(I.A.getChannelId());
            return e?.isPrivate() ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: r } = (0, p.Ay)(m.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            v.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: y.JJy.CHANNEL_TEXT_AREA },
                location_stack: r,
            });
        }, [s, r]),
        n
            ? (0, l.jsx)(C.D, {
                  className: S.e7,
                  onClick: () => N(),
                  children: (0, l.jsx)(c.m, {
                      text: b.intl.string(b.t["+eFIjX"]),
                      position: "top",
                      children: (0, l.jsx)(u.t, { size: "md", color: "currentColor", className: S.M2 }),
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: a()(S.zr, t),
                  children: [
                      (0, l.jsx)(u.t, { size: "md", className: S.M2, color: A.k0.PREMIUM_TIER_2 }),
                      (0, l.jsx)(d.E, {
                          className: S.Qq,
                          variant: "text-sm/normal",
                          children: b.intl.format(b.t.BNAIBU, { onLearnMore: N }),
                      }),
                  ],
              })
    );
}
var T = n(481395);
function w(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: s, className: x } = e,
        C = (0, o.bG)([g.default], () => _.Ay.canUseIncreasedMessageLength(g.default.getCurrentUser())),
        A = (0, f.A)(),
        E = i ?? A,
        I = s ?? i ?? A / 10,
        v = n.length,
        S = null != t.upsellLongMessages && (v ?? 0) > y.uvi && C,
        N = null != t.upsellLongMessages && !C,
        w = E - v,
        R = w > I;
    (0, r.$)({ currentLength: v, maxLength: E, message: b.intl.string(b.t.c2Jqed) });
    let L =
            0 === w
                ? b.intl.string(b.t.tU6YQ7)
                : w > 0
                  ? b.intl.formatToPlainString(b.t.qH8uFW, { count: w })
                  : b.intl.string(b.t.YSRIqa),
        { analyticsLocations: k } = (0, p.Ay)(m.A.CHARACTER_COUNT);
    if (!((S && w >= 0) || !R || (N && !R))) return null;
    let M = w >= 0;
    return (0, l.jsx)(p.f5, {
        value: k,
        children: (0, l.jsxs)("div", {
            className: a()(x, T.Dq),
            children: [
                (0, l.jsxs)("div", {
                    className: T.SW,
                    children: [
                        S && M
                            ? (0, l.jsx)(c.m, {
                                  text: b.intl.formatToPlainString(b.t.vcvHa0, { maxLength: E }),
                                  position: "top",
                                  children: (0, l.jsx)(u.t, { size: "md", color: "currentColor", className: T.y }),
                              })
                            : null,
                        R
                            ? null
                            : (0, l.jsx)(c.m, {
                                  text: L,
                                  position: "top",
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: M ? "text-default" : "text-feedback-critical",
                                      children: w,
                                  }),
                              }),
                    ],
                }),
                (0, l.jsx)(h.A, { children: b.intl.format(b.t.qH8uFW, { count: w }) }),
                N && !R
                    ? (0, l.jsx)(j, { className: T.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: w })
                    : null,
            ],
        }),
    });
}
