n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(849522),
    f = n(639119),
    p = n(594174),
    _ = n(74538),
    m = n(694320),
    h = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(781990);
function y(e) {
    var t, n, i, y;
    let { type: O, textValue: v, maxCharacterCount: S, showRemainingCharsAfterCount: I, className: T } = e,
        A = (0, o.e7)([p.default], () => _.ZP.canUseIncreasedMessageLength(p.default.getCurrentUser())),
        C = (0, d.Z)(),
        N = null != S ? S : C,
        P = null != (y = null != I ? I : S) ? y : C / 10,
        R = v.length,
        w = null != O.upsellLongMessages && (null != R ? R : 0) > h.J6R && A,
        D = null != O.upsellLongMessages && !A,
        x = (null == (n = (0, f.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === g.Si.TIER_2,
        L = N - R,
        j = L > P,
        M = L < 0 && x,
        k =
            0 === L
                ? E.intl.string(E.t.tU6YQ7)
                : L > 0
                  ? E.intl.formatToPlainString(E.t.qH8uFW, { count: L })
                  : E.intl.string(E.t.YSRIqa),
        { analyticsLocations: U } = (0, u.ZP)(c.Z.CHARACTER_COUNT);
    if (!((w && L >= 0) || !j || (D && !j))) return null;
    let G = L >= 0;
    return (0, r.jsx)(u.Gt, {
        value: U,
        children: (0, r.jsxs)("div", {
            className: a()(T, b.characterCount),
            children: [
                (0, r.jsxs)("div", {
                    className: b.flairContainer,
                    children: [
                        w && G
                            ? (0, r.jsx)(s.u, {
                                  text: E.intl.formatToPlainString(E.t.vcvHa0, { maxLength: N }),
                                  position: "top",
                                  children: (0, r.jsx)(l.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: b.premiumFlair,
                                  }),
                              })
                            : null,
                        j || M
                            ? null
                            : (0, r.jsx)(s.u, {
                                  text: k,
                                  position: "top",
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-sm/semibold",
                                      tabularNumbers: !0,
                                      "aria-hidden": !0,
                                      color: G ? "text-default" : "text-danger",
                                      children: L,
                                  }),
                              }),
                    ],
                }),
                (0, r.jsx)(l.nn4, { children: E.intl.format(E.t.qH8uFW, { count: L }) }),
                D && !j
                    ? (0, r.jsx)(m.Z, {
                          className: b.upsell,
                          iconOnly: (null == (i = O.upsellLongMessages) ? void 0 : i.iconOnly) || !1,
                          remaining: L,
                      })
                    : null,
            ],
        }),
    });
}
