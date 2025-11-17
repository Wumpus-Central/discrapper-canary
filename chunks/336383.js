n.d(t, { Z: () => I });
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
    _ = n(228168),
    p = n(671955),
    h = n(388032),
    m = n(704543);
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
let I = i.forwardRef(function (e, t) {
    var {
            children: n,
            className: i,
            subsection: a,
            onAction: g,
            onClose: b,
            "aria-label": v,
            "aria-labelledby": I,
        } = e,
        T = O(e, ["children", "className", "subsection", "onAction", "onClose", "aria-label", "aria-labelledby"]);
    let { themeType: S } = (0, f.z)(),
        { analyticsLocations: A } = (0, l.ZP)(),
        { context: C } = (0, c.KZ)();
    return S === p.l.MODAL || S === p.l.MODAL_V2 || (null == C ? void 0 : C.userId) == null
        ? (0, r.jsx)("article", {
              "aria-label": v,
              "aria-labelledby": I,
              children: (0, r.jsx)(
                  d.Z.Overlay,
                  y(
                      E(
                          {
                              ref: t,
                              className: o()(m.card, i),
                          },
                          T,
                      ),
                      { children: n },
                  ),
              ),
          })
        : (0, r.jsx)("article", {
              "aria-labelledby": I,
              children: (0, r.jsx)(s.kL8, {
                  className: m.clickableContainer,
                  "aria-label": h.intl.string(h.t.pD1L1u),
                  focusProps: { ringTarget: t },
                  onClick: () => {
                      null == g || g({ action: "PRESS_CARD" }),
                          (0, u.openUserProfileModal)(
                              E(
                                  {
                                      section: _.oh.ACTIVITY,
                                      sourceAnalyticsLocations: A,
                                      subsection: a,
                                  },
                                  C,
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
                                  className: o()(m.card, i),
                              },
                              T,
                          ),
                          { children: n },
                      ),
                  ),
              }),
          });
});
