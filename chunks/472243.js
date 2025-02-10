n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(849522),
    d = n(639119),
    f = n(594174),
    _ = n(74538),
    p = n(694320),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(483400);
function v(e) {
    var t, n, r, v;
    let { type: y, textValue: I, maxCharacterCount: T, showRemainingCharsAfterCount: b, className: S } = e,
        A = (0, s.e7)([f.default], () => _.ZP.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        N = (0, c.Z)(),
        C = null != T ? T : N,
        R = null !== (v = null != b ? b : T) && void 0 !== v ? v : N / 10,
        O = I.length,
        D = null != y.upsellLongMessages && (null != O ? O : 0) > h.J6R && A,
        L = null != y.upsellLongMessages && !A,
        x = (null === (n = (0, d.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_2,
        w = C - O,
        P = w > R,
        M = w < 0 && x,
        k = 0 === w ? g.intl.string(g.t.tU6YQ0) : w > 0 ? g.intl.formatToPlainString(g.t.qH8uFR, { count: w }) : g.intl.string(g.t.YSRIqa),
        { analyticsLocations: U } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
    if (!((D && w >= 0) || !P || (L && !P))) return null;
    let G = w >= 0;
    return (0, i.jsx)(u.Gt, {
        value: U,
        children: (0, i.jsxs)('div', {
            className: a()(S, E.characterCount),
            children: [
                (0, i.jsxs)('div', {
                    className: E.flairContainer,
                    children: [
                        D && G
                            ? (0, i.jsx)(o.ua7, {
                                  text: g.intl.formatToPlainString(g.t.vcvHa2, { maxLength: C }),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(o.SrA, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: E.premiumFlair,
                                          ...e
                                      })
                              })
                            : null,
                        P || M
                            ? null
                            : (0, i.jsx)(o.ua7, {
                                  text: k,
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/semibold',
                                          tabularNumbers: !0,
                                          'aria-hidden': !0,
                                          ...e,
                                          color: G ? 'text-normal' : 'text-danger',
                                          children: w
                                      })
                              })
                    ]
                }),
                (0, i.jsx)(o.nn4, { children: g.intl.format(g.t.qH8uFR, { count: w }) }),
                L && !P
                    ? (0, i.jsx)(p.Z, {
                          className: E.upsell,
                          iconOnly: (null === (r = y.upsellLongMessages) || void 0 === r ? void 0 : r.iconOnly) || !1,
                          remaining: w
                      })
                    : null
            ]
        })
    });
}
