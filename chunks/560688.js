n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(131951),
    a = n(65154),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
function f(e) {
    o.Z.supports(a.AN.VIDEO)
        ? (0, i.ZDy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (n) =>
                  (0, r.jsx)(
                      t,
                      d(c({}, n), {
                          header: s.NW.string(s.t['8jSzSU']),
                          body: s.NW.string(s.t.bhqSWl),
                          confirmText: s.NW.string(s.t.BddRzc),
                          onConfirm: e
                      })
                  );
          })
        : (0, i.ZDy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (o) =>
                  (0, r.jsx)(
                      t,
                      d(c({}, o), {
                          header: s.NW.string(s.t.XLw6FB),
                          body: s.NW.string(s.t.wVjKGh),
                          confirmText: s.NW.string(s.t.BK8LKy),
                          onConfirm: () => {
                              null == e || e(),
                                  (0, i.ZDy)(async () => {
                                      let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                      return (t) => (0, r.jsx)(e, c({ source: 'Video unsupported browser' }, t));
                                  });
                          }
                      })
                  );
          });
}
