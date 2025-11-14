n.d(e, {
    $l: () => I,
    CB: () => d,
    Em: () => f,
    IC: () => S,
    J9: () => Z,
    ON: () => C,
    Ql: () =>
        function t(e, n) {
            if ("function" == typeof (null == e ? void 0 : e.buildLayout)) {
                let n = e.buildLayout().map((e) => t(e)),
                    { buildLayout: i } = e,
                    r = u(
                        l(
                            {},
                            (function (t, e) {
                                if (null == t) return {};
                                var n,
                                    i,
                                    l = (function (t, e) {
                                        if (null == t) return {};
                                        var n,
                                            i,
                                            l = {},
                                            u = Object.keys(t);
                                        for (i = 0; i < u.length; i++) (n = u[i]), e.indexOf(n) >= 0 || (l[n] = t[n]);
                                        return l;
                                    })(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var u = Object.getOwnPropertySymbols(t);
                                    for (i = 0; i < u.length; i++)
                                        (n = u[i]),
                                            !(e.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(t, n) &&
                                                (l[n] = t[n]);
                                }
                                return l;
                            })(e, ["buildLayout"]),
                        ),
                        { layout: n },
                    );
                return n.forEach((t) => (t.parent = r)), r;
            }
            return e;
        },
    UO: () => A,
    Uc: () => O,
    ax: () => _,
    eD: () => L,
    k4: () => T,
    m7: () => o,
    qs: () => N,
    so: () => s,
    vB: () => a,
    wf: () => c,
    x1: () => E,
}),
    n(388685),
    n(415506);
var i = n(28682);
function l(t) {
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
function u(t, e) {
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
function r(t, e, n) {
    return u(l({}, n), {
        key: t,
        type: e,
    });
}
function s(t) {
    return r("$Root", i.Jq.ROOT, t);
}
function a(t, e) {
    return r(t, i.Jq.SECTION, e);
}
function o(t, e) {
    return r(t, i.Jq.SIDEBAR_ITEM, e);
}
function c(t, e) {
    return r(t, i.Jq.PANEL, e);
}
function E(t, e) {
    return r(t, i.Jq.PANE, e);
}
function S(t, e) {
    return r(t, i.Jq.SPLIT, e);
}
function T(t, e) {
    return r(t, i.Jq.CATEGORY, e);
}
function d(t, e) {
    return r(t, i.Jq.ACCORDION, e);
}
function I(t, e) {
    return r(t, i.Jq.LIST, e);
}
function O(t, e) {
    return r(t, i.Jq.FIELD_SET, e);
}
function g(t, e, n) {
    return u(l({}, n), {
        key: t,
        type: e,
    });
}
function _(t, e) {
    return g(t, i.Jq.BUTTON, e);
}
function N(t, e) {
    return g(t, i.Jq.TOGGLE, e);
}
function A(t, e) {
    return g(t, i.Jq.SLIDER, e);
}
function f(t, e) {
    return g(t, i.Jq.SELECT, e);
}
function Z(t, e) {
    return g(t, i.Jq.RADIO, e);
}
function L(t, e) {
    return g(t, i.Jq.NAVIGATOR, e);
}
function C(t, e) {
    return g(t, i.Jq.CUSTOM, e);
}
