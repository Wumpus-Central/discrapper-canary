n.d(e, {
    default: () => D,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(442433),
    c = n(587895),
    o = n(646938),
    u = n(189081),
    d = n(81766),
    b = n(568163),
    s = n(541202),
    p = n(288677),
    A = n(186171),
    f = n(343322),
    O = n(123065),
    g = n(282592),
    y = n(399289),
    h = n(652215),
    j = n(985018);

function v(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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

function P(t) {
    let { application: e, libraryApplication: n, analyticsContext: i, onSelect: c } = t,
        o = I(v({}, null != i ? i.location : null), {
            object: h.ZSU.CONTEXT_MENU,
        }),
        u = (0, p.A)(n, o),
        P = (0, A.A)(n),
        D = (0, O.A)(n),
        m = (0, y.A)(n),
        T = (0, g.A)(n),
        S = (0, s.A)(n, e),
        E = (0, f.A)(n, e),
        w = (0, d.A)(n, e),
        L = (0, b.A)(e);
    return (0, r.jsxs)(l.W1t, {
        navId: "game-context",
        onClose: a.Z_,
        "aria-label": j.intl.string(j.t.tKobzb),
        onSelect: c,
        children: [
            u,
            P,
            D,
            m,
            T,
            S,
            E,
            (0, r.jsx)(l.rXV, {
                children: w,
            }),
            (0, r.jsx)(l.rXV, {
                children: L,
            }),
        ],
    });
}

function D(t) {
    let { applicationId: e, branchId: n } = t,
        l = (0, i.bG)([c.A], () => c.A.getApplication(e), [e]),
        a = (0, i.bG)([u.A], () => (null != n ? u.A.getLibraryApplication(e, n) : u.A.getActiveLibraryApplication(e)), [
            e,
            n,
        ]);
    return null == l || null == a
        ? (0, r.jsx)(
              o.default,
              I(v({}, t), {
                  id: e,
                  label: j.intl.string(j.t["FfCL+6"]),
              }),
          )
        : (0, r.jsx)(
              P,
              I(v({}, t), {
                  application: l,
                  libraryApplication: a,
              }),
          );
}
