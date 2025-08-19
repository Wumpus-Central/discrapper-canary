n.d(t, {
    $l: () => g,
    CB: () => f,
    Em: () => p,
    J9: () => x,
    ON: () => j,
    Ql: () =>
        function e(t, n) {
            if ("function" == typeof (null == t ? void 0 : t.getLayout)) {
                let n = t.getLayout().map((t) => e(t)),
                    { getLayout: i } = t,
                    r = o(
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
                                            o = Object.keys(e);
                                        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                        return l;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (i = 0; i < o.length; i++)
                                        (n = o[i]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (l[n] = e[n]);
                                }
                                return l;
                            })(t, ["getLayout"]),
                        ),
                        { layout: n },
                    );
                return n.forEach((e) => (e.parent = r)), r;
            }
            return t;
        },
    ax: () => m,
    k4: () => d,
    qs: () => b,
    so: () => s,
    vB: () => a,
    wf: () => u,
    x1: () => c,
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
function o(e, t) {
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
function r(e, t, n) {
    return o(l({}, n), {
        key: e,
        type: t,
    });
}
function s(e) {
    return r("$Root", i.J.ROOT, e);
}
function a(e, t) {
    return r(e, i.J.SECTION, t);
}
function u(e, t) {
    return r(e, i.J.PANEL, t);
}
function c(e, t) {
    return r(e, i.J.PANE, t);
}
function d(e, t) {
    return r(e, i.J.CATEGORY, t);
}
function f(e, t) {
    return r(e, i.J.ACCORDION, t);
}
function g(e, t) {
    return r(e, i.J.LIST, t);
}
function v(e, t, n) {
    return o(l({}, n), {
        key: e,
        type: t,
    });
}
function m(e, t) {
    return v(e, i.J.BUTTON, t);
}
function b(e, t) {
    return v(e, i.J.TOGGLE, t);
}
function p(e, t) {
    return v(e, i.J.SELECT, t);
}
function x(e, t) {
    return v(e, i.J.RADIO, t);
}
function j(e, t) {
    return v(e, i.J.CUSTOM, t);
}
