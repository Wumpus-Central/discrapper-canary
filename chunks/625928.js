"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(14877),
    l = n(17928),
    d = n(990078),
    _ = n(403581),
    u = n(834730),
    c = n(140735),
    E = n(793574),
    h = n(688810),
    m = n(135621),
    f = n(287809),
    g = n(927578),
    p = n(192308),
    A = n(939249),
    I = n(404374),
    T = n(734057),
    S = n(309010),
    N = n(954571),
    C = n(652215),
    R = n(985018),
    O = n(341867);
function y() {
    (0, p.openModalLazy)(async () => {
        let { default: e } = await n.e("66920").then(n.bind(n, 220763));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function v(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, l.bG)([S.A, T.A], () => {
            let e = T.A.getChannel(S.A.getChannelId());
            return e?.isPrivate() ? C.liQ.DM_CHANNEL : C.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: o } = (0, h.Ay)(E.A.PREMIUM_UPSELL);
    return (
        r.useEffect(() => {
            N.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: C.JJy.CHANNEL_TEXT_AREA },
                location_stack: o,
            });
        }, [s, o]),
        n
            ? (0, i.jsx)(A.D, {
                  className: O.e7,
                  onClick: () => y(),
                  children: (0, i.jsx)(d.m, {
                      text: R.intl.string(R.t["+eFIjX"]),
                      position: "top",
                      children: (0, i.jsx)(_.t, { size: "md", color: "currentColor", className: O.M2 }),
                  }),
              })
            : (0, i.jsxs)("div", {
                  className: a()(O.zr, t),
                  children: [
                      (0, i.jsx)(_.t, { size: "md", className: O.M2, color: I.k0.PREMIUM_TIER_2 }),
                      (0, i.jsx)(u.E, {
                          className: O.Qq,
                          variant: "text-sm/normal",
                          children: R.intl.format(R.t.BNAIBU, { onLearnMore: y }),
                      }),
                  ],
              })
    );
}
var D = n(481395);
function L(e) {
    let { type: t, textValue: n, maxCharacterCount: r, showRemainingCharsAfterCount: s, className: p } = e,
        A = (0, l.bG)([f.default], () => g.Ay.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        I = (0, m.A)(),
        T = r ?? I,
        S = s ?? r ?? I / 10,
        N = n.length,
        O = null != t.upsellLongMessages && (N ?? 0) > C.uvi && A,
        y = null != t.upsellLongMessages && !A,
        L = T - N,
        b = L > S;
    (0, o.$)({ currentLength: N, maxLength: T, message: R.intl.string(R.t.c2Jqed) });
    let w =
            0 === L
                ? R.intl.string(R.t.tU6YQ7)
                : L > 0
                  ? R.intl.formatToPlainString(R.t.qH8uFW, { count: L })
                  : R.intl.string(R.t.YSRIqa),
        { analyticsLocations: P } = (0, h.Ay)(E.A.CHARACTER_COUNT);
    if (!((O && L >= 0) || !b || (y && !b))) return null;
    let k = L >= 0;
    return (0, i.jsx)(h.f5, {
        value: P,
        children: (0, i.jsxs)("div", {
            className: a()(p, D.Dq),
            children: [
                (0, i.jsxs)("div", {
                    className: D.SW,
                    children: [
                        O && k
                            ? (0, i.jsx)(d.m, {
                                  text: R.intl.formatToPlainString(R.t.vcvHa0, { maxLength: T }),
                                  position: "top",
                                  children: (0, i.jsx)(_.t, { size: "md", color: "currentColor", className: D.y }),
                              })
                            : null,
                        b
                            ? null
                            : (0, i.jsx)(d.m, {
                                  text: w,
                                  position: "top",
                                  children: (0, i.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: k ? "text-default" : "text-feedback-critical",
                                      children: L,
                                  }),
                              }),
                    ],
                }),
                (0, i.jsx)(c.A, { children: R.intl.format(R.t.qH8uFW, { count: L }) }),
                y && !b
                    ? (0, i.jsx)(v, { className: D.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: L })
                    : null,
            ],
        }),
    });
}
