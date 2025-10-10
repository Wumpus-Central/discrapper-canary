n.d(t, {
    BO: () => c,
    cq: () => h,
    gI: () => p,
    xN: () => f,
    yA: () => d,
});
var i = n(348327),
    r = n.n(i),
    l = n(972959),
    o = n(569545);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = (0, l.H)(() => ({ streams: {} }));
function c(e) {
    var t, n;
    let i = (0, o.V9)(e);
    return null != (n = null == (t = u.useState((e) => e.streams, r())[i]) ? void 0 : t.zoom) ? n : 100;
}
function d(e) {
    return c(e) / 100;
}
function h(e, t) {
    let n = (0, o.V9)(e);
    u.setState((e) => {
        var i;
        return s(a({}, e), {
            streams: s(a({}, e.streams), {
                [n]: {
                    zoom: t,
                    fitOverride: null == (i = e.streams[n]) ? void 0 : i.fitOverride,
                },
            }),
        });
    }, !0);
}
function p(e, t) {
    let n = (0, o.V9)(e);
    u.setState((e) => {
        var i;
        return s(a({}, e), {
            streams: s(a({}, e.streams), {
                [n]: {
                    zoom: null == (i = e.streams[n]) ? void 0 : i.zoom,
                    fitOverride: t,
                },
            }),
        });
    });
}
function f(e) {
    var t;
    let n = (0, o.V9)(e);
    return null == (t = u.useState((e) => e.streams, r())[n]) ? void 0 : t.fitOverride;
}
