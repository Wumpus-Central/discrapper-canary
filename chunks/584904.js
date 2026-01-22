n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(688810),
    c = n(183555),
    u = n(657331),
    d = n(946356),
    f = n(939496),
    p = n(518477),
    _ = n(996988),
    h = n(985018),
    m = n(380297);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let v = i.forwardRef(function (e, t) {
    let [n, ...i] = [e, t],
        {
            children: a,
            className: g,
            profileModalScrollTarget: b,
            onAction: A,
            onClose: v,
            "aria-label": S,
            "aria-labelledby": I,
        } = n,
        T = O(n, [
            "children",
            "className",
            "profileModalScrollTarget",
            "onAction",
            "onClose",
            "aria-label",
            "aria-labelledby",
        ]),
        [C] = i,
        { themeType: N } = (0, f.E)(),
        { analyticsLocations: R } = (0, l.Ay)(),
        { context: w } = (0, c.NJ)();
    return N === _.d.MODAL || N === _.d.MODAL_V2 || (null == w ? void 0 : w.userId) == null
        ? (0, r.jsx)("article", {
              "aria-label": S,
              "aria-labelledby": I,
              children: (0, r.jsx)(
                  d.A.Overlay,
                  y(
                      E(
                          {
                              ref: C,
                              className: s()(m.Nr, g),
                          },
                          T,
                      ),
                      {
                          children: a,
                      },
                  ),
              ),
          })
        : (0, r.jsx)("article", {
              "aria-labelledby": I,
              children: (0, r.jsx)(o.sqX, {
                  className: m.OV,
                  "aria-label": h.intl.string(h.t.pD1L1u),
                  focusProps: {
                      ringTarget: C,
                  },
                  onClick: () => {
                      null == A ||
                          A({
                              action: "PRESS_CARD",
                          }),
                          (0, u.openUserProfileModal)(
                              E(
                                  {
                                      tabSection: p.RP.ACTIVITY,
                                      sourceAnalyticsLocations: R,
                                      scrollTarget: b,
                                  },
                                  w,
                              ),
                          ),
                          null == v || v();
                  },
                  children: (0, r.jsx)(
                      d.A.Overlay,
                      y(
                          E(
                              {
                                  ref: C,
                                  className: s()(m.Nr, g),
                              },
                              T,
                          ),
                          {
                              children: a,
                          },
                      ),
                  ),
              }),
          });
});
