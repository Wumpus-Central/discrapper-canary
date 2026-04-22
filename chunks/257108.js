"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(14877),
    a = n(311907),
    o = n(990078),
    c = n(403581),
    u = n(834730),
    d = n(140735),
    h = n(793574),
    m = n(688810),
    p = n(135621),
    f = n(287809),
    g = n(927578),
    _ = n(48862),
    x = n(652215),
    A = n(985018),
    C = n(481395);
function E(e) {
    let { type: t, textValue: n, maxCharacterCount: l, showRemainingCharsAfterCount: E, className: I } = e,
        v = (0, a.bG)([f.default], () => g.Ay.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        y = (0, p.A)(),
        S = l ?? y,
        b = E ?? l ?? y / 10,
        N = n.length,
        T = null != t.upsellLongMessages && (N ?? 0) > x.uvi && v,
        j = null != t.upsellLongMessages && !v,
        R = S - N,
        w = R > b;
    (0, r.$)({ currentLength: N, maxLength: S, message: A.intl.string(A.t.c2Jqed) });
    let L =
            0 === R
                ? A.intl.string(A.t.tU6YQ7)
                : R > 0
                  ? A.intl.formatToPlainString(A.t.qH8uFW, { count: R })
                  : A.intl.string(A.t.YSRIqa),
        { analyticsLocations: M } = (0, m.Ay)(h.A.CHARACTER_COUNT);
    if (!((T && R >= 0) || !w || (j && !w))) return null;
    let k = R >= 0;
    return (0, i.jsx)(m.f5, {
        value: M,
        children: (0, i.jsxs)("div", {
            className: s()(I, C.Dq),
            children: [
                (0, i.jsxs)("div", {
                    className: C.SW,
                    children: [
                        T && k
                            ? (0, i.jsx)(o.m, {
                                  text: A.intl.formatToPlainString(A.t.vcvHa0, { maxLength: S }),
                                  position: "top",
                                  children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: C.y }),
                              })
                            : null,
                        w
                            ? null
                            : (0, i.jsx)(o.m, {
                                  text: L,
                                  position: "top",
                                  children: (0, i.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: k ? "text-default" : "text-feedback-critical",
                                      children: R,
                                  }),
                              }),
                    ],
                }),
                (0, i.jsx)(d.A, { children: A.intl.format(A.t.qH8uFW, { count: R }) }),
                j && !w
                    ? (0, i.jsx)(_.A, { className: C.UX, iconOnly: t.upsellLongMessages?.iconOnly || !1, remaining: R })
                    : null,
            ],
        }),
    });
}
