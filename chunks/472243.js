(n.d(t, { Z: () => S }), n(704826), n(35282));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(849522),
    d = n(639119),
    f = n(594174),
    _ = n(74538),
    p = n(694320),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(317727);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = /<(a?):(\w+):(\d+)>/g,
    T = (e) => e.replace(I, 'x').length;
function S(e) {
    var t, n, i, b;
    let { type: O, textValue: I, maxCharacterCount: S, showRemainingCharsAfterCount: A, className: N, parseCustomEmojisForCharCount: C } = e,
        R = (0, o.e7)([f.default], () => _.ZP.canUseIncreasedMessageLength(f.default.getCurrentUser())),
        P = (0, u.Z)(),
        w = null != S ? S : P,
        D = null != (b = null != A ? A : S) ? b : P / 10,
        L = C ? T(I) : I.length,
        x = null != O.upsellLongMessages && (null != L ? L : 0) > h.J6R && R,
        M = null != O.upsellLongMessages && !R,
        k = (null == (n = (0, d.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === m.Si.TIER_2,
        j = w - L,
        U = j > D,
        G = j < 0 && k,
        B = 0 === j ? g.intl.string(g.t.tU6YQ0) : j > 0 ? g.intl.formatToPlainString(g.t.qH8uFR, { count: j }) : g.intl.string(g.t.YSRIqa),
        { analyticsLocations: V } = (0, c.ZP)(l.Z.CHARACTER_COUNT);
    if (!((x && j >= 0) || !U || (M && !U))) return null;
    let F = j >= 0;
    return (0, r.jsx)(c.Gt, {
        value: V,
        children: (0, r.jsxs)('div', {
            className: a()(N, E.characterCount),
            children: [
                (0, r.jsxs)('div', {
                    className: E.flairContainer,
                    children: [
                        x && F
                            ? (0, r.jsx)(s.ua7, {
                                  text: g.intl.formatToPlainString(g.t.vcvHa2, { maxLength: w }),
                                  position: 'top',
                                  children: (e) =>
                                      (0, r.jsx)(
                                          s.SrA,
                                          y(
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
                        U || G
                            ? null
                            : (0, r.jsx)(s.ua7, {
                                  text: B,
                                  position: 'top',
                                  children: (e) =>
                                      (0, r.jsx)(
                                          s.Text,
                                          v(
                                              y(
                                                  {
                                                      variant: 'text-sm/semibold',
                                                      tabularNumbers: !0,
                                                      'aria-hidden': !0
                                                  },
                                                  e
                                              ),
                                              {
                                                  color: F ? 'text-default' : 'text-danger',
                                                  children: j
                                              }
                                          )
                                      )
                              })
                    ]
                }),
                (0, r.jsx)(s.nn4, { children: g.intl.format(g.t.qH8uFR, { count: j }) }),
                M && !U
                    ? (0, r.jsx)(p.Z, {
                          className: E.upsell,
                          iconOnly: (null == (i = O.upsellLongMessages) ? void 0 : i.iconOnly) || !1,
                          remaining: j
                      })
                    : null
            ]
        })
    });
}
