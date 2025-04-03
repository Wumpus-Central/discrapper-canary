n.d(t, { default: () => N });
var r = n(200651);
n(192379);
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
function v(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let { application: t, libraryApplication: n, analyticsContext: i, onSelect: c } = e,
        o = I(v({}, null != i ? i.location : null), { object: j.qAy.CONTEXT_MENU }),
        u = (0, p.Z)(n, o),
        Z = (0, f.Z)(n),
        N = (0, y.Z)(n),
        S = (0, h.Z)(n),
        A = (0, g.Z)(n),
        E = (0, b.Z)(n, t),
        m = (0, O.Z)(n, t),
        w = (0, s.Z)(n, t),
        D = (0, d.Z)(t);
    return (0, r.jsxs)(l.v2r, {
        navId: 'game-context',
        onClose: a.Zy,
        'aria-label': P.NW.string(P.t.tKobzc),
        onSelect: c,
        children: [u, Z, N, S, A, E, m, (0, r.jsx)(l.kSQ, { children: w }), (0, r.jsx)(l.kSQ, { children: D })]
    });
}
function N(e) {
    let { applicationId: t, branchId: n } = e,
        l = (0, i.e7)([c.Z], () => c.Z.getApplication(t), [t]),
        a = (0, i.e7)([u.Z], () => (null != n ? u.Z.getLibraryApplication(t, n) : u.Z.getActiveLibraryApplication(t)), [t, n]);
    return null == l || null == a
        ? (0, r.jsx)(
              o.default,
              I(v({}, e), {
                  id: t,
                  label: P.NW.string(P.t['FfCL+/'])
              })
          )
        : (0, r.jsx)(
              Z,
              I(v({}, e), {
                  application: l,
                  libraryApplication: a
              })
          );
}
