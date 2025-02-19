n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(456644),
    d = n(502762),
    f = n(652853),
    p = n(171368),
    _ = n(228168),
    h = n(388032),
    m = n(481736);
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
function v(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = i.forwardRef(function (e, t) {
    var { children: n, className: i, subsection: o, onAction: g, onClose: v } = e,
        O = y(e, ['children', 'className', 'subsection', 'onAction', 'onClose']);
    let { profileType: S } = (0, f.z)(),
        { analyticsLocations: I } = (0, l.ZP)(),
        { context: T } = (0, c.KZ)(),
        { recentActivityEnabled: N } = (0, u.i)({ location: 'UserProfileActivityCardContainer' });
    return S !== _.y0.FULL_SIZE && (null == T ? void 0 : T.userId) != null && N
        ? (0, r.jsx)(s.P3F, {
              className: m.clickableContainer,
              'aria-label': h.NW.string(h.t.pD1L1t),
              onClick: () => {
                  null == g || g({ action: 'PRESS_CARD' }),
                      (0, p.openUserProfileModal)(
                          E(
                              {
                                  section: _.oh.ACTIVITY,
                                  sourceAnalyticsLocations: I,
                                  subsection: o
                              },
                              T
                          )
                      ),
                      null == v || v();
              },
              children: (0, r.jsx)(
                  d.Z.Overlay,
                  b(
                      E(
                          {
                              ref: t,
                              className: a()(m.card, i)
                          },
                          O
                      ),
                      { children: n }
                  )
              )
          })
        : (0, r.jsx)(
              d.Z.Overlay,
              b(
                  E(
                      {
                          ref: t,
                          className: a()(m.card, i)
                      },
                      O
                  ),
                  { children: n }
              )
          );
});
