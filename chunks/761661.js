n.d(t, {
    CZ: () => h,
    Qp: () => p,
    XG: () => f,
    dh: () => d,
    f4: () => u,
});
var i = n(812729),
    r = n.n(i),
    l = n(839214),
    a = n(652896);

function o(e) {
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
let c = (0, l.D)(() => ({
    streams: {},
}));

function u(e) {
    var t, n;
    let i = (0, a._z)(e);
    return null != (t = null == (n = c.useState((e) => e.streams, r())[i]) ? void 0 : n.zoom) ? t : 100;
}

function d(e) {
    return u(e) / 100;
}

function p(e, t) {
    let n = (0, a._z)(e);
    c.setState((e) => {
        var i;
        return s(o({}, e), {
            streams: s(o({}, e.streams), {
                [n]: {
                    zoom: t,
                    fitOverride: null == (i = e.streams[n]) ? void 0 : i.fitOverride,
                },
            }),
        });
    }, !0);
}

function h(e, t) {
    let n = (0, a._z)(e);
    c.setState((e) => {
        var i;
        return s(o({}, e), {
            streams: s(o({}, e.streams), {
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
    let n = (0, a._z)(e);
    return null == (t = c.useState((e) => e.streams, r())[n]) ? void 0 : t.fitOverride;
}
