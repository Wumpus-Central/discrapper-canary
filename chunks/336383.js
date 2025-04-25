n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(892001),
    d = n(502762),
    f = n(652853),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = i.forwardRef(function (e, t) {
    var { children: n, className: i, subsection: a, onAction: m, onClose: E } = e,
        v = y(e, ['children', 'className', 'subsection', 'onAction', 'onClose']);
    let { themeType: O } = (0, f.z)(),
        { analyticsLocations: I } = (0, l.ZP)(),
        { context: S } = (0, c.KZ)();
    return O === _.lY.MODAL || O === _.lY.MODAL_V2 || (null == S ? void 0 : S.userId) == null
        ? (0, r.jsx)(
              d.Z.Overlay,
              b(
                  g(
                      {
                          ref: t,
                          className: o()(h.card, i)
                      },
                      v
                  ),
                  { children: n }
              )
          )
        : (0, r.jsx)(s.kL8, {
              className: h.clickableContainer,
              'aria-label': p.intl.string(p.t.pD1L1t),
              focusProps: { ringTarget: t },
              onClick: () => {
                  null == m || m({ action: 'PRESS_CARD' }),
                      (0, u.openUserProfileModal)(
                          g(
                              {
                                  section: _.oh.ACTIVITY,
                                  sourceAnalyticsLocations: I,
                                  subsection: a
                              },
                              S
                          )
                      ),
                      null == E || E();
              },
              children: (0, r.jsx)(
                  d.Z.Overlay,
                  b(
                      g(
                          {
                              ref: t,
                              className: o()(h.card, i)
                          },
                          v
                      ),
                      { children: n }
                  )
              )
          });
});
