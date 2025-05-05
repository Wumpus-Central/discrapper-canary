n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(209698),
    d = n(892001),
    f = n(502762),
    _ = n(652853),
    p = n(228168),
    h = n(388032),
    m = n(227832);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = i.forwardRef(function (e, t) {
    var { children: n, className: i, subsection: o, onAction: g, onClose: b } = e,
        v = O(e, ['children', 'className', 'subsection', 'onAction', 'onClose']);
    let { themeType: I } = (0, _.z)(),
        { analyticsLocations: S } = (0, l.ZP)(),
        { context: T } = (0, c.KZ)(),
        A = (0, u.b)({ location: 'UserProfileActivityCardContainer' });
    return I === p.lY.MODAL || I === p.lY.MODAL_V2 || (null == T ? void 0 : T.userId) == null || A
        ? (0, r.jsx)(
              f.Z.Overlay,
              y(
                  E(
                      {
                          ref: t,
                          className: a()(m.card, i)
                      },
                      v
                  ),
                  { children: n }
              )
          )
        : (0, r.jsx)(s.kL8, {
              className: m.clickableContainer,
              'aria-label': h.intl.string(h.t.pD1L1t),
              focusProps: { ringTarget: t },
              onClick: () => {
                  null == g || g({ action: 'PRESS_CARD' }),
                      (0, d.openUserProfileModal)(
                          E(
                              {
                                  section: p.oh.ACTIVITY,
                                  sourceAnalyticsLocations: S,
                                  subsection: o
                              },
                              T
                          )
                      ),
                      null == b || b();
              },
              children: (0, r.jsx)(
                  f.Z.Overlay,
                  y(
                      E(
                          {
                              ref: t,
                              className: a()(m.card, i)
                          },
                          v
                      ),
                      { children: n }
                  )
              )
          });
});
