n.d(t, {
    $l: () => y,
    CB: () => f,
    Em: () => b,
    J9: () => T,
    ON: () => N,
    Ql: () =>
        function e(t, n) {
            if ("function" == typeof (null == t ? void 0 : t.getLayout)) {
                let n = t.getLayout().map((t) => e(t)),
                    { getLayout: r } = t,
                    o = l(
                        i(
                            {},
                            (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = {},
                                            l = Object.keys(e);
                                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++)
                                        (n = l[r]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (i[n] = e[n]);
                                }
                                return i;
                            })(t, ["getLayout"]),
                        ),
                        { layout: n },
                    );
                return n.forEach((e) => (e.parent = o)), o;
            }
            return t;
        },
    ax: () => E,
    k4: () => g,
    m7: () => u,
    qs: () => v,
    so: () => a,
    vB: () => s,
    wf: () => c,
    x1: () => d,
}),
    n(388685),
    n(415506);
var r = n(28682);
function i(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function o(e, t, n) {
    return l(i({}, n), {
        key: e,
        type: t,
    });
}
function a(e) {
    return o("$Root", r.J.ROOT, e);
}
function s(e, t) {
    return o(e, r.J.SECTION, t);
}
function u(e, t) {
    return l(i({}, t), {
        key: e,
        type: r.J.SIDEBAR_ITEM,
    });
}
function c(e, t) {
    return o(e, r.J.PANEL, t);
}
function d(e, t) {
    return o(e, r.J.PANE, t);
}
function g(e, t) {
    return o(e, r.J.CATEGORY, t);
}
function f(e, t) {
    return o(e, r.J.ACCORDION, t);
}
function y(e, t) {
    return o(e, r.J.LIST, t);
}
function O(e, t, n) {
    return l(i({}, n), {
        key: e,
        type: t,
    });
}
function E(e, t) {
    return O(e, r.J.BUTTON, t);
}
function v(e, t) {
    return O(e, r.J.TOGGLE, t);
}
function b(e, t) {
    return O(e, r.J.SELECT, t);
}
function T(e, t) {
    return O(e, r.J.RADIO, t);
}
function N(e, t) {
    return O(e, r.J.CUSTOM, t);
}
