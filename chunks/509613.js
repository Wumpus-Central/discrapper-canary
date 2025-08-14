n.d(t, {
    $l: () => f,
    CB: () => d,
    Em: () => b,
    J9: () => x,
    ON: () => j,
    Ql: () =>
        function e(t, n) {
            if ("function" == typeof (null == t ? void 0 : t.getLayout)) {
                let n = t.getLayout().map((t) => e(t)),
                    { getLayout: i } = t,
                    o = s(
                        l(
                            {},
                            (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    l = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            i,
                                            l = {},
                                            s = Object.keys(e);
                                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                        return l;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var s = Object.getOwnPropertySymbols(e);
                                    for (i = 0; i < s.length; i++)
                                        (n = s[i]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (l[n] = e[n]);
                                }
                                return l;
                            })(t, ["getLayout"]),
                        ),
                        { layout: n },
                    );
                return n.forEach((e) => (e.parent = o)), o;
            }
            return t;
        },
    ax: () => m,
    k4: () => c,
    qs: () => v,
    so: () => r,
    wf: () => a,
    x1: () => u,
}),
    n(388685),
    n(415506);
var i = n(28682);
function l(e) {
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
function o(e, t, n) {
    return s(l({}, n), {
        key: e,
        type: t,
    });
}
function r(e) {
    return o("$Root", i.J.ROOT, e);
}
function a(e, t) {
    return o(e, i.J.PANEL, t);
}
function u(e, t) {
    return o(e, i.J.PANE, t);
}
function c(e, t) {
    return o(e, i.J.CATEGORY, t);
}
function d(e, t) {
    return o(e, i.J.ACCORDION, t);
}
function f(e, t) {
    return o(e, i.J.LIST, t);
}
function g(e, t, n) {
    return s(l({}, n), {
        key: e,
        type: t,
    });
}
function m(e, t) {
    return g(e, i.J.BUTTON, t);
}
function v(e, t) {
    return g(e, i.J.TOGGLE, t);
}
function b(e, t) {
    return g(e, i.J.SELECT, t);
}
function x(e, t) {
    return g(e, i.J.RADIO, t);
}
function j(e, t) {
    return g(e, i.J.CUSTOM, t);
}
