"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    u = n(793574),
    c = n(688810),
    d = n(135621),
    _ = n(287809),
    f = n(927578),
    p = n(48862),
    h = n(652215),
    m = n(985018),
    g = n(587590);
function E(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: E, className: A } = e,
        I = (0, s.bG)([_.default], () => f.Ay.canUseIncreasedMessageLength(_.default.getCurrentUser())),
        T = (0, d.A)(),
        y = i ?? T,
        S = E ?? i ?? T / 10,
        v = n.length,
        C = null != t.upsellLongMessages && (v ?? 0) > h.uvi && I,
        b = null != t.upsellLongMessages && !I,
        N = y - v,
        R = N > S,
        O =
            0 === N
                ? m.intl.string(m.t.tU6YQ7)
                : N > 0
                  ? m.intl.formatToPlainString(m.t.qH8uFW, { count: N })
                  : m.intl.string(m.t.YSRIqa),
        { analyticsLocations: D } = (0, c.Ay)(u.A.CHARACTER_COUNT);
    if (!((C && N >= 0) || !R || (b && !R))) return null;
    let L = N >= 0;
    return (0, r.jsx)(c.f5, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: a()(A, g.Dq),
            children: [
                (0, r.jsxs)("div", {
                    className: g.SW,
                    children: [
                        C && L
                            ? (0, r.jsx)(o.m, {
                                  text: m.intl.formatToPlainString(m.t.vcvHa0, { maxLength: y }),
                                  position: "top",
                                  children: (0, r.jsx)(l.tvc, { size: "md", color: "currentColor", className: g.y }),
                              })
                            : null,
                        R
                            ? null
                            : (0, r.jsx)(o.m, {
                                  text: O,
                                  position: "top",
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: L ? "text-default" : "text-feedback-critical",
                                      children: N,
                                  }),
                              }),
                    ],
                }),
                (0, r.jsx)(l.AC4, { children: m.intl.format(m.t.qH8uFW, { count: N }) }),
                b && !R
                    ? (0, r.jsx)(p.A, { className: g.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: N })
                    : null,
            ],
        }),
    });
}
