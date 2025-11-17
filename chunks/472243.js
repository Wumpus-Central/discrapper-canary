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
    _ = n(594174),
    p = n(74538),
    h = n(694320),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(781990);
function y(e) {
    var t, n, i, y;
    let { type: O, textValue: v, maxCharacterCount: I, showRemainingCharsAfterCount: T, className: S } = e,
        A = (0, o.e7)([_.default], () => p.ZP.canUseIncreasedMessageLength(_.default.getCurrentUser())),
        C = (0, d.Z)(),
        N = null != I ? I : C,
        R = null != (y = null != T ? T : I) ? y : C / 10,
        P = v.length,
        D = null != O.upsellLongMessages && (null != P ? P : 0) > m.J6R && A,
        w = null != O.upsellLongMessages && !A,
        x = (null == (n = (0, f.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === g.Si.TIER_2,
        L = N - P,
        M = L > R,
        k = L < 0 && x,
        j =
            0 === L
                ? E.intl.string(E.t.tU6YQ7)
                : L > 0
                  ? E.intl.formatToPlainString(E.t.qH8uFW, { count: L })
                  : E.intl.string(E.t.YSRIqa),
        { analyticsLocations: U } = (0, u.ZP)(c.Z.CHARACTER_COUNT);
    if (!((D && L >= 0) || !M || (w && !M))) return null;
    let G = L >= 0;
    return (0, r.jsx)(u.Gt, {
        value: U,
        children: (0, r.jsxs)("div", {
            className: a()(S, b.characterCount),
            children: [
                (0, r.jsxs)("div", {
                    className: b.flairContainer,
                    children: [
                        D && G
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
                        M || k
                            ? null
                            : (0, r.jsx)(s.u, {
                                  text: j,
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
                w && !M
                    ? (0, r.jsx)(h.Z, {
                          className: b.upsell,
                          iconOnly: (null == (i = O.upsellLongMessages) ? void 0 : i.iconOnly) || !1,
                          remaining: L,
                      })
                    : null,
            ],
        }),
    });
}
