n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(892001),
    d = n(502762),
    f = n(652853),
    p = n(228168),
    _ = n(671955),
    m = n(388032),
    h = n(251806);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
let S = i.forwardRef(function (e, t) {
    var {
            children: n,
            className: i,
            profileModalScrollTarget: a,
            onAction: g,
            onClose: b,
            "aria-label": v,
            "aria-labelledby": S,
        } = e,
        I = O(e, [
            "children",
            "className",
            "profileModalScrollTarget",
            "onAction",
            "onClose",
            "aria-label",
            "aria-labelledby",
        ]);
    let { themeType: T } = (0, f.z)(),
        { analyticsLocations: C } = (0, l.ZP)(),
        { context: A } = (0, c.KZ)();
    return T === _.l.MODAL || T === _.l.MODAL_V2 || (null == A ? void 0 : A.userId) == null
        ? (0, r.jsx)("article", {
              "aria-label": v,
              "aria-labelledby": S,
              children: (0, r.jsx)(
                  d.Z.Overlay,
                  y(
                      E(
                          {
                              ref: t,
                              className: o()(h.card, i),
                          },
                          I,
                      ),
                      { children: n },
                  ),
              ),
          })
        : (0, r.jsx)("article", {
              "aria-labelledby": S,
              children: (0, r.jsx)(s.kL8, {
                  className: h.clickableContainer,
                  "aria-label": m.intl.string(m.t.pD1L1u),
                  focusProps: { ringTarget: t },
                  onClick: () => {
                      null == g || g({ action: "PRESS_CARD" }),
                          (0, u.openUserProfileModal)(
                              E(
                                  {
                                      tabSection: p.oh.ACTIVITY,
                                      sourceAnalyticsLocations: C,
                                      scrollTarget: a,
                                  },
                                  A,
                              ),
                          ),
                          null == b || b();
                  },
                  children: (0, r.jsx)(
                      d.Z.Overlay,
                      y(
                          E(
                              {
                                  ref: t,
                                  className: o()(h.card, i),
                              },
                              I,
                          ),
                          { children: n },
                      ),
                  ),
              }),
          });
});
