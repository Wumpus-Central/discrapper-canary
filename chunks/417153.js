n.d(t, {
    CF: () => u,
    Es: () => c,
    z5: () => d
}),
    n(47120);
var r = n(230383),
    i = n(731965);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = (0, r.U)(() => ({
    currentToast: null,
    queuedToasts: []
}));
function u(e) {
    (0, i.j)(() => {
        c.setState((t) =>
            null != t.currentToast
                ? l(a({}, t), {
                      queuedToasts: [...t.queuedToasts, e]
                  })
                : {
                      currentToast: e,
                      queuedToasts: []
                  }
        );
    });
}
function d() {
    (0, i.j)(() => {
        c.setState((e) => {
            let t = e.queuedToasts;
            return t.length > 0
                ? {
                      currentToast: t[0],
                      queuedToasts: t.slice(1)
                  }
                : {
                      currentToast: null,
                      queuedToasts: []
                  };
        });
    });
}
