n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(849522),
    d = n(639119),
    f = n(594174),
    p = n(74538),
    _ = n(694320),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(397415);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    var t, n, i, v;
    let { type: y, textValue: S, maxCharacterCount: I, showRemainingCharsAfterCount: T, className: N } = e,
        A = (0, a.e7)([f.default], () => p.ZP.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        C = (0, u.Z)(),
        R = null != I ? I : C,
        P = null !== (v = null != T ? T : I) && void 0 !== v ? v : C / 10,
        w = S.length,
        D = null != y.upsellLongMessages && (null != w ? w : 0) > h.J6R && A,
        x = null != y.upsellLongMessages && !A,
        L = (null === (n = (0, d.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_2,
        M = R - w,
        k = M > P,
        j = M < 0 && L,
        U = 0 === M ? g.NW.string(g.t.tU6YQ0) : M > 0 ? g.NW.formatToPlainString(g.t.qH8uFR, { count: M }) : g.NW.string(g.t.YSRIqa),
        { analyticsLocations: G } = (0, c.ZP)(l.Z.CHARACTER_COUNT);
    if (!((D && M >= 0) || !k || (x && !k))) return null;
    let B = M >= 0;
    return (0, r.jsx)(c.Gt, {
        value: G,
        children: (0, r.jsxs)('div', {
            className: o()(N, E.characterCount),
            children: [
                (0, r.jsxs)('div', {
                    className: E.flairContainer,
                    children: [
                        D && B
                            ? (0, r.jsx)(s.ua7, {
                                  text: g.NW.formatToPlainString(g.t.vcvHa2, { maxLength: R }),
                                  position: 'top',
                                  children: (e) =>
                                      (0, r.jsx)(
                                          s.SrA,
                                          b(
                                              {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: E.premiumFlair
                                              },
                                              e
                                          )
                                      )
                              })
                            : null,
                        k || j
                            ? null
                            : (0, r.jsx)(s.ua7, {
                                  text: U,
                                  position: 'top',
                                  children: (e) =>
                                      (0, r.jsx)(
                                          s.Text,
                                          O(
                                              b(
                                                  {
                                                      variant: 'text-sm/semibold',
                                                      tabularNumbers: !0,
                                                      'aria-hidden': !0
                                                  },
                                                  e
                                              ),
                                              {
                                                  color: B ? 'text-normal' : 'text-danger',
                                                  children: M
                                              }
                                          )
                                      )
                              })
                    ]
                }),
                (0, r.jsx)(s.nn4, { children: g.NW.format(g.t.qH8uFR, { count: M }) }),
                x && !k
                    ? (0, r.jsx)(_.Z, {
                          className: E.upsell,
                          iconOnly: (null === (i = y.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                          remaining: M
                      })
                    : null
            ]
        })
    });
}
