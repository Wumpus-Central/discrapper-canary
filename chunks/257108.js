n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(135621),
    f = n(234419),
    p = n(287809),
    _ = n(927578),
    h = n(48862),
    m = n(652215),
    g = n(788868),
    E = n(985018),
    b = n(587590);

function y(e) {
    var t, n, i, y;
    let { type: O, textValue: A, maxCharacterCount: v, showRemainingCharsAfterCount: S, className: I } = e,
        T = (0, s.bG)([p.default], () => _.Ay.canUseIncreasedMessageLength(p.default.getCurrentUser())),
        C = (0, d.A)(),
        N = null != v ? v : C,
        R = null != (t = null != S ? S : v) ? t : C / 10,
        w = A.length,
        P = null != O.upsellLongMessages && (null != w ? w : 0) > m.uvi && T,
        D = null != O.upsellLongMessages && !T,
        x = (null == (i = (0, f.V)()) || null == (n = i.subscription_trial) ? void 0 : n.sku_id) === g.pe.TIER_2,
        L = N - w,
        j = L > R,
        M = L < 0 && x,
        k =
            0 === L
                ? E.intl.string(E.t.tU6YQ7)
                : L > 0
                  ? E.intl.formatToPlainString(E.t.qH8uFW, {
                        count: L,
                    })
                  : E.intl.string(E.t.YSRIqa),
        { analyticsLocations: U } = (0, u.Ay)(c.A.CHARACTER_COUNT);
    if (!((P && L >= 0) || !j || (D && !j))) return null;
    let G = L >= 0;
    return (0, r.jsx)(u.f5, {
        value: U,
        children: (0, r.jsxs)("div", {
            className: a()(I, b.Dq),
            children: [
                (0, r.jsxs)("div", {
                    className: b.SW,
                    children: [
                        P && G
                            ? (0, r.jsx)(o.m, {
                                  text: E.intl.formatToPlainString(E.t.vcvHa0, {
                                      maxLength: N,
                                  }),
                                  position: "top",
                                  children: (0, r.jsx)(l.tvc, {
                                      size: "md",
                                      color: "currentColor",
                                      className: b.y,
                                  }),
                              })
                            : null,
                        j || M
                            ? null
                            : (0, r.jsx)(o.m, {
                                  text: k,
                                  position: "top",
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: G ? "text-default" : "text-feedback-critical",
                                      children: L,
                                  }),
                              }),
                    ],
                }),
                (0, r.jsx)(l.AC4, {
                    children: E.intl.format(E.t.qH8uFW, {
                        count: L,
                    }),
                }),
                D && !j
                    ? (0, r.jsx)(h.A, {
                          className: b.UX,
                          iconOnly: (null == (y = O.upsellLongMessages) ? void 0 : y.iconOnly) || !1,
                          remaining: L,
                      })
                    : null,
            ],
        }),
    });
}
