"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(14877),
    o = n(311907),
    l = n(990078),
    u = n(403581),
    c = n(834730),
    d = n(140735),
    _ = n(793574),
    f = n(688810),
    p = n(135621),
    h = n(287809),
    E = n(927578),
    m = n(48862),
    g = n(652215),
    A = n(985018),
    I = n(481395);
function T(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: T, className: S } = e,
        y = (0, o.bG)([h.default], () => E.Ay.canUseIncreasedMessageLength(h.default.getCurrentUser())),
        N = (0, p.A)(),
        v = i ?? N,
        C = T ?? i ?? N / 10,
        O = n.length,
        R = null != t.upsellLongMessages && (O ?? 0) > g.uvi && y,
        b = null != t.upsellLongMessages && !y,
        D = v - O,
        L = D > C;
    (0, a.$)({ currentLength: O, maxLength: v, message: A.intl.string(A.t.c2Jqed) });
    let w =
            0 === D
                ? A.intl.string(A.t.tU6YQ7)
                : D > 0
                  ? A.intl.formatToPlainString(A.t.qH8uFW, { count: D })
                  : A.intl.string(A.t.YSRIqa),
        { analyticsLocations: M } = (0, f.Ay)(_.A.CHARACTER_COUNT);
    if (!((R && D >= 0) || !L || (b && !L))) return null;
    let P = D >= 0;
    return (0, r.jsx)(f.f5, {
        value: M,
        children: (0, r.jsxs)("div", {
            className: s()(S, I.Dq),
            children: [
                (0, r.jsxs)("div", {
                    className: I.SW,
                    children: [
                        R && P
                            ? (0, r.jsx)(l.m, {
                                  text: A.intl.formatToPlainString(A.t.vcvHa0, { maxLength: v }),
                                  position: "top",
                                  children: (0, r.jsx)(u.t, { size: "md", color: "currentColor", className: I.y }),
                              })
                            : null,
                        L
                            ? null
                            : (0, r.jsx)(l.m, {
                                  text: w,
                                  position: "top",
                                  children: (0, r.jsx)(c.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: P ? "text-default" : "text-feedback-critical",
                                      children: D,
                                  }),
                              }),
                    ],
                }),
                (0, r.jsx)(d.A, { children: A.intl.format(A.t.qH8uFW, { count: D }) }),
                b && !L
                    ? (0, r.jsx)(m.A, { className: I.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: D })
                    : null,
            ],
        }),
    });
}
