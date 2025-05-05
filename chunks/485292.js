n.d(e, { default: () => S });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(239091),
    c = n(812206),
    o = n(731646),
    u = n(283595),
    s = n(499502),
    d = n(955809),
    b = n(332845),
    p = n(78874),
    f = n(350758),
    O = n(149835),
    y = n(38346),
    g = n(683609),
    h = n(679879),
    j = n(981631),
    P = n(388032);
function v(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function I(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function Z(t) {
    let { application: e, libraryApplication: n, analyticsContext: i, onSelect: c } = t,
        o = I(v({}, null != i ? i.location : null), { object: j.qAy.CONTEXT_MENU }),
        u = (0, p.Z)(n, o),
        Z = (0, f.Z)(n),
        S = (0, y.Z)(n),
        A = (0, h.Z)(n),
        E = (0, g.Z)(n),
        m = (0, b.Z)(n, e),
        w = (0, O.Z)(n, e),
        D = (0, s.Z)(n, e),
        T = (0, d.Z)(e);
    return (0, r.jsxs)(l.v2r, {
        navId: 'game-context',
        onClose: a.Zy,
        'aria-label': P.intl.string(P.t.tKobzc),
        onSelect: c,
        children: [u, Z, S, A, E, m, w, (0, r.jsx)(l.kSQ, { children: D }), (0, r.jsx)(l.kSQ, { children: T })]
    });
}
function S(t) {
    let { applicationId: e, branchId: n } = t,
        l = (0, i.e7)([c.Z], () => c.Z.getApplication(e), [e]),
        a = (0, i.e7)([u.Z], () => (null != n ? u.Z.getLibraryApplication(e, n) : u.Z.getActiveLibraryApplication(e)), [e, n]);
    return null == l || null == a
        ? (0, r.jsx)(
              o.default,
              I(v({}, t), {
                  id: e,
                  label: P.intl.string(P.t['FfCL+/'])
              })
          )
        : (0, r.jsx)(
              Z,
              I(v({}, t), {
                  application: l,
                  libraryApplication: a
              })
          );
}
