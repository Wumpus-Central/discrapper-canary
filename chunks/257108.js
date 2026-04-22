"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(14877),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(793574),
    d = n(688810),
    _ = n(135621),
    f = n(287809),
    p = n(927578),
    h = n(48862),
    m = n(652215),
    E = n(985018),
    g = n(481395);
function A(e) {
    let { type: t, textValue: n, maxCharacterCount: i, showRemainingCharsAfterCount: A, className: I } = e,
        T = (0, o.bG)([f.default], () => p.Ay.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        S = (0, _.A)(),
        y = i ?? S,
        v = A ?? i ?? S / 10,
        N = n.length,
        C = null != t.upsellLongMessages && (N ?? 0) > m.uvi && T,
        R = null != t.upsellLongMessages && !T,
        O = y - N,
        b = O > v;
    (0, a.$)({ currentLength: N, maxLength: y, message: E.intl.string(E.t.c2Jqed) });
    let D =
            0 === O
                ? E.intl.string(E.t.tU6YQ7)
                : O > 0
                  ? E.intl.formatToPlainString(E.t.qH8uFW, { count: O })
                  : E.intl.string(E.t.YSRIqa),
        { analyticsLocations: L } = (0, d.Ay)(c.A.CHARACTER_COUNT);
    if (!((C && O >= 0) || !b || (R && !b))) return null;
    let w = O >= 0;
    return (0, r.jsx)(d.f5, {
        value: L,
        children: (0, r.jsxs)("div", {
            className: s()(I, g.Dq),
            children: [
                (0, r.jsxs)("div", {
                    className: g.SW,
                    children: [
                        C && w
                            ? (0, r.jsx)(l.m, {
                                  text: E.intl.formatToPlainString(E.t.vcvHa0, { maxLength: y }),
                                  position: "top",
                                  children: (0, r.jsx)(u.tvc, { size: "md", color: "currentColor", className: g.y }),
                              })
                            : null,
                        b
                            ? null
                            : (0, r.jsx)(l.m, {
                                  text: D,
                                  position: "top",
                                  children: (0, r.jsx)(u.Text, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: w ? "text-default" : "text-feedback-critical",
                                      children: O,
                                  }),
                              }),
                    ],
                }),
                (0, r.jsx)(u.AC4, { children: E.intl.format(E.t.qH8uFW, { count: O }) }),
                R && !b
                    ? (0, r.jsx)(h.A, { className: g.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: O })
                    : null,
            ],
        }),
    });
}
