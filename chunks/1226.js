n.d(t, {
    BO: () => u,
    cq: () => p,
    gI: () => h,
    xN: () => f,
    yA: () => d
});
var i = n(348327),
    r = n.n(i),
    o = n(972959),
    l = n(569545);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let c = (0, o.H)(() => ({ streams: {} }));
function u(e) {
    var t, n;
    let i = (0, l.V9)(e);
    return null != (n = null == (t = c.useState((e) => e.streams, r())[i]) ? void 0 : t.zoom) ? n : 100;
}
function d(e) {
    return u(e) / 100;
}
function p(e, t) {
    let n = (0, l.V9)(e);
    c.setState((e) => {
        var i;
        return s(a({}, e), {
            streams: s(a({}, e.streams), {
                [n]: {
                    zoom: t,
                    fitOverride: null == (i = e.streams[n]) ? void 0 : i.fitOverride
                }
            })
        });
    }, !0);
}
function h(e, t) {
    let n = (0, l.V9)(e);
    c.setState((e) => {
        var i;
        return s(a({}, e), {
            streams: s(a({}, e.streams), {
                [n]: {
                    zoom: null == (i = e.streams[n]) ? void 0 : i.zoom,
                    fitOverride: t
                }
            })
        });
    });
}
function f(e) {
    var t;
    let n = (0, l.V9)(e);
    return null == (t = c.useState((e) => e.streams, r())[n]) ? void 0 : t.fitOverride;
}
