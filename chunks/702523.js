n.d(t, { L: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(51025),
    o = n(850840),
    s = n(391690);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t, l, u, f) {
    let _ = s.Z.getInstallationPath(e.id, t),
        p = null != e.eulaId && !o.Z.hasAcceptedEULA(e.eulaId);
    null == _ || p
        ? (0, i.ZDy)(async () => {
              let { default: i } = await n.e("226").then(n.bind(n, 472064));
              return (n) =>
                  (0, r.jsx)(
                      i,
                      d(c({}, n), {
                          applicationId: e.id,
                          branchId: t,
                          analyticsLocation: f,
                      }),
                  );
          })
        : (0, a.LO)({
              application: e,
              branchId: t,
              buildId: l,
              manifestIds: u,
              installationPath: _,
              analyticsLocation: f,
          });
}
