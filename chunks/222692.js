n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(430452),
    s = n(731854),
    o = n(985018);
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
function f(e) {
    a.A.supports(s.O5.VIDEO)
        ? (0, i.mMO)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (n) =>
                  (0, r.jsx)(
                      t,
                      d(c({}, n), {
                          header: o.intl.string(o.t["8jSzSe"]),
                          body: o.intl.string(o.t.bhqSWl),
                          confirmText: o.intl.string(o.t.BddRzS),
                          onConfirm: e,
                      }),
                  );
          })
        : (0, i.mMO)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (a) =>
                  (0, r.jsx)(
                      t,
                      d(c({}, a), {
                          header: o.intl.string(o.t.XLw6FF),
                          body: o.intl.string(o.t.wVjKGi),
                          confirmText: o.intl.string(o.t["BK8LK+"]),
                          onConfirm: () => {
                              null == e || e(),
                                  (0, i.mMO)(async () => {
                                      let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                          n.bind(n, 987482),
                                      );
                                      return (t) => (0, r.jsx)(e, c({ source: "Video unsupported browser" }, t));
                                  });
                          },
                      }),
                  );
          });
}
