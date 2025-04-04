n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(502762),
    d = n(652853),
    f = n(171368),
    _ = n(228168),
    p = n(388032),
    h = n(227832);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
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
let O = i.forwardRef(function (e, t) {
    var { children: n, className: i, subsection: o, onAction: m, onClose: E } = e,
        v = y(e, ['children', 'className', 'subsection', 'onAction', 'onClose']);
    let { profileType: O } = (0, d.z)(),
        { analyticsLocations: I } = (0, l.ZP)(),
        { context: S } = (0, c.KZ)();
    return O === _.y0.FULL_SIZE || (null == S ? void 0 : S.userId) == null
        ? (0, r.jsx)(
              u.Z.Overlay,
              b(
                  g(
                      {
                          ref: t,
                          className: a()(h.card, i)
                      },
                      v
                  ),
                  { children: n }
              )
          )
        : (0, r.jsx)(s.P3F, {
              className: h.clickableContainer,
              'aria-label': p.NW.string(p.t.pD1L1t),
              onClick: () => {
                  null == m || m({ action: 'PRESS_CARD' }),
                      (0, f.openUserProfileModal)(
                          g(
                              {
                                  section: _.oh.ACTIVITY,
                                  sourceAnalyticsLocations: I,
                                  subsection: o
                              },
                              S
                          )
                      ),
                      null == E || E();
              },
              children: (0, r.jsx)(
                  u.Z.Overlay,
                  b(
                      g(
                          {
                              ref: t,
                              className: a()(h.card, i)
                          },
                          v
                      ),
                      { children: n }
                  )
              )
          });
});
