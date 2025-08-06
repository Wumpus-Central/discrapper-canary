n.d(t, {
    CB: () => u,
    Em: () => m,
    ax: () => d,
    k4: () => c,
    qs: () => f,
    so: () => r,
    wf: () => s,
}),
    n(388685),
    n(415506);
var i = n(28682);
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
function l(e, t) {
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
function a(e) {
    for (let t of e.layout) t.parent = e;
}
function r(e) {
    let t = l(o({}, e), {
        key: "$Root",
        type: i.J.ROOT,
    });
    a(t);
    let n = new Map(),
        r = (e) => {
            let t = n.get(e.key);
            if (null != t && !Object.is(t, e))
                throw Error("Duplicate key '".concat(e.key, "' is defined twice in this settings graph"));
            if ((n.set(e.key, e), "layout" in e)) for (let t of e.layout) r(t);
        };
    return r(t), t;
}
function s(e, t) {
    let n = l(o({}, t), {
        key: e,
        type: i.J.PANEL,
    });
    return a(n), n;
}
function c(e, t) {
    let n = l(o({}, t), {
        key: e,
        type: i.J.CATEGORY,
    });
    return a(n), n;
}
function u(e, t) {
    let n = l(o({}, t), {
        key: e,
        type: i.J.ACCORDION,
    });
    return a(n), n;
}
function d(e, t) {
    return l(o({}, t), {
        key: e,
        type: i.J.BUTTON,
    });
}
function f(e, t) {
    return l(o({}, t), {
        key: e,
        type: i.J.TOGGLE,
    });
}
function m(e, t) {
    return l(o({}, t), {
        key: e,
        type: i.J.SELECT,
    });
}
