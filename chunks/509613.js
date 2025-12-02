n.d(e, {
    $l: () => I,
    CB: () => T,
    Em: () => A,
    IC: () => E,
    J9: () => b,
    ON: () => p,
    Ql: () =>
        function t(e, n) {
            if ("function" == typeof (null == e ? void 0 : e.buildLayout)) {
                let n = e.buildLayout().map((e) => t(e)),
                    { buildLayout: i } = e,
                    s = l(
                        r(
                            {},
                            (function (t, e) {
                                if (null == t) return {};
                                var n,
                                    i,
                                    r = (function (t, e) {
                                        if (null == t) return {};
                                        var n,
                                            i,
                                            r = {},
                                            l = Object.keys(t);
                                        for (i = 0; i < l.length; i++) (n = l[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                                        return r;
                                    })(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(t);
                                    for (i = 0; i < l.length; i++)
                                        (n = l[i]),
                                            !(e.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(t, n) &&
                                                (r[n] = t[n]);
                                }
                                return r;
                            })(e, ["buildLayout"]),
                        ),
                        { layout: n },
                    );
                return n.forEach((t) => (t.parent = s)), s;
            }
            return e;
        },
    UO: () => f,
    Uc: () => g,
    ax: () => _,
    eD: () => C,
    k4: () => S,
    m7: () => o,
    qs: () => N,
    so: () => u,
    vB: () => a,
    wf: () => c,
    x1: () => d,
}),
    n(388685),
    n(415506);
var i = n(28682);
function r(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
function l(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function s(t, e, n) {
    return l(r({}, n), {
        key: t,
        type: e,
    });
}
function u(t) {
    return s("$Root", i.Jq.ROOT, t);
}
function a(t, e) {
    return s(t, i.Jq.SECTION, e);
}
function o(t, e) {
    return s(t, i.Jq.SIDEBAR_ITEM, e);
}
function c(t, e) {
    return s(t, i.Jq.PANEL, e);
}
function d(t, e) {
    return s(t, i.Jq.PANE, e);
}
function E(t, e) {
    return s(t, i.Jq.SPLIT, e);
}
function S(t, e) {
    return s(t, i.Jq.CATEGORY, e);
}
function T(t, e) {
    return s(t, i.Jq.ACCORDION, e);
}
function I(t, e) {
    return s(t, i.Jq.LIST, e);
}
function g(t, e) {
    return s(t, i.Jq.FIELD_SET, e);
}
function O(t, e, n) {
    return l(r({}, n), {
        key: t,
        type: e,
    });
}
function _(t, e) {
    return O(t, i.Jq.BUTTON, e);
}
function N(t, e) {
    return O(t, i.Jq.TOGGLE, e);
}
function f(t, e) {
    return O(t, i.Jq.SLIDER, e);
}
function A(t, e) {
    return O(t, i.Jq.SELECT, e);
}
function b(t, e) {
    return O(t, i.Jq.RADIO, e);
}
function C(t, e) {
    return O(t, i.Jq.NAVIGATOR, e);
}
function p(t, e) {
    return O(t, i.Jq.CUSTOM, e);
}
